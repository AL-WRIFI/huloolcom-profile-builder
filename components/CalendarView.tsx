import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { ViewType } from '../App';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

interface CalendarViewProps {
    projects: Project[];
    navigateTo: (view: ViewType, id?: string | { projectId: string; taskId: string; } | null) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({ projects, navigateTo }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const projectColors = [
        'bg-blue-200 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 border-blue-400',
        'bg-green-200 dark:bg-green-800/50 text-green-800 dark:text-green-200 border-green-400',
        'bg-yellow-200 dark:bg-yellow-800/50 text-yellow-800 dark:text-yellow-200 border-yellow-400',
        'bg-purple-200 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200 border-purple-400',
        'bg-pink-200 dark:bg-pink-800/50 text-pink-800 dark:text-pink-200 border-pink-400',
        'bg-indigo-200 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 border-indigo-400',
    ];

    const deadlines = useMemo(() => {
        const events: { date: Date, title: string, type: 'project' | 'task', id: string, projectId: string, color: string }[] = [];
        projects.forEach((project, index) => {
            const color = projectColors[index % projectColors.length];
            if (project.deadline) {
                events.push({
                    date: new Date(project.deadline),
                    title: `تسليم مشروع: ${project.title}`,
                    type: 'project',
                    id: project.id,
                    projectId: project.id,
                    color: color,
                });
            }
            project.tasks.forEach(task => {
                if (task.deadline) {
                    events.push({
                        date: new Date(task.deadline),
                        title: `تسليم مهمة: ${task.title}`,
                        type: 'task',
                        id: task.id,
                        projectId: project.id,
                        color: color,
                    });
                }
            });
        });
        return events;
    }, [projects]);

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();
    
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: startDay }, (_, i) => null);

    const changeMonth = (delta: number) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
    };

    const getEventsForDay = (day: number) => {
        return deadlines.filter(event => 
            event.date.getFullYear() === currentDate.getFullYear() &&
            event.date.getMonth() === currentDate.getMonth() &&
            event.date.getDate() === day
        );
    }
    
    return (
        <div className="animate-fade-in">
             <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">الجدول الزمني</h1>
                <p className="text-gray-500 dark:text-gray-400">نظرة عامة على المواعيد النهائية للمشاريع والمهام.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><ArrowRightIcon className="w-6 h-6"/></button>
                    <h2 className="text-xl font-bold">{currentDate.toLocaleString('ar-EG', { month: 'long', year: 'numeric' })}</h2>
                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><ArrowLeftIcon className="w-6 h-6"/></button>
                </div>
                <div className="grid grid-cols-7">
                    {['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map(day => (
                        <div key={day} className="text-center font-semibold text-sm py-3 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700">{day}</div>
                    ))}
                    {blanks.map((_, i) => <div key={`blank-${i}`} className="border-r border-b dark:border-gray-700"></div>)}
                    {days.map(day => {
                        const dayEvents = getEventsForDay(day);
                        const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
                        return (
                            <div key={day} className="h-40 border-r border-b dark:border-gray-700 p-2 flex flex-col overflow-y-auto">
                                <span className={`font-bold text-xs ${isToday ? 'bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>{day}</span>
                                <div className="mt-1 space-y-1">
                                    {dayEvents.map(event => (
                                        <div 
                                            key={event.id} 
                                            title={event.title}
                                            className={`p-1 text-[10px] rounded-md border-s-4 truncate cursor-pointer ${event.color}`}
                                            onClick={() => navigateTo(event.type === 'project' ? 'projectDetail' : 'taskDetail', event.type === 'project' ? event.id : { projectId: event.projectId, taskId: event.id })}
                                        >
                                            <p className="font-bold">{event.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CalendarView;