/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioGroupField } from "../RadioGroupField";
import { Home } from "lucide-react";

interface FamilyEnvironmentStepProps {
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const FamilyEnvironmentStep = ({ formData, handleInputChange }: FamilyEnvironmentStepProps) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
          <Home size={20} />
        </div>
        পারিবারিক পরিবেশ
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RadioGroupField
          label="আপনার পরিবারের উপার্জন ১০০% হালাল কি?"
          name="HalalIncome"
          options={[
            { val: "Yes", text: "হ্যাঁ" },
            { val: "No", text: "না" },
          ]}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <RadioGroupField
          label="পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?"
          name="ParentsPrayer"
          options={[
            { val: "Yes", text: "হ্যাঁ" },
            { val: "No", text: "না" },
          ]}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <RadioGroupField
          label="পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত?"
          name="Addiction"
          options={[
            { val: "Yes", text: "হ্যাঁ" },
            { val: "No", text: "না" },
          ]}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <RadioGroupField
          label="বাসায় টেলিভিশন আছে কি?"
          name="TV"
          options={[
            { val: "Yes", text: "হ্যাঁ" },
            { val: "No", text: "না" },
          ]}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <RadioGroupField
          label="বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?"
          name="QuranRecitation"
          options={[
            { val: "Yes", text: "হ্যাঁ" },
            { val: "No", text: "না" },
            { val: "Sometimes", text: "মাঝেমাঝে" },
          ]}
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <RadioGroupField
          label="পরিবারের সদস্যরা পর্দা পালন করে কি?"
          name="Purdah"
          options={[
            { val: "Yes", text: "হ্যাঁ" },
            { val: "No", text: "না" },
            { val: "Trying", text: "চেষ্টা করা হয়" },
          ]}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};