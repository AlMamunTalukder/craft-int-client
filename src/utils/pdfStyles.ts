export const pdfStyles = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
    :root { --purple-deep: #4c1d95; --border-gray: #d1d5db; }
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Hind Siliguri', sans-serif; }
    body { background: white; color: #1f2937; padding: 8mm; }
    .a4-container { width: 190mm; margin: 0 auto; }
    
    .header-main { 
      display: flex; justify-content: space-between; align-items: center;
      border-bottom: 2px solid var(--purple-deep); padding-bottom: 10px; margin-bottom: 15px;
    }
    .logo-img { width: 70px; height: 70px; object-fit: contain; }
    .school-info h1 { color: var(--purple-deep); font-size: 24px; font-weight: 800; }
    .id-badge { border: 1.5px solid var(--purple-deep); padding: 2px 8px; border-radius: 4px; font-size: 14px; font-weight: bold; color: var(--purple-deep); margin-top: 5px; display: inline-block;}
    
    .photo-box { width: 100px; height: 120px; border: 1px solid #999; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #666; }
    .photo-box img { width: 100%; height: 100%; object-fit: cover; }

    .section { margin-bottom: 15px; }
    .section-title { 
      font-size: 12px; font-weight: 700; color: white; background: #374151; 
      padding: 3px 10px; margin-bottom: 8px; border-radius: 2px;
    }
    
    .grid { display: grid; gap: 8px; }
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    
    .field { border-bottom: 1px dotted #ccc; padding: 2px 0; }
    .label { font-size: 9px; color: #666; font-weight: 600; display: block; margin-bottom: -2px; }
    .value { font-size: 12px; font-weight: 500; color: #111; }
    
    .checkbox { 
      width: 12px; height: 12px; border: 1.5px solid var(--purple-deep); 
      display: inline-flex; align-items: center; justify-content: center; 
      font-size: 10px; font-weight: bold; margin-right: 5px; vertical-align: middle;
    }

    .footer-signs { margin-top: 40px; display: flex; justify-content: space-between; }
    .sign-box { width: 140px; border-top: 1px solid #333; text-align: center; font-size: 10px; padding-top: 4px; }
    
    @media print {
      .section-title { -webkit-print-color-adjust: exact; background: #374151 !important; color: white !important; }
      .checkbox { -webkit-print-color-adjust: exact; }
    }
  </style>
`;