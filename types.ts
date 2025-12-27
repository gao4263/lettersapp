export enum ModuleType {
  LETTERS = 'LETTERS',
  COMBINATIONS = 'COMBINATIONS',
  IPA = 'IPA'
}

export interface WordExample {
  word: string;
  phonetic: string;
  image: string; // URL placeholder
}

export interface PhonicsItem {
  id: string;
  symbol: string; // The main display (e.g., 'A', 'sh', '/i:/')
  name?: string; // e.g., "Big A", "Short i"
  category?: string; // Vowel, Consonant
  description?: string; // For IPA: Mouth shape description
  soundPrompt: string; // Text to send to TTS engine (e.g., "The sound of letter A is ae")
  examples: WordExample[];
}

export interface AudioState {
  isPlaying: boolean;
  currentText: string | null;
}

export interface PronunciationResult {
  score: 1 | 2 | 3;
  feedback: string;
}
