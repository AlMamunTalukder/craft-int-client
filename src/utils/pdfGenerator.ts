// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// export const generatePDFFromData = (formData: Record<string, any>, studentId: string, fileName: string = 'admission-form.pdf') => {
//   try {
//     // Show loading state
//     const loadingToast = document.createElement('div');
//     loadingToast.className = 'fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50';
//     loadingToast.innerText = 'PDF তৈরি হচ্ছে...';
//     document.body.appendChild(loadingToast);

//     // Helper function to get Bengali text for values
//     const getBengaliValue = (key: string, value: any): string => {
//       if (!value) return '-';
      
//       const valueMap: Record<string, Record<string, string>> = {
//         gender: { male: 'পুরুষ', female: 'মহিলা', other: 'অন্যান্য' },
//         yesno: { 'Yes': 'হ্যাঁ', 'No': 'না' },
//         prayer: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Sometimes': 'মাঝেমাঝে' },
//         purdah: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Trying': 'চেষ্টা করা হয়' },
//         behavior: { 
//           'Very Good': 'অনেক ভালো', 
//           'Good': 'মোটামুটি', 
//           'Average': 'ভাল নয়',
//           'Not At All': 'না',
//           'Somewhat': 'মোটামুটি',
//           'Fully': 'পুরোপুরি',
//           'Too Much': 'খুব বেশি',
//           'Sometimes': 'মাঝেমাঝে',
//           'Never': 'না',
//           'Very Interested': 'খুব আগ্রহী',
//           'Moderate': 'মোটামুটি',
//           'Less Interested': 'কম আগ্রহী',
//           'Excellent': 'মোটামুটি',
//           'Needs Improvement': 'উন্নতি প্রয়োজন'
//         }
//       };

//       if (key.includes('gender') && valueMap.gender[value]) return valueMap.gender[value];
//       if (['HalalIncome', 'ParentsPrayer', 'Addiction', 'TV'].includes(key) && valueMap.yesno[value]) return valueMap.yesno[value];
//       if (key === 'QuranRecitation' && valueMap.prayer[value]) return valueMap.prayer[value];
//       if (key === 'Purdah' && valueMap.purdah[value]) return valueMap.purdah[value];
//       if (valueMap.behavior[value]) return valueMap.behavior[value];
      
//       return value.toString();
//     };

//     const pdfContent = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>ভর্তি ফর্ম - ${studentId}</title>
//         <style>
//           @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;700&display=swap');
//           @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;700&display=swap');
          
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }
          
//           body {
//             font-family: 'Noto Sans Bengali', 'Hind Siliguri', sans-serif;
//             background: white;
//             padding: 30px;
//             color: #1f2937;
//             line-height: 1.5;
//           }
          
//           .pdf-container {
//             max-width: 1100px;
//             margin: 0 auto;
//             background: white;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//           }
          
//           /* Header */
//           .header {
//             text-align: center;
//             margin-bottom: 30px;
//             padding-bottom: 20px;
//             border-bottom: 3px solid #9333ea;
//             position: relative;
//           }
          
//           .header::before {
//             content: '';
//             position: absolute;
//             top: -10px;
//             left: 0;
//             right: 0;
//             height: 5px;
//             background: linear-gradient(90deg, #ec4899, #8b5cf6, #6366f1);
//           }
          
//           .school-name {
//             font-size: 28px;
//             font-weight: 800;
//             background: linear-gradient(135deg, #581c87, #6d28d9, #5b21b6);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             margin-bottom: 10px;
//           }
          
//           .form-title {
//             font-size: 24px;
//             font-weight: bold;
//             color: #374151;
//             margin-bottom: 5px;
//           }
          
//           .student-id {
//             display: inline-block;
//             background: #dbeafe;
//             color: #1e40af;
//             padding: 6px 16px;
//             border-radius: 30px;
//             font-size: 14px;
//             font-weight: 600;
//             margin-top: 10px;
//             border: 1px solid #93c5fd;
//           }
          
//           .date {
//             color: #6b7280;
//             font-size: 14px;
//             margin-top: 8px;
//           }
          
//           /* Section */
//           .section {
//             margin-bottom: 25px;
//             border: 1px solid #e5e7eb;
//             border-radius: 12px;
//             overflow: hidden;
//             box-shadow: 0 2px 4px rgba(0,0,0,0.05);
//           }
          
//           .section-title {
//             background: linear-gradient(90deg, #f5f3ff, #ede9fe);
//             padding: 14px 20px;
//             font-size: 18px;
//             font-weight: 700;
//             color: #5b21b6;
//             border-bottom: 2px solid #c4b5fd;
//             display: flex;
//             align-items: center;
//             gap: 10px;
//           }
          
//           .section-title::before {
//             content: '📌';
//             font-size: 20px;
//           }
          
//           .section-content {
//             padding: 20px;
//             background: white;
//           }
          
//           /* Grid */
//           .grid-2 {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 20px;
//           }
          
//           .grid-3 {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 20px;
//           }
          
//           .grid-4 {
//             display: grid;
//             grid-template-columns: repeat(4, 1fr);
//             gap: 15px;
//           }
          
//           /* Info Field */
//           .info-field {
//             display: flex;
//             flex-direction: column;
//           }
          
//           .info-label {
//             font-size: 12px;
//             color: #6b7280;
//             margin-bottom: 4px;
//             font-weight: 500;
//           }
          
//           .info-value {
//             font-size: 15px;
//             font-weight: 600;
//             color: #111827;
//             padding: 6px 0;
//             border-bottom: 1px dashed #d1d5db;
//           }
          
//           .info-value.highlight {
//             background: #fef3c7;
//             padding: 6px 12px;
//             border-radius: 6px;
//             border-bottom: none;
//           }
          
//           /* Address Box */
//           .address-box {
//             background: #f9fafb;
//             padding: 16px;
//             border-radius: 10px;
//             border: 1px solid #e5e7eb;
//             margin-bottom: 15px;
//           }
          
//           .address-title {
//             font-size: 16px;
//             font-weight: 700;
//             color: #374151;
//             margin-bottom: 12px;
//             display: flex;
//             align-items: center;
//             gap: 8px;
//           }
          
//           .address-title::before {
//             content: '📍';
//           }
          
//           /* Documents */
//           .documents-grid {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 12px;
//           }
          
//           .document-badge {
//             background: #ecfdf5;
//             color: #047857;
//             padding: 8px 18px;
//             border-radius: 30px;
//             font-size: 14px;
//             font-weight: 500;
//             border: 1px solid #a7f3d0;
//             display: flex;
//             align-items: center;
//             gap: 6px;
//           }
          
//           .document-badge::before {
//             content: '✓';
//             font-weight: bold;
//           }
          
//           /* Terms */
//           .terms-box {
//             background: #eff6ff;
//             padding: 16px;
//             border-radius: 10px;
//             border: 2px solid #bfdbfe;
//             text-align: center;
//             margin-top: 20px;
//           }
          
//           .terms-text {
//             color: #1e40af;
//             font-size: 16px;
//             font-weight: 600;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             gap: 10px;
//           }
          
//           .terms-text::before {
//             content: '✅';
//             font-size: 20px;
//           }
          
//           /* Footer */
//           .footer {
//             margin-top: 30px;
//             padding-top: 20px;
//             border-top: 2px solid #e5e7eb;
//             text-align: center;
//             color: #9ca3af;
//             font-size: 12px;
//           }
          
//           .footer-note {
//             font-style: italic;
//             margin-top: 5px;
//           }
          
//           /* Print styles */
//           @media print {
//             body { 
//               padding: 15px; 
//               background: white;
//             }
//             .no-print { 
//               display: none; 
//             }
//             .section {
//               break-inside: avoid;
//             }
//           }
//         </style>
//       </head>
//       <body>
//         <div class="pdf-container">
//           <!-- Header -->
//           <div class="header">
//             <div class="school-name">ক্রাফট ইন্টারন্যাশনাল স্কুল</div>
//             <div class="form-title">ভর্তি আবেদন ফর্ম</div>
//             <div class="student-id">আইডি: ${studentId}</div>
//             <div class="date">আবেদনের তারিখ: ${new Date().toLocaleDateString('bn-BD', { 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })}</div>
//           </div>

//           <!-- Student Information -->
//           <div class="section">
//             <div class="section-title">শিক্ষার্থীর তথ্য</div>
//             <div class="section-content">
//               <div class="grid-2">
//                 <div class="info-field">
//                   <span class="info-label">নাম (বাংলা)</span>
//                   <span class="info-value">${formData.StudentName || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">নাম (ইংরেজি)</span>
//                   <span class="info-value">${formData.studentName || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">জন্ম তারিখ</span>
//                   <span class="info-value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('bn-BD') : '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">বয়স</span>
//                   <span class="info-value">${formData.Age || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">লিঙ্গ</span>
//                   <span class="info-value">${getBengaliValue('gender', formData.gender)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">বিভাগ</span>
//                   <span class="info-value">${formData.studentDepartment || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">শ্রেণি</span>
//                   <span class="info-value highlight">${formData.Class || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">সেশন</span>
//                   <span class="info-value">${formData.session || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">রক্তের গ্রুপ</span>
//                   <span class="info-value">${formData.bloodGroup || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">জাতীয়তা</span>
//                   <span class="info-value">${formData.nationality || '-'}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Academic Information -->
//           ${(formData.PrevSchool || formData.PrevClass || formData.GPA) ? `
//           <div class="section">
//             <div class="section-title">পূর্ববর্তী একাডেমিক তথ্য</div>
//             <div class="section-content">
//               <div class="grid-3">
//                 <div class="info-field">
//                   <span class="info-label">পূর্ববর্তী প্রতিষ্ঠান</span>
//                   <span class="info-value">${formData.PrevSchool || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">পূর্ববর্তী শ্রেণি</span>
//                   <span class="info-value">${formData.PrevClass || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">জিপিএ</span>
//                   <span class="info-value">${formData.GPA || '-'}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           ` : ''}

//           <!-- Parent Information -->
//           <div class="section">
//             <div class="section-title">অভিভাবকের তথ্য</div>
//             <div class="section-content">
//               <div class="address-box">
//                 <div class="address-title">পিতার তথ্য</div>
//                 <div class="grid-2">
//                   <div class="info-field">
//                     <span class="info-label">নাম (বাংলা)</span>
//                     <span class="info-value">${formData.FatherNameBangla || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">নাম (ইংরেজি)</span>
//                     <span class="info-value">${formData.FatherName || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">পেশা</span>
//                     <span class="info-value">${formData.FatherJob || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">শিক্ষাগত যোগ্যতা</span>
//                     <span class="info-value">${formData.FatherEdu || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">মোবাইল</span>
//                     <span class="info-value">${formData.FatherMobile || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">WhatsApp</span>
//                     <span class="info-value">${formData.FatherWhatsapp || '-'}</span>
//                   </div>
//                 </div>
//               </div>

//               <div class="address-box">
//                 <div class="address-title">মাতার তথ্য</div>
//                 <div class="grid-2">
//                   <div class="info-field">
//                     <span class="info-label">নাম (বাংলা)</span>
//                     <span class="info-value">${formData.MotherNameBangla || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">নাম (ইংরেজি)</span>
//                     <span class="info-value">${formData.MotherName || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">পেশা</span>
//                     <span class="info-value">${formData.MotherJob || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">শিক্ষাগত যোগ্যতা</span>
//                     <span class="info-value">${formData.MotherEdu || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">মোবাইল</span>
//                     <span class="info-value">${formData.MotherMobile || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">WhatsApp</span>
//                     <span class="info-value">${formData.MotherWhatsapp || '-'}</span>
//                   </div>
//                 </div>
//               </div>

//               ${(formData.guardianName || formData.guardianNameBangla) ? `
//               <div class="address-box">
//                 <div class="address-title">অভিভাবকের তথ্য (পিতা-মাতা ব্যতীত)</div>
//                 <div class="grid-2">
//                   <div class="info-field">
//                     <span class="info-label">নাম (বাংলা)</span>
//                     <span class="info-value">${formData.guardianNameBangla || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">নাম (ইংরেজি)</span>
//                     <span class="info-value">${formData.guardianName || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">সম্পর্ক</span>
//                     <span class="info-value">${formData.guardianRelation || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">মোবাইল</span>
//                     <span class="info-value">${formData.guardianMobile || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">WhatsApp</span>
//                     <span class="info-value">${formData.guardianWhatsapp || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">পেশা</span>
//                     <span class="info-value">${formData.guardianJob || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">ঠিকানা</span>
//                     <span class="info-value">${formData.guardianAddress || '-'}</span>
//                   </div>
//                 </div>
//               </div>
//               ` : ''}
//             </div>
//           </div>

//           <!-- Family Environment -->
//           ${(formData.HalalIncome || formData.ParentsPrayer || formData.Addiction || formData.TV || formData.QuranRecitation || formData.Purdah) ? `
//           <div class="section">
//             <div class="section-title">পারিবারিক পরিবেশ</div>
//             <div class="section-content">
//               <div class="grid-2">
//                 <div class="info-field">
//                   <span class="info-label">পরিবারের উপার্জন ১০০% হালাল?</span>
//                   <span class="info-value">${getBengaliValue('HalalIncome', formData.HalalIncome)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">পিতা-মাতা নিয়মিত নামাজ পড়েন?</span>
//                   <span class="info-value">${getBengaliValue('ParentsPrayer', formData.ParentsPrayer)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">পরিবারে মাদক/নেশায় আক্রান্ত?</span>
//                   <span class="info-value">${getBengaliValue('Addiction', formData.Addiction)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">বাসায় টেলিভিশন?</span>
//                   <span class="info-value">${getBengaliValue('TV', formData.TV)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">নিয়মিত কুরআন তিলাওয়াত?</span>
//                   <span class="info-value">${getBengaliValue('QuranRecitation', formData.QuranRecitation)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">পর্দা পালন?</span>
//                   <span class="info-value">${getBengaliValue('Purdah', formData.Purdah)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           ` : ''}

//           <!-- Behavior Skills -->
//           ${(formData.MobileUsage || formData.GeneralBehavior || formData.Obedience) ? `
//           <div class="section">
//             <div class="section-title">আচরণ ও দক্ষতা</div>
//             <div class="section-content">
//               <div class="grid-2">
//                 <div class="info-field">
//                   <span class="info-label">দৈনিক মোবাইল ব্যবহার</span>
//                   <span class="info-value">${formData.MobileUsage || '-'}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">সন্তানের আচরণ</span>
//                   <span class="info-value">${getBengaliValue('GeneralBehavior', formData.GeneralBehavior)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">পিতা-মাতার কথা শোনে?</span>
//                   <span class="info-value">${getBengaliValue('Obedience', formData.Obedience)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">বড়দের সাথে আচরণ</span>
//                   <span class="info-value">${getBengaliValue('ElderBehavior', formData.ElderBehavior)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">ছোটদের সাথে আচরণ</span>
//                   <span class="info-value">${getBengaliValue('YoungerBehavior', formData.YoungerBehavior)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">মিথ্যা বলে বা জেদ করে?</span>
//                   <span class="info-value">${getBengaliValue('LyingStubbornness', formData.LyingStubbornness)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">পড়ালেখায় আগ্রহ</span>
//                   <span class="info-value">${getBengaliValue('StudyInterest', formData.StudyInterest)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">ধর্মীয় কাজে আগ্রহ</span>
//                   <span class="info-value">${getBengaliValue('ReligiousInterest', formData.ReligiousInterest)}</span>
//                 </div>
//                 <div class="info-field">
//                   <span class="info-label">রাগ নিয়ন্ত্রণ</span>
//                   <span class="info-value">${getBengaliValue('AngerControl', formData.AngerControl)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           ` : ''}

//           <!-- Address -->
//           <div class="section">
//             <div class="section-title">ঠিকানা</div>
//             <div class="section-content">
//               <div class="address-box">
//                 <div class="address-title">বর্তমান ঠিকানা</div>
//                 <div class="grid-3">
//                   <div class="info-field">
//                     <span class="info-label">গ্রাম/এলাকা</span>
//                     <span class="info-value">${formData.village || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">ডাকঘর</span>
//                     <span class="info-value">${formData.postOffice || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">পোস্ট কোড</span>
//                     <span class="info-value">${formData.postCode || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">থানা</span>
//                     <span class="info-value">${formData.policeStation || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">জেলা</span>
//                     <span class="info-value">${formData.district || '-'}</span>
//                   </div>
//                 </div>
//               </div>

//               <div class="address-box">
//                 <div class="address-title">স্থায়ী ঠিকানা</div>
//                 <div class="grid-3">
//                   <div class="info-field">
//                     <span class="info-label">গ্রাম/এলাকা</span>
//                     <span class="info-value">${formData.permVillage || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">ডাকঘর</span>
//                     <span class="info-value">${formData.permPostOffice || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">পোস্ট কোড</span>
//                     <span class="info-value">${formData.permPostCode || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">থানা</span>
//                     <span class="info-value">${formData.permPoliceStation || '-'}</span>
//                   </div>
//                   <div class="info-field">
//                     <span class="info-label">জেলা</span>
//                     <span class="info-value">${formData.permDistrict || '-'}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Documents -->
//           ${(formData.photographs || formData.birthCertificate || formData.markSheet || formData.transferCertificate || formData.characterCertificate) ? `
//           <div class="section">
//             <div class="section-title">প্রদত্ত ডকুমেন্টসমূহ</div>
//             <div class="section-content">
//               <div class="documents-grid">
//                 ${formData.photographs ? '<span class="document-badge">ছবি</span>' : ''}
//                 ${formData.birthCertificate ? '<span class="document-badge">জন্ম নিবন্ধন সনদ</span>' : ''}
//                 ${formData.markSheet ? '<span class="document-badge">মার্কশিট</span>' : ''}
//                 ${formData.transferCertificate ? '<span class="document-badge">ট্রান্সফার সার্টিফিকেট</span>' : ''}
//                 ${formData.characterCertificate ? '<span class="document-badge">চরিত্র সনদপত্র</span>' : ''}
//               </div>
//             </div>
//           </div>
//           ` : ''}

//           <!-- Terms -->
//           ${formData.termsAccepted ? `
//           <div class="terms-box">
//             <div class="terms-text">
//               আমি ভর্তির সকল শর্ত মেনে নিচ্ছি
//             </div>
//           </div>
//           ` : ''}

//           <!-- Footer -->
//           <div class="footer">
//             <div>এই ফর্মটি কম্পিউটার দ্বারা জেনারেটেড, স্বাক্ষরের প্রয়োজন নেই</div>
//             <div class="footer-note">ক্রাফট ইন্টারন্যাশনাল স্কুল</div>
//           </div>
//         </div>
        
//         <script>
//           window.onload = function() {
//             setTimeout(() => {
//               window.print();
//             }, 500);
//           }
//         </script>
//       </body>
//       </html>
//     `;

//     // Create a new window for printing
//     const printWindow = window.open('', '_blank');
//     if (!printWindow) {
//       alert('পপআপ ব্লকার সক্রিয় রয়েছে। অনুগ্রহ করে পপআপ অনুমতি দিন।');
//       document.body.removeChild(loadingToast);
//       return;
//     }

//     // Write the content
//     printWindow.document.write(pdfContent);
//     printWindow.document.close();

//     // Remove loading toast
//     setTimeout(() => {
//       document.body.removeChild(loadingToast);
//     }, 1000);

//   } catch (error) {
//     console.error('PDF generation error:', error);
//     alert('PDF তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    
//     const toast = document.querySelector('.fixed.top-4.right-4');
//     if (toast) toast.remove();
//   }
// };


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const generatePDFFromData = (formData: Record<string, any>, studentId: string, fileName: string = 'admission-form.pdf') => {
  try {
    const loadingToast = document.createElement('div');
    loadingToast.className = 'fixed top-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-bounce transition-all';
    loadingToast.innerText = 'PDF জেনারেট হচ্ছে...';
    document.body.appendChild(loadingToast);

    const getBengaliValue = (key: string, value: any): string => {
      if (!value) return 'প্রযোজ্য নয়';
      const valueMap: Record<string, Record<string, string>> = {
        gender: { male: 'পুরুষ', female: 'মহিলা', other: 'অন্যান্য' },
        yesno: { 'Yes': 'হ্যাঁ', 'No': 'না' },
        prayer: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Sometimes': 'মাঝেমাঝে' },
        purdah: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Trying': 'চেষ্টা করা হয়' },
        behavior: { 
          'Very Good': 'চমৎকার', 'Good': 'ভালো', 'Average': 'সাধারণ',
          'Not At All': 'একদম না', 'Somewhat': 'মোটামুটি', 'Fully': 'পুরোপুরি',
          'Too Much': 'অত্যধিক', 'Sometimes': 'মাঝেমাঝে', 'Never': 'কখনো না',
          'Very Interested': 'খুবই আগ্রহী', 'Moderate': 'মাঝারি', 'Less Interested': 'কম আগ্রহী',
          'Excellent': 'অত্যন্ত ভালো', 'Needs Improvement': 'উন্নতি প্রয়োজন'
        }
      };
      if (key.includes('gender') && valueMap.gender[value]) return valueMap.gender[value];
      if (['HalalIncome', 'ParentsPrayer', 'Addiction', 'TV'].includes(key) && valueMap.yesno[value]) return valueMap.yesno[value];
      if (key === 'QuranRecitation' && valueMap.prayer[value]) return valueMap.prayer[value];
      if (key === 'Purdah' && valueMap.purdah[value]) return valueMap.purdah[value];
      return valueMap.behavior[value] || value.toString();
    };

    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;600;700&display=swap');
          
          :root {
            --primary: #1e3a8a;
            --secondary: #4338ca;
            --accent: #f59e0b;
            --text-dark: #1f2937;
            --text-light: #6b7280;
            --bg-soft: #f8fafc;
            --border: #e2e8f0;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          body {
            font-family: 'Hind Siliguri', sans-serif;
            background: #cbd5e1;
            color: var(--text-dark);
            line-height: 1.6;
            padding: 40px 0;
          }

          .pdf-page {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: white;
            padding: 50px;
            position: relative;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
          }

          /* Header Styling */
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 4px solid var(--primary);
            padding-bottom: 20px;
            margin-bottom: 30px;
          }

          .school-info { flex: 1; }
          .school-name {
            font-size: 32px;
            font-weight: 800;
            color: var(--primary);
            letter-spacing: -0.5px;
            margin-bottom: 4px;
          }
          .form-type {
            font-size: 18px;
            color: var(--accent);
            font-weight: 600;
            text-transform: uppercase;
          }

          .meta-info {
            text-align: right;
            font-size: 13px;
          }
          .id-badge {
            background: var(--primary);
            color: white;
            padding: 5px 15px;
            border-radius: 4px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 8px;
          }

          /* Section Styling */
          .section {
            margin-bottom: 25px;
          }

          .section-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            background: var(--bg-soft);
            padding: 8px 15px;
            border-left: 5px solid var(--primary);
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px 30px;
          }

          .field {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid var(--border);
            padding-bottom: 4px;
          }

          .label {
            font-size: 11px;
            color: var(--text-light);
            font-weight: 600;
          }

          .value {
            font-size: 15px;
            font-weight: 500;
            color: var(--text-dark);
          }

          /* Special Address Box */
          .address-group {
            background: var(--bg-soft);
            border-radius: 8px;
            padding: 15px;
            margin-top: 10px;
          }
          .sub-heading {
            font-size: 14px;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 10px;
            border-bottom: 1px solid #cbd5e1;
          }

          .document-tag {
            display: inline-block;
            background: #dcfce7;
            color: #166534;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            margin: 4px;
            border: 1px solid #bbf7d0;
          }

          .footer-sign {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }
          .sign-box {
            border-top: 1px solid var(--text-dark);
            width: 180px;
            text-align: center;
            padding-top: 5px;
            font-size: 12px;
          }

          @media print {
            body { background: white; padding: 0; }
            .pdf-page { box-shadow: none; margin: 0; width: 100%; }
            .section { break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="pdf-page">
          <div class="header">
            <div class="school-info">
              <h1 class="school-name">ক্রাফট ইন্টারন্যাশনাল স্কুল</h1>
              <p class="form-type">শিক্ষার্থী ভর্তি আবেদনপত্র</p>
            </div>
            <div class="meta-info">
              <div class="id-badge">আইডি: ${studentId}</div>
              <p>আবেদনের তারিখ: ${new Date().toLocaleDateString('bn-BD')}</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">ব্যক্তিগত তথ্যাবলি</h2>
            <div class="grid-container">
              <div class="field"><span class="label">শিক্ষার্থীর নাম (বাংলা)</span><span class="value">${formData.StudentName || '-'}</span></div>
              <div class="field"><span class="label">Name (English)</span><span class="value">${formData.studentName || '-'}</span></div>
              <div class="field"><span class="label">জন্ম তারিখ</span><span class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('bn-BD') : '-'}</span></div>
              <div class="field"><span class="label">লিঙ্গ</span><span class="value">${getBengaliValue('gender', formData.gender)}</span></div>
              <div class="field"><span class="label">শ্রেণি</span><span class="value" style="color:var(--secondary); font-weight:700">${formData.Class || '-'}</span></div>
              <div class="field"><span class="label">রক্তের গ্রুপ</span><span class="value">${formData.bloodGroup || '-'}</span></div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">অভিভাবকের তথ্যাবলি</h2>
            <div class="address-group">
               <h3 class="sub-heading">পিতার তথ্য</h3>
               <div class="grid-container">
                  <div class="field"><span class="label">নাম</span><span class="value">${formData.FatherNameBangla || formData.FatherName || '-'}</span></div>
                  <div class="field"><span class="label">পেশা</span><span class="value">${formData.FatherJob || '-'}</span></div>
                  <div class="field"><span class="label">মোবাইল</span><span class="value">${formData.FatherMobile || '-'}</span></div>
                  <div class="field"><span class="label">হোয়াটসঅ্যাপ</span><span class="value">${formData.FatherWhatsapp || '-'}</span></div>
               </div>
            </div>
            <div class="address-group" style="margin-top:15px">
               <h3 class="sub-heading">মাতার তথ্য</h3>
               <div class="grid-container">
                  <div class="field"><span class="label">নাম</span><span class="value">${formData.MotherNameBangla || formData.MotherName || '-'}</span></div>
                  <div class="field"><span class="label">পেশা</span><span class="value">${formData.MotherJob || '-'}</span></div>
                  <div class="field"><span class="label">মোবাইল</span><span class="value">${formData.MotherMobile || '-'}</span></div>
               </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">ঠিকানা</h2>
            <div class="grid-container">
              <div class="address-group">
                <h3 class="sub-heading">বর্তমান ঠিকানা</h3>
                <p class="value" style="font-size:13px">
                  ${formData.village || '-'}, ডাকঘর: ${formData.postOffice || '-'}, <br>
                  থানা: ${formData.policeStation || '-'}, জেলা: ${formData.district || '-'}
                </p>
              </div>
              <div class="address-group">
                <h3 class="sub-heading">স্থায়ী ঠিকানা</h3>
                <p class="value" style="font-size:13px">
                  ${formData.permVillage || '-'}, ডাকঘর: ${formData.permPostOffice || '-'}, <br>
                  থানা: ${formData.permPoliceStation || '-'}, জেলা: ${formData.permDistrict || '-'}
                </p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">পারিবারিক পরিবেশ ও আচরণ</h2>
            <div class="grid-container" style="grid-template-columns: repeat(3, 1fr);">
              <div class="field"><span class="label">হালাল উপার্জন?</span><span class="value">${getBengaliValue('HalalIncome', formData.HalalIncome)}</span></div>
              <div class="field"><span class="label">পিতা-মাতা নামাজি?</span><span class="value">${getBengaliValue('ParentsPrayer', formData.ParentsPrayer)}</span></div>
              <div class="field"><span class="label">সন্তানের আচরণ</span><span class="value">${getBengaliValue('GeneralBehavior', formData.GeneralBehavior)}</span></div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">সংযুক্ত ডকুমেন্টসমূহ</h2>
            <div>
               ${formData.photographs ? '<span class="document-tag">✓ ছবি</span>' : ''}
               ${formData.birthCertificate ? '<span class="document-tag">✓ জন্ম নিবন্ধন</span>' : ''}
               ${formData.markSheet ? '<span class="document-tag">✓ মার্কশিট</span>' : ''}
               ${formData.transferCertificate ? '<span class="document-tag">✓ টিসি</span>' : ''}
            </div>
          </div>

          <div class="footer-sign">
            <div class="sign-box">অভিভাবকের স্বাক্ষর</div>
            <div class="sign-box" style="border-top:0; font-style:italic; color:var(--text-light)">
              সিস্টেম জেনারেটেড কপি
            </div>
            <div class="sign-box">কর্তৃপক্ষের স্বাক্ষর</div>
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(() => { window.print(); }, 800);
          }
        </script>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('পপআপ ব্লকার সক্রিয় রয়েছে।');
      document.body.removeChild(loadingToast);
      return;
    }

    printWindow.document.write(pdfContent);
    printWindow.document.close();

    setTimeout(() => {
      if (document.body.contains(loadingToast)) document.body.removeChild(loadingToast);
    }, 2000);

  } catch (error) {
    console.error('PDF error:', error);
    alert('সমস্যা হয়েছে।');
  }
};