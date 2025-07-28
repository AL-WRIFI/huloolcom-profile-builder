
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  progress?: number;
}

const ProgressBar = ({ currentStep, totalSteps, stepTitle, progress }: ProgressBarProps) => {
  const calculatedProgress = progress ?? (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-card shadow-sm border-b border-border py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              المرحلة {currentStep} من {totalSteps}
            </h2>
            <p className="text-sm text-muted-foreground">{stepTitle}</p>
          </div>
          <div className="text-sm font-medium text-primary">
            {Math.round(calculatedProgress)}% مكتمل
          </div>
        </div>
        
        <Progress 
          value={calculatedProgress} 
          className="h-3 bg-muted transition-all duration-500 ease-out"
        />
        
        {/* Step indicators */}
        <div className="flex justify-between mt-3">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all duration-300 ${
                index + 1 <= currentStep
                  ? "bg-primary text-primary-foreground scale-110"
                  : index + 1 === currentStep + 1
                  ? "bg-primary/20 text-primary border-2 border-primary animate-pulse"
                  : "bg-muted text-muted-foreground"
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
