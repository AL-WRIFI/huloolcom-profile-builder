
import React, { useMemo, useState } from 'react';
import { User, UserStatus, EducationalRequest } from './types';
import { ViewType } from './App';
import { EyeIcon, TrashIcon, EditIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from './components/Icons';
import ConfirmationModal from './components/ConfirmationModal';

interface UsersViewProps {
    users: User[];
    educationalRequests: EducationalRequest[];
    navigateTo: (view: ViewType, id: string) => void;
    onUpdateUserStatus: (userId: string, newStatus: UserStatus, reason: string) => void;
    onDeleteUser: (userId: string, reason: string) => void;
}

const getStatusInfo = (status: UserStatus) => {
    switch (status) {
        case UserStatus.ACTIVE: return { text: 'نشط', class: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' };
        case UserStatus.SUSPENDED: return { text: 'معلق', class: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' };
        case UserStatus.BANNED: return { text: 'محظور', class: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' };
        default: return { text: status, class: 'bg-gray-100 text-gray-800' };
    }
};

const UserRow: React.FC<{
    user: User & { requestCount: number };
    navigateTo: (view: ViewType, id: string) => void;
    onUpdateStatus: (userId: string, newStatus: UserStatus, reason: string) => void;
    onDelete: (userId: string, reason: string) => void;
}> = ({ user, navigateTo, onUpdateStatus, onDelete }) => {
    const [action, setAction] = useState<{ type: 'delete' | 'status', payload?: any } | null>(null);
    const statusInfo = getStatusInfo(user.status);
    
    const handleConfirm = (reason: string) => {
        if (!action) return;
        if (action.type === 'delete') {
            onDelete(user.id, reason);
        } else if (action.type === 'status') {
            onUpdateStatus(user.id, action.payload, reason);
        }
        setAction(null);
    }

    return (
        <>
            {action && (
                <ConfirmationModal 
                    isOpen={true}
                    onClose={() => setAction(null)}
                    onConfirm={handleConfirm}
                    title={action.type === 'delete' ? `تأكيد حذف المستخدم` : `تغيير حالة المستخدم إلى "${action.payload}"`}
                    message={action.type === 'delete' ? `هل أنت متأكد من حذف المستخدم ${user.name}؟ لا يمكن التراجع عن هذا الإجراء.` : `يرجى تقديم سبب لتغيير حالة المستخدم.`}
                    icon={action.type === 'delete' ? <TrashIcon className="w-8 h-8"/> : <EditIcon className="w-8 h-8"/>}
                    isReasonRequired={true}
                />
            )}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full me-3" src={user.avatarUrl} alt={user.name} />
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4 font-semibold">{user.requestCount}</td>
                <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusInfo.class}`}>
                        {statusInfo.text}
                    </span>
                </td>
                <td className="px-6 py-4">{user.registrationDate}</td>
                <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        <button onClick={() => navigateTo('userDetail', user.id)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="عرض التفاصيل">
                            <EyeIcon className="w-5 h-5 text-gray-500"/>
                        </button>
                         <button onClick={() => setAction({ type: 'status', payload: user.status === UserStatus.ACTIVE ? UserStatus.SUSPENDED : UserStatus.ACTIVE })} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="تغيير الحالة">
                            <EditIcon className="w-5 h-5 text-gray-500"/>
                        </button>
                        <button onClick={() => setAction({ type: 'delete' })} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="حذف">
                            <TrashIcon className="w-5 h-5 text-gray-500 hover:text-red-500"/>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

const UsersView: React.FC<UsersViewProps> = ({ users, educationalRequests, navigateTo, onUpdateUserStatus, onDeleteUser }) => {
    
    const usersWithRequestCount = useMemo(() => {
        return users.map(user => ({
            ...user,
            requestCount: educationalRequests.filter(req => req.requesterId === user.id).length
        }));
    }, [users, educationalRequests]);

    return (
         <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة المستخدمين</h1>
                <p className="text-gray-500 dark:text-gray-400">{users.length} مستخدم مسجل في المنصة.</p>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">المستخدم</th>
                            <th scope="col" className="px-6 py-3">الهاتف</th>
                            <th scope="col" className="px-6 py-3">عدد الطلبات</th>
                            <th scope="col" className="px-6 py-3">الحالة</th>
                            <th scope="col" className="px-6 py-3">تاريخ التسجيل</th>
                            <th scope="col" className="px-6 py-3">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersWithRequestCount.map(user => (
                            <UserRow 
                                key={user.id} 
                                user={user}
                                navigateTo={navigateTo}
                                onUpdateStatus={onUpdateUserStatus}
                                onDelete={onDeleteUser}
                            />
                        ))}
                         {usersWithRequestCount.length === 0 && (
                            <tr><td colSpan={6} className="text-center py-10 text-gray-500">لا يوجد مستخدمون مسجلون.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersView;
