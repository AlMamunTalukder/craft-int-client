"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const primaryPurple = "#4F0187";
const lightPurple = "#8A2BE2";

const AdmissionForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      // Success Alert
      Swal.fire({
        title: 'আলহামদুলিল্লাহ!',
        text: 'ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।',
        icon: 'success',
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: primaryPurple,
      });

      form.reset(); // Clear the form after success
    } catch (error) {
      console.error("Error!", error);
      
      // Error Alert
      Swal.fire({
        title: 'দুঃখিত!',
        text: 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        icon: 'error',
        confirmButtonText: 'বন্ধ করুন',
        confirmButtonColor: '#d33',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-2 md:p-12">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900">
            ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট
          </h1>
          <p className="text-gray-600 font-medium">নিমাইকাশারী, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ-১৪৩০</p>
          
          <div className="py-4">
            <span className="inline-block border-2 border-purple-800 rounded-full px-8 py-2 text-lg font-bold text-purple-900 shadow-sm bg-purple-50">
              ভর্তি যাচাই ফর্ম
            </span>
          </div>

          <div className="text-sm md:text-base text-gray-700 mt-4 space-y-1">
            <p className="font-semibold text-purple-800">আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন</p>
            <p className="text-xs md:text-sm text-gray-500">
              এখানে নির্ভুল তথ্য প্রদান করুন। নিম্ন প্রদত্ত তথ্য অনুযায়ী শিক্ষার্থীর পড়াশোনার মান নির্ধারণ করা হবে, তাই তথ্য প্রদানে আপনার মনোযোগ আকর্ষণ করছি।
            </p>
          </div>

         
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- SECTION 1: STUDENT INFO --- */}
          <section className="bg-purple-50 p-2 md:p-6 rounded-xl border border-purple-100">
            <h2 className="text-xl font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2 inline-block">
              শিক্ষার্থীর প্রাথমিক তথ্য
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">শিক্ষার্থীর নাম:</label>
                <input name="StudentName" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">বয়স:</label>
                <input name="Age" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">যে ক্লাসে ভর্তি হতে আগ্রহী:</label>
                <input name="Class" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ববর্তী প্রতিষ্ঠানের নাম:</label>
                <input name="PrevSchool" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ:</label>
                <input name="PrevClass" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">সর্বশেষ পরীক্ষায় প্রাপ্ত জিপিএ:</label>
                <input name="GPA" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ববর্তী শ্রেণির রোল:</label>
                <input name="Roll" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
            </div>
          </section>

          {/* --- SECTION 2: GUARDIAN INFO --- */}
          <section className="bg-purple-50 p-2 md:p-6 rounded-xl border border-purple-100">
            <h2 className="text-xl font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2 inline-block">
              অভিভাবকের প্রাথমিক তথ্য
            </h2>
            
            {/* Father */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
              <div className="md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">পিতার নাম:</label>
                <input name="FatherName" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">পেশা:</label>
                <input name="FatherJob" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">শিক্ষাগত যোগ্যতা:</label>
                <input name="FatherEdu" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল:</label>
                <input name="FatherMobile" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
            </div>

            {/* Mother */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
              <div className="md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">মাতার নাম:</label>
                <input name="MotherName" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">পেশা:</label>
                <input name="MotherJob" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">শিক্ষাগত যোগ্যতা:</label>
                <input name="MotherEdu" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল:</label>
                <input name="MotherMobile" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ঠিকানা:</label>
              <textarea name="Address" rows={2} className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" placeholder="বর্তমান এবং স্থায়ী ঠিকানা..."></textarea>
            </div>
          </section>

          {/* --- SECTION 3: FAMILY INFO --- */}
          <section className="bg-white p-2 md:p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-purple-900 border-b-2 border-purple-200 inline-block pb-1 mb-6">
              পারিবারিক তথ্য ও পরিবেশ
            </h2>

            <div className="space-y-4 text-gray-800">
              {/* Question 1 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ আপনার পরিবারের উপার্জন ১০০% হালাল কি?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <label className="flex items-center gap-1"><input type="radio" name="HalalIncome" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
                  <label className="flex items-center gap-1"><input type="radio" name="HalalIncome" value="No" className="accent-purple-600" /> না</label>
                </div>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ পরিবারের উপার্জনক্ষম সদস্য কতজন?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <label className="flex items-center gap-1"><input type="radio" name="Earners" value="1" className="accent-purple-600" /> ১ জন</label>
                  <label className="flex items-center gap-1"><input type="radio" name="Earners" value="2" className="accent-purple-600" /> ২ জন</label>
                  <label className="flex items-center gap-1"><input type="radio" name="Earners" value="3+" className="accent-purple-600" /> ৩ জন+</label>
                </div>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="ParentsPrayer" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
                   <label className="flex items-center gap-1"><input type="radio" name="ParentsPrayer" value="No" className="accent-purple-600" /> না</label>
                </div>
              </div>

              {/* Question 4 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত আছে কি?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="Addiction" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
                   <label className="flex items-center gap-1"><input type="radio" name="Addiction" value="No" className="accent-purple-600" /> না</label>
                </div>
              </div>

              {/* Question 5 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ বাসায় টেলিভিশন আছে কি?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="TV" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
                   <label className="flex items-center gap-1"><input type="radio" name="TV" value="No" className="accent-purple-600" /> না</label>
                </div>
              </div>

              {/* Question 6 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
                   <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="No" className="accent-purple-600" /> না</label>
                   <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="Sometimes" className="accent-purple-600" /> মাঝেমাঝে</label>
                </div>
              </div>

              {/* Question 7 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ পরিবারে সদস্যদের মধ্যে ঝগড়া বিবাদ কেমন হয়?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Never" className="accent-purple-600" /> হয় না</label>
                   <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Often" className="accent-purple-600" /> প্রায়শই হয়</label>
                   <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Sometimes" className="accent-purple-600" /> মাঝেমাঝে</label>
                </div>
              </div>

              {/* Question 8 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <span className="font-medium">❖ পরিবারের সদস্যরা পর্দা পালন করে কি?</span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
                   <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="No" className="accent-purple-600" /> না</label>
                   <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="Trying" className="accent-purple-600" /> চেষ্টা করা হয়</label>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 4: BEHAVIOR INFO --- */}
          <section className="bg-white p-2 md:p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-purple-900 border-b-2 border-purple-200 inline-block pb-1 mb-6">
              ভর্তিচ্ছু শিক্ষার্থীর আচরণ সম্পর্কিত তথ্য
            </h2>

            <div className="space-y-4 text-gray-800">
              {/* Behavior 1 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ আপনার সন্তান কি পড়তে পারে?</span>
                <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                  <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Quran" className="accent-purple-600" /> কুরআন</label>
                  <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Ampara" className="accent-purple-600" /> আম্মাপারা</label>
                  <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Qaida" className="accent-purple-600" /> কায়েদা</label>
                  <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="None" className="accent-purple-600" /> কোনটিই নয়</label>
                </div>
              </div>

              {/* Behavior 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium whitespace-nowrap">❖ দৈনিক কত সময় মোবাইল ব্যবহার করে?</span>
                <input name="MobileUsage" type="text" placeholder="(লিখুন)" className="border-b border-gray-400 focus:outline-none flex-grow text-purple-800 px-2" />
              </div>

              {/* Behavior 3 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ আপনার সন্তানের আচরণ কেমন?</span>
                <div className="flex gap-3 mt-2 md:mt-0">
                  <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
                  <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
                  <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
                </div>
              </div>

              {/* Behavior 4 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ আপনার সন্তান পিতা মাতার কথা শোনে?</span>
                <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                  <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Not At All" className="accent-purple-600" /> মোটেই শোনে না</label>
                  <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Somewhat" className="accent-purple-600" /> মোটামুটি শোনে</label>
                  <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Fully" className="accent-purple-600" /> পুরোপুরি শোনে</label>
                </div>
              </div>

              {/* Behavior 5 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ পরিবারের বড়দের সাথে ওর আচরণ কেমন?</span>
                <div className="flex gap-3 mt-2 md:mt-0">
                  <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
                  <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
                  <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
                </div>
              </div>

              {/* Behavior 6 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ পরিবারের ছোটদের সাথে ওর আচরণ কেমন?</span>
                <div className="flex gap-3 mt-2 md:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
                   <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
                   <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
                </div>
              </div>

              {/* Behavior 7 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
                <span className="font-medium">❖ সন্তান কি মিথ্যা বলে? বা জেদ করে?</span>
                <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Often" className="accent-purple-600" /> প্রায়ই করে</label>
                   <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Sometimes" className="accent-purple-600" /> মাঝেমধ্যে করে</label>
                   <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Rarely" className="accent-purple-600" /> খুব কম করে</label>
                   <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Never" className="accent-purple-600" /> করে না</label>
                </div>
              </div>

              {/* Behavior 8 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <span className="font-medium">❖ আপনার সন্তানকে পড়াশোনার পাশাপাশি কোন দিকটিতে বেশি উন্নতি করতে চান?</span>
                <div className="flex gap-3 mt-2 md:mt-0">
                   <label className="flex items-center gap-1"><input type="radio" name="ImprovementGoal" value="Manners" className="accent-purple-600" /> আদব আখলাক</label>
                   <label className="flex items-center gap-1"><input type="radio" name="ImprovementGoal" value="Physical" className="accent-purple-600" /> শারীরিক দক্ষতা</label>
                </div>
              </div>

            </div>
          </section>

          {/* --- SUBMIT BUTTON --- */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isLoading}
              style={{ background: `linear-gradient(to right, ${primaryPurple}, ${lightPurple})` }}
              className={`text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition transform duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'}`}
            >
              {isLoading ? "পাঠানো হচ্ছে..." : "সাবমিট করুন"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;