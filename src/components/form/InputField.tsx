/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { convertBanglaToEnglishDigits } from "@/lib/utils";
import { ChangeEvent, useState } from "react";
import { Check, X } from "lucide-react";

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
  validation?: "english" | "phone";
  disabled?: boolean;
  showPrefix?: string; // e.g., "+88" for phone
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
  validation,
  disabled,
  showPrefix,
}: InputFieldProps) => {
  const [touched, setTouched] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value;

    if (validation === "english") {
      rawValue = rawValue.replace(/[^A-Za-z\s\-'.]/g, '');
    } else if (validation === "phone") {
      rawValue = convertBanglaToEnglishDigits(rawValue);
      rawValue = rawValue.replace(/\D/g, '');
      if (rawValue.length > 11) {
        rawValue = rawValue.slice(0, 11);
      }
    }

    handleInputChange(name, rawValue);
  };

  const handleBlur = () => setTouched(true);

  const value = formData[name] || "";
  const hasValue = value.length > 0;

  // Determine validation status
  const isValid = () => {
    if (!validation || !hasValue) return true;
    if (validation === "phone") {
      return value.length === 11;
    }
    return true; // english validation only filters input, so always valid
  };
  const valid = isValid();
  const showValidation = validation === "phone" && hasValue;

  // Dynamic border and text colors
  const borderColor = showValidation
    ? valid
      ? "border-green-500 focus:border-green-600"
      : "border-red-500 focus:border-red-600"
    : "border-gray-200 focus:border-purple-500";

  const ringColor = showValidation
    ? valid
      ? "focus:ring-green-500/10"
      : "focus:ring-red-500/10"
    : "focus:ring-purple-500/10";

  // Right icon for validation
  const RightIcon = showValidation ? (valid ? Check : X) : null;

  // Padding calculations
  const getPaddingLeft = () => {
    if (Icon && showPrefix) return "pl-20";
    if (Icon) return "pl-11";
    if (showPrefix) return "pl-16";
    return "pl-4";
  };

  const getPaddingRight = () => {
    return RightIcon ? "pr-10" : "pr-4";
  };

  const getPrefixLeft = () => {
    if (Icon && showPrefix) return "left-11";
    if (showPrefix) return "left-4";
    return "left-4";
  };

  return (
    <div className={`${width} group`}>
      <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
            size={18}
          />
        )}
        {showPrefix && (
          <span
            className={`absolute ${getPrefixLeft()} top-1/2 -translate-y-1/2 text-gray-600 font-medium`}
          >
            {showPrefix}
          </span>
        )}
        <Input
          name={name}
          required={required}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          className={`w-full ${getPaddingLeft()} ${getPaddingRight()} py-3.5 rounded-xl border ${borderColor} bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-4 ${ringColor} transition-all outline-none shadow-sm hover:border-purple-300`}
        />
        {RightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <RightIcon
              size={18}
              className={valid ? "text-green-500" : "text-red-500"}
            />
          </div>
        )}
      </div>
    </div>
  );
};