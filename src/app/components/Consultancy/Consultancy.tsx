"use client";
import Container from "@/app/shared/Container/Container";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Personal Problem (ব্যক্তিগত সমস্যা)",
    answer: "Physical Mental & Emotional Family Social ETC ",
  },
  {
    question: "Professional Problem (পেশাগত সমস্যা)",
    answer:
      "Money, Business, Job, ETC",
  }
];
const Consultancy = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState<number | null>(null);
   
  
    const toggleFAQLeft = (index: number) => {
      setActiveIndexLeft(activeIndexLeft === index ? null : index);
    };
  
   
  return (
    <section className="py-16 bg-white relative z-10 overflow-hidden"> 
      <Container>
        

        
      <div className="w-[800px] mx-auto">
        <div className="bg-white pb-5 rounded-2xl">
          <div className="bg-[#FF3E83] w-full p-3 text-2xl text-white">
            <h1>Consultancy & Support Department (পরামর্শ ও সহায়তা বিভাগ)</h1>
          </div>
          <h1 className="space-y-2 bg-[#FEF2F4] p-3 h-[150px]">
          একাডেমিক পড়াশোনা শেষে বাস্তবিক জীবনে সাফল্য অর্জনের জন্য একজন শিক্ষার্থীর ব্যক্তিগত, পেশাগত, আর্থিকসহ সকল সমস্যা সমাধানের জন্য থাকবে লাইফ টাইম সাপোর্ট। 
          </h1>
        </div>
      </div>
      <div className="w-[800px] mx-auto">
        <div className="space-y-2">
                    {faqs.map((faq, index) => {
                      const isActive = activeIndexLeft === index;
        
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-md overflow-hidden transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleFAQLeft(index)}
                            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 focus:outline-none bg-[#d01bc5]"
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
    </section >
  );
};

export default Consultancy;