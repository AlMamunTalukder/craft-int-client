"use client";

// import Image from "next/image";
// import img1 from "../../assets/img/testi_3_1.jpg";
// import img2 from "../../assets/img/testi_3_2.jpg";
// import img3 from "../../assets/img/testi_3_3.jpg";
// import img4 from "../../assets/img/testi_3_4.jpg";
import quote from "../../assets/img/quote.svg";
import { FaStar } from "react-icons/fa";
import Container from "@/app/shared/Container/Container";

const testimonials = [
  {
    name: "Jackline Techie",
    // image: img1,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "John Doe",
    // image: img2,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "Don Williams",
    // image: img3,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "David Farnandes",
    // image: img4,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
  {
    name: "David Farnandes",
    // image: img4,
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: quote,
  },
];

const page = () => {
  return (
    <div className="my-20">
      <Container>
        <h2 className="text-3xl font-bold text-[#6B21A8] mb-5">লিখিত মতামত</h2>

        <div className="grid grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border rounded-md p-5 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mx-auto">
                {/* <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full"
                /> */}
              </div>
              <div className="mt-5 px-2">
                <p className="text-sm text-gray-600 mb-3">
                  {testimonial.feedback}
                </p>
                <h3 className="font-semibold text-[#6B21A8]">
                  {testimonial.name}
                </h3>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#FAC513]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
