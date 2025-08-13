
import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface InviteEducatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onInvite: (email: string) => void;
}

const InviteEducatorModal: React.FC<InviteEducatorModalProps> = ({ isOpen, onClose, onInvite }) => {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            alert("يرجى إدخال البريد الإلكتروني.");
            return;
        }
        onInvite(email);
        setEmail('');
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-6 lg:p-8 m-4 animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">دعوة متخصص جديد</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">سيتم إرسال رابط دعوة إلى البريد الإلكتروني المدخل.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="invite-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني للمتخصص</label>
                        <input 
                            type="email" 
                            id="invite-email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="name@example.com" required />
                    </div>
                    
                    <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                            إلغاء
                        </button>
                        <button type="submit" className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                            <SendIcon className="w-4 h-4 me-2" />
                            إرسال الدعوة
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InviteEducatorModal;
