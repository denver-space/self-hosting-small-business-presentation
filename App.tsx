import React, { useState, useCallback, useEffect } from 'react';
import { SLIDES_DATA } from './constants';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES_DATA.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3" style={{ animationDelay: '-5s' }}></div>

      <div className="relative z-10 flex flex-col h-screen antialiased text-black">
        <header className="p-4 md:p-6 flex-shrink-0">
          <h1 className="text-2xl md:text-3xl text-center">Self-Hosting Your Small Business Infrastructure</h1>
          <ProgressBar total={SLIDES_DATA.length} current={currentSlideIndex + 1} />
        </header>

        <main className="flex-grow flex items-center justify-center p-4 md:p-6 min-h-0">
          <div className="w-full max-w-4xl h-full relative overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
            >
              {SLIDES_DATA.map((slide, index) => {
                // Custom image mapping to account for new slides
                const imageMap: { [key: number]: number | string | undefined } = {
                  0: undefined, // Title - no image
                  1: 1,  // Comparison
                  2: 2,  // Tradeoffs
                  3: 3,  // Our "Why"
                  4: 4,  // Wins
                  5: 5,  // Pain Points
                  6: 15, // Cost Analysis
                  7: 6,  // Our Stack
                  8: undefined, // What We Replaced - no image
                  9: 'prox',  // Proxmox VE - full size prox.png
                  10: 7,  // 3-2-1 Backups
                  11: 8, // Networking
                  12: 9, // Security
                  13: 10, // To The Future?
                  14: 14, // Lessons Learned
                  15: undefined, // Advice - no image
                  16: 16, // Questions?
                };
                const imageNum = imageMap[index] ?? undefined;
                const imageSrc = imageNum !== undefined ? `/images/${imageNum}.png` : undefined;
                return (
                  <div key={index} className="w-full h-full flex-shrink-0 p-2">
                    <Slide 
                      title={slide.title} 
                      points={slide.points} 
                      imageSrc={imageSrc}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        <footer className="w-full flex-shrink-0 p-4 md:p-6">
          <Navigation
            onPrev={handlePrev}
            onNext={handleNext}
            currentIndex={currentSlideIndex}
            totalSlides={SLIDES_DATA.length}
          />
        </footer>
      </div>
    </div>
  );
};

export default App;