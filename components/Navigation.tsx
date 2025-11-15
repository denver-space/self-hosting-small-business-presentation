
import React from 'react';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
}

const NavButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode }> = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-white border-2 border-black font-bold uppercase tracking-wider text-sm md:text-base
                  shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out
                  hover:enabled:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:enabled:translate-x-0.5 hover:enabled:translate-y-0.5
                  active:enabled:shadow-none active:enabled:translate-x-1 active:enabled:translate-y-1
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200`}
    >
      {children}
    </button>
  );
};

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, currentIndex, totalSlides }) => {
  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto">
      <NavButton onClick={onPrev} disabled={currentIndex === 0}>
        Previous
      </NavButton>
      <div className="font-bold text-lg md:text-xl">
        {currentIndex + 1} / {totalSlides}
      </div>
      <NavButton onClick={onNext} disabled={currentIndex === totalSlides - 1}>
        Next
      </NavButton>
    </div>
  );
};

export default Navigation;
