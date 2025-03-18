import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((_step, index) => {
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1;
          const isClickable =
            onStepClick &&
            (isCompleted || index === currentStep - 1 || index === currentStep);

          return (
            <div
              key={index}
              className="flex items-center flex-1 last:flex-none"
            >
              <button
                onClick={() => isClickable && onStepClick(index + 1)}
                disabled={!isClickable}
                className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all",
                  isActive
                    ? "bg-bluePurple text-white"
                    : isCompleted
                      ? "bg-bluePurple text-primary-foreground"
                      : "bg-notActiveStep text-textSecondary",
                  isClickable && !isActive && "hover:bg-muted/80 cursor-pointer"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {index + 1}
              </button>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 flex-1 mx-5 rounded-[40px]",
                    isCompleted ? "bg-bluePurple" : "bg-muted"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
      {steps.length > 0 && (
        <div className="flex justify-between mt-2 px-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "text-xs font-medium",
                currentStep === index + 1
                  ? "text-primary"
                  : currentStep > index + 1
                    ? "text-primary/80"
                    : "text-muted-foreground"
              )}
            >
              {step}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
