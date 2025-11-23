"use client"
import React, { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import img from "../../../public/img/business.png";

const businessSkillsData = [
  "Business mindset - বিজনেসের জন্য নিজের মনকে তৈরি করা।",
  "Business Idea generate - বিজনেসের ধারণা তৈরি করা।",
  "Entrepreneurship - উদ্যোক্তা হিসেবে নিজেকে তৈরি করা।",
  "Personal branding - ব্যক্তিগত প্রচারণা।",
  "Sales & Marketing - বিক্রয় এবং বিপণন দক্ষতা।",
  "Digital marketing - ডিজিটাল মার্কেটিং।",
  "Customer service - গ্রাহক সেবা।",
  "Business management - বিজনেস ব্যবস্থাপনা।",
  "Office management - অফিস ব্যবস্থাপনা।",
  "Project management - প্রকল্প ব্যবস্থাপনা।",
  "Money management - অর্থ ব্যবস্থাপনা।",
  "Accounting - হিসাব-নিকাশ।",
  "Business communication - ব্যবসায়িক যোগাযোগ।",
];

const BusinessSkills = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 6 items initially, show all when expanded
  const displayItems = showAll ? businessSkillsData : businessSkillsData.slice(0, 6);

  return (
    <section className="relative py-20 bg-[#361664] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#4F0187]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8A2BE2]/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          
          {/* Floating Image */}
          <div className="flex justify-center mb-6">
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <Image 
                src={img} 
                alt="Business Icon" 
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            BUSINESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#A855F7]">SKILLS</span>
          </h2>
          <div className="mt-4 w-24 h-1.5 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="
                group relative p-6 rounded-2xl 
                bg-[#1A0B2E]/40 backdrop-blur-xl 
                border border-white/10 
                hover:border-purple-500/30
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20
              "
            >
              {/* Inner Gradient on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4F0187]/0 to-[#8A2BE2]/0 group-hover:from-[#4F0187]/10 group-hover:to-[#8A2BE2]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div
                  className="
                    flex-shrink-0 w-12 h-12 rounded-xl
                    bg-gradient-to-br from-[#4F0187]/20 to-[#8A2BE2]/20
                    border border-purple-500/20
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-500
                  "
                >
                  <CheckCircle className="text-[#D8B4FE] w-6 h-6 group-hover:text-white transition-colors duration-300" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#D8B4FE] transition-colors">
                    {item.split(" - ")[0]}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.split(" - ")[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


          {/* Show More/Less Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full hover:shadow-lg hover:shadow-purple-500/40 focus:outline-none ring-offset-2 focus:ring-2 ring-purple-400"
          >
            <span>{showAll ? 'কম দেখুন' : 'আরও দেখুন'}</span>
            {showAll ? (
              <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
            )}
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/0 transition-colors"></div>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-white/5 via-[#D8B4FE]/30 to-white/5 mb-8">
            <div className="bg-[#0F0518] px-8 py-3 rounded-full">
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