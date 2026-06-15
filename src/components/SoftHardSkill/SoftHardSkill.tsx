/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState } from "react";
import {
  Brain,
  Mic,
  Crown,
  Palette,
  Wrench,
  LifeBuoy,
  Lightbulb,
  Home,
  Compass,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import soft from "../../../public/img/Asset4.png";
import Image from "next/image";

// --- SKILLS DATA ---
const skillsData = [
  {
    id: 1,
    categoryEn: "Personal Development",
    categoryBn: "ব্যক্তিগত উন্নয়ন ও মানসিক-স্বাস্থ্য",
    count: 12,
    icon: Brain,
    theme: "from-emerald-500 to-teal-500",
    activeBg: "bg-emerald-500/10",
    activeBorder: "border-emerald-500/50",
    textColor: "text-emerald-400",
    skills: [
      {
        en: "Personal Development & Productivity",
        bn: "ব্যক্তিগত উন্নয়ন ও নিজেকে গঠন করার দক্ষতা",
      },
      {
        en: "Time Management & Multitasking",
        bn: "সময় ব্যবস্থাপনা ও একসাথে একাধিক কাজ করার দক্ষতা",
      },
      { en: "Deep Focus", bn: "গভীর মনোযোগ দিয়ে কাজ করা" },
      { en: "Habit Building", bn: "ভালো অভ্যাস গঠন" },
      {
        en: "Digital Detox & Addiction Awareness",
        bn: "স্ক্রিন নিয়ন্ত্রণ এবং আসক্তি সচেতনতা",
      },
      { en: "Goal Setting", bn: "জীবনের লক্ষ্য ঠিক করা" },
      { en: "Confidence Building", bn: "আত্মবিশ্বাস বাড়ানো" },
      { en: "Mind Training", bn: "মানসিক শক্তি ও মনোযোগ বাড়ানো" },
      { en: "Stress Management", bn: "মানসিক চাপ নিয়ন্ত্রণ" },
      { en: "Primary Health Care", bn: "প্রাথমিক স্বাস্থ্যসেবা" },
      { en: "Physical Fitness Awareness", bn: "শরীরের যত্ন ও সচেতনতা" },
      {
        en: "Healthy Food & Diet Planning",
        bn: "স্বাস্থ্যকর খাবার ও পুষ্টি পরিকল্পনা",
      },
    ],
  },
  {
    id: 2,
    categoryEn: "Communication & Media",
    categoryBn: "যোগাযোগ ও মিডিয়া দক্ষতা",
    count: 11,
    icon: Mic,
    theme: "from-blue-500 to-cyan-500",
    activeBg: "bg-cyan-500/10",
    activeBorder: "border-cyan-500/50",
    textColor: "text-cyan-400",
    skills: [
      { en: "Communication Skill", bn: "যোগাযোগের দক্ষতা" },
      { en: "Active Listening", bn: "মনোযোগ দিয়ে অন্যের কথা বুঝে শোনা" },
      { en: "Storytelling Skill", bn: "আকর্ষণীয়ভাবে কথা ও গল্প বলার দক্ষতা" },
      { en: "Debating Skill", bn: "বিতর্কের দক্ষতা" },
      {
        en: "Public Speaking & Presentation",
        bn: "জনসম্মুখে কথা বলা ও উপস্থাপনা",
      },
      { en: "Anchoring & Hosting", bn: "অনুষ্ঠান উপস্থাপনা ও সঞ্চালনা" },
      { en: "Journalism", bn: "সাংবাদিকতা" },
      { en: "News Reporting", bn: "সংবাদ প্রতিবেদন" },
      { en: "News Presentation", bn: "সংবাদ উপস্থাপনা" },
      { en: "Voice Over Skill", bn: "বিভিন্ন কনটেন্টে কণ্ঠ দেয়ার দক্ষতা" },
      { en: "Voice Acting", bn: "কণ্ঠ অভিনয়" },
    ],
  },
  {
    id: 3,
    categoryEn: "Leadership & Mgt.",
    categoryBn: "নেতৃত্ব ও ব্যবস্থাপনার দক্ষতা",
    count: 11,
    icon: Crown,
    theme: "from-purple-500 to-indigo-500",
    activeBg: "bg-purple-500/10",
    activeBorder: "border-purple-500/50",
    textColor: "text-purple-400",
    skills: [
      { en: "Leadership Skill", bn: "নেতৃত্ব দেওয়ার দক্ষতা" },
      {
        en: "Emotional Intelligence",
        bn: "আবেগ বোঝা ও নিয়ন্ত্রণের মাধ্যমে সিদ্ধান্ত নেওয়া",
      },
      { en: "Teamwork & Management", bn: "দলগত কাজ ও ব্যবস্থাপনার দক্ষতা" },
      {
        en: "Problem Solving & Conflict Mgt.",
        bn: "সমস্যা সমাধান ও বিরোধ মেটানোর দক্ষতা",
      },
      {
        en: "Critical Thinking & Decision Making",
        bn: "যুক্তি দিয়ে চিন্তা ও সঠিক সিদ্ধান্ত নেওয়া",
      },
      { en: "Networking Skill", bn: "পেশাগত ও সামাজিক যোগাযোগ বাড়ানো" },
      { en: "Risk Management", bn: "ঝুঁকি নিয়ন্ত্রণ" },
      { en: "Negotiation Skill", bn: "আলোচনার মাধ্যমে সমঝোতার দক্ষতা" },
      { en: "Public Relations", bn: "মানুষের সাথে সম্পর্ক গড়ার দক্ষতা" },
      { en: "Community Building", bn: "দল বা কমিউনিটি গঠনের দক্ষতা" },
      { en: "Event Management", bn: "অনুষ্ঠান আয়োজন ও ব্যবস্থাপনা" },
    ],
  },
  {
    id: 4,
    categoryEn: "Creative & Aesthetic",
    categoryBn: "সৃজনশীল ও নান্দনিক দক্ষতা",
    count: 6,
    icon: Palette,
    theme: "from-pink-500 to-rose-500",
    activeBg: "bg-pink-500/10",
    activeBorder: "border-pink-500/50",
    textColor: "text-pink-400",
    skills: [
      { en: "Handwriting Skill", bn: "হাতের লেখা সুন্দর করার দক্ষতা" },
      { en: "Art and Calligraphy", bn: "আঁকা ও ক্যালিগ্রাফি" },
      { en: "Creative Writing", bn: "বিভিন্ন বিষয়ে লেখালেখি" },
      { en: "Crafting (Handmade Art)", bn: "হাতে তৈরি শিল্প ও ডিজাইন" },
      { en: "Interior Decoration Basics", bn: "ঘর ও অফিস সাজানো" },
      { en: "Cultural Skill", bn: "সাংস্কৃতিক দক্ষতা" },
    ],
  },
  {
    id: 5,
    categoryEn: "Technical Skills",
    categoryBn: "কারিগরি দক্ষতা",
    count: 7,
    icon: Wrench,
    theme: "from-amber-500 to-orange-500",
    activeBg: "bg-amber-500/10",
    activeBorder: "border-amber-500/50",
    textColor: "text-amber-400",
    skills: [
      {
        en: "Computer Hardware & Networking",
        bn: "কম্পিউটার মেরামত ও ইন্টারনেট সংযোগ",
      },
      { en: "Electrical Skills", bn: "বৈদ্যুতিক কাজ করার দক্ষতা" },
      { en: "Electronics Repair", bn: "ইলেকট্রনিক যন্ত্র ঠিক করার দক্ষতা" },
      { en: "Carpentry", bn: "কাঠের জিনিস তৈরি ও ঠিক করা" },
      { en: "Plumbing", bn: "পাইপলাইন ও পানির লাইন ঠিক করা" },
      { en: "Masonry Skill", bn: "রাজমিস্ত্রি (ইট, সিমেন্ট ও নির্মাণ কাজ)" },
      { en: "CCTV Installation", bn: "ক্যামেরা বসানো ও সংযোগ দেওয়া" },
    ],
  },
  {
    id: 6,
    categoryEn: "Safety & Life-Saving",
    categoryBn: "নিরাপত্তা ও জীবনরক্ষার দক্ষতা",
    count: 7,
    icon: LifeBuoy,
    theme: "from-red-500 to-rose-600",
    activeBg: "bg-red-500/10",
    activeBorder: "border-red-500/50",
    textColor: "text-red-400",
    skills: [
      { en: "Fire Safety", bn: "আগুন থেকে সুরক্ষার কৌশল" },
      {
        en: "Emergency Response",
        bn: "জরুরি পরিস্থিতিতে দ্রুত ব্যবস্থা নেওয়ার দক্ষতা",
      },
      { en: "Road Safety", bn: "রাস্তা পারাপার ও নিরাপদে চলার দক্ষতা" },
      { en: "Swimming", bn: "সাঁতার শেখা" },
      { en: "Travel Safety", bn: "ভ্রমণের সময় নিরাপদে চলার দক্ষতা" },
      { en: "Crowd Safety", bn: "ভিড়ে নিরাপদ থাকার দক্ষতা" },
      { en: "Martial Arts / Self-Defense", bn: "আত্মরক্ষার কৌশল" },
    ],
  },
  {
    id: 7,
    categoryEn: "Knowledge & Learning",
    categoryBn: "জ্ঞান অর্জন ও শেখার দক্ষতা",
    count: 10,
    icon: Lightbulb,
    theme: "from-yellow-400 to-amber-500",
    activeBg: "bg-yellow-500/10",
    activeBorder: "border-yellow-400/50",
    textColor: "text-yellow-400",
    skills: [
      { en: "General Knowledge", bn: "সাধারণ জ্ঞান" },
      { en: "General Science", bn: "সাধারণ বিজ্ঞান" },
      { en: "Innovation Skill", bn: "উদ্ভাবনী চিন্তা" },
      { en: "Research Skill", bn: "গবেষণা দক্ষতা" },
      { en: "Mental Arithmetic (Abacus)", bn: "মনে মনে অঙ্ক করা" },
      { en: "Speed Learning", bn: "দ্রুত শেখা" },
      { en: "Memory Skill", bn: "স্মৃতিশক্তি উন্নয়ন" },
      { en: "Note-Taking", bn: "কার্যকর নোট নেওয়া" },
      { en: "Exam Strategy", bn: "পরীক্ষার কৌশল" },
      { en: "Information Verification", bn: "তথ্য যাচাই" },
    ],
  },
  {
    id: 8,
    categoryEn: "Family & Social Skills",
    categoryBn: "পারিবারিক ও সামাজিক দক্ষতা",
    count: 7,
    icon: Home,
    theme: "from-fuchsia-500 to-pink-500",
    activeBg: "bg-fuchsia-500/10",
    activeBorder: "border-fuchsia-500/50",
    textColor: "text-fuchsia-400",
    skills: [
      { en: "Manner & Ethics", bn: "আদব ও নৈতিকতা" },
      { en: "Family Management", bn: "পরিবার পরিচালনার দক্ষতা" },
      { en: "Social Skills", bn: "সামাজিক আচরণ ও মেলামেশার দক্ষতা" },
      { en: "Social Responsibility", bn: "সমাজের প্রতি দায়িত্ব" },
      { en: "Interpersonal Skills", bn: "ব্যক্তিগত সম্পর্ক গড়ার দক্ষতা" },
      { en: "Empathy", bn: "সহ সহানুভূতি বা অন্যকে বোঝার ক্ষমতা" },
      { en: "Social Conflict Resolution", bn: "সামাজিক বিরোধ সমাধান" },
    ],
  },
  {
    id: 9,
    categoryEn: "Essential Life Skills",
    categoryBn: "জীবনে প্রয়োজনীয় দক্ষতা",
    count: 3,
    icon: Compass,
    theme: "from-sky-400 to-blue-500",
    activeBg: "bg-sky-500/10",
    activeBorder: "border-sky-500/50",
    textColor: "text-sky-400",
    skills: [
      { en: "Driving Skill", bn: "গাড়ি চালানোর দক্ষতা" },
      { en: "Cooking Skill", bn: "রান্না শেখা" },
      { en: "Parenting", bn: "সন্তান লালন-পালন" },
    ],
  },
];

export default function SoftSkills() {
  // First item is open by default
  const [openSection, setOpenSection] = useState(skillsData[0].id);

  const toggleSection = (id: any) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section
      id="soft-skills"
      className="relative py-24 bg-[#381b5f] overflow-hidden"
    >
      {/* Background Effects (Matching other pages) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4F0187] opacity-10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-900/20 blur-[120px] rounded-full"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div
        // ref={contentRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 m-5 text-[#E0B0FF] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(224,176,255,0.6)] ">
              <Image
                src={soft}
                alt="Business Icon"
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            SOFT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] via-white to-[#a55de9]">
              & HARD
            </span>{" "}
            SKILLS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            একজন পরিপূর্ণ ও সফল মানুষ হিসেবে নিজেকে গড়ে তোলার জন্য আমাদের এই
            বিশেষ কারিকুলামে রয়েছে{" "}
            <span className="text-white font-bold">
              ৯টি ক্যাটাগরিতে সর্বমোট ৭৫টি
            </span>{" "}
            জীবনমুখী ও প্রোফেশনাল দক্ষতা।
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] mx-auto rounded-full mt-8 shadow-lg shadow-purple-500/30"></div>
        </div>

        <div className="space-y-2">
          {skillsData.map((category) => {
            const isOpen = openSection === category.id;
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className={`relative overflow-hidden rounded-lg md:rounded-[1rem] border-2 backdrop-blur-md transition-all duration-500 ${isOpen ? `${category.activeBorder} bg-[#0A0214]/50 shadow-2xl` : 'border-white/5 bg-[#0A0214]/50  hover:bg-white/[0.05]'}
                `}
              >
                <button
                  onClick={() => toggleSection(category.id)}
                  className="w-full flex items-center justify-between p-2 md:p-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-2 md:gap-5">
                    <div
                      className={`
                      w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-lg  bg-gradient-to-br ${category.theme} text-white `}
                    >
                      <Icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3
                        className={`text-md md:text-xl font-bold tracking-wide transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-200"}`}
                      >
                        {category.categoryEn}
                      </h3>
                      <p
                        className={`text-xs md:text-sm mt-1 transition-colors duration-300 ${isOpen ? category.textColor : "text-gray-500"}`}
                      >
                        {category.categoryBn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div
                      className={`flex items-center justify-center px-1 md:px-3 md:py-1 rounded-full border transition-all duration-300 ${category.activeBorder} ${category.activeBg} ${category.textColor} `}
                    >
                      <span className="text-[10px] md:text-xs font-bold">
                        {category.count} Skills
                      </span>
                    </div>
                    <div
                      className={`
                      w-5 md:w-8 h-5 md:h-8 rounded-full flex items-center justify-center transition-all duration-500
                      ${isOpen ? `bg-gradient-to-br ${category.theme} text-white rotate-180` : "bg-white/10 text-gray-400"}
                    `}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </button>

                {/* Accordion Content (Expandable Grid) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-3 md:p-6 pt-0 relative">
                      {/* Deep Background Glow inside open content for extreme focus */}
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br ${category.theme} blur-[120px] opacity-10 pointer-events-none`}
                      ></div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 relative z-10">
                        {category.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="group/card relative flex items-start gap-4 p-3 md:p-5 rounded-lg md:rounded-2xl transition-all duration-300 bg-black/40 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                          >
                            {/* Hover Active Background Tint */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${category.theme} opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 pointer-events-none`}
                            ></div>

                            <div className="relative z-10 flex gap-3 w-full">
                              <CheckCircle2
                                size={22}
                                className={`${category.textColor} mt-0.5 shrink-0 opacity-90 drop-shadow-[0_0_8px_currentColor] transition-transform duration-300 group-hover/card:scale-110`}
                              />
                              <div>
                                <h4 className="text-gray-100 font-bold text-sm md:text-[15px] mb-1.5 leading-snug group-hover/card:text-white transition-colors duration-300">
                                  {skill.en}
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed group-hover/card:text-gray-300 transition-colors duration-300">
                                  {skill.bn}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
