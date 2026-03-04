/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import {
  User,
  Calendar,
  BookOpen,
  GraduationCap,
  Cake,
  Fingerprint,
  Heart,
  Globe,
  Camera,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { academicClasses, hifzClasses } from "@/lib/types";

interface StudentInfoStepProps {
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
  departments: Array<{ value: string; label: string }>;
  bloodGroups: string[];
}

export const StudentInfoStep = ({
  formData,
  handleInputChange,
  departments,
  bloodGroups,
}: StudentInfoStepProps) => {
 
  useEffect(() => {
    if (formData.dateOfBirth) {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (formData.Age !== age.toString()) {
        handleInputChange("Age", age.toString());
      }
    }
  }, [formData.dateOfBirth, handleInputChange, formData.Age]);

  // Class options based on department
  const getClassOptions = () => {
    if (formData.studentDepartment === "hifz") {
      return hifzClasses;
    } else if (formData.studentDepartment === "academic") {
      return academicClasses;
    }
    return [];
  };

  const classOptions = getClassOptions();

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
          <User size={20} />
        </div>
        শিক্ষার্থীর তথ্য
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Image Upload Section */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border-2 border-purple-100 shadow-sm h-full">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              শিক্ষার্থীর ছবি
            </label>

            <div className="flex flex-col items-center">
              <div className="relative w-28 md:w-40 h-28 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 group">
                {formData?.studentPhoto ? (
                  <>
                    <Image
                      src={formData.studentPhoto}
                      alt="Student Preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera size={24} className="text-white" />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center">
                    <Camera size={48} className="text-purple-400" />
                  </div>
                )}
              </div>

              <div className="relative w-full">
                <Input
                  type="file"
                  name="studentPhoto"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        handleInputChange("studentPhoto", reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full py-2 rounded-xl border-2 border-purple-200 bg-white/80 text-gray-800 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                অনুমোদিত ফরম্যাট: JPG, PNG (সর্বোচ্চ ২MB)
              </p>
            </div>
          </div>
        </div>

        {/* Student Details Grid */}
        <div className="lg:col-span-8">
          <div className="bg-white/80 p-3 md:p-6 rounded-2xl border-2 border-purple-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Name Fields - Full width */}
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  label="শিক্ষার্থীর নাম (বাংলা)"
                  name="StudentName"
                  required
                  placeholder="বাংলায় পুরো নাম"
                  icon={User}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <InputField
                  label="Student Name (English)"
                  name="studentName"
                  required
                  placeholder="Full Name in English"
                  icon={User}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  validation="english"
                />
              </div>

              
              <div className="md:col-span-4">
                <InputField
                  label="জন্ম তারিখ"
                  name="dateOfBirth"
                  type="date"
                  icon={Cake}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-4">
                <InputField
                  label="বয়স"
                  name="Age"
                  placeholder="স্বয়ংক্রিয় গণনা হবে"
                  icon={Calendar}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  disabled
                />
              </div>

              <div className="md:col-span-4">
                <SelectField
                  label="লিঙ্গ"
                  name="gender"
                  required
                  options={[
                    { value: "male", label: "পুরুষ" },
                    { value: "female", label: "মহিলা" }
                  ]}
                  placeholder="লিঙ্গ নির্বাচন করুন"
                  icon={User}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              {/* Department and Class */}
              <div className="md:col-span-6">
                <SelectField
                  label="বিভাগ"
                  name="studentDepartment"
                  required
                  options={departments}
                  placeholder="বিভাগ নির্বাচন করুন"
                  icon={GraduationCap}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-6">
                <SelectField
                  label="যে শ্রেণিতে ভর্তি হতে আগ্রহী"
                  name="Class"
                  required
                  options={classOptions}
                  placeholder={
                    formData.studentDepartment
                      ? "শ্রেণি নির্বাচন করুন"
                      : "প্রথমে বিভাগ নির্বাচন করুন"
                  }
                  icon={BookOpen}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              {/* Session, NID/Birth, Blood Group, Nationality */}
              <div className="md:col-span-6">
                <InputField
                  label="সেশন"
                  name="session"
                  placeholder="2026"
                  icon={Calendar}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-6">
                <InputField
                  label="জাতীয় পরিচয়পত্র/জন্ম নিবন্ধন নম্বর"
                  name="nidBirth"
                  placeholder="1234567890"
                  icon={Fingerprint}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-6">
                <SelectField
                  label="রক্তের গ্রুপ"
                  name="bloodGroup"
                  options={bloodGroups}
                  placeholder="রক্তের গ্রুপ নির্বাচন করুন"
                  icon={Heart}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-6">
                <InputField
                  label="জাতীয়তা"
                  name="nationality"
                  placeholder="Bangladeshi"
                  icon={Globe}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};