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
  tax: number;
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