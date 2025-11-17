import Container from "@/app/shared/Container/Container";
import Image from "next/image";
import React from "react";
import img from "../../../../public/img/banner-logo-left.png";
import bg from "../../../../public/img/bg.jpg";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

const AdmissionBanner = () => {
  return (
    <div
      className="relative md:pb-0 pb-10 lg:py-28"
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
              <h3 className="text-3xl font-semibold mb-3">
                কথার জাদুতে মুগ্ধ করার
              </h3>
              <h1 className="text-4xl font-semibold mb-3 text-[#DC25FF]">
                ৫০ দিনের চ্যালেঞ্জ
              </h1>
              <p>ডিসকাউন্ট পেতে দ্রুত ভর্তি নিশ্চিত করুন</p>
              <div className="flex lg:justify-start justify-center pt-5">
                <Link href="#admission">
                  <button className="flex items-center gap-2 bg-gradient-to-r from-[#DC25FF] to-[#3C016F] border border-white px-4 py-2 rounded text-white">
                    ভর্তি কনফার্ম করুন <MdArrowForward />
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="md:order-2 order-1">
              <Image
                src={img}
                alt="Banner logo"
                className="mx-auto lg:mx-0 w-52 md:w-80"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AdmissionBanner;
