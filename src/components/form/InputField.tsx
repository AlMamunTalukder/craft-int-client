// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Input } from "@/components/ui/input";
// import { convertBanglaToEnglishDigits } from "@/lib/utils";
// import {  ChangeEvent } from "react";

// interface InputFieldProps {
//   label: string;
//   name: string;
//   type?: string;
//   required?: boolean;
//   placeholder?: string;
//   width?: string;
//   icon?: React.ElementType;
//   formData: Record<string, any>;
//   handleInputChange: (name: string, value: any) => void;
//   validation?: "english" | "phone"; 
//   disabled?: boolean
// }

// export const InputField = ({
//   label,
//   name,
//   type = "text",
//   required = false,
//   placeholder = "",
//   width = "col-span-1",
//   icon: Icon,
//   formData,
//   handleInputChange,
//   validation,
//   disabled
// }: InputFieldProps) => {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     let rawValue = e.target.value;

//     // Apply validation rules
//     if (validation === "english") {
//       // Allow only English letters, spaces, hyphens, apostrophes, and periods
//       rawValue = rawValue.replace(/[^A-Za-z\s\-'.]/g, '');
//     } else if (validation === "phone") {
//       // Convert Bangla digits to English
//       rawValue = convertBanglaToEnglishDigits(rawValue);
//       // Allow only digits
//       rawValue = rawValue.replace(/\D/g, '');
//       // Limit to 11 digits
//       if (rawValue.length > 11) {
//         rawValue = rawValue.slice(0, 11);
//       }
//     }

//     handleInputChange(name, rawValue);
//   };

//   return (
//     <div className={`${width} group`}>
//       <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <div className="relative">
//         {Icon && (
//           <Icon
//             className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
//             size={18}
//           />
//         )}
//         <Input
//           name={name}
//           required={required}
//           type={type}
//           placeholder={placeholder}
//           value={formData?.[name] || ""}
//           onChange={handleChange}
//           disabled={disabled}
//           className={`w-full ${
//             Icon ? "pl-8 md:pl-11" : "pl-4"
//           } pr-2 md:pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
//         />
//       </div>
//     </div>
//   );
// };




/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { convertBanglaToEnglishDigits } from "@/lib/utils";
import { ChangeEvent } from "react";

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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value;

    if (validation === "english") {
      // Allow only English letters, spaces, hyphens, apostrophes, and periods
      rawValue = rawValue.replace(/[^A-Za-z\s\-'.]/g, '');
    } else if (validation === "phone") {
      // Convert Bangla digits to English
      rawValue = convertBanglaToEnglishDigits(rawValue);
      // Remove any non-digit characters (including +)
      rawValue = rawValue.replace(/\D/g, '');
      // Limit to 11 digits
      if (rawValue.length > 11) {
        rawValue = rawValue.slice(0, 11);
      }
    }

    handleInputChange(name, rawValue);
  };

  const displayValue = formData[name] || "";

  // Determine left padding based on icon and prefix
  const getPaddingLeft = () => {
    if (Icon && showPrefix) return "pl-20"; // icon + prefix
    if (Icon) return "pl-11";
    if (showPrefix) return "pl-16";
    return "pl-4";
  };

  // Position for prefix span
  const getPrefixLeft = () => {
    if (Icon && showPrefix) return "left-11"; // after icon
    if (showPrefix) return "left-4";
    return "left-4"; // fallback
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
          value={displayValue}
          onChange={handleChange}
          disabled={disabled}
          className={`w-full ${getPaddingLeft()} pr-2 md:pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
        />
      </div>
    </div>
  );
};