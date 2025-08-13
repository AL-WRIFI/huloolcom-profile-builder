import React from 'react';
import { Project, Educator, Invoice, ProjectStatus } from '../types';
import { ChartBarIcon, UsersIcon, ReceiptPercentIcon } from './Icons';

interface ReportsViewProps {
    projects: Project[];
    educators: Educator[];
    invoices: Invoice[];
}

const ReportCard: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border dark:border-gray-700">
        <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">{icon}</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white ms-3">{title}</h2>
        </div>
        <div>{children}</div>
    </div>
);

const SimpleBarChart: React.FC<{ data: { label: string, value: number }[], colorClass: string }> = ({ data, colorClass }) => {
    const maxValue = Math.max(...data.map(d => d.value), 1);
    return (
        <div className="flex justify-around items-end h-48 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            {data.map(item => (
                <div key={item.label} className="flex flex-col items-center w-1/4">
                    <div
                        className={`w-1/2 rounded-t-md ${colorClass}`}
                        style={{ height: `${(item.value / maxValue) * 100}%` }}
                        title={`${item.label}: ${item.value}`}
                    ></div>
                    <span className="text-xs mt-2 text-gray-500 dark:text-gray-400">{item.label}</span>
                </div>
            ))}
        </div>
    );
}

const ReportsView: React.FC<ReportsViewProps> = ({ projects, educators, invoices }) => {
    const projectStatusData = Object.values(ProjectStatus).map(status => ({
        label: status,
        value: projects.filter(p => p.status === status).length,
    }));
    
    const topSpecialists = [...educators]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map(e => ({ name: e.name, rating: e.rating }));
        
    const revenueByMonth = invoices.reduce((acc, inv) => {
        if(inv.status === 'PAID') {
            const month = new Date(inv.dueDate).toLocaleString('ar-EG', { month: 'short' });
            acc[month] = (acc[month] || 0) + inv.totalAmount;
        }
        return acc;
    }, {} as Record<string, number>);
    
    const financialChartData = Object.entries(revenueByMonth).map(([label, value]) => ({ label, value }));


    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">التقارير والتحليلات</h1>
                <p className="text-gray-500 dark:text-gray-400">نظرة معمقة على أداء المنصة.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ReportCard title="أداء المشاريع" icon={<ChartBarIcon className="w-6 h-6"/>}>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">توزيع المشاريع حسب حالتها الحالية.</p>
                    <SimpleBarChart data={projectStatusData} colorClass="bg-blue-500" />
                </ReportCard>

                 <ReportCard title="أداء المتخصصين" icon={<UsersIcon className="w-6 h-6"/>}>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">أعلى 5 متخصصين تقييماً في المنصة.</p>
                     <ul className="space-y-3">
                        {topSpecialists.map(specialist => (
                            <li key={specialist.name} className="flex justify-between items-center text-sm p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <span className="font-semibold text-gray-700 dark:text-gray-200">{specialist.name}</span>
                                <span className="font-bold text-yellow-500">{specialist.rating.toFixed(1)} ★</span>
                            </li>
                        ))}
                    </ul>
                </ReportCard>
                
                 <ReportCard title="التقرير المالي" icon={<ReceiptPercentIcon className="w-6 h-6"/>}>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">الإيرادات الشهرية من الفواتير المدفوعة.</p>
                    <SimpleBarChart data={financialChartData} colorClass="bg-green-500" />
                </ReportCard>
            </div>
        </div>
    );
};

export default ReportsView;