import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface QuoteDisplayProps {
  quote: string;
}

const QuoteDisplay = ({ quote }: QuoteDisplayProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay before showing the quote for a nice fade-in effect
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, [quote]);

  return (
    <div className={`max-w-2xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mb-6 flex justify-center">
        <Heart className="h-12 w-12 text-pink-500" fill="#ec4899" />
      </div>
      
      <h1 className="mb-8 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
        For Someone Special
      </h1>
      
      <div className="relative rounded-lg bg-black bg-opacity-40 p-6 backdrop-blur-md">
        <p className="text-xl leading-relaxed text-white md:text-2xl">{quote}</p>
        
        <div className="mt-4 flex justify-end opacity-70">
          <p className="italic">- From someone who cherishes you</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;