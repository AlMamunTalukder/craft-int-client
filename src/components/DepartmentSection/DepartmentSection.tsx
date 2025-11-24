/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import {
    GraduationCap,
    Sparkles,
    BookOpen,
    Atom,
    Moon,
    Scroll,
    Star,
} from "lucide-react";

// --- 1. Custom Quran Icon (Kept as is) ---
const QuranIcon = ({ size = 32, className }: any) => (
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

const departments = [
    {
        id: 1,
        title: "ACADEMIC",
        subtitle: "DEPARTMENT",
        icon: GraduationCap,
        description: "General Education & Modern Science",
        color: "text-cyan-400",
        borderGradient: "from-cyan-500 via-blue-500 to-purple-600",
        shadow: "group-hover:shadow-cyan-500/20",
        iconBg: "bg-gradient-to-br from-cyan-900/50 to-blue-900/30",
    },
    {
        id: 2,
        title: "HIFZUL QURAN",
        subtitle: "DEPARTMENT",
        icon: QuranIcon, 
        description: "Tahfizul Quran & Islamic Studies",
        color: "text-fuchsia-400",
        borderGradient: "from-fuchsia-500 via-pink-500 to-purple-600",
        shadow: "group-hover:shadow-fuchsia-500/20",
        iconBg: "bg-gradient-to-br from-fuchsia-900/50 to-purple-900/30",
    }
];

// Floating Icons for Background
const floatingIcons = [
    { Icon: BookOpen, top: '15%', left: '10%', size: 45, delay: '0s', duration: '7s', color: 'text-cyan-200/10' },
    { Icon: Moon, top: '20%', right: '15%', size: 40, delay: '1s', duration: '8s', color: 'text-fuchsia-200/10' },
    { Icon: Atom, bottom: '20%', left: '20%', size: 50, delay: '2s', duration: '9s', color: 'text-blue-200/10' },
    { Icon: Scroll, bottom: '15%', right: '10%', size: 35, delay: '1.5s', duration: '6.5s', color: 'text-yellow-200/10' },
];

const DepartmentSection = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#0B001A] overflow-hidden ">
            
            {/* --- GALAXY BACKGROUND --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1E0A2F] via-[#0F0518] to-[#05010D]"></div>
                
                {/* Animated Nebula Clouds */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse opacity-50"></div>
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000 opacity-50"></div>

                {/* Starfield Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-[pulse_8s_infinite]"></div>

                {/* Floating Background Icons */}
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
                        <item.Icon size={item.size} strokeWidth={1} />
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <Sparkles size={14} className="text-purple-300 animate-spin-slow" />
                        <span className="text-xs font-bold tracking-[0.2em] text-purple-200 uppercase">
                            Excellence Centers
                        </span>
                        <Sparkles size={14} className="text-purple-300 animate-spin-slow" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B0FF] via-white to-[#A855F7]">DEPARTMENTS</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-8"></div>
                </div>

                {/* --- NEW CARD DESIGN GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:max-w-5xl mx-auto">
                    
                    {departments.map((dept, index) => {
                        const Icon = dept.icon;
                        return (
                            <div key={index} className="group relative h-full w-[250px] md:w-full mx-auto">
                                
                                {/* 1. Animated Gradient Border */}
                                <div className={`absolute -inset-[2px] bg-gradient-to-r ${dept.borderGradient} rounded-[2.5rem] opacity-50 group-hover:opacity-100 blur-sm transition duration-500 group-hover:duration-200`}></div>
                                
                                {/* 2. Main Card Body */}
                                <div className="relative h-full bg-[#0D0416] rounded-[2.5rem] p-5 md:p-12 flex flex-col items-center text-center border border-white/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                                    
                                    {/* Background Glow inside card */}
                                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                    
                                    {/* --- 3. The Floating Pedestal (Icon Container) --- */}
                                    <div className="relative mb-8">
                                        {/* Back Glow */}
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${dept.color.replace('text-', 'bg-')}/20  blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
                                        
                                        {/* Icon Circle */}
                                        <div className={`
                                            relative w-24 h-24 md:w-32 md:h-32 
                                            rounded-lg flex items-center justify-center 
                                            ${dept.iconBg} border border-white/10
                                            shadow-[inset_0_2px_20px_rgba(255,255,255,0.1)]
                                            group-hover:scale-110 transition-transform duration-500 ease-out
                                        `}>
                                            {/* Rotating Ring */}
                                            <div className="absolute inset-0 rounded-lg border-[1px] border-dashed border-white/30 animate-[spin_20s_linear_infinite]"></div>
                                            
                                            <Icon className={`w-12 h-12 md:w-16 md:h-16 rounded-lg ${dept.color} drop-shadow-[0_0_15px_currentColor] transform group-hover:rotate-12 transition-transform duration-500`} />
                                        </div>
                                    </div>

                                    {/* --- 4. Content --- */}
                                    <div className="relative z-10">
                                        <div className="inline-block mb-3 px-3 py-1 rounded border border-white/10 bg-white/5">
                                            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                                {dept.subtitle}
                                            </p>
                                        </div>
                                        
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                            {dept.title}
                                        </h3>
                                        
                                        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xs mx-auto group-hover:text-gray-200 transition-colors duration-300">
                                            {dept.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${dept.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Info Text */}
                <div className="text-center mt-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <div className="inline-flex items-center gap-2 text-purple-300/60 text-xs tracking-widest uppercase">
                        <Star size={10} /> Discover Your Path <Star size={10} />
                    </div>
                </div>
            </div>
            
            {/* Animations */}
            <style jsx global>{`
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default DepartmentSection;
