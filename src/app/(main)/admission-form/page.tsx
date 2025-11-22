/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
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
  Star
} from "lucide-react";
import logoicon from "../../../../public/img/logo.png";
import Image from "next/image";


// --- Custom Alert Modal Component ---
const CustomAlert = ({ isOpen, type, title, message, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0518]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 transform transition-all scale-100 animate-bounceIn text-center relative overflow-hidden border-t-8 border-purple-600">
        
        {/* Icon */}
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {type === 'success' ? <CheckCircle size={40} strokeWidth={2.5} /> : <AlertCircle size={40} strokeWidth={2.5} />}
        </div>

        {/* Content */}
        <h3 className={`text-2xl font-bold mb-3 ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
          {title}
        </h3>
        <p className="text-gray-600 mb-8 text-base leading-relaxed">
          {message}
        </p>

        {/* Button */}
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

  // ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

  const showAlert = (type: string, title: string, message: string) => {
    setAlertState({ isOpen: true, type, title, message });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      showAlert('success', 'আলহামদুলিল্লাহ!', 'আপনার ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে। শীঘ্রই অফিস থেকে যোগাযোগ করা হবে।');
      form.reset(); 

    } catch (error) {
      console.error("Error!", error);
      showAlert('error', 'দুঃখিত!', 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।');
    } finally {
      setIsLoading(false);
    }
  };

  // --- Modern Input Component ---
  const InputField = ({ label, name, type = "text", required = false, placeholder = "", width = "col-span-1", icon: Icon }: any) => (
    <div className={`${width} group`}>
      <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1 group-focus-within:text-purple-700 transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />}
        <input 
          name={name} 
          required={required} 
          type={type} 
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`} 
        />
      </div>
    </div>
  );

  const RadioGroup = ({ label, name, options }: any) => (
    <div className="bg-white/80 p-4 rounded-xl border border-white/50 hover:border-purple-200 hover:shadow-md transition-all duration-300">
      <label className="block text-sm font-bold text-gray-800 mb-3 border-b border-dashed border-gray-200 pb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt: any) => (
          <label key={opt.val} className="relative cursor-pointer group">
            <input type="radio" name={name} value={opt.val} className="peer sr-only" />
            <div className="px-4 py-2 rounded-full border border-gray-200 bg-white/50 text-gray-600 text-sm font-medium transition-all
              peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600 peer-checked:shadow-lg
              group-hover:border-purple-300">
              {opt.text}
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F4F6F9] py-8 px-4 md:px-8 relative overflow-x-hidden">
      
      {/* --- Background Design --- */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#2E0249] via-[#4F0187] to-[#F4F6F9] z-0"></div>
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-[100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]"></div>

      {/* --- Custom Alert --- */}
      <CustomAlert 
        isOpen={alertState.isOpen} 
        type={alertState.type} 
        title={alertState.title} 
        message={alertState.message} 
        onClose={closeAlert} 
      />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* --- HEADER CARD --- */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-[2.5rem] shadow-2xl p-8 text-center mb-10 border border-white/50 relative overflow-hidden">
          
          {/* Decorative Header Pattern */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mx-auto mb-6">
              <Image src={logoicon} alt="img" className="h-16 w-36"/>
            </div>
            
            <div className="mb-8">
               <span className="inline-block px-8 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-lg font-bold shadow-lg shadow-purple-500/30 tracking-wide">
                 ভর্তি যাচাই ফর্ম
               </span>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 max-w-2xl mx-auto shadow-sm">
              <p className="font-bold text-amber-800 mb-1 flex items-center justify-center gap-2 text-base">
                 <Heart size={18} className="fill-amber-600 text-amber-600 animate-pulse" />
                 আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন
              </p>
              <p className="text-sm text-amber-700/80">
                এখানে নির্ভুল তথ্য প্রদান করুন। আপনার দেওয়া তথ্যের ভিত্তিতে শিক্ষার্থীর শিক্ষার মান ও গাইডলাইন নির্ধারণ করা হবে।
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- SECTION 1: STUDENT INFO --- */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl shadow-xl border border-blue-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-100/80 to-blue-200/50 px-8 py-6 border-b border-blue-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-700">
                <User size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">শিক্ষার্থীর তথ্য</h2>
                <p className="text-sm text-gray-600">শিক্ষার্থীর ব্যক্তিগত এবং একাডেমিক তথ্য</p>
              </div>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              <InputField width="md:col-span-6" label="শিক্ষার্থীর নাম" name="StudentName" required placeholder="বাংলায় পুরো নাম" icon={User} />
              <InputField width="md:col-span-2" label="বয়স" name="Age" placeholder="যেমন: ১০" icon={Calendar} />
              <InputField width="md:col-span-4" label="আগ্রহী শ্রেণি" name="Class" placeholder="ভর্তি হতে ইচ্ছুক শ্রেণি" icon={BookOpen} />
              
              <div className="md:col-span-12 border-t border-dashed border-blue-300/50 my-2"></div>

              <InputField width="md:col-span-6" label="পূর্ববর্তী প্রতিষ্ঠানের নাম" name="PrevSchool" placeholder="আগের স্কুলের নাম" icon={School} />
              <InputField width="md:col-span-6" label="পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ" name="PrevClass" placeholder="কোন ক্লাসে পড়ত" />
              
              <InputField width="md:col-span-6" label="সর্বশেষ জিপিএ (GPA)" name="GPA" placeholder="প্রাপ্ত জিপিএ" icon={Star} />
              <InputField width="md:col-span-6" label="পূর্ববর্তী রোল" name="Roll" placeholder="ক্লাস রোল" />
            </div>
          </div>

          {/* --- SECTION 2: GUARDIAN INFO --- */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-xl border border-green-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-green-100/80 to-emerald-200/50 px-8 py-6 border-b border-green-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-700">
                <Users size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">অভিভাবকের তথ্য</h2>
                <p className="text-sm text-gray-600">পিতা ও মাতার বিস্তারিত তথ্য</p>
              </div>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Father Info */}
              <div className="relative p-6 rounded-2xl bg-white/60 border border-blue-300/50 shadow-sm">
                 <div className="absolute -top-3 left-6 bg-blue-100 px-3 py-1 rounded-md text-xs font-bold text-blue-700 uppercase tracking-wider border border-blue-200">
                    পিতার তথ্য
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
                    <InputField width="md:col-span-4" label="পিতার নাম" name="FatherName" required />
                    <InputField width="md:col-span-3" label="পেশা" name="FatherJob" />
                    <InputField width="md:col-span-2" label="শিক্ষাগত যোগ্যতা" name="FatherEdu" />
                    <InputField width="md:col-span-3" label="মোবাইল" name="FatherMobile" required placeholder="017xxxxxxxx" icon={Phone} />
                 </div>
              </div>

              {/* Mother Info */}
              <div className="relative p-6 rounded-2xl bg-white/60 border border-pink-300/50 shadow-sm">
                 <div className="absolute -top-3 left-6 bg-pink-100 px-3 py-1 rounded-md text-xs font-bold text-pink-700 uppercase tracking-wider border border-pink-200">
                    মাতার তথ্য
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
                    <InputField width="md:col-span-4" label="মাতার নাম" name="MotherName" />
                    <InputField width="md:col-span-3" label="পেশা" name="MotherJob" />
                    <InputField width="md:col-span-2" label="শিক্ষাগত যোগ্যতা" name="MotherEdu" />
                    <InputField width="md:col-span-3" label="মোবাইল" name="MotherMobile" icon={Phone} />
                 </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <MapPin size={16} className="text-green-600" /> ঠিকানা
                </label>
                <textarea 
                  name="Address" 
                  rows={3} 
                  className="w-full px-5 py-4 rounded-2xl border border-green-200 bg-white/70 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none resize-none shadow-sm placeholder-gray-400" 
                  placeholder="বর্তমান এবং স্থায়ী ঠিকানা বিস্তারিত লিখুন..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* --- SECTION 3: FAMILY INFO --- */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-xl border border-amber-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-100/80 to-orange-200/50 px-8 py-6 border-b border-amber-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-700">
                <Home size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">পারিবারিক পরিবেশ</h2>
                <p className="text-sm text-gray-600">পারিবারিক মূল্যবোধ ও সংস্কৃতি</p>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup 
                label=" আপনার পরিবারের উপার্জন ১০০% হালাল কি?" 
                name="HalalIncome"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label=" পরিবারের উপার্জনক্ষম সদস্য কতজন?" 
                name="Earners"
                options={[{val:'1', text:'১ জন'}, {val:'2', text:'২ জন'}, {val:'3+', text:'৩ জন+'}]}
              />
              <RadioGroup 
                label=" পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?" 
                name="ParentsPrayer"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label=" পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত?" 
                name="Addiction"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label=" বাসায় টেলিভিশন আছে কি?" 
                name="TV"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label=" বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?" 
                name="QuranRecitation"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Sometimes', text:'মাঝেমাঝে'}]}
              />
              <RadioGroup 
                label=" পরিবারে সদস্যদের মধ্যে ঝগড়া বিবাদ কেমন হয়?" 
                name="Quarrels"
                options={[{val:'Never', text:'হয় না'}, {val:'Often', text:'প্রায়ই'}, {val:'Sometimes', text:'মাঝেমাঝে'}]}
              />
              <RadioGroup 
                label=" পরিবারের সদস্যরা পর্দা পালন করে কি?" 
                name="Purdah"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Trying', text:'চেষ্টা করা হয়'}]}
              />
            </div>
          </div>

          {/* --- SECTION 4: BEHAVIOR INFO --- */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl shadow-xl border border-rose-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-rose-100/80 to-pink-200/50 px-8 py-6 border-b border-rose-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-700">
                <Activity size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">আচরণ ও দক্ষতা</h2>
                <p className="text-sm text-gray-600">শিক্ষার্থীর আচরণগত বৈশিষ্ট্য</p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              
               {/* Reading Ability */}
              <div className="bg-white/60 p-6 rounded-2xl border border-rose-300/50 shadow-sm">
                  <RadioGroup 
                    label=" আপনার সন্তান কি পড়তে পারে?" 
                    name="ReadingAbility"
                    options={[
                      {val:'Quran', text:'কুরআন'}, 
                      {val:'Ampara', text:'আম্মাপারা'}, 
                      {val:'Qaida', text:'কায়েদা'},
                      {val:'None', text:'কোনটিই নয়'}
                    ]}
                  />
              </div>

              {/* Mobile Usage */}
              <div className="bg-white/60 p-6 rounded-2xl border border-rose-300/50 shadow-sm hover:border-rose-400 transition-all">
                <label className="block text-sm font-bold text-gray-800 mb-3"> দৈনিক কত সময় মোবাইল ব্যবহার করে?</label>
                <div className="relative">
                    <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400" />
                    <input name="MobileUsage" type="text" placeholder="সময় উল্লেখ করুন (যেমন: ১ ঘণ্টা)" className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 bg-white/50 focus:bg-white focus:ring-4 focus:ring-rose-100 focus:border-rose-400 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RadioGroup 
                  label=" সন্তানের আচরণ কেমন?" 
                  name="GeneralBehavior"
                  options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]}
                />
                 <RadioGroup 
                  label=" পিতা মাতার কথা শোনে?" 
                  name="Obedience"
                  options={[{val:'Not At All', text:'না'}, {val:'Somewhat', text:'মোটামুটি'}, {val:'Fully', text:'পুরোপুরি'}]}
                />
                 <RadioGroup 
                  label=" বড়দের সাথে আচরণ?" 
                  name="ElderBehavior"
                  options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]}
                />
                 <RadioGroup 
                  label=" ছোটদের সাথে আচরণ?" 
                  name="YoungerBehavior"
                  options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]}
                />
                <RadioGroup 
                  label=" মিথ্যা বলে বা জেদ করে?" 
                  name="LyingStubbornness"
                  options={[{val:'Often', text:'প্রায়ই'}, {val:'Sometimes', text:'মাঝেমাঝে'}, {val:'Rarely', text:'খুব কম'}, {val:'Never', text:'না'}]}
                />
                <RadioGroup 
                  label=" কোন উন্নতি বেশি চান?" 
                  name="ImprovementGoal"
                  options={[{val:'Manners', text:'আদব আখলাক'}, {val:'Physical', text:'শারীরিক'}]}
                />
              </div>
            </div>
          </div>

          {/* --- SUBMIT BUTTON --- */}
          <div className="pt-6 pb-20 text-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`
                group relative inline-flex items-center justify-center px-12 py-4 rounded-full font-bold text-white text-xl shadow-[0_10px_20px_rgba(124,58,237,0.4)]
                bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]
                hover:shadow-[0_20px_30px_rgba(124,58,237,0.5)] hover:-translate-y-1 hover:scale-105
                active:scale-95 transition-all duration-300 overflow-hidden
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {/* Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              
              <span className="relative flex items-center gap-3 z-10">
                {isLoading ? (
                   <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> প্রসেসিং...</span>
                ) : (
                   <> <Send size={22} /> সাবমিট করুন </>
                )}
              </span>
            </button>
            <p className="text-gray-500 text-xs mt-4">সাবমিট করার আগে তথ্যগুলো পুনরায় চেক করে নিন</p>
          </div>

        </form>
      </div>
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounceIn { 0% { transform: scale(0.8); opacity: 0; } 70% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); } }
        @keyframes shine { 100% { left: 125%; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-shine { animation: shine 0.75s; }
      `}</style>
    </div>
  );
};

export default AdmissionForm;

// "use client";

// import React, { useState } from "react";
// import { 
//   User, 
//   Users, 
//   Home, 
//   Activity, 
//   Send, 
//   School, 
//   Phone, 
//   MapPin,
//   Heart,
//   CheckCircle,
//   AlertCircle,
//   Calendar,
//   BookOpen,
//   Star,
//   Sparkles,
//   FileText
// } from "lucide-react";

// // Placeholder for logo
// const logoPlaceholder = "https://placehold.co/100x100/4F0187/ffffff?text=Logo";

// const AdmissionForm = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [alertState, setAlertState] = useState({ isOpen: false, type: 'success', title: '', message: '' });

//   const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

//   const showAlert = (type, title, message) => {
//     setAlertState({ isOpen: true, type, title, message });
//   };

//   const closeAlert = () => setAlertState({ ...alertState, isOpen: false });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       await fetch(SCRIPT_URL, { method: "POST", body: formData });
//       showAlert('success', 'আলহামদুলিল্লাহ!', 'ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।');
//       form.reset(); 
//     } catch (error) {
//       console.error(error);
//       showAlert('error', 'দুঃখিত!', 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- Dark Theme Input Component ---
//   const InputField = ({ label, name, type = "text", required = false, placeholder = "", width = "col-span-1", icon: Icon }) => (
//     <div className={`${width} group relative`}>
//       <label className="block text-xs md:text-sm font-bold text-purple-200 mb-2 ml-1 tracking-wide uppercase">
//         {label} {required && <span className="text-pink-500">*</span>}
//       </label>
//       <div className="relative">
//         {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-cyan-400 transition-colors" size={18} />}
//         <input 
//           name={name} 
//           required={required} 
//           type={type} 
//           placeholder={placeholder}
//           className={`
//             w-full ${Icon ? 'pl-11' : 'pl-5'} pr-4 py-3.5 rounded-xl 
//             bg-[#1A0B2E]/50 border border-white/10 
//             text-white placeholder-gray-500 
//             focus:bg-[#251040] focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 
//             transition-all duration-300 outline-none shadow-inner
//           `} 
//         />
//         {/* Bottom Glow Line */}
//         <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
//       </div>
//     </div>
//   );

//   // --- Dark Theme Radio Group ---
//   const RadioGroup = ({ label, name, options }) => (
//     <div className="p-5 rounded-2xl border border-white/5 bg-[#150a25]/40 hover:border-purple-500/30 transition-all duration-300">
//       <label className="block text-sm font-bold text-purple-100 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
//         <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]"></span>
//         {label}
//       </label>
//       <div className="flex flex-wrap gap-3">
//         {options.map((opt) => (
//           <label key={opt.val} className="cursor-pointer relative flex-grow md:flex-grow-0 group">
//             <input type="radio" name={name} value={opt.val} className="peer sr-only" />
//             <div className="
//               px-4 py-2.5 rounded-lg text-sm font-medium text-center transition-all duration-300 
//               border border-white/10 bg-white/5 text-gray-300
              
//               peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-indigo-600 
//               peer-checked:text-white peer-checked:border-transparent 
//               peer-checked:shadow-[0_0_15px_rgba(124,58,237,0.4)]
              
//               group-hover:border-purple-500/30 group-hover:bg-white/10
//             ">
//               {opt.text}
//             </div>
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   // --- Section Header ---
//   const SectionHeader = ({ title, icon: Icon, colorClass = "text-cyan-400" }) => (
//     <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
//         <div className={`p-3 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] ${colorClass}`}>
//             <Icon size={24} />
//         </div>
//         <h2 className="text-2xl font-bold text-white tracking-wide">
//             {title}
//         </h2>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#0B001A] font-sans py-10 px-4 md:px-8 relative overflow-x-hidden">
      
//       {/* --- COSMIC BACKGROUND --- */}
//       <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
//         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] animate-pulse"></div>
//         <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
//       </div>

//       {/* Custom Alert (Included Inline for simplicity) */}
//       {alertState.isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
//             <div className="bg-[#1A0B2E] border border-purple-500/30 rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)]">
//                 <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none"></div>
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${alertState.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
//                     {alertState.type === 'success' ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{alertState.title}</h3>
//                 <p className="text-gray-400 mb-6">{alertState.message}</p>
//                 <button onClick={closeAlert} className="w-full py-3 rounded-xl font-bold bg-white text-purple-900 hover:bg-purple-50 transition-colors">
//                     {alertState.type === 'success' ? 'ঠিক আছে' : 'বন্ধ করুন'}
//                 </button>
//             </div>
//         </div>
//       )}

//       <div className="w-full max-w-5xl mx-auto relative z-10">
        
//         {/* --- GLASS HEADER --- */}
//         <div className="relative bg-[#1A0B2E]/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 text-center mb-12 border border-white/10 shadow-2xl overflow-hidden group">
            
//             {/* Header Glow Effects */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]"></div>
//             <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-[80px]"></div>
//             <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/20 rounded-full blur-[80px]"></div>

//             <div className="relative z-10 flex flex-col items-center">
//                 <div className="w-24 h-24 bg-gradient-to-b from-[#2E1065] to-[#0B001A] rounded-full p-1 shadow-[0_0_30px_rgba(139,92,246,0.3)] mb-6 border border-purple-500/30">
//                      <img src={logoPlaceholder} alt="Logo" className="w-full h-full object-contain rounded-full p-2" />
//                 </div>
                
//                 <h1 className="text-3xl md:text-6xl font-black text-white mb-3 tracking-tight drop-shadow-lg">
//                   ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট
//                 </h1>
                
//                 <div className="inline-flex items-center gap-2 bg-white/5 px-5 py-2 rounded-full text-gray-300 text-sm font-medium mb-8 border border-white/10 hover:bg-white/10 transition-colors">
//                     <MapPin size={16} className="text-red-400" /> নিমাইকাশারী, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ
//                 </div>

//                 <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 max-w-3xl w-full backdrop-blur-sm">
//                     <p className="font-bold text-amber-400 mb-2 flex items-center justify-center gap-2 text-lg">
//                         <Heart size={20} className="fill-amber-500 text-amber-500 animate-pulse" />
//                         সতর্কতা
//                     </p>
//                     <p className="text-sm text-amber-200/80 leading-relaxed">
//                         অনুগ্রহ করে <strong>আল্লাহকে সাক্ষী রেখে</strong> সঠিক তথ্য প্রদান করুন। আপনার দেওয়া তথ্যের ভিত্তিতেই শিক্ষার্থীর শিক্ষার মান ও গাইডলাইন নির্ধারণ করা হবে।
//                     </p>
//                 </div>
//             </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-10">
          
//           {/* 1. STUDENT INFO (Purple/Cyan Theme) */}
//           <div className="bg-[#130725]/80 backdrop-blur-lg rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-xl hover:border-cyan-500/30 transition-colors">
//             <SectionHeader title="শিক্ষার্থীর তথ্য" icon={User} colorClass="text-cyan-400" />
            
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//               <InputField width="md:col-span-6" label="শিক্ষার্থীর নাম" name="StudentName" required placeholder="বাংলায় পুরো নাম" icon={User} />
//               <InputField width="md:col-span-2" label="বয়স" name="Age" placeholder="১০" icon={Calendar} />
//               <InputField width="md:col-span-4" label="আগ্রহী শ্রেণি" name="Class" placeholder="ভর্তি হতে ইচ্ছুক শ্রেণি" icon={BookOpen} />
              
//               <div className="md:col-span-12 h-px bg-white/5 my-2"></div>
              
//               <InputField width="md:col-span-6" label="পূর্ববর্তী প্রতিষ্ঠানের নাম" name="PrevSchool" placeholder="আগের স্কুলের নাম" icon={School} />
//               <InputField width="md:col-span-6" label="পূর্ব অধ্যায়নকৃত শ্রেণি" name="PrevClass" placeholder="কোন ক্লাসে পড়ত" />
//               <InputField width="md:col-span-6" label="সর্বশেষ জিপিএ (GPA)" name="GPA" placeholder="প্রাপ্ত জিপিএ" icon={Star} />
//               <InputField width="md:col-span-6" label="পূর্ববর্তী রোল" name="Roll" placeholder="ক্লাস রোল" />
//             </div>
//           </div>

//           {/* 2. GUARDIAN INFO (Blue/Indigo Theme) */}
//           <div className="bg-[#0A0E26]/80 backdrop-blur-lg rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-xl hover:border-blue-500/30 transition-colors">
//             <SectionHeader title="অভিভাবকের তথ্য" icon={Users} colorClass="text-blue-400" />
            
//             <div className="space-y-8">
//               {/* Father */}
//               <div className="bg-blue-900/10 p-6 rounded-2xl border border-blue-500/20 relative">
//                   <span className="absolute -top-3 left-6 bg-[#1e3a8a] text-blue-200 px-3 py-0.5 text-xs font-bold rounded border border-blue-500/30">পিতার তথ্য</span>
//                   <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
//                       <InputField width="md:col-span-4" label="নাম" name="FatherName" required />
//                       <InputField width="md:col-span-3" label="পেশা" name="FatherJob" />
//                       <InputField width="md:col-span-2" label="শিক্ষাগত যোগ্যতা" name="FatherEdu" />
//                       <InputField width="md:col-span-3" label="মোবাইল" name="FatherMobile" required placeholder="01xxxxxxxxx" icon={Phone} />
//                   </div>
//               </div>
              
//               {/* Mother */}
//               <div className="bg-pink-900/10 p-6 rounded-2xl border border-pink-500/20 relative">
//                   <span className="absolute -top-3 left-6 bg-[#831843] text-pink-200 px-3 py-0.5 text-xs font-bold rounded border border-pink-500/30">মাতার তথ্য</span>
//                   <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
//                       <InputField width="md:col-span-4" label="নাম" name="MotherName" />
//                       <InputField width="md:col-span-3" label="পেশা" name="MotherJob" />
//                       <InputField width="md:col-span-2" label="শিক্ষাগত যোগ্যতা" name="MotherEdu" />
//                       <InputField width="md:col-span-3" label="মোবাইল" name="MotherMobile" icon={Phone} />
//                   </div>
//               </div>
              
//               {/* Address */}
//               <div>
//                   <label className="block text-sm font-bold text-blue-200 mb-3 flex items-center gap-2">
//                       <MapPin size={18} className="text-blue-500" /> বর্তমান ও স্থায়ী ঠিকানা
//                   </label>
//                   <textarea 
//                     name="Address" rows={3} 
//                     className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-[#1A0B2E]/50 text-white focus:border-blue-500 focus:bg-[#0F0518] focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none shadow-inner placeholder-gray-500" 
//                     placeholder="বিস্তারিত ঠিকানা লিখুন..."
//                   ></textarea>
//               </div>
//             </div>
//           </div>

//           {/* 3. FAMILY INFO (Emerald/Green Theme) */}
//           <div className="bg-[#022C22]/40 backdrop-blur-lg rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-xl hover:border-emerald-500/30 transition-colors">
//             <SectionHeader title="পারিবারিক পরিবেশ" icon={Home} colorClass="text-emerald-400" />
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <RadioGroup label="উপার্জন ১০০% হালাল কি?" name="HalalIncome" options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]} />
//               <RadioGroup label="উপার্জনক্ষম সদস্য কতজন?" name="Earners" options={[{val:'1', text:'১ জন'}, {val:'2', text:'২ জন'}, {val:'3+', text:'৩ জন+'}]} />
//               <RadioGroup label="পিতা-মাতা ৫ ওয়াক্ত নামাজ পড়েন?" name="ParentsPrayer" options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]} />
//               <RadioGroup label="মাদক/নেশায় আক্রান্ত কেউ আছে?" name="Addiction" options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]} />
//               <RadioGroup label="বাসায় টেলিভিশন আছে?" name="TV" options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]} />
//               <RadioGroup label="নিয়মিত কুরআন তিলাওয়াত হয়?" name="QuranRecitation" options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Sometimes', text:'মাঝেমাঝে'}]} />
//               <RadioGroup label="পারিবারিক ঝগড়া বিবাদ কেমন?" name="Quarrels" options={[{val:'Never', text:'হয় না'}, {val:'Often', text:'প্রায়ই'}, {val:'Sometimes', text:'মাঝেমাঝে'}]} />
//               <RadioGroup label="সদস্যরা পর্দা পালন করে?" name="Purdah" options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Trying', text:'চেষ্টা করা হয়'}]} />
//             </div>
//           </div>

//           {/* 4. BEHAVIOR INFO (Rose/Fuchsia Theme) */}
//           <div className="bg-[#2e0718]/50 backdrop-blur-lg rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-xl hover:border-rose-500/30 transition-colors">
//             <SectionHeader title="আচরণ ও দক্ষতা" icon={Activity} colorClass="text-rose-400" />
            
//             <div className="space-y-6">
//               <div className="p-1 border border-rose-500/20 rounded-2xl bg-rose-900/10">
//                  <RadioGroup label="সন্তান কি পড়তে পারে?" name="ReadingAbility" options={[{val:'Quran', text:'কুরআন'}, {val:'Ampara', text:'আম্মাপারা'}, {val:'Qaida', text:'কায়েদা'}, {val:'None', text:'কোনটিই নয়'}]} />
//               </div>

//               <div className="bg-[#1A0B2E]/50 p-6 rounded-2xl border border-white/10 hover:border-rose-500/40 transition-all shadow-inner group">
//                   <label className="block text-sm font-bold text-rose-200 mb-3 group-hover:text-rose-400 transition-colors">দৈনিক কত সময় মোবাইল ব্যবহার করে?</label>
//                   <div className="relative">
//                       <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400" />
//                       <input name="MobileUsage" type="text" placeholder="সময় উল্লেখ করুন" className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-[#0F0518] text-white focus:border-rose-500 focus:ring-4 focus:ring-rose-900/40 outline-none transition-all placeholder-gray-600" />
//                   </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <RadioGroup label="সন্তানের আচরণ কেমন?" name="GeneralBehavior" options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]} />
//                   <RadioGroup label="পিতা মাতার কথা শোনে?" name="Obedience" options={[{val:'Not At All', text:'না'}, {val:'Somewhat', text:'মোটামুটি'}, {val:'Fully', text:'পুরোপুরি'}]} />
//                   <RadioGroup label="বড়দের সাথে আচরণ?" name="ElderBehavior" options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]} />
//                   <RadioGroup label="ছোটদের সাথে আচরণ?" name="YoungerBehavior" options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]} />
//                   <RadioGroup label="মিথ্যা বলে বা জেদ করে?" name="LyingStubbornness" options={[{val:'Often', text:'প্রায়ই'}, {val:'Sometimes', text:'মাঝেমধ্যে'}, {val:'Rarely', text:'খুব কম'}, {val:'Never', text:'না'}]} />
//                   <RadioGroup label="কোন উন্নতি বেশি চান?" name="ImprovementGoal" options={[{val:'Manners', text:'আদব আখলাক'}, {val:'Physical', text:'শারীরিক'}]} />
//               </div>
//             </div>
//           </div>

//           {/* --- SUBMIT BUTTON --- */}
//           <div className="pt-10 pb-20 flex flex-col items-center">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`
//                 group relative px-16 py-4 rounded-full font-extrabold text-white text-xl shadow-[0_0_30px_rgba(139,92,246,0.5)]
//                 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] 
//                 hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] hover:-translate-y-1 hover:scale-105 
//                 active:scale-95 transition-all duration-300 overflow-hidden
//                 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
//               `}
//             >
//               <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
//               <span className="relative flex items-center gap-3">
//                 {isLoading ? (
//                    <span className="flex items-center gap-2">
//                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> 
//                      যাচাই হচ্ছে...
//                    </span>
//                 ) : (
//                    <> <FileText size={24} /> ফর্ম জমা দিন <Send size={24} className="group-hover:translate-x-1 transition-transform" /> </>
//                 )}
//               </span>
//             </button>
//             <p className="text-gray-400 text-xs mt-6 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
//               * সাবমিট করার আগে অনুগ্রহ করে উপরের সকল তথ্য পুনরায় চেক করে নিন
//             </p>
//           </div>

//         </form>
//       </div>

//       {/* Animations */}
//       <style jsx global>{`
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes bounceIn { 0% { transform: scale(0.8); opacity: 0; } 70% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); } }
//         @keyframes shine { 100% { left: 125%; } }
//         .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
//         .animate-bounceIn { animation: bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
//         .animate-shine { animation: shine 0.75s; }
//       `}</style>
//     </div>
//   );
// };

// export default AdmissionForm;


/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import Swal from "sweetalert2";

// const primaryPurple = "#4F0187";
// const lightPurple = "#8A2BE2";

// const AdmissionForm = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   // ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE
//   const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       await fetch(SCRIPT_URL, {
//         method: "POST",
//         body: formData,
//       });

//       // Success Alert
//       Swal.fire({
//         title: 'আলহামদুলিল্লাহ!',
//         text: 'ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।',
//         icon: 'success',
//         confirmButtonText: 'ঠিক আছে',
//         confirmButtonColor: primaryPurple,
//       });

//       form.reset(); // Clear the form after success
//     } catch (error) {
//       console.error("Error!", error);
      
//       // Error Alert
//       Swal.fire({
//         title: 'দুঃখিত!',
//         text: 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
//         icon: 'error',
//         confirmButtonText: 'বন্ধ করুন',
//         confirmButtonColor: '#d33',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-2 md:p-12">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-8 space-y-2">
//           <h1 className="text-3xl md:text-4xl font-bold text-purple-900">
//             ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট
//           </h1>
//           <p className="text-gray-600 text-sm md:text-base ">নিমাইকাশারী, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ-১৪৩০</p>
          
//           <div className="py-4">
//             <span className="inline-block border-2 border-purple-800 rounded-full px-8 py-2 text-lg font-bold text-purple-900 shadow-sm bg-purple-50">
//               ভর্তি যাচাই ফর্ম
//             </span>
//           </div>

//           <div className="text-sm md:text-base text-gray-700 mt-4 space-y-1">
//             <p className="font-semibold text-purple-800">আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন</p>
//             <p className="text-xs md:text-sm text-gray-500">
//               এখানে নির্ভুল তথ্য প্রদান করুন। নিম্ন প্রদত্ত তথ্য অনুযায়ী শিক্ষার্থীর পড়াশোনার মান নির্ধারণ করা হবে, তাই তথ্য প্রদানে আপনার মনোযোগ আকর্ষণ করছি।
//             </p>
//           </div>

         
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
          
//           {/* --- SECTION 1: STUDENT INFO --- */}
//           <section className="bg-purple-50 p-2 md:p-6 rounded-xl border border-purple-100">
//             <h2 className="text-xl font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2 inline-block">
//               শিক্ষার্থীর প্রাথমিক তথ্য
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">শিক্ষার্থীর নাম:</label>
//                 <input name="StudentName" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">বয়স:</label>
//                 <input name="Age" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">যে ক্লাসে ভর্তি হতে আগ্রহী:</label>
//                 <input name="Class" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ববর্তী প্রতিষ্ঠানের নাম:</label>
//                 <input name="PrevSchool" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ:</label>
//                 <input name="PrevClass" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">সর্বশেষ পরীক্ষায় প্রাপ্ত জিপিএ:</label>
//                 <input name="GPA" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ববর্তী শ্রেণির রোল:</label>
//                 <input name="Roll" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//             </div>
//           </section>

//           {/* --- SECTION 2: GUARDIAN INFO --- */}
//           <section className="bg-purple-50 p-2 md:p-6 rounded-xl border border-purple-100">
//             <h2 className="text-xl font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2 inline-block">
//               অভিভাবকের প্রাথমিক তথ্য
//             </h2>
            
//             {/* Father */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
//               <div className="md:col-span-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পিতার নাম:</label>
//                 <input name="FatherName" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পেশা:</label>
//                 <input name="FatherJob" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">শিক্ষাগত যোগ্যতা:</label>
//                 <input name="FatherEdu" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">মোবাইল:</label>
//                 <input name="FatherMobile" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//             </div>

//             {/* Mother */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
//               <div className="md:col-span-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">মাতার নাম:</label>
//                 <input name="MotherName" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পেশা:</label>
//                 <input name="MotherJob" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">শিক্ষাগত যোগ্যতা:</label>
//                 <input name="MotherEdu" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">মোবাইল:</label>
//                 <input name="MotherMobile" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">ঠিকানা:</label>
//               <textarea name="Address" rows={2} className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" placeholder="বর্তমান এবং স্থায়ী ঠিকানা..."></textarea>
//             </div>
//           </section>

//           {/* --- SECTION 3: FAMILY INFO --- */}
//           <section className="bg-white p-2 md:p-6 rounded-xl border border-gray-200 shadow-sm">
//             <h2 className="text-xl font-bold text-purple-900 border-b-2 border-purple-200 inline-block pb-1 mb-6">
//               পারিবারিক তথ্য ও পরিবেশ
//             </h2>

//             <div className="space-y-4 text-gray-800">
//               {/* Question 1 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> আপনার পরিবারের উপার্জন ১০০% হালাল কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="HalalIncome" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="HalalIncome" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 2 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> পরিবারের উপার্জনক্ষম সদস্য কতজন?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="Earners" value="1" className="accent-purple-600" /> ১ জন</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Earners" value="2" className="accent-purple-600" /> ২ জন</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Earners" value="3+" className="accent-purple-600" /> ৩ জন+</label>
//                 </div>
//               </div>

//               {/* Question 3 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="ParentsPrayer" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="ParentsPrayer" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 4 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত আছে কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="Addiction" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Addiction" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 5 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> বাসায় টেলিভিশন আছে কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="TV" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="TV" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 6 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="No" className="accent-purple-600" /> না</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="Sometimes" className="accent-purple-600" /> মাঝেমাঝে</label>
//                 </div>
//               </div>

//               {/* Question 7 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> পরিবারে সদস্যদের মধ্যে ঝগড়া বিবাদ কেমন হয়?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Never" className="accent-purple-600" /> হয় না</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Often" className="accent-purple-600" /> প্রায়শই হয়</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Sometimes" className="accent-purple-600" /> মাঝেমাঝে</label>
//                 </div>
//               </div>

//               {/* Question 8 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                 <span className="font-bold"> পরিবারের সদস্যরা পর্দা পালন করে কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="No" className="accent-purple-600" /> না</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="Trying" className="accent-purple-600" /> চেষ্টা করা হয়</label>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* --- SECTION 4: BEHAVIOR INFO --- */}
//           <section className="bg-white p-2 md:p-6 rounded-xl border border-gray-200 shadow-sm">
//             <h2 className="text-xl font-bold text-purple-900 border-b-2 border-purple-200 inline-block pb-1 mb-6">
//               ভর্তিচ্ছু শিক্ষার্থীর আচরণ সম্পর্কিত তথ্য
//             </h2>

//             <div className="space-y-4 text-gray-800">
//               {/* Behavior 1 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> আপনার সন্তান কি পড়তে পারে?</span>
//                 <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Quran" className="accent-purple-600" /> কুরআন</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Ampara" className="accent-purple-600" /> আম্মাপারা</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Qaida" className="accent-purple-600" /> কায়েদা</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="None" className="accent-purple-600" /> কোনটিই নয়</label>
//                 </div>
//               </div>

//               {/* Behavior 2 */}
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold whitespace-nowrap"> দৈনিক কত সময় মোবাইল ব্যবহার করে?</span>
//                 <input name="MobileUsage" type="text" placeholder="(লিখুন)" className="border-b border-gray-400 focus:outline-none flex-grow text-purple-800 px-2" />
//               </div>

//               {/* Behavior 3 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> আপনার সন্তানের আচরণ কেমন?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
//                 </div>
//               </div>

//               {/* Behavior 4 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> আপনার সন্তান পিতা মাতার কথা শোনে?</span>
//                 <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Not At All" className="accent-purple-600" /> মোটেই শোনে না</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Somewhat" className="accent-purple-600" /> মোটামুটি শোনে</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Fully" className="accent-purple-600" /> পুরোপুরি শোনে</label>
//                 </div>
//               </div>

//               {/* Behavior 5 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> পরিবারের বড়দের সাথে ওর আচরণ কেমন?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
//                 </div>
//               </div>

//               {/* Behavior 6 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> পরিবারের ছোটদের সাথে ওর আচরণ কেমন?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
//                 </div>
//               </div>

//               {/* Behavior 7 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold"> সন্তান কি মিথ্যা বলে? বা জেদ করে?</span>
//                 <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-2 md:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Often" className="accent-purple-600" /> প্রায়ই করে</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Sometimes" className="accent-purple-600" /> মাঝেমধ্যে করে</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Rarely" className="accent-purple-600" /> খুব কম করে</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Never" className="accent-purple-600" /> করে না</label>
//                 </div>
//               </div>

//               {/* Behavior 8 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//                 <span className="font-bold"> আপনার সন্তানকে পড়াশোনার পাশাপাশি কোন দিকটিতে বেশি উন্নতি করতে চান?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="ImprovementGoal" value="Manners" className="accent-purple-600" /> আদব আখলাক</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="ImprovementGoal" value="Physical" className="accent-purple-600" /> শারীরিক দক্ষতা</label>
//                 </div>
//               </div>

//             </div>
//           </section>

//           {/* --- SUBMIT BUTTON --- */}
//           <div className="text-center pt-6">
//             <button
//               type="submit"
//               disabled={isLoading}
//               style={{ background: `linear-gradient(to right, ${primaryPurple}, ${lightPurple})` }}
//               className={`text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition transform duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'}`}
//             >
//               {isLoading ? "পাঠানো হচ্ছে..." : "সাবমিট করুন"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdmissionForm;