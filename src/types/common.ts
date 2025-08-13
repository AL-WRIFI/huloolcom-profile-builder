export type ViewType = 
  'dashboard' | 
  'projects' | 'projectDetail' | 'createProject' | 
  'educators' | 'educatorApplications' | 'educatorApplicationDetail' | 'rejectedEducators' |
  'users' | 'userDetail' |
  'educationalRequests' | 'requestDetail' |
  'bidDetail' | 'taskDetail' | 
  'finance' | 'invoiceDetail' |
  'reports' |
  'calendar' |
  'settings';

export enum ProjectType {
  PUBLIC = 'عام',
  PRIVATE = 'خاص',
}

export enum ProjectCreationType {
  PUBLIC = 'عام',
  FROM_REQUEST = 'خاص (بناءً على طلب تعليمي)',
  STANDALONE = 'خاص (مستقل)',
}

export enum AssignmentType {
  INVITATION = 'دعوة',
  DIRECT = 'تعيين مباشر',
  FROM_BID = 'من خلال عرض',
}

export enum AssignmentStatus {
  PENDING = 'معلقة',
  ACCEPTED = 'مقبولة',
  REJECTED = 'مرفوضة',
}

export enum ProjectStatus {
  PENDING = 'قيد الانتظار',
  IN_PROGRESS = 'قيد التنفيذ',
  COMPLETED = 'مكتمل',
  CANCELED = 'ملغي',
}

export enum BidStatus {
  PENDING = 'معلق',
  APPROVED = 'مقبول مبدئياً',
  ASSIGNED = 'معين',
  REJECTED = 'مرفوض',
}

export enum EducationalRequestStatus {
  PENDING = 'معلق',
  ACCEPTED = 'مقبول',
  REJECTED = 'مرفوض',
}

export enum PricingType {
  FIXED = 'سعر ثابت',
  HOURLY = 'بالساعة',
}

export enum PaymentStatus {
  UNPAID = 'غير مدفوع',
  PARTIALLY_PAID = 'مدفوع جزئياً',
  PAID = 'مدفوع',
}

export enum FulfillmentStatus {
  NOT_STARTED = 'لم يبدأ',
  IN_PROGRESS = 'قيد التنفيذ',
  COMPLETED = 'مكتمل',
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: string;
  type: string;
}

export interface Link {
  id: string;
  title: string;
  url: string;
}

export interface Activity {
  id: string;
  message: string;
  actor: string;
  timestamp: string;
  type: 'project' | 'bid' | 'task' | 'user' | 'invoice';
}

export interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}