
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

// نوع إنشاء المشروع لتحديد سير العمل
export enum ProjectCreationType {
  PUBLIC = 'عام',
  FROM_REQUEST = 'خاص (بناءً على طلب تعليمي)',
  STANDALONE = 'خاص (مستقل)',
}

// نوع التعيين للمتخصص
export enum AssignmentType {
  INVITATION = 'دعوة',
  DIRECT = 'تعيين مباشر',
  FROM_BID = 'من خلال عرض',
}

// حالة التعيين
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

// ----- NEW USER TYPES -----
export enum UserStatus {
    ACTIVE = 'نشط',
    SUSPENDED = 'معلق',
    BANNED = 'محظور',
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    avatarUrl: string;
    status: UserStatus;
    registrationDate: string;
}
// ----- END USER TYPES -----


// ----- NEW EDUCATOR/APPLICATION TYPES -----

export enum EducatorStatus {
    ACTIVE = 'نشط',
    INACTIVE = 'غير نشط',
    SUSPENDED = 'معلق',
    BANNED = 'محظور',
    // Application statuses
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
    educatorId: string; // Links to an educator object
    status: EducatorStatus; // PENDING_REVIEW or REJECTED
    applicationDate: string;
    rejectionReason?: string;
    // Documents for verification
    personalId: VerifiableDocument;
    certifications: Certification[];
    experiences: Experience[];
}


// ----- END EDUCATOR/APPLICATION TYPES -----

export type RequestActivityType = 'CREATED' | 'STATUS_CHANGED' | 'NOTE' | 'PROJECT_LINKED' | 'DETAILS_UPDATED' | 'PAYMENT_STATUS_CHANGED' | 'FULFILLMENT_STATUS_CHANGED' | 'AGREEMENT_UPDATED';

export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: string; // e.g., '2.5 MB'
  type: string; // e.g., 'PDF', 'Image'
}

export interface Link {
  id: string;
  title: string;
  url: string;
}

export interface RequestActivityLog {
    id: string;
    type: RequestActivityType;
    details: string; // e.g., 'من "معلق" إلى "مقبول"' or the note content
    reason?: string; // Optional reason for the change
    timestamp: string;
    actor: string;
    actorAvatar: string;
}

// تحديث واجهة الطلبات التعليمية
export interface EducationalRequest {
  id: string;
  title: string;
  description: string;
  requesterId: string; // Refactored to link to a User
  status: EducationalRequestStatus;
  createdAt: string;
  subject: string;
  educationLevel: string;
  attachments: Attachment[];
  activityLog: RequestActivityLog[];
  // Financial
  budget?: number;
  pricingType: PricingType;
  paymentStatus: PaymentStatus;
  // Fulfillment
  fulfillmentStatus: FulfillmentStatus;
  expectedDeliveryDate: string | null;
  // Admin-editable text
  finalAgreement?: string;
}

// تحديث واجهة المتخصصين
export interface Educator {
  id: string;
  name: string;
  email: string;
  phone?: string; // إضافة حقل الهاتف
  discipline: string;
  avatarUrl: string;
  status: EducatorStatus;
  experienceLevel: 'مبتدئ' | 'متوسط' | 'خبير';
  country: string;
  skills: string[];
  rating: number; // e.g., 1 to 5
  languages: string[];
}

// ---- NEW TASK-SPECIFIC TYPES ----

export interface TaskAttachment {
    id: string;
    name: string;
    url: string;
    size: string;
    uploadedBy: 'admin' | 'provider'; // 'admin' for requirements, 'provider' for deliverables
    providerId?: string;
    subTaskId?: string; // Optional: link attachment to a sub-task
    createdAt: string;
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
  createdBy: 'admin' | 'provider';
  providerId?: string; // If created by provider
  attachments?: TaskAttachment[];
}

export interface TaskNote {
    id: string;
    content: string;
    createdAt: string;
    createdBy: 'admin' | 'provider';
    authorName: string;
    authorAvatar: string;
}

export interface TaskActivityLog {
    id: string;
    message: string;
    timestamp: string;
    actorName: string;
}

// ---- END NEW TASK-SPECIFIC TYPES ----

// تحديث واجهة التعيينات
export interface Assignment {
  id: string;
  educatorId: string;
  type: AssignmentType;
  status: AssignmentStatus;
  rejectionReason?: string;
  agreementNotes?: string;
  amount?: number;
}

// تحديث واجهة المهام
export interface Task {
  id:string;
  title: string;
  description: string;
  status: ProjectStatus;
  assignments: Assignment[];
  budget: number | null;
  deadline: string;
  creationDate: string;
  isPublic: boolean;
  biddingStatus: 'OPEN' | 'CLOSED';
  // New detailed properties
  subTasks: SubTask[];
  attachments: TaskAttachment[];
  notes: TaskNote[];
  activityLog: TaskActivityLog[];
}

export interface ProjectActivityLog {
    id: string;
    message: string;
    timestamp: string;
    actor: string;
}

// تحديث واجهة المشاريع
export interface Project {
  id: string;
  title: string;
  description: string;
  creationType: ProjectCreationType;
  educationalRequestId: string | null;
  requesterName?: string;
  status: ProjectStatus;
  budget: number | null;
  createdAt: string;
  deadline: string | null;
  createdBy: string;
  projectManagerId: string | null;
  tasks: Task[];
  tags: string[];
  activityLog: ProjectActivityLog[];
  isPublished: boolean; // New flag for bid management
}

export interface PricedBidTask {
  taskId: string;
  status: BidStatus;
  amount: number;
  approvalMessage?: string;
  rejectionReason?: string;
}

export interface Bid {
  id: string;
  projectId: string;
  educatorId: string;
  bidTasks: PricedBidTask[];
  deliveryDays: number;
  proposal: string;
  createdAt: string;
  attachments: Attachment[];
  links: Link[];
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

// ---- NEW FINANCIAL TYPES ----
export interface InvoiceItem {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

export type InvoiceStatus = 'DRAFT' | 'ISSUED' | 'PAID' | 'OVERDUE' | 'CANCELED';

export interface Invoice {
    id: string;
    invoiceNumber: string;
    projectId?: string;
    requesterId: string;
    issueDate: string;
    dueDate: string;
    status: InvoiceStatus;
    items: InvoiceItem[];
    subtotal: number;
    tax: number; // as a fixed amount
    totalAmount: number;
    notes?: string;
}

export interface Payment {
    id: string;
    invoiceId: string;
    amount: number;
    paymentDate: string;
    method: 'تحويل بنكي' | 'بطاقة ائتمان' | 'PayPal';
    transactionId?: string;
}
// ---- END FINANCIAL TYPES ----


// ---- NEW NOTIFICATION TYPE ----
export interface AppNotification {
    id: string;
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    link?: { view: ViewType; id: string };
    isRead: boolean;
    timestamp: string;
    icon: 'bid' | 'task' | 'project' | 'user' | 'invoice' | 'request' | 'application';
}
// ---- END NOTIFICATION TYPE ----
