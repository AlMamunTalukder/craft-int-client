"use client";
import Container from "@/app/shared/Container/Container";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import img from "../../../../public/img/skill.png";

interface Skill {
  id: number;
  title: string;
}

const skillsLeft: Skill[] = [
  { id: 1, title: "Communication Skill - যোগাযোগের দক্ষতা।" },
  { id: 2, title: "Public Speaking & Presentation Skill - জনসম্মুখে কথা বলা ও উপস্থাপনাশৈলীর দক্ষতা।" },
  { id: 3, title: "Debating Skill - বিতর্কের দক্ষতা।" },
  { id: 4, title: "Personal Development & Productivity - ব্যক্তিগত উন্নয়ন ও নিজেকে গঠন করার দক্ষতা।" },
  { id: 5, title: "Time Management & Multitasking - সময় ব্যবস্থাপনা ও একসাথে একাধিক কাজ করার দক্ষতা।" },
  { id: 6, title: "Leadership Skill - নেতৃত্বের দক্ষতা।" },
  { id: 7, title: "Teamwork & Management - দলগত ‍ও সাংগঠনিক কাজ এবং ব্যবস্থাপনার দক্ষতা।" },
  { id: 8, title: "Problem Solving & Conflict Management - সমস্যা সমাধান ও দ্বন্দ্ব নিরসনের দক্ষতা।" },
  { id: 9, title: "Networking Skill - বিভিন্ন মানুষের সাথে সম্পর্ক গড়ে তোলার দক্ষতা।" },
  { id: 10, title: "Motivational Skill - নিজেকে এবং অন্যকে প্রেরণা যোগানোর দক্ষতা।" },
  { id: 11, title: "Mind Training & Stress Management – মনঃশক্তি বৃদ্ধি ও মানসিক চাপ নিয়ন্ত্রণের দক্ষতা।" },
  { id: 12, title: "Emotional Intelligence – বুদ্ধিমত্তার সাথে আবেগ নিয়ন্ত্রণের দক্ষতা।" },
  { id: 13, title: "Critical Thinking & Decision Making – কঠিন মুহূর্তে সঠিক সিদ্ধান্ত গ্রহণের দক্ষতা।" },
  { id: 14, title: "Active Listening - মনোযোগ দিয়ে শোনা ও সূক্ষ্ম বিষয়ের প্রতি সচেতনতা।" },
  { id: 15, title: "Manner & Ethics Skills - আচরণ ও নৈতিকতার দক্ষতা।" }
];

const skillsRight: Skill[] = [
  { id: 16, title: "Social Skills - সামাজিক আচরণ ও রীতিনীতির দক্ষতা।" },
  { id: 17, title: "Innovation & Research Skills - সৃজনশীল উদ্ভাবন ও গবেষণার দক্ষতা।" },
  { id: 18, title: "Technical Skills – কারিগরি দক্ষতা।" },
  { id: 19, title: "Martial Arts / Self-Defense - মার্শাল আর্ট বা আত্মরক্ষা কৌশলের দক্ষতা।" },
  { id: 20, title: "Mental Arithmetic (Abacus) - অ্যাবাকাসের মাধ্যমে মনে মনে অঙ্ক করার কৌশল।" },
  { id: 21, title: "General Knowledge - সাধারণ জ্ঞানের দক্ষতা।" },
  { id: 22, title: "General Science Knowledge - সাধারণ বিজ্ঞানের দক্ষতা।" },
  { id: 23, title: "Primary Health Care - প্রাথমিক চিকিৎসা সেবার দক্ষতা।" },
  { id: 24, title: "Handwriting Skill – হাতের লেখা সুন্দর করার দক্ষতা।" },
  { id: 25, title: "Art and Calligraphy - চিত্রাঙ্কন ও ক্যালিগ্রাফির দক্ষতা।" },
  { id: 26, title: "Cultural Skill - বিনোদন ও সাংস্কৃতিক দক্ষতা।" },
  { id: 27, title: "Voice Over Skill – বিভিন্ন কন্টেন্টে কণ্ঠ দেয়ার দক্ষতা।" },
  { id: 28, title: "Swimming Skill - সাঁতারের দক্ষতা।" },
  { id: 29, title: "Driving Skill – যান চালানোর দক্ষতা।" },
  { id: 30, title: "Cooking Skill - রান্নার দক্ষতা।" },
];

const SkillCard = ({ item, index }: { item: Skill; index: number }) => (
  <div className="group relative bg-white backdrop-blur-sm rounded-xl p-2 md:p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border-l-4 border-transparent hover:border-[#FA00FF] overflow-hidden transform hover:-translate-y-1">
    
    {/* Decorative Background Number */}
    <span className="absolute -right-0 -bottom-2 text-6xl font-black text-gray-100 group-hover:text-purple-50 transition-colors duration-300 select-none z-0">
      {index < 9 ? `0${index + 1}` : index + 1}
    </span>

    <div className="relative z-10 flex items-start gap-4">
      {/* Icon Badge */}
      <div className="shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7F0FF2] to-[#3705AB] flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
          <FaCheck className="text-xs" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h4 className="text-gray-800 font-bold text-lg group-hover:text-[#6A00D6] transition-colors duration-300">
           {item.title.split(' - ')[0]}
        </h4>
        <p className="text-gray-500 text-sm mt-1 font-medium group-hover:text-gray-700">
           {item.title.split(' - ')[1] ? `- ${item.title.split(' - ')[1]}` : ''}
        </p>
      </div>
    </div>
  </div>
);

const SoftHardSkill = () => {
  return (
    // 1. Outer Background: Light Gradient (Like the reference image wall)
    <section className="relative py-24 min-h-screen flex items-center justify-center ">
      
      <Container>
        <div className="relative max-w-[1400px] mx-auto my-10">
            
            {/* 2. Floating Icon: Positioned Absolute Top Center */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-30">
                <div className="w-[150px] h-[150px]  flex items-center justify-center  p-4">
                    <Image 
                        src={img} 
                        alt="Skills Icon" 
                        className="w-full h-full "
                    />
                </div>
            </div>

            {/* 3. Inner Card Container: Dark Gradient with Large Rounded Corners */}
            <div className="relative bg-[linear-gradient(172deg,_#7F0FF2_0%,_#3705AB_100%)] rounded-[70px] md:rounded-[10rem] shadow-2xl p-3 md:p-12 py-12 md:py-20">
                
                {/* Header Text */}
                <div className="text-center mb-5 md:mb-12 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-wide drop-shadow-md">
                        Soft Skills
                    </h2>
                    
                    <div className="h-1.5 w-24 bg-white/80 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Grid Layout Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10 mb-10">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {skillsLeft.map((skill, idx) => (
                        <SkillCard key={skill.id} item={skill} index={idx} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        {skillsRight.map((skill, idx) => (
                        <SkillCard key={skill.id} item={skill} index={idx + 15} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </Container>
    </section>
  );
};

export default SoftHardSkill;