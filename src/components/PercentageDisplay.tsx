import React from 'react';

interface PercentageDisplayProps {
  optionAPercentage: number;
  optionBPercentage: number;
}

const PercentageDisplay: React.FC<PercentageDisplayProps> = ({
  optionAPercentage,
  optionBPercentage
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fade-in">
      <div className="flex justify-between items-center text-lg font-medium">
        <div className="text-center flex-1 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-primary text-2xl font-bold">{optionAPercentage}%</div>
          <div className="text-sm text-gray-600">chose Option A</div>
        </div>
        <div className="text-center flex-1 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-secondary text-2xl font-bold">{optionBPercentage}%</div>
          <div className="text-sm text-gray-600">chose Option B</div>
        </div>
      </div>
      <div className="mt-4 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
          style={{ width: `${optionAPercentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span className="animate-fade-in" style={{ animationDelay: '0.9s' }}>Popular Choice!</span>
        <span className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
          {Math.abs(optionAPercentage - optionBPercentage)}% difference
        </span>
      </div>
    </div>
  );
};

export default PercentageDisplay; 