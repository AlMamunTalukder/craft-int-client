import { Progress } from "@/components/ui/progress";
import { Check, User, BookOpen, Users, Home, Activity, MapPin } from "lucide-react";

const steps = [
  { number: 1, label: "Student", icon: User },
  { number: 2, label: "Academic", icon: BookOpen },
  { number: 3, label: "Parent", icon: Users },
  { number: 4, label: "Family", icon: Home },
  { number: 5, label: "Behavior", icon: Activity },
  { number: 6, label: "Address", icon: MapPin },
];

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const StepProgress = ({ currentStep, totalSteps }: StepProgressProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <div key={step.number} className="flex-1 relative">
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-[60%] w-full h-1 transition-all duration-500 ${
                    currentStep > step.number ? "bg-purple-500" : "bg-gray-200"
                  }`}
                />
              )}
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isCompleted
                      ? "bg-purple-600 text-white"
                      : isCurrent
                      ? "bg-purple-100 text-purple-600 border-2 border-purple-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {isCompleted ? <Check size={18} /> : <StepIcon size={18} />}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    isCurrent ? "text-purple-600" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Progress value={(currentStep / totalSteps) * 100} className="h-1" />
    </div>
  );
};