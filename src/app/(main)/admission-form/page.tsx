/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import Swal from "sweetalert2";

// const primaryPurple = "#4F0187";
// const lightPurple = "#8A2BE2";

// const AdmissionForm = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   // ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE
//   const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       await fetch(SCRIPT_URL, {
//         method: "POST",
//         body: formData,
//       });

//       // Success Alert
//       Swal.fire({
//         title: 'আলহামদুলিল্লাহ!',
//         text: 'ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।',
//         icon: 'success',
//         confirmButtonText: 'ঠিক আছে',
//         confirmButtonColor: primaryPurple,
//       });

//       form.reset(); // Clear the form after success
//     } catch (error) {
//       console.error("Error!", error);
      
//       // Error Alert
//       Swal.fire({
//         title: 'দুঃখিত!',
//         text: 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
//         icon: 'error',
//         confirmButtonText: 'বন্ধ করুন',
//         confirmButtonColor: '#d33',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-2 md:p-12">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-8 space-y-2">
//           <h1 className="text-3xl md:text-4xl font-bold text-purple-900">
//             ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট
//           </h1>
//           <p className="text-gray-600 text-sm md:text-base ">নিমাইকাশারী, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ-১৪৩০</p>
          
//           <div className="py-4">
//             <span className="inline-block border-2 border-purple-800 rounded-full px-8 py-2 text-lg font-bold text-purple-900 shadow-sm bg-purple-50">
//               ভর্তি যাচাই ফর্ম
//             </span>
//           </div>

//           <div className="text-sm md:text-base text-gray-700 mt-4 space-y-1">
//             <p className="font-semibold text-purple-800">আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন</p>
//             <p className="text-xs md:text-sm text-gray-500">
//               এখানে নির্ভুল তথ্য প্রদান করুন। নিম্ন প্রদত্ত তথ্য অনুযায়ী শিক্ষার্থীর পড়াশোনার মান নির্ধারণ করা হবে, তাই তথ্য প্রদানে আপনার মনোযোগ আকর্ষণ করছি।
//             </p>
//           </div>

         
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
          
//           {/* --- SECTION 1: STUDENT INFO --- */}
//           <section className="bg-purple-50 p-2 md:p-6 rounded-xl border border-purple-100">
//             <h2 className="text-xl font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2 inline-block">
//               শিক্ষার্থীর প্রাথমিক তথ্য
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">শিক্ষার্থীর নাম:</label>
//                 <input name="StudentName" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">বয়স:</label>
//                 <input name="Age" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">যে ক্লাসে ভর্তি হতে আগ্রহী:</label>
//                 <input name="Class" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ববর্তী প্রতিষ্ঠানের নাম:</label>
//                 <input name="PrevSchool" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ:</label>
//                 <input name="PrevClass" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">সর্বশেষ পরীক্ষায় প্রাপ্ত জিপিএ:</label>
//                 <input name="GPA" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-6">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ববর্তী শ্রেণির রোল:</label>
//                 <input name="Roll" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//             </div>
//           </section>

//           {/* --- SECTION 2: GUARDIAN INFO --- */}
//           <section className="bg-purple-50 p-2 md:p-6 rounded-xl border border-purple-100">
//             <h2 className="text-xl font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2 inline-block">
//               অভিভাবকের প্রাথমিক তথ্য
//             </h2>
            
//             {/* Father */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
//               <div className="md:col-span-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পিতার নাম:</label>
//                 <input name="FatherName" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পেশা:</label>
//                 <input name="FatherJob" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">শিক্ষাগত যোগ্যতা:</label>
//                 <input name="FatherEdu" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">মোবাইল:</label>
//                 <input name="FatherMobile" required type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//             </div>

//             {/* Mother */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
//               <div className="md:col-span-4">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">মাতার নাম:</label>
//                 <input name="MotherName" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">পেশা:</label>
//                 <input name="MotherJob" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">শিক্ষাগত যোগ্যতা:</label>
//                 <input name="MotherEdu" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//               <div className="md:col-span-3">
//                 <label className="block text-sm font-bold text-gray-700 mb-1">মোবাইল:</label>
//                 <input name="MotherMobile" type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">ঠিকানা:</label>
//               <textarea name="Address" rows={2} className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-400" placeholder="বর্তমান এবং স্থায়ী ঠিকানা..."></textarea>
//             </div>
//           </section>

//           {/* --- SECTION 3: FAMILY INFO --- */}
//           <section className="bg-white p-2 md:p-6 rounded-xl border border-gray-200 shadow-sm">
//             <h2 className="text-xl font-bold text-purple-900 border-b-2 border-purple-200 inline-block pb-1 mb-6">
//               পারিবারিক তথ্য ও পরিবেশ
//             </h2>

//             <div className="space-y-4 text-gray-800">
//               {/* Question 1 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ আপনার পরিবারের উপার্জন ১০০% হালাল কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="HalalIncome" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="HalalIncome" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 2 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ পরিবারের উপার্জনক্ষম সদস্য কতজন?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="Earners" value="1" className="accent-purple-600" /> ১ জন</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Earners" value="2" className="accent-purple-600" /> ২ জন</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Earners" value="3+" className="accent-purple-600" /> ৩ জন+</label>
//                 </div>
//               </div>

//               {/* Question 3 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="ParentsPrayer" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="ParentsPrayer" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 4 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত আছে কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="Addiction" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Addiction" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 5 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ বাসায় টেলিভিশন আছে কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="TV" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="TV" value="No" className="accent-purple-600" /> না</label>
//                 </div>
//               </div>

//               {/* Question 6 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="No" className="accent-purple-600" /> না</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="QuranRecitation" value="Sometimes" className="accent-purple-600" /> মাঝেমাঝে</label>
//                 </div>
//               </div>

//               {/* Question 7 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ পরিবারে সদস্যদের মধ্যে ঝগড়া বিবাদ কেমন হয়?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Never" className="accent-purple-600" /> হয় না</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Often" className="accent-purple-600" /> প্রায়শই হয়</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Quarrels" value="Sometimes" className="accent-purple-600" /> মাঝেমাঝে</label>
//                 </div>
//               </div>

//               {/* Question 8 */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                 <span className="font-bold">❖ পরিবারের সদস্যরা পর্দা পালন করে কি?</span>
//                 <div className="flex flex-col md:flex-row gap-4 mt-2 sm:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="Yes" className="accent-purple-600" /> হ্যাঁ</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="No" className="accent-purple-600" /> না</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="Purdah" value="Trying" className="accent-purple-600" /> চেষ্টা করা হয়</label>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* --- SECTION 4: BEHAVIOR INFO --- */}
//           <section className="bg-white p-2 md:p-6 rounded-xl border border-gray-200 shadow-sm">
//             <h2 className="text-xl font-bold text-purple-900 border-b-2 border-purple-200 inline-block pb-1 mb-6">
//               ভর্তিচ্ছু শিক্ষার্থীর আচরণ সম্পর্কিত তথ্য
//             </h2>

//             <div className="space-y-4 text-gray-800">
//               {/* Behavior 1 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ আপনার সন্তান কি পড়তে পারে?</span>
//                 <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Quran" className="accent-purple-600" /> কুরআন</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Ampara" className="accent-purple-600" /> আম্মাপারা</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="Qaida" className="accent-purple-600" /> কায়েদা</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ReadingAbility" value="None" className="accent-purple-600" /> কোনটিই নয়</label>
//                 </div>
//               </div>

//               {/* Behavior 2 */}
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold whitespace-nowrap">❖ দৈনিক কত সময় মোবাইল ব্যবহার করে?</span>
//                 <input name="MobileUsage" type="text" placeholder="(লিখুন)" className="border-b border-gray-400 focus:outline-none flex-grow text-purple-800 px-2" />
//               </div>

//               {/* Behavior 3 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ আপনার সন্তানের আচরণ কেমন?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="GeneralBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
//                 </div>
//               </div>

//               {/* Behavior 4 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ আপনার সন্তান পিতা মাতার কথা শোনে?</span>
//                 <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Not At All" className="accent-purple-600" /> মোটেই শোনে না</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Somewhat" className="accent-purple-600" /> মোটামুটি শোনে</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="Obedience" value="Fully" className="accent-purple-600" /> পুরোপুরি শোনে</label>
//                 </div>
//               </div>

//               {/* Behavior 5 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ পরিবারের বড়দের সাথে ওর আচরণ কেমন?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                   <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
//                   <label className="flex items-center gap-1"><input type="radio" name="ElderBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
//                 </div>
//               </div>

//               {/* Behavior 6 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ পরিবারের ছোটদের সাথে ওর আচরণ কেমন?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Average" className="accent-purple-600" /> মোটামুটি</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Good" className="accent-purple-600" /> ভালো</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="YoungerBehavior" value="Very Good" className="accent-purple-600" /> অনেক ভালো</label>
//                 </div>
//               </div>

//               {/* Behavior 7 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200 pb-2">
//                 <span className="font-bold">❖ সন্তান কি মিথ্যা বলে? বা জেদ করে?</span>
//                 <div className="flex flex-col md:flex-row flex-wrap gap-3 mt-2 md:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Often" className="accent-purple-600" /> প্রায়ই করে</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Sometimes" className="accent-purple-600" /> মাঝেমধ্যে করে</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Rarely" className="accent-purple-600" /> খুব কম করে</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="LyingStubbornness" value="Never" className="accent-purple-600" /> করে না</label>
//                 </div>
//               </div>

//               {/* Behavior 8 */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//                 <span className="font-bold">❖ আপনার সন্তানকে পড়াশোনার পাশাপাশি কোন দিকটিতে বেশি উন্নতি করতে চান?</span>
//                 <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
//                    <label className="flex items-center gap-1"><input type="radio" name="ImprovementGoal" value="Manners" className="accent-purple-600" /> আদব আখলাক</label>
//                    <label className="flex items-center gap-1"><input type="radio" name="ImprovementGoal" value="Physical" className="accent-purple-600" /> শারীরিক দক্ষতা</label>
//                 </div>
//               </div>

//             </div>
//           </section>

//           {/* --- SUBMIT BUTTON --- */}
//           <div className="text-center pt-6">
//             <button
//               type="submit"
//               disabled={isLoading}
//               style={{ background: `linear-gradient(to right, ${primaryPurple}, ${lightPurple})` }}
//               className={`text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition transform duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'}`}
//             >
//               {isLoading ? "পাঠানো হচ্ছে..." : "সাবমিট করুন"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdmissionForm;



"use client";

import React, { useState } from "react";
import { 
  User, 
  Users, 
  Home, 
  Activity, 
  Send, 
  Phone, 
  MapPin,
  Heart,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import logoicon from "../../../../public/img/logoicon.png";

// --- Custom Alert Modal Component ---
const CustomAlert = ({ isOpen, type, title, message, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 transform transition-all scale-100 animate-bounceIn text-center relative overflow-hidden">
        
        {/* Decorative Background Blob */}
        <div className={`absolute top-0 left-0 w-full h-2 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>

        {/* Icon */}
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {type === 'success' ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
        </div>

        {/* Content */}
        <h3 className={`text-2xl font-bold mb-2 ${type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
          {title}
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          {message}
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg ${type === 'success' ? 'bg-green-600 hover:bg-green-700 shadow-green-200' : 'bg-red-600 hover:bg-red-700 shadow-red-200'}`}
        >
          {type === 'success' ? 'ঠিক আছে' : 'বন্ধ করুন'}
        </button>
      </div>
    </div>
  );
};

const AdmissionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertState, setAlertState] = useState({ isOpen: false, type: 'success', title: '', message: '' });

  // ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwoJZ2zwXROTZoxsXH2eNutjwrQ1FrZe0rm4p8dAtBpROImMRPc1hcyjnX4Vd43nFzF/exec"; 

  const showAlert = (type: string, title: string, message: string) => {
    setAlertState({ isOpen: true, type, title, message });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

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

      // Success Alert using Custom Component
      showAlert('success', 'আলহামদুলিল্লাহ!', 'ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।');

      form.reset(); // Clear the form after success
    } catch (error) {
      console.error("Error!", error);
      
      // Error Alert using Custom Component
      showAlert('error', 'দুঃখিত!', 'সার্ভারে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setIsLoading(false);
    }
  };

  // Reusable Input Component for cleaner code
  const InputField = ({ label, name, type = "text", required = false, placeholder = "", width = "col-span-1" }: any) => (
    <div className={`${width} group`}>
      <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-purple-700 transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        name={name} 
        required={required} 
        type={type} 
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none text-gray-800 placeholder-gray-400" 
      />
    </div>
  );

  // Reusable Radio Group Component
  const RadioGroup = ({ label, name, options }: any) => (
    <div className="bg-white p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
      <label className="block text-sm font-bold text-gray-800 mb-3 border-b border-dashed border-gray-200 pb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt: any) => (
          <label key={opt.val} className="relative cursor-pointer group">
            <input type="radio" name={name} value={opt.val} className="peer sr-only" />
            <div className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-sm font-medium transition-all
              peer-checked:bg-purple-600 peer-checked:text-white peer-checked:border-purple-600 peer-checked:shadow-lg
              group-hover:border-purple-300">
              {opt.text}
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-10 px-4 md:px-8 relative overflow-hidden">
      
      {/* Custom Alert Component */}
      <CustomAlert 
        isOpen={alertState.isOpen} 
        type={alertState.type} 
        title={alertState.title} 
        message={alertState.message} 
        onClose={closeAlert} 
      />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-[#4F0187] via-[#6D28D9] to-[#8A2BE2] rounded-b-[50px] md:rounded-b-[100px] z-0"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* --- HEADER CARD --- */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center mb-8 border-b-4 border-[#F300E7]">
          <div className="w-32 h-32 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Image src={logoicon} alt="img" className="h-24 w-16"/>
            {/* <School size={40} className="text-purple-700" /> */}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm md:text-base font-medium mb-6">
            <MapPin size={16} />
            <p>নিমাইকাশারী, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ-১৪৩০</p>
          </div>
          
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-8 py-3 bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-center justify-center space-x-2 shadow-sm">
              <span className="text-purple-900 font-bold text-lg">ভর্তি যাচাই ফর্ম</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl text-sm md:text-base text-gray-700">
            <p className="font-bold text-orange-800 mb-1 flex items-center justify-center gap-2">
               <Heart size={16} className="fill-orange-600 text-orange-600" />
               আল্লাহকে সাক্ষী রেখে সঠিক তথ্য প্রদান করুন
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              এখানে নির্ভুল তথ্য প্রদান করুন। নিম্ন প্রদত্ত তথ্য অনুযায়ী শিক্ষার্থীর পড়াশোনার মান নির্ধারণ করা হবে।
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* --- SECTION 1: STUDENT INFO --- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-100 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600"><User size={20} /></div>
              <h2 className="text-xl font-bold text-purple-900">শিক্ষার্থীর প্রাথমিক তথ্য</h2>
            </div>
            
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              <InputField width="md:col-span-6" label="শিক্ষার্থীর নাম" name="StudentName" required placeholder="বাংলায় পুরো নাম লিখুন" />
              <InputField width="md:col-span-2" label="বয়স" name="Age" placeholder="যেমন: ১০" />
              <InputField width="md:col-span-4" label="আগ্রহী শ্রেণি" name="Class" placeholder="ভর্তি হতে ইচ্ছুক শ্রেণি" />
              
              <InputField width="md:col-span-6" label="পূর্ববর্তী প্রতিষ্ঠানের নাম" name="PrevSchool" placeholder="আগের স্কুলের নাম" />
              <InputField width="md:col-span-6" label="পূর্ব অধ্যায়নকৃত শ্রেণি/বিভাগ" name="PrevClass" placeholder="কোন ক্লাসে পড়ত" />
              
              <InputField width="md:col-span-6" label="সর্বশেষ পরীক্ষায় প্রাপ্ত জিপিএ" name="GPA" placeholder="GPA Score" />
              <InputField width="md:col-span-6" label="পূর্ববর্তী শ্রেণির রোল" name="Roll" placeholder="ক্লাস রোল" />
            </div>
          </div>

          {/* --- SECTION 2: GUARDIAN INFO --- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600"><Users size={20} /></div>
              <h2 className="text-xl font-bold text-blue-900">অভিভাবকের প্রাথমিক তথ্য</h2>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              {/* Father Info */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                 <div className="md:col-span-12 pb-2 border-b border-gray-200 mb-2">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">পিতার তথ্য</h3>
                 </div>
                 <InputField width="md:col-span-4" label="পিতার নাম" name="FatherName" required />
                 <InputField width="md:col-span-3" label="পেশা" name="FatherJob" />
                 <InputField width="md:col-span-2" label="শিক্ষাগত যোগ্যতা" name="FatherEdu" />
                 <InputField width="md:col-span-3" label="মোবাইল" name="FatherMobile" required placeholder="017xxxxxxxx" />
              </div>

              {/* Mother Info */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                 <div className="md:col-span-12 pb-2 border-b border-gray-200 mb-2">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">মাতার তথ্য</h3>
                 </div>
                 <InputField width="md:col-span-4" label="মাতার নাম" name="MotherName" />
                 <InputField width="md:col-span-3" label="পেশা" name="MotherJob" />
                 <InputField width="md:col-span-2" label="শিক্ষাগত যোগ্যতা" name="MotherEdu" />
                 <InputField width="md:col-span-3" label="মোবাইল" name="MotherMobile" />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">ঠিকানা</label>
                <textarea name="Address" rows={2} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" placeholder="বর্তমান এবং স্থায়ী ঠিকানা বিস্তারিত লিখুন..."></textarea>
              </div>
            </div>
          </div>

          {/* --- SECTION 3: FAMILY INFO --- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-green-600"><Home size={20} /></div>
              <h2 className="text-xl font-bold text-green-900">পারিবারিক তথ্য ও পরিবেশ</h2>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <RadioGroup 
                label="❖ আপনার পরিবারের উপার্জন ১০০% হালাল কি?" 
                name="HalalIncome"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label="❖ পরিবারের উপার্জনক্ষম সদস্য কতজন?" 
                name="Earners"
                options={[{val:'1', text:'১ জন'}, {val:'2', text:'২ জন'}, {val:'3+', text:'৩ জন+'}]}
              />
              <RadioGroup 
                label="❖ পিতা-মাতা নিয়মিত ৫ ওয়াক্ত নামাজ পড়েন কি?" 
                name="ParentsPrayer"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label="❖ পরিবারের কোন সদস্য মাদক/নেশায় আক্রান্ত আছে কি?" 
                name="Addiction"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label="❖ বাসায় টেলিভিশন আছে কি?" 
                name="TV"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}]}
              />
              <RadioGroup 
                label="❖ বাসায় নিয়মিত কুরআন তিলাওয়াত করা হয়?" 
                name="QuranRecitation"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Sometimes', text:'মাঝেমাঝে'}]}
              />
              <RadioGroup 
                label="❖ পরিবারে সদস্যদের মধ্যে ঝগড়া বিবাদ কেমন হয়?" 
                name="Quarrels"
                options={[{val:'Never', text:'হয় না'}, {val:'Often', text:'প্রায়শই হয়'}, {val:'Sometimes', text:'মাঝেমাঝে'}]}
              />
              <RadioGroup 
                label="❖ পরিবারের সদস্যরা পর্দা পালন করে কি?" 
                name="Purdah"
                options={[{val:'Yes', text:'হ্যাঁ'}, {val:'No', text:'না'}, {val:'Trying', text:'চেষ্টা করা হয়'}]}
              />
            </div>
          </div>

          {/* --- SECTION 4: BEHAVIOR INFO --- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-rose-50 px-6 py-4 border-b border-rose-100 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-rose-600"><Activity size={20} /></div>
              <h2 className="text-xl font-bold text-rose-900">শিক্ষার্থীর আচরণ ও দক্ষতা</h2>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              
               {/* Reading Ability */}
              <RadioGroup 
                label="❖ আপনার সন্তান কি পড়তে পারে?" 
                name="ReadingAbility"
                options={[
                  {val:'Quran', text:'কুরআন'}, 
                  {val:'Ampara', text:'আম্মাপারা'}, 
                  {val:'Qaida', text:'কায়েদা'},
                  {val:'None', text:'কোনটিই নয়'}
                ]}
              />

              {/* Mobile Usage */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 hover:border-rose-200 transition-all">
                <label className="block text-sm font-bold text-gray-800 mb-2">❖ দৈনিক কত সময় মোবাইল ব্যবহার করে?</label>
                <div className="relative">
                    <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                    <input name="MobileUsage" type="text" placeholder="সময় উল্লেখ করুন (যেমন: ১ ঘণ্টা)" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RadioGroup 
                  label="❖ আপনার সন্তানের আচরণ কেমন?" 
                  name="GeneralBehavior"
                  options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]}
                />
                 <RadioGroup 
                  label="❖ সন্তান পিতা মাতার কথা শোনে?" 
                  name="Obedience"
                  options={[{val:'Not At All', text:'মোটেই শোনে না'}, {val:'Somewhat', text:'মোটামুটি'}, {val:'Fully', text:'পুরোপুরি'}]}
                />
                 <RadioGroup 
                  label="❖ পরিবারের বড়দের সাথে আচরণ কেমন?" 
                  name="ElderBehavior"
                  options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]}
                />
                 <RadioGroup 
                  label="❖ পরিবারের ছোটদের সাথে আচরণ কেমন?" 
                  name="YoungerBehavior"
                  options={[{val:'Average', text:'মোটামুটি'}, {val:'Good', text:'ভালো'}, {val:'Very Good', text:'অনেক ভালো'}]}
                />
                <RadioGroup 
                  label="❖ সন্তান কি মিথ্যা বলে? বা জেদ করে?" 
                  name="LyingStubbornness"
                  options={[{val:'Often', text:'প্রায়ই'}, {val:'Sometimes', text:'মাঝেমধ্যে'}, {val:'Rarely', text:'খুব কম'}, {val:'Never', text:'করে না'}]}
                />
                <RadioGroup 
                  label="❖ কোন দিকটিতে বেশি উন্নতি চান?" 
                  name="ImprovementGoal"
                  options={[{val:'Manners', text:'আদব আখলাক'}, {val:'Physical', text:'শারীরিক দক্ষতা'}]}
                />
              </div>

            </div>
          </div>

          {/* --- SUBMIT BUTTON --- */}
          <div className="pt-8 pb-20 flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`
                group relative px-10 py-4 rounded-full font-bold text-white text-lg shadow-xl 
                bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] 
                hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1 
                active:scale-95 transition-all duration-300 overflow-hidden
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
              <span className="relative flex items-center gap-3">
                {isLoading ? (
                   <>প্রসেসিং হচ্ছে...</>
                ) : (
                   <> <Send size={20} /> জমা দিন </>
                )}
              </span>
            </button>
          </div>

        </form>
      </div>
      
      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-bounceIn {
          animation: bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

export default AdmissionForm;