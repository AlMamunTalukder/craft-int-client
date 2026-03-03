/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const generatePDFFromData = (formData: Record<string, any>, studentId: string, fileName: string = 'admission-form.pdf') => {
  try {
    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
          
          :root {
            --purple-deep: #4c1d95; /* Only for text and thin accents */
            --border-light: #e5e7eb;
            --gray-subtle: #f9fafb;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Hind Siliguri', sans-serif; }
          
          body { background: white; color: #1f2937; padding: 10mm; }

          .a4-container {
            width: 190mm;
            margin: 0 auto;
            position: relative;
          }

          /* Header & Logo Section */
          .header-main {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid var(--purple-deep);
            padding-bottom: 15px;
            margin-bottom: 20px;
          }

          .brand-section { display: flex; gap: 15px; align-items: center; }
          .logo-box {
            width: 50px;
            height: 50px;
            border: 2px solid var(--purple-deep);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--purple-deep);
          }

          .school-info h1 {
            color: var(--purple-deep);
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 2px;
          }

          .id-badge {
            display: inline-block;
            border: 1px solid var(--purple-deep);
            padding: 2px 10px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
            color: var(--purple-deep);
            margin-top: 5px;
          }

          /* Passport Photo */
          .photo-box {
            width: 110px;
            height: 130px;
            border: 1px solid #9ca3af;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            text-align: center;
            color: #6b7280;
          }
          .photo-box img { width: 100%; height: 100%; object-fit: cover; }

          /* Layout Sections */
          .section { margin-bottom: 20px; }
          .section-title {
            font-size: 14px;
            font-weight: 700;
            color: white;
            background: #374151; /* Dark gray for print efficiency over heavy purple */
            padding: 4px 12px;
            margin-bottom: 10px;
            text-transform: uppercase;
            display: inline-block;
          }

          .grid { display: grid; gap: 10px; }
          .grid-3 { grid-template-columns: repeat(3, 1fr); }
          .grid-2 { grid-template-columns: repeat(2, 1fr); }

          .field {
            border-bottom: 1px dotted #ccc;
            padding: 5px 0;
            display: flex;
            flex-direction: column;
          }
          .label { font-size: 10px; color: #666; font-weight: 600; }
          .value { font-size: 13px; font-weight: 500; }

          /* Address Box - Minimal Color */
          .address-card {
            border: 1px solid var(--border-light);
            padding: 10px;
            border-radius: 6px;
          }
          .address-card h4 {
            font-size: 12px;
            color: var(--purple-deep);
            margin-bottom: 5px;
            border-bottom: 1px solid var(--border-light);
          }

          /* Documents Checkbox UI */
          .doc-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            padding: 10px;
            border: 1px solid #eee;
          }
          .doc-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
          }
          .checkbox {
            width: 14px;
            height: 14px;
            border: 1.5px solid var(--purple-deep);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
          }

          .footer-signs {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }
          .sign-box {
            width: 150px;
            border-top: 1px solid #333;
            text-align: center;
            font-size: 11px;
            padding-top: 5px;
          }

          @media print {
            body { padding: 0; }
            .section-title { -webkit-print-color-adjust: exact; background: #374151 !important; color: white !important; }
            .checkbox { -webkit-print-color-adjust: exact; border-color: #4c1d95 !important; }
          }
        </style>
      </head>
      <body>
        <div class="a4-container">
          <div class="header-main">
            <div class="brand-section">
              <div class="logo-box">LOGO</div>
              <div class="school-info">
                <h1>ক্রাফট ইন্টারন্যাশনাল স্কুল</h1>
                <p style="font-size: 14px; color: #4b5563;">ভর্তি আবেদন ফরম</p>
                <div class="id-badge">ID: ${studentId}</div>
              </div>
            </div>
            <div class="photo-box">
              ${formData.studentPhoto 
                ? `<img src="${formData.studentPhoto}" />` 
                : `পাসপোর্ট সাইজ ছবি`
              }
            </div>
          </div>

          <div class="section">
            <h3 class="section-title">শিক্ষার্থীর তথ্য</h3>
            <div class="grid grid-3">
              <div class="field"><span class="label">নাম (বাংলা)</span><span class="value">${formData.StudentName || '-'}</span></div>
              <div class="field"><span class="label">নাম (ইংরেজি)</span><span class="value">${formData.studentName || '-'}</span></div>
              <div class="field"><span class="label">ভর্তির শ্রেণি</span><span class="value">${formData.Class || '-'}</span></div>
              <div class="field"><span class="label">জন্ম তারিখ</span><span class="value">${formData.dateOfBirth || '-'}</span></div>
              <div class="field"><span class="label">রক্তের গ্রুপ</span><span class="value">${formData.bloodGroup || '-'}</span></div>
              <div class="field"><span class="label">ধর্ম</span><span class="value">ইসলাম</span></div>
            </div>
          </div>

          <div class="section">
            <h3 class="section-title">ঠিকানা</h3>
            <div class="grid grid-2">
              <div class="address-card">
                <h4>বর্তমান ঠিকানা</h4>
                <p class="value" style="font-size:11px">গ্রাম: ${formData.village || '-'}, ডাকঘর: ${formData.postOffice || '-'} (${formData.postCode || '-'}), থানা: ${formData.policeStation || '-'}, জেলা: ${formData.district || '-'}</p>
              </div>
              <div class="address-card">
                <h4>স্থায়ী ঠিকানা</h4>
                <p class="value" style="font-size:11px">গ্রাম: ${formData.permVillage || '-'}, ডাকঘর: ${formData.permPostOffice || '-'} (${formData.permPostCode || '-'}), থানা: ${formData.permPoliceStation || '-'}, জেলা: ${formData.permDistrict || '-'}</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h3 class="section-title">জমাকৃত কাগজপত্র</h3>
            <div class="doc-grid">
              <div class="doc-item">
                <div class="checkbox">${formData.photographs ? '✓' : ''}</div>
                <span>ছবি</span>
              </div>
              <div class="doc-item">
                <div class="checkbox">${formData.birthCertificate ? '✓' : ''}</div>
                <span>জন্ম নিবন্ধন সনদ</span>
              </div>
              <div class="doc-item">
                <div class="checkbox">${formData.markSheet ? '✓' : ''}</div>
                <span>মার্কশিট</span>
              </div>
              <div class="doc-item">
                <div class="checkbox">${formData.transferCertificate ? '✓' : ''}</div>
                <span>ট্রান্সফার সার্টিফিকেট</span>
              </div>
              <div class="doc-item">
                <div class="checkbox">${formData.characterCertificate ? '✓' : ''}</div>
                <span>চরিত্র সনদপত্র</span>
              </div>
            </div>
          </div>

          <div class="footer-signs">
            <div class="sign-box">অভিভাবকের স্বাক্ষর</div>
            <div class="sign-box">আবেদনকারীর স্বাক্ষর</div>
            <div class="sign-box">কর্তৃপক্ষের স্বাক্ষর</div>
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 9px; color: #999;">
            Print Date: ${new Date().toLocaleString('bn-BD')} | System Generated Copy
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(() => { 
              window.print(); 
              // window.close(); // Optional: closes tab after print
            }, 500);
          }
        </script>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow?.document.write(pdfContent);
    printWindow?.document.close();
  } catch (error) {
    console.error('PDF generation failed', error);
  }
};