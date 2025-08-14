import { 
  ProjectStatus, 
  BidStatus, 
  ProjectCreationType, 
  AssignmentType, 
  AssignmentStatus, 
  EducationalRequestStatus,
  PricingType,
  PaymentStatus,
  FulfillmentStatus,
  Attachment,
  Link
} from './common';

export type RequestActivityType = 'CREATED' | 'STATUS_CHANGED' | 'NOTE' | 'PROJECT_LINKED' | 'DETAILS_UPDATED' | 'PAYMENT_STATUS_CHANGED' | 'FULFILLMENT_STATUS_CHANGED' | 'AGREEMENT_UPDATED';

export interface RequestActivityLog {
  id: string;
  type: RequestActivityType;
  details: string;
  reason?: string;
  timestamp: string;
  actor: string;
  actorAvatar: string;
}

export interface EducationalRequest {
  id: string;
  title: string;
  description: string;
  requesterId: string;
  status: EducationalRequestStatus;
  createdAt: string;
  subject: string;
  educationLevel: string;
  attachments: Attachment[];
  activityLog: RequestActivityLog[];
  budget?: number;
  pricingType: PricingType;
  paymentStatus: PaymentStatus;
  fulfillmentStatus: FulfillmentStatus;
  expectedDeliveryDate: string | null;
  finalAgreement?: string;
}

export interface TaskAttachment {
  id: string;
  name: string;
  url: string;
  size: string;
  uploadedBy: 'admin' | 'provider';
  providerId?: string;
  subTaskId?: string;
  createdAt: string;
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
  createdBy: 'admin' | 'provider';
  providerId?: string;
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

export interface Assignment {
  id: string;
  educatorId: string;
  type: AssignmentType;
  status: AssignmentStatus;
  rejectionReason?: string;
  agreementNotes?: string;
  amount?: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  assignments: Assignment[];
  budget: number | null;
  deadline: string;
  creationDate: string;
  isPublic: boolean;
  biddingStatus: 'OPEN' | 'CLOSED';
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
  isPublished: boolean;
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