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

const SkillCard = ({ item }: { item: Skill }) => (
  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 flex items-start gap-4 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex-shrink-0 mt-1 w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white shadow">
      <FaCheck className="text-sm" />
    </div>
    <div>
      <h4 className="text-black font-semibold text-lg">{item.title.split(" - ")[0]}</h4>
      <p className="text-purple-500 text-sm mt-1">{item.title.split(" - ")[1]}</p>
    </div>
  </div>
);

const BusinessSkills = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-600 via-purple-700 to-purple-900 overflow-visible">
      <Container>
        {/* Floating Image */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-purple-500/20 flex items-center justify-center shadow-2xl">
            <Image src={img} alt="Business Icon" className="w-3/4 h-3/4 object-contain" />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16 mt-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
            Business Skills
          </h2>
          <div className="mt-2 h-1.5 w-24 bg-purple-200 rounded-full mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            {skillsLeft.map((skill) => (
              <SkillCard key={skill.id} item={skill} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {skillsRight.map((skill) => (
              <SkillCard key={skill.id} item={skill} />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-6 bg-purple-800/30 backdrop-blur-md rounded-3xl border border-purple-500/40 shadow-lg">
          <p className="text-white text-sm md:text-base font-medium leading-relaxed">
            [ বিঃদ্রঃ- উল্লেখিত দক্ষতাগুলো (Soft & hard Skills, IT Skills, Business Skills) শ্রেণি ও বয়স অনুযায়ী সিলেবাসভুক্ত হবে। ]
          </p>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSkills;
