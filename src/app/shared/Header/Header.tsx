"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../../assets/img/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <Image src={logo} alt="Logo" className="h-[45px] w-[120px]" />
          </Link>
          <ul className="flex justify-between md:gap-7 gap-3">
            <li
              className={`lg:text-base text-sm font-semibold ${
                pathname === "/" ? "text-[#4F0187]" : "text-gray-600"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`lg:text-base text-sm font-semibold ${
                pathname === "#admission" ? 
                "text-[#4F0187]" : "text-gray-600"
              }`}
            >
              <Link href="#admission">Admission</Link>
            </li>
            <li className="lg:text-base text-sm font-semibold text-gray-600">
              <Link href="#reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
