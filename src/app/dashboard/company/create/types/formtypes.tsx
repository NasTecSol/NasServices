// types/FormTypes.ts
export interface CompanyInfoData {
  name: string;
  companyOwnerName: string;
  commercialLicenseNumber: string;
  email: string;
  country: string;
  address: string;
  phoneNumber: string;
  companyLogo: string;
}

export interface CompanyAttachmentsData {
  id: string;
  name: string;
  type: string;
  expiry: string;
  attachmentUrl: string;
  reminderName: string;
  remnderdate: string;
}

export interface CompanyOwnershipData {
  userName: string;
  userType: string;
  userID: string;
}

export interface FormData {
  companyInfo: CompanyInfoData;
  documents: CompanyAttachmentsData[];
  ownership: CompanyOwnershipData;
  employees: [];
  assets: [];
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
