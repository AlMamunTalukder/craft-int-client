
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import shape1 from "../../../../public/img/shape (2).png";
import shape2 from "../../../../public/img/shape (1).png";
import Container from "@/app/shared/Container/Container";
import img from "../../../../public/img/destination.png";

const CourseOutline = () => {
  return (
    <div className="bg-[#EFFBF5]">
      <Container>
        <div className="relative mt-20 py-20">
          {/* Top Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#46056B] mb-10">
            লক্ষ্য ও উদ্দেশ্য
          </h2>

          <div className="flex flex-col justify-center content-center items-center">
          <Image src={img} alt="img" className="h-[300px] w-[300px]" />
          {/* Grid layout for video and bullet points */}


            {/* Bullet Points */}
            <div className="bg-[#3705AB]  py-4 px-10 rounded-lg">

              <ul className="space-y-3 text-white">
                {[
                  "কুরআন-সুন্নাহর আদর্শ অনুসরণের মাধ্যমে আল্লাহভীরু, সৎ ও দক্ষ জনশক্তি গড়ে তোলা।",
                  "ব্যক্তি, সমাজ এবং পরকালীন কল্যাণে শিক্ষার্থীদের তৈরি করা।",
                  "শিক্ষার্থীদের মাঝে নেতৃত্বের গুণাবলী বিকশিত করা।",
                  "প্রযুক্তির সর্বোচ্চ ব্যবহার ও সর্বাধুনিক কারিকুলামের মাধ্যমে শিক্ষার্থীদের দক্ষ করে গড়ে তোলা।",
                  "শিক্ষার্থীদের মানসম্মত উচ্চশিক্ষা ও উন্নত কর্মজীবনের জন্য প্রস্তুত করা।",
                  "বাস্তব ও কর্মমুখী শিক্ষা প্রদান করা।",
                  "শিক্ষার্থীদের আত্মনির্ভরশীল ও উদ্যোক্তা হিসেবে গড়ে তোলা।",
                  "শিক্ষার্থীদের সুপ্ত প্রতিভাকে বিকশিত করা।",
                  "ব্যক্তিগত ও পেশাগত জীবনের প্রয়োজনীয় সকল দক্ষতা একাডেমিকভাবে সম্পন্ন করা।",
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheck className="text-green-600 mt-1 min-w-[16px]" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Shapes */}
          <Image
            src={shape1}
            alt="Decorative shape"
            className="absolute top-[30%] right-0 w-16 md:w-20 opacity-40"
          />
          <Image
            src={shape2}
            alt="Decorative shape"
            className="absolute top-[70%] right-0 w-16 md:w-20 opacity-40"
          />
        </div>
      </Container>
    </div>
  );
};

export default CourseOutline;
