"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { VideoModal } from "./VideoModal";
import image_1 from "../../../public/img/video/2.jpg";
import image_2 from "../../../public/img/video/3.jpg";
import image_3 from "../../../public/img/video/5.jpg";
import image_4 from "../../../public/img/video/4.jpg";
import image_5 from "../../../public/img/video/1.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import Container from "@/app/shared/Container/Container";

const newsData = [
  {
    id: 1,
    title: "Little Teachers in Action! ",
    description:
      "How Class 2 Students are Practicing Teaching & Mastering Skills.",
    date: "২১ অক্টোবর, ২০২৫",
    duration: "02:21",
    thumbnail: image_1,
    videoUrl: "https://www.youtube.com/embed/SxpVOqrHw74?si=HmVpGvhzg9SfceAb",
  },
  {
    id: 2,
    title: "English Rhymes Power 🎤 ",
    description: " মজায় মজায় ইংরেজি শেখার এই কৌশল আপনি আগে দেখেননি",
    date: "১২ নভেম্বর, ২০২৫",
    duration: "2:55",
    thumbnail: image_2,
    videoUrl: "https://www.youtube.com/embed/f8EmprR7JnE?si=XrgK3RblE6oopGm5",
  },
  {
    id: 3,
    title: "CII টিচিং প্র্যাকটিস ",
    description: "ছাত্রজীবন থেকেই শুরু হোক আপনার বাচ্চার প্রেজেন্টেশন স্কিল।",
    date: "১০ নভেম্বর, ২০২৫",
    duration: "2:45",
    thumbnail: image_3,
    videoUrl: "https://www.youtube.com/embed/Ne7wG-JVyuc?si=7K8fhOcxMB0m0xYn",
  },
  {
    id: 4,
    title: "The Right Way to Give Salaam",
    description: "Essential Sunnah and Etiquette to Know Now",
    date: "৮ নভেম্বর, ২০২৫",
    duration: "2:34",
    thumbnail: image_4,
    videoUrl: "https://www.youtube.com/embed/v8t4P1Hm9Rk?si=LuVttEzXkF4ktk4Z",
  },
  {
    id: 5,
    title: "The Secret Formula to Sharpen Your Brain",
    description: "The Magic of Mind Games",
    date: "৫ নভেম্বর, ২০২৫",
    duration: "1:17",
    thumbnail: image_5,
    videoUrl: "https://www.youtube.com/embed/_rEGBY3wEe0?si=_Ib1ZZw5DuZT2tOl",
  },
];

const VideoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isPaused && !isDialogOpen) {
      intervalRef.current = setInterval(goNext, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext, isPaused, isDialogOpen]);

  const currentVideo = newsData[currentIndex];

  return (
    <>
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F0187] mb-4">
            ভিডিও গ্যালারি
          </h1>
          <div className="w-24 h-2 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full"></div>
        </div>

        {/* Main Video Player - Always on top */}
        <div className="mb-12">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-purple-50 to-blue-50 "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
              <Image
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentVideo.duration}
                  </span>
                  <span className="flex items-center gap-1 text-white/90 text-sm">
                    <Calendar className="w-4 h-4" />
                    {currentVideo.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 line-clamp-2">
                  {currentVideo.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base line-clamp-2">
                  {currentVideo.description}
                </p>
              </div>

              {/* Play Button */}
              <button
                onClick={() => setIsDialogOpen(true)}
                className="absolute inset-0 m-auto w-10 h-10 md:w-24 md:h-24 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl group/play"
              >
                <Play
                  className="text-white w-5 h-5 md:w-10 md:h-10 ml-1"
                  fill="white"
                />
                <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-0 group-hover/play:opacity-100"></div>
              </button>

              {/* Navigation Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-3 mt-6 justify-center">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-600 w-8 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400 hover:w-6"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">অন্যান্য ভিডিও</h3>
            {/* Scroll buttons for mobile */}
            <div className="flex gap-2 md:hidden">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar"
            >
              {newsData.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-64 cursor-pointer rounded-xl overflow-hidden transition-all duration-300 bg-white shadow-lg ${
                    currentIndex === index
                      ? "ring-2 ring-purple-500 shadow-xl transform scale-105"
                      : "hover:shadow-xl hover:transform hover:scale-105"
                  }`}
                >
                  <div className="relative aspect-video bg-gray-900">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Play className="w-5 h-5 text-white" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {item.duration}
                    </div>
                    {currentIndex === index && (
                      <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        এখন দেখানো হচ্ছে
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className={`font-semibold text-sm mb-1 line-clamp-2 ${
                      currentIndex === index ? "text-purple-600" : "text-gray-800"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {newsData.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                  currentIndex === index
                    ? "ring-4 ring-purple-500 shadow-2xl transform scale-105"
                    : "shadow-lg hover:shadow-2xl hover:transform hover:scale-105"
                }`}
              >
                <div className="relative aspect-video bg-gray-900">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.duration}
                  </div>
                  {currentIndex === index && (
                    <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      এখন দেখানো হচ্ছে
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h3 className={`font-semibold text-sm mb-2 line-clamp-2 ${
                    currentIndex === index ? "text-purple-600" : "text-gray-800"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Videos Button */}
        <div className="text-center">
          <Link href={"/videos"}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] hover:from-[#5A1A9C] hover:to-[#9B4AE2] text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-5"
            >
              আরও ভিডিও দেখুন
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Video Modal */}
        {isDialogOpen && (
          <VideoModal
            newsData={newsData}
            setIsVideoModalOpen={setIsDialogOpen}
            currentCarouselIndex={currentIndex}
          />
        )}
      </Container>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </>
  );
};

export default VideoGallery;