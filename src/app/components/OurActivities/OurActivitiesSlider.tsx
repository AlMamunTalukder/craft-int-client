"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "@/app/shared/Container/Container";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

const videoLinks = [
  "https://www.youtube.com/embed/fClHNF3176U?si=S99N5nI-aFl-tv13",
  "https://www.youtube.com/embed/yO4o0sqKwGQ?si=ELwfpWlT4PauQ7EN",
];

const OurActivitiesSlider = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold text-[#6B21A8]">আমাদের কার্যক্রম</h2>
        <div className="flex space-x-2 justify-end relative z-10">
          <button className="custom-swiper-button-prev-activities flex items-center text-[#6B21A8] border border-[#6B21A8] rounded-full p-2">
            <GoArrowLeft className="h-5 w-5" />
          </button>
          <button className="custom-swiper-button-next-activities flex items-center text-[#6B21A8] border border-[#6B21A8] rounded-full p-2">
            <GoArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          nextEl: ".custom-swiper-button-next-activities",
          prevEl: ".custom-swiper-button-prev-activities",
        }}
        loop={true}
        autoplay={{ delay: 7000 }}
        speed={1200}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {videoLinks.map((link, index) => (
          <SwiperSlide key={index} className="rounded overflow-hidden">
            <div className="w-full h-60 md:h-[300px]">
              <iframe
                className="w-full h-full rounded-md"
                src={link}
                title={`Activity ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end pt-5">
        <Link href="#">
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#DC25FF] to-[#3C016F] border border-white px-4 py-2 rounded text-white">
          সব দেখুন <MdArrowForward />
        </button>
        </Link>
      </div>
    </Container>
  );
};

export default OurActivitiesSlider;
