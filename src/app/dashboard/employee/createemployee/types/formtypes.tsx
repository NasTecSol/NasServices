// types/FormTypes.ts
export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface PersonalInfo {
  nationality: string;
  address: string;
  religion: string;
  maritalStatus: string;
  birthDate: string;
  startOfContract: string;
  endOfContract: string;
  gender: string;
  contractType: string;
}

export interface ProfessionalInfo {
  role: string;
  occupationIqama: string;
  profession: string;
  designation: string;
  workbackground: [
    {
      name: string;
      type: string;
      documentURL: string;
      documentNumber: string;
      expiryDate: string;
      expiryReminder: string;
      ReminderDate: string;
    }
  ];
}

export interface SalaryPackage {
  effectiveOn: string;
  basicSalary: string;
  currency: string;
}

export interface Attachments {
  name: string;
  type: string;
  expiry: string;
  document: string;
  reminderName: string;
  dateTime: string;
}

export interface FormData {
  userInfo: UserInfo;
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo[];
  salaryPackage: SalaryPackage;
  attachments: Attachments[];
}

export interface FormContextType {
  formData: FormData;
  updateFormData: (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>
  ) => void;
  submitForm: () => Promise<void>;
  resetFormData: () => void; // Add resetFormData here
}
