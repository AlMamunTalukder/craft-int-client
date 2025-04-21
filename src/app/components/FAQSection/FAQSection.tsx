"use client";
import Container from "@/app/shared/Container/Container";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import img from "../../../assets/img/business.png";
import bg from "../../../assets/img/bg.png";


interface FAQ {
  question: string;
  answer: string;
}

const faqsLeft: FAQ[] = [
  {
    question: "Business mindset - বিজনেসের জন্য নিজের মনকে তৈরি করা।",
    answer: "",
  },
  {
    question: "Business Idea generate - বিজনেসের ধারণা তৈরি করা।",
    answer: "",
  },
  {
    question: "Entrepreneurship - উদ্যোক্তা হিসেবে নিজেকে তৈরি করা।",
    answer: "",
  },
  {
    question: "Personal branding - ব্যক্তিগত প্রচারণা।",
    answer: "",
  },
  {
    question: "Sales & Marketing - বিক্রয় এবং বিপণন দক্ষতা।",
    answer:
      "",
  },
  {
    question: "Digital marketing - ডিজিটাল মার্কেটিং।",
    answer:
      "",
  },
  {
    question: "Customer service - গ্রাহক সেবা।",
    answer:
      "",
  },

];

const faqsRight: FAQ[] = [
  {
    question: "Business management – বিজনেস ব্যবস্থাপনা।",
    answer: "",
  },
  {
    question: "Office management - অফিস ব্যবস্থাপনা।",
    answer: "",
  },
  {
    question: "Project management - প্রকল্প ব্যবস্থাপনা।",
    answer: "",
  },
  {
    question: "Money management - অর্থ ব্যবস্থাপনা।",
    answer: "",
  },
  {
    question: "Accounting - হিসাব-নিকাশ।",
    answer:
      "",
  },
  {
    question: "Business communication - ব্যবসায়িক যোগাযোগ।",
    answer:
      "",
  },

];

const FAQSection = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState<number | null>(null);
  const [activeIndexRight, setActiveIndexRight] = useState<number | null>(null);

  const toggleFAQLeft = (index: number) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };

  const toggleFAQRight = (index: number) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-repeat bg-[length:200px]"
  style={{ backgroundImage: `url(${bg.src})` }}>
        {/* <Image
          src={bg}
          alt="Background"
          className="h-full bg-repeat text-white"
        /> */}
      </div>
      <div className="bg-[#8444dc]/90 py-20 relative">
        <Container>
          <Image src={img} alt="img" className="h-auto w-[120px] mx-auto" />
          <h2 className="text-2xl font-bold text-center text-white mb-10 mt-4">
            Business Skills (ব্যবসায়িক দক্ষতা)
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
                        className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`px-5 transition-all duration-300 text-gray-600 overflow-hidden ${isActive ? "max-h-40 py-3" : "max-h-0 py-0"
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
                        className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`px-5 transition-all duration-300 text-gray-600 overflow-hidden ${isActive ? "max-h-40 py-3" : "max-h-0 py-0"
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
          <div className="border border-dashed p-5 mt-4">
            <h1 className="text-white text-center text-lg">
              [ বিঃদ্রঃ- উল্লেখিত দক্ষতাগুলো (Soft & hard Skills, IT Skills, Business Skills) শ্রেণি ও বয়স অনুযায়ী সিলেবাসভুক্ত হবে। ]
            </h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FAQSection;
