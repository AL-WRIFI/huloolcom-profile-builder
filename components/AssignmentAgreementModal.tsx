
import React, { useState } from 'react';
import { CheckCircleIcon } from './Icons';

interface AssignmentAgreementModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (agreement: string) => void;
}

const AssignmentAgreementModal: React.FC<AssignmentAgreementModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [agreement, setAgreement] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(agreement);
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
                 <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-4">
                    <CheckCircleIcon className="w-8 h-8"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">تأكيد التعيين</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">يمكنك إضافة اتفاق نهائي أو تعليمات خاصة ليتم حفظها مع هذا التعيين.</p>
                <form onSubmit={handleSubmit} className="w-full space-y-4 text-right">
                    <div>
                        <label htmlFor="assignment-agreement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            الاتفاق أو التعليمات (اختياري)
                        </label>
                        <textarea 
                            id="assignment-agreement" 
                            rows={5}
                            value={agreement} 
                            onChange={e => setAgreement(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 focus:ring-blue-500"
                            placeholder="اكتب هنا أي نقاط اتفاق، مواعيد اجتماعات، أو تعليمات خاصة..."></textarea>
                    </div>
                    <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-8 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500 transition-colors">
                            إلغاء
                        </button>
                        <button type="submit" className="px-8 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 shadow-md transition-colors">
                           تأكيد التعيين
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignmentAgreementModal;
