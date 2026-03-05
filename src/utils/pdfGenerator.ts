/* eslint-disable @typescript-eslint/no-explicit-any */

import { getBengaliValue } from "./pdfHelper";
import { pdfStyles } from "./pdfStyles";


/**
 * Main Generator
 */
export const generatePDFFromData = (formData: Record<string, any>, studentId: string) => {
  const currentDate = new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
  const logoUrl = window.location.origin + "/img/logo.png";

  const icons = {
    student: `<svg class="section-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    academic: `<svg class="section-icon" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>`,
    parent: `<svg class="section-icon" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    behavior: `<svg class="section-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.41.33.87.33 1.35 0 4.41-3.59 8-8 8z"/></svg>`,
    address: `<svg class="section-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
    docs: `<svg class="section-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`
  };

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ভর্তি ফর্ম - ${studentId}</title>
  ${pdfStyles}
</head>
<body>
  <div class="pdf-wrapper">
    <div class="sidebar">
      <div class="sidebar-photo">
        ${formData.studentPhoto ? `<img src="${formData.studentPhoto}" alt="Student" />` : '<div style="color:white; font-size:10px; padding-top:60px; text-align:center">ছবি</div>'}
      </div>
      <div class="sidebar-id">আইডি: ${studentId}</div>
      
      <div class="sidebar-info">
        <div class="sidebar-info-item"><span class="sidebar-label">শ্রেণি</span><strong>${formData.Class || '-'}</strong></div>
        <div class="sidebar-info-item"><span class="sidebar-label">বিভাগ</span><strong>${formData.studentDepartment || '-'}</strong></div>
        <div class="sidebar-info-item"><span class="sidebar-label">সেশন</span><strong>${formData.session || '-'}</strong></div>
        <div class="sidebar-info-item"><span class="sidebar-label">রক্তের গ্রুপ</span><strong>${formData.bloodGroup || '-'}</strong></div>
      </div>

      <div style="font-size: 11px; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px; width: 100%;">
        <span class="sidebar-label">স্থায়ী জেলা</span>
        <strong style="font-size: 13px;">${formData.permDistrict || '-'}</strong>
      </div>
    </div>

    <div class="main-content">
      <div class="main-header">
        <img src="${logoUrl}" class="logo-img" onerror="this.style.opacity='0'" />
        <div style="text-align: right;">
          <h2 style="color: var(--purple-dark); font-size: 22px; font-weight: 700;">ভর্তি আবেদন ফরম</h2>
          <p style="color: var(--text-gray); font-size: 12px;">আবেদন আইডি: ${studentId}</p>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.student} শিক্ষার্থীর প্রাথমিক তথ্য</div>
        <div class="grid grid-2">
          <div class="field"><span class="label">নাম (বাংলা)</span><div class="value">${formData.StudentName || '-'}</div></div>
          <div class="field"><span class="label">নাম (ইংরেজি)</span><div class="value">${formData.studentName || '-'}</div></div>
        </div>
        <div class="grid grid-3">
          <div class="field"><span class="label">জন্ম তারিখ</span><div class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString('bn-BD') : '-'}</div></div>
          <div class="field"><span class="label">বয়স</span><div class="value">${formData.Age || '-'}</div></div>
          <div class="field"><span class="label">এনআইডি/জন্ম নিবন্ধন</span><div class="value">${formData.nidBirth || '-'}</div></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.parent} অভিভাবকের তথ্য</div>
        <div class="grid grid-2">
           <div class="address-card">
              <strong>পিতা:</strong> ${formData.FatherNameBangla || '-'}
              <div class="field"><span class="label">মোবাইল</span><div class="value">${formData.FatherMobile || '-'}</div></div>
           </div>
           <div class="address-card">
              <strong>মাতা:</strong> ${formData.MotherNameBangla || '-'}
              <div class="field"><span class="label">মোবাইল</span><div class="value">${formData.MotherMobile || '-'}</div></div>
           </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.behavior} পারিবারিক পরিবেশ ও আচরণ</div>
        <div class="grid grid-3">
          <div class="field"><span class="label">হালাল উপার্জন</span><div class="value">${getBengaliValue('HalalIncome', formData.HalalIncome)}</div></div>
          <div class="field"><span class="label">পর্দা পালন</span><div class="value">${getBengaliValue('Purdah', formData.Purdah)}</div></div>
          <div class="field"><span class="label">রাগ নিয়ন্ত্রণ</span><div class="value">${getBengaliValue('AngerControl', formData.AngerControl)}</div></div>
          <div class="field"><span class="label">নামাজ (পিতা-মাতা)</span><div class="value">${getBengaliValue('ParentsPrayer', formData.ParentsPrayer)}</div></div>
          <div class="field"><span class="label">পড়ালেখায় আগ্রহ</span><div class="value">${getBengaliValue('StudyInterest', formData.StudyInterest)}</div></div>
          <div class="field"><span class="label">মোবাইল ব্যবহার</span><div class="value">${formData.MobileUsage || '-'}</div></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.address} যোগাযোগ ঠিকানা</div>
        <div class="address-card">
          <div class="value" style="border:none; font-size:12px">
            বর্তমান ঠিকানা: ${formData.village || '-'}, ডাকঘর: ${formData.postOffice || '-'}, থানা: ${formData.policeStation || '-'}, জেলা: ${formData.district || '-'}
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.docs} জমাকৃত ডকুমেন্টস ও অঙ্গীকারনামা</div>
        <div class="doc-grid">
          <div class="doc-item">
            <div class="check-box">${formData.photographs ? '✓' : ''}</div>
            <span>শিক্ষার্থীর পাসপোর্ট সাইজের ৪ কপি রঙিন ছবি (বাধ্যতামূলক)</span>
          </div>
          <div class="doc-item">
            <div class="check-box">${formData.birthCertificate ? '✓' : ''}</div>
            <span>শিক্ষার্থীর জন্ম নিবন্ধন সনদ (বাধ্যতামূলক)</span>
          </div>
          <div class="doc-item">
            <div class="check-box">${formData.birthCertificate ? '✓' : ''}</div>
            <span>পিতা-মাতার জাতীয় পরিচয়পত্রের ফটোকপি/পাসপোর্টের ফটোকপি (বাধ্যতামূলক)</span>
          </div>
          <div class="doc-item">
            <div class="check-box">${formData.markSheet ? '✓' : ''}</div>
            <span>মার্কশিট</span>
          </div>
          <div class="doc-item">
            <div class="check-box">${formData.transferCertificate ? '✓' : ''}</div>
            <span>টি.সি</span>
          </div>
        </div>
        
        ${formData.termsAccepted ? `
        <div style="margin-top:12px; font-size:11px; display:flex; align-items:flex-start; gap:8px; color:var(--purple-dark); font-weight:700; background: var(--purple-light); padding: 10px; border-radius: 6px;">
           <div class="check-box" style="flex-shrink:0; margin-top:2px">✓</div> 
           <span>আমি <span style="border-bottom: 1px dotted var(--purple-dark); padding: 0 5px;">${formData.StudentName || '---------------'}</span> সজ্ঞানে অঙ্গীকার করছি যে, অত্র প্রতিষ্ঠানের সকল নিয়মকানুন যথানিয়মে মেনে চলব। যদি প্রতিষ্ঠানের আইন পরিপন্থি কোনো কিছু আমার মাঝে পরিলক্ষিত হয়, তবে কর্তৃপক্ষের যে কোন সিদ্ধান্ত মেনে নিতে বাধ্য থাকব।</span>
        </div>` : ''}
      </div>

      <div class="footer-signs">
        <div class="sign-line">অভিভাবকের স্বাক্ষর</div>
        <div class="sign-line">অধ্যক্ষের স্বাক্ষর</div>
      </div>

      <div style="text-align:center; margin-top:15px; font-size:9px; color:var(--text-gray);">
        আবেদনের তারিখ: ${currentDate} | Craft International Institute
      </div>
    </div>
  </div>
  <script>window.onload = () => { setTimeout(() => window.print(), 800); }</script>
</body>
</html>`;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
};