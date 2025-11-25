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
import { QuranIcon} from "@/app/shared/Icons/Icons";



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
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

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
