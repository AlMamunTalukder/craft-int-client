/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../InputField";
import { School, BookOpen, Star} from "lucide-react";

interface AcademicInfoStepProps {
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
  groups: Array<{ value: string; label: string } | string>;
  shifts: string[];
  sections: string[];
  classes?: Array<{ value: string; label: string }>;
}

export const AcademicInfoStep = ({
  formData,
  handleInputChange,
}: AcademicInfoStepProps) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
          <School size={20} />
        </div>
        পূর্ববর্তী একাডেমিক তথ্য
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <InputField
          width="md:col-span-5"
          label="পূর্ববর্তী প্রতিষ্ঠানের নাম"
          name="PrevSchool"
          placeholder="পূর্ববর্তী প্রতিষ্ঠানের নাম"
          icon={School}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <InputField
          width="md:col-span-4"
          label="পূর্ববর্তী অধ্যয়নকৃত শ্রেণি"
          name="PrevClass"
          placeholder="পূর্ববর্তী অধ্যয়নকৃত শ্রেণি"
          icon={BookOpen}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <InputField
          width="md:col-span-3"
          label="সর্বশেষ জিপিএ (GPA)"
          name="GPA"
          placeholder="প্রাপ্ত জিপিএ"
          icon={Star}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};