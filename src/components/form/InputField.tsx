/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@/components/ui/input";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  width?: string;
  icon?: React.ElementType;
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
  disabled?: boolean;
}

export const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  width = "col-span-1",
  icon: Icon,
  formData,
  handleInputChange,
  disabled = false,
}: InputFieldProps) => (
  <div className={`${width} group`}>
    <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
          size={18}
        />
      )}
      <Input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        value={formData?.[name] || ""}
        onChange={(e) => handleInputChange(name, e.target.value)}
        disabled={disabled}
        className={`w-full ${
          Icon ? "pl-11" : "pl-4"
        } pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
      />
    </div>
  </div>
);
