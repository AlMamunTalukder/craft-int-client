/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  label: string;
  name: string;
  required?: boolean;
  options: Array<{ value: string; label: string } | string>;
  placeholder?: string;
  icon?: React.ElementType;
  width?: string;
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
  disabled?: boolean;
}

export const SelectField = ({
  label,
  name,
  required = false,
  options = [],
  placeholder = "Select an option",
  icon: Icon,
  width = "col-span-1",
  formData,
  handleInputChange,
  disabled = false,
}: SelectFieldProps) => (
  <div className={`${width} group`}>
    <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors z-10"
          size={18}
        />
      )}
      <Select
        value={formData?.[name] || ""}
        onValueChange={(value: any) => handleInputChange(name, value)}
        disabled={disabled}
      >
        <SelectTrigger
          className={`w-full ${
            Icon ? "pl-11" : "pl-4"
          } pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt: any) => (
            <SelectItem key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
);
