/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, IdCard, Printer, Download } from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: Record<string, any>;
  studentId?: string;
}

export const PreviewModal = ({ isOpen, onClose, formData, studentId }: PreviewModalProps) => {
  if (!isOpen) return null;

  const generateStudentId = () => {
    return studentId || `CII${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const finalStudentId = generateStudentId();

  const handleDownloadPDF = () => {
    alert("PDF download functionality would be implemented here with the student data");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-700 flex items-center gap-2">
            <Eye size={24} />
            ভর্তি ফর্ম প্রিভিউ
          </DialogTitle>
          <DialogDescription>
            আপনার প্রদত্ত তথ্যের সারসংক্ষেপ। দয়া করে যাচাই করুন।
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Student ID Card */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10"></div>

            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-sm opacity-90">Student ID</p>
                <p className="text-3xl font-bold">{finalStudentId}</p>
              </div>
              <IdCard size={48} className="opacity-80" />
            </div>

            <div className="mt-4 flex justify-between items-center relative z-10">
              <div>
                <p className="text-sm opacity-90">Student Name</p>
                <p className="text-xl font-bold">
                  {formData.StudentName || formData.studentName || "Not provided"}
                </p>
              </div>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {new Date().toLocaleDateString("bn-BD")}
              </Badge>
            </div>
          </div>

          {/* Form Data Preview Tabs */}
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid grid-cols-6 mb-4">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="parent">Parent</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>

            <TabsContent value="student" className="space-y-4">
              <Card>
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-700">শিক্ষার্থীর তথ্য</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <p className="text-sm text-gray-500">নাম (বাংলা)</p>
                    <p className="font-medium">{formData.StudentName || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Name (English)</p>
                    <p className="font-medium">{formData.studentName || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">মোবাইল</p>
                    <p className="font-medium">{formData.mobileNo || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">বয়স</p>
                    <p className="font-medium">{formData.Age || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">আগ্রহী শ্রেণি</p>
                    <p className="font-medium">{formData.Class || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">সেশন</p>
                    <p className="font-medium">{formData.session || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">জন্ম তারিখ</p>
                    <p className="font-medium">{formData.dateOfBirth || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">রক্তের গ্রুপ</p>
                    <p className="font-medium">{formData.bloodGroup || "—"}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="space-y-4">
              <Card>
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="text-indigo-700">পূর্ববর্তী একাডেমিক তথ্য</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <p className="text-sm text-gray-500">পূর্ববর্তী প্রতিষ্ঠান</p>
                    <p className="font-medium">{formData.PrevSchool || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">পূর্ব অধ্যায়নকৃত শ্রেণি</p>
                    <p className="font-medium">{formData.PrevClass || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">সর্বশেষ জিপিএ</p>
                    <p className="font-medium">{formData.GPA || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">পূর্ববর্তী রোল</p>
                    <p className="font-medium">{formData.Roll || "—"}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parent" className="space-y-4">
              <Card>
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700">অভিভাবকের তথ্য</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4">
                  <div className="border-b pb-3">
                    <h4 className="font-bold text-blue-700 mb-2">পিতার তথ্য</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">নাম</p>
                        <p className="font-medium">{formData.FatherName || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">পেশা</p>
                        <p className="font-medium">{formData.FatherJob || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">শিক্ষাগত যোগ্যতা</p>
                        <p className="font-medium">{formData.FatherEdu || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">মোবাইল</p>
                        <p className="font-medium">{formData.FatherMobile || "—"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-3">
                    <h4 className="font-bold text-pink-700 mb-2">মাতার তথ্য</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">নাম</p>
                        <p className="font-medium">{formData.MotherName || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">পেশা</p>
                        <p className="font-medium">{formData.MotherJob || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">শিক্ষাগত যোগ্যতা</p>
                        <p className="font-medium">{formData.MotherEdu || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">মোবাইল</p>
                        <p className="font-medium">{formData.MotherMobile || "—"}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-amber-700 mb-2">ঠিকানা</h4>
                    <p className="font-medium">{formData.Address || "—"}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="family" className="space-y-4">
              <Card>
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-amber-700">পারিবারিক পরিবেশ</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <p className="text-sm text-gray-500">হালাল উপার্জন</p>
                    <p className="font-medium">
                      {formData.HalalIncome === "Yes" ? "হ্যাঁ" : formData.HalalIncome === "No" ? "না" : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">পিতা-মাতার নামাজ</p>
                    <p className="font-medium">
                      {formData.ParentsPrayer === "Yes" ? "হ্যাঁ" : formData.ParentsPrayer === "No" ? "না" : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">মাদক/নেশায় আক্রান্ত</p>
                    <p className="font-medium">
                      {formData.Addiction === "Yes" ? "হ্যাঁ" : formData.Addiction === "No" ? "না" : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">টেলিভিশন</p>
                    <p className="font-medium">
                      {formData.TV === "Yes" ? "হ্যাঁ" : formData.TV === "No" ? "না" : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">কুরআন তিলাওয়াত</p>
                    <p className="font-medium">
                      {formData.QuranRecitation === "Yes"
                        ? "হ্যাঁ"
                        : formData.QuranRecitation === "No"
                        ? "না"
                        : formData.QuranRecitation === "Sometimes"
                        ? "মাঝেমাঝে"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">পর্দা পালন</p>
                    <p className="font-medium">
                      {formData.Purdah === "Yes"
                        ? "হ্যাঁ"
                        : formData.Purdah === "No"
                        ? "না"
                        : formData.Purdah === "Trying"
                        ? "চেষ্টা করা হয়"
                        : "—"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavior" className="space-y-4">
              <Card>
                <CardHeader className="bg-rose-50">
                  <CardTitle className="text-rose-700">আচরণ ও দক্ষতা</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <p className="text-sm text-gray-500">মোবাইল ব্যবহার</p>
                    <p className="font-medium">{formData.MobileUsage || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">সন্তানের আচরণ</p>
                    <p className="font-medium">
                      {formData.GeneralBehavior === "Very Good"
                        ? "অনেক ভালো"
                        : formData.GeneralBehavior === "Good"
                        ? "মোটামুটি"
                        : formData.GeneralBehavior === "Average"
                        ? "ভাল নয়"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">পিতা-মাতার কথা শোনে</p>
                    <p className="font-medium">
                      {formData.Obedience === "Fully"
                        ? "পুরোপুরি"
                        : formData.Obedience === "Somewhat"
                        ? "মোটামুটি"
                        : formData.Obedience === "Not At All"
                        ? "না"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">বড়দের সাথে আচরণ</p>
                    <p className="font-medium">
                      {formData.ElderBehavior === "Very Good"
                        ? "অনেক ভালো"
                        : formData.ElderBehavior === "Good"
                        ? "মোটামুটি"
                        : formData.ElderBehavior === "Average"
                        ? "ভাল নয়"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ছোটদের সাথে আচরণ</p>
                    <p className="font-medium">
                      {formData.YoungerBehavior === "Very Good"
                        ? "অনেক ভালো"
                        : formData.YoungerBehavior === "Good"
                        ? "মোটামুটি"
                        : formData.YoungerBehavior === "Average"
                        ? "ভাল নয়"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">মিথ্যা/জেদ</p>
                    <p className="font-medium">
                      {formData.LyingStubbornness === "Too Much"
                        ? "খুব বেশি"
                        : formData.LyingStubbornness === "Sometimes"
                        ? "মাঝেমাঝে"
                        : formData.LyingStubbornness === "Never"
                        ? "না"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">পড়ালেখায় আগ্রহ</p>
                    <p className="font-medium">
                      {formData.StudyInterest === "Very Interested"
                        ? "খুব আগ্রহী"
                        : formData.StudyInterest === "Moderate"
                        ? "মোটামুটি"
                        : formData.StudyInterest === "Less Interested"
                        ? "কম আগ্রহী"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ধর্মীয় কাজে আগ্রহ</p>
                    <p className="font-medium">
                      {formData.ReligiousInterest === "Very Interested"
                        ? "খুব আগ্রহী"
                        : formData.ReligiousInterest === "Moderate"
                        ? "মোটামুটি"
                        : formData.ReligiousInterest === "Less Interested"
                        ? "কম আগ্রহী"
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">রাগ নিয়ন্ত্রণ</p>
                    <p className="font-medium">
                      {formData.AngerControl === "Excellent"
                        ? "মোটামুটি"
                        : formData.AngerControl === "Good"
                        ? "ভাল"
                        : formData.AngerControl === "Needs Improvement"
                        ? "উন্নতি প্রয়োজন"
                        : "—"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="address" className="space-y-4">
              <Card>
                <CardHeader className="bg-teal-50">
                  <CardTitle className="text-teal-700">ঠিকানা ও ডকুমেন্টস</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">বর্তমান ঠিকানা</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">গ্রাম/এলাকা</p>
                        <p className="font-medium">{formData.village || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ডাকঘর</p>
                        <p className="font-medium">{formData.postOffice || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">পোস্ট কোড</p>
                        <p className="font-medium">{formData.postCode || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">থানা</p>
                        <p className="font-medium">{formData.policeStation || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">জেলা</p>
                        <p className="font-medium">{formData.district || "—"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-700 mb-2">স্থায়ী ঠিকানা</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">গ্রাম/এলাকা</p>
                        <p className="font-medium">{formData.permVillage || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ডাকঘর</p>
                        <p className="font-medium">{formData.permPostOffice || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">পোস্ট কোড</p>
                        <p className="font-medium">{formData.permPostCode || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">থানা</p>
                        <p className="font-medium">{formData.permPoliceStation || "—"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">জেলা</p>
                        <p className="font-medium">{formData.permDistrict || "—"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-700 mb-2">প্রদত্ত ডকুমেন্টসমূহ</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {formData.birthCertificate && (
                        <Badge className="bg-green-100 text-green-700">জন্ম নিবন্ধন</Badge>
                      )}
                      {formData.transferCertificate && (
                        <Badge className="bg-green-100 text-green-700">ট্রান্সফার সার্টিফিকেট</Badge>
                      )}
                      {formData.characterCertificate && (
                        <Badge className="bg-green-100 text-green-700">চরিত্র সনদপত্র</Badge>
                      )}
                      {formData.markSheet && <Badge className="bg-green-100 text-green-700">মার্কশিট</Badge>}
                      {formData.photographs && <Badge className="bg-green-100 text-green-700">ছবি</Badge>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            বন্ধ করুন
          </Button>
          <Button variant="outline" onClick={handlePrint} className="gap-2">
            <Printer size={16} />
            প্রিন্ট
          </Button>
          <Button onClick={handleDownloadPDF} className="bg-purple-600 hover:bg-purple-700 gap-2">
            <Download size={16} />
            ডাউনলোড PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};