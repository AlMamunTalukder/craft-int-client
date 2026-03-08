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
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepProgress } from "@/components/form/StepProgress";
import { CustomAlert } from "@/components/form/CustomAlert";
import { StudentInfoStep } from "@/components/form/steps/StudentInfoStep";
import { AcademicInfoStep } from "@/components/form/steps/AcademicInfoStep";
import { ParentInfoStep } from "@/components/form/steps/ParentInfoStep";
import { FamilyEnvironmentStep } from "@/components/form/steps/FamilyEnvironmentStep";
import { BehaviorSkillsStep } from "@/components/form/steps/BehaviorSkillsStep";
import { AddressDocumentsStep } from "@/components/form/steps/AddressDocumentsStep";
import { SuccessModal } from "@/components/form/SuccessModal";
import {
  academicClasses,
  bloodGroups,
  departments,
  groups,
  sections,
  shifts,
} from "@/lib/types";
import { mapFormDataToBackend } from "@/utils/mapFormData";
import { FinalPreview } from "../form/steps/FinalPreview";
import { generatePDFFromData } from "@/utils/pdfGenerator";

export default function AdmissionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showFinalPreview, setShowFinalPreview] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [generatedStudentId, setGeneratedStudentId] = useState("");
  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [submittedFormData, setSubmittedFormData] = useState<
    Record<string, any>
  >({});

  // Load saved form data
  useEffect(() => {
    const saved = localStorage.getItem("admissionFormData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("admissionFormData", JSON.stringify(formData));
  }, [formData]);

  const showAlert = (
    type: "success" | "error",
    title: string,
    message: string,
  ) => {
    setAlertState({ isOpen: true, type, title, message });
  };

  const closeAlert = () =>
    setAlertState((prev) => ({ ...prev, isOpen: false }));

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ----- Step navigation and validation -----
  const getRequiredFieldsForStep = (step: number): string[] => {
    switch (step) {
      case 1: // Student Info
        return [
          "StudentName",
          "studentName",
          "gender",
          "studentDepartment",
          "Class",
        ];
      case 2: // Academic Info – all optional
        return [];
      case 3: // Parent Info
        return [
          "FatherNameBangla",
          "FatherName",
          "FatherMobile",
          "MotherNameBangla",
          "MotherName",
        ];
      case 4: // Family Environment – all optional
        return [];
      case 5: // Behavior Skills – all optional
        return [];
      case 6: // Address & Documents
        return [
          "permVillage",
          "permPostOffice",
          "permPoliceStation",
          "permDistrict",
          "termsAccepted",
        ];
      default:
        return [];
    }
  };

  const validateStep = (step: number): boolean => {
    const required = getRequiredFieldsForStep(step);
    const missing = required.filter((field) => {
      const value = formData[field];
      if (field === "termsAccepted") return value !== true;
      return !value || value.trim() === "";
    });

    if (missing.length > 0) {
      showAlert("error", "দুঃখিত!", "অনুগ্রহ করে প্রয়োজনীয় তথ্য পূরণ করুন।");
      return false;
    }

    if (step === 3) {
      if (formData.FatherMobile && formData.FatherMobile.length !== 11) {
        showAlert("error", "দুঃখিত!", "পিতার মোবাইল নম্বর ১১ ডিজিট হতে হবে।");
        return false;
      }
      if (formData.MotherMobile && formData.MotherMobile.length !== 11) {
        showAlert("error", "দুঃখিত!", "মাতার মোবাইল নম্বর ১১ ডিজিট হতে হবে।");
        return false;
      }
    }

    return true;
  };

  const handleStepClick = (step: number) => {
    setAlertState({ isOpen: false, type: "error", title: "", message: "" });
    setCurrentStep(step);
    setShowFinalPreview(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentStep < 6) {
      if (!validateStep(currentStep)) return;
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 6) {
      // From step 6 go to final preview
      if (!validateStep(currentStep)) return;
      setShowFinalPreview(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (showFinalPreview) {
      setShowFinalPreview(false);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSkip = () => {
    setShowSuccessModal(false);
  };

  const downloadPDF = async (data: Record<string, any>) => {
    try {
      setIsLoading(true); // optional, shows loading state
      await generatePDFFromData(data, generatedStudentId);
    } catch (error) {
      console.error("PDF download error:", error);
      showAlert("error", "দুঃখিত!", "PDF ডাউনলোড করতে সমস্যা হয়েছে।");
    } finally {
      setIsLoading(false);
    }
  };

  const validateRequiredFields = (data: Record<string, any>): boolean => {
    const requiredFields = [
      "StudentName",
      "studentName",
      "gender",
      "studentDepartment",
      "Class",
      "FatherNameBangla",
      "FatherName",
      "FatherMobile",
      "MotherNameBangla",
      "MotherName",
      "permVillage",
      "permPostOffice",
      "permPoliceStation",
      "permDistrict",
      "termsAccepted",
    ];

    const missingFields = requiredFields.filter((field) => {
      const value = data[field];
      if (field === "termsAccepted") return value !== true;
      return value === undefined || value === null || value === "";
    });

    if (missingFields.length > 0) {
      showAlert(
        "error",
        "দুঃখিত!",
        `অনুগ্রহ করে প্রয়োজনীয় সকল তথ্য পূরণ করুন।`,
      );
      return false;
    }

    if (data.FatherMobile && data.FatherMobile.length !== 11) {
      showAlert("error", "দুঃখিত!", "পিতার মোবাইল নম্বর ১১ ডিজিট হতে হবে।");
      return false;
    }
    if (data.MotherMobile && data.MotherMobile.length !== 11) {
      showAlert("error", "দুঃখিত!", "মাতার মোবাইল নম্বর ১১ ডিজিট হতে হবে।");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateRequiredFields(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      const backendData = mapFormDataToBackend(formData);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/admission-application`;

      console.log('Submitting to:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedFormData({ ...formData });
        localStorage.removeItem("admissionFormData");
        setFormData({});
        setCurrentStep(1);
        setShowFinalPreview(false);
        const newStudentId = `CII${Math.floor(100000 + Math.random() * 900000)}`;
        setGeneratedStudentId(newStudentId);
        setShowSuccessModal(true);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showAlert(
        "error",
        "দুঃখিত!",
        error instanceof Error
          ? error.message
          : "সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4 md:px-8 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#2E0249] via-[#4F0187] to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-6 h-6 bg-pink-500/20 rounded-full"></div>
      </div>

      <CustomAlert {...alertState} onClose={closeAlert} />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onSkip={handleSkip}
        onDownloadPDF={() => downloadPDF(submittedFormData)}
        studentId={generatedStudentId}
      />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="relative w-full max-w-6xl mx-auto mb-12 group perspective-1000 md:px-3">
          {/* Animated Glow Background */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-[2.5rem] md:rounded-[3.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-300 animate-gradient-xy"></div>

          {/* Main Glassmorphism Card */}
          <div className="relative bg-white/85 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[1rem] overflow-hidden px-3 md:px-6 py-10 md:py-9 text-center transform transition-all duration-500 hover:scale-[1.02]">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

            {/* Corner Decorative Blurs */}
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            {/* Floating Icons */}
            <div className="absolute top-12 left-6 md:left-12 bg-white/60 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white animate-float-slow hidden md:block">
              <BookOpen
                size={32}
                strokeWidth={1.5}
                className="text-indigo-600"
              />
            </div>
            <div className="absolute bottom-16 right-6 md:right-12 bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white animate-float-fast hidden md:block">
              <GraduationCap
                size={36}
                strokeWidth={1.5}
                className="text-purple-600"
              />
            </div>

            {/* Inner Content Layout */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl font-black mb-3">
                <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm px-10">
                  ভর্তি ফরম
                </span>
              </h1>

              {/* Subtitle */}
              <div className="inline-flex items-center justify-center gap-2 mb-8 bg-purple-50/80 backdrop-blur-sm px-3 md:px-6 py-2.5 rounded-full border border-purple-200/60 shadow-inner">
                <BookOpen size={18} className="text-purple-500 animate-pulse" />
                <p className="text-purple-800 font-bold text-xs md:text-lg">
                  আগামীর আলোকিত ভবিষ্যতের সন্ধানে
                </p>
                <GraduationCap
                  size={18}
                  className="text-purple-500 animate-pulse"
                />
              </div>

              {/* Animated Separator */}
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

        {!showFinalPreview ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 px-0 md:px-4"
          >
            <Card className="border-2 border-purple-100/50 shadow-xl overflow-hidden backdrop-blur-sm bg-white/90 rounded-xl sm:rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100 p-2 md:p-4">
                <StepProgress
                  currentStep={currentStep}
                  totalSteps={6}
                  onStepClick={handleStepClick}
                />
              </CardHeader>

              <CardContent className="p-2 md:p-6">
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
                    classes={academicClasses}
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

              <CardFooter className="bg-gray-50/50 border-t border-gray-200 p-4 sm:p-6 flex justify-between gap-3 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="w-full sm:w-auto px-0 md:px-6 py-2 rounded-xl border-2 hover:bg-purple-50 hover:border-purple-300 transition-all "
                >
                  <ArrowLeft size={16} className="mr-2" />
                  পেছনে
                </Button>

                {currentStep < 6 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto px-0 md:px-8 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 ..."
                  >
                    পরবর্তী
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto px-0 md:px-8 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 ..."
                  >
                    প্রিভিউ
                    <Eye size={16} className="ml-2" />
                  </Button>
                )}
              </CardFooter>
            </Card>

            <p className="text-gray-500 text-xs sm:text-sm text-center flex items-center justify-center gap-1 sm:gap-2 bg-white/50 py-2 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl">
              <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
              সাবমিট করার পূর্বে তথ্যগুলো পুনরায় চেক করুন।
            </p>
          </form>
        ) : (
          <FinalPreview
            formData={formData}
            generatedStudentId={generatedStudentId}
            onBack={handleBack}
            onDownloadPDF={() => downloadPDF(formData)}
            isLoading={isLoading}
          />
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          70% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
}
