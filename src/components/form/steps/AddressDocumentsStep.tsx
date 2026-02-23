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
 
      <div className="relative bg-rose-50/90 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border-2 border-rose-300 shadow-lg shadow-rose-500/10 overflow-hidden group mb-8">
        
        {/* Animated Warning Top Border */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 via-rose-400 to-red-500 opacity-90"></div>
        
        {/* Background glow for emphasis */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h4 className="text-xl md:text-2xl font-black text-rose-900 mb-2 flex items-center gap-3">
              <div className="p-2 bg-rose-200/50 rounded-xl">
                <FileText size={24} className="text-rose-600" />
              </div>
              প্রদত্ত ডকুমেন্টসমূহ
            </h4>
            <p className="text-rose-700 font-medium text-sm md:text-base">
              ভর্তির সময় এই কাগজপত্রগুলো অফিসে জমা দেওয়া <span className="underline decoration-red-400 underline-offset-4 font-black text-red-600">বাধ্যতামূলক</span>।
            </p>
          </div>

          {/* Eye-catching Mandatory Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-rose-200 px-5 py-3 rounded-xl shadow-sm">
            <div className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </div>
            <span className="text-red-700 font-bold text-sm md:text-base">
              অফিসে জমাদান আবশ্যক
            </span>
          </div>
        </div>

        {/* Checkbox Grid Area */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white/60 p-5 md:p-6 rounded-2xl border border-rose-100">
         <CheckboxField
            label="ছবি"
            name="photographs"
            formData={formData}
            handleInputChange={handleInputChange}
            disable
          />
          <CheckboxField
            label="জন্ম নিবন্ধন সনদ"
            name="birthCertificate"
            formData={formData}
            handleInputChange={handleInputChange}
            disable
          />
          <CheckboxField
            label="মার্কশিট"
            name="markSheet"
            formData={formData}
            handleInputChange={handleInputChange}
            disable
          />
          <CheckboxField
            label="ট্রান্সফার সার্টিফিকেট"
            name="transferCertificate"
            formData={formData}
            handleInputChange={handleInputChange}
            disable
          />
          <CheckboxField
            label="চরিত্র সনদপত্র"
            name="characterCertificate"
            formData={formData}
            handleInputChange={handleInputChange}
            disable
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