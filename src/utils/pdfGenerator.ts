/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBengaliValue } from './pdfHelper';
import { pdfStyles } from './pdfStyles';

const renderField = (label: string, value: any) => `
  <div class="field">
    <span class="label">${label}</span>
    <span class="value">${value || "-"}</span>
  </div>
`;

export const generatePDFFromData = (formData: Record<string, any>, studentId: string) => {
  // Use absolute path for logo
  const logoUrl = window.location.origin + "/img/logo.png";

  const content = `
    <!DOCTYPE html>
    <html>
    <head>${pdfStyles}</head>
    <body>
      <div class="a4-container">
        <div class="header-main">
          <div style="display: flex; gap: 15px; align-items: center;">
            <img src="${logoUrl}" class="logo-img" onerror="this.style.opacity='0'" />
            <div class="school-info">
              <h1>ক্রাফট ইন্টারন্যাশনাল স্কুল</h1>
              <p style="font-size: 12px; color: #555;">ভর্তি আবেদন ফরম</p>
              <div class="id-badge">ID: ${studentId}</div>
            </div>
          </div>
          <div class="photo-box">
            ${formData.studentPhoto ? `<img src="${formData.studentPhoto}" />` : 'পাসপোর্ট ছবি'}
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">শিক্ষার্থীর প্রাথমিক তথ্য</h3>
          <div class="grid grid-3">
            ${renderField("নাম (বাংলা)", formData.StudentName)}
            ${renderField("নাম (ইংরেজি)", formData.studentName)}
            ${renderField("শ্রেণি", formData.Class)}
            ${renderField("জন্ম তারিখ", formData.dateOfBirth)}
            ${renderField("লিঙ্গ", getBengaliValue('gender', formData.gender))}
            ${renderField("রক্তের গ্রুপ", formData.bloodGroup)}
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">অভিভাবকের তথ্য</h3>
          <div class="grid grid-2">
            <div>
              ${renderField("পিতার নাম", formData.FatherName)}
              ${renderField("পেশা", formData.FatherJob)}
              ${renderField("মোবাইল", formData.FatherMobile)}
            </div>
            <div>
              ${renderField("মাতার নাম", formData.MotherName)}
              ${renderField("পেশা", formData.MotherJob)}
              ${renderField("মোবাইল", formData.MotherMobile)}
            </div>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">পারিবারিক পরিবেশ ও আচরণ</h3>
          <div class="grid grid-3">
            ${renderField("হালাল উপার্জন", getBengaliValue('HalalIncome', formData.HalalIncome))}
            ${renderField("টিভি দেখা", getBengaliValue('TV', formData.TV))}
            ${renderField("পর্দা পালন", getBengaliValue('Purdah', formData.Purdah))}
            ${renderField("পড়ালেখায় আগ্রহ", getBengaliValue('StudyInterest', formData.StudyInterest))}
            ${renderField("আচরণ", getBengaliValue('GeneralBehavior', formData.GeneralBehavior))}
            ${renderField("পিতা-মাতার কথা", getBengaliValue('Obedience', formData.Obedience))}
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">ঠিকানা</h3>
          <div class="grid grid-2">
            <div class="field"><span class="label">বর্তমান ঠিকানা</span><span class="value">${formData.village || '-'}, ${formData.policeStation || '-'}, ${formData.district || '-'}</span></div>
            <div class="field"><span class="label">স্থায়ী ঠিকানা</span><span class="value">${formData.permVillage || '-'}, ${formData.permPoliceStation || '-'}, ${formData.permDistrict || '-'}</span></div>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">জমাকৃত কাগজপত্র</h3>
          <div class="grid grid-3">
            <div class="value"><div class="checkbox">${formData.photographs ? '✓' : ''}</div> ছবি</div>
            <div class="value"><div class="checkbox">${formData.birthCertificate ? '✓' : ''}</div> জন্ম নিবন্ধন সনদ</div>
            <div class="value"><div class="checkbox">${formData.markSheet ? '✓' : ''}</div> মার্কশিট</div>
            <div class="value"><div class="checkbox">${formData.transferCertificate ? '✓' : ''}</div> টি.সি</div>
            <div class="value"><div class="checkbox">${formData.characterCertificate ? '✓' : ''}</div> চরিত্র সনদ</div>
          </div>
        </div>

        <div class="footer-signs">
          <div class="sign-box">অভিভাবকের স্বাক্ষর</div>
          <div class="sign-box">আবেদনকারীর স্বাক্ষর</div>
          <div class="sign-box">কর্তৃপক্ষের স্বাক্ষর</div>
        </div>
      </div>
      <script>
        window.onload = () => { setTimeout(() => { window.print(); }, 500); }
      </script>
    </body>
    </html>
  `;

  const printWindow = window.open("", "_blank");
  printWindow?.document.write(content);
  printWindow?.document.close();
};