import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const words = text.split(' ');
  
  useEffect(() => {
    // Reset the text when the input changes
    setDisplayedText([]);
    
    let wordIndex = 0;
    const timer = setInterval(() => {
      if (wordIndex < words.length) {
        setDisplayedText(prev => [...prev, words[wordIndex]]);
        wordIndex++;
      } else {
        clearInterval(timer);
      }
    }, 300); // Time between words
    
    return () => clearInterval(timer);
  }, [text]);
  
  // Join with spaces and add a blinking cursor at the end if not complete
  const isComplete = displayedText.length === words.length;
  
  return (
    <p className="text-left text-lg leading-relaxed text-white">
      {displayedText.map((word, index) => (
        <span key={index} className="animate-fadeIn mr-1 inline-block">
          {word}
        </span>
      ))}
      {!isComplete && (
        <span className="inline-block h-4 w-2 animate-pulse bg-pink-400"></span>
      )}
    </p>
  );
};

export default TypewriterText;