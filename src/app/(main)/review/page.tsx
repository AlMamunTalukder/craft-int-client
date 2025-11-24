"use client"

import React from "react";
import { Quote, Star, Sparkles, User, Zap } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "আব্দুল্লাহ আল মামুন",
    role: "হিফজ শিক্ষার্থী",
    text: "আলহামদুলিল্লাহ, এখানকার পরিবেশ এবং শিক্ষকদের আন্তরিকতা আমাকে মুগ্ধ করেছে। আধুনিক শিক্ষার পাশাপাশি দ্বীনি শিক্ষার এমন সুন্দর সমন্বয় সত্যিই বিরল।",
    rating: 5,
    color: "text-cyan-400",
    border: "group-hover:border-cyan-400/50",
    shadow: "group-hover:shadow-cyan-500/30",
    gradient: "from-cyan-500/20 to-blue-900/20"
  },
  {
    id: 2,
    name: "ফাতিমা আক্তার",
    role: "অভিভাবক",
    text: "আমার সন্তানের মানসিক এবং নৈতিক উন্নতি দেখে আমি অভিভূত। ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট সত্যিই মানুষ গড়ার কারিগর।",
    rating: 5,
    color: "text-fuchsia-400",
    border: "group-hover:border-fuchsia-400/50",
    shadow: "group-hover:shadow-fuchsia-500/30",
    gradient: "from-fuchsia-500/20 to-purple-900/20"
  },
  {
    id: 3,
    name: "আহমেদ রিদওয়ান",
    role: "প্রাক্তন শিক্ষার্থী",
    text: "এখানকার আইটি এবং সফট স্কিল ট্রেনিং আমার ক্যারিয়ারের মোড় ঘুরিয়ে দিয়েছে। পড়াশোনার মান আন্তর্জাতিক পর্যায়ের।",
    rating: 5,
    color: "text-amber-400",
    border: "group-hover:border-amber-400/50",
    shadow: "group-hover:shadow-amber-500/30",
    gradient: "from-amber-500/20 to-orange-900/20"
  }
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 bg-[#080214] overflow-hidden  group/section">
      
      {/* --- COSMIC BACKGROUND WITH SHOOTING STARS --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] via-[#0B001A] to-[#050011]"></div>

          {/* Nebula Clouds */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-[blob_20s_infinite]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-[blob_25s_infinite_reverse]"></div>

          {/* Starfield Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>

          {/* Shooting Stars Animation */}
          <div className="absolute top-0 left-[20%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star"></div>
          <div className="absolute top-10 right-[30%] w-[2px] h-[80px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 animate-shooting-star delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative">
           {/* Floating Sparkles */}
           <Sparkles className="absolute top-0 left-1/3 text-purple-400 w-6 h-6 animate-spin-slow opacity-60" />
           <Sparkles className="absolute bottom-0 right-1/3 text-cyan-400 w-4 h-4 animate-pulse opacity-60" />

            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2">
                    <Zap size={12} className="text-yellow-400 fill-yellow-400" /> Success Stories
                </span>
            </div>
            <h2 className="mt-4 text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                WHAT THEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F300E7] to-[#4F0187]">SAY</span>
            </h2>
            <div className="w-32 h-1.5 mx-auto bg-gradient-to-r from-[#4F0187] via-[#F300E7] to-[#4F0187] rounded-full mt-8 shadow-[0_0_20px_rgba(243,0,231,0.6)]"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`
                group relative 
                bg-[#150a25]/60 backdrop-blur-xl 
                border border-white/10 rounded-[30px] 
                p-8 pt-16
                flex flex-col items-center text-center 
                transition-all duration-500 ease-out
                hover:-translate-y-4 hover:bg-[#1e0e36]/80
                hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]
                ${item.border}
                ${item.shadow}
                
                /* Focus Effect Logic */
                group-hover/section:opacity-60 group-hover/section:scale-95 group-hover/section:blur-[1px]
                hover:!opacity-100 hover:!scale-105 hover:!blur-none hover:z-10
              `}
            >
              {/* Background Gradient Glow */}
              <div className={`absolute inset-0 rounded-[30px] bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Giant Quote Watermark */}
              <div className="absolute top-4 right-6 text-white/5 group-hover:text-white/10 transition-colors duration-500 transform scale-150 group-hover:scale-125 origin-top-right">
                <Quote size={80} fill="currentColor" />
              </div>

              {/* Floating Avatar */}
              <div className="relative -mt-24 mb-6">
                <div className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-full 
                    bg-[#0B001A] border-2 border-white/10 
                    flex items-center justify-center 
                    shadow-[0_0_30px_rgba(0,0,0,0.5)]
                    group-hover:scale-110 transition-transform duration-500
                    relative z-10
                    ${item.border}
                `}>
                    <User className={`w-10 h-10 ${item.color}`} />
                </div>
                
                {/* Rotating Neon Ring around Avatar */}
                <div className={`absolute inset-0 -m-2 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite] group-hover:border-white/40`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm md:text-base italic font-light leading-relaxed mb-6 opacity-90 group-hover:text-white transition-colors">
                    {item.text}
                  </p>

                  <div className={`w-12 h-1 mx-auto rounded-full bg-white/10 mb-4 group-hover:w-24 transition-all duration-500 ${item.color.replace('text-', 'bg-')}`}></div>

                  <h4 className={`text-lg font-bold ${item.color} drop-shadow-md uppercase tracking-wide`}>
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/50 font-medium uppercase tracking-widest mt-1">
                    {item.role}
                  </p>
              </div>
              
              {/* Bottom Neon Line */}
              <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.color}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CSS Animations --- */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes shooting-star {
          0% { transform: translate(0, 0) rotate(-45deg); opacity: 1; }
          100% { transform: translate(-200px, 200px) rotate(-45deg); opacity: 0; }
        }
        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;