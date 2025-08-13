import React from 'react';
import { EducatorApplication, Educator } from './types';
import { EyeIcon } from './components/Icons';
import { ViewType } from './App';

interface RejectedEducatorsViewProps {
    applications: EducatorApplication[];
    educators: Educator[];
    navigateTo: (view: ViewType, id: string) => void;
}

const RejectedRow: React.FC<{
    application: EducatorApplication,
    educator: Educator,
}> = ({ application, educator }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            <td className="px-6 py-4">{application.applicationDate}</td>
            <td className="px-6 py-4 text-sm text-red-600 dark:text-red-400">{application.rejectionReason}</td>
        </tr>
    );
}

const RejectedEducatorsView: React.FC<RejectedEducatorsViewProps> = ({ applications, educators, navigateTo }) => {

    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">المتخصصون المرفوضون</h1>
                <p className="text-gray-500 dark:text-gray-400">سجل بجميع طلبات التسجيل التي تم رفضها.</p>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">المتقدم</th>
                            <th scope="col" className="px-6 py-3">التخصص</th>
                            <th scope="col" className="px-6 py-3">تاريخ الطلب</th>
                            <th scope="col" className="px-6 py-3">سبب الرفض</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(app => {
                            const educator = educators.find(e => e.id === app.educatorId);
                            if (!educator) return null;
                            return <RejectedRow key={app.id} application={app} educator={educator} />
                        })}
                        {applications.length === 0 && (
                            <tr><td colSpan={4} className="text-center py-10 text-gray-500">لا توجد طلبات مرفوضة.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RejectedEducatorsView;