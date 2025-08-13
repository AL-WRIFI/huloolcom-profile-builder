
import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface ApprovalMessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (message: string) => void;
}

const ApprovalMessageModal: React.FC<ApprovalMessageModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(message);
    };

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
                    <SendIcon className="w-8 h-8"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">رسالة القبول</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">أرسل رسالة ترحيبية أو تعليمات أولية للمزود مع إشعار القبول.</p>
                <form onSubmit={handleSubmit} className="w-full space-y-4 text-right">
                    <div>
                        <label htmlFor="approval-message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            الرسالة (اختياري)
                        </label>
                        <textarea 
                            id="approval-message" 
                            rows={5}
                            value={message} 
                            onChange={e => setMessage(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 focus:ring-blue-500"
                            placeholder="مثال: تهانينا! تم قبول عرضك. يرجى مراجعة التفاصيل والاستعداد للبدء..."></textarea>
                    </div>
                    <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-8 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500 transition-colors">
                            تخطي
                        </button>
                        <button type="submit" className="px-8 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-md transition-colors">
                            إرسال وتأكيد القبول
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApprovalMessageModal;
