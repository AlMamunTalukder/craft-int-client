import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsQuote } from "react-icons/bs";


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

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4FF] via-white to-[#F3E7FF] relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#4F0187]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8A2BE2]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Container equivalent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-[#4F0187]/10 text-[#4F0187] font-bold text-sm mb-4 tracking-wider uppercase">
            আমাদের পরিচয়
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F0187] to-[#8A2BE2]">বিশেষত্ব</span> ও লক্ষ্য
          </h1>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            আমরা এমন একটি প্রতিষ্ঠান গড়ার লক্ষ্যে কাজ করছি যেখানে আধুনিক শিক্ষা এবং নৈতিকতার সমন্বয় ঘটে।
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialtyData.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-[0_20px_50px_rgba(79,1,135,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F0187] to-[#8A2BE2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex gap-4 items-start">
                {/* Icon Box */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <BiCheckCircle className="text-[#4F0187] w-6 h-6 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Text */}
                <p className="text-gray-700 text-[16px] font-medium leading-relaxed group-hover:text-white transition-colors duration-500">
                  {item}
                </p>
              </div>

              {/* Decorative corner shape */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-50 rounded-full group-hover:bg-white/10 transition-colors duration-500 blur-md" />
            </div>
          ))}
        </div>

        {/* Bottom Quote Section (Optional Aesthetic Addition) */}
        <div className="mt-24 relative p-8 md:p-12 rounded-3xl bg-[#4F0187] text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white opacity-5 pattern-dots"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <BsQuote className="text-white/30 w-12 h-12 mb-6 fill-current" />
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                আমরা শুধুমাত্র শিক্ষার্থী তৈরি করি না, আমরা মানবিক মূল্যবোধ সম্পন্ন আলোকিত মানুষ গড়ি।
                </h3>
                <button className="mt-6 px-8 py-3 bg-white text-[#4F0187] font-bold rounded-full shadow-lg hover:bg-purple-50 transition-transform hover:scale-105 active:scale-95">
                    যোগাযোগ করুন
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;