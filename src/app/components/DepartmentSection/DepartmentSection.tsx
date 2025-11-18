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

                        {/* PERFECT LEFT BRACKET */}
                        <svg
                            className="absolute -left-8 top-[90px] -translate-y-1/2 hidden md:block"
                            width="100"
                            height="170"
                            viewBox="15 10 50 160"
                            fill="none"
                            stroke="#8A2BE2"
                            strokeWidth="12"
                        >
                            <path
                           
                                d="M40 10 C10 50 10 120 40 150"
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

                        {/* PERFECT RIGHT BRACKET */}
                        <svg
                            className="absolute -right-20 top-[105px] -translate-y-1/2 hidden md:block"
                            width="100"
                            height="180"
                            viewBox="5 25 50 160"
                            fill="none"
                            stroke="#8A2BE2"
                            strokeWidth="12"
                        >
                            <path
                                d="M10 20 C40 50 40 120 10 150"
                                strokeLinecap="round"
                            />
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
