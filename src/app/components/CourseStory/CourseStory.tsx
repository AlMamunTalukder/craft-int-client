// import Container from "@/app/shared/Container/Container";
// import Image from "next/image";
// import React from "react";
// import img from "../../../assets/cup.png";
// import img2 from "../../../assets/outline.png";

// const CourseStory = () => {
//   return (
//     <div className="mt-20 bg-[#F7F4FF]">
//       <Container>
//         <div className="border-dashed border-b pb-20">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#4F0187] mb-5">
//             কোর্স স্টোরি
//           </h2>
//           <Image src={img} alt="" className="max-w-60 mx-auto mb-5" />
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#D223F6] mb-2">
//             প্রমিত ভাষা শেখার
//           </h2>
//           <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#4F0187]">
//             ৫০ দিনের চ্যালেঞ্জ
//           </h2>
//         </div>
//         <div className="border-dashed border-b pb-20">
//           <Image
//             src={img2}
//             alt=""
//             className="md:max-w-[600px] w-full mx-auto mt-20"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CourseStory;




// import Image from "next/image";
// import React from "react";
// import { FaCheck } from "react-icons/fa";
// import shape1 from "@/assets/shape (2).png";
// import shape2 from "@/assets/shape (1).png";
// import Container from "@/app/shared/Container/Container";
// import img from "../../../assets/destination.png";

// const CourseStory = () => {
//   return (
//     <div className="bg-[#F7F4FF]">
//       <Container>
//         <div className="relative  py-20">
//           {/* Top Title */}
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-[#46056B] mb-10">
//             লক্ষ্য ও উদ্দেশ্য
//           </h2>

//           <div className="flex flex-col justify-center content-center items-center">
//           <Image src={img} alt="img" className="h-[300px] w-[300px]" />
//           {/* Grid layout for video and bullet points */}


//             {/* Bullet Points */}
//             <div className="bg-[#3705AB]  py-4 px-10 rounded-lg">

//               <ul className="space-y-3 text-white">
//                 {[
//                   "কুরআন-সুন্নাহর আদর্শ অনুসরণের মাধ্যমে আল্লাহভীরু, সৎ ও দক্ষ জনশক্তি গড়ে তোলা।",
//                   "ব্যক্তি, সমাজ এবং পরকালীন কল্যাণে শিক্ষার্থীদের তৈরি করা।",
//                   "শিক্ষার্থীদের মাঝে নেতৃত্বের গুণাবলী বিকশিত করা।",
//                   "প্রযুক্তির সর্বোচ্চ ব্যবহার ও সর্বাধুনিক কারিকুলামের মাধ্যমে শিক্ষার্থীদের দক্ষ করে গড়ে তোলা।",
//                   "শিক্ষার্থীদের মানসম্মত উচ্চশিক্ষা ও উন্নত কর্মজীবনের জন্য প্রস্তুত করা।",
//                   "বাস্তব ও কর্মমুখী শিক্ষা প্রদান করা।",
//                   "শিক্ষার্থীদের আত্মনির্ভরশীল ও উদ্যোক্তা হিসেবে গড়ে তোলা।",
//                   "শিক্ষার্থীদের সুপ্ত প্রতিভাকে বিকশিত করা।",
//                   "ব্যক্তিগত ও পেশাগত জীবনের প্রয়োজনীয় সকল দক্ষতা একাডেমিকভাবে সম্পন্ন করা।",
//                 ].map((text, index) => (
//                   <li key={index} className="flex items-start gap-2">
//                     <FaCheck className="text-green-600 mt-1 min-w-[16px]" />
//                     <span>{text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Shapes */}
//           <Image
//             src={shape1}
//             alt="Decorative shape"
//             className="absolute top-[30%] right-0 w-16 md:w-20 opacity-40"
//           />
//           <Image
//             src={shape2}
//             alt="Decorative shape"
//             className="absolute top-[70%] right-0 w-16 md:w-20 opacity-40"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CourseStory;



import Container from "@/app/shared/Container/Container";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-gray-800 leading-relaxed">
    <BsCheckLg className="text-green-600 text-base min-w-[1rem] pt-[2px]" />
    <span>{children}</span>
  </li>
);

const CourseStory = () => {
  return (
    <section className="py-16 bg-[#F7F4FF] relative z-10 overflow-hidden">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#4F0187] mb-10">
          আমাদের বিশেষত্ব
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl">
            <ul className="space-y-2">
              <ListItem>আন্তর্জাতিক মানের হাফেজ ও ক্বারীদের মাধ্যমে বিশুদ্ধ কুরআন তিলাওয়াতের প্রশিক্ষণ।
              </ListItem>
              <ListItem>বিশুদ্ধ উচ্চারণে প্রমিত বাংলায় কথা বলার দক্ষতা অর্জন।
              </ListItem>
              <ListItem>আরবদের মতো করে আরবিতে অনর্গল কথা বলার দক্ষতা অর্জন।
              </ListItem>
              <ListItem>ব্রিটিশ ও আমেরিকান একসেন্টে ইংরেজিতে কথা বলার দক্ষতা অর্জন।
              </ListItem>
              <ListItem>প্রযুক্তিতে দক্ষ করে গড়ে তুলতে রয়েছে উন্নতমানের কম্পিউটার ল্যাব।
              </ListItem>
              <ListItem>শিক্ষার্থীদের বুদ্ধি ভিত্তিক (Intellectual) আবেগীয় (Emotional) শারীরিক (Physical) মানসিক (mental) ও সামাজিক (Social) মেধা বিকাশে রয়েছে Soft & hard Skills এর উপর নিয়মিত প্রশিক্ষণ।
              </ListItem>
              <ListItem>বই, পত্রিকা, সংবাদ মাধ্যম ও মিডিয়ার উপযোগী করে প্রবন্ধ, গল্প, কবিতা, ব্লগ ও স্ক্রিপ্ট রাইটিং ইত্যাদি বিষয়ে লেখালেখির প্রশিক্ষণ।
              </ListItem>
              <ListItem> দেশের খ্যাতনামা ব্যক্তিদের তত্ত্বাবধানে শিল্প-সাহিত্য, সাংস্কৃতিক ও অন্যান্য বিষয়ে ট্রেইনিংয়ের ব্যবস্থা।</ListItem>

            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl">

            <ul className="space-y-2">
              <ListItem>গাইড টিচারের মাধ্যমে শিক্ষার্থীদের পাঠোন্নয়ন, আচরণ, পারফরম্যান্স ও সার্বিক গতিবিধি রিপোর্ট ফরমের মাধ্যমে পর্যবেক্ষণ। </ListItem>
              <ListItem>
                ক্লাসের পড়া ক্লাসেই আদায় করা হয়। তাই, আলাদাভাবে প্রাইভেট পড়ার প্রয়োজন নেই।
              </ListItem>
              <ListItem>দুর্বল ও অমনোযোগী ছাত্রদের জন্য বিশেষ কেয়ার ও কাউন্সেলিং এর ব্যবস্থা। </ListItem>
              <ListItem>বাংলা, আরবি ও ইংরেজি বিষয়ে হাতের লেখা সুন্দর করার প্রশিক্ষণ। </ListItem>
              <ListItem>
                জ্ঞান বিকাশের জন্য রয়েছে প্রযুক্তি সমৃদ্ধ গ্রন্থাগার
              </ListItem>
              <ListItem>
                শরীরচর্চা, ইনডোর গেম, ও খেলাধুলার সু-ব্যবস্থা
              </ListItem>
              <ListItem>শিক্ষার্থীদের শারীরিক ও মানসিক স্বাস্থ্য সুরক্ষায় রয়েছে নিয়মিত মেডিক্যাল চেক-আপ কর্মসূচি।</ListItem>
              <ListItem>সার্বক্ষণিক নিরাপত্তার জন্য রয়েছে সিকিউরিটি গার্ড ও সি-সি ক্যামেরার ব্যবস্থা।</ListItem>
              <ListItem>দৈনন্দিন মাসনূন আমলের প্রতি বিশেষ গুরুত্বারোপ। </ListItem>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseStory;









