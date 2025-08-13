

import React from 'react';
import { ViewType } from '../types';
import { DashboardIcon, BookOpenIcon, AcademicCapIcon, UsersIcon, UserCheckIcon, SettingsIcon, XIcon, ProjectsIcon, ReceiptPercentIcon, ChartBarIcon, CalendarIcon } from './Icons';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    currentView: ViewType;
    navigateTo: (view: ViewType) => void;
}

const NavLink: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className={`flex items-center w-full p-3 rounded-lg text-base transition-colors duration-200 ${
        isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="ms-4 font-semibold">{label}</span>
    </button>
  </li>
);

const MenuHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="px-3 pt-4 pb-2 text-sm font-semibold text-gray-400 uppercase">{children}</p>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, currentView, navigateTo }) => {
    const isProjectsActive = ['projects', 'projectDetail', 'createProject', 'bidDetail', 'taskDetail'].includes(currentView);
    const isRequestsActive = ['educationalRequests', 'requestDetail'].includes(currentView);
    const isEducatorsActive = ['educators', 'educatorApplications', 'educatorApplicationDetail', 'rejectedEducators'].includes(currentView);
    const isUsersActive = ['users', 'userDetail'].includes(currentView);
    const isFinanceActive = ['finance', 'invoiceDetail'].includes(currentView);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed top-0 bottom-0 right-0 w-4/5 max-w-sm bg-white dark:bg-gray-800 z-50 flex flex-col shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <div className="flex items-center">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <ProjectsIcon className="h-6 w-6 text-white" />
                        </div>
                        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white ms-3">حلولكم</span>
                    </div>
                    <button onClick={onClose} className="p-2 -m-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <XIcon className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
                <nav className="flex-grow overflow-y-auto p-4">
                    <ul className="space-y-2">
                         <MenuHeader>القائمة الرئيسية</MenuHeader>
                         <NavLink icon={<DashboardIcon className="w-6 h-6" />} label="الرئيسية" isActive={currentView === 'dashboard'} onClick={() => navigateTo('dashboard')} />
                         <NavLink icon={<BookOpenIcon className="w-6 h-6" />} label="المشاريع" isActive={isProjectsActive} onClick={() => navigateTo('projects')} />
                         <NavLink icon={<UserCheckIcon className="w-6 h-6" />} label="الطلبات" isActive={isRequestsActive} onClick={() => navigateTo('educationalRequests')} />
                         <NavLink icon={<AcademicCapIcon className="w-6 h-6" />} label="المتخصصون" isActive={isEducatorsActive} onClick={() => navigateTo('educators')} />
                         <NavLink icon={<UsersIcon className="w-6 h-6" />} label="المستخدمون" isActive={isUsersActive} onClick={() => navigateTo('users')} />
                         <MenuHeader>الأدوات</MenuHeader>
                         <NavLink icon={<ReceiptPercentIcon className="w-6 h-6" />} label="المالية" isActive={isFinanceActive} onClick={() => navigateTo('finance')} />
                         <NavLink icon={<ChartBarIcon className="w-6 h-6" />} label="التقارير" isActive={currentView === 'reports'} onClick={() => navigateTo('reports')} />
                         <NavLink icon={<CalendarIcon className="w-6 h-6" />} label="الجدول الزمني" isActive={currentView === 'calendar'} onClick={() => navigateTo('calendar')} />
                    </ul>
                </nav>
                 <div className="p-4 border-t dark:border-gray-700">
                    <ul className="space-y-2">
                        <NavLink icon={<SettingsIcon className="w-6 h-6" />} label="الإعدادات" isActive={currentView === 'settings'} onClick={() => navigateTo('settings')} />
                    </ul>
                 </div>
            </div>
        </>
    );
};

export default MobileMenu;
