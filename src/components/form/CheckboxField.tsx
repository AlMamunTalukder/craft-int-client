/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxFieldProps {
  label: string;
  name: string;
  formData: Record<string, any>;
  handleInputChange: (name: string, checked: boolean) => void;
}

export const CheckboxField = ({
  label,
  name,
  formData,
  handleInputChange,
}: CheckboxFieldProps) => (
  <div className="flex items-center space-x-2">
    <Checkbox
      id={name}
      checked={formData?.[name] || false}
      onCheckedChange={(checked: any) => handleInputChange(name, checked)}
    />
    <Label
      htmlFor={name}
      className="text-sm font-medium text-gray-700 cursor-pointer"
    >
      {label}
    </Label>
  </div>
);