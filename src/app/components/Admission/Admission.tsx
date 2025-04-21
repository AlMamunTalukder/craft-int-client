"use client";
import Container from "@/app/shared/Container/Container";

const Admission = () => {
  return (
    <div id="admission" className="py-20 bg-[#FFF7EF] mt-20">
      <Container>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md md:p-10 p-5">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#6B21A8">
            ভর্তি নিশ্চিত করতে টাকা পাঠিয়ে ফরমটি পূরণ করুন ।
          </h2>
          <div className="text-center mb-10">
            <p>নিয়মিত কোর্স ফি- ৮,০০০ টাকা</p>
            <p>উচ্চারণ ও ভয়েস আর্টিস্ট কোর্স – ৩,০৬০|= (খরচ সহ)</p>
            <p>শুধু উচ্চারণ কোর্স – ২,০৪০|= (খরচ সহ)</p>
            <p> 01830327579 — বিকাশ (এজেন্ট – ক্যাশ আউট)</p>
            <p>01821181333 — নগদ/রকেট (পার্সোনাল – সেন্ড মানি) </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="মোবাইল নাম্বার (ইংরেজি)"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="টাকার পরিমান লিখুন"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="টাকা পাঠানোর মাধ্যম (বিকাশ/নগদ/রকেট)"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="যে নাম্বার থেকে টাকা পাঠিয়েছেন সেটি লেখুন"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              />
            </div>

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

export default Admission;
