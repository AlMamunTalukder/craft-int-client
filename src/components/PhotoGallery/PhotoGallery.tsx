'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../../../public/img/img1.jpeg";
import img2 from "../../../public/img/img2.jpeg";
import img3 from "../../../public/img/img3.jpeg";
import img4 from "../../../public/img/img4.jpeg";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/app/shared/Container/Container';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';

interface ImageGallery {
  id: string;
  description: string;
  image: StaticImageData;
}

const galleries: ImageGallery[] = [
  {
    id: '01',
    description:
      'স্টুডিও',
    image: img1,
  },
  {
    id: '02',
    description:
      'আইটি ক্লাস',
    image: img2,
  },
  {
    id: '03',
    description:
      'ক্লাস রুম',
    image: img3,
  },
  {
    id: '04',
    description:
      'রিসিপশন',
    image: img4,
  },
  {
    id: '05',
    description:
      'স্টুডিও',
    image: img1,
  },
  {
    id: '05',
    description:
      'ক্লাসরুম',
    image: img3,
  },
];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % galleries.length);
  const handlePrevious = () => setIndex((prev) => (prev === 0 ? galleries.length - 1 : prev - 1));

  const onKeyDown = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'Escape') setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div className="bg-linear-to-b from-[#c3eaee] to-gray-50 py-4">
      <Container >
        {/* <SectionTitle
          title="ফটো গ্যালারি"
          align="left"
        /> */}
        <div className="columns-3 gap-4 space-y-4">
          {galleries.map((gallery, i) => (
            <Dialog key={gallery.id} open={open && index === i} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md"
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={gallery.image}
                    alt="gallery image"
                    className="w-full h-auto"
                    placeholder="blur"
                  />
                </motion.div>
              </DialogTrigger>

              <AnimatePresence>
                {open && index === i && (
                  <DialogContent className="max-w-4xl p-0 border-none">
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Image
                        src={galleries[index].image}
                        alt="large preview"
                        className="w-full h-auto rounded"
                      />

                      <DialogTitle className="p-2">{galleries[index].description}</DialogTitle>

                      {/* Controls */}
                      <Button
                        size="icon"
                        variant="default"
                        className="absolute top-1/2 left-4 -translate-y-1/2"
                        onClick={handlePrevious}
                      >
                        ←
                      </Button>
                      <Button
                        size="icon"
                        variant="default"
                        className="absolute top-1/2 right-4 -translate-y-1/2 "
                        onClick={handleNext}
                      >
                        →
                      </Button>
                    </motion.div>
                  </DialogContent>
                )}
              </AnimatePresence>
            </Dialog>
          ))}
        </div>

        <div className="flex items-center justify-center  py-10">
           <Link href={'/gallery'}>
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
      </Container>
    </div>
  );
};

export default ImageGallery;


// const images = [
//   { src: img1, alt: "Image 1", title: "Studio" },
//   { src: img2, alt: "Image 2", title: "IT ROOM" },
//   { src: img3, alt: "Image 3", title: "CLASS ROOM" },
//   { src: img4, alt: "Image 4", title: "RECEPTION" },
// ];

// const PhotoGallery = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <Container>
//       <div className="mt-10 pb-20">
//         <div className="flex justify-center mb-5">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#4F0187]">ফটো গ্যালারি</h1>
//         </div> 

//         <div className="flex h-[150px] md:h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden group 
//                 ${
//                   activeIndex === index
//                     ? "flex-[5]"
//                     : activeIndex === null
//                     ? "flex-1"
//                     : "flex-[1.5]"
//                 }`}
//               onMouseEnter={() => setActiveIndex(index)}
//               onMouseLeave={() => setActiveIndex(null)}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
//                 <h2 className="text-white text-xl md:text-6xl font-[1000] uppercase">{img.title}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-end mt-2">
//         <button
             
//               className="flex items-center gap-2 p-3 rounded-full bg-gradient-to-r from-[#D323F7] to-[#4F0187] text-white transition-all duration-300 hover:bg-blue-700 "
//               aria-label="Back to Top"
//             >
//               See More <FaArrowRight className="h-5 w-5" />
//             </button>
//             </div>
//       </div>
//     </Container>
//   );
// };

// export default PhotoGallery;

