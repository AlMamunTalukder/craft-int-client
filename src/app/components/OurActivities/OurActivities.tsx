// import Container from "@/app/shared/Container/Container";
// import Image from "next/image";
// import React from "react";
// import img from "../../../assets/img/cup.png";
// import img2 from "../../../assets/img/outline.png";

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
// import img from "../../../assets/img/destination.png";

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

const OurActivities = () => {
  return (
    <section className="pb-16 bg-[#F4E6FA] relative z-10 overflow-hidden">
       <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-[#9A00FF] text-white mb-10 py-2">
        সহ-কার্যক্রম
        </h2>
      <Container>
       

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl">
            <ul className="space-y-2">
              <ListItem>সাপ্তাহিক ইসলামী জলসা। </ListItem>
              <ListItem>সাধারণ জ্ঞান প্রতিযোগিতা। </ListItem>
              <ListItem>বিষয় ভিত্তিক আয়াত/সুরা মুখস্থকরণ প্রতিযোগিতা। 
              </ListItem>
              <ListItem>বিষয় ভিত্তিক হাদিস মুখস্থকরণ প্রতিযোগিতা।
              </ListItem>
              <ListItem>মাসআলা-মাসায়েল প্রতিযোগিতা। 
              </ListItem>
              <ListItem>বিশেষ দু’আ অনুষ্ঠান ও তারবিয়্যাতি জলসা।
              </ListItem>
              <ListItem>সাহিত্য আসর ও লেখক কর্মশালা।  
              </ListItem>
              <ListItem> বক্তৃতা ও বিতর্ক প্রতিযোগিতা। </ListItem>
              <ListItem> বাংলা, আরবি ও ইংরেজি শব্দার্থ প্রতিযোগিতা।  </ListItem>

            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <ul className="space-y-2">
              <ListItem>লেখালেখি ও সাহিত্য প্রতিযোগিতা। </ListItem>
              <ListItem>
              IQ প্রতিযোগিতা। 
              </ListItem>
              <ListItem>সাংস্কৃতিক প্রতিযোগিতা। </ListItem>
              <ListItem>বিজ্ঞান বিষয়ক প্রতিযোগিতা।  </ListItem>
              <ListItem>
              আইটি কম্পিটিশন। 
              </ListItem>
              <ListItem>
              ম্যাথ অলিম্পিয়াড। 
              </ListItem>
              <ListItem>বার্ষিক শিক্ষা সফর। </ListItem>
              <ListItem>বার্ষিক ক্রীড়া প্রতিযোগিতা। </ListItem>
              <ListItem>মিডিয়া এক্টিভিটি।</ListItem>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurActivities;









