"use client";
import { useState } from "react";
import { Play, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/app/shared/Container/Container";
import { VideoModal } from "@/components/Videos/VideoModal";

// Import the same images as in your main component
import image_1 from "../../../../public/img/video/2.jpg";
import image_2 from "../../../../public/img/video/3.jpg";
import image_3 from "../../../../public/img/video/5.jpg";
import image_4 from "../../../../public/img/video/4.jpg";
import image_5 from "../../../../public/img/video/1.jpg";

// Use the same newsData structure with imported images
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
  // Add more videos with the same image imports
  {
    id: 6,
    title: "Advanced Teaching Techniques",
    description: "Modern methods for effective classroom learning",
    date: "৩ নভেম্বর, ২০২৫",
    duration: "3:15",
    thumbnail: image_1, // Reuse or import additional images
    videoUrl: "https://www.youtube.com/embed/SxpVOqrHw74?si=HmVpGvhzg9SfceAb",
  },
  {
    id: 7,
    title: "Student Engagement Strategies",
    description: "How to keep students motivated and engaged",
    date: "১ নভেম্বর, ২০২৫",
    duration: "4:20",
    thumbnail: image_2,
    videoUrl: "https://www.youtube.com/embed/f8EmprR7JnE?si=XrgK3RblE6oopGm5",
  },
  {
    id: 8,
    title: "Classroom Management Tips",
    description: "Effective ways to manage your classroom",
    date: "৩০ অক্টোবর, ২০২৫",
    duration: "3:45",
    thumbnail: image_3,
    videoUrl: "https://www.youtube.com/embed/v8t4P1Hm9Rk?si=LuVttEzXkF4ktk4Z",
  },
];

export default function VideoGalleryPage() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openVideoModal = (index: number) => {
    setSelectedVideoIndex(index);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Container>
        {/* Header with Back Button */}
        <div className="py-8">
          

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4F0187] mb-4">
              ভিডিও গ্যালারি
            </h1>
            <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              আমাদের সকল ভিডিও একসাথে দেখুন 
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newsData.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 bg-white"
                onClick={() => openVideoModal(index)}
              >
                <div className="relative aspect-video bg-gray-900">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {video.duration}
                  </div>

                  {/* Play Button for Mobile */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideoModal(index);
                    }}
                    className="md:hidden absolute inset-0 m-auto w-16 h-16 bg-purple-600/90 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  >
                    <Play className="text-white w-6 h-6 ml-1" fill="white" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {video.date}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openVideoModal(index);
                      }}
                      className="hidden md:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
                    >
                      <Play className="w-4 h-4" fill="white" />
                      Play
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button (if you have pagination) */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] hover:from-[#5A1A9C] hover:to-[#9B4AE2] text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-5"
          >
            আরও ভিডিও 
          </Button>
        </div>
      </Container>

      {/* Video Modal */}
      {isDialogOpen && selectedVideoIndex !== null && (
        <VideoModal
          newsData={newsData}
          setIsVideoModalOpen={setIsDialogOpen}
          currentCarouselIndex={selectedVideoIndex}
        />
      )}
    </>
  );
}