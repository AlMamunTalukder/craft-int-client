// 'use client';

// import React from "react";
// import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

// import bg from "../../../../public/img/bg.webp";

// const Banner = () => {
//   return (
//     <section className="relative min-h-[85vh] flex items-center overflow-hidden ">


//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${bg.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Modern Gradient Overlay: Dark to Purple Transparent */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0B001A] via-[#1A0B2E]/90 to-[#4F0187]/40 z-10" />
//       </div>

//       {/* --- Floating Decorative Elements (Animation) --- */}
//       <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
//         <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
//       </div>

//       {/* --- Main Content --- */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">

//           {/* Text Content */}
//           <div className="w-full md:w-2/3 text-center md:text-left space-y-6">

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-md mx-auto md:mx-0 animate-[fadeIn_1s_ease-out]">
//               <Sparkles size={14} className="text-[#F300E7]" />
//               <span className="text-xs md:text-sm font-bold tracking-wider text-purple-100 uppercase">
//                 Admission Going On
//               </span>
//             </div>

//             {/* Headlines */}
//             <div className="space-y-2">
//               <h3 className="text-xl md:text-3xl font-medium text-purple-200 animate-[slideUp_0.8s_ease-out_0.2s_both]">
//                 ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে
//               </h3>

//               <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-white animate-[slideUp_0.8s_ease-out_0.4s_both]">
//                 যুগোপযোগী শিক্ষা <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F300E7] to-[#A855F7]">
//                   কারিকুলাম নিয়ে
//                 </span>
//               </h1>

//               <h2 className="text-lg md:text-2xl font-bold text-white/90 pt-2 animate-[slideUp_0.8s_ease-out_0.6s_both]">
//                 বাংলাদেশে আমরাই <span className="text-[#F300E7]  decoration-white/30">প্রথম...!!</span>
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 animate-[slideUp_0.8s_ease-out_0.8s_both]">
//               প্রি ওয়ান থেকে ৭ম শ্রেণি পর্যন্ত এবং নুরানি, নাজেরা হিফয বিভাগে (আবাসিক ও অনাবাসিক) -এ ভর্তি চলছে। আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আজই যোগাযোগ করুন।
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start animate-[slideUp_0.8s_ease-out_1s_both]">
//               <a href="/admission" className="group relative px-8 py-4 bg-gradient-to-r from-[#F300E7] to-[#A855F7] rounded-full text-white font-bold shadow-lg hover:shadow-purple-500/40 transition-all hover:-translate-y-1 overflow-hidden">
//                 <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
//                 <span className="relative flex items-center gap-2">
//                   ভর্তি তথ্য <ArrowRight size={18} />
//                 </span>
//               </a>

//               <a href="/contact" className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-bold backdrop-blur-sm hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
//                 <BookOpen size={18} />
//                 যোগাযোগ করুন
//               </a>
//             </div>
//           </div>

//           {/* Right Side Visual (Optional: Can be a Hero Image or Just Empty space for background visibility) */}
//           {/* For now keeping it simple to focus on text overlay on background */}
//         </div>
//       </div>

//       {/* --- Custom Animations Styles --- */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Banner;

'use client';

import React from "react";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  GraduationCap,
  Globe,
  Lightbulb,
  Award,
  PenTool
} from "lucide-react";

import bg from "../../../../public/img/bg.webp";
import img1 from "../../../../public/img/website-icon-admission.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B001A]">

      {/* --- Background Image & Modern Overlay --- */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f012f] via-[#1A0B2E]/95 to-[#4F0187]/70 z-10" />
      </div>

      {/* --- Floating Animated Icons (Education Theme) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

        {/* Top Left - Knowledge (Book) */}
        <div className="absolute top-20 left-10 text-white/5 animate-[bounce_6s_infinite]">
          <BookOpen size={80} />
        </div>

        {/* Bottom Right - Success (Graduation Cap) */}
        <div className="absolute bottom-20 right-10 text-[#F300E7]/10 animate-[pulse_5s_infinite]">
          <GraduationCap size={120} />
        </div>

        {/* Top Right - Global (Globe) */}
        <div className="absolute top-10 right-1/4 text-white/5 animate-[bounce_8s_infinite]">
          <Globe size={60} />
        </div>

        {/* Middle Left - Idea (Lightbulb) */}
        <div className="absolute top-1/2 left-20 text-yellow-400/10 animate-[pulse_4s_infinite]">
          <Lightbulb size={90} />
        </div>

        {/* Bottom Left - Achievement (Award) */}
        <div className="absolute bottom-10 left-1/4 text-purple-500/10 animate-[bounce_7s_infinite]">
          <Award size={70} />
        </div>

        {/* Top Center - Creativity (Pen) */}
        <div className="absolute top-32 right-1/3 text-white/5 animate-[pulse_6s_infinite]">
          <PenTool size={50} />
        </div>

        {/* Abstract Glows */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Text Content */}
          <div className="w-full md:w-3/4 text-center md:text-left space-y-8">

            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-white/5 backdrop-blur-md mx-auto md:mx-0 animate-[fadeIn_1s_ease-out] shadow-[0_0_15px_rgba(243,0,231,0.3)]">
              <Sparkles size={16} className="text-[#F300E7] animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-wider text-white uppercase">
                Admission Going On 2026
              </span>
            </div>

            {/* Headlines with Staggered Animation */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-3xl font-medium text-purple-200 animate-[slideUp_0.8s_ease-out_0.2s_both]">
                ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে
              </h3>

              <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-white animate-[slideUp_0.8s_ease-out_0.4s_both] drop-shadow-2xl">
                স্কিলস বেইসড শিক্ষা <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F300E7] via-purple-400 to-[#A855F7]">
                  কারিকুলাম নিয়ে
                </span>
              </h1>

              <h2 className="text-xl md:text-3xl font-bold text-white/90 pt-2 animate-[slideUp_0.8s_ease-out_0.6s_both]">
                বাংলাদেশে আমরাই <span className="relative inline-block text-[#F300E7]">
                  প্রথম...!!
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F300E7] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* <p className="text-yellow-200 text-base md:text-md leading-relaxed font-light animate-[slideUp_0.8s_ease-out_0.8s_both]">অগ্রিম ভর্তিতে ২৫% ছাড়...!</p>
         
            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 animate-[slideUp_0.8s_ease-out_0.8s_both] font-light">
              প্রি ওয়ান থেকে সেভেন পর্যন্ত এবং নুরানি, নাজেরা হিফয বিভাগে (আবাসিক ও অনাবাসিক) -এ ভর্তি চলছে। 
            </p> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-8 justify-center md:justify-start animate-[slideUp_0.8s_ease-out_1s_both]">
              <a href="/verification" className="group relative px-8 py-4 bg-gradient-to-r from-[#F300E7] to-[#A855F7] rounded-full text-white font-bold shadow-[0_10px_20px_rgba(243,0,231,0.3)] hover:shadow-[0_15px_30px_rgba(243,0,231,0.5)] transition-all hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
                <span className="relative flex items-center gap-3 text-lg text-center md:text-start">
                  ভর্তি ফর্ম <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg hover:border-purple-500/50">
                <BookOpen size={20} />
                যোগাযোগ করুন
              </a>
            </div>
          </div>
          <div className="animate-[float_6s_ease-in-out_infinite]">
            <Image src={img1} height={400} width={500} alt="academic"/>
          </div>
        </div>
      </div>

      {/* --- Custom Animations Styles --- */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Banner;