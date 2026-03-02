/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/mapFormData.ts
export interface TAdmissionApplication {
  academicYear: string;
  studentInfo: {
    nameBangla: string;
    nameEnglish: string;
    dateOfBirth: Date;
    age: number;
    gender?: 'male' | 'female' | 'other';
    department: string;
    class: string;
    session: string;
    nidBirth?: string;
    bloodGroup?: string;
    nationality?: string;
    studentPhoto?: string;
  };
  academicInfo?: {
    previousSchool?: string;
    previousClass?: string;
    gpa?: string;
  };
  parentInfo: {
    father: {
      nameBangla: string;
      nameEnglish: string;
      profession?: string;
      education?: string;
      mobile: string;
      whatsapp?: string;
    };
    mother: {
      nameBangla: string;
      nameEnglish: string;
      profession?: string;
      education?: string;
      mobile?: string;
      whatsapp?: string;
    };
    guardian?: {
      nameBangla?: string;
      nameEnglish?: string;
      relation?: string;
      mobile?: string;
      whatsapp?: string;
      profession?: string;
      address?: string;
    };
  };
  familyEnvironment?: {
    halalIncome?: string;
    parentsPrayer?: string;
    addiction?: string;
    tv?: string;
    quranRecitation?: string;
    purdah?: string;
  };
  behaviorSkills?: {
    mobileUsage?: string;
    generalBehavior?: string;
    obedience?: string;
    elderBehavior?: string;
    youngerBehavior?: string;
    lyingStubbornness?: string;
    studyInterest?: string;
    religiousInterest?: string;
    angerControl?: string;
  };
  address: {
    present: {
      village?: string;
      postOffice?: string;
      postCode?: string;
      policeStation?: string;
      district?: string;
    };
    permanent: {
      village: string;
      postOffice: string;
      postCode?: string;
      policeStation: string;
      district: string;
    };
  };
  documents?: {
    photographs?: boolean;
    birthCertificate?: boolean;
    markSheet?: boolean;
    transferCertificate?: boolean;
    characterCertificate?: boolean;
  };
  termsAccepted: boolean;
  status: 'pending' | 'approved' | 'rejected';
}

export const mapFormDataToBackend = (formData: Record<string, any>): Partial<TAdmissionApplication> => {
  // Calculate age from date of birth
  const calculateAge = (dob: string): number => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Get current academic year
  const currentYear = new Date().getFullYear();
  const academicYear = `${currentYear}-${currentYear + 1}`;

  return {
    academicYear,
    
    studentInfo: {
      nameBangla: formData.StudentName || '',
      nameEnglish: formData.studentName || '',
      dateOfBirth: formData.dateOfBirth ? new Date(formData.dateOfBirth) : new Date(),
      age: formData.Age ? parseInt(formData.Age) : (formData.dateOfBirth ? calculateAge(formData.dateOfBirth) : 0),
      gender: formData.gender || 'male',
      department: formData.studentDepartment || '',
      class: formData.Class || '',
      session: formData.session || currentYear.toString(),
      nidBirth: formData.nidBirth || '',
      bloodGroup: formData.bloodGroup || '',
      nationality: formData.nationality || 'Bangladeshi',
      studentPhoto: formData.studentPhoto || '',
    },

    academicInfo: {
      previousSchool: formData.PrevSchool || '',
      previousClass: formData.PrevClass || '',
      gpa: formData.GPA || '',
    },

    parentInfo: {
      father: {
        nameBangla: formData.FatherNameBangla || '',
        nameEnglish: formData.FatherName || '',
        profession: formData.FatherJob || '',
        education: formData.FatherEdu || '',
        mobile: formData.FatherMobile || '',
        whatsapp: formData.FatherWhatsapp || '',
      },
      mother: {
        nameBangla: formData.MotherNameBangla || '',
        nameEnglish: formData.MotherName || '',
        profession: formData.MotherJob || '',
        education: formData.MotherEdu || '',
        mobile: formData.MotherMobile || '',
        whatsapp: formData.MotherWhatsapp || '',
      },
      guardian: (formData.guardianName || formData.guardianNameBangla) ? {
        nameBangla: formData.guardianNameBangla || '',
        nameEnglish: formData.guardianName || '',
        relation: formData.guardianRelation || '',
        mobile: formData.guardianMobile || '',
        whatsapp: formData.guardianWhatsapp || '',
        profession: formData.guardianJob || '',
        address: formData.guardianAddress || '',
      } : undefined,
    },

    familyEnvironment: {
      halalIncome: formData.HalalIncome || '',
      parentsPrayer: formData.ParentsPrayer || '',
      addiction: formData.Addiction || '',
      tv: formData.TV || '',
      quranRecitation: formData.QuranRecitation || '',
      purdah: formData.Purdah || '',
    },

    behaviorSkills: {
      mobileUsage: formData.MobileUsage || '',
      generalBehavior: formData.GeneralBehavior || '',
      obedience: formData.Obedience || '',
      elderBehavior: formData.ElderBehavior || '',
      youngerBehavior: formData.YoungerBehavior || '',
      lyingStubbornness: formData.LyingStubbornness || '',
      studyInterest: formData.StudyInterest || '',
      religiousInterest: formData.ReligiousInterest || '',
      angerControl: formData.AngerControl || '',
    },

    address: {
      present: {
        village: formData.village || '',
        postOffice: formData.postOffice || '',
        postCode: formData.postCode || '',
        policeStation: formData.policeStation || '',
        district: formData.district || '',
      },
      permanent: {
        village: formData.permVillage || '',
        postOffice: formData.permPostOffice || '',
        postCode: formData.permPostCode || '',
        policeStation: formData.permPoliceStation || '',
        district: formData.permDistrict || '',
      },
    },

    documents: {
      photographs: formData.photographs || false,
      birthCertificate: formData.birthCertificate || false,
      markSheet: formData.markSheet || false,
      transferCertificate: formData.transferCertificate || false,
      characterCertificate: formData.characterCertificate || false,
    },

    termsAccepted: formData.termsAccepted || false,
    
    status: 'pending',
  };
};