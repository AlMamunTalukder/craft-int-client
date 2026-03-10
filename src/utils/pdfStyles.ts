export const pdfStyles = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
    
    :root {
      --purple-dark: #4c1d95;
      --purple-main: #7c3aed;
      --purple-light: #f5f3ff;
      --text-dark: #1e1b4b;
      --text-gray: #64748b;
      --border: #e9d5ff;
    }

    * { 
      margin: 0; padding: 0; box-sizing: border-box; 
      -webkit-print-color-adjust: exact; 
      print-color-adjust: exact; 
    }
    
    body {
      font-family: 'Hind Siliguri', sans-serif;
      background: #fff;
      color: var(--text-dark);
      line-height: 1.5;
    }

    .pdf-wrapper {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      display: flex;
      background: white;
    }

    /* --- SIDEBAR --- */
    .sidebar {
      width: 65mm;
      background: var(--purple-dark);
      color: white;
      padding: 30px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .sidebar-photo {
      width: 125px;
      height: 150px;
      border: 3px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }
    .sidebar-photo img { width: 100%; height: 100%; object-fit: cover; }
    
    .sidebar-id {
      background: white;
      color: var(--purple-dark);
      padding: 6px 18px;
      border-radius: 25px;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 35px;
    }

    .sidebar-info { width: 100%; }
    .sidebar-info-item { 
      margin-bottom: 18px; 
      border-bottom: 1px solid rgba(255, 255, 255, 0.15); 
      padding-bottom: 6px; 
    }
    .sidebar-label { opacity: 0.8; display: block; font-size: 10px; text-transform: uppercase; color: #ddd; }

    /* --- MAIN CONTENT --- */
    .main-content {
      flex: 1;
      padding: 30px 40px;
    }

    .main-header { 
      margin-bottom: 25px; 
      display: flex; 
      justify-content: space-between; 
      align-items: flex-start;
      border-bottom: 2px solid var(--purple-dark);
      padding-bottom: 15px;
    }
    .logo-img { height: 60px; width: auto; object-fit: contain; }

    .section { margin-bottom: 24px; page-break-inside: avoid; }
    .section-title {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--purple-dark);
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 14px;
      border-bottom: 2px solid var(--purple-light);
      padding-bottom: 6px;
    }
    
    .section-icon { width: 20px; height: 20px; fill: var(--purple-main); }

    .grid { display: grid; gap: 12px; }
    .grid-2 { grid-template-columns: 1fr 1fr; }
    .grid-3 { grid-template-columns: 1fr 1fr 1fr; }

    .field { padding: 4px 0; }
    .label { color: var(--text-gray); font-size: 11px; font-weight: 600; display: block; }
    .value { font-size: 14px; font-weight: 500; border-bottom: 1px solid var(--border); color: #000; min-height: 22px; }

    .address-card {
      background: var(--purple-light);
      padding: 12px;
      border-radius: 8px;
      border-left: 4px solid var(--purple-main);
    }

    .doc-grid { display: grid; grid-template-columns: 1fr; gap: 8px; margin-top: 8px; }
    .doc-item { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: var(--text-dark); }
    .check-box {
      width: 18px;
      height: 18px;
      border: 2px solid var(--purple-main);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--purple-main);
      font-weight: 700;
      background: white;
      flex-shrink: 0;
    }

    .footer-signs { margin-top: 50px; display: flex; justify-content: space-between; }
    .sign-line { width: 160px; border-top: 1.5px solid var(--purple-dark); text-align: center; padding-top: 8px; font-size: 12px; font-weight: 600; color: var(--purple-dark); }

    @media print {
      body { background: white; }
      .sidebar { height: 297mm; }
    }
  </style>
`;