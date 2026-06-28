/* eslint-disable @typescript-eslint/no-explicit-any */
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { getBengaliValue } from "./pdfHelper";

export const generatePDFFromData = async (
  formData: Record<string, any>,
  studentId: string,
  options?: { returnHtml?: boolean }
): Promise<string | void> => {
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const logoUrl = window.location.origin + "/img/logo.png";

  const formatAddress = (addr: any) => {
    const parts = [];
    if (addr.village) parts.push(addr.village);
    if (addr.postOffice) parts.push(addr.postOffice);
    if (addr.postCode) parts.push(addr.postCode);
    if (addr.policeStation) parts.push(addr.policeStation);
    if (addr.district) parts.push(addr.district);
    return parts.join(", ") || "-";
  };

  const presentAddressStr = formatAddress({
    village: formData.village,
    postOffice: formData.postOffice,
    postCode: formData.postCode,
    policeStation: formData.policeStation,
    district: formData.district,
  });

  const permanentAddressStr = formatAddress({
    village: formData.permVillage,
    postOffice: formData.permPostOffice,
    postCode: formData.permPostCode,
    policeStation: formData.permPoliceStation,
    district: formData.permDistrict,
  });

  const getDepartmentDisplay = () => {
    if (formData.studentDepartment === "hifz") return "হিফজ";
    if (formData.studentDepartment === "academic") return "একাডেমিক";
    return "-";
  };

  const getProfessionDisplay = (professionValue: string, type: 'father' | 'mother') => {
    if (!professionValue) return "-";

    const fatherProfessions: Record<string, string> = {
      teacher: "শিক্ষক",
      doctor: "ডাক্তার",
      engineer: "ইঞ্জিনিয়ার",
      business: "ব্যবসায়ী",
      govt_job: "সরকারি চাকরিজীবি",
      private_job: "বেসরকারি চাকরিজীবি",
      expatriate: "প্রবাসী",
      lawyer: "উকিল",
      farmer: "কৃষক",
      driver: "চালক",
      others: "অন্যান্য",
    };

    const motherProfessions: Record<string, string> = {
      Housewife: "গৃহিণী",
      teacher: "শিক্ষকা",
      doctor: "ডাক্তার",
      engineer: "ইঞ্জিনিয়ার",
      business: "ব্যবসায়ী",
      govt_job: "সরকারি চাকরিজীবি",
      private_job: "বেসরকারি চাকরিজীবি",
      lawyer: "উকিল",
      others: "অন্যান্য",
    };

    const professions = type === 'father' ? fatherProfessions : motherProfessions;
    return professions[professionValue] || professionValue;
  };

  // ===== Build HTML template (with flex doc items) =====
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Hind Siliguri', sans-serif; -webkit-font-smoothing: antialiased; }
          .pdf-body { font-family: 'Hind Siliguri', sans-serif; display: flex; width: 210mm; min-height: 297mm; background: white; }
          .sidebar { width: 70mm; padding: 20px 12px; display: flex; flex-direction: column; background: linear-gradient(180deg, #faf5ff 0%, #f5f3ff 50%, #ede9fe 100%); border-right: 1px solid #ddd6fe; }
          .sidebar-photo { width: 100px; height: 120px; border: 3px solid #c4b5fd; border-radius: 10px; overflow: hidden; background: white; margin: 0 auto 15px; }
          .sidebar-photo img { width: 100%; height: 100%; object-fit: cover; }
          .sidebar-id { height: 28px; padding: 0 6px; color: white; display: flex; align-items: center; justify-content: center; border-radius: 20px; font-weight: 700; font-size: 12px; margin: 0 auto 20px; width: 100px; background: linear-gradient(135deg, #6b21a8, #4c1d95); }
          .sidebar-info-group { width: 100%; margin-bottom: 15px; }
          .sidebar-item { margin-bottom: 10px; border-bottom: 1px solid #e9d5ff; padding-bottom: 4px; }
          .sidebar-label { display: block; font-size: 10px; text-transform: uppercase; color: #6b21a8; letter-spacing: 0.5px; line-height: 1.2; font-weight: 600; }
          .sidebar-val { font-size: 12px; font-weight: 500; display: block; margin-top: 2px; line-height: 1.3; color: #1e1b4b; }
          .sidebar-address-box { margin-top: 12px; background: rgba(255,255,255,0.8); padding: 8px; border-radius: 8px; border: 1px solid #ddd6fe; }
          .addr-title { font-size: 11px; font-weight: 700; color: #6b21a8; margin-bottom: 4px; display: block; border-bottom: 1px solid #e9d5ff; padding-bottom: 2px; }
          .addr-text { font-size: 11px; line-height: 1.3; color: #1e1b4b; }
          .main-content { flex: 1; padding: 20px 25px; background: white; overflow-y: auto; }
          .main-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #4c1d95; padding-bottom: 10px; margin-bottom: 15px; }
          .logo-img { height: 45px; width: auto; }
          .section { margin-bottom: 12px; }
          .section-title { color: #4c1d95; font-size: 14px; font-weight: 700; margin-bottom: 6px; border-bottom: 2px solid #f5f3ff; padding-bottom: 3px; display: flex; align-items: center; gap: 6px; }
          .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 6px; }
          .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 6px; }
          .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 8px; margin-bottom: 6px; }
          .field { padding: 2px 0; }
          .label { color: #64748b; font-size: 10px; font-weight: 600; display: block; line-height: 1.2; margin-bottom: 1px; }
          .value { font-size: 12px; font-weight: 500; border-bottom: 1px solid #e9d5ff; color: #000; min-height: 22px; display: flex; align-items: center; line-height: 1.2; padding: 2px 0; }
          .info-card { background: #f5f3ff; padding: 6px 8px; border-radius: 6px; border-left: 3px solid #7c3aed; margin-bottom: 4px; }
          .info-card strong { font-size: 11px; }
          .info-card .value { font-size: 11px; border: none; min-height: auto; }
          .doc-list { margin-top: 5px; }
          .doc-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; font-size: 11px; color: #1e1b4b; line-height: 1.3; }
          .check-box { width: 14px; height: 14px; flex-shrink: 0; margin-top: 1px; border: 1.5px solid #7c3aed; border-radius: 3px; background: #fff; box-sizing: border-box; }
          .doc-title { font-size: 11px; line-height: 1.3; color: #1e1b4b; }
          .pledge-box { margin-top: 8px; background: #f5f3ff; padding: 8px; border-radius: 6px; font-size: 10px; line-height: 1.4; border: 1px dashed #7c3aed; color: #1e1b4b; }
          .footer-signs { margin-top: 80px; display: flex; justify-content: space-between; align-items: flex-end; }
          .sign-line { width: 140px; display: flex; align-items: flex-end; justify-content: center; border-top: 1.5px solid #4c1d95; font-size: 11px; font-weight: 600; color: #4c1d95; }
          .flex-between { display: flex; justify-content: space-between; align-items: center; }
          .mt-1 { margin-top: 4px; }
          .mt-2 { margin-top: 8px; }
          .mb-1 { margin-bottom: 4px; }
        </style>
      </head>
      <body>
        <div class="pdf-body">
          <!-- Sidebar -->
          <div class="sidebar">
            <div class="sidebar-photo">
              ${formData.studentPhoto ? `<img src="${formData.studentPhoto}" />` : '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#b45309; font-size:8px;">ছবি নেই</div>'}
            </div>
            <div class="sidebar-id">${studentId}</div>
            <div class="sidebar-info-group">
              <div class="sidebar-item"><span class="sidebar-label">শ্রেণি</span><span class="sidebar-val">${formData.Class || "-"}</span></div>
              <div class="sidebar-item"><span class="sidebar-label">বিভাগ</span><span class="sidebar-val">${getDepartmentDisplay()}</span></div>
              <div class="sidebar-item"><span class="sidebar-label">সেশন</span><span class="sidebar-val">${formData.session || new Date().getFullYear()}</span></div>
              <div class="sidebar-item"><span class="sidebar-label">রক্তের গ্রুপ</span><span class="sidebar-val">${formData.bloodGroup || "-"}</span></div>
              <div class="sidebar-item"><span class="sidebar-label">জাতীয়তা</span><span class="sidebar-val">${formData.nationality || "বাংলাদেশী"}</span></div>
            </div>
            <div class="sidebar-address-box">
              <span class="addr-title">বর্তমান ঠিকানা</span>
              <div class="addr-text">${presentAddressStr}</div>
            </div>
            <div class="sidebar-address-box">
              <span class="addr-title">স্থায়ী ঠিকানা</span>
              <div class="addr-text">${permanentAddressStr}</div>
            </div>
            <div class="sidebar-address-box">
              <div class="addr-title">জমাকৃত ডকুমেন্টস</div>
              <div class="doc-list">
                <div class="doc-item"><div class="check-box"></div><span class="doc-title">শিক্ষার্থীর ৪ কপি রঙিন ছবি</span></div>
                <div class="doc-item"><div class="check-box"></div><span class="doc-title">জন্ম নিবন্ধন সনদ</span></div>
                <div class="doc-item"><div class="check-box"></div><span class="doc-title">পিতা-মাতার এনআইডি/পাসপোর্ট</span></div>
                <div class="doc-item"><div class="check-box"></div><span class="doc-title">মার্কশিট</span></div>
                <div class="doc-item"><div class="check-box"></div><span class="doc-title">ট্রান্সফার সার্টিফিকেট</span></div>
              </div>
            </div>
          </div>
          <!-- Main Content -->
          <div class="main-content">
            <div class="main-header">
              <img src="${logoUrl}" class="logo-img" onerror="this.style.display='none'" />
              <div style="text-align: right;">
                <h3 style="color: #4c1d95; font-size: 16px; margin: 0; font-weight: 800;">ভর্তি আবেদন ফরম</h3>
                <p style="font-size: 8px; color: #64748b; margin-top: 2px;">প্রিন্ট তারিখ: ${currentDate}</p>
              </div>
            </div>
            <!-- Student Info -->
            <div class="section">
              <div class="section-title">শিক্ষার্থীর তথ্য</div>
              <div class="grid-2">
                <div class="field"><span class="label">নাম (বাংলা)</span><div class="value">${formData.StudentName || "-"}</div></div>
                <div class="field"><span class="label">নাম (ইংরেজি)</span><div class="value">${formData.studentName || "-"}</div></div>
              </div>
              <div class="grid-3">
                <div class="field"><span class="label">জন্ম তারিখ</span><div class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString("bn-BD") : "-"}</div></div>
                <div class="field"><span class="label">বয়স</span><div class="value">${formData.Age || "-"} বছর</div></div>
                <div class="field"><span class="label">লিঙ্গ</span><div class="value">${getBengaliValue("gender", formData.gender)}</div></div>
              </div>
              <div class="grid-3">
                <div class="field"><span class="label">এনআইডি/জন্ম নিবন্ধন</span><div class="value">${formData.nidBirth || "-"}</div></div>
                <div class="field"><span class="label">শ্রেণি</span><div class="value">${formData.Class || "-"}</div></div>
                <div class="field"><span class="label">বিভাগ</span><div class="value">${getDepartmentDisplay()}</div></div>
              </div>
            </div>
            <!-- Parent Info -->
            <div class="section">
              <div class="section-title">অভিভাবকের তথ্য</div>
              <div class="grid-2">
                <div class="info-card">
                  <strong>পিতা: ${formData.FatherNameBangla || "-"}</strong>
                  <div class="field mt-1"><span class="label">পেশা</span><div class="value" style="border:none; min-height:auto;">${getProfessionDisplay(formData.FatherJob, 'father')}</div></div>
                  <div class="field"><span class="label">মোবাইল</span><div class="value" style="border:none; min-height:auto;">${formData.FatherMobile || "-"}</div></div>
                  ${formData.FatherWhatsapp ? `<div class="field"><span class="label">হোয়াটসঅ্যাপ</span><div class="value" style="border:none; min-height:auto;">${formData.FatherWhatsapp}</div></div>` : ""}
                </div>
                <div class="info-card">
                  <strong>মাতা: ${formData.MotherNameBangla || "-"}</strong>
                  <div class="field mt-1"><span class="label">পেশা</span><div class="value" style="border:none; min-height:auto;">${getProfessionDisplay(formData.MotherJob, 'mother')}</div></div>
                  <div class="field"><span class="label">মোবাইল</span><div class="value" style="border:none; min-height:auto;">${formData.MotherMobile || "-"}</div></div>
                  ${formData.MotherWhatsapp ? `<div class="field"><span class="label">হোয়াটসঅ্যাপ</span><div class="value" style="border:none; min-height:auto;">${formData.MotherWhatsapp}</div></div>` : ""}
                </div>
              </div>
              ${(formData.guardianNameBangla || formData.guardianName) ? `
              <div class="info-card mt-1">
                <strong>অভিভাবক: ${formData.guardianNameBangla || formData.guardianName || "-"}</strong>
                <div class="flex-between mt-1">
                  <span style="font-size:10px;">সম্পর্ক: ${formData.guardianRelation || "-"}</span>
                  <span style="font-size:10px;">মোবাইল: ${formData.guardianMobile || "-"}</span>
                </div>
                ${formData.guardianAddress ? `<div class="mt-1"><span style="font-size:10px;">ঠিকানা: ${formData.guardianAddress}</span></div>` : ""}
              </div>
              ` : ""}
            </div>
            <!-- Academic Info -->
            <div class="section">
              <div class="section-title">পূর্ববর্তী একাডেমিক তথ্য</div>
              <div class="grid-3">
                <div class="field"><span class="label">পূর্ববর্তী প্রতিষ্ঠান</span><div class="value">${formData.PrevSchool || "-"}</div></div>
                <div class="field"><span class="label">পূর্ববর্তী শ্রেণি</span><div class="value">${formData.PrevClass || "-"}</div></div>
                <div class="field"><span class="label">সর্বশেষ জিপিএ</span><div class="value">${formData.GPA || "-"}</div></div>
              </div>
            </div>
            <!-- Family Environment -->
            <div class="section">
              <div class="section-title">পারিবারিক পরিবেশ</div>
              <div class="grid-4">
                <div class="field"><span class="label">হালাল উপার্জন</span><div class="value">${getBengaliValue("HalalIncome", formData.HalalIncome)}</div></div>
                <div class="field"><span class="label">পিতা-মাতার নামাজ</span><div class="value">${getBengaliValue("ParentsPrayer", formData.ParentsPrayer)}</div></div>
                <div class="field"><span class="label">নেশায় আক্রান্ত</span><div class="value">${getBengaliValue("Addiction", formData.Addiction)}</div></div>
                <div class="field"><span class="label">টেলিভিশন</span><div class="value">${getBengaliValue("TV", formData.TV)}</div></div>
              </div>
              <div class="grid-3">
                <div class="field"><span class="label">কুরআন তিলাওয়াত</span><div class="value">${getBengaliValue("QuranRecitation", formData.QuranRecitation)}</div></div>
                <div class="field"><span class="label">পর্দা পালন</span><div class="value">${getBengaliValue("Purdah", formData.Purdah)}</div></div>
              </div>
            </div>
            <!-- Behavior Skills -->
            <div class="section">
              <div class="section-title">আচরণ ও দক্ষতা</div>
              <div class="grid-3">
                <div class="field"><span class="label">মোবাইল ব্যবহার</span><div class="value">${formData.MobileUsage || "-"}</div></div>
                <div class="field"><span class="label">সাধারণ আচরণ</span><div class="value">${getBengaliValue("GeneralBehavior", formData.GeneralBehavior)}</div></div>
                <div class="field"><span class="label">পিতা-মাতার কথা শোনে</span><div class="value">${getBengaliValue("Obedience", formData.Obedience)}</div></div>
              </div>
              <div class="grid-3">
                <div class="field"><span class="label">বড়দের সাথে আচরণ</span><div class="value">${getBengaliValue("ElderBehavior", formData.ElderBehavior)}</div></div>
                <div class="field"><span class="label">ছোটদের সাথে আচরণ</span><div class="value">${getBengaliValue("YoungerBehavior", formData.YoungerBehavior)}</div></div>
                <div class="field"><span class="label">মিথ্যা/জেদ</span><div class="value">${getBengaliValue("LyingStubbornness", formData.LyingStubbornness)}</div></div>
              </div>
              <div class="grid-3">
                <div class="field"><span class="label">পড়ালেখায় আগ্রহ</span><div class="value">${getBengaliValue("StudyInterest", formData.StudyInterest)}</div></div>
                <div class="field"><span class="label">ধর্মীয় কাজে আগ্রহ</span><div class="value">${getBengaliValue("ReligiousInterest", formData.ReligiousInterest)}</div></div>
                <div class="field"><span class="label">রাগ নিয়ন্ত্রণ</span><div class="value">${getBengaliValue("AngerControl", formData.AngerControl)}</div></div>
              </div>
            </div>
            <!-- Pledge -->
            ${formData.termsAccepted ? `
            <div class="pledge-box">
              আমি <strong>${formData.StudentName || "__________"}</strong> সজ্ঞানে অঙ্গীকার করছি যে, প্রতিষ্ঠানের সকল নিয়মকানুন মেনে চলব। প্রতিষ্ঠানের আইন পরিপন্থি কোনো কিছু আমার মাঝে পরিলক্ষিত হলে কর্তৃপক্ষের সিদ্ধান্ত মেনে নিতে বাধ্য থাকব।
            </div>
            ` : ""}
            <!-- Signatures -->
            <div class="footer-signs">
              <div class="sign-line">অভিভাবকের স্বাক্ষর</div>
              <div class="sign-line">শিক্ষার্থীর স্বাক্ষর</div>
              <div class="sign-line">পরিচালকের স্বাক্ষর</div>
            </div>
            <div style="text-align: center; margin-top: 8px; font-size: 8px; color: #94a3b8;">
              এই ফর্মটি কম্পিউটার দ্বারা জেনারেট করা হয়েছে - স্বাক্ষর আবশ্যক
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  // ----- Return HTML if requested -----
  if (options?.returnHtml) {
    return htmlContent;
  }

  // ----- Otherwise generate PDF -----
  const container = document.createElement("div");
  container.style.width = "210mm";
  container.style.minHeight = "297mm";
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.background = "white";
  container.innerHTML = htmlContent;
  document.body.appendChild(container);

  try {
    // Wait for the Google Font to load via the stylesheet
    try {
      await document.fonts.load('16px "Hind Siliguri"');
      // Small delay to let rendering apply
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (fontError) {
      console.warn('Font loading warning (will use fallback):', fontError);
      // Continue anyway; fallback font will be used
    }

    const canvas = await html2canvas(container, {
      scale: 3,
      useCORS: true,
      logging: false,
      windowWidth: 794,
      backgroundColor: '#ffffff',
      onclone: (clonedDoc) => {
        // Ensure the font is available in cloned document
        const link = clonedDoc.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        clonedDoc.head.appendChild(link);
        // Also add style to force font-family
        const style = clonedDoc.createElement('style');
        style.textContent = `
          * { font-family: 'Hind Siliguri', sans-serif !important; }
        `;
        clonedDoc.head.appendChild(style);
      }
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`admission-form-${studentId}.pdf`);
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw error;
  } finally {
    document.body.removeChild(container);
  }
};


// /* eslint-disable @typescript-eslint/no-explicit-any */
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { getBengaliValue } from "./pdfHelper";

// export const generatePDFFromData = async (
//   formData: Record<string, any>,
//   studentId: string,
// ) => {
//   const currentDate = new Date().toLocaleDateString("bn-BD", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   const logoUrl = window.location.origin + "/img/logo.png";

//   const formatAddress = (addr: any) => {
//     const parts = [];
//     if (addr.village) parts.push(addr.village);
//     if (addr.postOffice) parts.push(addr.postOffice);
//     if (addr.postCode) parts.push(addr.postCode);
//     if (addr.policeStation) parts.push(addr.policeStation);
//     if (addr.district) parts.push(addr.district);
//     return parts.join(", ") || "-";
//   };

//   const presentAddressStr = formatAddress({
//     village: formData.village,
//     postOffice: formData.postOffice,
//     postCode: formData.postCode,
//     policeStation: formData.policeStation,
//     district: formData.district,
//   });

//   const permanentAddressStr = formatAddress({
//     village: formData.permVillage,
//     postOffice: formData.permPostOffice,
//     postCode: formData.permPostCode,
//     policeStation: formData.permPoliceStation,
//     district: formData.permDistrict,
//   });

//   // Helper function to get department display name
//   const getDepartmentDisplay = () => {
//     if (formData.studentDepartment === "hifz") return "হিফজ";
//     if (formData.studentDepartment === "academic") return "একাডেমিক";
//     return "-";
//   };

//   // Helper function to get profession display name
//   const getProfessionDisplay = (professionValue: string, type: 'father' | 'mother') => {
//     if (!professionValue) return "-";

//     const fatherProfessions: Record<string, string> = {
//       teacher: "শিক্ষক",
//       doctor: "ডাক্তার",
//       engineer: "ইঞ্জিনিয়ার",
//       business: "ব্যবসায়ী",
//       govt_job: "সরকারি চাকরিজীবি",
//       private_job: "বেসরকারি চাকরিজীবি",
//       expatriate: "প্রবাসী",
//       lawyer: "উকিল",
//       farmer: "কৃষক",
//       driver: "চালক",
//       others: "অন্যান্য",
//     };

//     const motherProfessions: Record<string, string> = {
//       Housewife: "গৃহিণী",
//       teacher: "শিক্ষকা",
//       doctor: "ডাক্তার",
//       engineer: "ইঞ্জিনিয়ার",
//       business: "ব্যবসায়ী",
//       govt_job: "সরকারি চাকরিজীবি",
//       private_job: "বেসরকারি চাকরিজীবি",
//       lawyer: "উকিল",
//       others: "অন্যান্য",
//     };

//     const professions = type === 'father' ? fatherProfessions : motherProfessions;
//     return professions[professionValue] || professionValue;
//   };

//   const container = document.createElement("div");
//   container.style.width = "210mm";
//   container.style.minHeight = "297mm";
//   container.style.position = "absolute";
//   container.style.left = "-9999px";
//   container.style.top = "0";
//   container.style.background = "white";

//   container.innerHTML = `
//     <style>
//       @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
      
//       * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//       }
      
//       .pdf-body { 
//         font-family: 'Hind Siliguri', sans-serif; 
//         display: flex;  
//         margin: 0; 
//         padding: 0; 
//         width: 210mm; 
//         min-height: 297mm;
//         background: white;
//       }
      
//       /* --- LIGHT PURPLE SIDEBAR --- */
//       .sidebar {
//         width: 70mm;
//         padding: 20px 12px;
//         display: flex;
//         flex-direction: column;
//         background: linear-gradient(180deg, #faf5ff 0%, #f5f3ff 50%, #ede9fe 100%);
//         border-right: 1px solid #ddd6fe;
//       }
      
//       .sidebar-photo {
//         width: 100px;
//         height: 120px;
//         border: 3px solid #c4b5fd;
//         border-radius: 10px;
//         overflow: hidden;
//         background: white;
//         margin: 0 auto 15px;
//       }
      
//       .sidebar-photo img { 
//         width: 100%; 
//         height: 100%; 
//         object-fit: cover; 
//       }
      
//       .sidebar-id { 
//         height: 28px;     
//         padding: 0 6px; 
//         color: white; 
//         display: flex; 
//         align-items: center;
//         justify-content: center;
//         border-radius: 20px; 
//         font-weight: 700; 
//         font-size: 12px;
//         margin: 0 auto 20px; 
//         width: 100px; 
//         background: linear-gradient(135deg, #6b21a8, #4c1d95);
//       }
      
//       .sidebar-info-group { 
//         width: 100%; 
//         margin-bottom: 15px; 
//       }
      
//       .sidebar-item { 
//         margin-bottom: 10px; 
//         border-bottom: 1px solid #e9d5ff; 
//         padding-bottom: 4px; 
//       }
      
//       .sidebar-label { 
//         display: block; 
//         font-size: 10px;
//         text-transform: uppercase; 
//         color: #6b21a8; 
//         letter-spacing: 0.5px; 
//         line-height: 1.2; 
//         font-weight: 600; 
//       }
      
//       .sidebar-val { 
//         font-size: 12px;
//         font-weight: 500; 
//         display: block; 
//         margin-top: 2px; 
//         line-height: 1.3; 
//         color: #1e1b4b; 
//       }

//       .sidebar-address-box {
//         margin-top: 12px;
//         background: rgba(255, 255, 255, 0.8);
//         padding: 8px;
//         border-radius: 8px;
//         border: 1px solid #ddd6fe;
//       }
      
//       .addr-title { 
//         font-size: 11px;
//         font-weight: 700; 
//         color: #6b21a8; 
//         margin-bottom: 4px; 
//         display: block; 
//         border-bottom: 1px solid #e9d5ff; 
//         padding-bottom: 2px; 
//       }
      
//       .addr-text { 
//         font-size: 11px;
//         line-height: 1.3; 
//         color: #1e1b4b; 
//       }

//       /* --- MAIN CONTENT --- */
//       .main-content { 
//         flex: 1; 
//         padding: 20px 25px; 
//         background: white; 
//         overflow-y: auto;
//       }
      
//       .main-header { 
//         display: flex; 
//         justify-content: space-between; 
//         align-items: center; 
//         border-bottom: 2px solid #4c1d95; 
//         padding-bottom: 10px; 
//         margin-bottom: 15px; 
//       }
      
//       .logo-img { 
//         height: 45px; 
//         width: auto; 
//       }
      
//       .section { 
//         margin-bottom: 12px; 
//       }
      
//       .section-title { 
//         color: #4c1d95; 
//         font-size: 14px;
//         font-weight: 700; 
//         margin-bottom: 6px; 
//         border-bottom: 2px solid #f5f3ff; 
//         padding-bottom: 3px; 
//         display: flex; 
//         align-items: center; 
//         gap: 6px; 
//       }
      
//       .grid-2 { 
//         display: grid; 
//         grid-template-columns: 1fr 1fr; 
//         gap: 8px; 
//         margin-bottom: 6px;
//       }
      
//       .grid-3 { 
//         display: grid; 
//         grid-template-columns: 1fr 1fr 1fr; 
//         gap: 8px; 
//         margin-bottom: 6px;
//       }
      
//       .grid-4 { 
//         display: grid; 
//         grid-template-columns: 1fr 1fr 1fr 1fr; 
//         gap: 8px; 
//         margin-bottom: 6px;
//       }
      
//       .field { 
//         padding: 2px 0; 
//       }
      
//       .label { 
//         color: #64748b; 
//         font-size: 10px;
//         font-weight: 600; 
//         display: block; 
//         line-height: 1.2; 
//         margin-bottom: 1px; 
//       }
      
//       .value { 
//         font-size: 12px;
//         font-weight: 500; 
//         border-bottom: 1px solid #e9d5ff; 
//         color: #000; 
//         min-height: 22px; 
//         display: flex; 
//         align-items: center; 
//         line-height: 1.2;
//         padding: 2px 0;
//       }
      
//       .info-card { 
//         background: #f5f3ff; 
//         padding: 6px 8px; 
//         border-radius: 6px; 
//         border-left: 3px solid #7c3aed; 
//         margin-bottom: 4px;
//       }
      
//       .info-card strong {
//         font-size: 11px;
//       }
      
//       .info-card .value {
//         font-size: 11px;
//         border: none;
//         min-height: auto;
//       }
      
//       /* --- FIXED DOC ITEMS - Perfect vertical alignment --- */
//       .doc-item {
//         display: flex;
//         align-items: center;        /* vertical center */
//         gap: 6px;
//         font-size: 11px;
//         margin-bottom: 4px;
//         color: #1e1b4b;
//         line-height: 1.2;
//       }
      
//       .check-box{
//           width:14px;
//           height:14px;
//           border:1.5px solid #7c3aed;
//           border-radius:3px;
//           background:#fff;
//           box-sizing:border-box;
//       }

//       .doc-title{
//           font-size:11px;
//           line-height:16px;
//           color:#1e1b4b;
//           padding-bottom:4px;
//       }
      
//       .pledge-box { 
//         margin-top: 8px; 
//         background: #f5f3ff; 
//         padding: 8px; 
//         border-radius: 6px; 
//         font-size: 10px;
//         line-height: 1.4; 
//         border: 1px dashed #7c3aed; 
//         color: #1e1b4b; 
//       }
      
//       .footer-signs {
//         margin-top: 50px; 
//         display: flex;
//         justify-content: space-between;
//         align-items: flex-end;
//       }

//       .sign-line {
//         width: 140px;       
//         display: flex;
//         align-items: flex-end;
//         justify-content: center;
//         border-top: 1.5px solid #4c1d95;        
//         font-size: 11px;
//         font-weight: 600;
//         color: #4c1d95;
//       }
      
//       .flex-between {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//       }
      
//       .mt-1 { margin-top: 4px; }
//       .mt-2 { margin-top: 8px; }
//       .mb-1 { margin-bottom: 4px; }
//     </style>

//     <div class="pdf-body">
//       <div class="sidebar">
//         <div class="sidebar-photo">
//           ${formData.studentPhoto ? `<img src="${formData.studentPhoto}" />` : '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#b45309; font-size:8px;">ছবি নেই</div>'}
//         </div>
//         <div class="sidebar-id">${studentId}</div>
        
//         <div class="sidebar-info-group">
//           <div class="sidebar-item"><span class="sidebar-label">শ্রেণি</span><span class="sidebar-val">${formData.Class || "-"}</span></div>
//           <div class="sidebar-item"><span class="sidebar-label">বিভাগ</span><span class="sidebar-val">${getDepartmentDisplay()}</span></div>
//           <div class="sidebar-item"><span class="sidebar-label">সেশন</span><span class="sidebar-val">${formData.session || new Date().getFullYear()}</span></div>
//           <div class="sidebar-item"><span class="sidebar-label">রক্তের গ্রুপ</span><span class="sidebar-val">${formData.bloodGroup || "-"}</span></div>
//           <div class="sidebar-item"><span class="sidebar-label">জাতীয়তা</span><span class="sidebar-val">${formData.nationality || "বাংলাদেশী"}</span></div>
//         </div>

//         <div class="sidebar-address-box">
//           <span class="addr-title">বর্তমান ঠিকানা</span>
//           <div class="addr-text">${presentAddressStr}</div>
//         </div>

//         <div class="sidebar-address-box">
//           <span class="addr-title">স্থায়ী ঠিকানা</span>
//           <div class="addr-text">${permanentAddressStr}</div>
//         </div>

//         <div class="sidebar-address-box">
//           <div class="addr-title">জমাকৃত ডকুমেন্টস</div>

//          <table style="width:100%; border-collapse:collapse;">
//               <tr>
//                 <td style="width:18px; vertical-align:top;">
//                   <div class="check-box"></div>
//                 </td>
//                 <td class="doc-title">শিক্ষার্থীর ৪ কপি রঙিন ছবি</td>
//               </tr>

//               <tr>
//                 <td style="vertical-align:top;">
//                   <div class="check-box"></div>
//                 </td>
//                 <td class="doc-title">জন্ম নিবন্ধন সনদ</td>
//               </tr>

//               <tr>
//                 <td style="vertical-align:top;">
//                   <div class="check-box"></div>
//                 </td>
//                 <td class="doc-title">পিতা-মাতার এনআইডি/পাসপোর্ট</td>
//               </tr>

//               <tr>
//                 <td style="vertical-align:top;">
//                   <div class="check-box"></div>
//                 </td>
//                 <td class="doc-title">মার্কশিট</td>
//               </tr>

//               <tr>
//                 <td style="vertical-align:top;">
//                   <div class="check-box"></div>
//                 </td>
//                 <td class="doc-title">ট্রান্সফার সার্টিফিকেট</td>
//               </tr>
//             </table>

//         </div>


//       </div>

//       <div class="main-content">
//         <div class="main-header">
//           <img src="${logoUrl}" class="logo-img" onerror="this.style.display='none'" />
//           <div style="text-align: right;">
//             <h3 style="color: #4c1d95; font-size: 16px; margin: 0; font-weight: 800;">ভর্তি আবেদন ফরম</h3>
//             <p style="font-size: 8px; color: #64748b; margin-top: 2px;">প্রিন্ট তারিখ: ${currentDate}</p>
//           </div>
//         </div>

//         <!-- Student Info -->
//         <div class="section">
//           <div class="section-title">শিক্ষার্থীর তথ্য</div>
//           <div class="grid-2">
//             <div class="field"><span class="label">নাম (বাংলা)</span><div class="value">${formData.StudentName || "-"}</div></div>
//             <div class="field"><span class="label">নাম (ইংরেজি)</span><div class="value">${formData.studentName || "-"}</div></div>
//           </div>
//           <div class="grid-3">
//             <div class="field"><span class="label">জন্ম তারিখ</span><div class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString("bn-BD") : "-"}</div></div>
//             <div class="field"><span class="label">বয়স</span><div class="value">${formData.Age || "-"} বছর</div></div>
//             <div class="field"><span class="label">লিঙ্গ</span><div class="value">${getBengaliValue("gender", formData.gender)}</div></div>
//           </div>
//           <div class="grid-3">
//             <div class="field"><span class="label">এনআইডি/জন্ম নিবন্ধন</span><div class="value">${formData.nidBirth || "-"}</div></div>
//             <div class="field"><span class="label">শ্রেণি</span><div class="value">${formData.Class || "-"}</div></div>
//             <div class="field"><span class="label">বিভাগ</span><div class="value">${getDepartmentDisplay()}</div></div>
//           </div>
//         </div>

//         <!-- Parent Info -->
//         <div class="section">
//           <div class="section-title">অভিভাবকের তথ্য</div>
//           <div class="grid-2">
//             <div class="info-card">
//               <strong>পিতা: ${formData.FatherNameBangla || "-"}</strong>
//               <div class="field mt-1"><span class="label">পেশা</span><div class="value" style="border:none; min-height:auto;">${getProfessionDisplay(formData.FatherJob, 'father')}</div></div>
//               <div class="field"><span class="label">মোবাইল</span><div class="value" style="border:none; min-height:auto;">${formData.FatherMobile || "-"}</div></div>
//               ${formData.FatherWhatsapp ? `<div class="field"><span class="label">হোয়াটসঅ্যাপ</span><div class="value" style="border:none; min-height:auto;">${formData.FatherWhatsapp}</div></div>` : ""}
//             </div>
//             <div class="info-card">
//               <strong>মাতা: ${formData.MotherNameBangla || "-"}</strong>
//               <div class="field mt-1"><span class="label">পেশা</span><div class="value" style="border:none; min-height:auto;">${getProfessionDisplay(formData.MotherJob, 'mother')}</div></div>
//               <div class="field"><span class="label">মোবাইল</span><div class="value" style="border:none; min-height:auto;">${formData.MotherMobile || "-"}</div></div>
//               ${formData.MotherWhatsapp ? `<div class="field"><span class="label">হোয়াটসঅ্যাপ</span><div class="value" style="border:none; min-height:auto;">${formData.MotherWhatsapp}</div></div>` : ""}
//             </div>
//           </div>
//           ${(formData.guardianNameBangla || formData.guardianName) ? `
//           <div class="info-card mt-1">
//             <strong>অভিভাবক: ${formData.guardianNameBangla || formData.guardianName || "-"}</strong>
//             <div class="flex-between mt-1">
//               <span style="font-size:10px;">সম্পর্ক: ${formData.guardianRelation || "-"}</span>
//               <span style="font-size:10px;">মোবাইল: ${formData.guardianMobile || "-"}</span>
//             </div>
//             ${formData.guardianAddress ? `<div class="mt-1"><span style="font-size:10px;">ঠিকানা: ${formData.guardianAddress}</span></div>` : ""}
//           </div>
//           ` : ""}
//         </div>

//         <!-- Academic Info -->
//         <div class="section">
//           <div class="section-title">পূর্ববর্তী একাডেমিক তথ্য</div>
//           <div class="grid-3">
//             <div class="field"><span class="label">পূর্ববর্তী প্রতিষ্ঠান</span><div class="value">${formData.PrevSchool || "-"}</div></div>
//             <div class="field"><span class="label">পূর্ববর্তী শ্রেণি</span><div class="value">${formData.PrevClass || "-"}</div></div>
//             <div class="field"><span class="label">সর্বশেষ জিপিএ</span><div class="value">${formData.GPA || "-"}</div></div>
//           </div>
//         </div>

//         <!-- Family Environment -->
//         <div class="section">
//           <div class="section-title">পারিবারিক পরিবেশ</div>
//           <div class="grid-4">
//             <div class="field"><span class="label">হালাল উপার্জন</span><div class="value">${getBengaliValue("HalalIncome", formData.HalalIncome)}</div></div>
//             <div class="field"><span class="label">পিতা-মাতার নামাজ</span><div class="value">${getBengaliValue("ParentsPrayer", formData.ParentsPrayer)}</div></div>
//             <div class="field"><span class="label">নেশায় আক্রান্ত</span><div class="value">${getBengaliValue("Addiction", formData.Addiction)}</div></div>
//             <div class="field"><span class="label">টেলিভিশন</span><div class="value">${getBengaliValue("TV", formData.TV)}</div></div>
//           </div>
//           <div class="grid-3">
//             <div class="field"><span class="label">কুরআন তিলাওয়াত</span><div class="value">${getBengaliValue("QuranRecitation", formData.QuranRecitation)}</div></div>
//             <div class="field"><span class="label">পর্দা পালন</span><div class="value">${getBengaliValue("Purdah", formData.Purdah)}</div></div>
//           </div>
//         </div>

//         <!-- Behavior Skills -->
//         <div class="section">
//           <div class="section-title">আচরণ ও দক্ষতা</div>
//           <div class="grid-3">
//             <div class="field"><span class="label">মোবাইল ব্যবহার</span><div class="value">${formData.MobileUsage || "-"}</div></div>
//             <div class="field"><span class="label">সাধারণ আচরণ</span><div class="value">${getBengaliValue("GeneralBehavior", formData.GeneralBehavior)}</div></div>
//             <div class="field"><span class="label">পিতা-মাতার কথা শোনে</span><div class="value">${getBengaliValue("Obedience", formData.Obedience)}</div></div>
//           </div>
//           <div class="grid-3">
//             <div class="field"><span class="label">বড়দের সাথে আচরণ</span><div class="value">${getBengaliValue("ElderBehavior", formData.ElderBehavior)}</div></div>
//             <div class="field"><span class="label">ছোটদের সাথে আচরণ</span><div class="value">${getBengaliValue("YoungerBehavior", formData.YoungerBehavior)}</div></div>
//             <div class="field"><span class="label">মিথ্যা/জেদ</span><div class="value">${getBengaliValue("LyingStubbornness", formData.LyingStubbornness)}</div></div>
//           </div>
//           <div class="grid-3">
//             <div class="field"><span class="label">পড়ালেখায় আগ্রহ</span><div class="value">${getBengaliValue("StudyInterest", formData.StudyInterest)}</div></div>
//             <div class="field"><span class="label">ধর্মীয় কাজে আগ্রহ</span><div class="value">${getBengaliValue("ReligiousInterest", formData.ReligiousInterest)}</div></div>
//             <div class="field"><span class="label">রাগ নিয়ন্ত্রণ</span><div class="value">${getBengaliValue("AngerControl", formData.AngerControl)}</div></div>
//           </div>
//         </div>

//         <!-- Pledge and Terms -->
//         ${formData.termsAccepted ? `
//         <div class="pledge-box">
//           আমি <strong>${formData.StudentName || "__________"}</strong> সজ্ঞানে অঙ্গীকার করছি যে, প্রতিষ্ঠানের সকল নিয়মকানুন মেনে চলব। প্রতিষ্ঠানের আইন পরিপন্থি কোনো কিছু আমার মাঝে পরিলক্ষিত হলে কর্তৃপক্ষের সিদ্ধান্ত মেনে নিতে বাধ্য থাকব।
//         </div>
//         ` : ""}

//         <!-- Signatures -->
//         <div class="footer-signs">
//           <div class="sign-line">অভিভাবকের স্বাক্ষর</div>
//           <div class="sign-line">শিক্ষার্থীর স্বাক্ষর</div>
//           <div class="sign-line">পরিচালকের স্বাক্ষর</div>
//         </div>
        
//         <div style="text-align: center; margin-top: 8px; font-size: 8px; color: #94a3b8;">
//           এই ফর্মটি কম্পিউটার দ্বারা জেনারেট করা হয়েছে - স্বাক্ষর আবশ্যক
//         </div>
//       </div>
//     </div>
//   `;

//   document.body.appendChild(container);

//   try {
//     const canvas = await html2canvas(container, {
//       scale: 2.5,
//       useCORS: true,
//       logging: false,
//       windowWidth: 794,
//     });

//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF({
//       orientation: "portrait",
//       unit: "mm",
//       format: "a4",
//     });

//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//     pdf.save(`admission-form-${studentId}.pdf`);
//   } catch (error) {
//     console.error("PDF generation failed:", error);
//     throw error;
//   } finally {
//     document.body.removeChild(container);
//   }
// };