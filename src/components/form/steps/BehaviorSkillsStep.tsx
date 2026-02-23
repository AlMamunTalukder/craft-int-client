/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { RadioGroupField } from "../RadioGroupField";
import { Activity, Smartphone } from "lucide-react";

interface BehaviorSkillsStepProps {
  formData: Record<string, any>;
  handleInputChange: (name: string, value: any) => void;
}

export const BehaviorSkillsStep = ({ formData, handleInputChange }: BehaviorSkillsStepProps) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
          <Activity size={20} />
        </div>
        আচরণ ও দক্ষতা
      </h3>

      <div className="space-y-8">
        {/* Mobile Usage */}
        <div className="bg-white/60 p-6 rounded-2xl border border-rose-200 shadow-sm">
          <label className="block text-sm font-bold text-gray-800 mb-3">
            দৈনিক কত সময় মোবাইল ব্যবহার করে?
          </label>
          <div className="relative">
            <Smartphone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400"
            />
            <Input
              name="MobileUsage"
              type="text"
              placeholder="সময় উল্লেখ করুন (যেমন: ১ ঘণ্টা)"
              value={formData?.["MobileUsage"] || ""}
              onChange={(e) => handleInputChange("MobileUsage", e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 bg-white/50 focus:bg-white focus:ring-4 focus:ring-rose-100 focus:border-rose-400 outline-none transition-all"
            />
          </div>
        </div>

        {/* Behavior Radio Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RadioGroupField
            label="সন্তানের আচরণ কেমন?"
            name="GeneralBehavior"
            options={[
              { val: "Very Good", text: "অনেক ভালো" },
              { val: "Good", text: "মোটামুটি" },
              { val: "Average", text: "ভাল নয়" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="পিতা-মাতার কথা শোনে?"
            name="Obedience"
            options={[
              { val: "Not At All", text: "না" },
              { val: "Somewhat", text: "মোটামুটি" },
              { val: "Fully", text: "পুরোপুরি" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="বড়দের সাথে আচরণ?"
            name="ElderBehavior"
            options={[
              { val: "Very Good", text: "অনেক ভালো" },
              { val: "Good", text: "মোটামুটি" },
              { val: "Average", text: "ভাল নয়" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="ছোটদের সাথে আচরণ?"
            name="YoungerBehavior"
            options={[
              { val: "Very Good", text: "অনেক ভালো" },
              { val: "Good", text: "মোটামুটি" },
              { val: "Average", text: "ভাল নয়" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="মিথ্যা বলে বা জেদ করে?"
            name="LyingStubbornness"
            options={[
              { val: "Too Much", text: "খুব বেশি" },
              { val: "Sometimes", text: "মাঝেমাঝে" },
              { val: "Never", text: "না" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="পড়ালেখায় আগ্রহ?"
            name="StudyInterest"
            options={[
              { val: "Very Interested", text: "খুব আগ্রহী" },
              { val: "Moderate", text: "মোটামুটি" },
              { val: "Less Interested", text: "কম আগ্রহী" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="ধর্মীয় কাজে আগ্রহ?"
            name="ReligiousInterest"
            options={[
              { val: "Very Interested", text: "খুব আগ্রহী" },
              { val: "Moderate", text: "মোটামুটি" },
              { val: "Less Interested", text: "কম আগ্রহী" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <RadioGroupField
            label="রাগ নিয়ন্ত্রণ?"
            name="AngerControl"
            options={[
              { val: "Excellent", text: "মোটামুটি" },
              { val: "Good", text: "ভাল" },
              { val: "Needs Improvement", text: "উন্নতি প্রয়োজন" },
            ]}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};