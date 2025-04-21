import React from "react";
import bg from "../../../assets/bg.jpg";
import Container from "@/app/shared/Container/Container";

const Banner = () => {
  return (
    <div
      className="relative md:pb-0 pb-10 lg:py-40"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center lg:space-y-0 space-y-10">
            {/* Text Content */}
            <div className="text-center lg:text-left text-white md:order-1 order-2">
              <h3 className="text-4xl font-medium mb-3">
              ইসলামি ও আধুনিক শিক্ষার সমন্বয়ে

              </h3>
              <h1 className="text-4xl font-medium mb-3 text-[#F300E7]">
              যুগোপযোগী শিক্ষা কারিকুলাম নিয়ে

              </h1>
              <h1 className="text-4xl font-medium mb-3 ">বাংলাদেশে আমরাই প্রথম...!!</h1>
              <h1 className="text-2xl font-medium mb-3 text-[#F300E7]">
              ১ম থেকে ৬ষ্ঠ শ্রেণি পর্যন্ত</h1>
              
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
