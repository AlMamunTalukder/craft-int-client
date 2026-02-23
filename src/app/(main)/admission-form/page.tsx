// // /* eslint-disable @typescript-eslint/no-unused-vars */
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import {
// //   User,
// //   Users,
// //   Home,
// //   Activity,
// //   Send,
// //   School,
// //   Phone,
// //   MapPin,
// //   Heart,
// //   CheckCircle,
// //   AlertCircle,
// //   Calendar,
// //   BookOpen,
// //   Star,
// //   Sparkles,
// //   Award,
// //   Rocket,
// //   ShieldCheck,
// //   Clock,
// //   Shield,
// //   FileText,
// // } from "lucide-react";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Input } from "@/components/ui/input";

// // // --- Enhanced Input Component ---
// // const InputField = ({
// //   label,
// //   name,
// //   type = "text",
// //   required = false,
// //   placeholder = "",
// //   width = "col-span-1",
// //   icon: Icon,
// //   formData,
// //   handleInputChange,
// // }: any) => (
// //   <div className={`${width} group`}>
// //     <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
// //       {label} {required && <span className="text-red-500">*</span>}
// //     </label>
// //     <div className="relative">
// //       {Icon && (
// //         <Icon
// //           className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
// //           size={18}
// //         />
// //       )}
// //       <Input
// //         name={name}
// //         required={required}
// //         type={type}
// //         placeholder={placeholder}
// //         value={formData?.[name] || ""}
// //         onChange={(e) => handleInputChange(name, e.target.value)}
// //         className={`w-full ${
// //           Icon ? "pl-11" : "pl-4"
// //         } pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
// //       />
// //     </div>
// //   </div>
// // );

// // // --- Enhanced TextArea Component ---
// // const TextAreaField = ({
// //   label,
// //   name,
// //   required = false,
// //   placeholder = "",
// //   icon: Icon,
// //   formData,
// //   handleInputChange,
// // }: any) => (
// //   <div className="group">
// //     <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
// //       {Icon && <Icon size={16} className="text-emerald-600" />} {label}
// //     </label>
// //     <Textarea
// //       name={name}
// //       required={required}
// //       value={formData?.[name] || ""}
// //       onChange={(e) => handleInputChange(name, e.target.value)}
// //       rows={3}
// //       className="w-full px-5 py-4 rounded-2xl border border-emerald-200 bg-white/70 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none shadow-sm placeholder-gray-400"
// //       placeholder={placeholder}
// //     />
// //   </div>
// // );

// // // --- Enhanced Radio Group ---
// // const RadioGroup = ({
// //   label,
// //   name,
// //   options,
// //   formData,
// //   handleInputChange,
// // }: any) => (
// //   <div className="bg-white/80 p-4 rounded-xl border border-white/50 hover:border-purple-200 hover:shadow-md transition-all duration-300">
// //     <label className="block text-sm font-bold text-gray-800 mb-3 border-b border-dashed border-gray-200 pb-2">
// //       {label}
// //     </label>
// //     <div className="flex flex-wrap gap-1.5 md:gap-3">
// //       {options.map((opt: any) => (
// //         <label key={opt.val} className="relative cursor-pointer group">
// //           <input
// //             type="radio"
// //             name={name}
// //             value={opt.val}
// //             checked={formData?.[name] === opt.val}
// //             onChange={(e) => handleInputChange(name, e.target.value)}
// //             className="peer sr-only"
// //           />
// //           <div
// //             className="px-3 md:px-4 py-2 rounded-full border border-gray-200 bg-white/50 text-gray-600 text-sm font-medium transition-all
// //             peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600 peer-checked:shadow-lg
// //             group-hover:border-purple-300"
// //           >
// //             {opt.text}
// //           </div>
// //         </label>
// //       ))}
// //     </div>
// //   </div>
// // );

// // // --- Custom Alert Modal Component ---
// // const CustomAlert = ({ isOpen, type, title, message, onClose }: any) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center p-4 bg-[#0F0518]/80 backdrop-blur-md animate-fadeIn">
// //       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 transform transition-all scale-100 animate-bounceIn text-center relative overflow-hidden border-t-8 border-purple-600">
// //         <div
// //           className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${
// //             type === "success"
// //               ? "bg-green-100 text-green-600"
// //               : "bg-red-100 text-red-600"
// //           }`}
// //         >
// //           {type === "success" ? (
// //             <CheckCircle size={40} strokeWidth={2.5} />
// //           ) : (
// //             <AlertCircle size={40} strokeWidth={2.5} />
// //           )}
// //         </div>
// //         <h3
// //           className={`text-2xl font-bold mb-3 ${
// //             type === "success" ? "text-green-800" : "text-red-800"
// //           }`}
// //         >
// //           {title}
// //         </h3>
// //         <p className="text-gray-600 mb-8 text-base leading-relaxed">
// //           {message}
// //         </p>
// //         <button
// //           onClick={onClose}
// //           className={`w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
// //             type === "success"
// //               ? "bg-gradient-to-r from-green-500 to-green-700 shadow-green-200"
// //               : "bg-gradient-to-r from-red-500 to-red-700 shadow-red-200"
// //           }`}
// //         >
// //           {type === "success" ? "আলহামদুলিল্লাহ" : "বন্ধ করুন"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const AdmissionForm = () => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [alertState, setAlertState] = useState({
// //     isOpen: false,
// //     type: "success",
// //     title: "",
// //     message: "",
// //   });
// //   const [visibleSections, setVisibleSections] = useState<Set<string>>(
// //     new Set(["header"])
// //   );
// //   const [formData, setFormData] = useState<Record<string, string>>({});

// //   const SCRIPT_URL =
// //     "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec";

// //   // Load saved form data from localStorage
// //   useEffect(() => {
// //     const savedData = localStorage.getItem("admissionFormData");
// //     if (savedData) {
// //       setFormData(JSON.parse(savedData));
// //     }
// //   }, []);

// //   // Save form data to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("admissionFormData", JSON.stringify(formData));
// //   }, [formData]);

// //   // Intersection Observer for scroll animations
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setVisibleSections((prev) => {
// //               const newSet = new Set(prev);
// //               newSet.add(entry.target.id);
// //               return newSet;
// //             });
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     document.querySelectorAll(".animated-section").forEach((section) => {
// //       if (section.id) {
// //         observer.observe(section);
// //       }
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   const showAlert = (type: string, title: string, message: string) => {
// //     setAlertState({ isOpen: true, type, title, message });
// //   };

// //   const closeAlert = () => {
// //     setAlertState({ ...alertState, isOpen: false });
// //   };

// //   const handleInputChange = (name: string, value: string) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     const form = e.currentTarget;
// //     const formDataToSubmit = new FormData(form);

// //     try {
// //       const response = await fetch(SCRIPT_URL, {
// //         method: "POST",
// //         body: formDataToSubmit,
// //       });

// //       if (response.ok) {
// //         showAlert(
// //           "success",
// //           "আলহামদুলিল্লাহ!",
// //           "আপনার ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে। শীঘ্রই অফিস থেকে যোগাযোগ করা হবে।"
// //         );
// //         form.reset();
// //         localStorage.removeItem("admissionFormData");
// //         setFormData({});
// //       } else {
// //         throw new Error("Server response not OK");
// //       }
// //     } catch (error) {
// //       console.error("Error!", error);
// //       showAlert(
// //         "error",
// //         "দুঃখিত!",
// //         "সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।"
// //       );
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4 md:px-8 relative">
// //       {/* Enhanced Background Design */}
// //       <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#2E0249] via-[#4F0187] to-transparent"></div>
// //       {/* <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div> */}
// //       <div className="absolute top-[300px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
// //       <div className="absolute bottom-[-100px] left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>

// //       {/* Floating Elements */}
// //       <div className="absolute top-20 left-10 animate-float">
// //         <div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
// //       </div>
// //       <div className="absolute top-40 right-20 animate-float delay-1000">
// //         <div className="w-6 h-6 bg-pink-500/20 rounded-full"></div>
// //       </div>

// //       <CustomAlert
// //         isOpen={alertState.isOpen}
// //         type={alertState.type}
// //         title={alertState.title}
// //         message={alertState.message}
// //         onClose={closeAlert}
// //       />

// //       <div className="w-full max-w-6xl mx-auto relative">
// //         {/* UNIQUE HEADER DESIGN */}
// //         <div>
// //           <div className="bg-gradient-to-br from-white/95 via-purple-50/95 to-white/95 rounded-[1rem] md:rounded-[3rem] shadow-2xl p-4 md:p-12 text-center mb-12 border-2 border-white/50 relative overflow-hidden backdrop-blur-sm">
// //             {/* Main Header Gradient Bar */}
// //             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-purple-500 to-indigo-500"></div>

// //             {/* Animated Background Elements */}
// //             <div className="absolute top-0 right-0 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
// //             <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
// //             {/* ------------------------------------- */}
// // <div className="relative">
// //   {/* Premium Header Design */}
// //   <div className="mb-16">
// //     {/* Luxury Background Elements */}
// //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //       {/* Islamic Geometric Patterns */}
// //       <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
// //         <div className="absolute top-20 left-10 w-40 h-40 border-2 border-purple-500 rounded-full"></div>
// //         <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-blue-500 rotate-45"></div>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-2 border-indigo-500 rounded-full opacity-50"></div>
// //       </div>

// //       {/* Animated Floating Elements */}
// //       <div className="absolute top-1/4 left-1/5">
// //         <div className="w-6 h-6 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
// //       </div>
// //       <div className="absolute top-1/3 right-1/4">
// //         <div className="w-4 h-4 border-2 border-blue-400/40 rounded-full animate-bounce"></div>
// //       </div>
// //       <div className="absolute bottom-1/4 left-1/3">
// //         <div className="w-8 h-8 border-2 border-indigo-400/20 rounded-full animate-ping"></div>
// //       </div>


// //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-full blur-2xl"></div>
// //     </div>

// //     {/* Main Title Section - Extra Care Design */}
// //     <div className="relative text-center mb-6">
// //       {/* Premium Border Frame */}

      
// //       {/* Ornamental Top Decoration */}
// //       {/* <div className="flex justify-center mb-8">
// //         <div className="relative">
// //           <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg"></div>
// //           <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl border-2 border-white/20 flex items-center gap-3">
// //             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
// //             <span>প্রিমিয়াম এডমিশন পোর্টাল</span>
// //             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
// //           </div>
// //         </div>
// //       </div> */}

// //       {/* Main Title with Islamic Artistry */}
// //       <div className="relative mb-8">
// //         {/* Background Arabic Calligraphy Effect */}
// //         <div className="absolute inset-0 flex items-center justify-center opacity-5">
// //           <span className="text-9xl font-arabic">﷽</span>
// //         </div>

// //         {/* Title Container */}
// //         <div className="relative">
// //           {/* Shimmer Effect */}
// //           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
          
// //           {/* Main Bengali Title */}
// //           <h1 className="text-6xl md:text-9xl font-black bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 bg-clip-text text-transparent relative mb-6 pt-6 tracking-tightest leading-none ">
// //             ভর্তি যাচাই ফর্ম
// //           </h1>

          
// //         </div>
// //       </div>

// //       {/* Premium Separator */}
// //       <div className="flex items-center justify-center gap-6 ">
// //         <div className="w-20 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
// //         <div className="flex items-center gap-4">
// //           <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
// //           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
// //           <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-700"></div>
// //         </div>
// //         <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
// //       </div>

      
// //     </div>
// //   </div>
// //   </div>
// //             {/* ----------------------------------- */}
// //             <div className="relative">
// //               {/* Premium Header Design */}
// //               <div className="mb-12">
// //                 {/* Animated Background Elements */}
// //                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //                   {/* Floating Particles */}
// //                   <div className="absolute top-10 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-60"></div>
// //                   <div className="absolute top-20 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-40 animation-delay-1000"></div>
// //                   <div className="absolute bottom-10 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-50 animation-delay-2000"></div>

// //                   {/* Gradient Orbs */}
               
// //                 </div>

// //                 {/* Main Title with Premium Design */}
                
// //               </div>

// //               {/* Premium Important Notice - Unique Design */}
// //               <div className="relative max-w-5xl mx-auto">
// //                 {/* Background Effects */}
              
               
// //                 {/* Main Card */}
// //                 <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-300/50 rounded-3xl p-3 backdrop-blur-sm overflow-hidden">
// //                   {/* Corner Accents */}
        

// //                   {/* Content */}
// //                   <div className="text-center pt-8 pb-6">
// //                     {/* Islamic Touch */}

// //                     {/* Main Message */}
// //                     <p className="font-bold text-amber-800 mb-4 text-2xl md:text-3xl leading-tight flex items-center justify-center gap-4">
// //                       <ShieldCheck size={32} className="text-amber-600" />
// //                       আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন
// //                       <ShieldCheck size={32} className="text-amber-600" />
// //                     </p>

// //                     {/* Description */}
// //                     <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 mt-6">
// //                       <p className="text-amber-700/90 leading-relaxed text-lg font-medium mb-4">
// //                         আপনার সন্তানকে ভর্তি করাতে আগ্রহী হলে, অনুগ্রহ করে নিচের
// //                         ফর্মটি পূরণ করুন।
// //                       </p>
// //                       <p className="text-amber-600/80 leading-relaxed">
// //                         ফর্মটি পাওয়ার পর, আমাদের টিম খুব শীঘ্রই আপনার সাথে
// //                         যোগাযোগ করবে।
// //                       </p>
// //                     </div>

// //                     {/* Decorative Bottom */}
// //                     <div className="flex justify-center mt-6">
// //                       <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             {/* -------------------------- */}
// //           </div>
// //         </div>

// //         {/* FORM SECTIONS */}
// //         <form onSubmit={handleSubmit} className="space-y-8">
// //           {/* SECTION 1: STUDENT INFO */}
// //           <div>
// //             <div className="bg-gradient-to-br from-blue-50/80 to-cyan-100/80 rounded-2xl md:rounded-3xl shadow-xl border-2 border-blue-200/50 overflow-hidden backdrop-blur-sm">
// //               <div className="bg-gradient-to-r from-blue-100/80 to-blue-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-blue-200 flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-700">
// //                   <User size={24} />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-900">
// //                     শিক্ষার্থীর তথ্য
// //                   </h2>
// //                   <p className="text-sm text-gray-600">
// //                     শিক্ষার্থীর ব্যক্তিগত এবং একাডেমিক তথ্য
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="p-3 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
// //                 <InputField
// //                   width="md:col-span-6"
// //                   label="শিক্ষার্থীর নাম"
// //                   name="StudentName"
// //                   required
// //                   placeholder="বাংলায় পুরো নাম"
// //                   icon={User}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <InputField
// //                   width="md:col-span-3"
// //                   label="বয়স"
// //                   name="Age"
// //                   placeholder="যেমন: ১০"
// //                   icon={Calendar}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <InputField
// //                   width="md:col-span-3"
// //                   label="আগ্রহী শ্রেণি"
// //                   name="Class"
// //                   placeholder="ভর্তি হতে ইচ্ছুক শ্রেণি"
// //                   icon={BookOpen}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />

// //                 <div className="md:col-span-12 border-t border-dashed border-blue-300/50 my-4"></div>

// //                 <InputField
// //                   width="md:col-span-6"
// //                   label="পূর্ববর্তী প্রতিষ্ঠানের নাম"
// //                   name="PrevSchool"
// //                   placeholder="আগের স্কুলের নাম"
// //                   icon={School}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <InputField
// //                   width="md:col-span-6"
// //                   label="পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ"
// //                   name="PrevClass"
// //                   placeholder="কোন ক্লাসে পড়ত"
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />

// //                 <InputField
// //                   width="md:col-span-6"
// //                   label="সর্বশেষ জিপিএ (GPA)"
// //                   name="GPA"
// //                   placeholder="প্রাপ্ত জিপিএ"
// //                   icon={Star}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <InputField
// //                   width="md:col-span-6"
// //                   label="পূর্ববর্তী রোল"
// //                   name="Roll"
// //                   placeholder="ক্লাস রোল"
// //                   icon={Award}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* SECTION 2: GUARDIAN INFO */}
// //           <div>
// //             <div className="bg-gradient-to-br from-emerald-50/80 to-green-100/80 rounded-2xl md:rounded-3xl shadow-xl border-2 border-emerald-200/50 overflow-hidden backdrop-blur-sm">
// //               <div className="bg-gradient-to-r from-emerald-100/80 to-green-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-emerald-200 flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-700">
// //                   <Users size={24} />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-900">
// //                     অভিভাবকের তথ্য
// //                   </h2>
// //                   <p className="text-sm text-gray-600">
// //                     পিতা ও মাতার বিস্তারিত তথ্য
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="px-3 md:px-8 py-5 md:py-8 space-y-8">
// //                 {/* Father Info */}
// //                 <div className="relative p-3 md:p-6 rounded-2xl bg-white/60 border border-blue-200 shadow-sm">
// //                   <div className="absolute -top-3 left-6 bg-blue-100 px-3 py-1 rounded-md text-xs font-bold text-blue-700 uppercase border border-blue-200">
// //                     পিতার তথ্য
// //                   </div>
// //                   <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
// //                     <InputField
// //                       width="md:col-span-4"
// //                       label="পিতার নাম"
// //                       name="FatherName"
// //                       required
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                     <InputField
// //                       width="md:col-span-3"
// //                       label="পেশা"
// //                       name="FatherJob"
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                     <InputField
// //                       width="md:col-span-3"
// //                       label="শিক্ষাগত যোগ্যতা"
// //                       name="FatherEdu"
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                     <InputField
// //                       width="md:col-span-2"
// //                       label="মোবাইল"
// //                       name="FatherMobile"
// //                       required
// //                       placeholder="017xxxxxxxx"
// //                       icon={Phone}
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Mother Info */}
// //                 <div className="relative p-3 md:p-6 rounded-2xl bg-white/60 border border-pink-200 shadow-sm">
// //                   <div className="absolute -top-3 left-6 bg-pink-100 px-3 py-1 rounded-md text-xs font-bold text-pink-700 uppercase tracking-wider border border-pink-200">
// //                     মাতার তথ্য
// //                   </div>
// //                   <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-2">
// //                     <InputField
// //                       width="md:col-span-4"
// //                       label="মাতার নাম"
// //                       name="MotherName"
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                     <InputField
// //                       width="md:col-span-3"
// //                       label="পেশা"
// //                       name="MotherJob"
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                     <InputField
// //                       width="md:col-span-3"
// //                       label="শিক্ষাগত যোগ্যতা"
// //                       name="MotherEdu"
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                     <InputField
// //                       width="md:col-span-2"
// //                       label="মোবাইল"
// //                       name="MotherMobile"
// //                       icon={Phone}
// //                       formData={formData}
// //                       handleInputChange={handleInputChange}
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Address */}
// //                 <TextAreaField
// //                   label="ঠিকানা"
// //                   name="Address"
// //                   placeholder="বর্তমান এবং স্থায়ী ঠিকানা বিস্তারিত লিখুন..."
// //                   icon={MapPin}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* SECTION 3: FAMILY INFO */}
// //           <div>
// //             <div className="bg-gradient-to-br from-amber-50/80 to-orange-100/80 rounded-3xl shadow-xl border-2 border-amber-200/50 overflow-hidden backdrop-blur-sm">
// //               <div className="bg-gradient-to-r from-amber-100/80 to-orange-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-amber-200 flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-700">
// //                   <Home size={24} />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-900">
// //                     পারিবারিক পরিবেশ
// //                   </h2>
// //                   <p className="text-sm text-gray-600">
// //                     পারিবারিক মূল্যবোধ ও সংস্কৃতি
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="p-3 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <RadioGroup
// //                   label="আপনার পরিবারের উপার্জন ১০০% হালাল কি?"
// //                   name="HalalIncome"
// //                   options={[
// //                     { val: "Yes", text: "হ্যাঁ" },
// //                     { val: "No", text: "না" },
// //                   ]}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <RadioGroup
// //                   label=" পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?"
// //                   name="ParentsPrayer"
// //                   options={[
// //                     { val: "Yes", text: "হ্যাঁ" },
// //                     { val: "No", text: "না" },
// //                   ]}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <RadioGroup
// //                   label=" পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত?"
// //                   name="Addiction"
// //                   options={[
// //                     { val: "Yes", text: "হ্যাঁ" },
// //                     { val: "No", text: "না" },
// //                   ]}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <RadioGroup
// //                   label=" বাসায় টেলিভিশন আছে কি?"
// //                   name="TV"
// //                   options={[
// //                     { val: "Yes", text: "হ্যাঁ" },
// //                     { val: "No", text: "না" },
// //                   ]}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <RadioGroup
// //                   label=" বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?"
// //                   name="QuranRecitation"
// //                   options={[
// //                     { val: "Yes", text: "হ্যাঁ" },
// //                     { val: "No", text: "না" },
// //                     { val: "Sometimes", text: "মাঝেমাঝে" },
// //                   ]}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //                 <RadioGroup
// //                   label=" পরিবারের সদস্যরা পর্দা পালন করে কি?"
// //                   name="Purdah"
// //                   options={[
// //                     { val: "Yes", text: "হ্যাঁ" },
// //                     { val: "No", text: "না" },
// //                     { val: "Trying", text: "চেষ্টা করা হয়" },
// //                   ]}
// //                   formData={formData}
// //                   handleInputChange={handleInputChange}
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* SECTION 4: BEHAVIOR INFO */}
// //           <div>
// //             <div className="bg-gradient-to-br from-rose-50/80 to-pink-100/80 rounded-3xl shadow-xl border-2 border-rose-200/50 overflow-hidden backdrop-blur-sm">
// //               <div className="bg-gradient-to-r from-rose-100/80 to-pink-200/50 px-2.5 md:px-8 py-2 md:py-6 border-b border-rose-200 flex items-center gap-4">
// //                 <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-700">
// //                   <Activity size={24} />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-gray-900">
// //                     আচরণ ও দক্ষতা
// //                   </h2>
// //                   <p className="text-sm text-gray-600">
// //                     শিক্ষার্থীর আচরণগত বৈশিষ্ট্য
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="px-3 md:px-8 py-5 md:py-8 space-y-8">
// //                 {/* Mobile Usage */}
// //                 <div className="bg-white/60 p-3 md:p-6 rounded-2xl border border-rose-200 shadow-sm">
// //                   <label className="block text-sm font-bold text-gray-800 mb-3">
// //                     {" "}
// //                     দৈনিক কত সময় মোবাইল ব্যবহার করে?
// //                   </label>
// //                   <div className="relative">
// //                     <Phone
// //                       size={20}
// //                       className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400"
// //                     />
// //                     <Input
// //                       name="MobileUsage"
// //                       type="text"
// //                       placeholder="সময় উল্লেখ করুন (যেমন: ১ ঘণ্টা)"
// //                       value={formData?.["MobileUsage"] || ""}
// //                       onChange={(e) =>
// //                         handleInputChange("MobileUsage", e.target.value)
// //                       }
// //                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 bg-white/50 focus:bg-white focus:ring-4 focus:ring-rose-100 focus:border-rose-400 outline-none transition-all"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Additional Behavior Radio Groups */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <RadioGroup
// //                     label=" সন্তানের আচরণ কেমন?"
// //                     name="GeneralBehavior"
// //                     options={[
// //                       { val: "Very Good", text: "অনেক ভালো" },
// //                       { val: "Good", text: "মোটামুটি" },
// //                       { val: "Average", text: "ভাল নয়" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" পিতা মাতার কথা শোনে?"
// //                     name="Obedience"
// //                     options={[
// //                       { val: "Not At All", text: "না" },
// //                       { val: "Somewhat", text: "মোটামুটি" },
// //                       { val: "Fully", text: "পুরোপুরি" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" বড়দের সাথে আচরণ?"
// //                     name="ElderBehavior"
// //                     options={[
// //                       { val: "Very Good", text: "অনেক ভালো" },
// //                       { val: "Good", text: "মোটামুটি" },
// //                       { val: "Average", text: "ভাল নয়" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" ছোটদের সাথে আচরণ?"
// //                     name="YoungerBehavior"
// //                     options={[
// //                       { val: "Very Good", text: "অনেক ভালো" },
// //                       { val: "Good", text: "মোটামুটি" },
// //                       { val: "Average", text: "ভাল নয়" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" মিথ্যা বলে বা জেদ করে?"
// //                     name="LyingStubbornness"
// //                     options={[
// //                       { val: "Too Much", text: "খুব বেশি" },
// //                       { val: "Sometimes", text: "মাঝেমাঝে" },
// //                       { val: "Never", text: "না" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" পড়ালেখায় আগ্রহ?"
// //                     name="StudyInterest"
// //                     options={[
// //                       { val: "Very Interested", text: "খুব আগ্রহী" },
// //                       { val: "Moderate", text: "মোটামুটি" },
// //                       { val: "Less Interested", text: "কম আগ্রহী" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" ধর্মীয় কাজে আগ্রহ?"
// //                     name="ReligiousInterest"
// //                     options={[
// //                       { val: "Very Interested", text: "খুব আগ্রহী" },
// //                       { val: "Moderate", text: "মোটামুটি" },
// //                       { val: "Less Interested", text: "কম আগ্রহী" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                   <RadioGroup
// //                     label=" রাগ নিয়ন্ত্রণ?"
// //                     name="AngerControl"
// //                     options={[
// //                       { val: "Excellent", text: "মোটামুটি" },
// //                       { val: "Good", text: "ভাল" },
// //                       { val: "Needs Improvement", text: "উন্নতি প্রয়োজন" },
// //                     ]}
// //                     formData={formData}
// //                     handleInputChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* SUBMIT BUTTON */}
// //           <div>
// //             <div className="pt-8 pb-20 text-center">
// //               <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className={`
// //                   group relative inline-flex items-center justify-center px-10 md:px-16 py-5 rounded-2xl font-bold text-white text-xl 
// //                   shadow-[0_20px_40px_rgba(124,58,237,0.4)] bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]
// //                   hover:shadow-[0_30px_50px_rgba(124,58,237,0.6)] hover:-translate-y-2 hover:scale-105
// //                   active:scale-95 transition-all duration-500 overflow-hidden border-2 border-white/20
// //                   ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
// //                 `}
// //               >
// //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

// //                 <span className="relative flex items-center gap-3">
// //                   {isLoading ? (
// //                     <span className="flex items-center gap-3">
// //                       <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
// //                       প্রসেসিং...
// //                     </span>
// //                   ) : (
// //                     <>
// //                       <Send
// //                         size={24}
// //                         className="group-hover:translate-x-1 transition-transform duration-300"
// //                       />
// //                       সাবমিট করুন
// //                       <Sparkles
// //                         size={20}
// //                         className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //                       />
// //                     </>
// //                   )}
// //                 </span>
// //               </button>
// //               <p className="text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
// //                 <CheckCircle size={16} className="text-green-500" />
// //                 সাবমিট করার পূর্বে তথ্যগুলো পুনরায় চেক করুন।
// //               </p>
// //             </div>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Enhanced Global Styles */}
// //       <style jsx global>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         @keyframes bounceIn {
// //           0% {
// //             transform: scale(0.8);
// //             opacity: 0;
// //           }
// //           70% {
// //             transform: scale(1.05);
// //             opacity: 1;
// //           }
// //           100% {
// //             transform: scale(1);
// //           }
// //         }
// //         @keyframes shine {
// //           100% {
// //             left: 125%;
// //           }
// //         }
// //         @keyframes float {
// //           0%,
// //           100% {
// //             transform: translateY(0px);
// //           }
// //           50% {
// //             transform: translateY(-20px);
// //           }
// //         }
// //         .animate-fadeIn {
// //           animation: fadeIn 0.6s ease-out forwards;
// //         }
// //         .animate-bounceIn {
// //           animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
// //             forwards;
// //         }
// //         .animate-shine {
// //           animation: shine 0.75s;
// //         }
// //         .animate-float {
// //           animation: float 6s ease-in-out infinite;
// //         }

// //         html {
// //           scroll-behavior: smooth;
// //         }
// //       `}</style>

      
// //     </div>
// //   );
// // };

// // export default AdmissionForm;




// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useEffect } from "react";
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
//   Award,
//   ShieldCheck,
//   Clock,
//   FileText,
//   Cake,
//   Flag,
//   Briefcase,
//   Wallet,
//   Camera,
//   Check,
//   X,
//   ArrowRight,
//   ArrowLeft,
//   Save,
//   CreditCard,
//   Receipt,
//   Download,
//   Printer,
//   Plus,
//   Minus,
//   Percent,
//   DollarSign,
//   Shield,
//   GraduationCap,
//   Users2,
//   Building,
//   MapPinHouse,
//   Globe,
//   Fingerprint,
//   FileCheck,
//   FileImage,
//   FileSignature,
//   Loader2,
//   AlertTriangle,
//   Tv,
//   BookMarked,
//   Meh,
//   Smile,
//   Frown,
//   ThumbsUp,
//   ThumbsDown,
//   Wind,
//   Zap,
//   Brain,
//   Coffee,
//   Moon,
//   Sun,
//   Cloud,
//   Umbrella,
//   Gauge,
//   Scale,
//   Weight,
//   Ruler,
//   Timer,
//   Bath,
//   Wifi,
//   WifiOff,
//   Smartphone,
//   UsersRound,
//   HandHeart,
//   Handshake,
//   HeartHandshake,
//   HeartOff,
//   Leaf,
//   TreePine,
//   Flower2,
//   Droplets,
//   Flame,
//   Fan,
//   Thermometer,
//   TrendingUp,
//   TrendingDown,
//   MinusCircle,
//   PlusCircle,
//   CheckSquare,
//   XSquare,
//   HelpCircle,
//   Eye,
//   FileDown,
//   FileUp,
//   FileSpreadsheet,
//   FileOutput,
//   IdCard
// } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Switch } from "@/components/ui/switch";
// import { Progress } from "@/components/ui/progress";
// import Image from "next/image";

// // Input Field Component
// const InputField = ({
//   label,
//   name,
//   type = "text",
//   required = false,
//   placeholder = "",
//   width = "col-span-1",
//   icon: Icon,
//   formData,
//   handleInputChange,
// }: any) => (
//   <div className={`${width} group`}>
//     <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <div className="relative">
//       {Icon && (
//         <Icon
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
//           size={18}
//         />
//       )}
//       <Input
//         name={name}
//         required={required}
//         type={type}
//         placeholder={placeholder}
//         value={formData?.[name] || ""}
//         onChange={(e) => handleInputChange(name, e.target.value)}
//         className={`w-full ${
//           Icon ? "pl-11" : "pl-4"
//         } pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
//       />
//     </div>
//   </div>
// );

// // TextArea Field Component
// const TextAreaField = ({
//   label,
//   name,
//   required = false,
//   placeholder = "",
//   icon: Icon,
//   formData,
//   handleInputChange,
// }: any) => (
//   <div className="group">
//     <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
//       {Icon && <Icon size={16} className="text-emerald-600" />} {label}
//       {required && <span className="text-red-500">*</span>}
//     </label>
//     <Textarea
//       name={name}
//       required={required}
//       value={formData?.[name] || ""}
//       onChange={(e) => handleInputChange(name, e.target.value)}
//       rows={3}
//       className="w-full px-5 py-4 rounded-2xl border border-emerald-200 bg-white/70 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none shadow-sm placeholder-gray-400"
//       placeholder={placeholder}
//     />
//   </div>
// );

// // Select Field Component - FIXED with width prop applied to container
// const SelectField = ({
//   label,
//   name,
//   required = false,
//   options = [],
//   placeholder = "Select an option",
//   icon: Icon,
//   width = "col-span-1",
//   formData,
//   handleInputChange,
// }: any) => (
//   <div className={`${width} group`}>
//     <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 group-focus-within:text-purple-700 transition-colors">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <div className="relative">
//       {Icon && (
//         <Icon
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors z-10"
//           size={18}
//         />
//       )}
//       <Select
//         value={formData?.[name] || ""}
//         onValueChange={(value) => handleInputChange(name, value)}
//       >
//         <SelectTrigger 
//           className={`w-full ${
//             Icon ? "pl-11" : "pl-4"
//           } pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 text-gray-800 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
//         >
//           <SelectValue placeholder={placeholder} />
//         </SelectTrigger>
//         <SelectContent>
//           {options.map((opt: any) => (
//             <SelectItem key={opt.value || opt} value={opt.value || opt}>
//               {opt.label || opt}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   </div>
// );

// // Radio Group Component
// const RadioGroupField = ({
//   label,
//   name,
//   options,
//   formData,
//   handleInputChange,
// }: any) => (
//   <div className="bg-white/80 p-4 rounded-xl border border-white/50 hover:border-purple-200 hover:shadow-md transition-all duration-300">
//     <label className="block text-sm font-bold text-gray-800 mb-3 border-b border-dashed border-gray-200 pb-2">
//       {label}
//     </label>
//     <RadioGroup
//       value={formData?.[name] || ""}
//       onValueChange={(value) => handleInputChange(name, value)}
//       className="flex flex-wrap gap-1.5 md:gap-3"
//     >
//       {options.map((opt: any) => (
//         <div key={opt.val} className="relative cursor-pointer group">
//           <RadioGroupItem
//             value={opt.val}
//             id={`${name}-${opt.val}`}
//             className="peer sr-only"
//           />
//           <Label
//             htmlFor={`${name}-${opt.val}`}
//             className="px-3 md:px-4 py-2 rounded-full border border-gray-200 bg-white/50 text-gray-600 text-sm font-medium transition-all
//               peer-data-[state=checked]:bg-purple-600 peer-data-[state=checked]:text-white peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:shadow-lg
//               hover:border-purple-300 cursor-pointer inline-block"
//           >
//             {opt.text}
//           </Label>
//         </div>
//       ))}
//     </RadioGroup>
//   </div>
// );

// // Checkbox Field Component
// const CheckboxField = ({
//   label,
//   name,
//   formData,
//   handleInputChange,
// }: any) => (
//   <div className="flex items-center space-x-2">
//     <Checkbox
//       id={name}
//       checked={formData?.[name] || false}
//       onCheckedChange={(checked) => handleInputChange(name, checked)}
//     />
//     <Label
//       htmlFor={name}
//       className="text-sm font-medium text-gray-700 cursor-pointer"
//     >
//       {label}
//     </Label>
//   </div>
// );

// // File Upload Component
// const FileUploadField = ({
//   label,
//   name,
//   required = false,
//   icon: Icon,
//   formData,
//   handleInputChange,
// }: any) => (
//   <div className="group">
//     <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <div className="relative">
//       {Icon && (
//         <Icon
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors z-10"
//           size={18}
//         />
//       )}
//       <Input
//         type="file"
//         name={name}
//         accept="image/*"
//         onChange={(e) => {
//           const file = e.target.files?.[0];
//           if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//               handleInputChange(name, reader.result);
//             };
//             reader.readAsDataURL(file);
//           }
//         }}
//         className={`w-full ${
//           Icon ? "pl-11" : "pl-4"
//         } pr-4 py-2 rounded-xl border border-gray-200 bg-white/70 text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none shadow-sm hover:border-purple-300`}
//       />
//     </div>
//   </div>
// );

// // Custom Alert Component
// const CustomAlert = ({ isOpen, type, title, message, onClose }: any) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center p-4 bg-[#0F0518]/80 backdrop-blur-md animate-fadeIn z-50">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 transform transition-all scale-100 animate-bounceIn text-center relative overflow-hidden border-t-8 border-purple-600">
//         <div
//           className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${
//             type === "success"
//               ? "bg-green-100 text-green-600"
//               : "bg-red-100 text-red-600"
//           }`}
//         >
//           {type === "success" ? (
//             <CheckCircle size={40} strokeWidth={2.5} />
//           ) : (
//             <AlertCircle size={40} strokeWidth={2.5} />
//           )}
//         </div>
//         <h3
//           className={`text-2xl font-bold mb-3 ${
//             type === "success" ? "text-green-800" : "text-red-800"
//           }`}
//         >
//           {title}
//         </h3>
//         <p className="text-gray-600 mb-8 text-base leading-relaxed">
//           {message}
//         </p>
//         <button
//           onClick={onClose}
//           className={`w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
//             type === "success"
//               ? "bg-gradient-to-r from-green-500 to-green-700 shadow-green-200"
//               : "bg-gradient-to-r from-red-500 to-red-700 shadow-red-200"
//           }`}
//         >
//           {type === "success" ? "আলহামদুলিল্লাহ" : "বন্ধ করুন"}
//         </button>
//       </div>
//     </div>
//   );
// };

// // Step Progress Component
// const StepProgress = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
//   const steps = [
//     { number: 1, label: "Student", icon: User },
//     { number: 2, label: "Academic", icon: BookOpen },
//     { number: 3, label: "Parent", icon: Users },
//     { number: 4, label: "Family", icon: Home },
//     { number: 5, label: "Behavior", icon: Activity },
//     { number: 6, label: "Address", icon: MapPin },
//   ];

//   return (
//     <div className="mb-8">
//       <div className="flex justify-between items-center mb-4">
//         {steps.map((step, index) => {
//           const StepIcon = step.icon;
//           const isCompleted = currentStep > step.number;
//           const isCurrent = currentStep === step.number;
          
//           return (
//             <div key={step.number} className="flex-1 relative">
//               {index < steps.length - 1 && (
//                 <div className={`absolute top-5 left-[60%] w-full h-1 transition-all duration-500 ${
//                   currentStep > step.number ? "bg-purple-500" : "bg-gray-200"
//                 }`} />
//               )}
//               <div className="flex flex-col items-center relative z-10">
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
//                   isCompleted
//                     ? "bg-purple-600 text-white"
//                     : isCurrent
//                     ? "bg-purple-100 text-purple-600 border-2 border-purple-600"
//                     : "bg-gray-100 text-gray-400"
//                 }`}>
//                   {isCompleted ? (
//                     <Check size={18} />
//                   ) : (
//                     <StepIcon size={18} />
//                   )}
//                 </div>
//                 <span className={`text-xs mt-2 font-medium ${
//                   isCurrent ? "text-purple-600" : "text-gray-500"
//                 }`}>
//                   {step.label}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <Progress value={(currentStep / totalSteps) * 100} className="h-1" />
//     </div>
//   );
// };

// // Preview Modal Component
// const PreviewModal = ({ isOpen, onClose, formData, studentId }: any) => {
//   if (!isOpen) return null;

//   const generateStudentId = () => {
//     return studentId || `CII${Math.floor(100000 + Math.random() * 900000)}`;
//   };

//   const finalStudentId = generateStudentId();

//   const handleDownloadPDF = () => {
//     // In a real implementation, you would use a library like jsPDF or html2canvas
//     // For now, we'll just show an alert
//     alert("PDF download functionality would be implemented here with the student data");
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-purple-700 flex items-center gap-2">
//             <Eye size={24} />
//             ভর্তি ফর্ম প্রিভিউ
//           </DialogTitle>
//           <DialogDescription>
//             আপনার প্রদত্ত তথ্যের সারসংক্ষেপ। দয়া করে যাচাই করুন।
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-6 py-4">
//           {/* Student ID Card */}
//           <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10"></div>
            
//             <div className="flex justify-between items-start relative z-10">
//               <div>
//                 <p className="text-sm opacity-90">Student ID</p>
//                 <p className="text-3xl font-bold">{finalStudentId}</p>
//               </div>
//               <IdCard size={48} className="opacity-80" />
//             </div>
            
//             <div className="mt-4 flex justify-between items-center relative z-10">
//               <div>
//                 <p className="text-sm opacity-90">Student Name</p>
//                 <p className="text-xl font-bold">{formData.StudentName || formData.studentName || "Not provided"}</p>
//               </div>
//               <Badge variant="outline" className="bg-white/20 text-white border-white/30">
//                 {new Date().toLocaleDateString('bn-BD')}
//               </Badge>
//             </div>
//           </div>

//           {/* Form Data Preview */}
//           <Tabs defaultValue="student" className="w-full">
//             <TabsList className="grid grid-cols-6 mb-4">
//               <TabsTrigger value="student">Student</TabsTrigger>
//               <TabsTrigger value="academic">Academic</TabsTrigger>
//               <TabsTrigger value="parent">Parent</TabsTrigger>
//               <TabsTrigger value="family">Family</TabsTrigger>
//               <TabsTrigger value="behavior">Behavior</TabsTrigger>
//               <TabsTrigger value="address">Address</TabsTrigger>
//             </TabsList>

//             <TabsContent value="student" className="space-y-4">
//               <Card>
//                 <CardHeader className="bg-purple-50">
//                   <CardTitle className="text-purple-700">শিক্ষার্থীর তথ্য</CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid grid-cols-2 gap-4 p-4">
//                   <div>
//                     <p className="text-sm text-gray-500">নাম (বাংলা)</p>
//                     <p className="font-medium">{formData.StudentName || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Name (English)</p>
//                     <p className="font-medium">{formData.studentName || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">মোবাইল</p>
//                     <p className="font-medium">{formData.mobileNo || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">বয়স</p>
//                     <p className="font-medium">{formData.Age || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">আগ্রহী শ্রেণি</p>
//                     <p className="font-medium">{formData.Class || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">সেশন</p>
//                     <p className="font-medium">{formData.session || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">জন্ম তারিখ</p>
//                     <p className="font-medium">{formData.dateOfBirth || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">রক্তের গ্রুপ</p>
//                     <p className="font-medium">{formData.bloodGroup || "—"}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="academic" className="space-y-4">
//               <Card>
//                 <CardHeader className="bg-indigo-50">
//                   <CardTitle className="text-indigo-700">পূর্ববর্তী একাডেমিক তথ্য</CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid grid-cols-2 gap-4 p-4">
//                   <div>
//                     <p className="text-sm text-gray-500">পূর্ববর্তী প্রতিষ্ঠান</p>
//                     <p className="font-medium">{formData.PrevSchool || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">পূর্ব অধ্যায়নকৃত শ্রেণি</p>
//                     <p className="font-medium">{formData.PrevClass || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">সর্বশেষ জিপিএ</p>
//                     <p className="font-medium">{formData.GPA || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">পূর্ববর্তী রোল</p>
//                     <p className="font-medium">{formData.Roll || "—"}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="parent" className="space-y-4">
//               <Card>
//                 <CardHeader className="bg-green-50">
//                   <CardTitle className="text-green-700">অভিভাবকের তথ্য</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4 p-4">
//                   <div className="border-b pb-3">
//                     <h4 className="font-bold text-blue-700 mb-2">পিতার তথ্য</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-500">নাম</p>
//                         <p className="font-medium">{formData.FatherName || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">পেশা</p>
//                         <p className="font-medium">{formData.FatherJob || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">শিক্ষাগত যোগ্যতা</p>
//                         <p className="font-medium">{formData.FatherEdu || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">মোবাইল</p>
//                         <p className="font-medium">{formData.FatherMobile || "—"}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="border-b pb-3">
//                     <h4 className="font-bold text-pink-700 mb-2">মাতার তথ্য</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-500">নাম</p>
//                         <p className="font-medium">{formData.MotherName || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">পেশা</p>
//                         <p className="font-medium">{formData.MotherJob || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">শিক্ষাগত যোগ্যতা</p>
//                         <p className="font-medium">{formData.MotherEdu || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">মোবাইল</p>
//                         <p className="font-medium">{formData.MotherMobile || "—"}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-amber-700 mb-2">ঠিকানা</h4>
//                     <p className="font-medium">{formData.Address || "—"}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="family" className="space-y-4">
//               <Card>
//                 <CardHeader className="bg-amber-50">
//                   <CardTitle className="text-amber-700">পারিবারিক পরিবেশ</CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid grid-cols-2 gap-4 p-4">
//                   <div>
//                     <p className="text-sm text-gray-500">হালাল উপার্জন</p>
//                     <p className="font-medium">{formData.HalalIncome === "Yes" ? "হ্যাঁ" : formData.HalalIncome === "No" ? "না" : "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">পিতা-মাতার নামাজ</p>
//                     <p className="font-medium">{formData.ParentsPrayer === "Yes" ? "হ্যাঁ" : formData.ParentsPrayer === "No" ? "না" : "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">মাদক/নেশায় আক্রান্ত</p>
//                     <p className="font-medium">{formData.Addiction === "Yes" ? "হ্যাঁ" : formData.Addiction === "No" ? "না" : "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">টেলিভিশন</p>
//                     <p className="font-medium">{formData.TV === "Yes" ? "হ্যাঁ" : formData.TV === "No" ? "না" : "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">কুরআন তিলাওয়াত</p>
//                     <p className="font-medium">
//                       {formData.QuranRecitation === "Yes" ? "হ্যাঁ" : 
//                        formData.QuranRecitation === "No" ? "না" : 
//                        formData.QuranRecitation === "Sometimes" ? "মাঝেমাঝে" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">পর্দা পালন</p>
//                     <p className="font-medium">
//                       {formData.Purdah === "Yes" ? "হ্যাঁ" : 
//                        formData.Purdah === "No" ? "না" : 
//                        formData.Purdah === "Trying" ? "চেষ্টা করা হয়" : "—"}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="behavior" className="space-y-4">
//               <Card>
//                 <CardHeader className="bg-rose-50">
//                   <CardTitle className="text-rose-700">আচরণ ও দক্ষতা</CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid grid-cols-2 gap-4 p-4">
//                   <div>
//                     <p className="text-sm text-gray-500">মোবাইল ব্যবহার</p>
//                     <p className="font-medium">{formData.MobileUsage || "—"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">সন্তানের আচরণ</p>
//                     <p className="font-medium">
//                       {formData.GeneralBehavior === "Very Good" ? "অনেক ভালো" :
//                        formData.GeneralBehavior === "Good" ? "মোটামুটি" :
//                        formData.GeneralBehavior === "Average" ? "ভাল নয়" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">পিতা-মাতার কথা শোনে</p>
//                     <p className="font-medium">
//                       {formData.Obedience === "Fully" ? "পুরোপুরি" :
//                        formData.Obedience === "Somewhat" ? "মোটামুটি" :
//                        formData.Obedience === "Not At All" ? "না" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">বড়দের সাথে আচরণ</p>
//                     <p className="font-medium">
//                       {formData.ElderBehavior === "Very Good" ? "অনেক ভালো" :
//                        formData.ElderBehavior === "Good" ? "মোটামুটি" :
//                        formData.ElderBehavior === "Average" ? "ভাল নয়" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">ছোটদের সাথে আচরণ</p>
//                     <p className="font-medium">
//                       {formData.YoungerBehavior === "Very Good" ? "অনেক ভালো" :
//                        formData.YoungerBehavior === "Good" ? "মোটামুটি" :
//                        formData.YoungerBehavior === "Average" ? "ভাল নয়" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">মিথ্যা/জেদ</p>
//                     <p className="font-medium">
//                       {formData.LyingStubbornness === "Too Much" ? "খুব বেশি" :
//                        formData.LyingStubbornness === "Sometimes" ? "মাঝেমাঝে" :
//                        formData.LyingStubbornness === "Never" ? "না" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">পড়ালেখায় আগ্রহ</p>
//                     <p className="font-medium">
//                       {formData.StudyInterest === "Very Interested" ? "খুব আগ্রহী" :
//                        formData.StudyInterest === "Moderate" ? "মোটামুটি" :
//                        formData.StudyInterest === "Less Interested" ? "কম আগ্রহী" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">ধর্মীয় কাজে আগ্রহ</p>
//                     <p className="font-medium">
//                       {formData.ReligiousInterest === "Very Interested" ? "খুব আগ্রহী" :
//                        formData.ReligiousInterest === "Moderate" ? "মোটামুটি" :
//                        formData.ReligiousInterest === "Less Interested" ? "কম আগ্রহী" : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">রাগ নিয়ন্ত্রণ</p>
//                     <p className="font-medium">
//                       {formData.AngerControl === "Excellent" ? "মোটামুটি" :
//                        formData.AngerControl === "Good" ? "ভাল" :
//                        formData.AngerControl === "Needs Improvement" ? "উন্নতি প্রয়োজন" : "—"}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="address" className="space-y-4">
//               <Card>
//                 <CardHeader className="bg-teal-50">
//                   <CardTitle className="text-teal-700">ঠিকানা ও ডকুমেন্টস</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4 p-4">
//                   <div>
//                     <h4 className="font-bold text-gray-700 mb-2">বর্তমান ঠিকানা</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-500">গ্রাম/এলাকা</p>
//                         <p className="font-medium">{formData.village || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">ডাকঘর</p>
//                         <p className="font-medium">{formData.postOffice || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">পোস্ট কোড</p>
//                         <p className="font-medium">{formData.postCode || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">থানা</p>
//                         <p className="font-medium">{formData.policeStation || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">জেলা</p>
//                         <p className="font-medium">{formData.district || "—"}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="border-t pt-4">
//                     <h4 className="font-bold text-gray-700 mb-2">স্থায়ী ঠিকানা</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-500">গ্রাম/এলাকা</p>
//                         <p className="font-medium">{formData.permVillage || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">ডাকঘর</p>
//                         <p className="font-medium">{formData.permPostOffice || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">পোস্ট কোড</p>
//                         <p className="font-medium">{formData.permPostCode || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">থানা</p>
//                         <p className="font-medium">{formData.permPoliceStation || "—"}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">জেলা</p>
//                         <p className="font-medium">{formData.permDistrict || "—"}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="border-t pt-4">
//                     <h4 className="font-bold text-gray-700 mb-2">প্রদত্ত ডকুমেন্টসমূহ</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {formData.birthCertificate && <Badge className="bg-green-100 text-green-700">জন্ম নিবন্ধন</Badge>}
//                       {formData.transferCertificate && <Badge className="bg-green-100 text-green-700">ট্রান্সফার সার্টিফিকেট</Badge>}
//                       {formData.characterCertificate && <Badge className="bg-green-100 text-green-700">চরিত্র সনদপত্র</Badge>}
//                       {formData.markSheet && <Badge className="bg-green-100 text-green-700">মার্কশিট</Badge>}
//                       {formData.photographs && <Badge className="bg-green-100 text-green-700">ছবি</Badge>}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>

//         <DialogFooter className="flex gap-2">
//           <Button variant="outline" onClick={onClose}>
//             বন্ধ করুন
//           </Button>
//           <Button variant="outline" onClick={handlePrint} className="gap-2">
//             <Printer size={16} />
//             প্রিন্ট
//           </Button>
//           <Button onClick={handleDownloadPDF} className="bg-purple-600 hover:bg-purple-700 gap-2">
//             <Download size={16} />
//             ডাউনলোড PDF
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// // Main Form Component
// const AdmissionForm = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showPreview, setShowPreview] = useState(false);
//   const [generatedStudentId, setGeneratedStudentId] = useState("");
//   const [alertState, setAlertState] = useState({
//     isOpen: false,
//     type: "success",
//     title: "",
//     message: "",
//   });
//   const [formData, setFormData] = useState<Record<string, any>>({});

//   const SCRIPT_URL =
//     "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec";

//   // Load saved form data from localStorage
//   useEffect(() => {
//     const savedData = localStorage.getItem("admissionFormData");
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   // Save form data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("admissionFormData", JSON.stringify(formData));
//   }, [formData]);

//   const showAlert = (type: string, title: string, message: string) => {
//     setAlertState({ isOpen: true, type, title, message });
//   };

//   const closeAlert = () => {
//     setAlertState({ ...alertState, isOpen: false });
//   };

//   const handleInputChange = (name: string, value: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleNext = () => {
//     setCurrentStep((prev) => Math.min(prev + 1, 6));
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBack = () => {
//     setCurrentStep((prev) => Math.max(prev - 1, 1));
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePreview = () => {
//     setGeneratedStudentId(`CII${Math.floor(100000 + Math.random() * 900000)}`);
//     setShowPreview(true);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const form = e.currentTarget;
//     const formDataToSubmit = new FormData(form);

//     try {
//       const response = await fetch(SCRIPT_URL, {
//         method: "POST",
//         body: formDataToSubmit,
//       });

//       if (response.ok) {
//         showAlert(
//           "success",
//           "আলহামদুলিল্লাহ!",
//           "আপনার ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে। শীঘ্রই অফিস থেকে যোগাযোগ করা হবে।",
//         );
//         form.reset();
//         localStorage.removeItem("admissionFormData");
//         setFormData({});
//         setCurrentStep(1);
//       } else {
//         throw new Error("Server response not OK");
//       }
//     } catch (error) {
//       console.error("Error!", error);
//       showAlert(
//         "error",
//         "দুঃখিত!",
//         "সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।",
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
//   const departments = [
//     { value: "hifz", label: "হিফজ বিভাগ" },
//     { value: "academic", label: "একাডেমিক বিভাগ" },
//   ];
//   const classes = [
//     { value: "1", label: "প্রথম শ্রেণি" },
//     { value: "2", label: "দ্বিতীয় শ্রেণি" },
//     { value: "3", label: "তৃতীয় শ্রেণি" },
//     { value: "4", label: "চতুর্থ শ্রেণি" },
//     { value: "5", label: "পঞ্চম শ্রেণি" },
//     { value: "6", label: "ষষ্ঠ শ্রেণি" },
//     { value: "7", label: "সপ্তম শ্রেণি" },
//     { value: "8", label: "অষ্টম শ্রেণি" },
//     { value: "9", label: "নবম শ্রেণি" },
//     { value: "10", label: "দশম শ্রেণি" },
//   ];
//   const sections = ["A", "B", "C"];
//   const groups = [
//     { value: "science", label: "বিজ্ঞান" },
//     { value: "commerce", label: "বাণিজ্য" },
//     { value: "arts", label: "মানবিক" },
//   ];
//   const shifts = ["Morning", "Day", "Evening"];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4 md:px-8 relative">
//       {/* Background Design */}
//       <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#2E0249] via-[#4F0187] to-transparent"></div>
//       <div className="absolute top-[300px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
//       <div className="absolute bottom-[-100px] left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 animate-float">
//         <div className="w-8 h-8 bg-purple-500/20 rounded-full"></div>
//       </div>
//       <div className="absolute top-40 right-20 animate-float delay-1000">
//         <div className="w-6 h-6 bg-pink-500/20 rounded-full"></div>
//       </div>

//       <CustomAlert
//         isOpen={alertState.isOpen}
//         type={alertState.type}
//         title={alertState.title}
//         message={alertState.message}
//         onClose={closeAlert}
//       />

//       <PreviewModal 
//         isOpen={showPreview} 
//         onClose={() => setShowPreview(false)} 
//         formData={formData}
//         studentId={generatedStudentId}
//       />

//       <div className="w-full max-w-6xl mx-auto relative">
//         {/* Header Section */}
//         <div className="bg-gradient-to-br from-white/95 via-purple-50/95 to-white/95 rounded-[1rem] md:rounded-[3rem] shadow-2xl p-4 md:p-12 text-center mb-8 border-2 border-white/50 relative overflow-hidden backdrop-blur-sm">
//           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-purple-500 to-indigo-500"></div>
          
//           <div className="absolute top-0 right-0 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

//           <div className="relative">
//             <div className="mb-8">
//               <div className="absolute inset-0 flex items-center justify-center opacity-5">
//                 <span className="text-9xl font-arabic">﷽</span>
//               </div>

//               <h1 className="text-4xl md:text-7xl font-black bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 bg-clip-text text-transparent relative mb-4">
//                 ভর্তি যাচাই ফর্ম
//               </h1>
              
//               <div className="flex items-center justify-center gap-4 mt-4">
//                 <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700"></div>
//                 </div>
//                 <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
//               </div>
//             </div>

//             {/* Important Notice */}
//             <div className="relative max-w-4xl mx-auto mt-8">
//               <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-300/50 rounded-3xl p-6 backdrop-blur-sm">
//                 <div className="text-center">
//                   <p className="font-bold text-amber-800 mb-3 text-xl md:text-2xl flex items-center justify-center gap-3">
//                     <ShieldCheck size={28} className="text-amber-600" />
//                     আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন
//                     <ShieldCheck size={28} className="text-amber-600" />
//                   </p>
//                   <p className="text-amber-700/90 leading-relaxed">
//                     আপনার সন্তানকে ভর্তি করাতে আগ্রহী হলে, অনুগ্রহ করে নিচের ফর্মটি পূরণ করুন।
//                     ফর্মটি পাওয়ার পর, আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form with Steps */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <Card className="border-2 border-purple-100/50 shadow-xl overflow-hidden backdrop-blur-sm bg-white/90">
//             <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
//               <StepProgress currentStep={currentStep} totalSteps={6} />
//             </CardHeader>
            
//             <CardContent className="p-6 md:p-8">
//               {/* Step 1: Student Information */}
             
// {currentStep === 1 && (
//   <div className="space-y-6 animate-fadeIn">
//     <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//       <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
//         <User size={20} />
//       </div>
//       শিক্ষার্থীর তথ্য
//     </h3>

//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//       {/* Image Upload Section with Preview */}
//       {/* Image Upload Section with Preview */}
// <div className="lg:col-span-4">
//   <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border-2 border-purple-100 shadow-sm h-full">
//     <label className="block text-sm font-bold text-gray-700 mb-3">
//       শিক্ষার্থীর ছবি <span className="text-red-500">*</span>
//     </label>
    
//     <div className="flex flex-col items-center">
     
//       <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 group">
//         {formData?.studentPhoto ? (
//           <>
//             <Image
//               src={formData.studentPhoto} 
//               alt="Student Preview" 
//               fill
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//               <Camera size={24} className="text-white" />
//             </div>
//           </>
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center">
//             <Camera size={48} className="text-purple-400" />
//           </div>
//         )}
//       </div>

//       <div className="relative w-full">
//         <Input
//           type="file"
//           name="studentPhoto"
//           accept="image/*"
//           onChange={(e) => {
//             const file = e.target.files?.[0];
//             if (file) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                 handleInputChange("studentPhoto", reader.result);
//               };
//               reader.readAsDataURL(file);
//             }
//           }}
//           className="w-full py-2 rounded-xl border-2 border-purple-200 bg-white/80 text-gray-800 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
//         />
//       </div>

    
//       <p className="text-xs text-gray-500 mt-2">
//         অনুমোদিত ফরম্যাট: JPG, PNG (সর্বোচ্চ ২MB)
//       </p>
//     </div>
//   </div>
// </div>

//       {/* Student Details Grid */}
//       <div className="lg:col-span-8">
//         <div className="bg-white/80 p-6 rounded-2xl border-2 border-purple-100 shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Name Fields */}
//             <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField
//                 width="col-span-1"
//                 label="শিক্ষার্থীর নাম (বাংলা)"
//                 name="StudentName"
//                 required
//                 placeholder="বাংলায় পুরো নাম"
//                 icon={User}
//                 formData={formData}
//                 handleInputChange={handleInputChange}
//               />

//               <InputField
//                 width="col-span-1"
//                 label="Student Name (English)"
//                 name="studentName"
//                 required
//                 placeholder="Full Name in English"
//                 icon={User}
//                 formData={formData}
//                 handleInputChange={handleInputChange}
//               />
//             </div>

//             {/* Contact and Basic Info */}
//             <InputField
//               width="col-span-1"
//               label="মোবাইল নম্বর"
//               name="mobileNo"
//               required
//               placeholder="01XXXXXXXXX"
//               icon={Phone}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             <InputField
//               width="col-span-1"
//               label="বয়স"
//               name="Age"
//               placeholder="যেমন: ১০"
//               icon={Calendar}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             {/* Class and Session */}
//             <InputField
//               width="col-span-1"
//               label="আগ্রহী শ্রেণি"
//               name="Class"
//               placeholder="ভর্তি হতে ইচ্ছুক শ্রেণি"
//               icon={BookOpen}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             <InputField
//               width="col-span-1"
//               label="সেশন"
//               name="session"
//               placeholder="2024-2025"
//               icon={Calendar}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             {/* Department and DOB */}
//             <SelectField
//               width="col-span-1"
//               label="বিভাগ"
//               name="studentDepartment"
//               required
//               options={departments}
//               placeholder="বিভাগ নির্বাচন করুন"
//               icon={GraduationCap}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             <InputField
//               width="col-span-1"
//               label="জন্ম তারিখ"
//               name="dateOfBirth"
//               type="date"
//               icon={Cake}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             {/* NID/Birth Registration */}
//             <InputField
//               width="col-span-1"
//               label="জাতীয় পরিচয়পত্র/জন্ম নিবন্ধন নম্বর"
//               name="nidBirth"
//               placeholder="1234567890"
//               icon={Fingerprint}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             {/* Blood Group and Nationality */}
//             <SelectField
//               width="col-span-1"
//               label="রক্তের গ্রুপ"
//               name="bloodGroup"
//               options={bloodGroups}
//               placeholder="রক্তের গ্রুপ নির্বাচন করুন"
//               icon={Heart}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />

//             <InputField
//               width="col-span-1"
//               label="জাতীয়তা"
//               name="nationality"
//               placeholder="Bangladeshi"
//               icon={Globe}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>

   
//   </div>
// )} 

//               {/* Step 2: Previous Academic Information */}
//               {currentStep === 2 && (
//                 <div className="space-y-6 animate-fadeIn">
//                   <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
//                       <School size={20} />
//                     </div>
//                     পূর্ববর্তী একাডেমিক তথ্য
//                   </h3>

//                   <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//                     <InputField
//                       width="md:col-span-6"
//                       label="পূর্ববর্তী প্রতিষ্ঠানের নাম"
//                       name="PrevSchool"
//                       placeholder="আগের স্কুলের নাম"
//                       icon={School}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <InputField
//                       width="md:col-span-6"
//                       label="পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ"
//                       name="PrevClass"
//                       placeholder="কোন ক্লাসে পড়ত"
//                       icon={BookOpen}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <InputField
//                       width="md:col-span-4"
//                       label="সর্বশেষ জিপিএ (GPA)"
//                       name="GPA"
//                       placeholder="প্রাপ্ত জিপিএ"
//                       icon={Star}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <InputField
//                       width="md:col-span-4"
//                       label="পূর্ববর্তী রোল"
//                       name="Roll"
//                       placeholder="পূর্ববর্তী ক্লাসের রোল নম্বর"
//                       icon={Award}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <InputField
//                       width="md:col-span-4"
//                       label="শাখা"
//                       name="section"
//                       placeholder="শাখা (যেমন: ক, খ)"
//                       icon={Users2}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <SelectField
//                       width="md:col-span-4"
//                       label="গ্রুপ (প্রযোজ্য ক্ষেত্রে)"
//                       name="group"
//                       options={groups}
//                       placeholder="গ্রুপ নির্বাচন করুন"
//                       icon={Building}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <InputField
//                       width="md:col-span-4"
//                       label="অপশনাল সাবজেক্ট"
//                       name="optionalSubject"
//                       placeholder="যেমন: উচ্চতর গণিত"
//                       icon={BookOpen}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <SelectField
//                       width="md:col-span-4"
//                       label="শিফট"
//                       name="shift"
//                       options={shifts}
//                       placeholder="শিফট নির্বাচন করুন"
//                       icon={Clock}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Parent/Guardian Information */}
//               {currentStep === 3 && (
//                 <div className="space-y-6 animate-fadeIn">
//                   <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
//                     <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
//                       <Users size={20} />
//                     </div>
//                     অভিভাবকের তথ্য
//                   </h3>

//                   {/* Father's Information */}
//                   <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-200 shadow-sm mb-6">
//                     <div className="absolute -top-3 left-6 bg-blue-100 px-4 py-1 rounded-full text-xs font-bold text-blue-700 border border-blue-200">
//                       পিতার তথ্য
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
//                       <InputField
//                         width="md:col-span-4"
//                         label="পিতার নাম"
//                         name="FatherName"
//                         required
//                         icon={User}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-3"
//                         label="পেশা"
//                         name="FatherJob"
//                         icon={Briefcase}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-3"
//                         label="শিক্ষাগত যোগ্যতা"
//                         name="FatherEdu"
//                         icon={GraduationCap}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="মোবাইল"
//                         name="FatherMobile"
//                         required
//                         icon={Phone}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Mother's Information */}
//                   <div className="relative p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 to-rose-50/50 border border-pink-200 shadow-sm mb-6">
//                     <div className="absolute -top-3 left-6 bg-pink-100 px-4 py-1 rounded-full text-xs font-bold text-pink-700 border border-pink-200">
//                       মাতার তথ্য
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
//                       <InputField
//                         width="md:col-span-4"
//                         label="মাতার নাম"
//                         name="MotherName"
//                         icon={User}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-3"
//                         label="পেশা"
//                         name="MotherJob"
//                         icon={Briefcase}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-3"
//                         label="শিক্ষাগত যোগ্যতা"
//                         name="MotherEdu"
//                         icon={GraduationCap}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="মোবাইল"
//                         name="MotherMobile"
//                         icon={Phone}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Guardian Information - Added back */}
//                   <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200 shadow-sm">
//                     <div className="absolute -top-3 left-6 bg-amber-100 px-4 py-1 rounded-full text-xs font-bold text-amber-700 border border-amber-200">
//                       অভিভাবকের তথ্য (যদি পিতা-মাতা ব্যতীত অন্য কেউ)
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
//                       <InputField
//                         width="md:col-span-4"
//                         label="অভিভাবকের নাম"
//                         name="guardianName"
//                         icon={User}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-4"
//                         label="সম্পর্ক"
//                         name="guardianRelation"
//                         icon={Users}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-4"
//                         label="মোবাইল"
//                         name="guardianMobile"
//                         icon={Phone}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-12"
//                         label="ঠিকানা"
//                         name="guardianAddress"
//                         icon={MapPin}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Address - Keeping from original form */}
//                   <TextAreaField
//                     label="ঠিকানা"
//                     name="Address"
//                     placeholder="বর্তমান এবং স্থায়ী ঠিকানা বিস্তারিত লিখুন..."
//                     icon={MapPin}
//                     formData={formData}
//                     handleInputChange={handleInputChange}
//                   />
//                 </div>
//               )}

//               {/* Step 4: Family Environment - From Original Form */}
//               {currentStep === 4 && (
//                 <div className="space-y-6 animate-fadeIn">
//                   <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
//                       <Home size={20} />
//                     </div>
//                     পারিবারিক পরিবেশ
//                   </h3>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <RadioGroupField
//                       label="আপনার পরিবারের উপার্জন ১০০% হালাল কি?"
//                       name="HalalIncome"
//                       options={[
//                         { val: "Yes", text: "হ্যাঁ" },
//                         { val: "No", text: "না" },
//                       ]}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <RadioGroupField
//                       label="পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?"
//                       name="ParentsPrayer"
//                       options={[
//                         { val: "Yes", text: "হ্যাঁ" },
//                         { val: "No", text: "না" },
//                       ]}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <RadioGroupField
//                       label="পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত?"
//                       name="Addiction"
//                       options={[
//                         { val: "Yes", text: "হ্যাঁ" },
//                         { val: "No", text: "না" },
//                       ]}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <RadioGroupField
//                       label="বাসায় টেলিভিশন আছে কি?"
//                       name="TV"
//                       options={[
//                         { val: "Yes", text: "হ্যাঁ" },
//                         { val: "No", text: "না" },
//                       ]}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <RadioGroupField
//                       label="বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?"
//                       name="QuranRecitation"
//                       options={[
//                         { val: "Yes", text: "হ্যাঁ" },
//                         { val: "No", text: "না" },
//                         { val: "Sometimes", text: "মাঝেমাঝে" },
//                       ]}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />

//                     <RadioGroupField
//                       label="পরিবারের সদস্যরা পর্দা পালন করে কি?"
//                       name="Purdah"
//                       options={[
//                         { val: "Yes", text: "হ্যাঁ" },
//                         { val: "No", text: "না" },
//                         { val: "Trying", text: "চেষ্টা করা হয়" },
//                       ]}
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Step 5: Behavior & Skills - From Original Form */}
//               {currentStep === 5 && (
//                 <div className="space-y-6 animate-fadeIn">
//                   <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
//                       <Activity size={20} />
//                     </div>
//                     আচরণ ও দক্ষতা
//                   </h3>

//                   <div className="space-y-8">
//                     {/* Mobile Usage */}
//                     <div className="bg-white/60 p-6 rounded-2xl border border-rose-200 shadow-sm">
//                       <label className="block text-sm font-bold text-gray-800 mb-3">
//                         দৈনিক কত সময় মোবাইল ব্যবহার করে?
//                       </label>
//                       <div className="relative">
//                         <Smartphone
//                           size={20}
//                           className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400"
//                         />
//                         <Input
//                           name="MobileUsage"
//                           type="text"
//                           placeholder="সময় উল্লেখ করুন (যেমন: ১ ঘণ্টা)"
//                           value={formData?.["MobileUsage"] || ""}
//                           onChange={(e) =>
//                             handleInputChange("MobileUsage", e.target.value)
//                           }
//                           className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-200 bg-white/50 focus:bg-white focus:ring-4 focus:ring-rose-100 focus:border-rose-400 outline-none transition-all"
//                         />
//                       </div>
//                     </div>

//                     {/* Behavior Radio Groups */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <RadioGroupField
//                         label="সন্তানের আচরণ কেমন?"
//                         name="GeneralBehavior"
//                         options={[
//                           { val: "Very Good", text: "অনেক ভালো" },
//                           { val: "Good", text: "মোটামুটি" },
//                           { val: "Average", text: "ভাল নয়" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="পিতা-মাতার কথা শোনে?"
//                         name="Obedience"
//                         options={[
//                           { val: "Not At All", text: "না" },
//                           { val: "Somewhat", text: "মোটামুটি" },
//                           { val: "Fully", text: "পুরোপুরি" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="বড়দের সাথে আচরণ?"
//                         name="ElderBehavior"
//                         options={[
//                           { val: "Very Good", text: "অনেক ভালো" },
//                           { val: "Good", text: "মোটামুটি" },
//                           { val: "Average", text: "ভাল নয়" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="ছোটদের সাথে আচরণ?"
//                         name="YoungerBehavior"
//                         options={[
//                           { val: "Very Good", text: "অনেক ভালো" },
//                           { val: "Good", text: "মোটামুটি" },
//                           { val: "Average", text: "ভাল নয়" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="মিথ্যা বলে বা জেদ করে?"
//                         name="LyingStubbornness"
//                         options={[
//                           { val: "Too Much", text: "খুব বেশি" },
//                           { val: "Sometimes", text: "মাঝেমাঝে" },
//                           { val: "Never", text: "না" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="পড়ালেখায় আগ্রহ?"
//                         name="StudyInterest"
//                         options={[
//                           { val: "Very Interested", text: "খুব আগ্রহী" },
//                           { val: "Moderate", text: "মোটামুটি" },
//                           { val: "Less Interested", text: "কম আগ্রহী" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="ধর্মীয় কাজে আগ্রহ?"
//                         name="ReligiousInterest"
//                         options={[
//                           { val: "Very Interested", text: "খুব আগ্রহী" },
//                           { val: "Moderate", text: "মোটামুটি" },
//                           { val: "Less Interested", text: "কম আগ্রহী" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />

//                       <RadioGroupField
//                         label="রাগ নিয়ন্ত্রণ?"
//                         name="AngerControl"
//                         options={[
//                           { val: "Excellent", text: "মোটামুটি" },
//                           { val: "Good", text: "ভাল" },
//                           { val: "Needs Improvement", text: "উন্নতি প্রয়োজন" },
//                         ]}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Step 6: Address & Documents */}
//               {currentStep === 6 && (
//                 <div className="space-y-6 animate-fadeIn">
//                   <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
//                       <MapPin size={20} />
//                     </div>
//                     ঠিকানা ও ডকুমেন্টস
//                   </h3>

//                   {/* Present Address */}
//                   <div className="relative p-6 rounded-2xl bg-white/60 border border-gray-200 shadow-sm mb-6">
//                     <div className="absolute -top-3 left-6 bg-gray-100 px-4 py-1 rounded-full text-xs font-bold text-gray-700 border border-gray-200">
//                       বর্তমান ঠিকানা
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
//                       <InputField
//                         width="md:col-span-3"
//                         label="গ্রাম/এলাকা"
//                         name="village"
//                         icon={MapPinHouse}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-3"
//                         label="ডাকঘর"
//                         name="postOffice"
//                         icon={Building}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="পোস্ট কোড"
//                         name="postCode"
//                         icon={FileText}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="থানা"
//                         name="policeStation"
//                         icon={Shield}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="জেলা"
//                         name="district"
//                         icon={MapPin}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Permanent Address */}
//                   <div className="relative p-6 rounded-2xl bg-white/60 border border-gray-200 shadow-sm mb-6">
//                     <div className="absolute -top-3 left-6 bg-gray-100 px-4 py-1 rounded-full text-xs font-bold text-gray-700 border border-gray-200">
//                       স্থায়ী ঠিকানা
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
//                       <InputField
//                         width="md:col-span-3"
//                         label="গ্রাম/এলাকা"
//                         name="permVillage"
//                         icon={MapPinHouse}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-3"
//                         label="ডাকঘর"
//                         name="permPostOffice"
//                         icon={Building}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="পোস্ট কোড"
//                         name="permPostCode"
//                         icon={FileText}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="থানা"
//                         name="permPoliceStation"
//                         icon={Shield}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
                      
//                       <InputField
//                         width="md:col-span-2"
//                         label="জেলা"
//                         name="permDistrict"
//                         icon={MapPin}
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Documents */}
//                   <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
//                     <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                       <FileText size={20} className="text-purple-600" />
//                       প্রদত্ত ডকুমেন্টসমূহ
//                     </h4>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       <CheckboxField
//                         label="জন্ম নিবন্ধন সনদ"
//                         name="birthCertificate"
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                       <CheckboxField
//                         label="ট্রান্সফার সার্টিফিকেট"
//                         name="transferCertificate"
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                       <CheckboxField
//                         label="চরিত্র সনদপত্র"
//                         name="characterCertificate"
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                       <CheckboxField
//                         label="মার্কশিট"
//                         name="markSheet"
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                       <CheckboxField
//                         label="ছবি"
//                         name="photographs"
//                         formData={formData}
//                         handleInputChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Terms & Conditions */}
//                   <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <ShieldCheck size={24} className="text-purple-600" />
//                         <div>
//                           <p className="font-bold text-gray-800">শর্তাবলী</p>
//                           <p className="text-sm text-gray-600">আমি ভর্তির সকল শর্ত মেনে নিচ্ছি</p>
//                         </div>
//                       </div>
//                       <Switch
//                         checked={formData?.termsAccepted || false}
//                         onCheckedChange={(checked) => handleInputChange("termsAccepted", checked)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </CardContent>

//             <CardFooter className="bg-gray-50/50 border-t border-gray-200 p-6 flex justify-between">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={handleBack}
//                 disabled={currentStep === 1}
//                 className="px-6 py-2 rounded-xl border-2 hover:bg-purple-50 hover:border-purple-300 transition-all"
//               >
//                 <ArrowLeft size={16} className="mr-2" />
//                 পেছনে
//               </Button>

//               {currentStep < 6 ? (
//                 <Button
//                   type="button"
//                   onClick={handleNext}
//                   className="px-8 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
//                 >
//                   পরবর্তী
//                   <ArrowRight size={16} className="ml-2" />
//                 </Button>
//               ) : (
//                 <div className="flex gap-3">
//                   <Button
//                     type="button"
//                     onClick={handlePreview}
//                     className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
//                   >
//                     <Eye size={16} className="mr-2" />
//                     প্রিভিউ দেখুন
//                   </Button>
//                   <Button
//                     type="submit"
//                     disabled={isLoading}
//                     className="px-8 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
//                   >
//                     {isLoading ? (
//                       <>
//                         <Loader2 size={16} className="mr-2 animate-spin" />
//                         জমা হচ্ছে...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={16} className="mr-2" />
//                         ফর্ম জমা দিন
//                       </>
//                     )}
//                   </Button>
//                 </div>
//               )}
//             </CardFooter>
//           </Card>

//           {/* Form Note */}
//           <p className="text-gray-500 text-sm text-center flex items-center justify-center gap-2 bg-white/50 py-3 px-4 rounded-2xl">
//             <CheckCircle size={16} className="text-green-500" />
//             সাবমিট করার পূর্বে তথ্যগুলো পুনরায় চেক করুন।
//           </p>
//         </form>
//       </div>

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes bounceIn {
//           0% {
//             transform: scale(0.8);
//             opacity: 0;
//           }
//           70% {
//             transform: scale(1.05);
//             opacity: 1;
//           }
//           100% {
//             transform: scale(1);
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-out forwards;
//         }
//         .animate-bounceIn {
//           animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
//             forwards;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//         .delay-500 {
//           animation-delay: 500ms;
//         }
//         @media print {
//           body * {
//             visibility: hidden;
//           }
//           .print-area, .print-area * {
//             visibility: visible;
//           }
//           .print-area {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AdmissionForm;


import AdmissionForm from '@/components/AdmissionForm/AdmissionForm';
import React from 'react';

const page = () => {
  return (
    <div>
      <AdmissionForm/>
    </div>
  );
};

export default page;