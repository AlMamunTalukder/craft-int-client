/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RadioOption {
  val: string;
  text: string;
}

interface RadioGroupFieldProps {
  label: string;
  name: string;
  options: RadioOption[];
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const RadioGroupField = ({
  label,
  name,
  options,
  formData,
  handleInputChange,
}: RadioGroupFieldProps) => (
  <div className="bg-white/80 p-4 rounded-xl border border-white/50 hover:border-purple-200 hover:shadow-md transition-all duration-300">
    <label className="block text-sm font-bold text-gray-800 mb-3 border-b border-dashed border-gray-200 pb-2">
      {label}
    </label>
    <RadioGroup
      value={formData?.[name] || ""}
      onValueChange={(value: any) => handleInputChange(name, value)}
      className="flex flex-wrap gap-1.5 md:gap-3"
    >
      {options.map((opt) => (
        <div key={opt.val} className="relative cursor-pointer group">
          <RadioGroupItem
            value={opt.val}
            id={`${name}-${opt.val}`}
            className="peer sr-only"
          />
          <Label
            htmlFor={`${name}-${opt.val}`}
            className="px-3 md:px-4 py-2 rounded-full border border-gray-200 bg-white/50 text-gray-600 text-sm font-medium transition-all
              peer-data-[state=checked]:bg-purple-600 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:shadow-lg
              hover:border-purple-300 cursor-pointer inline-block"
          >
            {opt.text}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);