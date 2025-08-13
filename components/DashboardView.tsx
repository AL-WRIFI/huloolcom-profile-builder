
import React from 'react';
import { Project, Educator, Bid, Activity, ProjectStatus, BidStatus, PricedBidTask, EducatorStatus } from '../types';
import { ProjectsIcon, BidsIcon, EducatorsIcon, CheckCircleIcon, ClockIcon, TrendingUpIcon, DollarSignIcon, AcademicCapIcon } from './Icons';
import { ViewType } from '../types';


interface DashboardViewProps {
  navigateTo: (view: ViewType, projectId?: string) => void;
  projects: Project[];
  bids: Bid[];
  educators: Educator[];
  activities: Activity[];
}

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; description: string; }> = ({ title, value, icon, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
    <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        </div>
        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
    </div>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{description}</p>
  </div>
);

const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => {
    const getIcon = (type: Activity['type']) => {
        switch(type) {
            case 'project': return <ProjectsIcon className="w-5 h-5 text-blue-500" />;
            case 'bid': return <BidsIcon className="w-5 h-5 text-green-500" />;
            case 'task': return <CheckCircleIcon className="w-5 h-5 text-yellow-500" />;
            case 'user': return <EducatorsIcon className="w-5 h-5 text-indigo-500" />;
            case 'invoice': return <DollarSignIcon className="w-5 h-5 text-purple-500" />;
        }
    }
    return (
        <li className="flex items-start space-x-4 rtl:space-x-reverse py-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {getIcon(activity.type)}
            </div>
            <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: activity.message.replace(/".*?"/g, match => `<strong class="font-semibold text-gray-800 dark:text-gray-100">${match}</strong>`) }}></p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.actor} &middot; {activity.timestamp}</p>
            </div>
        </li>
    );
};

const DashboardView: React.FC<DashboardViewProps> = ({ navigateTo, projects, bids, educators, activities }) => {
  const completedProjects = projects.filter(p => p.status === ProjectStatus.COMPLETED).length;
  const inProgressProjects = projects.filter(p => p.status === ProjectStatus.IN_PROGRESS).length;
  const completionRate = projects.length > 0 ? ((completedProjects / projects.length) * 100).toFixed(0) + '%' : '0%';
  const totalBudget = projects.reduce((acc, p) => acc + (p.budget || 0), 0);
  
  const acceptedBidsValue = bids.reduce((total, bid) => {
    const assignedValue = bid.bidTasks
      .filter((bt: PricedBidTask) => bt.status === BidStatus.ASSIGNED)
      .reduce((taskTotal, bt) => taskTotal + bt.amount, 0);
    return total + assignedValue;
  }, 0);
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">لوحة التحكم</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">نظرة عامة على أداء المنصة.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="إجمالي المشاريع" value={projects.length} icon={<ProjectsIcon className="w-6 h-6"/>} description={`${inProgressProjects} مشروع قيد التنفيذ`} />
        <StatCard title="معدل الإنجاز" value={completionRate} icon={<TrendingUpIcon className="w-6 h-6"/>} description={`${completedProjects} مشروع مكتمل`} />
        <StatCard title="إجمالي الميزانيات" value={`${(totalBudget/1000).toFixed(1)} ألف`} icon={<DollarSignIcon className="w-6 h-6"/>} description="الميزانية المخصصة لكل المشاريع" />
        <StatCard title="متخصصون نشطون" value={educators.filter(e => e.status === EducatorStatus.ACTIVE).length} icon={<AcademicCapIcon className="w-6 h-6"/>} description={`${bids.length} عرض مقدم`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white p-6 border-b dark:border-gray-700">المشاريع الحديثة</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">عنوان المشروع</th>
                            <th scope="col" className="px-6 py-3">الحالة</th>
                            <th scope="col" className="px-6 py-3">الميزانية</th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.slice(0, 5).map(project => (
                             <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {project.title}
                                </th>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        project.status === 'مكتمل' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                        project.status === 'قيد التنفيذ' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                        project.status === 'ملغي' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                    }`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-mono">{project.budget ? `${project.budget.toLocaleString()} ريال` : 'غير محدد'}</td>
                                <td className="px-6 py-4 text-left">
                                    <button onClick={() => navigateTo('projectDetail', project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        التفاصيل
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white p-6 border-b dark:border-gray-700">آخر الأنشطة</h2>
            <ul className="px-6 divide-y divide-gray-200 dark:divide-gray-700">
                {activities.slice(0, 5).map(activity => <ActivityItem key={activity.id} activity={activity} />)}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
