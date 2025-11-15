import React, { useState } from 'react';
import { Point } from '../types';
import PointList from './PointList';

interface PointItemProps {
  point: Point;
}

const PointItem: React.FC<PointItemProps> = ({ point }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubPoints = point.subPoints && point.subPoints.length > 0;

  const handleToggle = () => {
    if (hasSubPoints) {
      setIsExpanded(prev => !prev);
    }
  };

  return (
    <li className="flex items-start">
      <span className="text-lime-500 mr-3 text-2xl md:text-3xl mt-[-4px]">◆</span>
      <div className="flex-1">
        <div 
          className={`flex items-center ${hasSubPoints ? 'cursor-pointer' : ''}`}
          onClick={handleToggle}
        >
          {hasSubPoints && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 mr-2 chevron ${isExpanded ? 'chevron-expanded' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
          <span>{point.text}</span>
        </div>
        {hasSubPoints && isExpanded && (
          <div className="mt-3 pl-6 transition-all duration-300 ease-in-out">
            <PointList points={point.subPoints} />
          </div>
        )}
      </div>
    </li>
  );
};

export default PointItem;
