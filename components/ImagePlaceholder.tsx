import React from 'react';

const ImagePlaceholder: React.FC = () => {
  return (
    <div className="w-full max-w-md h-auto aspect-square bg-gray-200 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center justify-center p-4 animate-pulse">
      <div className="text-center">
        <p className="font-bold text-lg text-gray-600 uppercase tracking-wider">Generating Image</p>
        <p className="text-sm text-gray-500">The AI is warming up...</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
