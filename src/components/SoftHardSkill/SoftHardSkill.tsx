/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, Lightbulb, Zap, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import soft from "../../../public/img/Asset4.png";

const skillsLeft = [
  { id: 1, title: "Communication Skill - যোগাযোগের দক্ষতা।" },
  {
    id: 2,
    title:
      "Public Speaking & Presentation Skill - জনসম্মুখে কথা বলা ও উপস্থাপনাশৈলীর দক্ষতা।",
  },
  { id: 3, title: "Debating Skill - বিতর্কের দক্ষতা।" },
  {
    id: 4,
    title:
      "Time Management & Multitasking - সময় ব্যবস্থাপনা ও একসাথে একাধিক কাজ করার দক্ষতা।",
  },
  { id: 5, title: "Leadership Skill - নেতৃত্বের দক্ষতা।" },
  {
    id: 6,
    title:
      "Personal Development & Productivity - ব্যক্তিগত উন্নয়ন ও নিজেকে গঠন করার দক্ষতা।",
  },
  {
    id: 7,
    title: "Networking Skill - বিভিন্ন মানুষের সাথে সম্পর্ক গড়ে তোলার দক্ষতা।",
  },
  {
    id: 8,
    title:
      "Mind Training & Stress Management – মনঃশক্তি বৃদ্ধি ও মানসিক চাপ নিয়ন্ত্রণের দক্ষতা।",
  },
  {
    id: 9,
    title:
      "Emotional Intelligence – বুদ্ধিমত্তার সাথে আবেগ নিয়ন্ত্রণের দক্ষতা।",
  },

  { id: 10, title: "Manner & Ethics Skills - আচরণ ও নৈতিকতার দক্ষতা।" },

  {
    id: 11,
    title:
      "Teamwork & Management - দলগত ‍ও সাংগঠনিক কাজ এবং ব্যবস্থাপনার দক্ষতা।",
  },
  {
    id: 12,
    title:
      "Problem Solving & Conflict Management - সমস্যা সমাধান ও দ্বন্দ্ব নিরসনের দক্ষতা।",
  },

  {
    id: 13,
    title: "Motivational Skill - নিজেকে এবং অন্যকে প্রেরণা যোগানোর দক্ষতা।",
  },
  {
    id: 14,
    title:
      "Critical Thinking & Decision Making – কঠিন মুহূর্তে সঠিক সিদ্ধান্ত গ্রহণের দক্ষতা।",
  },
  {
    id: 15,
    title:
      "Active Listening - মনোযোগ দিয়ে শোনা ও সূক্ষ্ম বিষয়ের প্রতি সচেতনতা।",
  },
];

const skillsRight = [
  { id: 16, title: "Primary Health Care - প্রাথমিক চিকিৎসা সেবার দক্ষতা। " },
  {
    id: 17,
    title: "Innovation & Research Skills - সৃজনশীল উদ্ভাবন ও গবেষণার দক্ষতা।",
  },
  { id: 18, title: "Technical Skills – কারিগরি দক্ষতা।" },
  {
    id: 19,
    title:
      "Martial Arts / Self-Defense - মার্শাল আর্ট বা আত্মরক্ষা কৌশলের দক্ষতা।",
  },
  {
    id: 20,
    title:
      "Mental Arithmetic (Abacus) - অ্যাবাকাসের মাধ্যমে মনে মনে অঙ্ক করার কৌশল।",
  },
  { id: 21, title: "General Knowledge - সাধারণ জ্ঞানের দক্ষতা।" },
  { id: 22, title: "General Science Knowledge - সাধারণ বিজ্ঞানের দক্ষতা।" },
  { id: 23, title: "Social Skills - সামাজিক আচরণ ও রীতিনীতির দক্ষতা।" },
  { id: 24, title: "Handwriting Skill – হাতের লেখা সুন্দর করার দক্ষতা।" },
  { id: 25, title: "Art and Calligraphy - চিত্রাঙ্কন ও ক্যালিগ্রাফির দক্ষতা।" },
  { id: 26, title: "Cultural Skill - বিনোদন ও সাংস্কৃতিক দক্ষতা।" },
  { id: 27, title: "Voice Over Skill – বিভিন্ন কন্টেন্টে কণ্ঠ দেয়ার দক্ষতা।" },
  { id: 28, title: "Swimming Skill - সাঁতারের দক্ষতা।" },
  { id: 29, title: "Driving Skill – যান চালানোর দক্ষতা।" },
  { id: 30, title: "Cooking Skill - রান্নার দক্ষতা।" },
];

const SkillRow = ({ item, index }: any) => (
  <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#1A0B2E]/40 border border-white/5 hover:bg-[#2D1B4E]/60 hover:border-purple-500/30 transition-all duration-300 hover:-translate-x-[-5px] overflow-hidden">
    {/* Hover Gradient Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    {/* Serial Number Badge */}
    <div className="relative shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#ffffff] border border-purple-500 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
      <span className="text-gray-500 font-mono font-bold text-sm md:text-base group-hover:text-purple-400">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
    </div>

    {/* Content */}
    <div className="flex-grow relative z-10">
      <h4 className="text-gray-200 font-bold text-sm md:text-base group-hover:text-white transition-colors">
        {item.title.split(" - ")[0]}
      </h4>
      {item.title.split(" - ")[1] && (
        <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors font-medium">
          {item.title.split(" - ")[1]}
        </p>
      )}
    </div>

    {/* Check Icon (Hidden on mobile, visible on hover/desktop) */}
    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
        <Check size={12} className="text-green-400" strokeWidth={3} />
      </div>
    </div>
  </div>
);

const SoftSkills = () => {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [savedScroll, setSavedScroll] = useState(0);

  useEffect(() => {
    if (showAll) {
      // After expanding, return to previous scroll position
      setTimeout(() => {
        window.scrollTo({
          top: savedScroll,
          behavior: "instant", // or "smooth"
        });
      }, 50);
    }
  }, [showAll, savedScroll]);

  // Show only 5 items from each column initially, show all when expanded
  const leftSkillsToShow = showAll ? skillsLeft : skillsLeft.slice(0, 5);
  const rightSkillsToShow = showAll ? skillsRight : skillsRight.slice(0, 5);

  // Auto scroll to new content when expanded on mobile
  useEffect(() => {
    if (showAll && window.innerWidth < 1024 && contentRef.current) {
      setTimeout(() => {
        // Find the position of item 6 (first new item)
        const newContentStart =
          contentRef.current?.querySelector('[data-index="5"]');
        if (newContentStart) {
          newContentStart.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [showAll]);

  const toggleShowAll = () => {
    // Save current scroll position BEFORE expanding
    setSavedScroll(window.scrollY);
    setShowAll(!showAll);
  };

  return (
    <section id="soft-skills" className="relative py-24 bg-[#2c154c] overflow-hidden">
      {/* Background Effects (Matching other pages) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4F0187] opacity-10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-900/20 blur-[120px] rounded-full"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div
        ref={contentRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
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
            আমাদের শিক্ষার্থীদের জন্য প্রয়োজনীয় জীবনমুখী দক্ষতা ও নৈতিক শিক্ষার
            এক অনন্য সমন্বয়, যা তাদের ভবিষ্যৎ জীবনের প্রতিটি পদক্ষেপে এগিয়ে
            রাখবে।
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] mx-auto rounded-full mt-8 shadow-lg shadow-purple-500/30"></div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column */}
          <div className="relative">
            {/* Column Decorator */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/50 to-transparent rounded-full hidden lg:block"></div>

            <div className="flex items-center gap-3 mb-6 lg:ml-4">
              <Zap className="text-yellow-400 fill-yellow-400" size={20} />
              <h3 className="text-xl font-bold text-white tracking-wide">
                Communication & Leadership
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {leftSkillsToShow.map((skill, idx) => (
                <SkillRow
                  key={skill.id}
                  item={skill}
                  index={idx}
                  data-index={idx}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Column Decorator */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-full hidden lg:block"></div>

            <div className="flex items-center gap-3 mb-6 lg:ml-4">
              <Lightbulb className="text-cyan-400 fill-cyan-400" size={20} />
              <h3 className="text-xl font-bold text-white tracking-wide">
                Creativity & Technical
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {rightSkillsToShow.map((skill, idx) => (
                <SkillRow
                  key={skill.id}
                  item={skill}
                  index={idx + leftSkillsToShow.length}
                  data-index={idx + leftSkillsToShow.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Show More/Less Button */}
        <div className="mt-12 text-center">
          <button
            onClick={toggleShowAll}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full hover:shadow-lg hover:shadow-purple-500/40 focus:outline-none ring-offset-2 focus:ring-2 ring-purple-400"
          >
            <span>{showAll ? "কম দেখুন" : "আরও দেখুন"}</span>
            {showAll ? (
              <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
            )}

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/0 transition-colors"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
