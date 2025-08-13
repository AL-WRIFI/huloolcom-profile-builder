import React, { useMemo, useState } from 'react';
import { Invoice, InvoiceStatus, User, Project } from '../types';
import { ViewType } from '../App';
import { PlusIcon, ReceiptPercentIcon } from './Icons';

interface FinanceViewProps {
    invoices: Invoice[];
    users: User[];
    projects: Project[];
    navigateTo: (view: ViewType, id: string) => void;
}

const getStatusChipClass = (status: InvoiceStatus) => {
    switch (status) {
        case 'PAID': return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
        case 'ISSUED': return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
        case 'OVERDUE': return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
        case 'DRAFT': return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        case 'CANCELED': return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    }
};

const InvoiceRow: React.FC<{ invoice: Invoice, requesterName: string, projectName: string }> = ({ invoice, requesterName, projectName }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
            <td className="px-6 py-4 font-semibold text-blue-600 hover:underline cursor-pointer">#{invoice.invoiceNumber}</td>
            <td className="px-6 py-4">{projectName}</td>
            <td className="px-6 py-4">{requesterName}</td>
            <td className="px-6 py-4">{invoice.issueDate}</td>
            <td className="px-6 py-4">{invoice.dueDate}</td>
            <td className="px-6 py-4 font-mono font-bold text-green-600">{invoice.totalAmount.toLocaleString()} ريال</td>
            <td className="px-6 py-4">
                 <span className={`px-2 py-1 text-xs whitespace-nowrap font-medium rounded-full ${getStatusChipClass(invoice.status)}`}>
                    {invoice.status}
                 </span>
            </td>
            <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline font-semibold">عرض</button>
            </td>
        </tr>
    );
};

const FinanceView: React.FC<FinanceViewProps> = ({ invoices, users, projects, navigateTo }) => {
    const [activeTab, setActiveTab] = useState<'invoices' | 'payments'>('invoices');

    const mappedInvoices = useMemo(() => {
        return invoices.map(inv => {
            const requester = users.find(u => u.id === inv.requesterId);
            const project = projects.find(p => p.id === inv.projectId);
            return {
                ...inv,
                requesterName: requester?.name || 'غير معروف',
                projectName: project?.title || 'مشروع غير مرتبط'
            }
        });
    }, [invoices, users, projects]);
    
    const totalRevenue = useMemo(() => mappedInvoices.filter(i => i.status === 'PAID').reduce((acc, i) => acc + i.totalAmount, 0), [mappedInvoices]);
    const totalOutstanding = useMemo(() => mappedInvoices.filter(i => i.status === 'ISSUED' || i.status === 'OVERDUE').reduce((acc, i) => acc + i.totalAmount, 0), [mappedInvoices]);


    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">الإدارة المالية</h1>
                <p className="text-gray-500 dark:text-gray-400">تتبع الفواتير والمدفوعات الخاصة بالمنصة.</p>
              </div>
               <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300">
                    <PlusIcon className="w-5 h-5 me-2" />
                    إنشاء فاتورة
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border dark:border-gray-700">
                    <p className="text-sm text-gray-500">إجمالي الإيرادات (المدفوع)</p>
                    <p className="text-3xl font-bold text-green-500 mt-1">{totalRevenue.toLocaleString()} ريال</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border dark:border-gray-700">
                    <p className="text-sm text-gray-500">المبالغ المستحقة (غير مدفوعة)</p>
                    <p className="text-3xl font-bold text-red-500 mt-1">{totalOutstanding.toLocaleString()} ريال</p>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">رقم الفاتورة</th>
                            <th scope="col" className="px-6 py-3">المشروع</th>
                            <th scope="col" className="px-6 py-3">العميل</th>
                            <th scope="col" className="px-6 py-3">تاريخ الإصدار</th>
                            <th scope="col" className="px-6 py-3">تاريخ الاستحقاق</th>
                            <th scope="col" className="px-6 py-3">المبلغ</th>
                            <th scope="col" className="px-6 py-3">الحالة</th>
                            <th scope="col" className="px-6 py-3">إجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedInvoices.map(invoice => <InvoiceRow key={invoice.id} invoice={invoice} requesterName={invoice.requesterName} projectName={invoice.projectName} />)}
                         {mappedInvoices.length === 0 && (
                            <tr><td colSpan={8} className="text-center py-10 text-gray-500">لا توجد فواتير.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinanceView;