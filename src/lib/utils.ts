import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertBanglaToEnglishDigits(str: string): string {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = banglaDigits.indexOf(char);
    if (index !== -1) {
      result += englishDigits[index];
    } else {
      result += char;
    }
  }
  return result;
}