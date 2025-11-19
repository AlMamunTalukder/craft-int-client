import Container from "@/app/shared/Container/Container";
import React from "react";
import { FaCheck } from "react-icons/fa";

const specialtyData = [
  "আন্তর্জাতিক মানের হাফেজ ও ক্বারীদের মাধ্যমে বিশুদ্ধ কুরআন তিলাওয়াতের প্রশিক্ষণ।",
  "বিশুদ্ধ উচ্চারণে প্রমিত বাংলায় কথা বলার দক্ষতা অর্জন।",
  "আরবদের মতো করে আরবিতে অনর্গল কথা বলার দক্ষতা অর্জন।",
  "ব্রিটিশ ও আমেরিকান একসেন্টে ইংরেজিতে কথা বলার দক্ষতা অর্জন।",
  "প্রযুক্তিতে দক্ষ করে গড়ে তুলতে রয়েছে উন্নতমানের কম্পিউটার ল্যাব।",
  "Soft & Hard Skills এর উপর নিয়মিত প্রশিক্ষণ।",
  "বই, প্রবন্ধ, গল্প, কবিতা, ব্লগ ও স্ক্রিপ্ট রাইটিং বিষয়ে প্রশিক্ষণ।",
  "শিল্প-সাহিত্য ও সাংস্কৃতিক বিষয়ে ট্রেইনিং।",
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
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#F7F4FF] via-white to-[#F3E7FF] overflow-hidden">
       
      {/* Floating gradient lights */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#4F0187]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8A2BE2]/25 rounded-full blur-[150px]"></div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F0187] to-[#8A2BE2]">
            আমাদের বিশেষত্ব
          </h2>
          <div className="mt-3 w-36 h-1 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full animate-pulse"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {specialtyData.map((item, index) => (
            <div
              key={index}
              className="
                group p-2 md:p-6 rounded-2xl relative 
                bg-white/30 backdrop-blur-xl 
                border border-white/40 
                shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                hover:shadow-[0_12px_48px_rgba(79,1,135,0.3)]
                transition-all duration-500
                hover:-translate-y-1
              "
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4F0187]/0 to-[#8A2BE2]/0 group-hover:from-[#4F0187]/20 group-hover:to-[#8A2BE2]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-gradient-to-br from-[#4F0187]/15 to-[#8A2BE2]/15
                    flex items-center justify-center
                    shadow-[0_4px_20px_rgba(79,1,135,0.15)]
                    transition-all duration-500
                    group-hover:from-[#4F0187] group-hover:to-[#8A2BE2]
                  "
                >
                  <FaCheck className="text-[#4F0187] text-lg group-hover:text-white transition-all duration-500" />
                </div>

                <p className="text-gray-800 text-sm md:text-lg md:font-medium md:leading-relaxed group-hover:text-gray-900 transition-all duration-300">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurSpecialty;
