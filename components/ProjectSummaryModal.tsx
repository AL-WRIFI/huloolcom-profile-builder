
import React from 'react';
import { Project, ProjectStatus, ProjectCreationType } from '../types';
import { ClockIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon, DollarSignIcon, FileTextIcon } from './Icons';

interface ProjectSummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
}

const getStatusInfo = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.COMPLETED: return { icon: <CheckCircleIcon className="w-5 h-5" />, color: 'text-green-500 bg-green-100 dark:bg-green-900/50 dark:text-green-400', label: 'مكتمل' };
      case ProjectStatus.IN_PROGRESS: return { icon: <ClockIcon className="w-5 h-5 text-yellow-500" />, color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-400', label: 'قيد التنفيذ' };
      case ProjectStatus.CANCELED: return { icon: <XCircleIcon className="w-5 h-5 text-red-500" />, color: 'text-red-500 bg-red-100 dark:bg-red-900/50 dark:text-red-400', label: 'ملغي' };
      default: return { icon: <AlertCircleIcon className="w-5 h-5 text-blue-500" />, color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-400', label: 'قيد الانتظار' };
    }
};

const ProjectSummaryModal: React.FC<ProjectSummaryModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    const statusInfo = getStatusInfo(project.status);
    const completedTasks = project.tasks.filter(t => t.status === ProjectStatus.COMPLETED).length;
    const progress = project.tasks.length > 0 ? (completedTasks / project.tasks.length) * 100 : 0;
    
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-lg p-6 lg:p-8 m-4 flex flex-col animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.color}`}>
                        {statusInfo.icon}
                        <span className="ms-2">{statusInfo.label}</span>
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3">{project.title}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">أنشئ بواسطة: {project.createdBy} &middot; {project.createdAt}</p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-h-40 overflow-y-auto">{project.description}</p>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600 dark:text-gray-300">الميزانية</span>
                        <span className="font-bold text-green-600 text-lg">{project.budget ? `${project.budget.toLocaleString()} ريال` : 'غير محددة'}</span>
                    </div>
                     <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600 dark:text-gray-300">الموعد النهائي</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{project.deadline || 'غير محدد'}</span>
                    </div>
                </div>

                <div className="my-6">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold mb-2">تقدم المهام</h4>
                        <span className="text-sm font-semibold">{completedTasks}/{project.tasks.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                         <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                
                <div className="pt-4 mt-auto text-center">
                     <button type="button" onClick={onClose} className="w-full px-8 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                        إغلاق
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectSummaryModal;
