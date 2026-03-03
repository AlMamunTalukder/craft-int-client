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