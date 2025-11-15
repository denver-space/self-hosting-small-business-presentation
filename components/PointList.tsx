import React from 'react';
import { Point } from '../types';
import PointItem from './PointItem';

interface PointListProps {
  points: Point[];
}

const PointList: React.FC<PointListProps> = ({ points }) => {
  return (
    <ul className="space-y-4">
      {points.map((point, index) => (
        <PointItem key={index} point={point} />
      ))}
    </ul>
  );
};

export default PointList;