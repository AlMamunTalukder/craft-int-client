"use client";
import React from 'react';
import { Academicicon, IslamicKnowledgeIcon, Languageicon } from "@/app/shared/Icons/Icons";


export default function CategoriesSection() {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-10">


      {/* --- Bottom Boxes --- */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Islamic Knowledge */}
        <div className="bg-gradient-to-br from-violet-700 to-purple-500 rounded-2xl p-6 text-white shadow-lg flex flex-col gap-4">
          <div className="w-12 h-12 ">
            <IslamicKnowledgeIcon />
          </div>
          <h2 className="text-sm font-semibold tracking-wide mt-3">ISLAMIC KNOWLEDGE</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            ইসলামের যাবতীয় মৌলিক জ্ঞান যেমনঃ ইসলামী আকিদা, কুরআন ও হাদিস শিক্ষা, নামাজ শিক্ষা,
            প্রয়োজনীয় মাসলা-মাসআলা, হালাল হারাম ও মাসনূন দু’আ ও দরুদ ইত্যাদি।
          </p>
        </div>

        {/* Academic Knowledge */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-400 rounded-2xl p-6 text-white shadow-lg flex flex-col gap-4">
          <div className="w-14 h-14">
            <Academicicon />
          </div>
          <h2 className="text-sm font-semibold tracking-wide">ACADEMIC KNOWLEDGE</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            বাংলাদেশ মাদ্রাসা শিক্ষাবোর্ড এবং জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তকের আলোকে এটির সাজানো মডেল।
          </p>
        </div>

        {/* Languages */}
        <div className="bg-gradient-to-br from-purple-700 to-violet-500 rounded-2xl p-6 text-white shadow-lg flex flex-col gap-4">
          <div className="w-14 h-14">
            <Languageicon />
          </div>
          <h2 className="text-sm font-semibold tracking-wide">LANGUAGES</h2>
          <p className="text-sm opacity-90 leading-relaxed">
            বিশুদ্ধ উচ্চারণে, সাবলীলভাবে, প্রমিত বাংলায় এবং বিট্রিশ ও আরবদের মত করে, ইংরেজি ও আরবিতে অর্নগল কথা বলা, লেখা পড়া এবং শোনার দক্ষতা নিশ্চিত করা।
          </p>
        </div>

      </div>
    </div>
  );
}



