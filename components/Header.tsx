

import React from 'react';
import { ViewType } from '../types';
import { BellIcon } from './Icons';

interface HeaderProps {
    currentView: ViewType;
    unreadCount: number;
    onNotificationClick: () => void;
}

const viewTitles: Record<ViewType, string> = {
    dashboard: 'الرئيسية',
    projects: 'المشاريع',
    projectDetail: 'تفاصيل المشروع',
    createProject: 'إنشاء مشروع جديد',
    educators: 'المتخصصون',
    educatorApplications: 'طلبات التسجيل',
    educatorApplicationDetail: 'تفاصيل طلب التسجيل',
    rejectedEducators: 'السجل المرفوض',
    users: 'المستخدمون',
    userDetail: 'تفاصيل المستخدم',
    educationalRequests: 'الطلبات الأكاديمية',
    requestDetail: 'تفاصيل الطلب',
    bidDetail: 'تفاصيل العرض',
    taskDetail: 'تفاصيل المهمة',
    finance: 'المالية',
    invoiceDetail: 'تفاصيل الفاتورة',
    reports: 'التقارير والتحليلات',
    calendar: 'الجدول الزمني',
    settings: 'الإعدادات',
};

const Header: React.FC<HeaderProps> = ({ currentView, unreadCount, onNotificationClick }) => {
    return (
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b dark:border-gray-700 p-4 flex items-center justify-between sticky top-0 z-20">
            <h1 className="text-lg font-bold sm:text-xl text-gray-900 dark:text-white">
                {viewTitles[currentView] || 'حلولكم'}
            </h1>
            <div className="flex items-center gap-4">
                 <button onClick={onNotificationClick} className="relative text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <BellIcon className="w-6 h-6" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-[10px] items-center justify-center">
                                {unreadCount}
                            </span>
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
