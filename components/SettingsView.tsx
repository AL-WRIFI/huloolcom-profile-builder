
import React, { useState, useEffect } from 'react';

const SettingsView: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize state from localStorage or system preference if available
        if (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') {
            return true;
        }
        return document.documentElement.classList.contains('dark');
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">الإعدادات</h1>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 p-6 lg:p-8 max-w-3xl mx-auto">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">التفضيلات</h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-4 flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">الوضع الليلي</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">قم بتفعيل الوضع الليلي لواجهة مريحة للعين.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </li>
                    <li className="py-4 flex items-center justify-between">
                         <div>
                            <p className="font-semibold text-gray-800 dark:text-white">إشعارات البريد الإلكتروني</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">تلقي تحديثات المشاريع والعروض عبر البريد.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </li>
                </ul>

                <div className="border-t dark:border-gray-700 my-6"></div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">الحساب</h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم الكامل</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" defaultValue="المدير العام" />
                        </div>
                        <div>
                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" defaultValue="admin@holoolokom.com" />
                        </div>
                    </div>
                     <button type="submit" className="mt-6 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm focus:ring-4 focus:ring-blue-300">
                        حفظ التغييرات
                    </button>
                </form>
            </div>
        </div>
    )
};

export default SettingsView;