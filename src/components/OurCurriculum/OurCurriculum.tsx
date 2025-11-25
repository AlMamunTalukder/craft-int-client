"use client"
import { Academicicon, Businessicon, IslamicKnowledgeIcon, ITicon, Languageicon, SoftSkillIcon } from "@/app/shared/Icons/Icons";
import { Star } from "lucide-react";
import React from "react";

const features = [
    {
        icon: IslamicKnowledgeIcon,
        title: "ISLAMIC KNOWLEDGE",
        color: "text-emerald-400",
        glow: "shadow-emerald-500/50",
        borderColor: "group-hover:border-emerald-500/60",
        bgGradient: "from-emerald-900/30 to-emerald-900/10",
        barColor: "bg-emerald-400" // Add this line
    },
    {
        icon: Academicicon,
        title: "ACADEMIC KNOWLEDGE",
        color: "text-cyan-400",
        glow: "shadow-cyan-500/50",
        borderColor: "group-hover:border-cyan-500/60",
        bgGradient: "from-cyan-900/30 to-cyan-900/10",
        barColor: "bg-cyan-400" // Add this line
    },
    {
        icon: Languageicon,
        title: "LANGUAGES",
        color: "text-pink-400",
        glow: "shadow-pink-500/50",
        borderColor: "group-hover:border-pink-500/60",
        bgGradient: "from-pink-900/30 to-pink-900/10",
        barColor: "bg-pink-400" // Add this line
    },
    {
        icon: ITicon,
        title: "IT SKILLS",
        color: "text-violet-400",
        glow: "shadow-violet-500/50",
        borderColor: "group-hover:border-violet-500/60",
        bgGradient: "from-violet-900/30 to-violet-900/10",
        barColor: "bg-violet-400" // Add this line
    },
    {
        icon: SoftSkillIcon,
        title: "SOFT SKILLS",
        color: "text-amber-400",
        glow: "shadow-amber-500/50",
        borderColor: "group-hover:border-amber-500/60",
        bgGradient: "from-amber-900/30 to-amber-900/10",
        barColor: "bg-amber-400" // Add this line
    },
    {
        icon: Businessicon,
        title: "BUSINESS SKILLS",
        color: "text-sky-400",
        glow: "shadow-sky-500/50",
        borderColor: "group-hover:border-sky-500/60",
        bgGradient: "from-sky-900/30 to-sky-900/10",
        barColor: "bg-sky-400" // Add this line
    },
];


const CourseFeatures = () => {
    return (
        <section className="relative min-h-screen bg-[#0B001A] overflow-hidden  py-24">
            
            {/* --- GALAXY BACKGROUND --- */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2E0249]/40 via-[#0F0518] to-[#05010D]"></div>
                
                {/* Animated Nebula Clouds */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse opacity-50"></div>
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000 opacity-50"></div>

                {/* Moving Stars */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-[pulse_8s_infinite]"></div>
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                
                {/* Title Section */}
                <div className="text-center mb-24 relative">
                    <span className="relative inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.3em] text-purple-200 uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"></span>
                        <span className="relative z-10 flex items-center gap-2">
                             <Star size={12} className="text-yellow-400 fill-yellow-400" /> Why Choose Us <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        </span>
                    </span>
                    <h2 className="mt-6 text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B0FF] via-white to-[#A855F7]">CURRICULUM</span>
                    </h2>
                    <div className="w-48 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-8"></div>
                </div>

                {/* Grid for Curriculum Features */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`
                                    group relative 
                                    bg-white/5 backdrop-blur-xl 
                                    rounded-[20px] md:rounded-[30px] py-5 md:p-10 
                                    flex flex-col items-center text-center 
                                    border border-white/10
                                    transition-all duration-500 ease-out
                                    hover:-translate-y-3
                                    hover:bg-[#1A0B2E]/60
                                    hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]
                                    cursor-pointer
                                    overflow-hidden
                                    ${feature.borderColor}
                                `}
                            >
                                {/* Top Holographic Sheen */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                {/* Icon Container with Neon Pulse */}
                                <div className={`
                                    relative mb-6 md:mb-8
                                    w-16 h-16 md:w-28 md:h-28
                                    rounded-2xl rotate-3 group-hover:rotate-0
                                    flex items-center justify-center
                                    bg-gradient-to-br ${feature.bgGradient}
                                    border border-white/10
                                    shadow-lg
                                    group-hover:scale-110 transition-all duration-500
                                    group-hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]
                                    ${feature.glow}
                                `}>
                                    <div className={`w-10 h-10 md:w-14 md:h-14 ${feature.color} drop-shadow-[0_0_10px_currentColor] transition-all duration-300`}>
                                        <Icon />
                                    </div>
                                </div>

                                {/* Feature Title */}
                                <h3 className="text-sm md:text-xl font-bold text-gray-200 tracking-widest group-hover:text-white transition-colors duration-300 uppercase drop-shadow-md z-10">
                                    {feature.title}
                                </h3>
                                
                                {/* Decorative Bottom Bar */}
                                {/* <div className={`w-12 h-1 mt-6 rounded-full bg-white/20 group-hover:w-24 group-hover:bg-current transition-all duration-500 ${feature.glow.replace('text-', 'bg-')}`}></div> */}
                                {/* Decorative Bottom Bar - FIXED */}
                                <div className={`w-12 h-1 mt-3 md:mt-6 rounded-full ${feature.barColor} group-hover:w-24 transition-all duration-500 ${feature.glow}`}></div>



                                {/* Subtle Corner Accent */}
                                <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${feature.bgGradient} opacity-0 group-hover:opacity-40 blur-xl rounded-tl-full transition-opacity duration-500`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <style jsx global>{`
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </section>
    );
};

export default CourseFeatures;

//     {
//         icon: IslamicKnowledgeIcon,
//         title: "ISLAMIC KNOWLEDGE",
//         color: "text-emerald-400",
//         gradient: "from-emerald-500/20 to-teal-900/50",
//         border: "group-hover:border-emerald-500/50",
//         shadow: "group-hover:shadow-emerald-500/30"
//     },
//     {
//         icon: Academicicon,
//         title: "ACADEMIC KNOWLEDGE",
//         color: "text-cyan-400",
//         gradient: "from-cyan-500/20 to-blue-900/50",
//         border: "group-hover:border-cyan-500/50",
//         shadow: "group-hover:shadow-cyan-500/30"
//     },
//     {
//         icon: Languageicon,
//         title: "LANGUAGES",
//         color: "text-rose-400",
//         gradient: "from-rose-500/20 to-pink-900/50",
//         border: "group-hover:border-rose-500/50",
//         shadow: "group-hover:shadow-rose-500/30"
//     },
//     {
//         icon: ITicon,
//         title: "IT SKILLS",
//         color: "text-violet-400",
//         gradient: "from-violet-500/20 to-purple-900/50",
//         border: "group-hover:border-violet-500/50",
//         shadow: "group-hover:shadow-violet-500/30"
//     },
//     {
//         icon: SoftSkillIcon,
//         title: "SOFT & HARD SKILLS",
//         color: "text-amber-400",
//         gradient: "from-amber-500/20 to-orange-900/50",
//         border: "group-hover:border-amber-500/50",
//         shadow: "group-hover:shadow-amber-500/30"
//     },
//     {
//         icon: Businessicon,
//         title: "BUSINESS SKILLS",
//         color: "text-sky-400",
//         gradient: "from-sky-500/20 to-indigo-900/50",
//         border: "group-hover:border-sky-500/50",
//         shadow: "group-hover:shadow-sky-500/30"
//     },
// ];



// const CourseFeatures = () => {
//     return (
//         <section className="relative min-h-screen py-20 overflow-hidden bg-[#05010D] font-sans group/grid">
            
//             {/* --- COSMIC VOID BACKGROUND --- */}
//             <div className="absolute inset-0 w-full h-full pointer-events-none">
//                 {/* Moving Stars */}
//                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-[pulse_10s_infinite]"></div>
                
//                 {/* Nebula Glows */}
//                 <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[150px] animate-[blob_15s_infinite]"></div>
//                 <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-800/20 rounded-full blur-[150px] animate-[blob_20s_infinite_reverse]"></div>
                
//                 {/* Center Spotlight */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]  bg-[#4F0187]/10 rounded-full blur-[120px]"></div>
//             </div>

//             <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                
//                 {/* Title Section */}
//                 <div className="text-center mb-20">
//                     <div className="inline-block mb-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
//                         <span className="text-gray-300 text-xs tracking-[0.4em] uppercase font-bold flex items-center gap-3">
//                              <Star size={12} className="text-yellow-400 fill-yellow-400" /> 
//                              Why Choose Us
//                              <Star size={12} className="text-yellow-400 fill-yellow-400" /> 
//                         </span>
//                     </div>
//                     <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
//                         OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] via-white to-[#A855F7]">CURRICULUM</span>
//                     </h2>
//                     <div className="w-40 h-1.5 mx-auto bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 rounded-full mt-8 shadow-[0_0_20px_rgba(232,121,249,0.8)]"></div>
//                 </div>

//                 {/* Grid for Curriculum Features with Spotlight Effect */}
//                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
//                     {features.map((feature, index) => {
//                         const Icon = feature.icon;
//                         return (
//                             <div
//                                 key={index}
//                                 className={`
//                                     group relative 
//                                     bg-purple-500/20 backdrop-blur-md 
//                                     border border-white/10
//                                     rounded-[30px] md:rounded-[30px]
//                                     p-8 pt-16
//                                     flex flex-col items-center text-center 
//                                     transition-all duration-500 ease-out
//                                     hover:-translate-y-4
//                                     hover:z-10 cursor-pointer
//                                     ${feature.shadow}
//                                     ${feature.border}
//                                 `}
//                             >
                           
//                                 {/* --- Floating Icon (Outside Card) --- */}
//                                 <div className={`
//                                     absolute -top-10 left-1/2 -translate-x-1/2
//                                     w-20 h-20 md:w-24 md:h-24
//                                     bg-[#0B001A]
//                                     rounded-full 
//                                     flex items-center justify-center
//                                     shadow-[0_0_30px_rgba(0,0,0,0.8)]
//                                     border-2 border-white/10
//                                     group-hover:scale-110 transition-transform duration-500
//                                     group-hover:border-opacity-100
//                                     z-20
//                                     ${feature.border}
//                                 `}>
//                                     <div className={`w-10 h-10 md:w-12 md:h-12 ${feature.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
//                                         <Icon />
//                                     </div>
                                    
//                                     {/* Spinning Ring around Icon */}
//                                     <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow"></div>
//                                 </div>

//                                 {/* Card Inner Glow */}
//                                 <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-[inherit] pointer-events-none`}></div>

//                                 {/* Content */}
//                                 <div className="relative z-10 mt-4">
//                                     <h3 className="text-sm md:text-xl font-bold text-gray-200 tracking-widest group-hover:text-white transition-colors duration-300 uppercase drop-shadow-lg">
//                                         {feature.title}
//                                     </h3>

//                                     {/* Animated Line with Hover Color */}
//                                    <div
//     className={`
//         w-10 h-1 bg-white/20 mt-6 rounded-full mx-auto
//         group-hover:w-20 transition-all duration-500
//         ${colorMap[feature.color]}
//     `}
// ></div>

//                                 </div>

//                                 {/* Bottom Neon Pulse */}
//                                 <div className={`absolute bottom-0 left-0 w-full h-1 ${feature.color.replace('text-', 'bg-')} opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_20px_currentColor] transition-all duration-500`}></div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* --- Custom Animations --- */}
//             <style jsx global>{`
//                 @keyframes blob {
//                     0% { transform: translate(0px, 0px) scale(1); }
//                     33% { transform: translate(30px, -50px) scale(1.1); }
//                     66% { transform: translate(-20px, 20px) scale(0.9); }
//                     100% { transform: translate(0px, 0px) scale(1); }
//                 }
//                 .animate-spin-slow {
//                     animation: spin 10s linear infinite;
//                 }
//                 @keyframes spin {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default CourseFeatures;
// ------------------------
// const features = [
//     {
//         icon: IslamicKnowledgeIcon,
//         title: "ISLAMIC KNOWLEDGE",
//     },
//     {
//         icon: Academicicon,
//         title: "ACADEMIC KNOWLEDGE",
//     },
//     {
//         icon: Languageicon,
//         title: "LANGUAGES",
//     },
//     {
//         icon: ITicon,
//         title: "IT SKILLS",
//     },
//     {
//         icon: SoftSkillIcon,
//         title: "SOFT SKILLS",
//     },
//     {
//         icon: Businessicon,
//         title: "BUSINESS SKILLS",
//     },
// ];

// const CourseFeatures = () => {
//     return (
//         <section className="relative  bg-[#13002b] overflow-hidden font-sans py-24">
            
//             {/* --- ENHANCED LIGHTER BACKGROUND --- */}
//             <div className="absolute inset-0 w-full h-full">
//                 {/* Base Lighter Deep Purple Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#2e1065] opacity-90"></div>

//                 {/* Large Ambient Light Orbs (Glows) */}
//                 <div className="absolute top-[-30%] left-[-20%] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full blur-[150px] animate-pulse"></div>
//                 <div className="absolute bottom-[-30%] right-[-20%] w-[1000px] h-[1000px] bg-fuchsia-500/30 rounded-full blur-[150px] animate-pulse delay-1000"></div>
                
//                 {/* Subtle Cyber Grid Overlay (Light) */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]"></div>
//             </div>

//             <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                
//                 {/* Title Section */}
//                 <div className="text-center mb-20">
//                     <span className="text-purple-200 text-sm tracking-[0.3em] uppercase font-bold shadow-black drop-shadow-md">Why Choose Us</span>
//                     <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
//                         OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B0FF] to-white">CURRICULUM</span>
//                     </h2>
//                     <div className="w-32 h-1.5 mx-auto bg-gradient-to-r from-[#A855F7] to-[#F300E7] rounded-full mt-6 shadow-[0_0_25px_rgba(243,0,231,0.6)]"></div>
//                 </div>

//                 {/* Grid for Curriculum Features */}
//                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
//                     {features.map((feature, index) => {
//                         const Icon = feature.icon;
//                         return (
//                             <div
//                                 key={index}
//                                 className="
//                                     group relative 
//                                     bg-white/10 backdrop-blur-md 
//                                     rounded-3xl p-6 md:p-10 
//                                     flex flex-col items-center text-center 
//                                     border border-white/20
//                                     shadow-[0_8px_32px_rgba(0,0,0,0.2)]
//                                     hover:shadow-[0_20px_50px_-10px_rgba(160,32,240,0.5)]
//                                     hover:bg-white/15 hover:border-purple-300/40
//                                     transition-all duration-500 ease-out
//                                     hover:-translate-y-3
//                                     cursor-pointer
//                                     overflow-hidden
//                                 "
//                             >
//                                 {/* Top Neon Border Line on Hover */}
//                                 <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#F300E7] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

//                                 {/* Icon Container with Glow */}
//                                 <div className="
//                                     relative
//                                     w-20 h-20 md:w-28 md:h-28 mb-6 md:mb-8
//                                     bg-gradient-to-br from-[#4c1d95] to-[#2e1065]
//                                     rounded-full 
//                                     flex items-center justify-center
//                                     shadow-[inset_0_4px_15px_rgba(0,0,0,0.3)]
//                                     border border-white/20
//                                     group-hover:scale-110 transition-transform duration-500
//                                     group-hover:border-purple-400/60
//                                 ">
//                                     <div className="w-10 h-10 md:w-14 md:h-14 text-[#ffffff] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(224,176,255,0.6)]">
//                                         <Icon />
//                                     </div>
                                    
//                                     {/* Spinning Ring */}
//                                     <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-t-[#F300E7] group-hover:border-l-[#A855F7]/50 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-spin-slow"></div>
//                                 </div>

//                                 {/* Feature Title */}
//                                 <h3 className="text-sm md:text-xl font-bold text-white tracking-widest group-hover:text-[#F300E7] transition-colors duration-300 uppercase drop-shadow-md">
//                                     {feature.title}
//                                 </h3>

//                                 {/* Bottom Glow */}
//                                 <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-24 h-12 bg-purple-500/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* --- Custom Keyframes --- */}
//             <style jsx global>{`
//                 .animate-spin-slow {
//                     animation: spin 4s linear infinite;
//                 }
//                 @keyframes spin {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default CourseFeatures;