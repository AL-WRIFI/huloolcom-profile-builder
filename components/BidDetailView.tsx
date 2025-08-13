
import React, { useState, useMemo } from 'react';
import { Bid, Project, Educator, BidStatus, Task, PricedBidTask } from '../types';
import { ViewType } from '../types';
import StatusUpdateModal from './StatusUpdateModal';
import { ArrowLeftIcon, BriefcaseIcon, CheckCircleIcon, ClockIcon, DollarSignIcon, FileTextIcon, LinkIcon, PaperclipIcon, PhoneIcon, StarIcon, UserCheckIcon, XCircleIcon, SparklesIcon, CheckIcon, MapPinIcon, GlobeAltIcon, EnvelopeIcon } from './Icons';
import ApprovalMessageModal from './ApprovalMessageModal';
import AssignmentAgreementModal from './AssignmentAgreementModal';

interface BidDetailViewProps {
    bid: Bid;
    project: Project;
    educator: Educator;
    allBids: Bid[]; // All bids for the same project for comparison
    navigateTo: (view: ViewType, id?: string | null) => void;
    onUpdateBidTaskStatus: (bidId: string, taskId: string, newStatus: BidStatus, details?: { reason?: string; approvalMessage?: string; assignmentAgreement?: string; }) => void;
}

const InfoCard: React.FC<{ children: React.ReactNode, title: string, icon: React.ReactNode, className?: string }> = ({ children, title, icon, className = '' }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border dark:border-gray-700 ${className}`}>
        <div className="flex items-center mb-4">
            <div className="text-blue-600 dark:text-blue-400">{icon}</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white ms-3">{title}</h3>
        </div>
        <div>
            {children}
        </div>
    </div>
);

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} filled={i < Math.round(rating)} />
        ))}
        <span className="text-xs text-gray-500 dark:text-gray-400 ms-1.5 font-medium">({rating.toFixed(1)})</span>
    </div>
);

const BidStrengthIndicator: React.FC<{ bid: Bid; educator: Educator }> = ({ bid, educator }) => {
    const score = useMemo(() => {
        let calculatedScore = 0;
        if (educator.rating >= 4.5) calculatedScore += 35; else if (educator.rating >= 4.0) calculatedScore += 20;
        if (educator.experienceLevel === 'خبير') calculatedScore += 35; else if (educator.experienceLevel === 'متوسط') calculatedScore += 20;
        if (bid.proposal.length > 150) calculatedScore += 30;
        return Math.min(100, calculatedScore);
    }, [bid, educator]);
    
    const strength = score > 80 ? { text: "مرشح قوي جداً", color: "text-green-500", track: "stroke-green-500/30", ring: "stroke-green-500" }
        : score > 60 ? { text: "عرض تنافسي", color: "text-blue-500", track: "stroke-blue-500/30", ring: "stroke-blue-500" }
        : score > 40 ? { text: "مرشح جيد", color: "text-yellow-500", track: "stroke-yellow-500/30", ring: "stroke-yellow-500" }
        : { text: "عرض عادي", color: "text-gray-500", track: "stroke-gray-500/30", ring: "stroke-gray-500" };

    const circumference = 2 * Math.PI * 40; // 2 * pi * r
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center gap-4">
                <SparklesIcon className={`w-7 h-7 flex-shrink-0 ${strength.color}`} />
                <div>
                    <h4 className={`font-bold text-sm ${strength.color}`}>مؤشر قوة العرض</h4>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">{strength.text}</p>
                </div>
            </div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className={` ${strength.track}`} strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                    <circle
                        className={`${strength.ring} transition-all duration-1000 ease-out`}
                        strokeWidth="10"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
                        transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="50" className={`font-bold ${strength.color}`} textAnchor="middle" dy=".3em" fontSize="24">{score}</text>
                </svg>
            </div>
        </div>
    );
};

const getStatusInfo = (status: BidStatus) => {
    switch (status) {
        case BidStatus.ASSIGNED: return { text: 'معين', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', icon: <CheckCircleIcon className="w-4 h-4"/> };
        case BidStatus.APPROVED: return { text: 'مقبول مبدئياً', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', icon: <CheckIcon className="w-4 h-4"/> };
        case BidStatus.REJECTED: return { text: 'مرفوض', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', icon: <XCircleIcon className="w-4 h-4"/> };
        default: return { text: 'معلق', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', icon: <ClockIcon className="w-4 h-4"/> };
    }
};

const BidTaskCard: React.FC<{
    task: Task;
    bidTask: PricedBidTask;
    onStatusChange: (taskId: string, newStatus: BidStatus) => void;
}> = ({ task, bidTask, onStatusChange }) => {
    const statusInfo = getStatusInfo(bidTask.status);

    const isPending = bidTask.status === BidStatus.PENDING;
    const isApproved = bidTask.status === BidStatus.APPROVED;
    const isAssigned = bidTask.status === BidStatus.ASSIGNED;
    const isRejected = bidTask.status === BidStatus.REJECTED;

    return (
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-200 dark:border-gray-600/60">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                <div>
                    <p className="font-bold text-gray-800 dark:text-white">{task.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{task.description}</p>
                </div>
                <div className={`flex-shrink-0 px-2 py-1 inline-flex items-center gap-1.5 text-xs font-semibold rounded-full ${statusInfo.color}`}>
                    {statusInfo.icon}
                    {statusInfo.text}
                </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t dark:border-gray-600 text-xs">
                <span className="font-semibold text-green-600 dark:text-green-400 text-base">{bidTask.amount.toLocaleString()} ريال</span>
                {task.budget && <span className="text-gray-500 dark:text-gray-400">من ميزانية: {task.budget.toLocaleString()} ريال</span>}
            </div>
             {bidTask.approvalMessage && <p className="mt-2 text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 p-2 rounded-md">رسالة القبول: {bidTask.approvalMessage}</p>}
             {bidTask.rejectionReason && <p className="mt-2 text-xs text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/40 p-2 rounded-md">سبب الرفض: {bidTask.rejectionReason}</p>}
            <div className="mt-3 pt-3 border-t dark:border-gray-600 flex flex-wrap gap-2">
                <button onClick={() => onStatusChange(task.id, BidStatus.APPROVED)} disabled={isApproved || isAssigned} className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-700 hover:bg-blue-500/30 disabled:opacity-40 disabled:cursor-not-allowed">قبول مبدئي</button>
                <button onClick={() => onStatusChange(task.id, BidStatus.ASSIGNED)} disabled={isAssigned} className="text-xs font-semibold px-2.5 py-1 rounded bg-green-500/20 text-green-700 hover:bg-green-500/30 disabled:opacity-40 disabled:cursor-not-allowed">قبول وتعيين مباشر</button>
                <button onClick={() => onStatusChange(task.id, BidStatus.REJECTED)} disabled={isRejected} className="text-xs font-semibold px-2.5 py-1 rounded bg-red-500/20 text-red-700 hover:bg-red-500/30 disabled:opacity-40 disabled:cursor-not-allowed">رفض</button>
                 {(!isPending) && <button onClick={() => onStatusChange(task.id, BidStatus.PENDING)} className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-500/20 text-gray-700 hover:bg-gray-500/30">إعادة للتعليق</button>}
            </div>
        </div>
    )
}

const BidDetailView: React.FC<BidDetailViewProps> = ({ bid, project, educator, allBids, navigateTo, onUpdateBidTaskStatus }) => {
    const [action, setAction] = useState<{ taskId: string, newStatus: BidStatus } | null>(null);

    const bidTasks = project.tasks
        .map(task => ({ task, bidTask: bid.bidTasks.find(bt => bt.taskId === task.id) }))
        .filter(item => item.bidTask) as { task: Task, bidTask: PricedBidTask }[];

    const handleStatusUpdateClick = (taskId: string, newStatus: BidStatus) => {
        const currentStatus = bidTasks.find(bt => bt.task.id === taskId)?.bidTask.status;
        const wasApproved = currentStatus === BidStatus.APPROVED;

        if (newStatus === BidStatus.APPROVED) {
            setAction({ taskId, newStatus });
        } else if (newStatus === BidStatus.ASSIGNED) {
            setAction({ taskId, newStatus });
        } else if (newStatus === BidStatus.REJECTED || (newStatus === BidStatus.PENDING && wasApproved)) {
             setAction({ taskId, newStatus });
        } else {
            onUpdateBidTaskStatus(bid.id, taskId, newStatus);
        }
    };

    const handleConfirmStatusUpdate = (details: any) => {
        if (action) {
            onUpdateBidTaskStatus(bid.id, action.taskId, action.newStatus, details);
        }
        setAction(null);
    };
    
    const totalBidAmount = useMemo(() => bid.bidTasks.reduce((acc, t) => acc + t.amount, 0), [bid.bidTasks]);
    
    const overallStatus = useMemo(() => {
        const statuses = bid.bidTasks.map(bt => bt.status);
        if (statuses.every(s => s === BidStatus.ASSIGNED)) return getStatusInfo(BidStatus.ASSIGNED);
        if (statuses.every(s => s === BidStatus.REJECTED)) return getStatusInfo(BidStatus.REJECTED);
        if (statuses.some(s => s === BidStatus.ASSIGNED || s === BidStatus.APPROVED)) return { text: 'تحت المراجعة', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300', icon: <CheckIcon className="w-4 h-4"/>};
        return getStatusInfo(BidStatus.PENDING);
    }, [bid.bidTasks]);


    return (
        <>
        {action && (
            action.newStatus === BidStatus.REJECTED || action.newStatus === BidStatus.PENDING ? (
                <StatusUpdateModal 
                    isOpen={true} 
                    onClose={() => setAction(null)}
                    title="تأكيد الإجراء"
                    description={`هل أنت متأكد من ${action.newStatus === BidStatus.REJECTED ? 'رفض' : 'إعادة تعليق'} العرض لهذه المهمة؟`}
                    label={`سبب ${action.newStatus === BidStatus.REJECTED ? 'الرفض' : 'الإجراء'}`}
                    icon={<XCircleIcon className="w-8 h-8"/>}
                    onSubmit={(reason) => handleConfirmStatusUpdate({ reason })}
                    isReasonRequired={bidTasks.find(bt=>bt.task.id === action.taskId)?.bidTask.status === BidStatus.APPROVED}
                />
            ) : action.newStatus === BidStatus.APPROVED ? (
                <ApprovalMessageModal 
                    isOpen={true} 
                    onClose={() => setAction(null)}
                    onSubmit={(approvalMessage) => handleConfirmStatusUpdate({ approvalMessage })}
                />
            ) : action.newStatus === BidStatus.ASSIGNED ? (
                 <AssignmentAgreementModal 
                    isOpen={true} 
                    onClose={() => setAction(null)}
                    onSubmit={(assignmentAgreement) => handleConfirmStatusUpdate({ assignmentAgreement })}
                />
            ) : null
        )}
        <div className="animate-fade-in">
             <div className="mb-6">
                <button onClick={() => navigateTo('projectDetail', project.id)} className="flex items-center text-sm text-blue-600 dark:text-blue-500 hover:underline mb-2">
                    <ArrowLeftIcon className="w-4 h-4 me-1"/> العودة إلى تفاصيل المشروع
                </button>
                 <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">عرض مقدم من {educator.name}</h1>
                    <div className={`px-3 py-1.5 inline-flex items-center gap-1.5 text-sm font-semibold rounded-full ${overallStatus.color}`}>
                        {overallStatus.icon} {overallStatus.text}
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-8">
                 {/* Sidebar */}
                <aside className="lg:w-1/3 w-full space-y-6 lg:sticky lg:top-8 flex-shrink-0">
                     <InfoCard title="معلومات المتخصص" icon={<UserCheckIcon className="w-6 h-6"/>}>
                        <div className="flex items-center gap-4">
                            <img src={educator.avatarUrl} alt={educator.name} className="w-16 h-16 rounded-full"/>
                            <div>
                                <h4 className="font-bold text-lg text-gray-800 dark:text-white">{educator.name}</h4>
                                <p className="text-sm text-blue-500 font-semibold">{educator.discipline}</p>
                                <RatingStars rating={educator.rating} />
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t dark:border-gray-700 space-y-2 text-sm">
                            <p className="flex items-center gap-2"><BriefcaseIcon className="w-4 h-4 text-gray-400"/> {educator.experienceLevel} ({educator.skills.slice(0,2).join(', ')})</p>
                            <p className="flex items-center gap-2"><GlobeAltIcon className="w-4 h-4 text-gray-400"/> {educator.country} ({educator.languages.join(', ')})</p>
                            <p className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4 text-gray-400"/> {educator.email}</p>
                            {educator.phone && <p className="flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-gray-400"/> {educator.phone}</p>}
                        </div>
                    </InfoCard>

                     <InfoCard title="ملخص العرض المالي" icon={<DollarSignIcon className="w-6 h-6"/>}>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">إجمالي قيمة العرض</span>
                                <span className="font-bold text-xl text-green-600 dark:text-green-400">{totalBidAmount.toLocaleString()} ريال</span>
                            </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">عدد المهام المتقدم لها</span>
                                <span className="font-semibold text-gray-800 dark:text-white">{bid.bidTasks.length}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">مدة التسليم المقترحة</span>
                                <span className="font-semibold text-gray-800 dark:text-white">{bid.deliveryDays} يوم</span>
                            </div>
                        </div>
                    </InfoCard>

                    <BidStrengthIndicator bid={bid} educator={educator}/>

                </aside>

                 {/* Main content */}
                 <main className="lg:w-2/3 w-full">
                     <InfoCard title="مقترح المتخصص" icon={<FileTextIcon className="w-6 h-6"/>} className="mb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{bid.proposal}</p>
                        {bid.attachments.length > 0 && (
                            <div className="mt-4 pt-4 border-t dark:border-gray-700">
                                <h5 className="font-semibold text-sm mb-2">المرفقات</h5>
                                <div className="space-y-2">
                                    {bid.attachments.map(att => <a href={att.url} key={att.id} className="flex items-center gap-2 text-sm text-blue-600 hover:underline"><PaperclipIcon className="w-4 h-4"/> {att.name} ({att.size})</a>)}
                                </div>
                            </div>
                        )}
                         {bid.links.length > 0 && (
                            <div className="mt-4 pt-4 border-t dark:border-gray-700">
                                <h5 className="font-semibold text-sm mb-2">روابط خارجية</h5>
                                <div className="space-y-2">
                                    {bid.links.map(link => <a href={link.url} key={link.id} target="_blank" className="flex items-center gap-2 text-sm text-blue-600 hover:underline"><LinkIcon className="w-4 h-4"/> {link.title}</a>)}
                                </div>
                            </div>
                        )}
                    </InfoCard>

                    <InfoCard title="المهام المتقدم لها" icon={<BriefcaseIcon className="w-6 h-6"/>}>
                        <div className="space-y-4">
                            {bidTasks.map(({ task, bidTask }) => (
                                <BidTaskCard key={task.id} task={task} bidTask={bidTask} onStatusChange={handleStatusUpdateClick} />
                            ))}
                        </div>
                    </InfoCard>
                 </main>
            </div>
        </div>
        </>
    );
};

export default BidDetailView;
