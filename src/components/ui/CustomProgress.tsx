
import React from 'react';

interface CustomProgressProps {
  value: number;
  className?: string;
}

const CustomProgress: React.FC<CustomProgressProps> = ({
  value,
  className = ''
}) => {
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-secondary ${className}`}>
      <div 
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};

export default CustomProgress;
