/* eslint-disable @typescript-eslint/no-explicit-any */
export const getBengaliValue = (key: string, value: any): string => {
  if (!value) return '-';
  
  const valueMap: Record<string, Record<string, string>> = {
    gender: { male: 'পুরুষ', female: 'মহিলা', other: 'অন্যান্য' },
    yesno: { 'Yes': 'হ্যাঁ', 'No': 'না' },
    prayer: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Sometimes': 'মাঝেমাঝে' },
    purdah: { 'Yes': 'হ্যাঁ', 'No': 'না', 'Trying': 'চেষ্টা করা হয়' },
    behavior: { 
      'Very Good': 'অনেক ভালো', 
      'Good': 'মোটামুটি', 
      'Average': 'ভাল নয়',
      'Excellent': 'চমৎকার',
      'Needs Improvement': 'উন্নতি প্রয়োজন'
    }
  };

  if (key.includes('gender')) return valueMap.gender[value] || value;
  if (['HalalIncome', 'ParentsPrayer', 'Addiction', 'TV'].includes(key)) return valueMap.yesno[value] || value;
  if (key === 'QuranRecitation') return valueMap.prayer[value] || value;
  if (key === 'Purdah') return valueMap.purdah[value] || value;
  
  return valueMap.behavior[value] || value.toString();
};