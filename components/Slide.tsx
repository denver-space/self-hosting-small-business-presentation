
import React from 'react';
import { Point } from '../types';
import PointList from './PointList';

interface SlideProps {
  title: string;
  points: Point[];
  imageSrc?: string;
}

const Slide: React.FC<SlideProps> = ({ title, points, imageSrc }) => {
  const hasImageContent = Boolean(imageSrc);
  // Check if this is a full-size image slide (only empty text)
  const isFullSizeImage = hasImageContent && points.length === 1 && points[0].text === '';

  if (isFullSizeImage) {
    return (
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full h-full p-6 md:p-10 flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-fuchsia-600 tracking-tight">{title}</h2>
        <div className="flex-grow flex items-start justify-start overflow-hidden w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain object-left border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement | null;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          <div className="image-placeholder w-full h-full bg-gray-200 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center justify-center p-4" style={{ display: 'none' }}>
            <div className="text-center">
              <p className="font-bold text-lg text-gray-600 uppercase tracking-wider">Image not available</p>
              <p className="text-sm text-gray-500">Using placeholder</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full h-full p-6 md:p-10 flex flex-col ${hasImageContent ? 'md:flex-row' : ''} gap-8`}>
      <div className={`flex flex-col ${hasImageContent ? 'md:w-1/2' : 'w-full'} h-full`}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-fuchsia-600 tracking-tight">{title}</h2>
        <div className="text-lg md:text-2xl flex-grow overflow-y-auto">
          <PointList points={points} />
        </div>
      </div>

      {hasImageContent && (
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-w-md h-auto aspect-square object-cover border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              // hide broken image and show placeholder
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement | null;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          <div className="image-placeholder w-full max-w-md h-auto aspect-square bg-gray-200 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center justify-center p-4" style={{ display: 'none' }}>
            <div className="text-center">
              <p className="font-bold text-lg text-gray-600 uppercase tracking-wider">Image not available</p>
              <p className="text-sm text-gray-500">Using placeholder</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;