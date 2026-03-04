/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBengaliValue } from "./pdfHelper";
import { pdfStyles } from "./pdfStyles";

// Helper to convert option values to Bangla


// Main PDF generator
export const generatePDFFromData = (formData: Record<string, any>, studentId: string) => {
  const currentDate = new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });

  // SVG Icons for Sections
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
        ${formData.studentPhoto ? `<img src="${formData.studentPhoto}" alt="Student" />` : '<div style="color:white; font-size:10px">পাসপোর্ট সাইজ ছবি</div>'}
      </div>
      <div class="sidebar-id">আইডি: ${studentId}</div>
      
      <div class="sidebar-info">
        <div class="sidebar-info-item">
          <span class="sidebar-label">শ্রেণি</span>
          <strong>${formData.Class || '-'}</strong>
        </div>
        <div class="sidebar-info-item">
          <span class="sidebar-label">বিভাগ</span>
          <strong>${formData.studentDepartment || '-'}</strong>
        </div>
        <div class="sidebar-info-item">
          <span class="sidebar-label">সেশন</span>
          <strong>${formData.session || '-'}</strong>
        </div>
        <div class="sidebar-info-item">
          <span class="sidebar-label">লিঙ্গ</span>
          <strong>${getBengaliValue('gender', formData.gender)}</strong>
        </div>
        <div class="sidebar-info-item">
          <span class="sidebar-label">রক্তের গ্রুপ</span>
          <strong>${formData.bloodGroup || '-'}</strong>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="main-header">
        <h1>Craft International Institute</h1>
        <p>ভর্তি আবেদন ফরম</p>
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
          <div class="field"><span class="label">জাতীয়তা</span><div class="value">${formData.nationality || '-'}</div></div>
        </div>
        <div class="field"><span class="label">এনআইডি/জন্ম নিবন্ধন</span><div class="value">${formData.nidBirth || '-'}</div></div>
      </div>

      ${(formData.PrevSchool || formData.PrevClass || formData.GPA) ? `
      <div class="section">
        <div class="section-title">${icons.academic} পূর্ববর্তী একাডেমিক তথ্য</div>
        <div class="grid grid-3">
          <div class="field"><span class="label">পূর্ববর্তী প্রতিষ্ঠান</span><div class="value">${formData.PrevSchool || '-'}</div></div>
          <div class="field"><span class="label">পূর্ববর্তী শ্রেণি</span><div class="value">${formData.PrevClass || '-'}</div></div>
          <div class="field"><span class="label">সর্বশেষ জিপিএ</span><div class="value">${formData.GPA || '-'}</div></div>
        </div>
      </div>
      ` : ''}

      <div class="section">
        <div class="section-title">${icons.parent} অভিভাবকের তথ্য</div>
        <div class="grid grid-2">
           <div class="address-card">
              <strong>পিতা:</strong> ${formData.FatherNameBangla || '-'}
              <div class="field"><span class="label">পেশা ও শিক্ষা</span><div class="value">${formData.FatherJob || '-'} (${formData.FatherEdu || '-'})</div></div>
              <div class="field"><span class="label">মোবাইল ও WhatsApp</span><div class="value">${formData.FatherMobile || '-'} / ${formData.FatherWhatsapp || '-'}</div></div>
           </div>
           <div class="address-card">
              <strong>মাতা:</strong> ${formData.MotherNameBangla || '-'}
              <div class="field"><span class="label">পেশা ও শিক্ষা</span><div class="value">${formData.MotherJob || '-'} (${formData.MotherEdu || '-'})</div></div>
              <div class="field"><span class="label">মোবাইল ও WhatsApp</span><div class="value">${formData.MotherMobile || '-'} / ${formData.MotherWhatsapp || '-'}</div></div>
           </div>
        </div>
        ${formData.guardianName ? `
          <div class="address-card" style="margin-top:10px; border-left-color: #9333ea;">
            <strong>অন্য অভিভাবক:</strong> ${formData.guardianNameBangla || formData.guardianName}
            <div class="grid grid-3">
              <div class="field"><span class="label">সম্পর্ক</span><div class="value">${formData.guardianRelation || '-'}</div></div>
              <div class="field"><span class="label">মোবাইল</span><div class="value">${formData.guardianMobile || '-'}</div></div>
              <div class="field"><span class="label">পেশা</span><div class="value">${formData.guardianJob || '-'}</div></div>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="section">
        <div class="section-title">${icons.behavior} পারিবারিক পরিবেশ ও আচরণ</div>
        <div class="grid grid-3">
          <div class="field"><span class="label">হালাল উপার্জন</span><div class="value">${getBengaliValue('HalalIncome', formData.HalalIncome)}</div></div>
          <div class="field"><span class="label">নামাজ (পিতা-মাতা)</span><div class="value">${getBengaliValue('ParentsPrayer', formData.ParentsPrayer)}</div></div>
          <div class="field"><span class="label">পর্দা পালন</span><div class="value">${getBengaliValue('Purdah', formData.Purdah)}</div></div>
          <div class="field"><span class="label">সাধারণ আচরণ</span><div class="value">${getBengaliValue('GeneralBehavior', formData.GeneralBehavior)}</div></div>
          <div class="field"><span class="label">পড়ালেখায় আগ্রহ</span><div class="value">${getBengaliValue('StudyInterest', formData.StudyInterest)}</div></div>
          <div class="field"><span class="label">মোবাইল ব্যবহার</span><div class="value">${formData.MobileUsage || '-'}</div></div>
          <div class="field"><span class="label">কুরআন তিলাওয়াত</span><div class="value">${getBengaliValue('QuranRecitation', formData.QuranRecitation)}</div></div>
          <div class="field"><span class="label">টিভি দেখা</span><div class="value">${getBengaliValue('TV', formData.TV)}</div></div>
          <div class="field"><span class="label">রাগ নিয়ন্ত্রণ</span><div class="value">${getBengaliValue('AngerControl', formData.AngerControl)}</div></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.address} ঠিকানা</div>
        <div class="grid grid-2">
          <div class="address-card">
            <span class="label">বর্তমান ঠিকানা</span>
            <div class="value" style="border:none; font-size:11px">
              ${formData.village || '-'}, ডাকঘর: ${formData.postOffice || '-'}, থানা: ${formData.policeStation || '-'}, জেলা: ${formData.district || '-'}
            </div>
          </div>
          <div class="address-card">
            <span class="label">স্থায়ী ঠিকানা</span>
            <div class="value" style="border:none; font-size:11px">
              ${formData.permVillage || '-'}, ডাকঘর: ${formData.permPostOffice || '-'}, থানা: ${formData.permPoliceStation || '-'}, জেলা: ${formData.permDistrict || '-'}
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">${icons.docs} জমাকৃত ডকুমেন্টস ও অঙ্গীকারনামা</div>
        <div class="doc-grid">
          <div class="doc-item"><div class="check-box">${formData.photographs ? '✓' : ''}</div> ৪ কপি ছবি</div>
          <div class="doc-item"><div class="check-box">${formData.birthCertificate ? '✓' : ''}</div> জন্ম নিবন্ধন সনদ</div>
          <div class="doc-item"><div class="check-box">${formData.markSheet ? '✓' : ''}</div> মার্কশিট</div>
          <div class="doc-item"><div class="check-box">${formData.transferCertificate ? '✓' : ''}</div> টি.সি</div>
          <div class="doc-item"><div class="check-box">${formData.characterCertificate ? '✓' : ''}</div> চারিত্রিক সনদ</div>
        </div>
        
        ${formData.termsAccepted ? `
        <div style="margin-top:12px; font-size:11px; display:flex; align-items:center; gap:8px; color:var(--purple-dark); font-weight:700;">
           <div class="check-box">✓</div> আমি প্রতিষ্ঠানের সকল নিয়ম ও শর্তাবলী মেনে নিতে অঙ্গীকারবদ্ধ।
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
  <script>window.onload = () => { setTimeout(() => window.print(), 500); }</script>
</body>
</html>`;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
};