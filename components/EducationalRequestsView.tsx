

import React, { useMemo, useState } from 'react';
import { EducationalRequest, EducationalRequestStatus, Project, PaymentStatus, FulfillmentStatus, User } from '../types';
import { CheckCircleIcon, XCircleIcon, ClockIcon, EyeIcon, SearchIcon, FilterIcon, ViewGridIcon, ViewListIcon } from './Icons';
import { ViewType } from '../types';

const getStatusChipClass = (status: any) => {
    if (Object.values(EducationalRequestStatus).includes(status)) {
        switch (status) {
            case EducationalRequestStatus.ACCEPTED: return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case EducationalRequestStatus.REJECTED: return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
            default: return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
        }
    }
    if (Object.values(PaymentStatus).includes(status)) {
         switch (status) {
            case PaymentStatus.PAID: return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case PaymentStatus.PARTIALLY_PAID: return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
            default: return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    }
     if (Object.values(FulfillmentStatus).includes(status)) {
         switch (status) {
            case FulfillmentStatus.COMPLETED: return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case FulfillmentStatus.IN_PROGRESS: return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
            default: return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    }
    return "bg-gray-100 text-gray-800";
};

const StatusBadge: React.FC<{status: string}> = ({ status }) => (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs whitespace-nowrap font-semibold rounded-full ${getStatusChipClass(status)}`}>{status}</span>
);

interface EducationalRequestsViewProps {
    requests: EducationalRequest[];
    projects: Project[];
    users: User[];
    navigateTo: (view: ViewType, id: string) => void;
}

const RequestCard: React.FC<Omit<RequestRowProps, 'onViewDetails'>> = ({ request, requesterName, linkedProject, navigateTo }) => {
     return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700 p-4 flex flex-col gap-3">
            <div>
                <button onClick={() => navigateTo('requestDetail', request.id)} className="font-bold text-gray-900 dark:text-white hover:text-blue-600">{request.title}</button>
                <p className="text-xs text-gray-500 mt-1">مقدم من: {requesterName}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                <StatusBadge status={request.status} />
                <StatusBadge status={request.paymentStatus} />
                <StatusBadge status={request.fulfillmentStatus} />
            </div>
             <div className="text-sm space-y-2 pt-3 border-t dark:border-gray-700">
                <div className="flex justify-between">
                    <span className="text-gray-500">الميزانية:</span>
                    <span className="font-mono font-bold text-green-600">{request.budget?.toLocaleString() || 'N/A'} ريال</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">التسليم:</span>
                    <span className="font-semibold">{request.expectedDeliveryDate || 'N/A'}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">المشروع:</span>
                    {linkedProject ? (
                        <button onClick={() => navigateTo('projectDetail', linkedProject.id)} className="font-semibold text-blue-600 hover:underline truncate max-w-[150px]">{linkedProject.title}</button>
                    ) : <span className="text-gray-400">لا يوجد</span>}
                </div>
            </div>
        </div>
    );
};

interface RequestRowProps {
    request: EducationalRequest;
    requesterName: string;
    linkedProject: Project | null;
    onViewDetails: () => void;
    navigateTo: (view: ViewType, id: string) => void;
};
const RequestRow: React.FC<RequestRowProps> = ({ request, requesterName, linkedProject, onViewDetails, navigateTo }) => {

    const calculateRemainingDays = (deadline: string | null): string => {
        if (!deadline) return 'غير محدد';
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return 'متأخر';
        if (diffDays === 0) return 'اليوم';
        return `خلال ${diffDays} يوم`;
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <p className="font-bold">{request.title}</p>
                <p className="text-xs text-gray-500">{requesterName}</p>
            </td>
            <td className="px-6 py-4"><StatusBadge status={request.status} /></td>
            <td className="px-6 py-4">
                <div className="flex flex-col gap-1 items-start">
                   <StatusBadge status={request.paymentStatus} />
                   <div className="font-mono text-xs text-green-600 dark:text-green-400 pt-1">{request.budget?.toLocaleString()} ريال</div>
                </div>
            </td>
            <td className="px-6 py-4"><StatusBadge status={request.fulfillmentStatus} /></td>
            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                {calculateRemainingDays(request.expectedDeliveryDate)}
            </td>
            <td className="px-6 py-4 text-sm text-blue-600 dark:text-blue-400 font-semibold">
                 {linkedProject ? (
                    <button onClick={() => navigateTo('projectDetail', linkedProject.id)} className="hover:underline">{linkedProject.title}</button>
                ) : <span className="text-gray-400 dark:text-gray-500">لا يوجد</span>}
            </td>
            <td className="px-6 py-4">
                <button onClick={onViewDetails} className="p-2 text-gray-500 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600" title="عرض التفاصيل">
                    <EyeIcon className="w-5 h-5" />
                </button>
            </td>
        </tr>
    );
};

const EducationalRequestsView: React.FC<EducationalRequestsViewProps> = ({ requests, projects, users, navigateTo }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('الكل');
    const [paymentFilter, setPaymentFilter] = useState('الكل');
    const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards');


    const filteredRequests = useMemo(() => {
        return requests.map(req => {
            const requester = users.find(u => u.id === req.requesterId);
            return { ...req, requesterName: requester?.name || 'مستخدم غير معروف' };
        }).filter(req => {
            const statusMatch = statusFilter === 'الكل' || req.status === statusFilter;
            const paymentMatch = paymentFilter === 'الكل' || req.paymentStatus === paymentFilter;
            const searchMatch = searchTerm === '' || req.title.toLowerCase().includes(searchTerm.toLowerCase()) || req.requesterName.toLowerCase().includes(searchTerm.toLowerCase());
            return statusMatch && paymentMatch && searchMatch;
        });
    }, [requests, users, searchTerm, statusFilter, paymentFilter]);
    
    return (
            <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">الطلبات الأكاديمية</h1>
                        <p className="text-gray-500 dark:text-gray-400">{filteredRequests.length} طلب مطابق للمعايير.</p>
                    </div>
                     <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                        <button onClick={() => setViewMode('table')} className={`p-1.5 rounded-md ${viewMode === 'table' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}>
                            <ViewListIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        <button onClick={() => setViewMode('cards')} className={`p-1.5 rounded-md ${viewMode === 'cards' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}>
                            <ViewGridIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6 border dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="relative">
                            <label className="text-xs text-gray-500 dark:text-gray-400">بحث بالاسم</label>
                            <input 
                                type="text" 
                                placeholder="ابحث عن طلب..."
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2 ps-10"
                            />
                            <SearchIcon className="absolute top-7 start-3 w-5 h-5 text-gray-400"/>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 dark:text-gray-400">فلترة حسب الحالة</label>
                            <select onChange={e => setStatusFilter(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2">
                                <option>الكل</option>
                                {Object.values(EducationalRequestStatus).map(s => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 dark:text-gray-400">فلترة حسب حالة الدفع</label>
                            <select onChange={e => setPaymentFilter(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2">
                                <option>الكل</option>
                                {Object.values(PaymentStatus).map(s => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                
                {viewMode === 'table' ? (
                     <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">عنوان الطلب</th>
                                    <th scope="col" className="px-6 py-3">الحالة</th>
                                    <th scope="col" className="px-6 py-3">الحالة المالية</th>
                                    <th scope="col" className="px-6 py-3">حالة الإنجاز</th>
                                    <th scope="col" className="px-6 py-3">التسليم المتوقع</th>
                                    <th scope="col" className="px-6 py-3">المشروع المرتبط</th>
                                    <th scope="col" className="px-6 py-3">إجراء</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRequests.map(request => (
                                    <RequestRow
                                        key={request.id}
                                        request={request}
                                        requesterName={request.requesterName}
                                        linkedProject={projects.find(p => p.educationalRequestId === request.id) || null}
                                        onViewDetails={() => navigateTo('requestDetail', request.id)}
                                        navigateTo={navigateTo}
                                    />
                                ))}
                                {filteredRequests.length === 0 && (
                                    <tr><td colSpan={7} className="text-center py-10 text-gray-500">لا توجد طلبات تطابق بحثك.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filteredRequests.map(request => (
                             <RequestCard
                                key={request.id}
                                request={request}
                                requesterName={request.requesterName}
                                linkedProject={projects.find(p => p.educationalRequestId === request.id) || null}
                                navigateTo={navigateTo}
                            />
                        ))}
                    </div>
                )}
                 {filteredRequests.length === 0 && viewMode === 'cards' && (
                    <div className="text-center py-10 text-gray-500">لا توجد طلبات تطابق بحثك.</div>
                 )}

            </div>
    );
};

export default EducationalRequestsView;
