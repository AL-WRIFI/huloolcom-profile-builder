

import React from 'react';
import { ViewType } from '../types';
import { DashboardIcon, ProjectsIcon, PlusCircleIcon, UserCheckIcon, MenuAlt4Icon } from './Icons';

interface BottomNavBarProps {
    currentView: ViewType;
    navigateTo: (view: ViewType) => void;
    onMenuClick: () => void;
}

const NavButton: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    onClick: () => void;
    isMainAction?: boolean;
}> = ({ icon, label, isActive, onClick, isMainAction = false }) => {
    if (isMainAction) {
        return (
            <button onClick={onClick} className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 -mt-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                    {icon}
                </div>
                <span className="text-xs font-bold mt-1">{label}</span>
            </button>
        )
    }

    return (
         <button onClick={onClick} className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${isActive ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}>
            {icon}
            <span className="text-[10px] font-semibold">{label}</span>
        </button>
    )
};


const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentView, navigateTo, onMenuClick }) => {
    return (
        <footer className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-top z-40">
           <div className="grid grid-cols-5 h-full max-w-lg mx-auto">
                <NavButton
                    icon={<DashboardIcon className="w-6 h-6"/>}
                    label="الرئيسية"
                    isActive={currentView === 'dashboard'}
                    onClick={() => navigateTo('dashboard')}
                />
                 <NavButton
                    icon={<ProjectsIcon className="w-6 h-6"/>}
                    label="المشاريع"
                    isActive={['projects', 'projectDetail'].includes(currentView)}
                    onClick={() => navigateTo('projects')}
                />
                 <NavButton
                    icon={<PlusCircleIcon className="w-8 h-8"/>}
                    label="جديد"
                    onClick={() => navigateTo('createProject')}
                    isMainAction
                />
                 <NavButton
                    icon={<UserCheckIcon className="w-6 h-6"/>}
                    label="الطلبات"
                     isActive={['educationalRequests', 'requestDetail'].includes(currentView)}
                    onClick={() => navigateTo('educationalRequests')}
                />
                 <NavButton
                    icon={<MenuAlt4Icon className="w-6 h-6"/>}
                    label="القائمة"
                    onClick={onMenuClick}
                />
           </div>
        </footer>
    )
};

export default BottomNavBar;
