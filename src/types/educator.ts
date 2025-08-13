export enum EducatorStatus {
  ACTIVE = 'نشط',
  INACTIVE = 'غير نشط',
  SUSPENDED = 'معلق',
  BANNED = 'محظور',
  PENDING_REVIEW = 'طلب قيد المراجعة',
  REJECTED = 'مرفوض',
}

export enum VerificationStatus {
  PENDING = 'قيد المراجعة',
  VERIFIED = 'تم التحقق',
  REJECTED = 'مرفوض',
}

export interface VerifiableDocument {
  id: string;
  fileUrl: string;
  fileName: string;
  status: VerificationStatus;
  rejectionReason?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuingAuthority: string;
  issueDate: string;
  document: VerifiableDocument;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'الآن';
  description: string;
  document: VerifiableDocument;
}

export interface EducatorApplication {
  id: string;
  educatorId: string;
  status: EducatorStatus;
  applicationDate: string;
  rejectionReason?: string;
  personalId: VerifiableDocument;
  certifications: Certification[];
  experiences: Experience[];
}

export interface Educator {
  id: string;
  name: string;
  email: string;
  phone?: string;
  discipline: string;
  avatarUrl: string;
  status: EducatorStatus;
  experienceLevel: 'مبتدئ' | 'متوسط' | 'خبير';
  country: string;
  skills: string[];
  rating: number;
  languages: string[];
}