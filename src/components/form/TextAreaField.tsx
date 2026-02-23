/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textarea } from "@/components/ui/textarea";

interface TextAreaFieldProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  icon?: React.ElementType;
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const TextAreaField = ({
  label,
  name,
  required = false,
  placeholder = "",
  icon: Icon,
  formData,
  handleInputChange,
}: TextAreaFieldProps) => (
  <div className="group">
    <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-emerald-600" />} {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <Textarea
      name={name}
      required={required}
      value={formData?.[name] || ""}
      onChange={(e) => handleInputChange(name, e.target.value)}
      rows={3}
      className="w-full px-5 py-4 rounded-2xl border border-emerald-200 bg-white/70 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none shadow-sm placeholder-gray-400"
      placeholder={placeholder}
    />
  </div>
);