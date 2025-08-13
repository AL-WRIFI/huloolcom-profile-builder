
import React, { useState } from 'react';
import { Task } from '../types';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddTask: (taskData: Omit<Task, 'id' | 'status' | 'assignments' | 'biddingStatus' | 'subTasks' | 'notes' | 'attachments' | 'activityLog' | 'creationDate'>) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [budget, setBudget] = useState<string>('');
    const [isPublic, setIsPublic] = useState(true);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !deadline) {
            alert("يرجى إدخال عنوان المهمة والموعد النهائي.");
            return;
        }
        onAddTask({ title, description, deadline, budget: budget ? Number(budget) : null, isPublic });
        // Reset fields
        setTitle('');
        setDescription('');
        setDeadline('');
        setBudget('');
        setIsPublic(true);
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-lg p-6 lg:p-8 m-4 animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">إضافة مهمة جديدة</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="task-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان المهمة</label>
                        <input 
                            type="text" 
                            id="task-title" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="مثال: إعداد الفصل الأول من المنهج" required />
                    </div>
                     <div>
                        <label htmlFor="task-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الوصف (اختياري)</label>
                        <textarea 
                            id="task-description" 
                            rows={3}
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="أي تفاصيل إضافية عن المهمة..."></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="task-deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الموعد النهائي</label>
                            <input 
                                type="date" 
                                id="task-deadline" 
                                value={deadline} 
                                onChange={e => setDeadline(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600"
                                required
                            />
                        </div>
                         <div>
                            <label htmlFor="task-budget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ميزانية المهمة (اختياري)</label>
                            <input 
                                type="number" 
                                id="task-budget" 
                                value={budget} 
                                onChange={e => setBudget(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600"
                                placeholder="500"
                            />
                        </div>
                    </div>
                     <div className="flex items-center">
                        <input id="is-public-checkbox" type="checkbox" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="is-public-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">طرح هذه المهمة للمنافسة العامة</label>
                    </div>
                    <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                            إلغاء
                        </button>
                        <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                            إضافة المهمة
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;
