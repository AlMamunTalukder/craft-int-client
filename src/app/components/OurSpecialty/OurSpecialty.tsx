import Container from "@/app/shared/Container/Container";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-gray-800 leading-relaxed">
    <BsCheckLg className="text-green-600 text-base min-w-[1rem] pt-[2px]" />
    <span>{children}</span>
  </li>
);

const OurSpecialty = () => {
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

export default OurSpecialty;









