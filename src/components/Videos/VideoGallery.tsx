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
import image_1 from "@/public/img/video/video_thum_1.jpg";
import image_2 from "@/public/img/video/video_thum_2.jpg";
import image_3 from "@/public/img/video/video_thum_3.jpg";
import image_4 from "@/public/img/video/video_thum_4.jpg";
import image_5 from "@/public/img/video/video_thum_5.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import Container from "@/app/shared/Container/Container";

const newsData = [
  {
    id: 1,
    title: "স্বাস্থ্যসেবায় নতুন দিগন্ত: আধুনিক চিকিৎসা পদ্ধতি",
    description:
      "ডক্টরস অ্যাসোসিয়েশন অফ বাংলাদেশের উদ্যোগে নতুন চিকিৎসা প্রযুক্তি প্রশিক্ষণ প্রোগ্রাম",
    date: "১৫ নভেম্বর, ২০২৫",
    duration: "12:35",
    thumbnail: image_1,
    videoUrl: "https://www.youtube.com/embed/G5xD1PH3YJU?si=bimlzzg2SXs0XVOe",
  },
  {
    id: 2,
    title: "জনস্বাস্থ্য সচেতনতা: প্রতিরোধই সর্বোত্তম চিকিৎসা",
    description: "সারাদেশে স্বাস্থ্য সচেতনতা কার্যক্রম ও ফ্রি মেডিকেল ক্যাম্প",
    date: "১২ নভেম্বর, ২০২৫",
    duration: "8:20",
    thumbnail: image_2,
    videoUrl: 'https://www.youtube.com/embed/vwZRsMmHipg?si=z_Six3sQU-e-oqkr"',
  },
  {
    id: 3,
    title: "মেডিকেল কনফারেন্স ২০২৫: স্বাস্থ্যসেবার ভবিষ্যৎ",
    description: "জাতীয় মেডিকেল কনফারেন্সে হাজারো চিকিৎসকের অংশগ্রহণ",
    date: "১০ নভেম্বর, ২০২৫",
    duration: "15:45",
    thumbnail: image_3,
    videoUrl: "https://www.youtube.com/embed/QdfPNNxEWA8?si=TZd9o6hDAu6zAsGE",
  },
  {
    id: 4,
    title: "বাংলাদেশের চিকিৎসকদের কোভিড-১৯ যুদ্ধ: নিবেদনের এক গল্প",
    description: "মহামারির সময় চিকিৎসকদের ত্যাগ ও সেবার বাস্তব গল্প",
    date: "৮ নভেম্বর, ২০২৫",
    duration: "10:15",
    thumbnail: image_4,
    videoUrl: "https://www.youtube.com/embed/qPdkw72bJi4?si=uDg0Up9KlmRLgjKz",
  },
  {
    id: 5,
    title: "গ্রামীণ স্বাস্থ্যসেবা: দুর্গম অঞ্চলে চিকিৎসা সেবা",
    description: "দুর্গম এলাকায় চিকিৎসাসেবা পৌঁছে দেওয়ার বিশেষ উদ্যোগ",
    date: "৫ নভেম্বর, ২০২৫",
    duration: "9:30",
    thumbnail: image_5,
    videoUrl: "https://www.youtube.com/embed/wAOK6VVQXVI?si=htxJdGoo3s4mql9W",
  },
];

const VideoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  }, []);

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
        <div className="flex justify-center mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4F0187]">
            ফটো গ্যালারি
          </h1>
        </div>
        <div className=" w-24 h-1.5 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full"></div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Image */}
              <div className="relative w-full aspect-video bg-gray-900">
                <Image
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  fill
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-link-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Play Button */}
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="absolute inset-0 m-auto w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                >
                  <Play className="text-white w-10 h-10 ml-1" fill="white" />
                </button>

                {/* Navigation Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={goPrev}
                    className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-4 justify-center">
              {newsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 w-6 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side Video List */}
          <div className="lg:col-span-1">
            <div className="space-y-4 max-h-[250px] md:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {newsData.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer rounded-lg overflow-hidden transition-all transform hover:scale-[1.02] ${
                    currentIndex === index ? "bg-[#b9e1e5]" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex gap-3 p-3">
                    <div className="relative w-32 h-20 shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="w-6 h-6 text-white" fill="white" />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm mb-1 line-clamp-2 ${
                          currentIndex === index
                            ? "text-blue-600"
                            : "text-gray-800 hover:text-blue-600"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center  py-10">
              <Link href={"/videos"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1fafbe] text-[#1fafbe] hover:bg-[#1fafbe] hover:text-white transition-all duration-300"
                >
                  আরও দেখুন
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
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
    </>
  );
};

export default VideoGallery;
