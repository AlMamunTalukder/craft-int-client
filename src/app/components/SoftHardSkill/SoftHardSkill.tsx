"use client";
import Container from "@/app/shared/Container/Container";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import img from "../../../../public/img/skill.png";

interface FAQ {
  question: string;
  answer: string;
}

const faqsLeft: FAQ[] = [
  {
    question: "Communication Skill - যোগাযোগের দক্ষতা।",
    answer: "",
  },
  {
    question: "Public Speaking & Presentation Skill - জনসম্মুখে কথা বলা ও উপস্থাপনাশৈলীর দক্ষতা।",
    answer: "",
  },
  {
    question: "Debating Skill - বিতর্কের দক্ষতা।",
    answer: "",
  },
  {
    question: "Debating Skill - বিতর্কের দক্ষতা।",
    answer: "",
  },
  {
    question: "Personal Development and Productivity Skills - ব্যক্তিগত উন্নয়ন ও নিজেকে গঠন করার দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Time Management & Multitasking Skills - সময় ব্যবস্থাপনা ও একসাথে একাধিক কাজ করার দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Leadership Skill - নেতৃত্বের দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Teamwork, Organizational & Management Skills – দলগত ‍ও সাংগঠনিক কাজ এবং ব্যবস্থাপনার দক্ষতা।",
    answer: "",
  },
  {
    question: "Problem Solving & Conflict Management Skills - সমস্যা সমাধান ও দ্বন্দ্ব নিরসনের দক্ষতা।",
    answer: "",
  },
  {
    question: "Networking Skill - বিভিন্ন মানুষের সাথে সম্পর্ক গড়ে তোলার দক্ষতা।",
    answer: "",
  },
  {
    question: "Motivational Skill - নিজেকে এবং অন্যকে প্রেরণা যোগানোর দক্ষতা।",
    answer: "",
  },
  {
    question: "Mind Training & Stress Management Skills – মনঃশক্তি বৃদ্ধি ও মানসিক চাপ নিয়ন্ত্রণের দক্ষতা।",
    answer: "",
  },
  {
    question: "Emotional Intelligence Skills – বুদ্ধিমত্তার সাথে আবেগ নিয়ন্ত্রণের দক্ষতা।",
    answer: "",
  },
  {
    question: "Critical Thinking, Decision Making & Adaptation Skills – কঠিন মুহূর্তে যুক্তিনির্ভর সঠিক চিন্তার মাধ্যমে সিদ্ধান্ত গ্রহণ ও নিজেকে মানিয়ে নেওয়ার দক্ষতা।",
    answer: "",
  },
  {
    question: "Active Listening & Attention to Detail Skills - মনোযোগ দিয়ে শোনা ও সূক্ষ্ম বিষয়ের প্রতি সচেতনতার দক্ষতা।",
    answer: "",
  },
  {
    question: "Manner & Ethics Skills - আচরণ ও নৈতিকতার দক্ষতা।",
    answer: "",
  }  
];

const faqsRight: FAQ[] = [
  {
    question: "Social Skills - সামাজিক আচরণ ও রীতিনীতির দক্ষতা।",
    answer: "",
  },
  {
    question: "Innovation/Creative & Research Skills - সৃজনশীল উদ্ভাবন ও গবেষণার দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Technical Skills – কারিগরি দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Martial Arts or Self-Defense Techniques Skills - মার্শাল আর্ট বা আত্মরক্ষা কৌশলের দক্ষতা।",
    answer: "",
  },
  {
    question: "Mental Arithmetic with Abacus Learning System - অ্যাবাকাসের মাধ্যমে মনে মনে অঙ্ক করার কৌশল।",
    answer:
      "",
  },
  {
    question: "General Knowledge Skill - সাধারণ জ্ঞানের দক্ষতা।",
    answer:
      "",
  },
  {
    question: "General Science Knowledge Skills - সাধারণ বিজ্ঞানের দক্ষতা।",
    answer: "",
  },
  {
    question: "Primary Health Care Skill - প্রাথমিক চিকিৎসা সেবার দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Handwriting Skill – হাতের লেখা সুন্দর করার দক্ষতা।",
    answer: "",
  },
  {
    question: "Art and Calligraphy Skills - চিত্রাঙ্কন ও ক্যালিগ্রাফির দক্ষতা।",
    answer: "",
  },
  {
    question: "Cultural Skill - বিনোদন ও সাংস্কৃতিক দক্ষতা।",
    answer: "",
  },
  {
    question: "Voice Over Skill – বিভিন্ন কন্টেন্টে কণ্ঠ দেয়ার দক্ষতা।",
    answer: "",
  },
  {
    question: "Swimming Skill - সাঁতারের দক্ষতা।",
    answer: "",
  },
  {
    question: "Driving Skill – যান চালানোর দক্ষতা।",
    answer: "",
  },
  {
    question: "Cooking Skill - রান্নার দক্ষতা।",
    answer: "",
  },
];

const SoftHardSkill = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState<number | null>(null);
  const [activeIndexRight, setActiveIndexRight] = useState<number | null>(null);

  const toggleFAQLeft = (index: number) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };

  const toggleFAQRight = (index: number) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  return (
    <div className="bg-[linear-gradient(172deg,_#7F0FF2_0%,_#3705AB_100%)] py-20">
      <Container>
        <Image src={img} alt="img" className="h-auto w-[120px] mx-auto"/>
        <h2 className="text-2xl font-bold text-center text-white mb-10 mt-2">
        Soft & Hard Skills (সফট ও হার্ড স্কিল’স)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left FAQ */}
          <div className="space-y-2">
            {faqsLeft.map((faq, index) => {
              const isActive = activeIndexLeft === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQLeft(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`px-5 transition-all duration-300 text-gray-600 overflow-hidden ${
                      isActive ? "max-h-40 py-3" : "max-h-0 py-0"
                    }`}
                  >
                    <div className="transition-opacity duration-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right FAQ */}
          <div className="space-y-2">
            {faqsRight.map((faq, index) => {
              const isActive = activeIndexRight === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQRight(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`px-5 transition-all duration-300 text-gray-600 overflow-hidden ${
                      isActive ? "max-h-40 py-3" : "max-h-0 py-0"
                    }`}
                  >
                    <div className="transition-opacity duration-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SoftHardSkill;
