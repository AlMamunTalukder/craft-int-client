/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../InputField";
import { CheckboxField } from "../CheckboxField";
import { Switch } from "@/components/ui/switch";
import { MapPin, MapPinHouse, Building, FileText, Shield, ShieldCheck } from "lucide-react";

interface AddressDocumentsStepProps {
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const AddressDocumentsStep = ({ formData, handleInputChange }: AddressDocumentsStepProps) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
          <MapPin size={20} />
        </div>
        ঠিকানা ও ডকুমেন্টস
      </h3>

      {/* Present Address */}
      <div className="relative p-6 rounded-2xl bg-white/60 border border-gray-200 shadow-sm mb-6">
        <div className="absolute -top-3 left-6 bg-gray-100 px-4 py-1 rounded-full text-xs font-bold text-gray-700 border border-gray-200">
          বর্তমান ঠিকানা
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          <InputField
            width="md:col-span-3"
            label="গ্রাম/এলাকা"
            name="village"
            icon={MapPinHouse}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-3"
            label="ডাকঘর"
            name="postOffice"
            icon={Building}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-2"
            label="পোস্ট কোড"
            name="postCode"
            icon={FileText}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-2"
            label="থানা"
            name="policeStation"
            icon={Shield}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-2"
            label="জেলা"
            name="district"
            icon={MapPin}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>

      {/* Permanent Address */}
      <div className="relative p-6 rounded-2xl bg-white/60 border border-gray-200 shadow-sm mb-6">
        <div className="absolute -top-3 left-6 bg-gray-100 px-4 py-1 rounded-full text-xs font-bold text-gray-700 border border-gray-200">
          স্থায়ী ঠিকানা
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          <InputField
            width="md:col-span-3"
            label="গ্রাম/এলাকা"
            name="permVillage"
            required
            icon={MapPinHouse}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-3"
            label="ডাকঘর"
            name="permPostOffice"
            required
            icon={Building}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-2"
            label="পোস্ট কোড"
            name="permPostCode"
            icon={FileText}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-2"
            label="থানা"
            name="permPoliceStation"
            required
            icon={Shield}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InputField
            width="md:col-span-2"
            label="জেলা"
            name="permDistrict"
            required
            icon={MapPin}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FileText size={20} className="text-purple-600" />
          প্রদত্ত ডকুমেন্টসমূহ
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CheckboxField
            label="জন্ম নিবন্ধন সনদ"
            name="birthCertificate"
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <CheckboxField
            label="ট্রান্সফার সার্টিফিকেট"
            name="transferCertificate"
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <CheckboxField
            label="চরিত্র সনদপত্র"
            name="characterCertificate"
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <CheckboxField
            label="মার্কশিট"
            name="markSheet"
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <CheckboxField
            label="ছবি"
            name="photographs"
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-purple-600" />
            <div>
              <p className="font-bold text-gray-800">শর্তাবলী</p>
              <p className="text-sm text-gray-600">আমি ভর্তির সকল শর্ত মেনে নিচ্ছি</p>
            </div>
          </div>
          <Switch
            checked={formData?.termsAccepted || false}
            onCheckedChange={(checked) => handleInputChange("termsAccepted", checked)}
          />
        </div>
      </div>
    </div>
  );
};