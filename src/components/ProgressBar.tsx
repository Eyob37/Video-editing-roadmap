import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;