
import React, { useState, useMemo } from 'react';
import { Project, ProjectStatus, ProjectCreationType, Educator, Bid, User, EducationalRequest } from '../types';
import { PlusIcon, EyeIcon, FilterIcon, SearchIcon, TrashIcon, LockClosedIcon, LockOpenIcon, FileTextIcon, ViewGridIcon, ViewListIcon } from './Icons';
import { ViewType } from '../types';
import ConfirmationModal from './ConfirmationModal';

interface ProjectsViewProps {
  navigateTo: (view: ViewType, projectId?: string) => void;
  projects: Project[];
  bids: Bid[];
  educators: Educator[];
  users: User[];
  educationalRequests: EducationalRequest[];
  onDeleteProject: (projectId: string, reason: string) => void;
  onToggleProjectPublication: (projectId: string, reason?: string) => void;
}

const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.COMPLETED: return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case ProjectStatus.IN_PROGRESS: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case ProjectStatus.CANCELED: return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
};

const ProjectCard: React.FC<{
  project: Project & { requesterName?: string };
  educators: Educator[];
  onViewDetails: () => void;
  onDelete: () => void;
  onTogglePublish: () => void;
}> = ({ project, educators, onViewDetails, onDelete, onTogglePublish }) => {
    const completedTasks = project.tasks.filter(t => t.status === ProjectStatus.COMPLETED).length;
    const progress = project.tasks.length > 0 ? (completedTasks / project.tasks.length) * 100 : 0;

    const assignedIds = new Set<string>();
    project.tasks.forEach(t => t.assignments.forEach(a => assignedIds.add(a.educatorId)));
    const team = Array.from(assignedIds).map(id => educators.find(e => e.id === id)).filter(Boolean) as Educator[];

    const requesterName = project.requesterName || project.createdBy;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex justify-between items-start">
                <div className="text-right flex-grow">
                    <h2 onClick={onViewDetails} className="text-lg font-extrabold text-slate-800 dark:text-white cursor-pointer hover:text-blue-600">{project.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">بواسطة: {requesterName}</p>
                </div>
                 <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusBadge(project.status)}`}>
                    {project.status}
                </span>
            </div>

            <div className="my-4">
                <div className="flex justify-between text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    <span>تقدم المشروع</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-slate-200/70 rounded-full h-1.5 dark:bg-slate-700">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-700" />

            <div className="grid grid-cols-3 text-center my-4">
                 <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">الميزانية</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200 mt-1">{project.budget ? `${project.budget.toLocaleString()} ريال` : 'N/A'}</p>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400">المهام</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200 mt-1">{project.tasks.length}</p>
                </div>
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">النوع</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200 mt-1">{project.creationType.replace('خاص (بناءً على طلب تعليمي)', 'عام').replace('خاص (مستقل)', 'خاص')}</p>
                </div>
            </div>

             <hr className="border-slate-200 dark:border-slate-700" />

            <div className="flex justify-between items-center mt-auto pt-4">
                <div className="flex items-center gap-3">
                     <button onClick={onViewDetails} className="p-2 rounded-lg text-blue-500 bg-blue-100/60 hover:bg-blue-100 dark:bg-blue-900/50 dark:hover:bg-blue-900" title="عرض التفاصيل">
                        <EyeIcon className="w-5 h-5" />
                    </button>
                    <button onClick={onDelete} className="p-2 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50" title="حذف المشروع">
                        <TrashIcon className="w-5 h-5" />
                    </button>
                    {project.creationType === ProjectCreationType.PUBLIC && (
                         <button onClick={onTogglePublish} className="p-2 rounded-lg text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/50" title={project.isPublished ? 'إيقاف النشر' : 'نشر'}>
                            {project.isPublished ? <LockOpenIcon className="w-5 h-5"/> : <LockClosedIcon className="w-5 h-5"/>}
                        </button>
                    )}
                </div>
                <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden">
                     {team.slice(0, 1).map(e => (
                        <img key={e.id} className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-800" src={e.avatarUrl} alt={e.name} />
                    ))}
                    {team.length > 1 && (
                        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-white dark:ring-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                            +{team.length - 1}
                        </div>
                    )}
                     {team.length === 0 && <div className="h-9 w-9"></div>}
                </div>
            </div>
        </div>
    );
};


const ProjectRow: React.FC<{
  project: Project & { requesterName?: string };
  onViewDetails: () => void;
  onDelete: () => void;
  onTogglePublish: () => void;
}> = ({ project, onViewDetails, onDelete, onTogglePublish }) => {
    const requesterName = project.requesterName || project.createdBy;
    const statusClass = getStatusBadge(project.status);

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
            <td className="px-6 py-4">
                <p className="font-bold text-gray-900 dark:text-white truncate max-w-xs">{project.title}</p>
                <p className="text-xs text-gray-500">بواسطة: {requesterName}</p>
            </td>
            <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClass}`}>
                    {project.status}
                </span>
            </td>
            <td className="px-6 py-4 font-mono">{project.budget ? `${project.budget.toLocaleString()} ريال` : 'غير محدد'}</td>
            <td className="px-6 py-4">{project.tasks.length}</td>
            <td className="px-6 py-4">{project.deadline || 'غير محدد'}</td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <button onClick={onViewDetails} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="عرض التفاصيل">
                        <EyeIcon className="w-5 h-5 text-gray-500"/>
                    </button>
                    {project.creationType === ProjectCreationType.PUBLIC && (
                         <button onClick={onTogglePublish} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title={project.isPublished ? 'إيقاف النشر' : 'نشر'}>
                            {project.isPublished ? <LockOpenIcon className="w-5 h-5 text-yellow-500"/> : <LockClosedIcon className="w-5 h-5 text-gray-500"/>}
                        </button>
                    )}
                    <button onClick={onDelete} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" title="حذف">
                        <TrashIcon className="w-5 h-5 text-gray-500 hover:text-red-500"/>
                    </button>
                </div>
            </td>
        </tr>
    );
};


const ProjectsView: React.FC<ProjectsViewProps> = ({ navigateTo, projects, bids, educators, users, educationalRequests, onDeleteProject, onToggleProjectPublication }) => {
  const [statusFilter, setStatusFilter] = useState('الكل');
  const [typeFilter, setTypeFilter] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<Project | null>(null);
  const [publishConfirm, setPublishConfirm] = useState<{ project: Project; action: 'publish' | 'unpublish' } | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const filteredProjects = useMemo(() => {
    return projects
        .map(p => {
            const request = p.educationalRequestId ? educationalRequests.find(r => r.id === p.educationalRequestId) : null;
            const requester = request ? users.find(u => u.id === request.requesterId) : null;
            return {
                ...p,
                requesterName: requester?.name
            };
        })
        .filter(p => {
            const statusMatch = statusFilter === 'الكل' || p.status === statusFilter;
            const typeMatch = typeFilter === 'الكل' || p.creationType === typeFilter;
            const searchMatch = searchTerm === '' || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || (p.requesterName && p.requesterName.toLowerCase().includes(searchTerm.toLowerCase()));
            return statusMatch && typeMatch && searchMatch;
    });
  }, [projects, statusFilter, typeFilter, searchTerm, users, educationalRequests]);

  const handleDelete = (reason: string) => {
    if (deleteConfirm) {
        onDeleteProject(deleteConfirm.id, reason);
        setDeleteConfirm(null);
    }
  };

  return (
    <>
      {deleteConfirm && <ConfirmationModal 
        isOpen={true}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={handleDelete}
        title={`تأكيد حذف المشروع`}
        message={`هل أنت متأكد من حذف مشروع "${deleteConfirm.title}"؟ لا يمكن التراجع عن هذا الإجراء.`}
        icon={<TrashIcon className="w-8 h-8"/>}
        isReasonRequired={true}
        reasonLabel="سبب الحذف"
        confirmButtonClass="bg-red-600 hover:bg-red-700"
      />}
       {publishConfirm && (
        <ConfirmationModal
          isOpen={true}
          onClose={() => setPublishConfirm(null)}
          onConfirm={(reason) => { onToggleProjectPublication(publishConfirm.project.id, reason); setPublishConfirm(null); }}
          title={publishConfirm.action === 'publish' ? 'تأكيد نشر المشروع' : 'تأكيد إيقاف النشر'}
          message={publishConfirm.action === 'publish' ? 'سيتاح المشروع للعامة لتقديم العروض.' : 'سيتم إيقاف استقبال عروض جديدة.'}
          confirmText="نعم، تأكيد"
          icon={publishConfirm.action === 'publish' ? <LockOpenIcon className="w-8 h-8 text-blue-500"/> : <LockClosedIcon className="w-8 h-8 text-blue-500"/>}
          isReasonRequired={false}
        />
      )}
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">إدارة المشاريع</h1>
            <p className="text-gray-500 dark:text-gray-400">{filteredProjects.length} مشروع مطابق للمعايير</p>
          </div>
           <div className="flex items-center gap-2">
                 <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                    <button onClick={() => setViewMode('table')} className={`p-1.5 rounded-md ${viewMode === 'table' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}>
                        <ViewListIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button onClick={() => setViewMode('cards')} className={`p-1.5 rounded-md ${viewMode === 'cards' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}>
                        <ViewGridIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>
                <button onClick={() => navigateTo('createProject')} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300">
                    <PlusIcon className="w-5 h-5 me-2" />
                    إنشاء مشروع
                </button>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 mb-6 border dark:border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                    <label className="text-xs text-slate-500 dark:text-slate-400">بحث بالاسم</label>
                    <input 
                        type="text" 
                        placeholder="ابحث عن مشروع..."
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 rounded-md text-sm p-2 ps-10 mt-1"
                    />
                    <SearchIcon className="absolute top-8 start-3 w-5 h-5 text-slate-400"/>
                </div>
                <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400">فلترة حسب الحالة</label>
                    <select onChange={e => setStatusFilter(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 rounded-md text-sm p-2 mt-1">
                        <option>الكل</option>
                        {Object.values(ProjectStatus).map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>
                 <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400">فلترة حسب النوع</label>
                    <select onChange={e => setTypeFilter(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 rounded-md text-sm p-2 mt-1">
                        <option>الكل</option>
                        {Object.values(ProjectCreationType).map(t => <option key={t}>{t}</option>)}
                    </select>
                </div>
                <div className="flex items-end">
                    <button className="flex items-center justify-center w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm">
                        <FilterIcon className="w-4 h-4 me-2" />
                        فلاتر متقدمة
                    </button>
                </div>
            </div>
        </div>
        
        {viewMode === 'cards' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                        <ProjectCard 
                        key={project.id} 
                        project={project}
                        educators={educators}
                        onViewDetails={() => navigateTo('projectDetail', project.id)}
                        onDelete={() => setDeleteConfirm(project)}
                        onTogglePublish={() => setPublishConfirm({ project, action: project.isPublished ? 'unpublish' : 'publish' })}
                    />
                ))}
            </div>
        ) : (
             <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">المشروع</th>
                            <th scope="col" className="px-6 py-3">الحالة</th>
                            <th scope="col" className="px-6 py-3">الميزانية</th>
                            <th scope="col" className="px-6 py-3">المهام</th>
                            <th scope="col" className="px-6 py-3">الموعد النهائي</th>
                            <th scope="col" className="px-6 py-3">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProjects.map(project => (
                            <ProjectRow
                                key={project.id}
                                project={project}
                                onViewDetails={() => navigateTo('projectDetail', project.id)}
                                onDelete={() => setDeleteConfirm(project)}
                                onTogglePublish={() => setPublishConfirm({ project, action: project.isPublished ? 'unpublish' : 'publish' })}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )}

        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-xl">
                <FileTextIcon className="w-16 h-16 mx-auto mb-4 text-slate-300 dark:text-slate-600" />
                <h3 className="text-lg font-semibold">لا توجد مشاريع</h3>
                <p>لم يتم العثور على مشاريع تطابق معايير البحث الحالية.</p>
            </div>
        )}
      </div>
    </>
  );
};

export default ProjectsView;
