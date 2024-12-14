import mongoose, { Schema, model, Document } from 'mongoose';

interface DocumentSchema {
  name: string;
  type: string;
  documentURL: string;
  documentNumber: string;
  expiryDate: Date;
  expiryReminder: string;
  ReminderDate: Date;
}

interface AssetSchema {
  name: string;
  type: string;
  description: string;
  assetInfo: string;
  documents: DocumentSchema[];
  createdAt: Date;
  updatedAt: Date;
}

interface EmployeeSchema {
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  personalInfo: {
    nationality: string;
    address: string;
    religion: string;
    maritalStatus: string;
    birthDate: string;
    startOfContract: string;
    endOfContract: string;
    gender: string;
    contractType: string;
  };
  professionalInfo: {
    role: string;
    occupationIqama: string;
    profession: string;
    designation: string;
    workBackground: DocumentSchema[];
  }[];
  salaryPackage: {
    effectiveOn: string;
    basicSalary: string;
    currency: string;
  };
  attachments: {
    name: string;
    type: string;
    expiry: string;
    document: string;
    reminderName: string;
    dateTime: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

interface OwnersSchema {
  userType: string;
  userID: string;
  userName: string;
}

interface CompanyInfoSchema {
  name: string;
  address: string;
  city: string;
  country: string;
  commercialLicenseNumber: string;
  licenseExpiryDate: Date;
  companyLogo: string;
  phoneNumber: string;
}

interface CompanySchema extends Document {
  companyInfo: CompanyInfoSchema;
  ownership: OwnersSchema[];
  documents: DocumentSchema[];
  employees: EmployeeSchema[];
  assets: AssetSchema[];
  createdAt: Date;
  updatedAt: Date;
}

// Sub-Schemas
const DocumentSchema = new Schema<DocumentSchema>({
  name: { type: String, required: false },
  type: { type: String, required: false },
  documentURL: { type: String, required: false },
  documentNumber: { type: String, required: false },
  expiryDate: { type: Date, required: false },
  expiryReminder: { type: String, required: false },
  ReminderDate: { type: Date, required: false },
});

const AssetSchema = new Schema<AssetSchema>({
  name: { type: String, required: false },
  type: { type: String, required: false },
  description: { type: String, required: false },
  assetInfo: { type: String, required: false },
  documents: [DocumentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserInfoSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const PersonalInfoSchema = new Schema({
  nationality: { type: String, required: false },
  address: { type: String, required: false },
  religion: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  birthDate: { type: Date, required: false },
  startOfContract: { type: Date, required: false },
  endOfContract: { type: Date, required: false },
  gender: { type: String, required: false },
  contractType: { type: String, required: false },
});

const ProfessionalInfoSchema = new Schema({
  role: { type: String, required: true },
  occupationIqama: { type: String, required: false },
  profession: { type: String, required: false },
  designation: { type: String, required: false },
  workBackground: [{ type: DocumentSchema,  required: true }], // Assuming this is a list of strings, modify if necessary.
});

const SalaryPackageSchema = new Schema({
  effectiveOn: { type: Date, required: false },
  basicSalary: { type: Number, required: false },
  currency: { type: String, required: false },
});

const AttachmentSchema = new Schema({
  name: { type: String, required: false },
  type: { type: String, required: true },
  expiry: { type: Date, required: true },
  document: { type: String, required: true },
  reminderName: { type: String, required: true },
  dateTime: { type: Date, required: true },
});

const EmployeeSchema = new Schema({
  userInfo: { type: UserInfoSchema, required: true },
  personalInfo: { type: PersonalInfoSchema, required: false },
  professionalInfo: { type: [ProfessionalInfoSchema], required: false },
  salaryPackage: { type: SalaryPackageSchema, required: false },
  attachments: { type: [AttachmentSchema], required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});



const OwnersSchema = new Schema<OwnersSchema>({
  userType: { type: String, required: false },
  userID: { type: String, required: false },
  userName: { type: String, required: false },
});

const CompanyInfoSchema = new Schema<CompanyInfoSchema>({
  name: { type: String, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false },
  commercialLicenseNumber: { type: String, required: false },
  licenseExpiryDate: { type: Date, required: false },
  companyLogo: { type: String, required: false },
  phoneNumber: { type: String, required: false },
});

// Main `Company` Schema
const CompanySchema = new Schema<CompanySchema>({
  companyInfo: { type: CompanyInfoSchema, required: true },
  ownership: [OwnersSchema],
  documents: [DocumentSchema],
  employees: [EmployeeSchema],
  assets: [AssetSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Company || model<CompanySchema>('Company', CompanySchema);
