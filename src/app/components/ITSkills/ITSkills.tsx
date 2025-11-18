import React from 'react';
import Image from "next/image";
import Container from "@/app/shared/Container/Container";
import { TbBrandOffice } from "react-icons/tb";
import { LuSparkles } from "react-icons/lu"; 
import { FaPalette, FaVideo, FaCube, FaVolumeUp, FaCamera, FaCode, FaMobileAlt, FaTools, FaMicrophone } from 'react-icons/fa';
import img2 from "../../../../public/img/computer.png"; 

const allSkills = [
    { icon: <FaPalette size={18} />, label: "Graphic Design", color: "text-red-500" },
    { icon: <FaVideo size={18} />, label: "Video Editing", color: "text-yellow-500" },
    { icon: <FaCube size={18} />, label: "Motion Design & 2D/3D Animation", color: "text-indigo-500" },
    { icon: <FaVolumeUp size={18} />, label: "Sound Design", color: "text-green-500" },
    { icon: <FaCamera size={18} />, label: "Cinematography", color: "text-red-500" },
    { icon: <LuSparkles size={18} />, label: "AI - Artificial Intelligence", color: "text-orange-500" },
    { icon: <FaCode size={18} />, label: "Web Design Development", color: "text-blue-500" },
    { icon: <FaMobileAlt size={18} />, label: "App Design Development", color: "text-pink-500" },
    { 
        icon: <TbBrandOffice size={18} />, 
        label: (
            <span>
                Microsoft Office
                <ul className="list-disc pl-5 mt-1 text-xs font-normal text-gray-200/90">
                    <li>Microsoft Word</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft PowerPoint</li>
                </ul>
            </span>
        ),
        color: "text-cyan-500" 
    },
    { icon: <FaTools size={18} />, label: "Audio & Video Studio Setup", color: "text-teal-500" },
    { icon: <FaMicrophone size={18} />, label: "Content Creation & Film Making", color: "text-purple-300" },
];

const ITSkills = () => {
    // Primary Purple Color
    const primaryPurple = "#4F0187";
    const lightPurple = "#8A2BE2";

    return (
        <Container>
            <div className="flex justify-center items-center py-10 md:py-20">
                <div 
                className="relative w-full max-w-[700px] pt-16 pb-8 px-6 shadow-2xl min-h-[600px] flex flex-col items-center justify-center"                 
                    style={{ 
                        borderRadius: '8rem',
                        background: `linear-gradient(145deg, ${lightPurple}, ${primaryPurple})`
                    }}
                >
                  
                    <div 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-16 flex items-center justify-center z-20"
                       
                    >
                        <div className="flex flex-col items-center justify-center -translate-y-1">
                            <Image
                                src={img2}
                                alt="IT Skills Icon"
                                width={130} 
                                height={130}
                                className="object-contain" 
                            />
                            <span className="text-xs font-bold text-gray-800 tracking-wider -mt-6 pl-2">
                                IT SKILLS
                            </span>
                        </div>
                    </div>

                    
                    {/* Forward Arrows >> */}
                    <span className="absolute top-20 right-10 text-white text-4xl font-bold z-10 ">
                        &raquo;&raquo;
                    </span>

                    {/* --- Skills List --- */}
                    <div className="space-y-4 pt-10 ">
                        {allSkills.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-4 text-white">
                                <div 
                                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/20`}
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <div className="text-sm font-medium pt-1">
                                    {skill.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ITSkills;