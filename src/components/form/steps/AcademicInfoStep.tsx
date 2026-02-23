/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import { School, BookOpen, Star, Award, Users2, Building, Clock } from "lucide-react";

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
  groups,
  shifts,
  sections,
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
          placeholder="আগের স্কুলের নাম"
          icon={School}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <InputField
          width="md:col-span-4"
          label="পূর্ব অধ্যায়নকৃত শ্রেণি"
          name="PrevClass"
          placeholder="কোন ক্লাসে পড়ত"
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

        {/* <InputField
          width="md:col-span-4"
          label="পূর্ববর্তী রোল"
          name="Roll"
          placeholder="পূর্ববর্তী ক্লাসের রোল নম্বর"
          icon={Award}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <InputField
          width="md:col-span-4"
          label="শাখা"
          name="section"
          placeholder="শাখা (যেমন: ক, খ)"
          icon={Users2}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <SelectField
          width="md:col-span-4"
          label="গ্রুপ (প্রযোজ্য ক্ষেত্রে)"
          name="group"
          options={groups}
          placeholder="গ্রুপ নির্বাচন করুন"
          icon={Building}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <InputField
          width="md:col-span-4"
          label="অপশনাল সাবজেক্ট"
          name="optionalSubject"
          placeholder="যেমন: উচ্চতর গণিত"
          icon={BookOpen}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <SelectField
          width="md:col-span-4"
          label="শিফট"
          name="shift"
          options={shifts}
          placeholder="শিফট নির্বাচন করুন"
          icon={Clock}
          formData={formData}
          handleInputChange={handleInputChange}
        /> */}
      </div>
    </div>
  );
};