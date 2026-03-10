/* eslint-disable @typescript-eslint/no-explicit-any */
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { getBengaliValue } from "./pdfHelper";

export const generatePDFFromData = async (
  formData: Record<string, any>,
  studentId: string,
) => {
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const logoUrl = window.location.origin + "/img/logo.png";

  // Helper to format address
  const formatAddress = (addr: any) => {
    const parts = [];
    if (addr.village) parts.push(addr.village);
    if (addr.postOffice) parts.push(addr.postOffice);
    if (addr.postCode) parts.push(addr.postCode);
    if (addr.policeStation) parts.push(addr.policeStation);
    if (addr.district) parts.push(addr.district);
    return parts.join(", ") || "-";
  };

  const presentAddr = {
    village: formData.village,
    postOffice: formData.postOffice,
    postCode: formData.postCode,
    policeStation: formData.policeStation,
    district: formData.district,
  };
  const permanentAddr = {
    village: formData.permVillage,
    postOffice: formData.permPostOffice,
    postCode: formData.permPostCode,
    policeStation: formData.permPoliceStation,
    district: formData.permDistrict,
  };

  const presentAddressStr = formatAddress(presentAddr);
  const permanentAddressStr = formatAddress(permanentAddr);

  // Create container with the previous good design
  const container = document.createElement("div");
  container.style.width = "800px";
  container.style.padding = "20px";
  container.style.margin = "0 auto";
  container.style.background = "white";
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.fontFamily = "'Hind Siliguri', 'Arial', sans-serif";
  container.style.lineHeight = "1.5";
  container.style.boxSizing = "border-box";

  container.innerHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ভর্তি ফর্ম - ${studentId}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: white; font-size: 12px; }
    .pdf-wrapper { width: 100%; max-width: 800px; margin: 0 auto; background: white; }
    /* Header */
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; margin-bottom: 20px; }
    .logo-img { height: 50px; width: auto; }
    .title h2 { color: #5b21b6; font-size: 24px; font-weight: 700; margin: 0; }
    .title p { color: #6b7280; font-size: 12px; margin: 5px 0 0; }
    /* Two‑column layout */
    .main-row { display: flex; gap: 20px; }
    .sidebar { width: 200px; background: #f3e8ff; border-radius: 8px; padding: 15px; flex-shrink: 0; }
    .sidebar-photo { width: 120px; height: 120px; margin: 0 auto 10px; border-radius: 50%; overflow: hidden; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .sidebar-photo img { width: 100%; height: 100%; object-fit: cover; }
    .sidebar-id { font-weight: bold; color: #5b21b6; background: white; padding: 4px 8px; border-radius: 20px; display: inline-block; margin-bottom: 15px; }
    .sidebar-info-item { margin-bottom: 8px; border-bottom: 1px dashed #c4b5fd; padding-bottom: 5px; }
    .sidebar-label { font-size: 10px; color: #6b21a8; display: block; font-weight: 500; }
    .address-block { margin-top: 15px; border-top: 1px solid #c4b5fd; padding-top: 10px; }
    .address-block strong { color: #5b21b6; font-size: 11px; display: block; margin-bottom: 5px; }
    .address-text { font-size: 11px; background: white; padding: 6px; border-radius: 4px; }
    /* Main content */
    .content { flex: 1; }
    .section { background: #f9fafb; border-radius: 8px; padding: 15px; margin-bottom: 15px; border: 1px solid #e5e7eb; }
    .section-title { font-weight: 700; color: #5b21b6; margin-bottom: 10px; font-size: 14px; border-left: 4px solid #8b5cf6; padding-left: 8px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
    .field { margin-bottom: 8px; }
    .field .label { font-size: 10px; color: #6b7280; display: block; }
    .field .value { font-weight: 500; color: #111827; background: white; padding: 6px 8px; border-radius: 4px; border: 1px solid #e5e7eb; min-height: 28px; }
    .doc-grid { display: flex; flex-wrap: wrap; gap: 10px; }
    .doc-item { display: flex; align-items: center; gap: 5px; font-size: 11px; width: calc(50% - 5px); }
    .check-box { width: 18px; height: 18px; background: white; border: 1px solid #5b21b6; border-radius: 3px; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; color: #5b21b6; }
    .pledge { margin-top: 12px; background: #ede9fe; padding: 10px; border-radius: 6px; font-size: 11px; display: flex; align-items: flex-start; gap: 8px; }
    .footer-signs { display: flex; justify-content: space-between; margin-top: 20px; border-top: 1px dashed #9ca3af; padding-top: 15px; }
    .sign-line { width: 180px; border-bottom: 1px solid #374151; padding-bottom: 4px; font-size: 11px; color: #4b5563; text-align: center; }
    hr { border: none; border-top: 1px dashed #d1d5db; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="pdf-wrapper">
    <!-- Header -->
    <div class="header">
      <img src="${logoUrl}" class="logo-img" onerror="this.style.display='none'" />
      <div class="title">
        <h2>ভর্তি আবেদন ফরম</h2>
        <p>আইডি: ${studentId} | তারিখ: ${currentDate}</p>
      </div>
    </div>

    <!-- Main row: sidebar + content -->
    <div class="main-row">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="sidebar-photo">
          ${formData.studentPhoto ? `<img src="${formData.studentPhoto}" />` : '<div style="line-height:120px; text-align:center; color:#9ca3af;">ছবি</div>'}
        </div>
        <div style="text-align:center;"><span class="sidebar-id">${studentId}</span></div>
        <div class="sidebar-info-item"><span class="sidebar-label">শ্রেণি</span><strong>${formData.Class || "-"}</strong></div>
        <div class="sidebar-info-item"><span class="sidebar-label">বিভাগ</span><strong>${formData.studentDepartment || "-"}</strong></div>
        <div class="sidebar-info-item"><span class="sidebar-label">সেশন</span><strong>${formData.session || "-"}</strong></div>
        <div class="sidebar-info-item"><span class="sidebar-label">রক্তের গ্রুপ</span><strong>${formData.bloodGroup || "-"}</strong></div>
        <div class="address-block"><strong>স্থায়ী ঠিকানা</strong><div class="address-text">${permanentAddressStr}</div></div>
        <div class="address-block"><strong>বর্তমান ঠিকানা</strong><div class="address-text">${presentAddressStr}</div></div>
      </div>

      <!-- Main content -->
      <div class="content">
        <!-- Student Information -->
        <div class="section">
          <div class="section-title">শিক্ষার্থীর তথ্য</div>
          <div class="grid-2">
            <div class="field"><span class="label">নাম (বাংলা)</span><div class="value">${formData.StudentName || "-"}</div></div>
            <div class="field"><span class="label">নাম (ইংরেজি)</span><div class="value">${formData.studentName || "-"}</div></div>
          </div>
          <div class="grid-3">
            <div class="field"><span class="label">জন্ম তারিখ</span><div class="value">${formData.dateOfBirth ? new Date(formData.dateOfBirth).toLocaleDateString("bn-BD") : "-"}</div></div>
            <div class="field"><span class="label">বয়স</span><div class="value">${formData.Age || "-"}</div></div>
            <div class="field"><span class="label">লিঙ্গ</span><div class="value">${formData.gender === "male" ? "পুরুষ" : formData.gender === "female" ? "মহিলা" : "-"}</div></div>
          </div>
          <div class="grid-3">
            <div class="field"><span class="label">এনআইডি/জন্ম নিবন্ধন</span><div class="value">${formData.nidBirth || "-"}</div></div>
            <div class="field"><span class="label">জাতীয়তা</span><div class="value">${formData.nationality || "-"}</div></div>
            <div class="field"><span class="label">রক্তের গ্রুপ</span><div class="value">${formData.bloodGroup || "-"}</div></div>
          </div>
        </div>

        <!-- Academic Info -->
        <div class="section">
          <div class="section-title">পূর্ববর্তী একাডেমিক তথ্য</div>
          <div class="grid-3">
            <div class="field"><span class="label">পূর্ববর্তী প্রতিষ্ঠান</span><div class="value">${formData.PrevSchool || "-"}</div></div>
            <div class="field"><span class="label">পূর্ব অধ্যায়নকৃত শ্রেণি</span><div class="value">${formData.PrevClass || "-"}</div></div>
            <div class="field"><span class="label">সর্বশেষ জিপিএ</span><div class="value">${formData.GPA || "-"}</div></div>
          </div>
        </div>

        <!-- Parent Info -->
        <div class="section">
          <div class="section-title">অভিভাবকের তথ্য</div>
          <div class="grid-2">
            <div class="field"><span class="label">পিতার নাম (বাংলা)</span><div class="value">${formData.FatherNameBangla || "-"}</div></div>
            <div class="field"><span class="label">পিতার নাম (ইংরেজি)</span><div class="value">${formData.FatherName || "-"}</div></div>
          </div>
          <div class="grid-3">
            <div class="field"><span class="label">পেশা</span><div class="value">${formData.FatherJob || "-"}</div></div>
            <div class="field"><span class="label">শিক্ষাগত যোগ্যতা</span><div class="value">${formData.FatherEdu || "-"}</div></div>
            <div class="field"><span class="label">মোবাইল</span><div class="value">${formData.FatherMobile || "-"}</div></div>
          </div>
          <div class="field"><span class="label">WhatsApp</span><div class="value">${formData.FatherWhatsapp || "-"}</div></div>
          <hr />
          <div class="grid-2">
            <div class="field"><span class="label">মাতার নাম (বাংলা)</span><div class="value">${formData.MotherNameBangla || "-"}</div></div>
            <div class="field"><span class="label">মাতার নাম (ইংরেজি)</span><div class="value">${formData.MotherName || "-"}</div></div>
          </div>
          <div class="grid-3">
            <div class="field"><span class="label">পেশা</span><div class="value">${formData.MotherJob || "-"}</div></div>
            <div class="field"><span class="label">শিক্ষাগত যোগ্যতা</span><div class="value">${formData.MotherEdu || "-"}</div></div>
            <div class="field"><span class="label">মোবাইল</span><div class="value">${formData.MotherMobile || "-"}</div></div>
          </div>
          <div class="field"><span class="label">WhatsApp</span><div class="value">${formData.MotherWhatsapp || "-"}</div></div>
          ${formData.guardianNameBangla || formData.guardianName ? `
          <hr />
          <div class="section-title" style="font-size:12px;">অভিভাবক (পিতা-মাতা ব্যতীত)</div>
          <div class="grid-2">
            <div class="field"><span class="label">নাম (বাংলা)</span><div class="value">${formData.guardianNameBangla || "-"}</div></div>
            <div class="field"><span class="label">নাম (ইংরেজি)</span><div class="value">${formData.guardianName || "-"}</div></div>
          </div>
          <div class="grid-3">
            <div class="field"><span class="label">সম্পর্ক</span><div class="value">${formData.guardianRelation || "-"}</div></div>
            <div class="field"><span class="label">পেশা</span><div class="value">${formData.guardianJob || "-"}</div></div>
            <div class="field"><span class="label">মোবাইল</span><div class="value">${formData.guardianMobile || "-"}</div></div>
          </div>
          <div class="field"><span class="label">WhatsApp</span><div class="value">${formData.guardianWhatsapp || "-"}</div></div>
          <div class="field"><span class="label">ঠিকানা</span><div class="value">${formData.guardianAddress || "-"}</div></div>` : ''}
        </div>

        <!-- Family Environment -->
        <div class="section">
          <div class="section-title">পারিবারিক পরিবেশ</div>
          <div class="grid-3">
            <div class="field"><span class="label">হালাল উপার্জন</span><div class="value">${getBengaliValue("HalalIncome", formData.HalalIncome)}</div></div>
            <div class="field"><span class="label">পিতা-মাতার নামাজ</span><div class="value">${getBengaliValue("ParentsPrayer", formData.ParentsPrayer)}</div></div>
            <div class="field"><span class="label">মাদক/নেশায় আক্রান্ত</span><div class="value">${getBengaliValue("Addiction", formData.Addiction)}</div></div>
            <div class="field"><span class="label">টেলিভিশন</span><div class="value">${getBengaliValue("TV", formData.TV)}</div></div>
            <div class="field"><span class="label">কুরআন তিলাওয়াত</span><div class="value">${getBengaliValue("QuranRecitation", formData.QuranRecitation)}</div></div>
            <div class="field"><span class="label">পর্দা পালন</span><div class="value">${getBengaliValue("Purdah", formData.Purdah)}</div></div>
          </div>
        </div>

        <!-- Behavior & Skills -->
        <div class="section">
          <div class="section-title">আচরণ ও দক্ষতা</div>
          <div class="grid-3">
            <div class="field"><span class="label">মোবাইল ব্যবহার</span><div class="value">${formData.MobileUsage || "-"}</div></div>
            <div class="field"><span class="label">সন্তানের আচরণ</span><div class="value">${getBengaliValue("GeneralBehavior", formData.GeneralBehavior)}</div></div>
            <div class="field"><span class="label">পিতা-মাতার কথা শোনে</span><div class="value">${getBengaliValue("Obedience", formData.Obedience)}</div></div>
            <div class="field"><span class="label">বড়দের সাথে আচরণ</span><div class="value">${getBengaliValue("ElderBehavior", formData.ElderBehavior)}</div></div>
            <div class="field"><span class="label">ছোটদের সাথে আচরণ</span><div class="value">${getBengaliValue("YoungerBehavior", formData.YoungerBehavior)}</div></div>
            <div class="field"><span class="label">মিথ্যা/জেদ</span><div class="value">${getBengaliValue("LyingStubbornness", formData.LyingStubbornness)}</div></div>
            <div class="field"><span class="label">পড়ালেখায় আগ্রহ</span><div class="value">${getBengaliValue("StudyInterest", formData.StudyInterest)}</div></div>
            <div class="field"><span class="label">ধর্মীয় কাজে আগ্রহ</span><div class="value">${getBengaliValue("ReligiousInterest", formData.ReligiousInterest)}</div></div>
            <div class="field"><span class="label">রাগ নিয়ন্ত্রণ</span><div class="value">${getBengaliValue("AngerControl", formData.AngerControl)}</div></div>
          </div>
        </div>

        <!-- Documents & Pledge -->
        <div class="section">
          <div class="section-title">জমাকৃত ডকুমেন্টস ও অঙ্গীকার</div>
          <div class="doc-grid">
            <div class="doc-item"><span class="check-box">${formData.photographs ? "✓" : ""}</span>ছবি (৪ কপি)</div>
            <div class="doc-item"><span class="check-box">${formData.birthCertificate ? "✓" : ""}</span>জন্ম নিবন্ধন</div>
            <div class="doc-item"><span class="check-box">${formData.birthCertificate ? "✓" : ""}</span>পিতা-মাতার এনআইডি</div>
            <div class="doc-item"><span class="check-box">${formData.markSheet ? "✓" : ""}</span>মার্কশিট</div>
            <div class="doc-item"><span class="check-box">${formData.transferCertificate ? "✓" : ""}</span>টি.সি</div>
          </div>
          ${formData.termsAccepted ? `
          <div class="pledge">
            <span class="check-box" style="flex-shrink:0;">✓</span>
            <span>আমি <strong>${formData.StudentName || "__________"}</strong> অঙ্গীকার করছি যে, প্রতিষ্ঠানের সকল নিয়ম মেনে চলব।</span>
          </div>` : ''}
        </div>

        <!-- Signatures -->
        <div class="footer-signs">
          <div class="sign-line">অভিভাবকের স্বাক্ষর</div>
          <div class="sign-line">অধ্যক্ষের স্বাক্ষর</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  document.body.appendChild(container);

  try {
    const loadingToast = document.createElement("div");
    loadingToast.className = "fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50";
    loadingToast.innerText = "PDF তৈরি হচ্ছে...";
    document.body.appendChild(loadingToast);

    const canvas = await html2canvas(container, {
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false,
      allowTaint: false,
      useCORS: true,
      windowWidth: 800,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = pdfWidth / imgWidth;
    const totalPages = Math.ceil((imgHeight * ratio) / pdfHeight);

    for (let page = 0; page < totalPages; page++) {
      if (page > 0) pdf.addPage();
      const sourceY = page * (pdfHeight / ratio);
      const sourceHeight = Math.min(imgHeight - sourceY, pdfHeight / ratio);
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        sourceHeight * ratio,
        undefined,
        undefined,
        sourceY
      );
    }

    pdf.save(`admission-form-${studentId}.pdf`);

    document.body.removeChild(loadingToast);
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("PDF তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  } finally {
    document.body.removeChild(container);
  }
};