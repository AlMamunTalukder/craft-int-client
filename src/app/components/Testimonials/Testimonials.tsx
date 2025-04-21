"use client";

import dynamic from "next/dynamic";
const SwiperCore = dynamic(() => import("./SwiperClient"), {
  ssr: false,
});

const Testimonials = () => {
  return (
    <div className="mt-20">
      <SwiperCore />
    </div>
  );
};

export default Testimonials;
