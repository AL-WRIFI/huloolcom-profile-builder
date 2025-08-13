import React, { useMemo, useState } from 'react';
import { User, UserStatus, EducationalRequest, Project, ProjectStatus } from '../types';
import { ViewType } from '../App';
import { ArrowLeftIcon, BriefcaseIcon, CheckCircleIcon, ClockIcon, CreditCardIcon, DollarSignIcon, EditIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, TrashIcon, TrendingUpIcon, BookOpenIcon } from './Icons';
import ConfirmationModal from './ConfirmationModal';

interface UserDetailViewProps {
    user: User;
    requests: EducationalRequest[];
    projects: Project[];
    navigateTo: (view: ViewType, id?: string) => void;
    onUpdateStatus: (userId: string, newStatus: UserStatus, reason: string) => void;
}

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
        <div className="flex items-center">
            <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{icon}</div>
            <div className="ms-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>
            </div>
        </div>
    </div>
);

const getStatusInfo = (status: ProjectStatus) => {
    switch(status) {
        case ProjectStatus.COMPLETED: return { text: 'مكتمل', color: 'text-green-500' };
        case ProjectStatus.IN_PROGRESS: return { text: 'قيد التنفيذ', color: 'text-yellow-500' };
        case ProjectStatus.CANCELED: return { text: 'ملغي', color: 'text-red-500' };
        default: return { text: 'قيد الانتظار', color: 'text-blue-500' };
    }
};

const OngoingRequestCard: React.FC<{ request: EducationalRequest; project: Project | null, navigateTo: (view: ViewType, id?: string) => void }> = ({ request, project, navigateTo }) => {
    const progress = useMemo(() => {
        if (!project || project.tasks.length === 0) return 0;
        const completedTasks = project.tasks.filter(t => t.status === ProjectStatus.COMPLETED).length;
        return (completedTasks / project.tasks.length) * 100;
    }, [project]);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700">
            <p className="font-bold text-gray-800 dark:text-white">{request.title}</p>
            {project ? (
                <>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 my-2">
                        <span>تقدم المشروع</span>
                        <span className="font-semibold">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${progress}%`}}></div>
                    </div>
                    <button onClick={() => navigateTo('projectDetail', project.id)} className="text-xs text-blue-600 hover:underline mt-2">عرض المشروع</button>
                </>
            ) : (
                <p className="text-xs text-gray-400 mt-2">لم يتم ربط مشروع بعد.</p>
            )}
        </div>
    );
};

const UserDetailView: React.FC<UserDetailViewProps> = ({ user, requests, projects, navigateTo, onUpdateStatus }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'history'>('overview');
    const [statusAction, setStatusAction] = useState<UserStatus | null>(null);

    const userRequests = useMemo(() => requests.filter(r => r.requesterId === user.id), [requests, user.id]);
    
    const stats = useMemo(() => {
        const totalRequests = userRequests.length;
        const totalPaid = userRequests.reduce((sum, req) => sum + (req.budget || 0), 0);
        const avgValue = totalRequests > 0 ? totalPaid / totalRequests : 0;
        return {
            totalRequests,
            totalPaid: `${totalPaid.toLocaleString()} ريال`,
            avgValue: `${avgValue.toLocaleString()} ريال`
        }
    }, [userRequests]);
    
    const ongoingRequests = useMemo(() => {
        return userRequests
            .map(req => ({ request: req, project: projects.find(p => p.educationalRequestId === req.id) || null }))
            .filter(({ project }) => project && project.status === ProjectStatus.IN_PROGRESS);
    }, [userRequests, projects]);

    const handleConfirmStatusChange = (reason: string) => {
        if(statusAction) {
            onUpdateStatus(user.id, statusAction, reason);
            setStatusAction(null);
        }
    };

    return (
        <>
        {statusAction && <ConfirmationModal 
            isOpen={true} 
            onClose={() => setStatusAction(null)}
            onConfirm={handleConfirmStatusChange}
            title={`تغيير حالة المستخدم إلى "${statusAction}"`}
            message={`هل أنت متأكد من تغيير حالة ${user.name}؟ سيتم توثيق هذا الإجراء.`}
            icon={<EditIcon className="w-8 h-8"/>}
            isReasonRequired={true}
        />}
        <div className="animate-fade-in">
            <div className="mb-6">
                <button onClick={() => navigateTo('users')} className="flex items-center text-sm text-blue-600 dark:text-blue-500 hover:underline mb-3">
                    <ArrowLeftIcon className="w-4 h-4 me-1" /> العودة إلى قائمة المستخدمين
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="lg:w-1/3 w-full space-y-6 flex-shrink-0">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 text-center">
                        <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                        <div className="mt-4 pt-4 border-t dark:border-gray-700 text-sm space-y-2 text-right">
                            <p className="flex justify-between"><span><PhoneIcon className="w-4 h-4 inline me-2 text-gray-400"/>الهاتف:</span> <span className="font-semibold">{user.phone}</span></p>
                            <p className="flex justify-between"><span><MapPinIcon className="w-4 h-4 inline me-2 text-gray-400"/>المدينة:</span> <span className="font-semibold">{user.city}</span></p>
                        </div>
                    </div>
                     <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700 space-y-4">
                        <h3 className="font-bold text-lg">إدارة المستخدم</h3>
                         <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">الحالة</span>
                            <div className="flex gap-1">
                                {Object.values(UserStatus).map(s => (
                                    <button key={s} onClick={() => s !== user.status && setStatusAction(s)} className={`px-2 py-1 text-xs font-bold rounded-md ${user.status === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}>{s}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
                {/* Main Content */}
                <main className="lg:w-2/3 w-full">
                     <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                        <nav className="flex space-x-4 rtl:space-x-reverse -mb-px" aria-label="Tabs">
                            <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-2 px-3 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}><TrendingUpIcon className="w-5 h-5"/>نظرة عامة</button>
                            <button onClick={() => setActiveTab('history')} className={`flex items-center gap-2 px-3 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'history' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}><BookOpenIcon className="w-5 h-5"/>سجل الطلبات ({userRequests.length})</button>
                        </nav>
                    </div>
                    
                    {activeTab === 'overview' && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                               <StatCard title="إجمالي الطلبات" value={String(stats.totalRequests)} icon={<BriefcaseIcon className="w-5 h-5"/>} />
                               <StatCard title="إجمالي المدفوعات" value={stats.totalPaid} icon={<DollarSignIcon className="w-5 h-5"/>} />
                               <StatCard title="متوسط قيمة الطلب" value={stats.avgValue} icon={<CreditCardIcon className="w-5 h-5"/>} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">الطلبات الجارية حالياً</h3>
                                {ongoingRequests.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {ongoingRequests.map(({ request, project }) => (
                                            <OngoingRequestCard key={request.id} request={request} project={project} navigateTo={navigateTo} />
                                        ))}
                                    </div>
                                ) : <p className="text-center text-sm text-gray-400 py-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">لا توجد طلبات جارية لهذا المستخدم.</p>}
                            </div>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="animate-fade-in">
                             <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th className="px-6 py-3">عنوان الطلب</th>
                                            <th className="px-6 py-3">الحالة</th>
                                            <th className="px-6 py-3">المشروع المرتبط</th>
                                            <th className="px-6 py-3">التاريخ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userRequests.map(req => {
                                            const linkedProject = projects.find(p => p.educationalRequestId === req.id);
                                            return (
                                                <tr key={req.id} className="border-b dark:border-gray-700">
                                                    <td className="px-6 py-4 font-semibold text-gray-800 dark:text-white hover:underline cursor-pointer" onClick={() => navigateTo('requestDetail', req.id)}>{req.title}</td>
                                                    <td className="px-6 py-4">{req.status}</td>
                                                    <td className="px-6 py-4">{linkedProject ? <button onClick={() => navigateTo('projectDetail', linkedProject.id)} className="text-blue-600 hover:underline">{linkedProject.title}</button> : 'N/A'}</td>
                                                    <td className="px-6 py-4">{req.createdAt}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
        </>
    );
};

export default UserDetailView;