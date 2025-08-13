

import React, { useState } from 'react';

interface StatusUpdateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (reason: string) => void;
    title: string;
    description: string;
    label: string;
    icon: React.ReactNode;
    isReasonRequired?: boolean;
}

const StatusUpdateModal: React.FC<StatusUpdateModalProps> = ({ isOpen, onClose, onSubmit, title, description, label, icon, isReasonRequired = false }) => {
    const [reason, setReason] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isReasonRequired && !reason.trim()) {
            setError('هذا الحقل مطلوب.');
            return;
        }
        setError('');
        onSubmit(reason);
    };
    
    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReason(e.target.value);
        if(error) setError('');
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center animate-fade-in px-4"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 lg:p-8 m-4 flex flex-col items-center text-center animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                    {icon}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>

                <form onSubmit={handleSubmit} className="w-full space-y-4 text-right">
                    <div>
                        <label htmlFor="status-reason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {label} {isReasonRequired && <span className="text-red-500">*</span>}
                        </label>
                        <textarea 
                            id="status-reason" 
                            rows={4}
                            value={reason} 
                            onChange={handleReasonChange} 
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="اكتب السبب أو التوضيح هنا..."></textarea>
                        {error && <p className="text-red-500 text-xs mt-1 text-right">{error}</p>}
                    </div>
                    <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-8 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500 transition-colors">
                            إلغاء
                        </button>
                        <button type="submit" className="px-8 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-md transition-colors">
                            تأكيد
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StatusUpdateModal;