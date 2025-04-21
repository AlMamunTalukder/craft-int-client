"use client";

import React, { useState } from "react";
import Container from "@/app/shared/Container/Container";
import Image from "next/image";
import img1 from "../../../assets/img/img1.jpeg";
import img2 from "../../../assets/img/img2.jpeg";
import img3 from "../../../assets/img/img3.jpeg";
import img4 from "../../../assets/img/img4.jpeg";

const images = [
  { src: img1, alt: "Image 1", title: "Studio" },
  { src: img2, alt: "Image 2", title: "IT ROOM" },
  { src: img3, alt: "Image 3", title: "CLASS ROOM" },
  { src: img4, alt: "Image 4", title: "RECEPTION" },
];

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="mt-10 pb-20">
        <div className="flex justify-center mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4F0187]">ফটো গ্যালারি</h1>
        </div> 

        <div className="flex h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden group 
                ${
                  activeIndex === index
                    ? "flex-[5]"
                    : activeIndex === null
                    ? "flex-1"
                    : "flex-[1.5]"
                }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-6xl font-[1000] uppercase">{img.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PhotoGallery;

