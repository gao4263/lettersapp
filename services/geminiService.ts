import { GoogleGenAI, Modality } from "@google/genai";
import { PronunciationResult } from "../types";

let outputAudioContext: AudioContext | null = null;

const decode = (base64: string) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

const decodeAudioData = async (
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> => {
  // Simple fallback for raw PCM if headerless, though Gemini usually sends standard format with headers
  // For Gemini 2.5 TTS, it often returns raw PCM data.
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
};

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      // remove data:audio/xyz;base64, prefix
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const playGeminiTTS = async (text: string, voiceName: 'Kore' | 'Puck' = 'Puck'): Promise<void> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("No API KEY found. Falling back to browser TTS.");
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slower for kids
      window.speechSynthesis.speak(utterance);
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using a kid-friendly voice config
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName },
            },
        },
      },
    });

    if (!outputAudioContext) {
      outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
    }

    // Resume context if suspended (browser autoplay policy)
    if (outputAudioContext.state === 'suspended') {
      await outputAudioContext.resume();
    }

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    if (!base64Audio) {
      throw new Error("No audio data received");
    }

    const audioBuffer = await decodeAudioData(
      decode(base64Audio),
      outputAudioContext,
      24000,
      1,
    );

    const source = outputAudioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(outputAudioContext.destination);
    source.start();

    return new Promise((resolve) => {
        source.onended = () => resolve();
    });

  } catch (error) {
    console.error("Gemini TTS Error:", error);
    // Fallback to browser TTS on error
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
};

export const evaluatePronunciation = async (audioBlob: Blob, targetWord: string): Promise<PronunciationResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    // Simulated response if no API key
    return new Promise(resolve => setTimeout(() => resolve({
      score: 3,
      feedback: "Good try! (Simulated mode)"
    }), 1000));
  }

  const ai = new GoogleGenAI({ apiKey });
  const base64Audio = await blobToBase64(audioBlob);

  const prompt = `
    I am a 5-year-old child learning English. I just tried to say the word "${targetWord}". 
    Listen to my pronunciation.
    1. Give me a score from 1 to 3 (1 = Keep trying, 2 = Good job, 3 = Amazing!).
    2. Give me a very short, simple, encouraging feedback sentence (max 6 words).
    
    Return pure JSON format:
    { "score": number, "feedback": "string" }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: {
        parts: [
          { 
            inlineData: { 
              mimeType: audioBlob.type || 'audio/webm', 
              data: base64Audio 
            } 
          },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text || "{}";
    const result = JSON.parse(text);
    return {
      score: result.score || 2,
      feedback: result.feedback || "Good job!"
    };
  } catch (error) {
    console.error("Evaluation Error:", error);
    return { score: 2, feedback: "Nice effort! Try again." };
  }
};