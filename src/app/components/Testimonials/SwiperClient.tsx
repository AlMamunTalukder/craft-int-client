"use client";

// import Image from "next/image";
// import img1 from "../../../assets/testi_3_1.jpg";
// import img2 from "../../../assets/testi_3_2.jpg";
// import img3 from "../../../assets/testi_3_3.jpg";
// import img4 from "../../../assets/testi_3_4.jpg";
import quote from "../../../assets/quote.svg";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "@/app/shared/Container/Container";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

const testimonials = [
  {
    name: "Jackline Techie",
    // image: img1,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "John Doe",
    // image: img2,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "Don Williams",
    // image: img3,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "David Farnandes",
    // image: img4,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "David Farnandes",
    // image: img4,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
];

const SwiperClient = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold text-[#6B21A8]">লিখিত মতামত</h2>
        <div className="flex space-x-2 justify-end relative z-10">
          <button className="custom-swiper-button-prev-testimonials flex items-center text-[#6B21A8] border border-[#6B21A8] rounded-full p-2">
            <GoArrowLeft className="h-5 w-5" />
          </button>
          <button className="custom-swiper-button-next-testimonials flex items-center text-[#6B21A8] border border-[#6B21A8] rounded-full p-2">
            <GoArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-swiper-button-next-testimonials",
          prevEl: ".custom-swiper-button-prev-testimonials",
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="border rounded-md p-5 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mx-auto">
              {/* <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full"
              /> */}
            </div>
            <div className="mt-5 px-2">
              <p className="text-sm text-gray-600 mb-3">
                {testimonial.feedback}
              </p>
              <h3 className="font-semibold text-[#6B21A8]">
                {testimonial.name}
              </h3>
              <div className="flex justify-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#FAC513]" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end pt-5">
        <Link href="/reviews">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#DC25FF] to-[#3C016F] border border-white px-4 py-2 rounded text-white">
            আরো দেখুন <MdArrowForward />
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default SwiperClient;
