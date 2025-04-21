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

const CountdownTimer = dynamic(
  () => import("@/app/components/CountdownTimer/CountdownTimer"),
  { ssr: false }
);

export default function SubHeader() {
  return (
    <div className="bg-[#4F0187] text-white py-5">
      <Container>
        <div className="lg:flex justify-between items-center lg:space-y-0 space-y-3">
          <div className="flex lg:justify-start justify-center gap-2">
            <div className="text-center">
              <p>ভর্তি হতে যোগাযোগ করুন   </p>
              <p>01310726000</p>
            </div>
          </div>

          <div className="flex lg:justify-start justify-center">
            <CountdownTimer />
          </div>

          <div className="flex lg:justify-start justify-center">
            <Link href="#contact">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#DC25FF] to-[#3C016F] border border-white px-4 py-2 rounded text-white">
                {/* <FaHandPointRight className="text-lg" /> */}
                <span className="text-sm font-semibold">
                  রেজিস্ট্রেশন করুন
                </span>
              </button>
            </Link>
          </div>

          <div className="flex lg:justify-start justify-center gap-3 text-lg">
            <FaFacebookF className="hover:text-[#DC25FF] cursor-pointer" />
            <FaWhatsapp className="hover:text-[#DC25FF] cursor-pointer" />
            <FaYoutube className="hover:text-[#DC25FF] cursor-pointer" />
            <FaTelegramPlane className="hover:text-[#DC25FF] cursor-pointer" />
            <FaUsers className="hover:text-[#DC25FF] cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
}
