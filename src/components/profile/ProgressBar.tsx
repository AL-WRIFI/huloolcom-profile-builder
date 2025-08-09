
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  progress?: number;
}

const ProgressBar = ({ currentStep, totalSteps, stepTitle, progress }: ProgressBarProps) => {
  const calculatedProgress = progress ?? (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-white shadow-sm border-b border-gray-200 py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              المرحلة {currentStep} من {totalSteps}
            </h2>
            <p className="text-sm text-gray-600">{stepTitle}</p>
          </div>
          <div className="text-sm font-medium text-blue-600">
            {Math.round(calculatedProgress)}% مكتمل
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden transition-all duration-500 ease-out">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${calculatedProgress}%` }}
          />
        </div>
        
        {/* Step indicators */}
        <div className="flex justify-between mt-3">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all duration-300 ${
                index + 1 <= currentStep
                  ? "bg-blue-600 text-white transform scale-110"
                  : index + 1 === currentStep + 1
                  ? "bg-blue-100 text-blue-600 border-2 border-blue-600 animate-pulse"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
