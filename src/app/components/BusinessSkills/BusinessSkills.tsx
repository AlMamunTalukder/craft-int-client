"use client";
import Container from "@/app/shared/Container/Container";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import img from "../../../../public/img/business.png";

interface Skill {
  id: number;
  title: string;
}

const skillsLeft: Skill[] = [
  { id: 1, title: "Business mindset - বিজনেসের জন্য নিজের মনকে তৈরি করা।" },
  { id: 2, title: "Business Idea generate - বিজনেসের ধারণা তৈরি করা।" },
  { id: 3, title: "Entrepreneurship - উদ্যোক্তা হিসেবে নিজেকে তৈরি করা।" },
  { id: 4, title: "Personal branding - ব্যক্তিগত প্রচারণা।" },
  { id: 5, title: "Sales & Marketing - বিক্রয় এবং বিপণন দক্ষতা।" },
  { id: 6, title: "Digital marketing - ডিজিটাল মার্কেটিং।" },
  { id: 7, title: "Customer service - গ্রাহক সেবা।" },
];

const skillsRight: Skill[] = [
  { id: 8, title: "Business management – বিজনেস ব্যবস্থাপনা।" },
  { id: 9, title: "Office management - অফিস ব্যবস্থাপনা।" },
  { id: 10, title: "Project management - প্রকল্প ব্যবস্থাপনা।" },
  { id: 11, title: "Money management - অর্থ ব্যবস্থাপনা।" },
  { id: 12, title: "Accounting - হিসাব-নিকাশ।" },
  { id: 13, title: "Business communication - ব্যবসায়িক যোগাযোগ।" },
];

const SkillCard = ({ item, index }: { item: Skill; index: number }) => (
  <div className="group relative bg-white rounded-2xl p-2 md:p-5 shadow-lg transition-all duration-300 border border-purple-400/30 hover:border-white overflow-hidden transform hover:-translate-y-1">
    
    {/* Watermark Number */}
    <span className="absolute -right-2 -bottom-4 text-6xl font-black text-black/10 group-hover:text-white/10 transition-colors duration-300 select-none z-0">
      {index < 9 ? `0${index + 1}` : index + 1}
    </span>

    <div className="relative z-10 flex items-start gap-4">
      {/* Icon Badge */}
      <div className="shrink-0 mt-1">
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md text-[#4F0187]">
          <FaCheck className="text-[10px]" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h4 className="font-bold text-lg group-hover:text-pink-200 transition-colors duration-300">
           {item.title.split(' - ')[0]}
        </h4>
        <p className="text-gray-400 text-sm mt-1 font-medium group-hover:text-white">
           {item.title.split(' - ')[1] ? `- ${item.title.split(' - ')[1]}` : ''}
        </p>
      </div>
    </div>
  </div>
);

const BusinessSkills = () => {
  return (
    // 1. Outer Background is WHITE
    <section className="bg-white py-24 overflow-visible">
      <Container>
        <div className="relative max-w-6xl mx-auto mt-12">

            {/* 2. Floating Icon (Top Center) */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                <div className="w-[150px] h-[150px]  rounded-full flex items-center justify-center p-5">
                    <Image 
                        src={img} 
                        alt="Business Icon" 
                        className="w-full h-full "
                    />
                </div>
            </div>

            {/* 3. Main Colored Content Box */}
            <div className="relative bg-[linear-gradient(180deg,_#7F0FF2_0%,_#3705AB_100%)] rounded-[70px] md:rounded-[10rem] shadow-2xl px-4 md:px-12 pt-24 pb-12">
                
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-wide drop-shadow-md">
                        Business Skills
                    </h2>
                    
                    <div className="h-1.5 w-20 bg-white/80 mx-auto rounded-full"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {skillsLeft.map((skill, idx) => (
                        <SkillCard key={skill.id} item={skill} index={idx} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        {skillsRight.map((skill, idx) => (
                        <SkillCard key={skill.id} item={skill} index={idx + 7} />
                        ))}
                    </div>
                </div>

                {/* Footer Note (Dashed Box) */}
                <div className="border-2 border-dashed border-white/30 bg-black/10 rounded-xl p-4 text-center mx-auto max-w-3xl hover:border-white/60 transition-colors duration-300">
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                        [ বিঃদ্রঃ- উল্লেখিত দক্ষতাগুলো (Soft & hard Skills, IT Skills, Business Skills) শ্রেণি ও বয়স অনুযায়ী সিলেবাসভুক্ত হবে। ]
                    </p>
                </div>

            </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSkills;