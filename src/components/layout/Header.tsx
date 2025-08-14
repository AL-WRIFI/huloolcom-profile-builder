import React from 'react';
import { useAppStore } from '../../stores/app-store';
import { ViewType } from '../../types/common';
import { cn } from '../../lib/utils';

const viewTitles: Record<ViewType, string> = {
  dashboard: 'الرئيسية',
  projects: 'المشاريع',
  projectDetail: 'تفاصيل المشروع',
  createProject: 'إنشاء مشروع جديد',
  bids: 'العروض',
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

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { 
    currentView, 
    isSidebarCollapsed, 
    setSidebarCollapsed,
    setNotificationsPanelOpen,
    appNotifications 
  } = useAppStore();

  const unreadCount = appNotifications.filter(n => !n.isRead).length;

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-700 dark:bg-gray-800/95 dark:supports-[backdrop-filter]:bg-gray-800/60",
        className
      )}
    >
      <div className="flex h-14 items-center justify-between px-4">
        {/* Left side - Menu toggle and title */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            {viewTitles[currentView] || 'حلولكم'}
          </h1>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button
            onClick={() => setNotificationsPanelOpen(true)}
            className="relative p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </button>

          {/* User menu */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                المدير العام
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@holoolokom.com
              </p>
            </div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://i.pravatar.cc/32?u=admin"
              alt="Admin Avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};