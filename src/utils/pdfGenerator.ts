/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const generatePDFFromData = (formData: Record<string, any>, studentId: string, fileName: string = 'admission-form.pdf') => {
  try {
    const loadingToast = document.createElement('div');
    loadingToast.className = 'fixed top-4 right-4 bg-purple-700 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-pulse transition-all flex items-center gap-3';
    loadingToast.innerHTML = `<span>প্রিন্ট কপি তৈরি হচ্ছে...</span>`;
    document.body.appendChild(loadingToast);

    const getBengaliValue = (key: string, value: any): string => {
      if (!value) return '-';
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
          @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
          
          :root {
            --purple-main: #6b21a8;
            --purple-light: #f3e8ff;
            --purple-dark: #4c1d95;
            --gray-text: #374151;
            --border-color: #e9d5ff;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Hind Siliguri', sans-serif; }
          
          body { background: #f3f4f6; color: var(--gray-text); padding: 20px; }

          .a4-container {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: white;
            padding: 40px;
            position: relative;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }

          /* Header Section */
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 3px solid var(--purple-main);
            padding-bottom: 20px;
            margin-bottom: 30px;
          }

          .school-brand { display: flex; align-items: center; gap: 15px; }
          .logo-placeholder {
            width: 60px;
            height: 60px;
            background: var(--purple-main);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
          }

          .title-area h1 {
            color: var(--purple-main);
            font-size: 28px;
            font-weight: 800;
            line-height: 1;
          }
          .title-area p {
            color: var(--purple-dark);
            font-weight: 600;
            font-size: 16px;
            margin-top: 5px;
          }

          /* Passport Photo */
          .photo-box {
            width: 120px;
            height: 140px;
            border: 2px dashed var(--purple-main);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--purple-light);
            overflow: hidden;
          }
          .photo-box img { width: 100%; height: 100%; object-fit: cover; }
          .photo-box span { font-size: 10px; color: var(--purple-main); text-align: center; padding: 5px; }

          /* Student ID Bar */
          .id-bar {
            background: var(--purple-main);
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
          }
          .id-number { font-size: 20px; font-weight: 800; letter-spacing: 1px; }

          /* Grid & Sections */
          .section { margin-bottom: 25px; }
          .section-title {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--purple-main);
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 12px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 5px;
          }

          .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
          .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }

          .info-card {
            padding: 8px 12px;
            background: #fafafa;
            border-radius: 6px;
            border-left: 3px solid var(--border-color);
          }
          .label { font-size: 11px; color: #6b7280; font-weight: 600; display: block; }
          .value { font-size: 14px; color: var(--gray-text); font-weight: 500; }

          /* Address & Documents Styling */
          .purple-box {
            background: var(--purple-light);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 15px;
          }

          .doc-item {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .doc-item:last-child { border: none; }
          .status-badge {
            font-size: 11px;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: 700;
          }
          .status-received { background: #dcfce7; color: #166534; }
          .status-pending { background: #fee2e2; color: #991b1b; }

          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
          }

          @media print {
            body { background: white; padding: 0; }
            .a4-container { box-shadow: none; width: 100%; padding: 30px; }
            .purple-box { -webkit-print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div class="a4-container">
          <div class="header">
            <div class="school-brand">
              <div class="logo-placeholder">CIS</div>
              <div class="title-area">
                <h1>ক্রাফট ইন্টারন্যাশনাল স্কুল</h1>
                <p>ভর্তি আবেদন ফরম (অফিস কপি)</p>
              </div>
            </div>
            <div class="photo-box">
              ${formData.studentPhoto 
                ? `<img src="${formData.studentPhoto}" />` 
                : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--purple-main); opacity:0.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                   <span>পাসপোর্ট সাইজ ছবি</span>`
              }
            </div>
          </div>

          <div class="id-bar">
            <span>স্টুডেন্ট আইডি নং: <span class="id-number">${studentId}</span></span>
            <span>তারিখ: ${new Date().toLocaleDateString('bn-BD')}</span>
          </div>

          <div class="section">
            <h2 class="section-title">শিক্ষার্থীর প্রাথমিক তথ্য</h2>
            <div class="grid-3">
              <div class="info-card"><span class="label">বাংলা নাম</span><span class="value">${formData.StudentName || '-'}</span></div>
              <div class="info-card"><span class="label">ইংরেজি নাম</span><span class="value">${formData.studentName || '-'}</span></div>
              <div class="info-card"><span class="label">শ্রেণি</span><span class="value" style="color:var(--purple-main); font-weight:bold">${formData.Class || '-'}</span></div>
              <div class="info-card"><span class="label">জন্ম তারিখ</span><span class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('bn-BD') : '-'}</span></div>
              <div class="info-card"><span class="label">লিঙ্গ</span><span class="value">${getBengaliValue('gender', formData.gender)}</span></div>
              <div class="info-card"><span class="label">রক্তের গ্রুপ</span><span class="value">${formData.bloodGroup || '-'}</span></div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">ঠিকানা</h2>
            <div class="grid-2">
              <div class="purple-box">
                <span class="label" style="color:var(--purple-dark); margin-bottom:8px">বর্তমান ঠিকানা</span>
                <p class="value">গ্রাম/এলাকা: ${formData.village || '-'}</p>
                <p class="value">ডাকঘর: ${formData.postOffice || '-'} (${formData.postCode || '-'})</p>
                <p class="value">থানা: ${formData.policeStation || '-'}, জেলা: ${formData.district || '-'}</p>
              </div>
              <div class="purple-box">
                <span class="label" style="color:var(--purple-dark); margin-bottom:8px">স্থায়ী ঠিকানা</span>
                <p class="value">গ্রাম/এলাকা: ${formData.permVillage || '-'}</p>
                <p class="value">ডাকঘর: ${formData.permPostOffice || '-'} (${formData.permPostCode || '-'})</p>
                <p class="value">থানা: ${formData.permPoliceStation || '-'}, জেলা: ${formData.permDistrict || '-'}</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">ডকুমেন্ট স্ট্যাটাস</h2>
            <div class="purple-box grid-2" style="gap:40px">
              <div>
                <div class="doc-item">
                  <span class="value">ছবি</span>
                  <span class="status-badge ${formData.photographs ? 'status-received' : 'status-pending'}">${formData.photographs ? 'জমা দেওয়া হয়েছে' : 'বাকি আছে'}</span>
                </div>
                <div class="doc-item">
                  <span class="value">জন্ম নিবন্ধন সনদ</span>
                  <span class="status-badge ${formData.birthCertificate ? 'status-received' : 'status-pending'}">${formData.birthCertificate ? 'জমা দেওয়া হয়েছে' : 'বাকি আছে'}</span>
                </div>
                <div class="doc-item">
                  <span class="value">মার্কশিট</span>
                  <span class="status-badge ${formData.markSheet ? 'status-received' : 'status-pending'}">${formData.markSheet ? 'জমা দেওয়া হয়েছে' : 'বাকি আছে'}</span>
                </div>
              </div>
              <div>
                <div class="doc-item">
                  <span class="value">ট্রান্সফার সার্টিফিকেট</span>
                  <span class="status-badge ${formData.transferCertificate ? 'status-received' : 'status-pending'}">${formData.transferCertificate ? 'জমা দেওয়া হয়েছে' : 'বাকি আছে'}</span>
                </div>
                <div class="doc-item">
                  <span class="value">চরিত্র সনদপত্র</span>
                  <span class="status-badge ${formData.characterCertificate ? 'status-received' : 'status-pending'}">${formData.characterCertificate ? 'জমা দেওয়া হয়েছে' : 'বাকি আছে'}</span>
                </div>
              </div>
            </div>
          </div>

          <div style="margin-top:60px; display:flex; justify-content:space-between; padding:0 20px">
            <div style="border-top:1px solid #000; width:150px; text-align:center; font-size:12px; padding-top:5px">অভিভাবকের স্বাক্ষর</div>
            <div style="border-top:1px solid #000; width:150px; text-align:center; font-size:12px; padding-top:5px">অফিস প্রধানের স্বাক্ষর</div>
          </div>

          <div class="footer">
            <p>ক্রাফট ইন্টারন্যাশনাল স্কুল - নৈতিক শিক্ষার এক অনন্য প্রতিষ্ঠান</p>
            <p style="font-size:10px; margin-top:5px">এটি একটি অটো-জেনারেটেড ডিজিটাল কপি।</p>
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(() => { window.print(); window.close(); }, 500);
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
  }
};