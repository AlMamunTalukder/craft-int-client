/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { 
    GraduationCap, 
    Sparkles, 
    BookOpen, 
    Atom, 
    Microscope, 
    Calculator, 
    Moon, 
    Scroll,
    PenTool 
} from "lucide-react";

// --- 1. Custom Quran Icon (Kept as is) ---
const QuranIcon = ({ size = 24, className }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 67.42 88.39"
        width={size}
        height={size}
        fill="currentColor"
        className={className}
    >
        <g id="Layer_1-2" data-name="Layer 1">
            <g>
                <path d="m63.95,0c.58.3,1.2.53,1.72.91,1.11.81,1.69,1.93,1.74,3.32,0,.2,0,.4,0,.6,0,20.23,0,40.46,0,60.7,0,2.4-1.14,4.09-3.2,4.65-.52.14-1.08.18-1.62.18-16.32,0-32.64,0-48.96,0-1.6,0-2.03-.45-2.03-2.06,0-22.1,0-44.21-.01-66.31,0-.9.25-1.56,1.05-1.99,17.1,0,34.2,0,51.3,0Zm-24.46,61.19c2.2-.58,3.77-1.94,4.78-3.99.38-.78,1.09-1.12,1.95-1.24,2.96-.41,4.95-2.01,5.82-4.9.13-.44.33-.64.78-.75,3.32-.8,5.4-3.39,5.41-6.77.02-5.32.02-10.65,0-15.97-.01-3.34-2.11-5.98-5.34-6.75-.52-.12-.73-.33-.89-.84-.87-2.75-2.74-4.4-5.62-4.78-1.1-.15-1.85-.65-2.34-1.65-.74-1.5-1.88-2.65-3.46-3.2-.9-.31-1.27-.69-1.19-1.68.07-.88-.62-1.47-1.46-1.45-.8.01-1.38.57-1.44,1.42-.03.42,0,.85,0,1.28-2.23.6-3.8,1.89-4.77,3.89-.43.89-1.21,1.23-2.15,1.37-2.89.43-4.82,2.03-5.68,4.84-.15.47-.34.67-.83.79-3.24.76-5.35,3.4-5.37,6.73-.03,5.35-.03,10.7,0,16.05.02,3.33,2.13,5.93,5.38,6.71.48.12.68.33.83.81.86,2.76,2.74,4.41,5.6,4.82,1.11.16,1.77.69,2.38,1.6.68,1,1.53,1.92,2.45,2.71.58.5,1.41.71,2.12,1.05.12,2.01.46,2.62,1.49,2.63,1.01.01,1.32-.53,1.55-2.72Z"></path>
                <path d="m.01,42.31c0-11.14,0-22.28,0-33.42C.02,4.77,2.5,1.41,6.25.35c1.65-.47,2.42.11,2.42,1.82,0,12.18,0,24.35,0,36.53,0,9.87,0,19.75,0,29.62,0,1.65-.13,1.84-1.68,2.34-2.64.85-4.26,3.31-4,6.05.25,2.63,2.37,4.73,5.1,5.05.03,0,.06,0,.09,0,1.92,0,1.7.23,1.72,2.03,0,.65-.31.93-.94.97-4.44.3-8.75-3.57-8.91-8.08-.08-2.13-.03-4.26-.03-6.39,0-9.33,0-18.65,0-27.98Z"></path>
                <path d="m35.5,73.32c8.75,0,17.5,0,26.25,0,1.79,0,2.19.4,2.19,2.17,0,.58.01,1.15,0,1.73-.03,1.01-.54,1.54-1.53,1.62-.26.02-.52,0-.78,0-9.67,0-19.34,0-29.01,0q-1.47,0-1.63-1.42c-.09-.76-.51-1.22-1.26-1.31-.79-.09-1.34.28-1.57,1.04-.09.3-.1.62-.1.94,0,2.1,0,4.2,0,6.3-.02,2.92-2.13,4.54-4.96,3.81-.06-.01-.11-.03-.16-.05-1.64-.68-3.25-.54-4.94-.04-3.07.92-5.16-.75-5.16-3.95,0-2.1,0-4.2,0-6.3,0-1.11-.55-1.76-1.45-1.76-.91,0-1.46.59-1.48,1.73-.01.76-.37,1.02-1.07,1.01-1.64-.02-2.93-1.23-2.93-2.78,0-1.61,1.2-2.74,3-2.74,8.35-.01,16.69,0,25.04,0,.52,0,1.04,0,1.55,0Z"></path>
                <path d="m48.66,81.8c5.27,0,10.53,0,15.8,0,.32,0,.64,0,.95.03.76.09,1.2.57,1.27,1.31.07.75-.32,1.28-1.04,1.49-.32.1-.68.11-1.02.11-10.76,0-21.52.01-32.29-.02-.42,0-1.15-.26-1.2-.5-.12-.7-.04-1.46.13-2.16.04-.16.71-.25,1.09-.25,5.44-.02,10.88-.01,16.32-.01Z"></path>
                <path d="m45.89,42.6c-11.28,9.2-24.53-4.05-15.35-15.39,11.17-7.88,23.27,4.22,15.35,15.39Z"></path>
            </g>
        </g>
    </svg>
);




// --- 2. Configuration Data ---
const departments = [
    {
        id: 1,
        title: "ACADEMIC",
        subtitle: "DEPARTMENT",
        icon: GraduationCap,
        description: "General Education & Modern Science",
        color: "text-cyan-300",
        bg: "group-hover:shadow-cyan-500/50",
        border: "group-hover:border-cyan-400/50",
        gradient: "from-cyan-500/20 to-blue-500/5"
    },
    {
        id: 2,
        title: "HIFZ QURAN",
        subtitle: "DEPARTMENT",
        icon: QuranIcon,
        description: "Tahfizul Quran & Islamic Studies",
        color: "text-white",
        bg: "group-hover:shadow-fuchsia-500/50",
        border: "group-hover:border-fuchsia-400/50",
        gradient: "from-fuchsia-500/20 to-purple-500/5"
    }
];

// --- 3. Background Floating Icons Configuration ---
const floatingIcons = [
    { Icon: BookOpen, top: '10%', left: '10%', size: 40, delay: '0s', duration: '6s', color: 'text-cyan-200/20' }, // General
    { Icon: Atom, top: '15%', right: '15%', size: 48, delay: '1s', duration: '8s', color: 'text-purple-200/20' }, // Science
    { Icon: Moon, top: '40%', left: '5%', size: 32, delay: '2s', duration: '7s', color: 'text-fuchsia-200/20' }, // Islamic
    { Icon: Microscope, bottom: '20%', left: '15%', size: 44, delay: '3s', duration: '9s', color: 'text-blue-200/20' }, // Science
    { Icon: Scroll, bottom: '15%', right: '10%', size: 40, delay: '1.5s', duration: '7.5s', color: 'text-amber-100/20' }, // History/Islamic
    { Icon: Calculator, top: '50%', right: '5%', size: 30, delay: '4s', duration: '6.5s', color: 'text-indigo-200/20' }, // Math
    { Icon: PenTool, bottom: '40%', right: '45%', size: 28, delay: '0.5s', duration: '5s', color: 'text-white/10' }, // Writing
];

const DepartmentSection = () => {
    return (
        <section className="relative py-12 md:py-24 bg-[#11031d] overflow-hidden font-sans">

            {/* --- LUMINOUS ANIMATED BACKGROUND --- */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">

                {/* Base Gradient - No Black */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764] via-[#280a3f] to-[#330953] opacity-100"></div>

                {/* Massive Glowing Light Orbs */}
                <div className="absolute top-[-30%] left-[-20%] w-[1000px] h-[1000px] bg-[#340d58] opacity-30 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[-30%] right-[-20%] w-[1000px] h-[1000px] bg-[#420e4a] opacity-30 rounded-full blur-[150px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                {/* --- NEW: Educational Floating Icons --- */}
                {floatingIcons.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute animate-float ${item.color}`}
                        style={{
                            top: item.top,
                            left: item.left,
                            right: item.right,
                            bottom: item.bottom,
                            animationDelay: item.delay,
                            animationDuration: item.duration,
                        }}
                    >
                        <item.Icon size={item.size} strokeWidth={1.5} />
                    </div>
                ))}

                {/* Original Floating Particles/Stars (Kept for extra magic) */}
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-[ping_3s_infinite] shadow-[0_0_10px_white]"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-200 rounded-full animate-[ping_5s_infinite] shadow-[0_0_10px_#E879F9] delay-1000"></div>
                <div className="absolute bottom-10 left-1/2 w-1 h-1 bg-cyan-200 rounded-full animate-[ping_4s_infinite] delay-500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-purple-300/40 bg-white/10 mb-3 md:mb-4 backdrop-blur-xl shadow-[0_0_20px_rgba(232,121,249,0.4)]">
                        <Sparkles className="text-[#E879F9] w-3 h-3 md:w-4 md:h-4 animate-pulse" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-purple-100 uppercase">
                            Core Faculties
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E879F9] via-white to-[#A855F7]">DEPARTMENTS</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#A855F7] to-[#E879F9] mx-auto rounded-full mt-6 shadow-[0_0_20px_rgba(232,121,249,0.8)]"></div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-2 gap-3 md:gap-16 max-w-5xl mx-auto">

                    {departments.map((dept) => {
                        const Icon = dept.icon;
                        return (
                            <div
                                key={dept.id}
                                className={`
                                    group relative w-full
                                    bg-[#4c1d95]/40 backdrop-blur-2xl
                                    border border-white/20 
                                    rounded-[24px] md:rounded-[40px]
                                    p-4 md:p-12
                                    flex flex-col items-center text-center
                                    transition-all duration-500 ease-out
                                    hover:-translate-y-2 md:hover:-translate-y-4
                                    ${dept.border}
                                    hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] ${dept.bg}
                                    overflow-hidden
                                `}
                            >
                                {/* Inner Gradient Overlay */}
                                <div className={`absolute inset-0 rounded-[24px] md:rounded-[40px] bg-gradient-to-b ${dept.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                                {/* Icon Circle with "Bracket" effect */}
                                <div className="relative mb-4 md:mb-8">
                                    {/* Rotating Bright Rings */}
                                    <div className="absolute inset-0 -m-2 md:-m-4 border-2 border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite] group-hover:border-white/50 transition-colors"></div>
                                    <div className="absolute inset-0 -m-2 md:-m-4 border-2 border-white/10 rounded-full"></div>

                                    <div className="relative w-14 h-14 md:w-32 md:h-32 bg-gradient-to-br from-[#581c87] to-[#3b0764] rounded-full flex items-center justify-center border border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                                        <Icon className={`${dept.color} w-7 h-7 md:w-14 md:h-14 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 w-full">
                                    <h3 className="text-sm md:text-3xl font-bold text-white mb-1 md:mb-2 group-hover:tracking-wide transition-all duration-300 drop-shadow-md">
                                        {dept.title}
                                    </h3>
                                    <p className="text-[10px] md:text-base font-medium text-purple-200 uppercase tracking-widest mb-3 md:mb-4 group-hover:text-white">
                                        {dept.subtitle}
                                    </p>

                                    {/* Divider */}
                                    <div className="w-8 md:w-12 h-0.5 bg-white/30 mx-auto mb-3 md:mb-4 group-hover:w-full group-hover:bg-white/70 transition-all duration-500"></div>

                                    <p className="text-purple-100 text-[10px] md:text-sm font-light leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                                        {dept.description}
                                    </p>
                                </div>

                                {/* Bottom Glow Spot */}
                                <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 md:w-40 md:h-40 ${dept.color.replace('text-', 'bg-')}/40 blur-[60px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-500`}></div>
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
                /* Existing spin animation */
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default DepartmentSection;