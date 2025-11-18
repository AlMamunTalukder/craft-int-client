"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const primaryPurple = "#4F0187";

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending
    setTimeout(() => {
      setIsLoading(false);
      Swal.fire({
        title: "সফল হয়েছে!",
        text: "আপনার বার্তাটি আমরা পেয়েছি। ধন্যবাদ!",
        icon: "success",
        confirmButtonColor: primaryPurple,
      });
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8  flex flex-col items-center justify-center">
      
      {/* --- Main Contact Card --- */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* --- LEFT SIDE: Contact Info (Dark Purple) --- */}
        <div className="md:w-2/5 bg-[#4F0187] p-5 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-white opacity-10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-white opacity-10 blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">যোগাযোগ করুন</h2>
            <p className="text-purple-100 mb-8 text-sm leading-relaxed">
              আপনার যেকোনো প্রশ্ন বা পরামর্শ আমাদের কাছে অত্যন্ত মূল্যবান। নিচের তথ্যের মাধ্যমে অথবা ফর্মটি পূরণ করে আমাদের সাথে যোগাযোগ করুন।
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100 text-sm uppercase tracking-wide">ফোন</h4>
                  <p className="text-white font-medium">+৮৮০ ১৭১১-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100 text-sm uppercase tracking-wide">ইমেইল</h4>
                  <p className="text-white font-medium">info@craftinstitute.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100 text-sm uppercase tracking-wide">ঠিকানা</h4>
                  <p className="text-white font-medium">নিমাইকাশারী, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ-১৪৩০</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="relative z-10 mt-12">
             <p className="text-purple-200 text-sm mb-4">সোশ্যাল মিডিয়া</p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center hover:bg-white hover:text-[#4F0187] transition-all duration-300"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center hover:bg-white hover:text-[#4F0187] transition-all duration-300"><FaWhatsapp /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center hover:bg-white hover:text-[#4F0187] transition-all duration-300"><FaYoutube /></a>
             </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: The Form (White) --- */}
        <div className="md:w-3/5 p-5 md:p-10 bg-white">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">একটি বার্তা পাঠান</h3>
          <p className="text-gray-500 mb-8 text-sm">আমরা যত দ্রুত সম্ভব আপনার বার্তার উত্তর দিব।</p>

          <form onSubmit={handleSendMessage} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-600 mb-2 transition-colors group-focus-within:text-[#4F0187]">নাম</label>
                <input 
                  type="text" 
                  required
                  placeholder="আপনার নাম"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#4F0187] focus:bg-white focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-600 mb-2 transition-colors group-focus-within:text-[#4F0187]">মোবাইল</label>
                <input 
                  type="text" 
                  required
                  placeholder="017..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#4F0187] focus:bg-white focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-600 mb-2 transition-colors group-focus-within:text-[#4F0187]">ইমেইল</label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#4F0187] focus:bg-white focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-600 mb-2 transition-colors group-focus-within:text-[#4F0187]">বার্তা</label>
              <textarea 
                rows={4}
                required
                placeholder="কিভাবে আমরা আপনাকে সাহায্য করতে পারি?"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#4F0187] focus:bg-white focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full md:w-auto px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2
                ${isLoading ? 'opacity-70 cursor-not-allowed bg-gray-400' : 'bg-[#4F0187]'}`}
              >
                {isLoading ? (
                  <span>পাঠানো হচ্ছে...</span>
                ) : (
                  <span>বার্তা পাঠান</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- Map Section (Simple & Clean) --- */}
      <div className="max-w-6xl w-full mt-12 rounded-3xl overflow-hidden shadow-lg h-[300px] border-4 border-white">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.65823456789!2d90.5!3d23.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzAwLjAiTiA5MMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          className=" transition-all duration-700"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactPage;