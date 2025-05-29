import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Shuffle } from 'lucide-react';
import { getRandomShayari } from '../data/shayaris';
import TypewriterText from './TypewriterText';

interface ShayariDisplayProps {
  onBack: () => void;
}

const ShayariDisplay = ({ onBack }: ShayariDisplayProps) => {
  const [currentShayari, setCurrentShayari] = useState(getRandomShayari());
  const [isChanging, setIsChanging] = useState(false);
  const [key, setKey] = useState(0); // Used to reset the typewriter effect

  const handleNextShayari = () => {
    setIsChanging(true);
    
    setTimeout(() => {
      setCurrentShayari(getRandomShayari());
      setKey(prev => prev + 1);
      setIsChanging(false);
    }, 500);
  };

  useEffect(() => {
    // Set initial shayari
    setCurrentShayari(getRandomShayari());
  }, []);

  return (
    <div className="max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center rounded-full bg-black bg-opacity-40 p-3 text-white transition-all hover:bg-opacity-60 focus:outline-none"
          aria-label="Back to quote"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        
        <Heart className="h-8 w-8 text-pink-500" fill="#ec4899" />
        
        <button 
          onClick={handleNextShayari}
          className="flex items-center rounded-full bg-black bg-opacity-40 p-3 text-white transition-all hover:bg-opacity-60 focus:outline-none"
          aria-label="Show another shayari"
        >
          <Shuffle className="h-5 w-5" />
        </button>
      </div>
      
      <div className={`relative rounded-lg bg-black bg-opacity-40 p-8 backdrop-blur-md transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
          {currentShayari.category}
        </h2>
        
        <div className="min-h-[180px] text-center">
          <TypewriterText key={key} text={currentShayari.text} />
        </div>
      </div>
    </div>
  );
};

export default ShayariDisplay;