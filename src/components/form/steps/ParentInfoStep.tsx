/* eslint-disable @typescript-eslint/no-explicit-any */
import { fatherprofession, motherProfession } from "@/lib/types";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import {
  User,
  Briefcase,
  GraduationCap,
  Phone,
  Users,
  MapPin,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

interface ParentInfoStepProps {
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const ParentInfoStep = ({
  formData,
  handleInputChange,
}: ParentInfoStepProps) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
          <Users size={20} />
        </div>
        অভিভাবকের তথ্য
      </h3>

      {/* Father's Information */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-200 shadow-sm mb-6">
        <div className="absolute -top-3 left-6 bg-blue-100 px-4 py-1 rounded-full text-xs font-bold text-blue-700 border border-blue-200">
          পিতার তথ্য
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
          {/* Bengali and English name fields */}
          <InputField
            width="md:col-span-5"
            label="পিতার নাম (বাংলা)"
            name="FatherNameBangla"
            required
            icon={User}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-4"
            label="Father's Name (English)"
            name="FatherName"
            required
            icon={User}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="english"
          />

          {/* Profession as select dropdown */}
          <SelectField
            width="md:col-span-3"
            label="পেশা"
            name="FatherJob"
            options={fatherprofession}
            placeholder="পেশা নির্বাচন করুন"
            icon={Briefcase}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-4"
            label="শিক্ষাগত যোগ্যতা"
            name="FatherEdu"
            icon={GraduationCap}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-4"
            label="মোবাইল"
            name="FatherMobile"
            required
            icon={Phone}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="phone"
            showPrefix="+88"
          />

          {/* Father's WhatsApp (optional, but still phone format) */}
          <InputField
            width="md:col-span-4"
            label="WhatsApp"
            name="FatherWhatsapp"
            icon={BsWhatsapp}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="phone"
            showPrefix="+88"
          />
        </div>
      </div>

      {/* Mother's Information */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 to-rose-50/50 border border-pink-200 shadow-sm mb-6">
        <div className="absolute -top-3 left-6 bg-pink-100 px-4 py-1 rounded-full text-xs font-bold text-pink-700 border border-pink-200">
          মাতার তথ্য
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
          <InputField
            width="md:col-span-5"
            label="মাতার নাম (বাংলা)"
            name="MotherNameBangla"
            required
            icon={User}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-4"
            label="Mother's Name (English)"
            name="MotherName"
            required
            icon={User}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="english"
          />

          <SelectField
            width="md:col-span-3"
            label="পেশা"
            name="MotherJob"
            options={motherProfession}
            placeholder="পেশা নির্বাচন করুন"
            icon={Briefcase}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-4"
            label="শিক্ষাগত যোগ্যতা"
            name="MotherEdu"
            icon={GraduationCap}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-4"
            label="মোবাইল"
            name="MotherMobile"
            icon={Phone}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="phone"
            showPrefix="+88"
          />

          {/* Mother's WhatsApp (optional) */}
          <InputField
            width="md:col-span-4"
            label="WhatsApp"
            name="MotherWhatsapp"
            icon={BsWhatsapp}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="phone"
            showPrefix="+88"
          />
        </div>
      </div>

      {/* Guardian Information (optional) */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200 shadow-sm">
        <div className="absolute -top-3 left-6 bg-amber-100 px-4 py-1 rounded-full text-xs font-bold text-amber-700 border border-amber-200">
          অভিভাবকের তথ্য (যদি পিতা-মাতা ব্যতীত অন্য কেউ)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
          <InputField
            width="md:col-span-5"
            label="অভিভাবকের নাম (বাংলা)"
            name="guardianNameBangla"
            icon={User}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-4"
            label="Guardian's Name (English)"
            name="guardianName"
            icon={User}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-3"
            label="সম্পর্ক"
            name="guardianRelation"
            icon={Users}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-4"
            label="মোবাইল"
            name="guardianMobile"
            icon={Phone}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="phone"
            showPrefix="+88"
          />

          {/* Guardian's WhatsApp (optional) */}
          <InputField
            width="md:col-span-4"
            label="WhatsApp"
            name="guardianWhatsapp"
            icon={BsWhatsapp}
            formData={formData}
            handleInputChange={handleInputChange}
            validation="phone"
            showPrefix="+88"
          />

          <InputField
            width="md:col-span-4"
            label="পেশা"
            name="guardianJob"
            icon={Briefcase}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <InputField
            width="md:col-span-12"
            label="ঠিকানা"
            name="guardianAddress"
            icon={MapPin}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
