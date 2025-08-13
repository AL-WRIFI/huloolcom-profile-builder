import React from 'react';
import { AppNotification, ToastNotification } from '../types';
import { ViewType } from '../App';
import { BidsIcon, BookOpenIcon, CheckCircleIcon, ProjectsIcon, ReceiptPercentIcon, UserCheckIcon, UsersIcon, XIcon } from './Icons';

interface NotificationsPanelProps {
    isOpen: boolean;
    onClose: () => void;
    notifications: AppNotification[];
    setNotifications: React.Dispatch<React.SetStateAction<AppNotification[]>>;
    navigateTo: (view: ViewType, id?: string) => void;
}

const NotificationIcon: React.FC<{type: AppNotification['icon']}> = ({ type }) => {
    const iconMap = {
        bid: <BidsIcon className="w-5 h-5 text-green-500"/>,
        task: <BookOpenIcon className="w-5 h-5 text-yellow-500"/>,
        project: <ProjectsIcon className="w-5 h-5 text-blue-500"/>,
        user: <UsersIcon className="w-5 h-5 text-indigo-500"/>,
        invoice: <ReceiptPercentIcon className="w-5 h-s text-purple-500"/>,
        request: <UserCheckIcon className="w-5 h-5 text-cyan-500"/>,
        application: <CheckCircleIcon className="w-5 h-5 text-teal-500"/>,
    }
    return <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">{iconMap[type]}</div>;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose, notifications, setNotifications, navigateTo }) => {
    if (!isOpen) return null;

    const handleNotificationClick = (notification: AppNotification) => {
        if (notification.link) {
            navigateTo(notification.link.view, notification.link.id);
        }
        markAsRead(notification.id);
        onClose();
    }

    const markAsRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({...n, isRead: true})));
    }
    
    const unreadCount = notifications.filter(n => !n.isRead).length;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="absolute top-16 right-4 sm:right-6 lg:right-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-sm border dark:border-gray-700 animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4 border-b dark:border-gray-600 flex justify-between items-center">
                    <h3 className="font-bold text-lg">الإشعارات</h3>
                    <div className="flex items-center gap-4">
                        {unreadCount > 0 && <button onClick={markAllAsRead} className="text-xs text-blue-600 font-semibold hover:underline">تحديد الكل كمقروء</button>}
                         <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <XIcon className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                             <div key={notification.id} onClick={() => handleNotificationClick(notification)} className={`flex items-start gap-3 p-4 border-b dark:border-gray-700/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 ${!notification.isRead ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}>
                                <NotificationIcon type={notification.icon} />
                                <div className="flex-grow">
                                    <p className="text-sm text-gray-700 dark:text-gray-200">{notification.message}</p>
                                    <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                                </div>
                                {!notification.isRead && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-sm text-gray-400 py-10">لا توجد إشعارات جديدة.</p>
                    )}
                </div>

                <div className="p-2 bg-gray-50 dark:bg-gray-900/50 text-center rounded-b-xl">
                    <button className="text-sm font-semibold text-blue-600 hover:underline">عرض كل الإشعارات</button>
                </div>
            </div>
        </div>
    );
};

export default NotificationsPanel;