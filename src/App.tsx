import { useState, useEffect } from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import QuoteDisplay from './components/QuoteDisplay';
import ShayariDisplay from './components/ShayariDisplay';
import { getRandomQuote } from './data/quotes';

function App() {
  const [showShayari, setShowShayari] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  
  // Update quote when the page loads and refreshes
  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-white">
      <GalaxyBackground />
      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
        {!showShayari ? (
          <>
            <QuoteDisplay quote={currentQuote} />
            <button
              onClick={() => setShowShayari(true)}
              className="mt-12 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            >
              Show Shayari
            </button>
          </>
        ) : (
          <ShayariDisplay onBack={() => setShowShayari(false)} />
        )}
      </div>
    </div>
  );
}

export default App;