import React from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

const DepartmentSection = () => {
    return (
        <div className="relative bg-white overflow-hidden flex flex-col items-center justify-center p-4">

            {/* Main Content Area */}
            <div className="flex flex-col items-center justify-center w-full max-w-4xl py-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-20 tracking-wider">
                    OUR DEPARTMENT
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-16 md:space-y-0 md:space-x-20">
                    
                    {/* Academic Department */}
                    <div className="relative flex flex-col items-center">

                        {/* Smooth SVG Curved Bracket Left */}
                        <svg
                            className="absolute -left-24 top-1/2 -translate-y-1/2 hidden md:block"
                            width="40"
                            height="200"
                            viewBox="0 0 40 200"
                            fill="none"
                            stroke="#4F0187"
                            strokeWidth="8"
                        >
                            <path
                                d="M35 5 C10 50 10 150 35 195"
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#4F0187] flex items-center justify-center shadow-lg relative z-10 border-[13px] border-gray-200">
                            <HiAcademicCap className="text-white w-20 h-20" />
                        </div>
                        <p className="mt-6 text-lg font-semibold text-gray-700 tracking-wide text-center">
                            ACADEMIC DEPARTMENT
                        </p>
                    </div>

                    {/* Hifz Quran Department */}
                    <div className="relative flex flex-col items-center">

                        {/* Smooth SVG Curved Bracket Right */}
                        {/* Smooth SVG Curved Bracket Right */}
<svg
  className="absolute -right-24 top-1/2 -translate-y-1/2 hidden md:block"
  width="40"
  height="200"
  viewBox="0 0 40 200"
  fill="none"
  stroke="#4F0187"
  strokeWidth="8"
>
  <path d="M5 5 C30 50 30 150 5 195" strokeLinecap="round" />
</svg>


                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#4F0187] flex items-center justify-center shadow-lg relative z-10 border-[13px] border-gray-200">
                            <IoBookOutline className="text-white w-20 h-20" />
                        </div>
                        <p className="mt-6 text-lg font-semibold text-gray-700 tracking-wide text-center">
                            HIFZ QURAN
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DepartmentSection;
