import { GraduationCap, CreditCard, Home, Coins, Banknote, Hamburger, CircleDollarSign } from "lucide-react"

const feeData = [
  {
    id: 1,
    className: "প্রি ওয়ান - দ্বিতীয়",
    category: "জেনারেল",
    fees: [
      { label: "ভর্তি ফি", main: "১২,০০০/-", amount: "৯,০০০/-", icon: GraduationCap },
      { label: "মাসিক বেতন", amount: "৩,২০০/-", icon: CreditCard },
    ],
    // total: "১৫,২০০/-",
    // isResidential: false
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
      // { label: "মাসিক আবাসিক ফি (খাবার সহ)", amount: "৮,০০০/-", icon: Home },
      // { label: "এককালীন আবাসন ফি", amount: "২,০০০/-", icon: Coins },
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
      // { label: "মাসিক আবাসিক ফি (খাবার সহ)", amount: "৮,০০০/-", icon: Home },
      // { label: "এককালীন আবাসন ফি", amount: "২,০০০/-", icon: Coins },
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
      // { label: "মাসিক আবাসিক ফি (খাবার সহ)", amount: "৮,০০০/-", icon: Home },
      // { label: "এককালীন আবাসন ফি", amount: "১,৫০০/-", icon: Coins },
    ],
    total: "৩,০০০০/-",
    isResidential: true,
  },
  {
    id: 6,
    className: "আবাসিক",
    category: "স্পেশাল ডিপার্টমেন্ট",
    fees: [
      { label: "আবাসন", main: "৫,০০০/-", amount: "৩০০০/-", icon: Home },
      { label: "খাবার", amount: "৫,০০০/-", icon: Hamburger },
      { label: "বাৎসরিক সার্ভিস চার্জ (একাডেমিক)", amount: "২,০০০/-", icon: CircleDollarSign },
      { label: "এককালীন আবাসন ফি", amount: "১,৫০০/-", icon: Coins },
    ],
    total: "৩,০০০০/-",
    isResidential: true,
  },
]

const FeeStructure = () => {
  return (
    <section className="relative py-10 my:py-20 bg-[#140d3b] overflow-hidden">
      {/* --- NEW BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Top Center Spotlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Bottom Corner Accents */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Banknote size={16} className="text-[#D8B4FE]" />
            <span className="text-gray-300 text-sm font-medium tracking-wider">একাডেমিক ফি তালিকা </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            অগ্রিম ভর্তিতে ২৫%{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#A855F7]"> ছাড়...!</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট এর বিভিন্ন শ্রেণির ভর্তি এবং মাসিক বেতনের বিস্তারিত তালিকা নিচে দেওয়া হলো।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {feeData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-[#1a0f3b] to-[#0F0518]/80 backdrop-blur-md border border-purple-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-purple-400/60 hover:shadow-[0_30px_80px_rgba(168,85,247,0.35)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Top Badge */}
              {/* <div className="absolute top-0 right-0 p-2 md:p-6 z-20">
                <span
                  className={`
                                    px-3 py-1 rounded-lg text-xs md:font-bold uppercase tracking-wider shadow-lg
                                    ${
                                      item.isResidential
                                        ? "bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-200 border border-pink-500/30"
                                        : "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border border-cyan-500/30"
                                    }
                                `}
                >
                  {item.category}
                </span>
              </div> */}

              <div className="relative bg-gradient-to-br from-[#452875]  to-[#2a0c56] p-3 md:p-6 h-full flex flex-col z-10">
                {/* Card Header */}
                <div className="mb-8 border-b border-purple-500/20 pb-6 mt-3 md:mt-0">
                  <h3 className="text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent group-hover:from-[#D8B4FE] group-hover:via-white group-hover:to-[#D8B4FE] transition-all duration-300 mb-2 pt-2">
                    {item.className}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">ভর্তিকালীন এবং মাসিক খরচের বিবরণ</p>
                </div>

                {/* Fee Items List */}
                <div className="space-y-4 flex-grow mb-5">
                  {item.fees.map((fee, idx) => {
                    const FeeIcon = fee.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 md:p-4 rounded-xl bg-gradient-to-r from-purple-600/15 to-purple-600/5 border border-purple-500/20 group-hover:border-purple-400/40 group-hover:bg-purple-500/15 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-3 text-gray-300 flex-1">
                          <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-600/40 to-purple-500/20 text-purple-300 shadow-lg group-hover:text-purple-100 transition-colors">
                            <FeeIcon size={18} />
                          </div>
                          <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                            {fee.label}
                          </span>
                        </div>
                        <div className="text-right space-x-2">
                          <span className="text-white/50 font-medium line-through text-xs">{fee.main}</span>
                          <span className="text-white bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100 font-bold text-lg group-hover:from-[#D8B4FE] group-hover:to-white transition-all">
                            {fee.amount}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Decorative Gradient Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
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
