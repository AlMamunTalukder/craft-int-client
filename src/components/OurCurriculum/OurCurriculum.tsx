"use client";
import {
  Academicicon,
  Businessicon,
  IslamicKnowledgeIcon,
  ITicon,
  Languageicon,
  SoftSkillIcon,
} from "@/app/shared/Icons/Icons";
import { Star } from "lucide-react";
import React from "react";

const features = [
  {
    id: "islamic-knowledge",
    icon: IslamicKnowledgeIcon,
    title: "ISLAMIC KNOWLEDGE",
    color: "text-emerald-400",
    glow: "shadow-emerald-500/50",
    borderColor: "group-hover:border-emerald-500/60",
    bgGradient: "from-emerald-900/30 to-emerald-900/10",
    barColor: "bg-emerald-400", 
  },
  {
    id: "academic-knowledge",
    icon: Academicicon,
    title: "ACADEMIC KNOWLEDGE",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/50",
    borderColor: "group-hover:border-cyan-500/60",
    bgGradient: "from-cyan-900/30 to-cyan-900/10",
    barColor: "bg-cyan-400", 
  },
  {
    id: "languages",
    icon: Languageicon,
    title: "LANGUAGES",
    color: "text-pink-400",
    glow: "shadow-pink-500/50",
    borderColor: "group-hover:border-pink-500/60",
    bgGradient: "from-pink-900/30 to-pink-900/10",
    barColor: "bg-pink-400", 
  },
  {
    id: "it-skills",
    icon: ITicon,
    title: "IT SKILLS",
    color: "text-violet-400",
    glow: "shadow-violet-500/50",
    borderColor: "group-hover:border-violet-500/60",
    bgGradient: "from-violet-900/30 to-violet-900/10",
    barColor: "bg-violet-400", 
  },
  {
    id: "soft-skills",
    icon: SoftSkillIcon,
    title: "SOFT & HARD SKILLS",
    color: "text-amber-400",
    glow: "shadow-amber-500/50",
    borderColor: "group-hover:border-amber-500/60",
    bgGradient: "from-amber-900/30 to-amber-900/10",
    barColor: "bg-amber-400", 
  },
  {
    id: "business-skills",
    icon: Businessicon,
    title: "BUSINESS SKILLS",
    color: "text-sky-400",
    glow: "shadow-sky-500/50",
    borderColor: "group-hover:border-sky-500/60",
    bgGradient: "from-sky-900/30 to-sky-900/10",
    barColor: "bg-sky-400", 
  },
];

const CourseFeatures = () => {
    const handleCardClick = (sectionId: string) => {
    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
              <Star size={12} className="text-yellow-400 fill-yellow-400" /> Why
              Choose Us{" "}
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
            </span>
          </span>
          <h2 className="mt-6 text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B0FF] via-white to-[#A855F7]">
              CURRICULUM
            </span>
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
                 onClick={() => handleCardClick(feature.id)}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-[20px] md:rounded-[30px] py-5 md:p-10  flex flex-col items-center text-center border border-white/10 transition-all duration-500 ease-out  hover:-translate-y-3 hover:bg-[#1A0B2E]/60 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden ${feature.borderColor} `}
              >
                {/* Top Holographic Sheen */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon Container with Neon Pulse */}
                <div
                  className={`
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
                                `}
                >
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 ${feature.color} drop-shadow-[0_0_10px_currentColor] transition-all duration-300`}
                  >
                    <Icon />
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="text-sm md:text-xl font-bold text-gray-200 tracking-widest group-hover:text-white transition-colors duration-300 uppercase drop-shadow-md z-10">
                  {feature.title}
                </h3>

                <div
                  className={`w-12 h-1 mt-3 md:mt-6 rounded-full ${feature.barColor} group-hover:w-24 transition-all duration-500 ${feature.glow}`}
                ></div>

                {/* Subtle Corner Accent */}
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${feature.bgGradient} opacity-0 group-hover:opacity-40 blur-xl rounded-tl-full transition-opacity duration-500`}
                ></div>
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
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default CourseFeatures;