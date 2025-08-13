import React from 'react';
import { ViewType } from '../App';
import { DashboardIcon, BookOpenIcon, EducatorsIcon, UsersIcon, UserCheckIcon, SettingsIcon, XIcon, ProjectsIcon } from './Icons';

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
  <button
    onClick={onClick}
    className={`flex items-center w-full p-4 rounded-lg text-lg transition-colors duration-200 ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`}
  >
    {icon}
    <span className="ms-4 font-semibold">{label}</span>
  </button>
);


const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, currentView, navigateTo }) => {

    if (!isOpen) return null;

    const isProjectsActive = ['projects', 'projectDetail', 'createProject', 'bidDetail', 'taskDetail'].includes(currentView);
    const isRequestsActive = ['educationalRequests', 'requestDetail'].includes(currentView);
    const isEducatorsActive = ['educators', 'educatorApplications', 'educatorApplicationDetail', 'rejectedEducators'].includes(currentView);
    const isUsersActive = ['users', 'userDetail'].includes(currentView);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed top-0 bottom-0 right-0 w-3/4 max-w-sm bg-white dark:bg-gray-800 z-50 flex flex-col p-4 shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <ProjectsIcon className="h-6 w-6 text-white" />
                        </div>
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white ms-3">حلولكم</span>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <XIcon className="w-7 h-7 text-gray-500" />
                    </button>
                </div>
                <nav className="flex-grow">
                    <ul className="space-y-3">
                        <NavLink
                            icon={<DashboardIcon className="w-7 h-7" />}
                            label="الرئيسية"
                            isActive={currentView === 'dashboard'}
                            onClick={() => navigateTo('dashboard')}
                        />
                        <NavLink
                            icon={<BookOpenIcon className="w-7 h-7" />}
                            label="المشاريع"
                            isActive={isProjectsActive}
                            onClick={() => navigateTo('projects')}
                        />
                        <NavLink
                            icon={<UserCheckIcon className="w-7 h-7" />}
                            label="الطلبات الأكاديمية"
                            isActive={isRequestsActive}
                            onClick={() => navigateTo('educationalRequests')}
                        />
                        <NavLink
                            icon={<EducatorsIcon className="w-7 h-7" />}
                            label="المتخصصون"
                            isActive={isEducatorsActive}
                            onClick={() => navigateTo('educators')}
                        />
                        <NavLink
                            icon={<UsersIcon className="w-7 h-7" />}
                            label="المستخدمون"
                            isActive={isUsersActive}
                            onClick={() => navigateTo('users')}
                        />
                        <NavLink
                            icon={<SettingsIcon className="w-7 h-7" />}
                            label="الإعدادات"
                            isActive={currentView === 'settings'}
                            onClick={() => navigateTo('settings')}
                        />
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;