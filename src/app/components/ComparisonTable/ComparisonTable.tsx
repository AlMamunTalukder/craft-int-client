// components/ComparisonTable.tsx

import Container from "@/app/shared/Container/Container";

const ComparisonTable = () => {
  const data = [
    { feature: "লাইভ ক্লাস", our: true, others: true },
    { feature: "প্রব্লেম সলভিং ক্লাস", our: true, others: false },
    { feature: "প্র্যাক্টিস ক্লাস", our: true, others: false },
    { feature: "স্পেশাল ক্লাস", our: true, others: false },
    { feature: "প্রেজেন্টেশন রিভিউ ক্লাস", our: true, others: false },
    { feature: "৩০০০ মিনিট ভিডিও প্রেজেন্টেশন", our: true, others: false },
    { feature: "২৪ ঘন্টা গ্রুপ সাপোর্ট", our: true, others: false },
    { feature: "সার্টিফিকেট প্রদান", our: true, others: true },
    { feature: "আমাদের সাথে কাজ করার সুযোগ", our: true, others: false },
    { feature: "ইনকামের ফ্রেমে সহযোগিতা", our: true, others: false },
    { feature: "কোর্স শেষে লাইফটাইম সাপোর্ট", our: true, others: false },
  ];

  return (
    <div className="bg-[#fff6ef] py-20 mt-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#4F0187] mb-5">
          আমাদের সাথে অন্যান্য কোর্সের পার্থক্য
        </h2>

        <div className="overflow-x-auto border border-gray-200 rounded-md">
          <table className="w-full text-center bg-white rounded-md overflow-hidden">
            <thead className="bg-[#4F0187] text-white">
              <tr>
                <th className="py-3 px-4 text-sm md:text-base font-semibold border-b border-gray-300">
                  কোর্সে যা রয়েছে
                </th>
                <th className="py-3 px-4 text-sm md:text-base font-semibold border-b border-gray-300">
                  আমাদের কোর্স
                </th>
                <th className="py-3 px-4 text-sm md:text-base font-semibold border-b border-gray-300">
                  অন্যান্য কোর্স
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 even:bg-gray-50 text-sm md:text-base"
                >
                  <td className="py-3 px-4">{row.feature}</td>
                  <td className="py-3 px-4">
                    {row.our ? (
                      <span className="text-green-600 text-xl">✔</span>
                    ) : (
                      <span className="text-red-600 text-xl">✘</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {row.others ? (
                      <span className="text-green-600 text-xl">✔</span>
                    ) : (
                      <span className="text-red-600 text-xl">✘</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ComparisonTable;
