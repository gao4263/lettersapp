import React, { useState, useRef } from 'react';
import { ModuleType, PhonicsItem, WordExample, PronunciationResult } from './types';
import { LETTER_DATA, COMBO_DATA, IPA_DATA } from './constants';
import { playGeminiTTS, evaluatePronunciation } from './services/geminiService';
import { Button } from './components/Button';
import { ArrowLeft, Volume2, BookOpen, Music, Star, Mic, Square, Loader2, RefreshCw } from 'lucide-react';

// --- Sub-components ---

const Header: React.FC<{ 
  title: string; 
  onBack?: () => void 
}> = ({ title, onBack }) => (
  <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b-4 border-green-200 p-4 flex items-center justify-between shadow-sm">
    <div className="flex items-center">
      {onBack && (
        <Button variant="ghost" onClick={onBack} className="mr-2 !rounded-full !p-2">
          <ArrowLeft size={32} className="text-green-600" />
        </Button>
      )}
      <h1 className="text-2xl md:text-3xl font-bold text-green-700 tracking-wide">{title}</h1>
    </div>
    <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-yellow-500 animate-pulse">
      <Star size={20} className="text-yellow-700 fill-current" />
    </div>
  </header>
);

const ModuleCard: React.FC<{
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  onClick: () => void;
}> = ({ title, description, color, icon, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} w-full p-6 rounded-3xl shadow-[0_8px_0_0_rgba(0,0,0,0.15)] text-left hover:brightness-110 active:scale-95 active:shadow-none active:translate-y-2 transition-all flex items-center`}
  >
    <div className="bg-white/30 p-4 rounded-2xl mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <p className="text-white/90 font-medium text-sm">{description}</p>
    </div>
  </button>
);

const GridView: React.FC<{
  items: PhonicsItem[];
  colorTheme: string;
  onSelect: (item: PhonicsItem) => void;
}> = ({ items, colorTheme, onSelect }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onSelect(item)}
        className={`bg-white border-b-4 ${colorTheme} rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-sm hover:shadow-md transition-all active:scale-95`}
      >
        <span className="text-4xl md:text-5xl font-bold text-gray-700 mb-2">{item.symbol}</span>
        {item.name && <span className="text-xs text-gray-400 font-medium">{item.name}</span>}
      </button>
    ))}
  </div>
);

const DetailView: React.FC<{
  item: PhonicsItem;
  onBack: () => void;
}> = ({ item, onBack }) => {
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  
  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recordResult, setRecordResult] = useState<PronunciationResult | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handlePlaySound = async (text: string, isMain: boolean = false) => {
    if (playingWord) return; // Prevent overlapping
    setPlayingWord(text);
    
    // For main symbol, we read the descriptive prompt. For words, we just say the word.
    const textToRead = isMain ? item.soundPrompt : text;
    
    await playGeminiTTS(textToRead, isMain ? 'Puck' : 'Kore');
    setPlayingWord(null);
  };

  const startRecording = async () => {
    setRecordResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        setIsAnalyzing(true);
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        // For simplicity, let's analyze the MAIN SYMBOL pronunciation.
        const result = await evaluatePronunciation(audioBlob, item.symbol);
        setRecordResult(result);
        setIsAnalyzing(false);
        
        // Stop all tracks to release mic
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Oops! We need microphone access to hear you.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Header title={item.name || item.symbol} onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        {/* Main Character Display */}
        <div className="bg-white rounded-3xl p-8 mb-6 shadow-lg border-b-8 border-blue-100 flex flex-col items-center justify-center relative overflow-hidden">
           {/* Decorative Background Circles */}
           <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full"></div>
           <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-50 rounded-full"></div>

           <div className="z-10 text-center w-full">
              <div 
                onClick={() => handlePlaySound(item.symbol, true)}
                className="cursor-pointer group transform transition-transform hover:scale-110 active:scale-95 inline-block"
              >
                <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500 drop-shadow-sm mb-4">
                  {item.symbol}
                </h1>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-lg group-hover:bg-blue-200 transition-colors">
                  <Volume2 size={24} className={playingWord === item.symbol ? "animate-bounce" : ""} />
                  Tap to Listen
                </div>
              </div>
              
              {item.description && (
                 <div className="mt-6 bg-gray-50 p-4 rounded-xl border border-gray-100 max-w-md mx-auto">
                    <p className="text-gray-500 font-medium">🗣️ {item.description}</p>
                 </div>
              )}

              {/* Recording Section */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center">
                <h3 className="text-gray-400 font-bold uppercase text-sm tracking-wider mb-4">Your Turn! Say "{item.symbol}"</h3>
                
                {!isAnalyzing && !recordResult && (
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`
                      w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-lg
                      ${isRecording 
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse ring-4 ring-red-200' 
                        : 'bg-green-500 hover:bg-green-600 ring-4 ring-green-200 hover:scale-105 active:scale-95'}
                    `}
                  >
                    {isRecording ? <Square size={32} className="text-white fill-current" /> : <Mic size={36} className="text-white" />}
                  </button>
                )}

                {isAnalyzing && (
                  <div className="flex flex-col items-center animate-pulse">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                       <Loader2 size={40} className="text-blue-500 animate-spin" />
                    </div>
                    <span className="text-blue-500 font-bold">Listening...</span>
                  </div>
                )}

                {recordResult && (
                  <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                     <div className="flex items-center gap-1 mb-2">
                       {[...Array(3)].map((_, i) => (
                         <Star 
                           key={i} 
                           size={32} 
                           className={`${i < recordResult.score ? 'text-yellow-400 fill-current' : 'text-gray-200'} transition-all`} 
                         />
                       ))}
                     </div>
                     <p className="text-xl font-bold text-gray-700 mb-3 text-center px-4">"{recordResult.feedback}"</p>
                     <Button 
                       variant="ghost" 
                       size="sm" 
                       onClick={() => setRecordResult(null)}
                       icon={<RefreshCw size={16} />}
                     >
                       Try Again
                     </Button>
                  </div>
                )}
              </div>

           </div>
        </div>

        {/* Examples Grid */}
        <h2 className="text-xl font-bold text-gray-700 mb-4 px-2 flex items-center gap-2">
          <BookOpen size={24} className="text-green-500" />
          Words with {item.symbol}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {item.examples.map((ex, idx) => (
            <div 
              key={idx}
              onClick={() => handlePlaySound(ex.word)}
              className={`
                bg-white rounded-2xl p-3 shadow-md border-b-4 border-gray-200 
                cursor-pointer transition-all hover:-translate-y-1 hover:border-blue-300
                flex flex-col items-center
                ${playingWord === ex.word ? 'ring-4 ring-blue-200' : ''}
              `}
            >
              <div className="w-full aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden relative">
                <img src={ex.image} alt={ex.word} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-2 right-2 bg-white/80 p-1.5 rounded-full shadow-sm backdrop-blur-sm">
                   <Volume2 size={16} className="text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{ex.word}</h3>
              <p className="text-gray-400 font-mono text-sm">{ex.phonetic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [currentModule, setCurrentModule] = useState<ModuleType | null>(null);
  const [selectedItem, setSelectedItem] = useState<PhonicsItem | null>(null);

  // Home Screen
  if (!currentModule) {
    return (
      <div className="min-h-screen bg-green-50 p-6 flex flex-col max-w-3xl mx-auto">
        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="text-center mb-8">
             <h1 className="text-4xl font-black text-green-600 mb-2">Little Phonics</h1>
             <p className="text-green-800 font-medium">Let's learn sounds together!</p>
          </div>

          <ModuleCard 
            title="ABC Letters" 
            description="Learn A to Z sounds & words"
            color="bg-red-400"
            icon={<span className="text-3xl font-black text-red-400">Aa</span>}
            onClick={() => setCurrentModule(ModuleType.LETTERS)}
          />

          <ModuleCard 
            title="Letter Combos" 
            description="Sh, Ch, Th and more!"
            color="bg-blue-400"
            icon={<span className="text-3xl font-black text-blue-400">sh</span>}
            onClick={() => setCurrentModule(ModuleType.COMBINATIONS)}
          />

          <ModuleCard 
            title="Fun Sounds (IPA)" 
            description="Master the secret codes"
            color="bg-purple-400"
            icon={<Music className="text-purple-400" size={32} />}
            onClick={() => setCurrentModule(ModuleType.IPA)}
          />
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-8">
          Designed for Ages 3-8 • Powered by Gemini AI
        </div>
      </div>
    );
  }

  // List View (Grid)
  if (!selectedItem) {
    let data: PhonicsItem[] = [];
    let title = "";
    let colorTheme = "";

    switch (currentModule) {
      case ModuleType.LETTERS:
        data = LETTER_DATA;
        title = "Alphabet";
        colorTheme = "border-red-200";
        break;
      case ModuleType.COMBINATIONS:
        data = COMBO_DATA;
        title = "Combinations";
        colorTheme = "border-blue-200";
        break;
      case ModuleType.IPA:
        data = IPA_DATA;
        title = "Sound Symbols";
        colorTheme = "border-purple-200";
        break;
    }

    return (
      <div className="min-h-screen bg-gray-50 max-w-4xl mx-auto flex flex-col">
        <Header title={title} onBack={() => setCurrentModule(null)} />
        <GridView 
          items={data} 
          colorTheme={colorTheme}
          onSelect={setSelectedItem} 
        />
      </div>
    );
  }

  // Detail View
  return (
    <div className="min-h-screen bg-blue-50 max-w-4xl mx-auto">
      <DetailView 
        item={selectedItem} 
        onBack={() => setSelectedItem(null)} 
      />
    </div>
  );
}