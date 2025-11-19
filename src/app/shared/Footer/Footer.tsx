"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Imports from your structure
import logo from "../../../../public/img/logo.png";
import bg from "../../../../public/img/bg.webp";
import Container from "../Container/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-gray-300">
      {/* --- Background Image & Overlay --- */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlay for better readability and brand matching */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a002e] via-[#2d004d] to-black opacity-90" />
      </div>

      <div className="relative z-10 pt-20 pb-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* --- Column 1: Brand & About --- */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm inline-block">
                   <Image 
                     src={logo} 
                     alt="Craft Institute Logo" 
                     className="w-32 h-auto object-contain brightness-110" 
                   />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                আমরা উন্নত মানের শিক্ষা এবং নৈতিক মূল্যবোধ গঠনে প্রতিশ্রুতিবদ্ধ। আধুনিক প্রযুক্তি ও ইসলামী শিক্ষার সমন্বয়ে আমরা গড়ে তুলছি আগামীর ভবিষ্যৎ।
              </p>
              
              {/* Social Media Icons (Moved here for better balance) */}
              <div className="flex justify-center lg:justify-start gap-3 pt-2">
                <SocialIcon icon={<FaFacebookF />} href="#" />
                <SocialIcon icon={<FaWhatsapp />} href="#" />
                <SocialIcon icon={<FaYoutube />} href="#" />
                <SocialIcon icon={<FaTelegramPlane />} href="#" />
                <SocialIcon icon={<FaUsers />} href="#" />
              </div>
            </div>

            {/* --- Column 2: Quick Links --- */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-xl font-bold mb-6 border-b border-purple-700 pb-2 inline-block lg:block">
                প্রয়োজনীয় লিংক
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <FooterLink text="হোম" href="/" />
                <FooterLink text="ভর্তি তথ্য" href="/admission" />
                <FooterLink text="যাচাইকরণ" href="/verification" />
                <FooterLink text="আমাদের সম্পর্কে" href="/about" />
                <FooterLink text="যোগাযোগ" href="/contact" />
              </ul>
            </div>

            {/* --- Column 3: Contact Info --- */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-xl font-bold mb-6 border-b border-purple-700 pb-2 inline-block lg:block">
                যোগাযোগ
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#4F0187] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">হটলাইন</p>
                    <p className="text-white font-semibold">01310-726000</p>
                    <p className="text-white font-semibold">01700-999093</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#4F0187] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">ইমেইল</p>
                    <p className="text-white font-semibold">craftinstitutebd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Column 4: Address --- */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-xl font-bold mb-6 border-b border-purple-700 pb-2 inline-block lg:block">
                ঠিকানা
              </h3>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <div className="mt-1 text-[#4F0187]">
                    <FaMapMarkerAlt size={24} />
                </div>
                <div className="text-sm leading-loose text-gray-300">
                  <p>আদর্শ নগর, আধারমানিক,</p>
                  <p>সঞ্চল নূরবাগ আবাসিক এলাকা,</p>
                  <p>২ নম্বর রোড, চিটাগাং রোড,</p>
                  <p>সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ।</p>
                </div>
              </div>
            </div>

          </div>
        </Container>

        {/* --- Bottom Copyright Bar --- */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>
                &copy; {currentYear} <span className="text-white font-semibold">Craft Institute</span>. All Rights Reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-[#8A2BE2] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#8A2BE2] transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

// --- Helper Components for Cleaner Code ---

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#4F0187] hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-[#4F0187]"
  >
    {icon}
  </Link>
);

const FooterLink = ({ text, href }: { text: string; href: string }) => (
  <li className="group">
    <Link href={href} className="flex items-center justify-center lg:justify-start gap-2 hover:text-[#8A2BE2] transition-colors">
      <FaChevronRight className="text-[10px] text-[#4F0187] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="group-hover:translate-x-1 transition-transform">{text}</span>
    </Link>
  </li>
);

export default Footer;