
import React, { useState } from 'react';
import { Project } from '../types';

interface EditProjectDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
    onSave: (details: Partial<Project>) => void;
}

const EditProjectDetailsModal: React.FC<EditProjectDetailsModalProps> = ({ isOpen, onClose, project, onSave }) => {
    const [title, setTitle] = useState(project.title);
    const [description, setDescription] = useState(project.description);
    const [budget, setBudget] = useState(project.budget ? String(project.budget) : '');
    const [deadline, setDeadline] = useState(project.deadline || '');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            title,
            description,
            budget: budget ? Number(budget) : null,
            deadline: deadline || null,
        });
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl p-6 lg:p-8 m-4 animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">تعديل بيانات المشروع</h2>
                 <p className="text-gray-500 dark:text-gray-400 mb-6">تعديل البيانات الأساسية وسير العمل للمشروع.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="project-title-edit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان المشروع</label>
                        <input type="text" id="project-title-edit" value={title} onChange={e => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600"/>
                    </div>
                     <div>
                        <label htmlFor="project-desc-edit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الوصف</label>
                        <textarea id="project-desc-edit" rows={4} value={description} onChange={e => setDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600"></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="project-budget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ميزانية المشروع (ريال)</label>
                            <input 
                                type="number" 
                                id="project-budget" 
                                value={budget} 
                                onChange={e => setBudget(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600" 
                                placeholder="مثال: 5000"
                            />
                        </div>
                         <div>
                            <label htmlFor="project-deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الموعد النهائي</label>
                            <input 
                                type="date" 
                                id="project-deadline" 
                                value={deadline} 
                                onChange={e => setDeadline(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                            إلغاء
                        </button>
                        <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                            حفظ التغييرات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProjectDetailsModal;
