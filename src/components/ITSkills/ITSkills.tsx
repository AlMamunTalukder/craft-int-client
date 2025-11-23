import React from "react";
import { 
    Palette, 
    Video, 
    Box, 
    Volume2, 
    Camera, 
    Sparkles, 
    Code, 
    Smartphone, 
    FileText, 
    Settings, 
    Mic, 
    Bot
} from "lucide-react";

import Image from "next/image";
import itskills from "../../../public/img/itskills.png";



const allSkills = [
    { 
        icon: Palette, 
        label: "Graphic Design", 
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        border: "group-hover:border-pink-400/50"
    },
    { 
        icon: Video, 
        label: "Video Editing", 
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "group-hover:border-orange-400/50"
    },
    { 
        icon: Box, 
        label: "Motion Design & Animation", 
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "group-hover:border-cyan-400/50"
    },
    { 
        icon: Volume2, 
        label: "Sound Design", 
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "group-hover:border-emerald-400/50"
    },
    { 
        icon: Camera, 
        label: "Cinematography", 
        color: "text-red-400",
        bg: "bg-red-400/10",
        border: "group-hover:border-red-400/50"
    },
    { 
        icon: Sparkles, 
        label: "Artificial Intelligence (AI)", 
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "group-hover:border-purple-400/50"
    },
    { 
        icon: Code, 
        label: "Web Design & Development", 
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "group-hover:border-blue-400/50"
    },
    { 
        icon: Smartphone, 
        label: "App Design & Development", 
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
        border: "group-hover:border-indigo-400/50"
    },
    { 
        icon: FileText, 
        label: "Microsoft Office Suite", 
        sub: "(Word, Excel, PowerPoint)",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "group-hover:border-yellow-400/50"
    },
    { 
        icon: Settings,  
        label: "Studio Setup (Audio & Video)", 
        color: "text-gray-300",
        bg: "bg-gray-400/10",
        border: "group-hover:border-gray-400/50"
    },
    { 
        icon: Mic, 
        label: "Content Creation & Filmmaking", 
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "group-hover:border-rose-400/50"
    },
    { 
        icon: Bot, 
        label: "Robotics", 
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "group-hover:border-rose-400/50"
    },
];

const ITSkills = () => {
    return (
        <section className="relative min-h-screen py-10 md:py-20 overflow-hidden bg-[#4F0187] flex items-center justify-center font-sans">
            
            {/* Modern Abstract Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#4F0187] opacity-20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8A2BE2] opacity-20 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-30"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl px-4">
                
                {/* Header */}
                <div className="text-center mb-9 lg:mb-16">
                     <div className="flex justify-center mb-6">
            <div className="w-32 h-32 m-5 text-[#E0B0FF] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(224,176,255,0.6)] ">
              {/* <SoftSkillIcon/> */}
              <Image 
                src={itskills} 
                alt="Business Icon" 
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </div>
          </div>
                    {/* <div className="inline-block px-4 py-1 rounded-full border border-[#8A2BE2]/30 bg-[#8A2BE2]/10 mb-4">
                        <span className="text-[#D8B4FE] text-sm font-medium tracking-widest uppercase">Technical Expertise</span>
                    </div> */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#A855F7]">IT Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] mx-auto rounded-full"></div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allSkills.map((skill, idx) => {
                        const Icon = skill.icon;
                        return (
                            <div 
                                key={idx}
                                className={`
                                    group relative p-3 md:p-6 
                                    rounded-2xl 
                                    bg-[#3f186c] backdrop-blur-md
                                    border border-white/5
                                    hover:bg-[#251040]/80
                                    transition-all duration-300 
                                    cursor-default
                                    ${skill.border} hover:border-opacity-50
                                `}
                            >
                                <div className="flex flex-col sm:flex-row md:items-start items-center gap-4">

                                    {/* Icon Box */}
                                    <div className={`
                                        w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                                        ${skill.bg} ${skill.color}
                                        group-hover:scale-110 transition-transform duration-300
                                    `}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-center md:text-start md:text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                                            {skill.label}
                                        </h3>
                                        {skill.sub && (
                                            <p className="text-center text-xs text-white/50 mt-1 font-medium">
                                                {skill.sub}
                                            </p>
                                        )}
                                        {!skill.sub && (
                                            <div className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-[#8A2BE2] to-transparent mt-2 transition-all duration-500"></div>
                                        )}
                                    </div>
                                </div>

                                {/* Hover Glow Effect (Subtle) */}
                                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Bottom Decorative Line */}
                <div className="mt-16 flex justify-center opacity-30">
                    <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>

            </div>
        </section>
    );
};

export default ITSkills;