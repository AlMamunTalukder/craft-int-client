"use client";

import Container from "@/app/shared/Container/Container";
import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "মোট আবর্তন", color: "text-teal-500" },
  { value: "1,500+", label: "কোর্স সম্পন্ন করেছে", color: "text-rose-500" },
  {
    value: "99.9%",
    label: "শিক্ষার্থীদের সন্তুষ্টির হার",
    color: "text-purple-500",
  },
  { value: "15+", label: "প্রশিক্ষক", color: "text-yellow-500" },
];

const CourseStats = () => {
  const columns = 2;

  return (
    <Container>
      <section className="relative mt-20">
        {/* Animated rotating circle in top-left */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute z-20 top-0 left-28 w-40 h-40 rounded-full border-8 border-dashed border-[#D423F7] transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Stats Grid Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-md p-10 grid grid-cols-1 md:grid-cols-2 gap-0 text-center z-10 relative border border-dashed border-gray-200 overflow-hidden">
          {stats.map((stat, index) => {
            const isRightCol = (index + 1) % columns !== 0; // not last in row
            const isBottomRow = index < stats.length - columns; // not last row

            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`p-6 border-gray-300
                    ${isBottomRow ? "md:border-b" : ""}
                    ${isRightCol ? "md:border-r" : ""}
                  `}
                >
                  <h3 className={`text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-gray-800 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default CourseStats;
