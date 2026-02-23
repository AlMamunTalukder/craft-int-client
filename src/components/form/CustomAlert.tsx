import { CheckCircle, AlertCircle } from "lucide-react";

interface CustomAlertProps {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

export const CustomAlert = ({ isOpen, type, title, message, onClose }: CustomAlertProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-[#0F0518]/80 backdrop-blur-md animate-fadeIn z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 transform transition-all scale-100 animate-bounceIn text-center relative overflow-hidden border-t-8 border-purple-600">
        <div
          className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${
            type === "success"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {type === "success" ? (
            <CheckCircle size={40} strokeWidth={2.5} />
          ) : (
            <AlertCircle size={40} strokeWidth={2.5} />
          )}
        </div>
        <h3
          className={`text-2xl font-bold mb-3 ${
            type === "success" ? "text-green-800" : "text-red-800"
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-8 text-base leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className={`w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
            type === "success"
              ? "bg-gradient-to-r from-green-500 to-green-700 shadow-green-200"
              : "bg-gradient-to-r from-red-500 to-red-700 shadow-red-200"
          }`}
        >
          {type === "success" ? "আলহামদুলিল্লাহ" : "বন্ধ করুন"}
        </button>
      </div>
    </div>
  );
};