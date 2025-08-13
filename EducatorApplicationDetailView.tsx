

import React, { useState, useMemo } from 'react';
import { EducatorApplication, Educator, EducatorStatus, VerifiableDocument, VerificationStatus, Certification, Experience } from './types';
import { ViewType } from './types';
import { ArrowLeftIcon, BriefcaseIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PaperclipIcon, UserCheckIcon, StarIcon, AcademicCapIcon, UserMinusIcon, CheckIcon, TrashIcon, CheckBadgeIcon, PhoneIcon, EnvelopeIcon } from './components/Icons';
import ConfirmationModal from './components/ConfirmationModal';

interface EducatorApplicationDetailViewProps {
    application: EducatorApplication;
    educator: Educator;
    navigateTo: (view: ViewType) => void;
    onUpdateStatus: (applicationId: string, newStatus: EducatorStatus, reason?: string) => void;
    onUpdateDocumentStatus: (applicationId: string, documentType: 'personalId' | 'certification' | 'experience', documentId: string, newStatus: VerificationStatus, reason?: string) => void;
}

const getVerificationStatusInfo = (status: VerificationStatus) => {
    switch (status) {
        case VerificationStatus.VERIFIED: return { text: 'تم التحقق', color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300', icon: <CheckCircleIcon className="w-4 h-4" /> };
        case VerificationStatus.REJECTED: return { text: 'مرفوض', color: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300', icon: <XCircleIcon className="w-4 h-4" /> };
        default: return { text: 'قيد المراجعة', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300', icon: <ClockIcon className="w-4 h-4" /> };
    }
}

const DocumentReviewCard: React.FC<{
    doc: VerifiableDocument,
    onVerify: () => void,
    onReject: (reason: string) => void
}> = ({ doc, onVerify, onReject }) => {
    const [isRejecting, setIsRejecting] = useState(false);
    const statusInfo = getVerificationStatusInfo(doc.status);
    return (
        <>
        {isRejecting && <ConfirmationModal
            isOpen={true}
            onClose={() => setIsRejecting(false)}
            onConfirm={(reason) => { onReject(reason); setIsRejecting(false); }}
            title="تأكيد رفض المستند"
            message={`هل أنت متأكد من رفض المستند "${doc.fileName}"؟`}
            icon={<XCircleIcon className="w-8 h-8"/>}
            isReasonRequired={true}
            reasonLabel="سبب الرفض (إلزامي)"
        />}
        <div className="border dark:border-gray-600 rounded-lg p-3 mt-2 bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center justify-between flex-wrap gap-2">
                <a href={doc.fileUrl} target="_blank" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                    <PaperclipIcon className="w-4 h-4" /> {doc.fileName}
                </a>
                <span className={`px-2 py-1 inline-flex items-center gap-1.5 text-xs font-semibold rounded-full ${statusInfo.color}`}>{statusInfo.icon}{statusInfo.text}</span>
            </div>
            {doc.rejectionReason && <p className="text-xs text-red-500 mt-2 p-2 bg-red-50 dark:bg-red-900/30 rounded-md">سبب الرفض: {doc.rejectionReason}</p>}
            {doc.status !== VerificationStatus.VERIFIED && (
                <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t dark:border-gray-600">
                    <button onClick={() => setIsRejecting(true)} className="px-3 py-1 text-xs font-bold text-red-600 bg-red-100 hover:bg-red-200 rounded-lg disabled:opacity-50" disabled={doc.status === VerificationStatus.REJECTED}>رفض</button>
                    <button onClick={onVerify} className="px-3 py-1 text-xs font-bold text-green-600 bg-green-100 hover:bg-green-200 rounded-lg">تحقق</button>
                </div>
            )}
        </div>
        </>
    );
};

const VerificationChecklistItem: React.FC<{ title: string; isVerified: boolean }> = ({ title, isVerified }) => (
    <li className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${isVerified ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>{title}</span>
        {isVerified ? <CheckBadgeIcon className="w-6 h-6 text-green-500" /> : <ClockIcon className="w-5 h-5 text-yellow-500" />}
    </li>
);

const EducatorApplicationDetailView: React.FC<EducatorApplicationDetailViewProps> = ({ application, educator, navigateTo, onUpdateStatus, onUpdateDocumentStatus }) => {
    const [action, setAction] = useState<{ status: EducatorStatus, title: string, message: string, icon: React.ReactNode, confirmClass: string } | null>(null);

    const handleUpdateStatus = (newStatus: EducatorStatus) => {
        const actionMap = {
            [EducatorStatus.ACTIVE]: { title: "تأكيد قبول الطلب", message: `سيتم قبول ${educator.name} وتفعيله في المنصة.`, icon: <UserCheckIcon className="w-8 h-8"/>, confirmClass: 'bg-green-600 hover:bg-green-700' },
            [EducatorStatus.REJECTED]: { title: "تأكيد رفض الطلب", message: `سيتم رفض طلب ${educator.name} ونقله إلى قائمة المرفوضين.`, icon: <UserMinusIcon className="w-8 h-8"/>, confirmClass: 'bg-red-600 hover:bg-red-700' },
        };
        const selectedAction = actionMap[newStatus];
        if (selectedAction) {
            setAction({ status: newStatus, ...selectedAction });
        }
    };
    
    const confirmStatusUpdate = (reason: string) => {
        if (action) {
            onUpdateStatus(application.id, action.status, reason);
            setAction(null);
        }
    };
    
    const isIdVerified = application.personalId.status === VerificationStatus.VERIFIED;
    const areCertsVerified = application.certifications.length > 0 && application.certifications.every(c => c.document.status === VerificationStatus.VERIFIED);
    const areExpsVerified = application.experiences.length > 0 && application.experiences.every(e => e.document.status === VerificationStatus.VERIFIED);

    return (
        <>
        {action && (
            <ConfirmationModal
                isOpen={true}
                onClose={() => setAction(null)}
                onConfirm={confirmStatusUpdate}
                title={action.title}
                message={action.message}
                icon={action.icon}
                isReasonRequired={action.status === EducatorStatus.REJECTED}
                reasonLabel="سبب الرفض (إلزامي)"
                confirmButtonClass={action.confirmClass}
            />
        )}
        <div className="animate-fade-in">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 mb-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <img className="w-20 h-20 rounded-full" src={educator.avatarUrl} alt={educator.name} />
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{educator.name}</h1>
                            <p className="text-blue-500 font-semibold">{educator.discipline}</p>
                            <span className="mt-1 px-2 py-1 inline-flex items-center gap-1.5 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300">
                                <ClockIcon className="w-4 h-4" /> قيد المراجعة
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                        <button onClick={() => handleUpdateStatus(EducatorStatus.REJECTED)} className="flex-1 px-6 py-2.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700">رفض</button>
                        <button onClick={() => handleUpdateStatus(EducatorStatus.ACTIVE)} className="flex-1 px-6 py-2.5 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700">قبول</button>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
                 {/* Main Content */}
                 <main className="lg:w-2/3 w-full">
                    <div className="relative border-s-2 border-gray-200 dark:border-gray-700 ms-3">
                         <div className="mb-10 ms-8">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                               <AcademicCapIcon className="w-3 h-3 text-blue-800 dark:text-blue-300"/>
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">الشهادات العلمية</h3>
                             {application.certifications.length > 0 ? (
                                application.certifications.map(cert => (
                                    <div key={cert.id} className="mb-4 last:mb-0">
                                        <p className="font-semibold">{cert.title}</p>
                                        <p className="text-xs text-gray-500">{cert.issuingAuthority} - {cert.issueDate}</p>
                                        <DocumentReviewCard
                                            doc={cert.document}
                                            onVerify={() => onUpdateDocumentStatus(application.id, 'certification', cert.id, VerificationStatus.VERIFIED)}
                                            onReject={(reason) => onUpdateDocumentStatus(application.id, 'certification', cert.id, VerificationStatus.REJECTED, reason)}
                                        />
                                    </div>
                                ))
                            ) : <p className="text-sm text-gray-400">لم يقم المتقدم بإضافة أي شهادات.</p>}
                        </div>
                         <div className="mb-10 ms-8">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <BriefcaseIcon className="w-3 h-3 text-blue-800 dark:text-blue-300"/>
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">الخبرات العملية</h3>
                              {application.experiences.length > 0 ? (
                                application.experiences.map(exp => (
                                    <div key={exp.id} className="mb-4 last:mb-0">
                                        <p className="font-semibold">{exp.role} في {exp.company}</p>
                                        <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{exp.description}</p>
                                        <DocumentReviewCard
                                            doc={exp.document}
                                            onVerify={() => onUpdateDocumentStatus(application.id, 'experience', exp.id, VerificationStatus.VERIFIED)}
                                            onReject={(reason) => onUpdateDocumentStatus(application.id, 'experience', exp.id, VerificationStatus.REJECTED, reason)}
                                        />
                                    </div>
                                ))
                            ) : <p className="text-sm text-gray-400">لم يقم المتقدم بإضافة أي خبرات.</p>}
                        </div>
                    </div>
                 </main>

                {/* Sidebar */}
                <aside className="lg:w-1/3 w-full space-y-6">
                     <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700">
                        <h3 className="font-bold mb-3 text-gray-800 dark:text-white">قائمة التحقق</h3>
                        <ul className="space-y-3">
                           <VerificationChecklistItem title="الهوية الشخصية" isVerified={isIdVerified} />
                           <VerificationChecklistItem title="الشهادات العلمية" isVerified={areCertsVerified} />
                           <VerificationChecklistItem title="الخبرات العملية" isVerified={areExpsVerified} />
                        </ul>
                    </div>
                     <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700">
                        <h3 className="font-bold mb-3 text-gray-800 dark:text-white">المستندات الأساسية</h3>
                        <div>
                            <p className="font-semibold text-sm">الهوية الشخصية</p>
                            <DocumentReviewCard
                                doc={application.personalId}
                                onVerify={() => onUpdateDocumentStatus(application.id, 'personalId', application.personalId.id, VerificationStatus.VERIFIED)}
                                onReject={(reason) => onUpdateDocumentStatus(application.id, 'personalId', application.personalId.id, VerificationStatus.REJECTED, reason)}
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
        </>
    );
};

export default EducatorApplicationDetailView;
