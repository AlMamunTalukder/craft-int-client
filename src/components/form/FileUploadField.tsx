/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Camera } from "lucide-react";

interface FileUploadFieldProps {
  label: string;
  name: string;
  required?: boolean;
  icon?: React.ElementType;
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const FileUploadField = ({
  label,
  name,
  required = false,
  icon: Icon = Camera,
  formData,
  handleInputChange,
}: FileUploadFieldProps) => (
  <div className="group">
    <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors z-10"
          size={18}
        />
      )}
      <Input
        type="file"
        name={name}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              handleInputChange(name, reader.result);
            };
            reader.readAsDataURL(file);
          }
        }}
        className={`w-full ${
          Icon ? "pl-11" : "pl-4"
        } pr-4 py-2 rounded-xl border border-gray-200 bg-white/70 text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
      />
    </div>
  </div>
);