"use client";
import Container from "@/app/shared/Container/Container";

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-[#FFF7EF] mt-20">
      <Container>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md md:p-10 p-5">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#6B21A8">
            রেজিস্ট্রেশন ফরম
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* নাম */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                নাম
              </label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* মোবাইল নাম্বার */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                মোবাইল নাম্বার (ইংরেজি)
              </label>
              <input
                type="text"
                placeholder="01XXXXXXXXX"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* WhatsApp নাম্বার */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp নাম্বার (ইংরেজি)
              </label>
              <input
                type="text"
                placeholder="01XXXXXXXXX"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* ই-মেইল */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ই-মেইল
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* পেশা */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                পেশা
              </label>
              <input
                type="text"
                placeholder="আপনার পেশা লিখুন"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* ঠিকানা */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ঠিকানা
              </label>
              <textarea
                placeholder="আপনার ঠিকানা লিখুন"
                className="w-full border border-gray-300 rounded-md p-2 h-36 focus:outline-none focus:ring-1 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#6B21A8] text-white py-3 rounded-md"
              >
                সাবমিট করুন
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
