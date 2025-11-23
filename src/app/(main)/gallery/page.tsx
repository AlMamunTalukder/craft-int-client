'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../../../../public/img/gallery/img4.jpeg";
import img2 from "../../../../public/img/gallery/lab2.jpg";
import img3 from "../../../../public/img/gallery/door.jpg";
import img4 from "../../../../public/img/gallery/class2.jpg";
import img5 from "../../../../public/img/gallery/meeting.jpg";
import img6 from "../../../../public/img/gallery/class4.jpg";

import img7 from "../../../../public/img/gallery/c1.jpg";
import img8 from "../../../../public/img/gallery/confarence.jpg";
import img9 from "../../../../public/img/gallery/door.jpg";
import img10 from "../../../../public/img/gallery/img2.jpeg";
import img11 from "../../../../public/img/gallery/img1.jpeg";
import img12 from "../../../../public/img/gallery/img3.jpeg";
import Container from '@/app/shared/Container/Container';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';


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
    image: img5,
  },
  {
    id: '06',
    description:
      'ক্লাসরুম',
    image: img6,
  },
  {
    id: '07',
    description:
      'ক্লাসরুম',
    image: img7,
  },
  {
    id: '08',
    description:
      'ক্লাসরুম',
    image: img8,
  },
  {
    id: '09',
    description:
      'ক্লাসরুম',
    image: img9,
  },
  {
    id: '10',
    description:
      'ক্লাসরুম',
    image: img10,
  },
  {
    id: '11',
    description:
      'ক্লাসরুম',
    image: img11,
  },
  {
    id: '12',
    description:
      'ক্লাসরুম',
    image: img12,
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
        <div className="mt-10 pb-20"> 
         <div className="flex justify-center mb-5">
           <h1 className="text-3xl md:text-4xl font-bold text-[#4F0187]">ফটো গ্যালারি</h1>
         </div> 
          <div className=" w-24 h-1.5 mx-auto bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] rounded-full"></div>
        <div className="columns-3 gap-4 space-y-4 mt-5">
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
                  <DialogContent className=" p-0 border-none">
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
                        className=" rounded"
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
        </div>

      </Container>
    </div>
  );
};

export default ImageGallery;

