// types/admission.types.ts
export type TAdmissionStatus = 'pending' | 'approved' | 'rejected';

export interface TAdmissionApplication {
  applicationId?: string;
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

  status: TAdmissionStatus;

  createdAt?: Date;
  updatedAt?: Date;
}