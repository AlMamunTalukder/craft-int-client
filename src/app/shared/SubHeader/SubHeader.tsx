import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
  FaUsers,
  // FaHandPointRight,
} from "react-icons/fa";
import Container from "../Container/Container";

import dynamic from "next/dynamic";
import Link from "next/link";
// import Link from "next/link";

const CountdownTimer = dynamic(
  () => import("@/components/CountdownTimer/CountdownTimer"),
  { ssr: false }
);

export default function SubHeader() {
  const SocialIcon = ({
    icon,
    href,
  }: {
    icon: React.ReactNode;
    href: string;
  }) => (
    <Link
      href={href}
      className="w-8 h-8 rounded-full bg-white  flex items-center justify-center text-[#4F0187] hover:bg-[#4F0187] hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-[#4F0187] hover:text-[#DC25FF]  cursor-pointer"
    >
      {icon}
    </Link>
  );

  return (
    <div className="bg-[#4F0187] text-white py-5">
      <Container>
        <div className="lg:flex justify-between items-center lg:space-y-0 space-y-3">
          <div className="flex lg:justify-start justify-center gap-2">
            <div className="text-center">
              <p>অগ্রিম ভর্তিতে ২৫% ছাড়...</p>
              <p>প্রি ওয়ান থেকে সেভেন এবং হিফয বিভাগে ভর্তি চলছে। </p>
            </div>
          </div>

          <div className="flex lg:justify-start justify-center">
            <CountdownTimer />
          </div>

          {/* <div className="flex lg:justify-start justify-center">
            <Link href="#contact">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#DC25FF] to-[#3C016F] border border-white px-4 py-2 rounded text-white">
                <FaHandPointRight className="text-lg" />
                <span className="text-sm font-semibold">
                  রেজিস্ট্রেশন করুন
                </span>
              </button>
            </Link>
          </div> */}

          <div className="flex lg:justify-start justify-center gap-2 text-lg">
            <SocialIcon
              icon={<FaFacebookF />}
              href="https://www.facebook.com/ciibd25/"
            />
            <SocialIcon icon={<FaWhatsapp />} href="01604-858100" />
            <SocialIcon
              icon={<FaYoutube />}
              href="https://www.youtube.com/@CII1216/videos"
            />
            <SocialIcon icon={<FaTelegramPlane />} href="#" />
            <SocialIcon icon={<FaUsers />} href="#" />
          </div>
        </div>
      </Container>
    </div>
  );
}
