/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Loader2,
  Send,
  CheckCircle,
  Sparkles,
  BookOpen,
  GraduationCap,
  School,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { StepProgress } from "@/components/form/StepProgress";
import { CustomAlert } from "@/components/form/CustomAlert";
import { PreviewModal } from "@/components/form/PreviewModal";

import { StudentInfoStep } from "@/components/form/steps/StudentInfoStep";
import { AcademicInfoStep } from "@/components/form/steps/AcademicInfoStep";
import { ParentInfoStep } from "@/components/form/steps/ParentInfoStep";
import { FamilyEnvironmentStep } from "@/components/form/steps/FamilyEnvironmentStep";
import { BehaviorSkillsStep } from "@/components/form/steps/BehaviorSkillsStep";
import { AddressDocumentsStep } from "@/components/form/steps/AddressDocumentsStep";
import { bloodGroups, classes, departments, groups, sections, shifts } from "@/lib/types";
import Image from "next/image";



const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec";

export default function AdmissionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedStudentId, setGeneratedStudentId] = useState("");
  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Load saved form data
  useEffect(() => {
    const saved = localStorage.getItem("admissionFormData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("admissionFormData", JSON.stringify(formData));
  }, [formData]);

  const showAlert = (type: "success" | "error", title: string, message: string) => {
    setAlertState({ isOpen: true, type, title, message });
  };

  const closeAlert = () => setAlertState((prev) => ({ ...prev, isOpen: false }));

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreview = () => {
    setGeneratedStudentId(`CII${Math.floor(100000 + Math.random() * 900000)}`);
    setShowPreview(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formDataToSubmit = new FormData(form);

    try {
      const res = await fetch(SCRIPT_URL, { method: "POST", body: formDataToSubmit });
      if (res.ok) {
        showAlert(
          "success",
          "আলহামদুলিল্লাহ!",
          "আপনার ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে। শীঘ্রই অফিস থেকে যোগাযোগ করা হবে।"
        );
        form.reset();
        localStorage.removeItem("admissionFormData");
        setFormData({});
        setCurrentStep(1);
      } else {
        throw new Error("Server response not OK");
      }
    } catch (error) {
      showAlert(
        "error",
        "দুঃখিত!",
        "সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4 md:px-8 relative">
      {/* Background decorations (kept as in original) */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#2E0249] via-[#4F0187] to-transparent"></div>
      <div className="absolute top-[300px] right-[-150px] w-full md:w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      <div className="absolute bottom-[-100px] left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-6 h-6 bg-pink-500/20 rounded-full"></div>
      </div>

      <CustomAlert {...alertState} onClose={closeAlert} />
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        formData={formData}
        studentId={generatedStudentId}
      />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="relative w-full max-w-6xl mx-auto mb-12 group perspective-1000">
          
          {/* Animated Glow Background behind the card */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-[2.5rem] md:rounded-[3.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-300 animate-gradient-xy"></div>

          {/* Main Glassmorphism Card */}
          <div className="relative bg-white/85 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[2rem] md:rounded-[1rem] overflow-hidden px-6 py-10 md:py-9 text-center transform transition-all duration-500 hover:scale-[1.02]">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
            
            {/* Corner Decorative Blurs */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

           {/* Floating Icons in Glass Badges */}
            <div className="absolute top-12 left-6 md:left-12 bg-white/60 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white animate-float-slow hidden md:block">
              <BookOpen size={32} strokeWidth={1.5} className="text-indigo-600" />
            </div>
            <div className="absolute bottom-16 right-6 md:right-12 bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white animate-float-fast hidden md:block">
              <GraduationCap size={36} strokeWidth={1.5} className="text-purple-600" />
            </div>

            {/* Inner Content Layout */}
            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Elevated Logo */}
              <div className="mb-10 relative">
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src={"/img/logo.png"}
                    alt="School Logo"
                    height={90}
                    width={240}
                    className="w-auto h-[60px] md:h-[90px] object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-black mb-3">
                <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm px-10">
                  ভর্তি ফর্ম
                </span>
              </h1>

              {/* Subtitle / Badge */}
              <div className="inline-flex items-center justify-center gap-2 mb-8 bg-purple-50/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-purple-200/60 shadow-inner">
                <BookOpen size={18} className="text-purple-500 animate-pulse" />
                <p className="text-purple-800 font-bold text-base md:text-lg">
                  আগামীর আলোকিত ভবিষ্যতের সন্ধানে
                </p>
                <GraduationCap size={18} className="text-purple-500 animate-pulse" />
              </div>

              {/* Animated Separator Dots & Lines */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-2">
                <div className="w-16 md:w-32 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full opacity-50"></div>
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_12px_rgba(168,85,247,0.6)]"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
                  <div className="w-3 h-3 bg-fuchsia-500 rounded-full animate-bounce shadow-[0_0_12px_rgba(236,72,153,0.6)]"></div>
                </div>
                <div className="w-16 md:w-32 h-1 bg-gradient-to-l from-transparent to-indigo-500 rounded-full opacity-50"></div>
              </div>
            </div>

          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <Card className="border-2 border-purple-100/50 shadow-xl overflow-hidden backdrop-blur-sm bg-white/90 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
              <StepProgress currentStep={currentStep} totalSteps={6} />
            </CardHeader>

            <CardContent className="p-6 md:p-8 rounded-xl">
              {currentStep === 1 && (
                <StudentInfoStep
                  formData={formData}
                  handleInputChange={handleInputChange}
                  departments={departments}
                  bloodGroups={bloodGroups}
                />
              )}
              {currentStep === 2 && (
                <AcademicInfoStep
                  formData={formData}
                  handleInputChange={handleInputChange}
                  groups={groups}
                  shifts={shifts}
                  sections={sections}
                  classes={classes}
                />
              )}
              {currentStep === 3 && (
                <ParentInfoStep
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {currentStep === 4 && (
                <FamilyEnvironmentStep
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {currentStep === 5 && (
                <BehaviorSkillsStep
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
              {currentStep === 6 && (
                <AddressDocumentsStep
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              )}
            </CardContent>

            <CardFooter className="bg-gray-50/50 border-t border-gray-200 p-6 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6 py-2 rounded-xl border-2 hover:bg-purple-50 hover:border-purple-300 transition-all"
              >
                <ArrowLeft size={16} className="mr-2" />
                পেছনে
              </Button>

              {currentStep < 6 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  পরবর্তী
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              ) : (
                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={handlePreview}
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    <Eye size={16} className="mr-2" />
                    প্রিভিউ দেখুন
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        জমা হচ্ছে...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        ফর্ম জমা দিন
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>

          <p className="text-gray-500 text-sm text-center flex items-center justify-center gap-2 bg-white/50 py-3 px-4 rounded-2xl">
            <CheckCircle size={16} className="text-green-500" />
            সাবমিট করার পূর্বে তথ্যগুলো পুনরায় চেক করুন।
          </p>
        </form>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
}