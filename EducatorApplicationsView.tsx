

import React from 'react';
import { EducatorApplication, Educator, EducatorStatus } from './types';
import { EyeIcon } from './components/Icons';
import { ViewType } from './types';

interface EducatorApplicationsViewProps {
    applications: EducatorApplication[];
    educators: Educator[];
    navigateTo: (view: ViewType, id: string) => void;
}

const ApplicationRow: React.FC<{
    application: EducatorApplication,
    educator: Educator,
    onView: () => void,
}> = ({ application, educator, onView }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full me-3" src={educator.avatarUrl} alt={educator.name} />
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white">{educator.name}</p>
                        <p className="text-xs text-gray-500">{educator.email}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">{educator.discipline}</td>
            <td className="px-6 py-4">{educator.country}</td>
            <td className="px-6 py-4">{application.applicationDate}</td>
            <td className="px-6 py-4">
                 <button onClick={onView} className="p-2 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600" title="عرض ومراجعة الطلب">
                    <EyeIcon className="w-5 h-5" />
                </button>
            </td>
        </tr>
    );
}

const EducatorApplicationsView: React.FC<EducatorApplicationsViewProps> = ({ applications, educators, navigateTo }) => {
    const pendingApplications = applications.filter(app => app.status === EducatorStatus.PENDING_REVIEW);

    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">طلبات تسجيل المتخصصين</h1>
                <p className="text-gray-500 dark:text-gray-400">{pendingApplications.length} طلب جديد بانتظار المراجعة.</p>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">المتقدم</th>
                            <th scope="col" className="px-6 py-3">التخصص</th>
                            <th scope="col" className="px-6 py-3">الدولة</th>
                            <th scope="col" className="px-6 py-3">تاريخ الطلب</th>
                            <th scope="col" className="px-6 py-3">إجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingApplications.map(app => {
                            const educator = educators.find(e => e.id === app.educatorId);
                            if (!educator) return null;
                            return <ApplicationRow key={app.id} application={app} educator={educator} onView={() => navigateTo('educatorApplicationDetail', app.id)} />
                        })}
                        {pendingApplications.length === 0 && (
                            <tr><td colSpan={5} className="text-center py-10 text-gray-500">لا توجد طلبات تسجيل جديدة.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EducatorApplicationsView;
