import React from "react";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const specialtyData = [
  "আন্তর্জাতিক মানের হাফেজ ও ক্বারীদের মাধ্যমে বিশুদ্ধ কুরআন তিলাওয়াতের প্রশিক্ষণ।",
  "বিশুদ্ধ উচ্চারণে প্রমিত বাংলায় কথা বলার দক্ষতা অর্জন।",
  "আরবদের মতো করে আরবিতে অনর্গল কথা বলার দক্ষতা অর্জন।",
  "ব্রিটিশ ও আমেরিকান একসেন্টে ইংরেজিতে কথা বলার দক্ষতা অর্জন।",
  "প্রযুক্তিতে দক্ষ করে গড়ে তুলতে রয়েছে উন্নতমানের কম্পিউটার ল্যাব।",
  "Soft & Hard Skills এর উপর নিয়মিত প্রশিক্ষণ।",
  "বই, প্রবন্ধ, গল্প, কবিতা, ব্লগ ও স্ক্রিপ্ট রাইটিং বিষয়ে প্রশিক্ষণ।",
  "শিল্প-সাহিত্য ও সাংস্কৃতিক বিষয়ে ট্রেইনিং।",
  "গাইড টিচারের মাধ্যমে শিক্ষার্থীদের পাঠোন্নয়ন ও আচরণ পর্যবেক্ষণ।",
  "ক্লাসের পড়া ক্লাসেই আদায় করা হয়।",
  "দুর্বল ছাত্রদের জন্য বিশেষ কেয়ার ও কাউন্সেলিং।",
  "বাংলা, আরবি ও ইংরেজি বিষয়ে সুন্দর হস্তাক্ষর প্রশিক্ষণ।",
  "প্রযুক্তি সমৃদ্ধ গ্রন্থাগার।",
  "শরীরচর্চা, ইনডোর গেম ও খেলাধুলা।",
  "নিয়মিত মেডিক্যাল চেক-আপ।",
  "সার্বক্ষণিক সিকিউরিটি গার্ড ও সিসি ক্যামেরা।",
  "দৈনন্দিন মাসনূন আমলের প্রতি বিশেষ গুরুত্বারোপ।",
];

const OurSpecialty = () => {
  // Only take the first 6 items for the home page display
  const displayItems = specialtyData.slice(0, 6);

  return (
    <section className="relative py-20 bg-[#0B001A] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#4F0187]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8A2BE2]/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-4">
             <Sparkles size={14} className="text-purple-300" />
             <span className="text-xs font-bold tracking-[0.2em] text-purple-200 uppercase">
               Features
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#A855F7]">বিশেষত্ব</span>
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

                <p className="text-gray-300 text-sm md:text-[16px] font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
            {/* Replaced Link with a tag to fix the error */}
            <a href="/about-us">
                <button className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full hover:shadow-lg hover:shadow-purple-500/40 focus:outline-none ring-offset-2 focus:ring-2 ring-purple-400">
                    <span>আরও দেখুন</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/0 transition-colors"></div>
                </button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default OurSpecialty;