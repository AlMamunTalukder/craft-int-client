import {
  GraduationCap,
  CreditCard,
  Home,
  Coins,
  Banknote,
  Hamburger,
  CircleDollarSign,
} from "lucide-react"

const feeData = [
  {
    id: 1,
    className: "প্রি ওয়ান - দ্বিতীয়",
    category: "জেনারেল",
    fees: [
      { label: "ভর্তি ফি", main: "১২,০০০/-", amount: "৯,০০০/-", icon: GraduationCap },
      { label: "মাসিক বেতন", amount: "৩,২০০/-", icon: CreditCard },
    ],
  },
  {
    id: 2,
    className: "শ্রেণি: তৃতীয়",
    category: "জেনারেল",
    fees: [
      { label: "ভর্তি ফি", main: "১৫,০০০/-", amount: "১১,২৫০/-", icon: GraduationCap },
      { label: "মাসিক বেতন ", amount: "৩,৭০০/-", icon: CreditCard },
    ],
    total: "১৮,৭০০/-",
    isResidential: false,
  },
  {
    id: 3,
    className: "চতুর্থ - পঞ্চম",
    category: "আবাসিক সহ",
    fees: [
      { label: "ভর্তি ফি", main: "১৮,০০০/-", amount: "১৩,৫০০/-", icon: GraduationCap },
      { label: "মাসিক বেতন + টিউশন ফি", amount: "৫,৭০০/-", icon: CreditCard },
    ],
    total: "৩৩,৭০০/-",
    isResidential: true,
  },
  {
    id: 4,
    className: "ষষ্ঠ - সপ্তম",
    category: "আবাসিক সহ",
    fees: [
      { label: "ভর্তি ফি", main: "১৮,০০০/-", amount: "১৩,৫০০/-", icon: GraduationCap },
      { label: "মাসিক বেতন", amount: "৬,২০০/-", icon: CreditCard },
    ],
    total: "৩৪,২০০/-",
    isResidential: true,
  },
  {
    id: 5,
    className: "হিফজুল কুরআন বিভাগ",
    category: "স্পেশাল ডিপার্টমেন্ট",
    fees: [
      { label: "ভর্তি ফি", main: "১৫,০০০/-", amount: "১১,২৫০/-", icon: GraduationCap },
      { label: "মাসিক বেতন", amount: "৫,৫০০/-", icon: CreditCard },
    ],
    total: "৩০,০০০/-",
    isResidential: true,
  },
  {
    id: 6,
    className: "আবাসিক",
    category: "স্পেশাল ডিপার্টমেন্ট",
    fees: [
      { label: "আবাসন", amount: "৩০০০/-", icon: Home },
      { label: "খাবার", amount: "৫,০০০/-", icon: Hamburger },
      { label: "বাৎসরিক সার্ভিস চার্জ (একাডেমিক)", amount: "২,০০০/-", icon: CircleDollarSign },
      { label: "বাৎসরিক সার্ভিস চার্জ (হিফয)", amount: "১,৫০০/-", icon: Coins },
    ],
    total: "৩০,০০০/-",
    isResidential: true,
  },
]

const FeeStructure = () => {
  return (
    <section className="relative py-10 my:py-20 bg-[#140d3b] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Banknote size={16} className="text-[#D8B4FE]" />
            <span className="text-gray-300 text-lg font-medium tracking-wider">ফি তালিকা </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
            অগ্রিম ভর্তিতে ২৫%{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#A855F7]">
              ছাড়...!
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট এর বিভিন্ন শ্রেণির ভর্তি এবং মাসিক বেতনের বিস্তারিত তালিকা নিচে দেওয়া হলো।
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {feeData.map((item) => (
            <div
              key={item.id}
              className="
                group 
                relative 
                bg-gradient-to-br from-white/10 via-purple-200/5 to-white/5
                backdrop-blur-xl 
                border border-purple-400/20 
                rounded-3xl 
                overflow-hidden 
                transition-all duration-500 
                hover:-translate-y-4 
                hover:border-purple-300/40 
                hover:shadow-[0_30px_80px_rgba(168,85,247,0.25)]
              "
            >
              <div className="relative bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-purple-900/5 p-6 h-full flex flex-col z-10">
                {/* Header */}
                <div className="mb-8 border-b border-purple-300/20 pb-6">
                  <h3 className="text-center text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                    {item.className}
                  </h3>
                </div>

                {/* Fees */}
                <div className="space-y-4 flex-grow mb-5">
                  {item.fees.map((fee, idx) => {
                    const Icon = fee.icon
                    return (
                      <div
                        key={idx}
                        className="
                          flex items-center justify-between 
                          p-4 
                          rounded-xl 
                          bg-gradient-to-r from-white/30 to-purple-300/50
                          border border-purple-400/10 
                          group-hover:border-purple-300/40 
                          group-hover:bg-purple-300/20 
                          transition-all duration-300 
                          hover:scale-105
                        "
                      >
                        <div className="flex items-center gap-3 text-gray-200 flex-1">
                          <div className="p-2.5 rounded-lg bg-white/10 text-purple-200 shadow-md">
                            <Icon size={18} />
                          </div>
                          <span className="text-sm font-semibold">{fee.label}</span>
                        </div>

                        <div className="text-right space-x-2">
                          <span className="text-white/40 font-medium line-through text-xs">{fee.main}</span>
                          <span className="text-white font-bold text-lg">
                            {fee.amount}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-yellow-500 text-sm bg-white/[0.03] inline-block px-6 py-3 rounded-full border border-white/[0.05] backdrop-blur-sm">
            * বিশেষ দ্রষ্টব্য: আবাসন ফি এবং মাসিক বেতন পরিবর্তন সাপেক্ষ। বিস্তারিত জানতে অফিসে যোগাযোগ করুন।
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeeStructure
