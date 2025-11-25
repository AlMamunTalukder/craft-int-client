"use client";
import React from 'react';
import { Academicicon, IslamicKnowledgeIcon, Languageicon} from "@/app/shared/Icons/Icons";


export default function CategoriesSection() {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-10">

      {/* --- Top Video Placeholder --- */}
      {/* <div className="w-full max-w-4xl aspect-video bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl flex items-center justify-center">
        <div className="w-20 h-20 border-l-[35px] border-l-white border-y-[25px] border-y-transparent border-r-0" />
      </div> */}

      {/* --- Bottom Boxes --- */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Islamic Knowledge */}
        <div className="bg-gradient-to-br from-violet-700 to-purple-500 rounded-2xl p-6 text-white shadow-lg flex flex-col gap-4">
          <div className="w-12 h-12 ">
            <IslamicKnowledgeIcon />
          </div>
          <h2 className="text-sm font-semibold tracking-wide mt-3">ISLAMIC KNOWLEDGE</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            ইসলামের যাবতীয় মৌলিক জ্ঞান যেমনঃ ইসলামী আকিদা, কুরআন ও হাদিস শিক্ষা, নামাজ শিক্ষা, 
            প্রয়োজনীয় মাসলা-মাসআলা, হালাল হারাম ও মাসনূন দু’আ ও দরুদ ইত্যাদি।
          </p>
        </div>

        {/* Academic Knowledge */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-400 rounded-2xl p-6 text-white shadow-lg flex flex-col gap-4">
          <div className="w-14 h-14">
            <Academicicon />
          </div>
          <h2 className="text-sm font-semibold tracking-wide">ACADEMIC KNOWLEDGE</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            বাংলাদেশ মাদ্রাসা শিক্ষাবোর্ড এবং জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তকের আলোকে এটির সাজানো মডেল।
          </p>
        </div>

        {/* Languages */}
        <div className="bg-gradient-to-br from-purple-700 to-violet-500 rounded-2xl p-6 text-white shadow-lg flex flex-col gap-4">
          <div className="w-14 h-14">
            <Languageicon />
          </div>
          <h2 className="text-sm font-semibold tracking-wide">LANGUAGES</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            বিশুদ্ধ উচ্চারণে, সাবলীলভাবে, প্রমিত বাংলায় এবং বিট্রিশ ও আরবদের মত করে, ইংরেজি ও আরবিতে অর্নগল কথা বলা, লেখা পড়া এবং শোনার দক্ষতা নিশ্চিত করা।
          </p>
        </div>

      </div>
    </div>
  );
}




// --- Configuration ---
// const categories = [
//   {
//     id: 1,
//     title: "ISLAMIC KNOWLEDGE",
//     description: "ইসলামের যাবতীয় মৌলিক জ্ঞান যেমনঃ ইসলামী আকিদা, কুরআন ও হাদিস শিক্ষা, নামাজ শিক্ষা, প্রয়োজনীয় মাসলা-মাসআলা, হালাল হারাম ও মাসনূন দু’আ ও দরুদ ইত্যাদি।",
//     icon: IslamicKnowledgeIcon,
//     bg: "bg-gradient-to-br from-[#0f3f33] to-[#042f2e]", // Deep Emerald
//     border: "border-emerald-500/30",
//     glow: "shadow-emerald-500/20",
//     iconColor: "text-emerald-400"
//   },
//   {
//     id: 2,
//     title: "ACADEMIC KNOWLEDGE",
//     description: "বাংলাদেশ মাদ্রাসা শিক্ষাবোর্ড এবং জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তকের আলোকে এটির সাজানো মডেল।",
//     icon: Academicicon,
//     bg: "bg-gradient-to-br from-[#1e3a8a] to-[#172554]", // Deep Blue
//     border: "border-blue-500/30",
//     glow: "shadow-blue-500/20",
//     iconColor: "text-blue-400"
//   },
//   {
//     id: 3,
//     title: "LANGUAGES",
//     description: "বিশুদ্ধ উচ্চারণে, সাবলীলভাবে, প্রমিত বাংলায় এবং বিট্রিশ ও আরবদের মত করে, ইংরেজি ও আরবিতে অর্নগল কথা বলা, লেখা পড়া এবং শোনার দক্ষতা নিশ্চিত করা।",
//     icon: Languageicon,
//     bg: "bg-gradient-to-br from-[#831843] to-[#500724]", // Deep Rose
//     border: "border-pink-500/30",
//     glow: "shadow-pink-500/20",
//     iconColor: "text-pink-400",
//     isLanguage: true
//   }
// ];

// export default function CategoriesSection() {
//   return (
//     <div className="w-full flex flex-col items-center gap-16 py-20 px-6 bg-[#0B001A] overflow-hidden relative">
      
//       {/* --- Background Effects --- */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent"></div>
//          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
//       </div>

//       {/* --- Top Video Section --- */}
//       <div className="w-full max-w-5xl relative z-10 group cursor-pointer">
//         <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)] border-2 border-white/10 group-hover:border-purple-500/60 transition-all duration-500 hover:scale-[1.02]">
            
//             {/* Video Placeholder Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1A0B2E] to-purple-950">
//                  {/* Animated Gradient Overlay */}
//                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
//             </div>

//             {/* Play Button */}
//             <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative">
//                     <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10">
//                         <Play className="w-10 h-10 text-white fill-white ml-1" />
//                     </div>
//                     {/* Pulse Rings */}
//                     <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-2 border-purple-500/50 animate-[ping_2s_infinite]"></div>
//                     <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-purple-500/20 animate-[pulse_2s_infinite]"></div>
//                 </div>
//             </div>

//             {/* Video Text Overlay */}
//             <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
//                 <div className="flex items-center gap-3 mb-2">
//                      <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">Live Now</span>
//                 </div>
//                 <h3 className="text-white text-2xl md:text-4xl font-bold tracking-tight">আমাদের শিক্ষা কার্যক্রম</h3>
//                 <p className="text-gray-300 text-sm md:text-lg mt-2 max-w-2xl">এক নজরে দেখে নিন আমাদের বিশেষত্ব এবং শিক্ষার পরিবেশ</p>
//             </div>
//         </div>
//       </div>

//       {/* --- Categories Grid --- */}
//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
//         {categories.map((cat) => {
//             const Icon = cat.icon;
//             return (
//                 <div 
//                     key={cat.id}
//                     className={`
//                         group relative 
//                         rounded-[2.5rem] p-8 pt-12
//                         ${cat.bg} 
//                         shadow-2xl ${cat.glow}
//                         flex flex-col gap-6 
//                         border ${cat.border} hover:border-opacity-80
//                         transition-all duration-500 hover:-translate-y-3
//                         overflow-hidden
//                     `}
//                 >
//                     {/* Inner Glow */}
//                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//                     {/* Floating Icon */}
//                     <div className="relative w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner group-hover:rotate-3 transition-transform duration-500">
//                         <div className={`w-12 h-12 ${cat.iconColor} drop-shadow-md`}>
//                             <Icon />
//                         </div>
//                     </div>

//                     {/* Content */}
//                     <div className="relative z-10">
//                         <h2 className="text-xl font-black text-white tracking-widest uppercase mb-4 border-b border-white/10 pb-4 inline-block">
//                             {cat.title}
//                         </h2>
                        
//                         <p className="text-gray-200 text-sm md:text-[15px] font-light leading-relaxed opacity-90">
//                             {cat.description}
//                         </p>

//                         {/* Language Badges (Specific for Language Card) */}
//                         {cat.isLanguage && (
//                             <div className="flex flex-wrap gap-3 mt-6 justify-center">
//                                 <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold backdrop-blur-sm hover:bg-white/20 transition-colors">
//                                     বাংলা 🇧🇩
//                                 </span>
//                                 <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold backdrop-blur-sm hover:bg-white/20 transition-colors">
//                                     English 🇬🇧
//                                 </span>
//                                 <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold backdrop-blur-sm hover:bg-white/20 transition-colors">
//                                     العربية 🇸🇦
//                                 </span>
//                             </div>
//                         )}
//                     </div>

//                     {/* Hover Shine Line */}
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//                 </div>
//             );
//         })}

//       </div>

//       {/* Styles */}
//       <style jsx global>{`
//         @keyframes shimmer {
//             100% { transform: translateX(100%); }
//         }
//       `}</style>
//     </div>
//   );
// }
