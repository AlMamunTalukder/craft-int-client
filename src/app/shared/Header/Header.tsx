"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { HiMenu, HiX } from "react-icons/hi";

// 1. Imports from your First Header
import Container from "../Container/Container";
import logo from "../../../../public/img/logo.png";
// import { LogIn } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Static Menu Items from First Header
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Admission", href: "/admission-form" },
    // { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about-us" },
    { name: "Fees", href: "/fees" },
    // { name: "Gallery", href: "/gallery" },
  ];

  const activeColor = "#4F0187";

  return (
    <div
      className={`top-0 z-50 w-full transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md sticky bg-white/95 backdrop-blur-sm" : ""
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-3">
          {/* --- Logo Section --- */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                className="h-[45px] w-[120px] object-contain cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center gap-7">
            <ul className="flex gap-7">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`lg:text-base text-sm font-semibold transition-colors duration-200 
                    ${
                      pathname === item.href
                        ? `text-[${activeColor}]`
                        : "text-gray-600 hover:text-[#4F0187]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <Link
              href="/login"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 ring-2 ring-purple-500/20 hover:ring-purple-500/50"
            >
              <span>Login</span>
              <LogIn className="text-xl group-hover:scale-110 transition-transform duration-300" />
            </Link> */}
          </nav>

          {/* --- Mobile Menu Button --- */}
          {/* <div className="md:hidden flex items-center gap-3">
            <Link
              href="/login"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 ring-2 ring-purple-500/20 hover:ring-purple-500/50"
            >
              <span>Login</span>
              <LogIn className="text-xl group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <button
              className="p-2 text-gray-600 hover:text-[#4F0187] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div> */}
        </div>

        {/* --- Mobile Navigation Dropdown --- */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 animate-fade-down bg-white">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-4 font-semibold rounded-lg transition-colors duration-300 hover:bg-purple-50
                      ${
                        pathname === item.href
                          ? `text-[${activeColor}]`
                          : "text-gray-600"
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
