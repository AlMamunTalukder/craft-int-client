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









