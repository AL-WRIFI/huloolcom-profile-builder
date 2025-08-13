
import React, { useState, useMemo } from 'react';
import { Project, Task, ProjectStatus, Educator, Assignment, AssignmentType, AssignmentStatus, ProjectCreationType, Bid, EducationalRequest, User } from '../types';
import { ClockIcon, CheckCircleIcon, PlusIcon, EditIcon, DollarSignIcon, EducatorsIcon, TrashIcon, BidsIcon, ArrowLeftIcon, UsersIcon, BriefcaseIcon, LinkIcon, BookOpenIcon, TrendingUpIcon, MoreVerticalIcon, LockClosedIcon, LockOpenIcon, PaperclipIcon, CheckIcon } from './Icons';
import AddTaskModal from './AddTaskModal';
import { ViewType } from '../types';
import EditProjectDetailsModal from './EditProjectDetailsModal';
import AssignProviderModal from './AssignProviderModal';
import { BidsView } from './BidsView';
import { BidStatus } from '../types';
import ConfirmationModal from './ConfirmationModal';
import EditTaskModal from './EditTaskModal';

interface ProjectDetailViewProps {
  project: Project;
  bids: Bid[];
  educators: Educator[];
  educationalRequests: EducationalRequest[];
  users: User[];
  navigateTo: (view: ViewType, id?: string | { projectId: string; taskId: string }) => void;
  onAddTask: (projectId: string, taskData: Omit<Task, 'id' | 'status' | 'assignments' | 'biddingStatus' | 'subTasks' | 'notes' | 'attachments' | 'activityLog' >) => void;
  onUpdateTaskStatus: (projectId: string, taskId: string, newStatus: ProjectStatus, reason: string) => void;
  onUpdateProjectDetails: (projectId: string, details: Partial<Project>) => void;
  onUpdateProjectStatus: (projectId: string, newStatus: ProjectStatus, reason: string) => void;
  onUpdateTask: (projectId: string, taskId: string, taskData: Partial<Task>) => void;
  onAssignProvider: (context: { projectId: string; taskId: string }, newAssignments: Omit<Assignment, 'id'>[]) => void;
  onUpdateBidTaskStatus: (bidId: string, taskId: string, newStatus: BidStatus, details?: { reason?: string; approvalMessage?: string; assignmentAgreement?: string; }) => void;
  onUpdateTaskBiddingStatus: (projectId: string, taskId: string) => void;
  onDeleteTask: (projectId: string, taskId: string, reason: string) => void;
  onToggleProjectPublication: (projectId: string, reason: string) => void;
}

const TaskCard: React.FC<{
    task: Task;
    project: Project;
    educators: Educator[];
    navigateTo: (view: ViewType, id: { projectId: string; taskId: string }) => void;
    onDeleteTask: (projectId: string, taskId: string, reason: string) => void;
    onUpdateTaskBiddingStatus: (projectId: string, taskId: string) => void;
    onUpdateTaskStatus: (projectId: string, taskId: string, newStatus: ProjectStatus, reason: string) => void;
    onAssignProviderClick: (task: Task) => void;
}> = ({ task, project, educators, navigateTo, onDeleteTask, onUpdateTaskBiddingStatus, onUpdateTaskStatus, onAssignProviderClick }) => {
    
    const [action, setAction] = useState<{ type: 'delete' | 'publish' | 'status', payload?: any } | null>(null);
    
    const handleConfirmAction = (reason: string) => {
        if (!action) return;
        switch (action.type) {
            case 'delete':
                onDeleteTask(project.id, task.id, reason);
                break;
            case 'publish':
                onUpdateTaskBiddingStatus(project.id, task.id);
                break;
            case 'status':
                onUpdateTaskStatus(project.id, task.id, action.payload, reason);
                break;
        }
        setAction(null);
    };

    const progress = task.subTasks.length > 0 ? (task.subTasks.filter(st => st.completed).length / task.subTasks.length) * 100 : (task.status === ProjectStatus.COMPLETED ? 100 : 0);

    const getStatusInfo = (status: ProjectStatus) => {
        switch (status) {
            case ProjectStatus.COMPLETED: return { text: 'مكتملة', color: 'bg-green-100 text-green-700' };
            case ProjectStatus.IN_PROGRESS: return { text: 'قيد التنفيذ', color: 'bg-yellow-100 text-yellow-700' };
            case ProjectStatus.CANCELED: return { text: 'ملغية', color: 'bg-red-100 text-red-700' };
            default: return { text: 'قيد الانتظار', color: 'bg-blue-100 text-blue-700' };
        }
    };

    const getBiddingStatusInfo = (task: Task) => {
        if (!task.isPublic) return { text: 'خاصة', color: 'bg-gray-100 text-gray-700' };
        if (task.biddingStatus === 'OPEN') return { text: 'عامة - تستقبل العروض', color: 'bg-teal-100 text-teal-700' };
        return { text: 'عامة - مغلقة', color: 'bg-orange-100 text-orange-700' };
    };

    const assignedProviders = task.assignments.filter(a => a.status === AssignmentStatus.ACCEPTED);
    const invitedProviders = task.assignments.filter(a => a.status === AssignmentStatus.PENDING);

    const getAssignmentIcon = (type: AssignmentType) => {
        switch(type) {
            case AssignmentType.DIRECT: return <span title="تعيين مباشر"><UsersIcon className="w-3 h-3 text-purple-600"/></span>;
            case AssignmentType.INVITATION: return <span title="دعوة"><PlusIcon className="w-3 h-3 text-blue-600"/></span>;
            case AssignmentType.FROM_BID: return <span title="من خلال عرض"><BidsIcon className="w-3 h-3 text-green-600"/></span>;
        }
    }
    
    const taskStatusActions = [
      { status: ProjectStatus.IN_PROGRESS, label: "بدء التنفيذ" },
      { status: ProjectStatus.COMPLETED, label: "إكمال" },
      { status: ProjectStatus.PENDING, label: "إعادة للانتظار" },
    ];

    return (
        <>
            {action && <ConfirmationModal 
                isOpen={true} 
                onClose={() => setAction(null)} 
                onConfirm={handleConfirmAction} 
                title={
                  action.type === 'delete' ? "تأكيد حذف المهمة" :
                  action.type === 'publish' ? `تأكيد ${task.biddingStatus === 'OPEN' ? 'إيقاف' : 'بدء'} استقبال العروض` :
                  `تغيير حالة المهمة إلى "${action.payload}"`
                } 
                message={
                  action.type === 'delete' ? "هل أنت متأكد من حذف هذه المهمة؟ لا يمكن التراجع عن هذا الإجراء." :
                  "يرجى تقديم سبب أو تعليق لهذا الإجراء للتوثيق."
                } 
                icon={action.type === 'delete' ? <TrashIcon className="w-8 h-8"/> : <EditIcon className="w-8 h-8"/>}
                isReasonRequired={true} 
                reasonLabel={action.type === 'delete' ? "سبب الحذف (إلزامي)" : "التعليق (إلزامي)"}
             />}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b dark:border-gray-700">
                    <div className="flex justify-between items-start gap-2">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{task.title}</h4>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getStatusInfo(task.status).color}`}>{getStatusInfo(task.status).text}</span>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getBiddingStatusInfo(task).color}`}>{getBiddingStatusInfo(task).text}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                            {task.isPublic && <button onClick={() => setAction({type: 'publish'})} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" title={task.biddingStatus === 'OPEN' ? 'إيقاف استقبال العروض' : 'فتح استقبال العروض'}>{task.biddingStatus === 'OPEN' ? <LockOpenIcon className="w-5 h-5 text-green-500" /> : <LockClosedIcon className="w-5 h-5 text-red-500" />}</button>}
                            <button onClick={() => setAction({type: 'delete'})} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500"/></button>
                            <button onClick={() => navigateTo('taskDetail', { projectId: project.id, taskId: task.id })} className="px-3 py-1.5 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700">إدارة</button>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="mt-2">
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                            <span>التقدم</span>
                            <span className="font-semibold">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%`}}></div>
                        </div>
                    </div>
                </div>

                {(assignedProviders.length > 0 || invitedProviders.length > 0) && (
                    <div className="border-t dark:border-gray-700 p-4 space-y-4">
                         {assignedProviders.length > 0 && (
                            <div>
                                <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">المعينون</h5>
                                <div className="space-y-3">
                                    {assignedProviders.map(assignment => {
                                        const educator = educators.find(e => e.id === assignment.educatorId);
                                        if(!educator) return null;
                                        return (
                                            <div key={assignment.id}>
                                                <div className="flex items-center justify-between text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <img src={educator.avatarUrl} alt={educator.name} className="w-8 h-8 rounded-full" />
                                                        <span className="font-semibold">{educator.name}</span>
                                                        <div className="p-1 bg-gray-100 dark:bg-gray-900 rounded-full">{getAssignmentIcon(assignment.type)}</div>
                                                    </div>
                                                    <span className="font-bold text-green-600">{assignment.amount?.toLocaleString()} ريال</span>
                                                </div>
                                                {assignment.agreementNotes && (
                                                    <p className="text-xs text-gray-500 mt-1.5 ps-8 border-s-2 border-gray-200 dark:border-gray-600 ms-3 py-1">
                                                        {assignment.agreementNotes}
                                                    </p>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                         )}
                          {invitedProviders.length > 0 && (
                            <div>
                                <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">الدعوات المعلقة</h5>
                                <div className="flex flex-wrap gap-2">
                                    {invitedProviders.map(assignment => {
                                        const educator = educators.find(e => e.id === assignment.educatorId);
                                        if(!educator) return null;
                                        return (
                                           <div key={assignment.id} className="flex items-center gap-2 text-xs bg-gray-100 dark:bg-gray-700 p-1 px-2 rounded-full">
                                                <img src={educator.avatarUrl} alt={educator.name} className="w-5 h-5 rounded-full" />
                                                <span className="font-semibold">{educator.name}</span>
                                           </div>
                                        )
                                    })}
                                </div>
                            </div>
                         )}
                    </div>
                )}
                 <div className="border-t dark:border-gray-700 p-4 flex flex-col sm:flex-row gap-2 justify-between items-center">
                    <button onClick={() => onAssignProviderClick(task)} className="w-full sm:w-auto flex-grow flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900 rounded-lg">
                        <PlusIcon className="w-5 h-5"/> تعيين متخصص
                    </button>
                    <div className="w-full sm:w-auto flex gap-2">
                        {taskStatusActions.map(action => (
                             <button 
                                key={action.status} 
                                onClick={() => setAction({ type: 'status', payload: action.status })}
                                disabled={task.status === action.status}
                                className="w-full sm:w-auto flex-grow px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 rounded-lg disabled:opacity-50"
                              >
                                {action.label}
                             </button>
                        ))}
                    </div>
                </div>
                 <div className="border-t dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center text-xs text-gray-500">
                    <span>تاريخ الإنشاء: <strong>{task.creationDate}</strong></span>
                    <span>الموعد النهائي: <strong>{task.deadline}</strong></span>
                </div>
            </div>
        </>
    );
};


const ProjectDetailView: React.FC<ProjectDetailViewProps> = (props) => {
  const { project, bids, educators, educationalRequests, users, navigateTo, onAddTask, onUpdateProjectDetails, onUpdateProjectStatus, onToggleProjectPublication, ...taskProps } = props;
  
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'bids' | 'activity'>('tasks');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState<{ type: 'status' | 'publication'; title: string; message: string; payload: any, confirmClass?: string } | null>(null);
  const [isAssignModalOpen, setAssignModalOpen] = useState(false);
  const [taskToAssign, setTaskToAssign] = useState<Task | null>(null);


  const completedTasks = project.tasks.filter(t => t.status === ProjectStatus.COMPLETED).length;
  const progress = project.tasks.length > 0 ? (completedTasks / project.tasks.length) * 100 : 0;
  
  const handleTaskSubmit = (taskData: Omit<Task, 'id' | 'status' | 'assignments' | 'biddingStatus' | 'subTasks' | 'notes' | 'attachments' | 'activityLog'>) => {
      onAddTask(project.id, taskData);
      setIsAddTaskModalOpen(false);
  };
  
  const handleStatusChangeRequest = (newStatus: ProjectStatus) => {
    setConfirmationAction({
        type: 'status',
        title: `تأكيد تغيير حالة المشروع إلى "${newStatus}"`,
        message: "سيتم توثيق هذا التغيير في سجل الأحداث.",
        payload: newStatus,
        confirmClass: newStatus === ProjectStatus.CANCELED ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
    });
  };

  const handlePublicationToggleRequest = () => {
      setConfirmationAction({
        type: 'publication',
        title: project.isPublished ? 'إيقاف استقبال العروض' : 'نشر المشروع للعروض',
        message: project.isPublished ? 'سيتم إيقاف استقبال العروض للمشروع.' : 'سيتم نشر المشروع للعامة لاستقبال العروض.',
        payload: null,
        confirmClass: project.isPublished ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
    });
  };

  const handleConfirmation = (reason: string) => {
      if (!confirmationAction) return;
      if (confirmationAction.type === 'status') {
          onUpdateProjectStatus(project.id, confirmationAction.payload, reason);
      } else if (confirmationAction.type === 'publication') {
          onToggleProjectPublication(project.id, reason);
      }
      setConfirmationAction(null);
  }
  
  const projectTeam = useMemo(() => {
    const assignedIds = new Set<string>();
    project.tasks.forEach(t => t.assignments.forEach(a => {
        if (a.status === AssignmentStatus.ACCEPTED) {
            assignedIds.add(a.educatorId);
        }
    }));
    return Array.from(assignedIds).map(id => educators.find(e => e.id === id)).filter(Boolean) as Educator[];
  }, [project.tasks, educators]);

  const totalCost = useMemo(() => {
      return project.tasks.flatMap(t => t.assignments)
          .filter(a => a.status === AssignmentStatus.ACCEPTED && a.amount)
          .reduce((sum, a) => sum + a.amount!, 0);
  }, [project.tasks]);
  
  const linkedRequest = project.educationalRequestId ? educationalRequests.find(r => r.id === project.educationalRequestId) : null;
  const requester = linkedRequest ? users.find(u => u.id === linkedRequest.requesterId) : null;
  
  const openAssignModalForTask = (task: Task) => {
      setTaskToAssign(task);
      setAssignModalOpen(true);
  };
  
  const handleAssignSubmit = (newAssignments: Omit<Assignment, 'id'>[]) => {
      if (taskToAssign) {
          props.onAssignProvider({ projectId: project.id, taskId: taskToAssign.id }, newAssignments);
      }
      setAssignModalOpen(false);
      setTaskToAssign(null);
  };


  return (
    <>
      <AddTaskModal isOpen={isAddTaskModalOpen} onClose={() => setIsAddTaskModalOpen(false)} onAddTask={handleTaskSubmit as any} />
      {isAssignModalOpen && <AssignProviderModal isOpen={true} onClose={() => setAssignModalOpen(false)} educators={educators} onAssign={handleAssignSubmit} />}
      {confirmationAction && <ConfirmationModal 
        isOpen={true} 
        onClose={() => setConfirmationAction(null)}
        onConfirm={handleConfirmation}
        title={confirmationAction.title}
        message={confirmationAction.message}
        icon={confirmationAction.type === 'status' ? <EditIcon className="w-8 h-8"/> : <BidsIcon className="w-8 h-8"/>}
        isReasonRequired={true}
        reasonLabel="سبب الإجراء (إلزامي)"
        confirmButtonClass={confirmationAction.confirmClass}
      />}

      <div className="animate-fade-in">
          <div className="mb-6">
              <button onClick={() => navigateTo('projects')} className="flex items-center text-sm text-blue-600 dark:text-blue-500 hover:underline mb-2"><ArrowLeftIcon className="w-4 h-4 me-1"/> العودة إلى المشاريع</button>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
          </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8">
            <aside className="lg:w-1/3 w-full space-y-6 lg:sticky lg:top-8 flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700">
                    <h3 className="font-bold mb-4">تقدم المشروع</h3>
                    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                        <div className="bg-blue-600 h-4 rounded-full text-white text-xs flex items-center justify-center" style={{ width: `${progress}%` }}>
                           {Math.round(progress)}%
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{completedTasks} / {project.tasks.length} مهام مكتملة</div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700 space-y-4">
                    <h3 className="font-bold text-lg">إدارة المشروع</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                         <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">الحالة</span>
                         <div className="flex flex-wrap gap-1 justify-end">
                            {Object.values(ProjectStatus).map(s => (
                                <button key={s} onClick={() => s !== project.status && handleStatusChangeRequest(s)} className={`px-2 py-1 text-xs font-bold rounded-md ${project.status === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}>{s}</button>
                            ))}
                         </div>
                    </div>
                    {project.creationType === ProjectCreationType.PUBLIC && (
                         <button onClick={handlePublicationToggleRequest} className={`w-full p-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 ${project.isPublished ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
                           {project.isPublished ? <LockClosedIcon className="w-5 h-5"/> : <LockOpenIcon className="w-5 h-5"/>}
                           {project.isPublished ? 'إيقاف استقبال العروض' : 'نشر المشروع للعروض'}
                        </button>
                    )}
                </div>

                {linkedRequest && requester && (
                     <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700">
                         <h3 className="font-bold mb-3 flex items-center"><LinkIcon className="w-5 h-5 me-2 text-gray-400"/>طلب مرتبط</h3>
                         <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <p className="font-semibold text-blue-600 hover:underline cursor-pointer" onClick={() => navigateTo('requestDetail', linkedRequest.id)}>{linkedRequest.title}</p>
                            <p className="text-xs text-gray-500">مقدم من: {requester.name}</p>
                         </div>
                     </div>
                )}
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border dark:border-gray-700">
                    <div className="flex items-center mb-3">
                        <span title="UsersIcon"><UsersIcon className="w-5 h-5 me-2 text-gray-400"/></span>
                        <h3 className="font-bold">فريق عمل المشروع ({projectTeam.length})</h3>
                    </div>
                    {projectTeam.length > 0 ? (
                        <div className="space-y-2">
                            {projectTeam.slice(0, 4).map(e => (
                                <div key={e.id} className="flex items-center gap-3">
                                    <img src={e.avatarUrl} alt={e.name} className="w-8 h-8 rounded-full" />
                                    <span className="text-sm font-semibold">{e.name}</span>
                                </div>
                            ))}
                            {projectTeam.length > 4 && <p className="text-xs text-center text-gray-500">... و {projectTeam.length - 4} آخرون</p>}
                        </div>
                    ) : <p className="text-sm text-gray-400 text-center py-2">لم يتم تعيين فريق بعد.</p>}
                </div>

            </aside>
            <main className="lg:w-2/3 w-full">
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <nav className="flex space-x-4 rtl:space-x-reverse -mb-px" aria-label="Tabs">
                        <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-2 px-3 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}><TrendingUpIcon className="w-5 h-5"/>نظرة عامة</button>
                        <button onClick={() => setActiveTab('tasks')} className={`flex items-center gap-2 px-3 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'tasks' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}><BriefcaseIcon className="w-5 h-5"/>المهام ({project.tasks.length})</button>
                        {project.creationType === ProjectCreationType.PUBLIC && (
                             <button onClick={() => setActiveTab('bids')} className={`flex items-center gap-2 px-3 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'bids' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}><span title="BidsIcon"><BidsIcon className="w-5 h-5"/></span>عروض المهام ({bids.length})</button>
                        )}
                        <button onClick={() => setActiveTab('activity')} className={`flex items-center gap-2 px-3 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'activity' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}><ClockIcon className="w-5 h-5"/>سجل الأحداث</button>
                    </nav>
                </div>
                
                <div className="animate-fade-in space-y-6">
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border dark:border-gray-700">
                               <h3 className="font-bold mb-3 flex items-center text-lg sm:text-xl"><BookOpenIcon className="w-5 h-5 me-2 text-gray-400"/>وصف المشروع</h3>
                               <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{project.description}</p>
                           </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border dark:border-gray-700">
                               <h3 className="font-bold mb-3 flex items-center text-lg sm:text-xl"><DollarSignIcon className="w-5 h-5 me-2 text-gray-400"/>التقرير المالي</h3>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                   <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                       <p className="text-sm text-gray-500">الميزانية المخصصة</p>
                                       <p className="text-2xl font-bold text-green-600">{project.budget ? `${project.budget.toLocaleString()} ريال` : 'غير محدد'}</p>
                                   </div>
                                   <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                       <p className="text-sm text-gray-500">التكلفة الفعلية (المبالغ المعينة)</p>
                                       <p className="text-2xl font-bold text-blue-600">{totalCost.toLocaleString()} ريال</p>
                                   </div>
                               </div>
                           </div>
                        </div>
                    )}
                    {activeTab === 'tasks' && (
                         <div className="space-y-4">
                             <div className="text-right mb-4">
                                <button onClick={() => setIsAddTaskModalOpen(true)} className="flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm ml-auto">
                                    <span title="PlusIcon"><PlusIcon className="w-4 h-4 me-2" /></span> إضافة مهمة جديدة
                                </button>
                             </div>
                            {project.tasks.length > 0 ? (
                                <div className="space-y-4">
                                    {project.tasks.map(task => 
                                        <TaskCard 
                                            key={task.id} 
                                            task={task} 
                                            project={project}
                                            educators={educators}
                                            navigateTo={navigateTo}
                                            onDeleteTask={taskProps.onDeleteTask}
                                            onUpdateTaskBiddingStatus={taskProps.onUpdateTaskBiddingStatus as any}
                                            onUpdateTaskStatus={taskProps.onUpdateTaskStatus}
                                            onAssignProviderClick={openAssignModalForTask}
                                        />
                                    )}
                                </div>
                            ) : <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed dark:border-gray-700"><p className="text-gray-500 dark:text-gray-400">لا توجد مهام مضافة لهذا المشروع بعد.</p><button onClick={() => setIsAddTaskModalOpen(true)} className="mt-4 text-blue-600 font-bold hover:underline">أضف المهمة الأولى</button></div>}
                        </div>
                    )}
                    {activeTab === 'bids' && (
                        <BidsView {...props} />
                    )}
                    {activeTab === 'activity' && (
                         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border dark:border-gray-700">
                             <h3 className="font-bold mb-4 flex items-center text-lg sm:text-xl"><ClockIcon className="w-5 h-5 me-2 text-gray-400"/>سجل أحداث المشروع</h3>
                             <ul className="space-y-4">
                                {project.activityLog.map(log => (
                                    <li key={log.id} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                                            <CheckCircleIcon className="w-4 h-4 text-gray-500"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{log.message}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{log.actor} - {log.timestamp}</p>
                                        </div>
                                    </li>
                                ))}
                                 {project.activityLog.length === 0 && (
                                     <p className="text-center text-sm text-gray-400 py-4">لا توجد أحداث مسجلة لهذا المشروع بعد.</p>
                                 )}
                             </ul>
                         </div>
                    )}
                </div>

            </main>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailView;
