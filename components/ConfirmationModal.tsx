

import React, { useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (reason: string) => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    icon: React.ReactNode;
    isReasonRequired?: boolean;
    reasonLabel?: string;
    confirmButtonClass?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title, 
    message, 
    confirmText = "تأكيد", 
    cancelText = "إلغاء",
    icon, 
    isReasonRequired = false, 
    reasonLabel = "السبب",
    confirmButtonClass = 'bg-red-600 hover:bg-red-700'
}) => {
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
        onConfirm(reason);
    };

    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReason(e.target.value);
        if (error) setError('');
    };

    const isDestructive = confirmButtonClass.includes('red');

    const iconBgClass = isDestructive 
        ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400'
        : 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400';

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center animate-fade-in px-4"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 lg:p-8 m-4 flex flex-col items-center text-center animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${iconBgClass}`}>
                    {icon}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{message}</p>

                <form onSubmit={handleSubmit} className="w-full space-y-4 text-right">
                    {isReasonRequired && (
                        <div>
                            <label htmlFor="confirmation-reason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {reasonLabel} <span className="text-red-500">*</span>
                            </label>
                            <textarea 
                                id="confirmation-reason" 
                                rows={3}
                                value={reason} 
                                onChange={handleReasonChange} 
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                                placeholder="اكتب السبب أو التوضيح هنا..."></textarea>
                            {error && <p className="text-red-500 text-xs mt-1 text-right">{error}</p>}
                        </div>
                    )}
                    <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-8 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500 transition-colors">
                            {cancelText}
                        </button>
                        <button type="submit" className={`px-8 py-2.5 text-sm font-medium text-white rounded-lg shadow-md transition-colors ${confirmButtonClass}`}>
                            {confirmText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConfirmationModal;