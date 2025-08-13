import React, { useState, useMemo } from 'react';
import { Project, Task, Educator, SubTask, TaskNote, TaskAttachment, TaskActivityLog, Assignment, AssignmentType, ProjectStatus, AssignmentStatus } from '../types';
import { ViewType } from '../App';
import { ArrowLeftIcon, BriefcaseIcon, CheckIcon, CheckCircleIcon, ClockIcon, DollarSignIcon, EditIcon, FileTextIcon, PaperclipIcon, PlusIcon, SendIcon, UsersIcon, ZapIcon, ClipboardListIcon, ChatBubbleLeftRightIcon, UploadCloudIcon, TrashIcon, MoreVerticalIcon, CalendarDaysIcon, XCircleIcon, DocumentTextIcon, LinkIcon } from './Icons';
import ConfirmationModal from './ConfirmationModal';
import EditTaskModal from './EditTaskModal';
import AssignProviderModal from './AssignProviderModal';

interface TaskDetailViewProps {
    project: Project;
    task: Task;
    educators: Educator[];
    navigateTo: (view: ViewType, id?: string | { projectId: string; taskId: string; } | null) => void;
    onAddSubTask: (projectId: string, taskId: string, title: string) => void;
    onToggleSubTask: (projectId: string, taskId: string, subTaskId: string) => void;
    onAddNote: (projectId: string, taskId: string, content: string) => void;
    onUpdateTask: (projectId: string, taskId: string, taskData: Partial<Task>) => void;
    onUpdateTaskStatus: (projectId: string, taskId: string, newStatus: ProjectStatus, reason: string) => void;
    onDeleteTask: (projectId: string, taskId: string, reason: string) => void;
    onAssignProvider: (context: { projectId: string; taskId?: string }, newAssignments: Omit<Assignment, 'id'>[]) => void;
    onUpdateBiddingStatus: (projectId: string, taskId: string) => void;
}

type EditableSidebarCard = 'status' | 'financials' | 'dates' | null;

const InfoCard: React.FC<{title: string, icon: React.ReactNode, children: React.ReactNode, action?: React.ReactNode, className?: string}> = ({title, icon, children, action, className}) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 ${className}`}>
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center">
                <div className="text-gray-500 dark:text-gray-400">{icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white ms-3">{title}</h3>
            </div>
            {action && <div>{action}</div>}
        </div>
        <div className="p-4">{children}</div>
    </div>
);


const SubTaskItem: React.FC<{ subTask: SubTask, onToggle: () => void }> = ({ subTask, onToggle }) => (
    <div className="group">
        <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50">
            <input 
                type="checkbox" 
                id={`st-${subTask.id}`}
                checked={subTask.completed} 
                onChange={onToggle}
                className="w-5 h-5 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 me-3 cursor-pointer"
            />
            <label htmlFor={`st-${subTask.id}`} className={`flex-grow text-sm cursor-pointer ${subTask.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}>
                {subTask.title}
            </label>
            <span title={subTask.createdBy === 'admin' ? 'أنشأها المدير' : 'أنشأها المتخصص'} className={`text-xs font-bold px-2 py-0.5 rounded-full ${subTask.createdBy === 'admin' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                {subTask.createdBy === 'admin' ? 'A' : 'P'}
            </span>
        </div>
        {subTask.attachments && subTask.attachments.length > 0 && (
            <div className="ms-8 ps-4 border-s-2 dark:border-gray-700 py-2 space-y-1">
                {subTask.attachments.map(att => (
                    <a href={att.url} key={att.id} className="flex items-center gap-2 text-xs text-blue-600 hover:underline">
                        <PaperclipIcon className="w-3 h-3"/>
                        <span>{att.name}</span>
                        <span className="text-gray-400">({att.size})</span>
                    </a>
                ))}
            </div>
        )}
    </div>
);

type ActiveTab = 'subTasks' | 'files' | 'notes' | 'activity';

const TabButton: React.FC<{
    id: ActiveTab;
    label: string;
    count?: number;
    icon: React.ReactNode;
    activeTab: ActiveTab;
    setActiveTab: (tab: ActiveTab) => void;
}> = ({ id, label, count, icon, activeTab, setActiveTab }) => {
    const isActive = activeTab === id;
    return (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-3 py-2 font-semibold text-sm rounded-t-lg transition-colors duration-200 group ${
                isActive
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
        >
            {icon}
            <span className="ms-2">{label}</span>
            {count !== undefined && (
                <span
                    className={`ms-2 text-xs font-bold px-2 py-0.5 rounded-full ${
                        isActive
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                    }`}
                >
                    {count}
                </span>
            )}
        </button>
    );
};

const NoteItem: React.FC<{ note: TaskNote }> = ({ note }) => (
    <div className="flex items-start gap-4">
        <img className="w-10 h-10 rounded-full" src={note.authorAvatar} alt={note.authorName} />
        <div className="flex-grow bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-sm text-gray-800 dark:text-white">{note.authorName}</p>
                <time className="text-xs text-gray-400">{note.createdAt}</time>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{note.content}</p>
        </div>
    </div>
);

const TaskActivityItem: React.FC<{ log: TaskActivityLog }> = ({ log }) => (
    <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
            <CheckCircleIcon className="w-4 h-4 text-gray-500"/>
        </div>
        <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{log.message}</p>
            <p className="text-xs text-gray-400 mt-0.5">{log.actorName} - {log.timestamp}</p>
        </div>
    </div>
);


const TaskDetailView: React.FC<TaskDetailViewProps> = (props) => {
    const { project, task, educators, navigateTo, onAddSubTask, onToggleSubTask, onAddNote, onUpdateTask, onUpdateTaskStatus } = props;
    
    const [activeTab, setActiveTab] = useState<ActiveTab>('subTasks');
    const [newSubTaskTitle, setNewSubTaskTitle] = useState('');
    const [newNoteContent, setNewNoteContent] = useState('');
    const [editingCard, setEditingCard] = useState<EditableSidebarCard>(null);
    const [formData, setFormData] = useState<Partial<Task>>({});
    const [statusChange, setStatusChange] = useState<{ newStatus: ProjectStatus } | null>(null);

    const progress = task.subTasks.length > 0 ? (task.subTasks.filter(st => st.completed).length / task.subTasks.length) * 100 : (task.status === ProjectStatus.COMPLETED ? 100 : 0);
    const totalAssignedAmount = task.assignments.filter(a => a.status === AssignmentStatus.ACCEPTED).reduce((sum, a) => sum + (a.amount || 0), 0);

    const handleAddSubTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (newSubTaskTitle.trim()) {
            onAddSubTask(project.id, task.id, newSubTaskTitle.trim());
            setNewSubTaskTitle('');
        }
    };
    
    const handleAddNote = (e: React.FormEvent) => {
        e.preventDefault();
        if (newNoteContent.trim()) {
            onAddNote(project.id, task.id, newNoteContent.trim());
            setNewNoteContent('');
        }
    };

    const handleEditCard = (card: EditableSidebarCard) => {
        setEditingCard(card);
        setFormData({
            budget: task.budget,
            deadline: task.deadline,
            creationDate: task.creationDate,
        });
    };

    const handleSaveCard = () => {
        onUpdateTask(project.id, task.id, formData);
        setEditingCard(null);
    };
    
    const handleConfirmStatusChange = (reason: string) => {
        if (statusChange) {
            onUpdateTaskStatus(project.id, task.id, statusChange.newStatus, reason);
            setStatusChange(null);
        }
    };

    const adminAttachments = task.attachments.filter(a => a.uploadedBy === 'admin');
    const providerAttachments = task.attachments.filter(a => a.uploadedBy === 'provider');
    
    const remainingDays = useMemo(() => {
        const deadline = new Date(task.deadline);
        const today = new Date();
        const diffTime = deadline.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return { text: `متأخرة ${-diffDays} يوم`, color: "text-red-500"};
        if (diffDays === 0) return { text: "اليوم", color: "text-yellow-500"};
        return { text: `${diffDays} يوم متبقي`, color: "text-gray-500 dark:text-gray-400"};
    }, [task.deadline]);

    return (
        <div className="animate-fade-in">
             {statusChange && <ConfirmationModal isOpen={true} onClose={() => setStatusChange(null)} onConfirm={handleConfirmStatusChange} title={`تغيير حالة المهمة إلى "${statusChange.newStatus}"`} message="يرجى تأكيد تغيير حالة هذه المهمة." icon={<EditIcon className="w-8 h-8"/>} isReasonRequired={true} reasonLabel="سبب تغيير الحالة (إلزامي)" />}
            
            <div className="mb-6">
                <button onClick={() => navigateTo('projectDetail', project.id)} className="flex items-center text-sm text-blue-600 dark:text-blue-500 hover:underline mb-2"><ArrowLeftIcon className="w-4 h-4 me-1" /> العودة إلى المشروع</button>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{task.title}</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="lg:w-1/3 w-full space-y-6 lg:sticky lg:top-8">
                     <InfoCard 
                        title="إدارة الحالة" 
                        icon={<ClockIcon className="w-5 h-5"/>}
                     >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">الحالة الحالية</span>
                                <div className="flex gap-1">
                                    {Object.values(ProjectStatus).map(s => (
                                        <button key={s} onClick={() => s !== task.status && setStatusChange({ newStatus: s })} className={`px-2 py-1 text-xs font-bold rounded-md ${task.status === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}>{s}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    <span>التقدم</span>
                                    <span className="font-semibold">{Math.round(progress)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </InfoCard>
                    
                     <InfoCard title="التواريخ الرئيسية" icon={<CalendarDaysIcon className="w-5 h-5"/>} action={editingCard !== 'dates' && <button onClick={() => handleEditCard('dates')} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><EditIcon className="w-4 h-4 text-gray-400"/></button>}>
                         {editingCard === 'dates' ? (
                             <div className="space-y-3">
                                 <input type="date" value={formData.deadline} onChange={e => setFormData({...formData, deadline: e.target.value})} className="bg-gray-50 border text-sm rounded-lg block w-full p-2 dark:bg-gray-700/50 dark:border-gray-600" />
                                 <div className="flex justify-end gap-2"><button onClick={() => setEditingCard(null)}>إلغاء</button><button onClick={handleSaveCard}>حفظ</button></div>
                             </div>
                         ) : (
                             <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">تاريخ الإنشاء</span>
                                    <span className="font-semibold">{task.creationDate}</span>
                                </div>
                                 <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">الموعد النهائي</span>
                                    <span className="font-semibold">{task.deadline}</span>
                                </div>
                                 <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">الوقت المتبقي</span>
                                    <span className={`font-bold ${remainingDays.color}`}>{remainingDays.text}</span>
                                </div>
                             </div>
                         )}
                    </InfoCard>

                    <InfoCard title="المعلومات المالية" icon={<DollarSignIcon className="w-5 h-5"/>} action={editingCard !== 'financials' && <button onClick={() => handleEditCard('financials')} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><EditIcon className="w-4 h-4 text-gray-400"/></button>}>
                        {editingCard === 'financials' ? (
                            <div className="space-y-3">
                                <input type="number" placeholder="الميزانية" value={formData.budget ?? ''} onChange={e => setFormData({...formData, budget: Number(e.target.value)})} className="bg-gray-50 border text-sm rounded-lg block w-full p-2 dark:bg-gray-700/50 dark:border-gray-600" />
                                <div className="flex justify-end gap-2"><button onClick={() => setEditingCard(null)}>إلغاء</button><button onClick={handleSaveCard}>حفظ</button></div>
                            </div>
                        ) : (
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600 dark:text-gray-300">ميزانية المهمة</span>
                                    <span className="font-bold text-green-600">{task.budget ? `${task.budget.toLocaleString()} ريال` : 'غير محددة'}</span>
                                </div>
                                <div className="flex justify-between items-center text-blue-600 dark:text-blue-400 pt-2 border-t dark:border-gray-600">
                                    <span className="font-semibold">إجمالي المدفوع للمعينين</span>
                                    <span className="font-bold">{totalAssignedAmount.toLocaleString()} ريال</span>
                                </div>
                            </div>
                        )}
                    </InfoCard>
                </aside>

                 {/* Main Content */}
                <main className="lg:w-2/3 w-full">
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                        <nav className="flex space-x-2 rtl:space-x-reverse -mb-px flex-wrap">
                            <TabButton id="subTasks" label="المهام الفرعية" count={task.subTasks.length} icon={<ClipboardListIcon className="w-5 h-5"/>} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabButton id="files" label="الملفات" count={task.attachments.length} icon={<PaperclipIcon className="w-5 h-5"/>} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabButton id="notes" label="الملاحظات" count={task.notes.length} icon={<ChatBubbleLeftRightIcon className="w-5 h-5"/>} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabButton id="activity" label="سجل الأحداث" count={task.activityLog.length} icon={<ClockIcon className="w-5 h-5"/>} activeTab={activeTab} setActiveTab={setActiveTab} />
                        </nav>
                    </div>

                    {activeTab === 'subTasks' && (
                        <div className="space-y-4">
                            {task.subTasks.map(st => <SubTaskItem key={st.id} subTask={st} onToggle={() => onToggleSubTask(project.id, task.id, st.id)} />)}
                            <form onSubmit={handleAddSubTask} className="flex items-center gap-2 mt-4 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <input type="text" value={newSubTaskTitle} onChange={e => setNewSubTaskTitle(e.target.value)} placeholder="إضافة مهمة فرعية جديدة..." className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2" />
                                <button type="submit" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"><PlusIcon className="w-5 h-5"/></button>
                            </form>
                        </div>
                    )}
                    
                    {activeTab === 'files' && (
                        <div className="space-y-6">
                            <InfoCard title="المتطلبات (من المدير)" icon={<UploadCloudIcon className="w-5 h-5"/>}>
                                {adminAttachments.length > 0 ? (
                                    <ul className="space-y-2">
                                        {adminAttachments.map(att => <li key={att.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"><span>{att.name}</span> <a href="#" className="text-blue-500">تحميل</a></li>)}
                                    </ul>
                                ) : <p className="text-center text-sm text-gray-400 py-4">لا توجد متطلبات مرفقة.</p>}
                            </InfoCard>
                             <InfoCard title="التسليمات (من المتخصص)" icon={<CheckCircleIcon className="w-5 h-5"/>}>
                                 {providerAttachments.length > 0 ? (
                                    <ul className="space-y-2">
                                        {providerAttachments.map(att => <li key={att.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"><span>{att.name}</span> <a href="#" className="text-blue-500">تحميل</a></li>)}
                                    </ul>
                                ) : <p className="text-center text-sm text-gray-400 py-4">لا توجد تسليمات بعد.</p>}
                            </InfoCard>
                        </div>
                    )}

                    {activeTab === 'notes' && (
                        <div className="space-y-4">
                            {task.notes.map(note => <NoteItem key={note.id} note={note} />)}
                            <form onSubmit={handleAddNote} className="flex items-center gap-2 mt-4 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <input type="text" value={newNoteContent} onChange={e => setNewNoteContent(e.target.value)} placeholder="أضف ملاحظة جديدة..." className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2" />
                                <button type="submit" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300" disabled={!newNoteContent.trim()}><SendIcon className="w-5 h-5"/></button>
                            </form>
                        </div>
                    )}
                    
                    {activeTab === 'activity' && (
                        <div className="space-y-4">
                            {task.activityLog.length > 0 ? (
                                task.activityLog.map(log => <TaskActivityItem key={log.id} log={log} />)
                            ) : (
                                <p className="text-center text-sm text-gray-400 py-4">لا توجد أحداث مسجلة لهذه المهمة.</p>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default TaskDetailView;