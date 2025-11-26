/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { 
  User, 
  Users, 
  Home, 
  Activity, 
  Send, 
  School, 
  Phone, 
  MapPin,
  Heart,
  CheckCircle,
  AlertCircle,
  Calendar,
  BookOpen,
  Star,
  Sparkles,
  Award,
  Rocket
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

// --- Enhanced Input Component ---
const InputField = ({ label, name, type = "text", required = false, placeholder = "", width = "col-span-1", icon: Icon, formData, handleInputChange }: any) => (
  <div className={`${width} group`}>
    <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />}
      <Input 
        name={name} 
        required={required} 
        type={type} 
        placeholder={placeholder}
        value={formData?.[name] || ''}
        onChange={(e) => handleInputChange(name, e.target.value)}
        className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`} 
      />
    </div>
  </div>
);

// --- Enhanced TextArea Component ---
const TextAreaField = ({ label, name, required = false, placeholder = "", icon: Icon, formData, handleInputChange }: any) => (
  <div className="group">
    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-emerald-600" />} {label}
    </label>
    <Textarea 
      name={name}
      required={required}
      value={formData?.[name] || ''}
      onChange={(e) => handleInputChange(name, e.target.value)}
      rows={3} 
      className="w-full px-5 py-4 rounded-2xl border border-emerald-200 bg-white/70 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none shadow-sm placeholder-gray-400" 
      placeholder={placeholder}
    />
  </div>
);

// --- Enhanced Radio Group ---
const RadioGroup = ({ label, name, options, formData, handleInputChange }: any) => (
  <div className="bg-white/80 p-4 rounded-xl border border-white/50 hover:border-purple-200 hover:shadow-md transition-all duration-300">
    <label className="block text-sm font-bold text-gray-800 mb-3 border-b border-dashed border-gray-200 pb-2">
      {label}
    </label>
    <div className="flex flex-wrap gap-1.5 md:gap-3">
      {options.map((opt: any) => (
        <label key={opt.val} className="relative cursor-pointer group">
          <input 
            type="radio" 
            name={name} 
            value={opt.val} 
            checked={formData?.[name] === opt.val}
            onChange={(e) => handleInputChange(name, e.target.value)}
            className="peer sr-only" 
          />
          <div className="px-3 md:px-4 py-2 rounded-full border border-gray-200 bg-white/50 text-gray-600 text-sm font-medium transition-all
            peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600 peer-checked:shadow-lg
            group-hover:border-purple-300">
            {opt.text}
          </div>
        </label>
      ))}
    </div>
  </div>
);

// --- Custom Alert Modal Component ---
const CustomAlert = ({ isOpen, type, title, message, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-[#0F0518]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 transform transition-all scale-100 animate-bounceIn text-center relative overflow-hidden border-t-8 border-purple-600">
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {type === 'success' ? <CheckCircle size={40} strokeWidth={2.5} /> : <AlertCircle size={40} strokeWidth={2.5} />}
        </div>
        <h3 className={`text-2xl font-bold mb-3 ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
          {title}
        </h3>
        <p className="text-gray-600 mb-8 text-base leading-relaxed">
          {message}
        </p>
        <button
          onClick={onClose}
          className={`w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 ${type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-700 shadow-green-200' : 'bg-gradient-to-r from-red-500 to-red-700 shadow-red-200'}`}
        >
          {type === 'success' ? 'আলহামদুলিল্লাহ' : 'বন্ধ করুন'}
        </button>
      </div>
    </div>
  );
};

const AdmissionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertState, setAlertState] = useState({ isOpen: false, type: 'success', title: '', message: '' });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['header']));
  const [formData, setFormData] = useState<Record<string, string>>({});

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

  // Load saved form data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('admissionFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('admissionFormData', JSON.stringify(formData));
  }, [formData]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => {
            const newSet = new Set(prev);
            newSet.add(entry.target.id);
            return newSet;
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-section').forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const showAlert = (type: string, title: string, message: string) => {
    setAlertState({ isOpen: true, type, title, message });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formDataToSubmit = new FormData(form);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        showAlert('success', 'আলহামদুলিল্লাহ!', 'আপনার ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে। শীঘ্রই অফিস থেকে যোগাযোগ করা হবে।');
        form.reset();
        localStorage.removeItem('admissionFormData');
        setFormData({});
      } else {
        throw new Error('Server response not OK');
      }
    } catch (error) {
      console.error("Error!", error);
      showAlert('error', 'দুঃখিত!', 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4 md:px-8 relative">
      
      {/* Enhanced Background Design */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#2E0249] via-[#4F0187] to-transparent"></div>
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-[300px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      <div className="absolute bottom-[-100px] left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-6 h-6 bg-pink-500/20 rounded-full"></div>
      </div>

      <CustomAlert 
        isOpen={alertState.isOpen} 
        type={alertState.type} 
        title={alertState.title} 
        message={alertState.message} 
        onClose={closeAlert} 
      />

      <div className="w-full max-w-6xl mx-auto relative">
        
        {/* UNIQUE HEADER DESIGN */}
        <div>
          <div className="bg-gradient-to-br from-white/95 via-purple-50/95 to-white/95 rounded-[1rem] md:rounded-[3rem] shadow-2xl p-4 md:p-12 text-center mb-12 border-2 border-white/50 relative overflow-hidden backdrop-blur-sm">
            
            {/* Main Header Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-purple-500 to-indigo-500"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative ">
              {/* Premium Header Design */}
              <div className="mb-8">
                {/* Main Title with Premium Design */}
                <div className="relative mb-8">
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
                  <h1 className="text-4xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent relative mb-4 pt-2 tracking-tight">
                    ভর্তি যাচাই ফর্ম
                  </h1>
                  <div className="hidden md:flex items-center justify-center gap-3 mb-4">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    <Rocket size={20} className="text-purple-500 animate-pulse" />
                    <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Premium Important Notice */}
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-3 md:p-8 shadow-2xl">
                  <div className="hidden md:flex items-center absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg  gap-2">
                    <Heart size={16} className="fill-white" />
                    গুরুত্বপূর্ণ নোটিশ
                  </div>
                  <div className="text-center pt-4">
                    <p className="font-bold text-amber-800 mb-3 text-xl flex items-center justify-center gap-3">
                      আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন
                    </p>
                    <p className="text-amber-700/80 leading-relaxed">
                      আপনার সন্তানকে ভর্তি করাতে আগ্রহী হলে, অনুগ্রহ করে নিচের ফর্মটি পূরণ করুন।
                      ফর্মটি পাওয়ার পর, আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে। 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SECTIONS */}
        <form onSubmit={handleSubmit} className="space-y-8"> 
          
          {/* SECTION 1: STUDENT INFO */}
          <div>
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-100/80 rounded-2xl md:rounded-3xl shadow-xl border-2 border-blue-200/50 overflow-hidden backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-100/80 to-blue-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-blue-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-700">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">শিক্ষার্থীর তথ্য</h2>
                  <p className="text-sm text-gray-600">শিক্ষার্থীর ব্যক্তিগত এবং একাডেমিক তথ্য</p>
                </div>
              </div>
              
              <div className="p-3 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                <InputField 
                  width="md:col-span-6" 
                  label="শিক্ষার্থীর নাম" 
                  name="StudentName" 
                  required 
                  placeholder="বাংলায় পুরো নাম" 
                  icon={User}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <InputField 
                  width="md:col-span-3" 
                  label="বয়স" 
                  name="Age" 
                  placeholder="যেমন: ১০" 
                  icon={Calendar}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <InputField 
                  width="md:col-span-3" 
                  label="আগ্রহী শ্রেণি" 
                  name="Class" 
                  placeholder="ভর্তি হতে ইচ্ছুক শ্রেণি" 
                  icon={BookOpen}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                
                <div className="md:col-span-12 border-t border-dashed border-blue-300/50 my-4"></div>

                <InputField 
                  width="md:col-span-6" 
                  label="পূর্ববর্তী প্রতিষ্ঠানের নাম" 
                  name="PrevSchool" 
                  placeholder="আগের স্কুলের নাম" 
                  icon={School}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <InputField 
                  width="md:col-span-6" 
                  label="পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ" 
                  name="PrevClass" 
                  placeholder="কোন ক্লাসে পড়ত"
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                
                <InputField 
                  width="md:col-span-6" 
                  label="সর্বশেষ জিপিএ (GPA)" 
                  name="GPA" 
                  placeholder="প্রাপ্ত জিপিএ" 
                  icon={Star}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <InputField 
                  width="md:col-span-6" 
                  label="পূর্ববর্তী রোল" 
                  name="Roll" 
                  placeholder="ক্লাস রোল" 
                  icon={Award}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: GUARDIAN INFO */}
          <div>
            <div className="bg-gradient-to-br from-emerald-50/80 to-green-100/80 rounded-2xl md:rounded-3xl shadow-xl border-2 border-emerald-200/50 overflow-hidden backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-100/80 to-green-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-emerald-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-700">
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">অভিভাবকের তথ্য</h2>
                  <p className="text-sm text-gray-600">পিতা ও মাতার বিস্তারিত তথ্য</p>
                </div>
              </div>
              
              <div className="px-3 md:px-8 py-5 md:py-8 space-y-8">
                {/* Father Info */}
                <div className="relative p-3 md:p-6 rounded-2xl bg-white/60 border border-blue-200 shadow-sm">
                  <div className="absolute -top-3 left-6 bg-blue-100 px-3 py-1 rounded-md text-xs font-bold text-blue-700 uppercase border border-blue-200">
                    পিতার তথ্য
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
                    <InputField 
                      width="md:col-span-4" 
                      label="পিতার নাম" 
                      name="FatherName" 
                      required 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <InputField 
                      width="md:col-span-3" 
                      label="পেশা" 
                      name="FatherJob" 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <InputField 
                      width="md:col-span-3" 
                      label="শিক্ষাগত যোগ্যতা" 
                      name="FatherEdu" 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <InputField 
                      width="md:col-span-2" 
                      label="মোবাইল" 
                      name="FatherMobile" 
                      required 
                      placeholder="017xxxxxxxx" 
                      icon={Phone}
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Mother Info */}
                <div className="relative p-3 md:p-6 rounded-2xl bg-white/60 border border-pink-200 shadow-sm">
                  <div className="absolute -top-3 left-6 bg-pink-100 px-3 py-1 rounded-md text-xs font-bold text-pink-700 uppercase tracking-wider border border-pink-200">
                    মাতার তথ্য
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
                    <InputField 
                      width="md:col-span-4" 
                      label="মাতার নাম" 
                      name="MotherName" 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <InputField 
                      width="md:col-span-3" 
                      label="পেশা" 
                      name="MotherJob" 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <InputField 
                      width="md:col-span-3" 
                      label="শিক্ষাগত যোগ্যতা" 
                      name="MotherEdu" 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <InputField 
                      width="md:col-span-2" 
                      label="মোবাইল" 
                      name="MotherMobile" 
                      icon={Phone}
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Address */}
                <TextAreaField 
                  label="ঠিকানা" 
                  name="Address" 
                  placeholder="বর্তমান এবং স্থায়ী ঠিকানা বিস্তারিত লিখুন..." 
                  icon={MapPin}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: FAMILY INFO */}
          <div>
            <div className="bg-gradient-to-br from-amber-50/80 to-orange-100/80 rounded-3xl shadow-xl border-2 border-amber-200/50 overflow-hidden backdrop-blur-sm">
              <div className="bg-gradient-to-r from-amber-100/80 to-orange-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-amber-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-700">
                  <Home size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">পারিবারিক পরিবেশ</h2>
                  <p className="text-sm text-gray-600">পারিবারিক মূল্যবোধ ও সংস্কৃতি</p>
                </div>
              </div>

              <div className="p-3 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <RadioGroup 
                  label="আপনার পরিবারের উপার্জন ১০০% হালাল কি?" 
                  name="HalalIncome"
                  options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <RadioGroup 
                  label=" পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?" 
                  name="ParentsPrayer"
                  options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <RadioGroup 
                  label=" পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত?" 
                  name="Addiction"
                  options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <RadioGroup 
                  label=" বাসায় টেলিভিশন আছে কি?" 
                  name="TV"
                  options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <RadioGroup 
                  label=" বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?" 
                  name="QuranRecitation"
                  options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Sometimes', text:'মাঝেমাঝে'}]}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <RadioGroup 
                  label=" পরিবারের সদস্যরা পর্দা পালন করে কি?" 
                  name="Purdah"
                  options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Trying', text:'চেষ্টা করা হয়'}]}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: BEHAVIOR INFO */}
          <div>
            <div className="bg-gradient-to-br from-rose-50/80 to-pink-100/80 rounded-3xl shadow-xl border-2 border-rose-200/50 overflow-hidden backdrop-blur-sm">
              <div className="bg-gradient-to-r from-rose-100/80 to-pink-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-rose-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-700">
                  <Activity size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">আচরণ ও দক্ষতা</h2>
                  <p className="text-sm text-gray-600">শিক্ষার্থীর আচরণগত বৈশিষ্ট্য</p>
                </div>
              </div>

              <div className="px-3 md:px-8 py-5 md:py-8 space-y-8">
                {/* Mobile Usage */}
                <div className="bg-white/60 p-3 md:p-6 rounded-2xl border border-rose-200 shadow-sm">
                  <label className="block text-sm font-bold text-gray-800 mb-3"> দৈনিক কত সময় মোবাইল ব্যবহার করে?</label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400" />
                    <Input 
                      name="MobileUsage" 
                      type="text" 
                      placeholder="সময় উল্লেখ করুন (যেমন: ১ ঘণ্টা)" 
                      value={formData?.['MobileUsage'] || ''}
                      onChange={(e) => handleInputChange('MobileUsage', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 bg-white/50 focus:bg-white focus:ring-4 focus:ring-rose-100 focus:border-rose-400 outline-none transition-all" 
                    />
                  </div>
                </div>

                {/* Additional Behavior Radio Groups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RadioGroup 
                    label=" সন্তানের আচরণ কেমন?" 
                    name="GeneralBehavior"
                    options={[
                      {val:'Very Good', text:'অনেক ভালো'}, 
                      {val:'Good', text:'মোটামুটি'}, 
                      {val:'Average', text:'ভাল নয়'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" পিতা মাতার কথা শোনে?" 
                    name="Obedience"
                    options={[
                      {val:'Not At All', text:'না'}, 
                      {val:'Somewhat', text:'মোটামুটি'}, 
                      {val:'Fully', text:'পুরোপুরি'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" বড়দের সাথে আচরণ?" 
                    name="ElderBehavior"
                    options={[
                      {val:'Very Good', text:'অনেক ভালো'}, 
                      {val:'Good', text:'মোটামুটি'}, 
                      {val:'Average', text:'ভাল নয়'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" ছোটদের সাথে আচরণ?" 
                    name="YoungerBehavior"
                    options={[
                      {val:'Very Good', text:'অনেক ভালো'}, 
                      {val:'Good', text:'মোটামুটি'}, 
                      {val:'Average', text:'ভাল নয়'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" মিথ্যা বলে বা জেদ করে?" 
                    name="LyingStubbornness"
                    options={[
                      {val:'Too Much', text:'খুব বেশি'}, 
                      {val:'Sometimes', text:'মাঝেমাঝে'}, 
                      {val:'Never', text:'না'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" পড়ালেখায় আগ্রহ?" 
                    name="StudyInterest"
                    options={[
                      {val:'Very Interested', text:'খুব আগ্রহী'}, 
                      {val:'Moderate', text:'মোটামুটি'}, 
                      {val:'Less Interested', text:'কম আগ্রহী'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" ধর্মীয় কাজে আগ্রহ?" 
                    name="ReligiousInterest"
                    options={[
                      {val:'Very Interested', text:'খুব আগ্রহী'}, 
                      {val:'Moderate', text:'মোটামুটি'}, 
                      {val:'Less Interested', text:'কম আগ্রহী'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <RadioGroup 
                    label=" রাগ নিয়ন্ত্রণ?" 
                    name="AngerControl"
                    options={[
                      {val:'Excellent', text:'মোটামুটি'}, 
                      {val:'Good', text:'ভাল'}, 
                      {val:'Needs Improvement', text:'উন্নতি প্রয়োজন'}
                    ]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div>
            <div className="pt-8 pb-20 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  group relative inline-flex items-center justify-center px-10 md:px-16 py-5 rounded-2xl font-bold text-white text-xl 
                  shadow-[0_20px_40px_rgba(124,58,237,0.4)] bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]
                  hover:shadow-[0_30px_50px_rgba(124,58,237,0.6)] hover:-translate-y-2 hover:scale-105
                  active:scale-95 transition-all duration-500 overflow-hidden border-2 border-white/20
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative flex items-center gap-3">
                  {isLoading ? (
                    <span className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      প্রসেসিং...
                    </span>
                  ) : (
                    <>
                      <Send size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                      সাবমিট করুন
                      <Sparkles size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </span>
              </button>
              <p className="text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                সাবমিট করার পূর্বে তথ্যগুলো পুনরায় চেক করুন। 
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Enhanced Global Styles */}
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
        @keyframes shine { 
          100% { left: 125%; } 
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-shine { animation: shine 0.75s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default AdmissionForm;