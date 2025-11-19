import React from "react";
import { 
    GraduationCap, 
    CreditCard, 
    Home, 
    Coins, 
    CheckCircle2,
    Banknote
} from "lucide-react";

const feeData = [
    {
        id: 1,
        className: "প্রি ওয়ান - দ্বিতীয়",
        category: "জেনারেল",
        fees: [
            { label: "ভর্তি ফি", amount: "১২,০০০/-", icon: GraduationCap },
            { label: "মাসিক বেতন", amount: "৩,২০০/-", icon: CreditCard },
        ],
        total: "১৫,২০০/-",
        isResidential: false
    },
    {
        id: 2,
        className: "শ্রেণি: তৃতীয়",
        category: "জেনারেল",
        fees: [
            { label: "ভর্তি ফি", amount: "১৫,০০০/-", icon: GraduationCap },
            { label: "মাসিক বেতন", amount: "৩,৭০০/-", icon: CreditCard },
        ],
        total: "১৮,৭০০/-",
        isResidential: false
    },
    {
        id: 3,
        className: "চতুর্থ - পঞ্চম",
        category: "আবাসিক সহ",
        fees: [
            { label: "ভর্তি ফি", amount: "১৮,০০০/-", icon: GraduationCap },
            { label: "মাসিক বেতন", amount: "৫,৭০০/-", icon: CreditCard },
            { label: "মাসিক আবাসিক ফি (খাবার সহ)", amount: "৮,০০০/-", icon: Home },
            { label: "এককালীন আবাসন ফি", amount: "২,০০০/-", icon: Coins },
        ],
        total: "৩৩,৭০০/-",
        isResidential: true
    },
    {
        id: 4,
        className: "ষষ্ঠ - সপ্তম",
        category: "আবাসিক সহ",
        fees: [
            { label: "ভর্তি ফি", amount: "১৮,০০০/-", icon: GraduationCap },
            { label: "মাসিক বেতন", amount: "৬,২০০/-", icon: CreditCard },
            { label: "মাসিক আবাসিক ফি (খাবার সহ)", amount: "৮,০০০/-", icon: Home },
            { label: "এককালীন আবাসন ফি", amount: "২,০০০/-", icon: Coins },
        ],
        total: "৩৪,২০০/-",
        isResidential: true
    },
    {
        id: 5,
        className: "হিফজুল কুরআন বিভাগ",
        category: "স্পেশাল ডিপার্টমেন্ট",
        fees: [
            { label: "ভর্তি ফি", amount: "১৫,০০০/-", icon: GraduationCap },
            { label: "মাসিক বেতন", amount: "৫,৫০০/-", icon: CreditCard },
            { label: "মাসিক আবাসিক ফি (খাবার সহ)", amount: "৮,০০০/-", icon: Home },
            { label: "এককালীন আবাসন ফি", amount: "১,৫০০/-", icon: Coins },
        ],
        total: "৩০,০০০/-",
        isResidential: true
    }
];

const FeeStructure = () => {
    return (
        <section className="relative  py-20 bg-[#140d3b] overflow-hidden">
            
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
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <Banknote size={16} className="text-[#D8B4FE]" />
                        <span className="text-gray-300 text-sm font-medium tracking-wider">ACADEMIC YEAR 2025</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        একাডেমিক <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#A855F7]">ফি তালিকা</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        ক্রাফট ইন্টারন্যাশনাল ইনস্টিটিউট এর বিভিন্ন শ্রেণির ভর্তি এবং মাসিক বেতনের বিস্তারিত তালিকা নিচে দেওয়া হলো।
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {feeData.map((item) => (
                        <div 
                            key={item.id}
                            className="group relative bg-[#0F0518]/60 backdrop-blur-md border border-white/10 rounded-3xl p-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(138,43,226,0.15)]"
                        >
                            {/* Top Badge */}
                            <div className="absolute top-0 right-0 p-2 md:p-6 z-20">
                                <span className={`
                                    px-3 py-1 rounded-lg text-xs md:font-bold uppercase tracking-wider shadow-lg
                                    ${item.isResidential 
                                        ? 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-200 border border-pink-500/30' 
                                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border border-cyan-500/30'}
                                `}>
                                    {item.category}
                                </span>
                            </div>

                            <div className="bg-[#0A0112]/80 rounded-[20px] p-3 md:p-6 h-full flex flex-col relative z-10">
                                
                                {/* Card Header */}
                                <div className="mb-8 border-b border-white/5 pb-6 mt-3 md:mt-0">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D8B4FE] transition-colors">
                                        {item.className}
                                    </h3>
                                    <p className="text-gray-500 text-sm">ভর্তিকালীন এবং মাসিক খরচের বিবরণ</p>
                                </div>

                                {/* Fee Items List */}
                                <div className="space-y-4 flex-grow">
                                    {item.fees.map((fee, idx) => {
                                        const FeeIcon = fee.icon;
                                        return (
                                            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/[0.05] group-hover:border-purple-500/20 group-hover:bg-purple-500/[0.02] transition-all duration-300">
                                                <div className="flex items-center gap-3 text-gray-300">
                                                    <div className="p-2 rounded-lg bg-[#2E0249]/50 text-[#A855F7] shadow-inner">
                                                        <FeeIcon size={16} />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-300 group-hover:text-gray-200">{fee.label}</span>
                                                </div>
                                                <span className="text-white font-semibold tracking-wide">{fee.amount}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Total Section */}
                                <div className="mt-8 pt-6 border-t border-dashed border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-purple-200/70 font-medium text-sm">ভর্তিকালীন সর্বমোট</span>
                                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">One Time</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-emerald-400 text-sm">
                                            <CheckCircle2 size={16} />
                                            <span className="font-semibold">Payable</span>
                                        </div>
                                        <span className="text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                            {item.total}
                                        </span>
                                    </div>
                                </div>

                                {/* Decorative Gradient Bottom Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A855F7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
    );
};

export default FeeStructure;