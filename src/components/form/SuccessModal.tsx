// components/form/SuccessModal.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: () => void;
  onDownloadPDF: () => void;
  studentId: string;
}

export const SuccessModal = ({
  isOpen,
  onClose,
  onSkip,
  onDownloadPDF,
  studentId
}: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"  onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        
        {/* Success Icon */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="bg-green-100 rounded-full p-4 shadow-lg">
            <CheckCircle size={48} className="text-green-600" />
          </div>
        </div>

        <div className="pt-16 p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">আলহামদুলিল্লাহ!</h2>
          <p className="text-gray-600 mb-4">
            আপনার ভর্তি ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।
          </p>
          <p className="text-sm bg-purple-50 text-purple-700 p-3 rounded-lg mb-6">
            আপনার আইডি: <span className="font-bold">{studentId}</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            ভর্তি পরীক্ষার তারিখ ও সময় শীঘ্রই SMS এর মাধ্যমে জানিয়ে দেওয়া হবে।
          </p>

          <div className="flex gap-3 justify-center">
            <Button
              type="button"
              variant="outline"
              onClick={onSkip}
              className="px-6 py-2 rounded-xl border-2 hover:bg-gray-50"
            >
              স্কিপ
            </Button>
            <Button
              type="button"
              onClick={onDownloadPDF}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-lg"
            >
              <Download size={16} className="mr-2" />
              PDF ডাউনলোড
            </Button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};