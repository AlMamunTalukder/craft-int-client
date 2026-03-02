/* eslint-disable @typescript-eslint/no-explicit-any */
// components/form/PDFPreview.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Eye } from 'lucide-react';

interface PDFPreviewProps {
  formData: Record<string, any>;
  studentId: string;
  onClose: () => void;
  onSkip: () => void;
  onDownloadPDF: () => void;
}

export const PDFPreview = ({
  formData,
  studentId,
  onClose,
  onSkip,
  onDownloadPDF
}: PDFPreviewProps) => {
  const getBengaliValue = (key: string, value: any): string => {
    if (!value) return '-';
    
    const valueMap: Record<string, Record<string, string>> = {
      gender: { male: 'পুরুষ', female: 'মহিলা', other: 'অন্যান্য' },
      yesno: { 'Yes': 'হ্যাঁ', 'No': 'না' },
      prayer: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Sometimes': 'মাঝেমাঝে' },
      purdah: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Trying': 'চেষ্টা করা হয়' },
      behavior: { 
        'Very Good': 'অনেক ভালো', 
        'Good': 'মোটামুটি', 
        'Average': 'ভাল নয়',
        'Not At All': 'না',
        'Somewhat': 'মোটামুটি',
        'Fully': 'পুরোপুরি',
        'Too Much': 'খুব বেশি',
        'Sometimes': 'মাঝেমাঝে',
        'Never': 'না',
        'Very Interested': 'খুব আগ্রহী',
        'Moderate': 'মোটামুটি',
        'Less Interested': 'কম আগ্রহী',
        'Excellent': 'মোটামুটি',
        'Needs Improvement': 'উন্নতি প্রয়োজন'
      }
    };

    if (key.includes('gender') && valueMap.gender[value]) return valueMap.gender[value];
    if (['HalalIncome', 'ParentsPrayer', 'Addiction', 'TV'].includes(key) && valueMap.yesno[value]) return valueMap.yesno[value];
    if (key === 'QuranRecitation' && valueMap.prayer[value]) return valueMap.prayer[value];
    if (key === 'Purdah' && valueMap.purdah[value]) return valueMap.purdah[value];
    if (valueMap.behavior[value]) return valueMap.behavior[value];
    
    return value.toString();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Eye size={20} />
            <h2 className="text-xl font-bold">ভর্তি ফর্ম প্রিভিউ</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* PDF Preview Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] bg-gray-50">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200" id="pdf-content">
            {/* Header with Logo */}
            <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
              <h1 className="text-3xl font-bold text-purple-800 mb-2">ক্রাফট ইন্টারন্যাশনাল স্কুল</h1>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">ভর্তি আবেদন ফর্ম</h2>
              <p className="text-gray-600">আইডি: {studentId}</p>
              <p className="text-gray-600">আবেদনের তারিখ: {new Date().toLocaleDateString('bn-BD', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>

            {/* Student Information */}
            <div className="mb-6">
              <h3 className="text-lg font-bold bg-purple-100 p-2 rounded-lg mb-3">শিক্ষার্থীর তথ্য</h3>
              <div className="grid grid-cols-2 gap-4">
                <InfoRow label="নাম (বাংলা)" value={formData.StudentName} />
                <InfoRow label="নাম (ইংরেজি)" value={formData.studentName} />
                <InfoRow label="জন্ম তারিখ" value={formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('bn-BD') : '-'} />
                <InfoRow label="বয়স" value={formData.Age} />
                <InfoRow label="লিঙ্গ" value={getBengaliValue('gender', formData.gender)} />
                <InfoRow label="বিভাগ" value={formData.studentDepartment} />
                <InfoRow label="শ্রেণি" value={formData.Class} />
                <InfoRow label="সেশন" value={formData.session} />
                <InfoRow label="রক্তের গ্রুপ" value={formData.bloodGroup} />
                <InfoRow label="জাতীয়তা" value={formData.nationality} />
              </div>
            </div>

            {/* Academic Information */}
            {(formData.PrevSchool || formData.PrevClass || formData.GPA) && (
              <div className="mb-6">
                <h3 className="text-lg font-bold bg-green-100 p-2 rounded-lg mb-3">পূর্ববর্তী একাডেমিক তথ্য</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoRow label="পূর্ববর্তী প্রতিষ্ঠান" value={formData.PrevSchool} />
                  <InfoRow label="পূর্ববর্তী শ্রেণি" value={formData.PrevClass} />
                  <InfoRow label="জিপিএ" value={formData.GPA} />
                </div>
              </div>
            )}

            {/* Parent Information */}
            <div className="mb-6">
              <h3 className="text-lg font-bold bg-blue-100 p-2 rounded-lg mb-3">পিতার তথ্য</h3>
              <div className="grid grid-cols-2 gap-4">
                <InfoRow label="নাম (বাংলা)" value={formData.FatherNameBangla} />
                <InfoRow label="নাম (ইংরেজি)" value={formData.FatherName} />
                <InfoRow label="পেশা" value={formData.FatherJob} />
                <InfoRow label="শিক্ষাগত যোগ্যতা" value={formData.FatherEdu} />
                <InfoRow label="মোবাইল" value={formData.FatherMobile} />
                <InfoRow label="WhatsApp" value={formData.FatherWhatsapp} />
              </div>

              <h3 className="text-lg font-bold bg-pink-100 p-2 rounded-lg mb-3 mt-4">মাতার তথ্য</h3>
              <div className="grid grid-cols-2 gap-4">
                <InfoRow label="নাম (বাংলা)" value={formData.MotherNameBangla} />
                <InfoRow label="নাম (ইংরেজি)" value={formData.MotherName} />
                <InfoRow label="পেশা" value={formData.MotherJob} />
                <InfoRow label="শিক্ষাগত যোগ্যতা" value={formData.MotherEdu} />
                <InfoRow label="মোবাইল" value={formData.MotherMobile} />
                <InfoRow label="WhatsApp" value={formData.MotherWhatsapp} />
              </div>

              {(formData.guardianName || formData.guardianNameBangla) && (
                <>
                  <h3 className="text-lg font-bold bg-amber-100 p-2 rounded-lg mb-3 mt-4">অভিভাবকের তথ্য</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <InfoRow label="নাম (বাংলা)" value={formData.guardianNameBangla} />
                    <InfoRow label="নাম (ইংরেজি)" value={formData.guardianName} />
                    <InfoRow label="সম্পর্ক" value={formData.guardianRelation} />
                    <InfoRow label="মোবাইল" value={formData.guardianMobile} />
                    <InfoRow label="WhatsApp" value={formData.guardianWhatsapp} />
                    <InfoRow label="পেশা" value={formData.guardianJob} />
                    <InfoRow label="ঠিকানা" value={formData.guardianAddress} />
                  </div>
                </>
              )}
            </div>

            {/* Family Environment */}
            {(formData.HalalIncome || formData.ParentsPrayer || formData.Addiction || formData.TV || formData.QuranRecitation || formData.Purdah) && (
              <div className="mb-6">
                <h3 className="text-lg font-bold bg-amber-100 p-2 rounded-lg mb-3">পারিবারিক পরিবেশ</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoRow label="হালাল উপার্জন" value={getBengaliValue('HalalIncome', formData.HalalIncome)} />
                  <InfoRow label="পিতা-মাতার নামাজ" value={getBengaliValue('ParentsPrayer', formData.ParentsPrayer)} />
                  <InfoRow label="মাদক/নেশা" value={getBengaliValue('Addiction', formData.Addiction)} />
                  <InfoRow label="টেলিভিশন" value={getBengaliValue('TV', formData.TV)} />
                  <InfoRow label="কুরআন তিলাওয়াত" value={getBengaliValue('QuranRecitation', formData.QuranRecitation)} />
                  <InfoRow label="পর্দা পালন" value={getBengaliValue('Purdah', formData.Purdah)} />
                </div>
              </div>
            )}

            {/* Behavior Skills */}
            {(formData.MobileUsage || formData.GeneralBehavior || formData.Obedience) && (
              <div className="mb-6">
                <h3 className="text-lg font-bold bg-rose-100 p-2 rounded-lg mb-3">আচরণ ও দক্ষতা</h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoRow label="মোবাইল ব্যবহার" value={formData.MobileUsage} />
                  <InfoRow label="সাধারণ আচরণ" value={getBengaliValue('GeneralBehavior', formData.GeneralBehavior)} />
                  <InfoRow label="পিতা-মাতার কথা শোনে" value={getBengaliValue('Obedience', formData.Obedience)} />
                  <InfoRow label="বড়দের সাথে আচরণ" value={getBengaliValue('ElderBehavior', formData.ElderBehavior)} />
                  <InfoRow label="ছোটদের সাথে আচরণ" value={getBengaliValue('YoungerBehavior', formData.YoungerBehavior)} />
                  <InfoRow label="মিথ্যা/জেদ" value={getBengaliValue('LyingStubbornness', formData.LyingStubbornness)} />
                  <InfoRow label="পড়ালেখায় আগ্রহ" value={getBengaliValue('StudyInterest', formData.StudyInterest)} />
                  <InfoRow label="ধর্মীয় কাজে আগ্রহ" value={getBengaliValue('ReligiousInterest', formData.ReligiousInterest)} />
                  <InfoRow label="রাগ নিয়ন্ত্রণ" value={getBengaliValue('AngerControl', formData.AngerControl)} />
                </div>
              </div>
            )}

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-lg font-bold bg-teal-100 p-2 rounded-lg mb-3">ঠিকানা</h3>
              
              <h4 className="font-semibold text-gray-700 mb-2">বর্তমান ঠিকানা:</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <InfoRow label="গ্রাম/এলাকা" value={formData.village} />
                <InfoRow label="ডাকঘর" value={formData.postOffice} />
                <InfoRow label="পোস্ট কোড" value={formData.postCode} />
                <InfoRow label="থানা" value={formData.policeStation} />
                <InfoRow label="জেলা" value={formData.district} />
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">স্থায়ী ঠিকানা:</h4>
              <div className="grid grid-cols-2 gap-4">
                <InfoRow label="গ্রাম/এলাকা" value={formData.permVillage} />
                <InfoRow label="ডাকঘর" value={formData.permPostOffice} />
                <InfoRow label="পোস্ট কোড" value={formData.permPostCode} />
                <InfoRow label="থানা" value={formData.permPoliceStation} />
                <InfoRow label="জেলা" value={formData.permDistrict} />
              </div>
            </div>

            {/* Documents */}
            {(formData.photographs || formData.birthCertificate || formData.markSheet || formData.transferCertificate || formData.characterCertificate) && (
              <div className="mb-6">
                <h3 className="text-lg font-bold bg-rose-100 p-2 rounded-lg mb-3">প্রদত্ত ডকুমেন্টসমূহ</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.photographs && <DocBadge label="ছবি" />}
                  {formData.birthCertificate && <DocBadge label="জন্ম নিবন্ধন" />}
                  {formData.markSheet && <DocBadge label="মার্কশিট" />}
                  {formData.transferCertificate && <DocBadge label="ট্রান্সফার সার্টিফিকেট" />}
                  {formData.characterCertificate && <DocBadge label="চরিত্র সনদ" />}
                </div>
              </div>
            )}

            {/* Terms */}
            {formData.termsAccepted && (
              <div className="mt-8 pt-4 border-t-2 border-gray-200">
                <p className="text-green-600 font-semibold">
                  ✓ আমি ভর্তির সকল শর্ত মেনে নিচ্ছি
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>এই ফর্মটি কম্পিউটার দ্বারা Generated, স্বাক্ষরের প্রয়োজন নেই</p>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-end gap-3">
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
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg"
          >
            <Download size={16} className="mr-2" />
            PDF ডাউনলোড
          </Button>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value?: string }) => {
  if (!value || value === '-') return null;
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
};

const DocBadge = ({ label }: { label: string }) => (
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
    ✓ {label}
  </span>
);