/* eslint-disable @typescript-eslint/no-explicit-any */



import React from "react";
import { Target, CheckCircle2, PieChart, TrendingUp } from "lucide-react";
import img from "../../../../public/img/business.png";
import Image from "next/image";

const skillsLeft = [
  { id: 1, title: "Business mindset - বিজনেসের জন্য নিজের মনকে তৈরি করা।" },
  { id: 2, title: "Business Idea generate - বিজনেসের ধারণা তৈরি করা।" },
  { id: 3, title: "Entrepreneurship - উদ্যোক্তা হিসেবে নিজেকে তৈরি করা।" },
  { id: 4, title: "Personal branding - ব্যক্তিগত প্রচারণা।" },
  { id: 5, title: "Sales & Marketing - বিক্রয় এবং বিপণন দক্ষতা।" },
  { id: 6, title: "Digital marketing - ডিজিটাল মার্কেটিং।" },
  { id: 7, title: "Customer service - গ্রাহক সেবা।" },
];

const skillsRight = [
  { id: 8, title: "Business management - বিজনেস ব্যবস্থাপনা।" },
  { id: 9, title: "Office management - অফিস ব্যবস্থাপনা।" },
  { id: 10, title: "Project management - প্রকল্প ব্যবস্থাপনা।" },
  { id: 11, title: "Money management - অর্থ ব্যবস্থাপনা।" },
  { id: 12, title: "Accounting - হিসাব-নিকাশ।" },
  { id: 13, title: "Business communication - ব্যবসায়িক যোগাযোগ।" },
];

// Unique Card Component for Business Skills
const BusinessCard = ({ item }: any) => (
  <div className="group relative p-[1px] rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-[#FFD700]/40 hover:to-purple-600/40 transition-all duration-500">
    <div className="relative flex items-start gap-4 bg-[#120521] p-5 rounded-xl h-full overflow-hidden border border-white/5 hover:border-transparent transition-all">

      {/* Abstract Background Shape */}
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/5 to-purple-500/5 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="shrink-0 mt-1">
        <CheckCircle2 className="text-[#FFD700] w-5 h-5 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] group-hover:text-white transition-colors" />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h4 className="text-white font-bold text-lg tracking-wide group-hover:text-[#FFD700] transition-colors duration-300">
          {item.title.split(" - ")[0]}
        </h4>
        <p className="text-gray-400 text-sm mt-1 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
          {item.title.split(" - ")[1]}
        </p>
      </div>
    </div>
  </div>
);

const BusinessSkills = () => {
  return (
    <section className="relative py-10 min-h-screen bg-[#08020D] overflow-hidden ">

      {/* Background Elements (Gold & Purple Mix) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold Glow Top-Left */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFD700]/5 blur-[150px] rounded-full"></div>
        {/* Purple Glow Bottom-Right */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full"></div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-20 relative">

          {/* Unique Floating Diamond Icon */}


          {/* Floating Image */}
          <div className="flex justify-center">
            <div className="
              w-[150px] h-[150px] md:w-[200px] md:h-[200px] 
              rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 
              backdrop-blur-lg flex items-center justify-center shadow-2xl border border-purple-300/20 
            ">
              <Image src={img} alt="Business Icon" className="w-3/4 h-3/4 object-contain " />
            </div>
          </div>

          <div className="">
            {/* <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase block mb-3 opacity-80">
                            Corporate Mastery
                        </span> */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              BUSINESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#9E7C0C]">SKILLS</span>
            </h2>
            {/* Divider */}
            <div className="flex items-center justify-center gap-2 opacity-50">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
            </div>
          </div>
        </div>

        {/* Content Grid - Two Distinct Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Column: Strategy */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-6 pl-2 border-l-4 border-[#FFD700] py-1">
              <Target className="text-[#FFD700] w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Strategy & Growth</h3>
            </div>
            <div className="flex flex-col gap-4">
              {skillsLeft.map((skill) => (
                <BusinessCard key={skill.id} item={skill} />
              ))}
            </div>
          </div>

          {/* Right Column: Management */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-6 pl-2 border-l-4 border-purple-500 py-1">
              <PieChart className="text-purple-400 w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Management & Finance</h3>
            </div>
            <div className="flex flex-col gap-4">
              {skillsRight.map((skill) => (
                <BusinessCard key={skill.id} item={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-white/5 via-[#FFD700]/30 to-white/5">
            <div className="bg-[#0F0518] px-8 py-3 rounded-full flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-[#FFD700]" />
              <p className="text-gray-400 text-sm font-medium">
                [ বিঃদ্রঃ- উল্লেখিত দক্ষতাগুলো শ্রেণি ও বয়স অনুযায়ী সিলেবাসভুক্ত হবে ]
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessSkills;