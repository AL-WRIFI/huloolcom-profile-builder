
import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ProjectsView from './components/ProjectsView';
import ProjectDetailView from './components/ProjectDetailView';
import EducatorsView from './components/EducatorsView';
import SettingsView from './components/SettingsView';
import CreateProjectView from './components/CreateProjectView';
import ToastContainer from './components/Toast';
import EducationalRequestsView from './components/EducationalRequestsView';
import InviteEducatorModal from './components/InviteEducatorModal';
import RequestDetailView from './components/RequestDetailView';
import BidDetailView from './components/BidDetailView';
import TaskDetailView from './components/TaskDetailView';
import { PROJECTS, BIDS, EDUCATORS, ACTIVITIES, EDUCATIONAL_REQUESTS, EDUCATOR_APPLICATIONS, USERS, INVOICES, NOTIFICATIONS } from './constants';
import { Project, Bid, Task, BidStatus, ProjectStatus, ToastNotification, EducationalRequest, Assignment, ProjectCreationType, EducationalRequestStatus, AssignmentStatus, AssignmentType, RequestActivityLog, RequestActivityType, PaymentStatus, FulfillmentStatus, SubTask, TaskNote, ProjectActivityLog, Educator, EducatorApplication, EducatorStatus, VerificationStatus, User, UserStatus, Invoice, AppNotification } from './types';
import EducatorApplicationsView from './EducatorApplicationsView';
import EducatorApplicationDetailView from './EducatorApplicationDetailView';
import RejectedEducatorsView from './RejectedEducatorsView';
import UsersView from './components/UsersView';
import UserDetailView from './components/UserDetailView';
import BottomNavBar from './components/BottomNavBar';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import NotificationsPanel from './components/NotificationsPanel';
import FinanceView from './components/FinanceView';
import ReportsView from './components/ReportsView';
import CalendarView from './components/CalendarView';

export type ViewType = 
  'dashboard' | 
  'projects' | 'projectDetail' | 'createProject' | 
  'educators' | 'educatorApplications' | 'educatorApplicationDetail' | 'rejectedEducators' |
  'users' | 'userDetail' |
  'educationalRequests' | 'requestDetail' |
  'bidDetail' | 'taskDetail' | 
  'finance' | 'invoiceDetail' |
  'reports' |
  'calendar' |
  'settings';

const getInitialState = <T,>(key: string, defaultValue: T): T => {
    try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
    } catch (error) {
        console.error(`Error reading from localStorage for key "${key}":`, error);
    }
    return defaultValue;
};


const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [selectedBidId, setSelectedBidId] = useState<string | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);

  const [projects, setProjects] = useState<Project[]>(() => getInitialState('holoolokom-projects', PROJECTS));
  const [bids, setBids] = useState<Bid[]>(() => getInitialState('holoolokom-bids', BIDS));
  const [users, setUsers] = useState<User[]>(() => getInitialState('holoolokom-users', USERS));
  const [educators, setEducators] = useState<Educator[]>(() => getInitialState('holoolokom-educators', EDUCATORS));
  const [activities, setActivities] = useState(() => getInitialState('holoolokom-activities', ACTIVITIES));
  const [educationalRequests, setEducationalRequests] = useState<EducationalRequest[]>(() => getInitialState('holoolokom-educationalRequests', EDUCATIONAL_REQUESTS));
  const [educatorApplications, setEducatorApplications] = useState<EducatorApplication[]>(() => getInitialState('holoolokom-educatorApplications', EDUCATOR_APPLICATIONS));
  const [invoices, setInvoices] = useState<Invoice[]>(() => getInitialState('holoolokom-invoices', INVOICES));
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  
  const [appNotifications, setAppNotifications] = useState<AppNotification[]>(() => getInitialState('holoolokom-appNotifications', NOTIFICATIONS));
  const [isNotificationsPanelOpen, setNotificationsPanelOpen] = useState(false);
  
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => { try { localStorage.setItem('holoolokom-projects', JSON.stringify(projects)); } catch(e) { console.error(e) } }, [projects]);
  useEffect(() => { try { localStorage.setItem('holoolokom-bids', JSON.stringify(bids)); } catch(e) { console.error(e) } }, [bids]);
  useEffect(() => { try { localStorage.setItem('holoolokom-users', JSON.stringify(users)); } catch(e) { console.error(e) } }, [users]);
  useEffect(() => { try { localStorage.setItem('holoolokom-educators', JSON.stringify(educators)); } catch(e) { console.error(e) } }, [educators]);
  useEffect(() => { try { localStorage.setItem('holoolokom-activities', JSON.stringify(activities)); } catch(e) { console.error(e) } }, [activities]);
  useEffect(() => { try { localStorage.setItem('holoolokom-educationalRequests', JSON.stringify(educationalRequests)); } catch(e) { console.error(e) } }, [educationalRequests]);
  useEffect(() => { try { localStorage.setItem('holoolokom-educatorApplications', JSON.stringify(educatorApplications)); } catch(e) { console.error(e) } }, [educatorApplications]);
  useEffect(() => { try { localStorage.setItem('holoolokom-invoices', JSON.stringify(invoices)); } catch(e) { console.error(e) } }, [invoices]);
  useEffect(() => { try { localStorage.setItem('holoolokom-appNotifications', JSON.stringify(appNotifications)); } catch(e) { console.error(e) } }, [appNotifications]);


  const addNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = `toast-${Date.now()}`;
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);
  
  const handleInviteEducator = (email: string) => {
    addNotification(`تم إرسال دعوة إلى ${email} للانضمام كمتخصص.`, 'success');
    setInviteModalOpen(false);
  }

  const navigateTo = (view: ViewType, id: string | { projectId: string; taskId: string } | null = null) => {
    setCurrentView(view);
    
    // Clear all IDs first
    setSelectedProjectId(null);
    setSelectedRequestId(null);
    setSelectedBidId(null);
    setSelectedTaskId(null);
    setSelectedApplicationId(null);
    setSelectedUserId(null);
    setSelectedInvoiceId(null);

    if (view === 'taskDetail' && typeof id === 'object' && id !== null) {
        setSelectedProjectId(id.projectId);
        setSelectedTaskId(id.taskId);
    } else if (typeof id === 'string') {
        switch(view) {
            case 'projectDetail': setSelectedProjectId(id); break;
            case 'requestDetail':
            case 'createProject': setSelectedRequestId(id); break;
            case 'bidDetail':
                const bid = bids.find(b => b.id === id);
                if (bid) {
                    setSelectedProjectId(bid.projectId);
                    setSelectedBidId(id);
                }
                break;
            case 'educatorApplicationDetail': setSelectedApplicationId(id); break;
            case 'userDetail': setSelectedUserId(id); break;
            case 'invoiceDetail': setSelectedInvoiceId(id); break;
            case 'taskDetail':
                 const project = projects.find(p => p.tasks.some(t => t.id === id));
                 setSelectedProjectId(project?.id ?? null);
                 setSelectedTaskId(id);
                 break;
        }
    }
    setMobileMenuOpen(false);
    setNotificationsPanelOpen(false);
  };
  
  const addRequestActivityLog = (requestId: string, type: RequestActivityType, details: string, reason?: string, actor: string = 'المدير العام') => {
     const newLog: RequestActivityLog = {
      id: `actlog-${Date.now()}`,
      type,
      details,
      reason,
      actor,
      actorAvatar: 'https://i.pravatar.cc/100?u=admin',
      timestamp: new Date().toLocaleString('ar', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    setEducationalRequests(prev => prev.map(req => 
      req.id === requestId 
        ? { ...req, activityLog: [newLog, ...(req.activityLog || [])] } 
        : req
    ));
  };

  const addProjectActivityLog = (projectId: string, message: string) => {
      const newLog: ProjectActivityLog = {
          id: `p-act-${Date.now()}`,
          message,
          actor: 'المدير العام',
          timestamp: new Date().toLocaleString('ar', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }),
      };
      setProjects(prev => prev.map(p =>
          p.id === projectId ? { ...p, activityLog: [newLog, ...p.activityLog] } : p
      ));
  };


  const handleAddProject = (newProjectData: Pick<Project, 'title' | 'description' | 'creationType' | 'educationalRequestId' | 'tags' | 'requesterName'>) => {
      let newProject: Project = {
          ...newProjectData,
          id: `p${Date.now()}`,
          createdAt: new Date().toISOString().split('T')[0],
          createdBy: 'الإدارة',
          projectManagerId: 'e9',
          tasks: [],
          status: ProjectStatus.PENDING,
          budget: null,
          deadline: null,
          activityLog: [],
          isPublished: newProjectData.creationType === ProjectCreationType.PUBLIC,
      };
      
      const defaultTask: Task = {
        id: `t-default-${newProject.id}`,
        title: newProjectData.title,
        description: `المهمة الرئيسية لمشروع "${newProjectData.title}"`,
        status: ProjectStatus.PENDING,
        assignments: [],
        budget: null,
        deadline: '',
        creationDate: new Date().toISOString().split('T')[0],
        isPublic: newProjectData.creationType === ProjectCreationType.PUBLIC,
        biddingStatus: newProjectData.creationType === ProjectCreationType.PUBLIC ? 'OPEN' : 'CLOSED',
        subTasks: [],
        attachments: [],
        notes: [],
        activityLog: [],
      };

      newProject.tasks.push(defaultTask);
      
      setProjects(prev => [newProject, ...prev]);

      addProjectActivityLog(newProject.id, `تم إنشاء المشروع.`);
      if(newProject.isPublished) {
         addProjectActivityLog(newProject.id, `تم نشر المشروع لاستقبال العروض تلقائيًا لأنه من النوع العام.`);
      }

      addNotification('تم إنشاء المشروع بنجاح! تم إنشاء مهمة افتراضية.', 'success');
      
      if(newProject.educationalRequestId){
        addRequestActivityLog(newProject.educationalRequestId, 'PROJECT_LINKED', `تم ربط الطلب بمشروع "${newProject.title}"`);
      }
      
      navigateTo('projectDetail', newProject.id);
  };
  
  const handleUpdateProjectDetails = (projectId: string, details: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, ...details } : p));
    addProjectActivityLog(projectId, 'تم تحديث البيانات الأساسية للمشروع.');
    addNotification('تم تحديث تفاصيل المشروع بنجاح.', 'success');
  };

  const handleUpdateProjectStatus = (projectId: string, newStatus: ProjectStatus, reason: string) => {
    let oldStatus = '';
    setProjects(prev => prev.map(p => {
        if (p.id === projectId) {
            oldStatus = p.status;
            return { ...p, status: newStatus };
        }
        return p;
    }));
    addProjectActivityLog(projectId, `تم تغيير حالة المشروع من "${oldStatus}" إلى "${newStatus}". السبب: ${reason}`);
    addNotification('تم تحديث حالة المشروع بنجاح.', 'success');
  };

  const handleDeleteProject = (projectId: string, reason: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    setProjects(prev => prev.filter(p => p.id !== projectId));
    addNotification(`تم حذف المشروع "${project.title}". السبب: ${reason}`, 'success');
    navigateTo('projects');
  };

  const handleToggleProjectPublication = (projectId: string, reason?: string) => {
    setProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;

        const newIsPublished = !p.isPublished;
        
        let logMessage = newIsPublished
            ? `تم نشر المشروع وبدء استقبال العروض.`
            : `تم إيقاف استقبال العروض للمشروع.`;
        
        if (reason) {
            logMessage += ` السبب: ${reason}`;
        }
        
        addProjectActivityLog(projectId, logMessage);
        addNotification(`تم ${newIsPublished ? 'نشر المشروع' : 'إيقاف النشر'}.`, 'success');

        return { ...p, isPublished: newIsPublished };
    }));
  };
  
  const handleAssignProvider = (context: { projectId: string; taskId: string }, newAssignments: Omit<Assignment, 'id'>[]) => {
    const assignmentsWithIds: Assignment[] = newAssignments.map(a => ({ ...a, id: `a${Date.now()}${Math.random()}` }));
    
    setProjects(prev => prev.map(p => {
        if (p.id !== context.projectId) return p;
        
        const updatedTasks = p.tasks.map(t => {
            if (t.id !== context.taskId) return t;
            
            const updatedAssignments = [...t.assignments];
            assignmentsWithIds.forEach(newA => {
                if (!updatedAssignments.some(ex => ex.educatorId === newA.educatorId)) {
                     updatedAssignments.push(newA);
                }
            });

            const assignedNames = assignmentsWithIds.map(a => educators.find(e => e.id === a.educatorId)?.name).filter(Boolean).join(', ');
            addProjectActivityLog(context.projectId, `تم تعيين ${assignedNames} للمهمة "${t.title}".`);

            return { ...t, assignments: updatedAssignments }
        });
        
        return { ...p, tasks: updatedTasks };
    }));
    addNotification(`تم تعيين ${assignmentsWithIds.length} متخصص(ين) للمهمة.`, 'success');
  };

  const handleAddTask = (projectId: string, taskData: Omit<Task, 'id' | 'status' | 'assignments' | 'biddingStatus' | 'subTasks' | 'notes' | 'attachments' | 'activityLog'>) => {
      const newTask: Task = {
          ...taskData,
          id: `t${Date.now()}`,
          status: ProjectStatus.PENDING,
          assignments: [],
          biddingStatus: taskData.isPublic ? 'OPEN' : 'CLOSED',
          subTasks: [],
          notes: [],
          attachments: [],
          activityLog: [],
      };
      setProjects(prev => prev.map(p => 
          p.id === projectId ? { ...p, tasks: [newTask, ...p.tasks] } : p
      ));
      addProjectActivityLog(projectId, `تمت إضافة مهمة جديدة: "${newTask.title}".`);
      addNotification('تمت إضافة المهمة بنجاح.', 'success');
  };

  const handleUpdateTask = (projectId: string, taskId: string, taskData: Partial<Task>) => {
     setProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;
        const taskTitle = p.tasks.find(t => t.id === taskId)?.title || '';
        addProjectActivityLog(projectId, `تم تعديل بيانات المهمة "${taskTitle}".`);
        return {
            ...p,
            tasks: p.tasks.map(t => t.id === taskId ? {...t, ...taskData} : t)
        }
     }));
     addNotification('تم تعديل المهمة بنجاح.', 'success');
  };
  
  const handleUpdateTaskDetails = (projectId: string, taskId: string, details: Partial<Task>) => {
    setProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;
        const taskTitle = p.tasks.find(t => t.id === taskId)?.title || '';
        addProjectActivityLog(projectId, `تم تحديث البيانات المالية والتفاصيل للمهمة "${taskTitle}".`);
        return {
            ...p,
            tasks: p.tasks.map(t => t.id === taskId ? {...t, ...details} : t)
        };
    }));
    addNotification('تم تحديث تفاصيل المهمة بنجاح.', 'success');
};


  const handleDeleteTask = (projectId: string, taskId: string, reason: string) => {
      let taskTitle = '';
      setProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;
        const taskToDelete = p.tasks.find(t => t.id === taskId);
        if (taskToDelete) {
            taskTitle = taskToDelete.title;
        }
        return {
            ...p,
            tasks: p.tasks.filter(t => t.id !== taskId)
        }
      }));
      addProjectActivityLog(projectId, `تم حذف المهمة "${taskTitle}". السبب: ${reason}`);
      addNotification(`تم حذف المهمة.`, 'success');
  };
  
  const handleUpdateBidTaskStatus = (
        bidId: string,
        taskId: string,
        newStatus: BidStatus,
        details?: { reason?: string; approvalMessage?: string; assignmentAgreement?: string }
    ) => {
        setBids(prevBids => prevBids.map(b => {
            if (b.id !== bidId) return b;

            const oldBidTask = b.bidTasks.find(bt => bt.taskId === taskId);
            const wasAssigned = oldBidTask?.status === BidStatus.ASSIGNED;

            const updatedBidTasks = b.bidTasks.map(bt => {
                if (bt.taskId === taskId) {
                    return {
                        ...bt,
                        status: newStatus,
                        approvalMessage: newStatus === BidStatus.APPROVED ? details?.approvalMessage : bt.approvalMessage,
                        rejectionReason: (newStatus === BidStatus.REJECTED || (wasAssigned && newStatus !== BidStatus.ASSIGNED)) ? details?.reason : undefined,
                    };
                }
                return bt;
            });
            
            const updatedBid = { ...b, bidTasks: updatedBidTasks };

            // Assignment/De-assignment Logic
            setProjects(prevProjects => prevProjects.map(p => {
                if (p.id !== b.projectId) return p;

                let taskTitle = '';
                const educatorName = educators.find(e => e.id === b.educatorId)?.name || 'متخصص';

                const updatedTasks = p.tasks.map(t => {
                    if (t.id !== taskId) return t;
                    taskTitle = t.title;
                    
                    let newAssignments = [...t.assignments];
                    
                    // Assign provider
                    if (newStatus === BidStatus.ASSIGNED) {
                        const isAlreadyAssigned = t.assignments.some(a => a.educatorId === b.educatorId);
                        if (!isAlreadyAssigned) {
                            const newAssignment: Assignment = {
                                id: `a-${b.educatorId}-${taskId}-${Date.now()}`,
                                educatorId: b.educatorId,
                                status: AssignmentStatus.ACCEPTED,
                                type: AssignmentType.FROM_BID, 
                                agreementNotes: details?.assignmentAgreement,
                                amount: oldBidTask?.amount,
                            };
                            newAssignments.push(newAssignment);
                            addProjectActivityLog(p.id, `تم تعيين "${educatorName}" للمهمة "${taskTitle}" من خلال عرض.`);
                        }
                         addNotification(`تم تعيين المتخصص للمهمة بنجاح!`, 'success');
                    } 
                    // Un-assign provider if they were previously assigned
                    else if (wasAssigned) {
                         newAssignments = t.assignments.filter(a => a.educatorId !== b.educatorId);
                         addProjectActivityLog(p.id, `تم إلغاء تعيين "${educatorName}" من المهمة "${taskTitle}".`);
                         addNotification('تم إلغاء تعيين المتخصص من المهمة.', 'info');
                    }

                    return { ...t, assignments: newAssignments };
                });
                
                return { ...p, tasks: updatedTasks };
            }));

            if(newStatus !== BidStatus.ASSIGNED && !wasAssigned){
                 addNotification('تم تحديث حالة العرض للمهمة.', 'info');
            }

            return updatedBid;
        }));
    };
  
  const handleUpdateTaskBiddingStatus = (projectId: string, taskId: string) => {
      setProjects(prevProjects =>
          prevProjects.map(p => {
              if (p.id !== projectId) return p;
              let taskTitle = '';
              const updatedTasks = p.tasks.map(t => {
                  if (t.id !== taskId) return t;
                  taskTitle = t.title;
                  const newBiddingStatus: 'OPEN' | 'CLOSED' = t.biddingStatus === 'OPEN' ? 'CLOSED' : 'OPEN';
                   addNotification(`تم ${newBiddingStatus === 'OPEN' ? 'فتح' : 'إغلاق'} استقبال العروض للمهمة.`, 'info');
                  return { ...t, biddingStatus: newBiddingStatus };
              });
              const biddingStatusText = updatedTasks.find(t => t.id === taskId)?.biddingStatus === 'OPEN' ? 'فتح' : 'إغلاق';
              addProjectActivityLog(projectId, `تم ${biddingStatusText} استقبال العروض للمهمة "${taskTitle}".`);
              return { ...p, tasks: updatedTasks };
          })
      );
  };

  const handleUpdateTaskStatus = (projectId: string, taskId: string, newStatus: ProjectStatus, reason: string) => {
    setProjects(prevProjects => 
      prevProjects.map(p => {
        if (p.id === projectId) {
          let oldStatus: ProjectStatus | undefined = undefined;
          let taskTitle = '';

          const updatedTasks = p.tasks.map(t => {
              if (t.id === taskId) {
                  oldStatus = t.status;
                  taskTitle = t.title;
                  return { ...t, status: newStatus };
              }
              return t;
          });

          addProjectActivityLog(projectId, `تم تغيير حالة المهمة "${taskTitle}" من "${oldStatus}" إلى "${newStatus}". السبب: ${reason}`);

          // Also update project status if all tasks are complete
          const completedTasks = updatedTasks.filter(t => t.status === ProjectStatus.COMPLETED).length;
          const projectStatus = updatedTasks.length > 0 && completedTasks === updatedTasks.length ? ProjectStatus.COMPLETED : p.status;
          
          if(projectStatus === ProjectStatus.COMPLETED && p.status !== ProjectStatus.COMPLETED){
            addNotification(`اكتملت جميع المهام! تم تحديث حالة المشروع إلى "مكتمل".`, 'success');
            addProjectActivityLog(projectId, `اكتملت جميع المهام وتغيرت حالة المشروع إلى "مكتمل".`);
          } else {
            addNotification(`تم تحديث حالة المهمة بنجاح.`, 'info');
          }

          return { ...p, tasks: updatedTasks, status: projectStatus };
        }
        return p;
      })
    );
  };
  
  const handleUpdateRequestStatus = (requestId: string, newStatus: EducationalRequestStatus, reason?: string) => {
    const oldRequest = educationalRequests.find(req => req.id === requestId);
    if(!oldRequest) return;
    setEducationalRequests(prev => prev.map(req => req.id === requestId ? { ...req, status: newStatus } : req));
    addRequestActivityLog(requestId, 'STATUS_CHANGED', `من "${oldRequest.status}" إلى "${newStatus}"`, reason);
    addNotification('تم تحديث حالة الطلب بنجاح.', 'success');
  };

  const handleUpdatePaymentStatus = (requestId: string, newStatus: PaymentStatus, reason?: string) => {
    const oldRequest = educationalRequests.find(req => req.id === requestId);
    if(!oldRequest) return;

    setEducationalRequests(prev => prev.map(req => req.id === requestId ? { ...req, paymentStatus: newStatus } : req));
    addRequestActivityLog(requestId, 'PAYMENT_STATUS_CHANGED', `من "${oldRequest.paymentStatus}" إلى "${newStatus}"`, reason);
    addNotification('تم تحديث حالة الدفع بنجاح.', 'success');
  };

  const handleUpdateFulfillmentStatus = (requestId: string, newStatus: FulfillmentStatus, reason?: string) => {
    const oldRequest = educationalRequests.find(req => req.id === requestId);
    if(!oldRequest) return;

    setEducationalRequests(prev => prev.map(req => req.id === requestId ? { ...req, fulfillmentStatus: newStatus } : req));
    addRequestActivityLog(requestId, 'FULFILLMENT_STATUS_CHANGED', `من "${oldRequest.fulfillmentStatus}" إلى "${newStatus}"`, reason);
    addNotification('تم تحديث حالة الإنجاز بنجاح.', 'success');
  };

  const handleUpdateRequest = (requestId: string, details: Partial<EducationalRequest>) => {
    setEducationalRequests(prev => prev.map(req => req.id === requestId ? {...req, ...details} : req));
    addRequestActivityLog(requestId, 'DETAILS_UPDATED', 'تم تحديث البيانات الأساسية للطلب.');
    addNotification('تم تحديث تفاصيل الطلب بنجاح.', 'success');
  };

  const handleAddRequestNote = (requestId: string, noteContent: string) => {
    addRequestActivityLog(requestId, 'NOTE', noteContent, undefined, 'المدير العام');
    addNotification('تمت إضافة الملاحظة بنجاح.', 'success');
  };

  const addTaskActivityLog = (projectId: string, taskId: string, message: string, actorName: string) => {
     setProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          tasks: p.tasks.map(t => {
            if (t.id !== taskId) return t;
            const newLog = {
              id: `tal-${Date.now()}`,
              message,
              actorName,
              timestamp: new Date().toLocaleString('ar', { hour: '2-digit', minute: '2-digit' })
            };
            return { ...t, activityLog: [newLog, ...t.activityLog] };
          })
        }
     }));
  };

  const handleAddSubTask = (projectId: string, taskId: string, title: string) => {
      const newSubTask: SubTask = {
        id: `st-${Date.now()}`,
        title,
        completed: false,
        createdBy: 'admin',
      };
      setProjects(prev => prev.map(p => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          tasks: p.tasks.map(t => 
            t.id === taskId ? { ...t, subTasks: [...t.subTasks, newSubTask] } : t
          )
        }
      }));
      addTaskActivityLog(projectId, taskId, `أضاف مهمة فرعية جديدة: "${title}"`, 'المدير العام');
  };

   const handleToggleSubTask = (projectId: string, taskId: string, subTaskId: string) => {
    let subTaskTitle = '';
    let isCompleted = false;

    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      return {
        ...p,
        tasks: p.tasks.map(t => {
          if (t.id !== taskId) return t;
          const updatedSubTasks = t.subTasks.map(st => {
            if (st.id === subTaskId) {
              subTaskTitle = st.title;
              isCompleted = !st.completed;
              return { ...st, completed: !st.completed };
            }
            return st;
          });
          return { ...t, subTasks: updatedSubTasks };
        })
      };
    }));
     addTaskActivityLog(projectId, taskId, `${isCompleted ? 'أكمل' : 'ألغى إكمال'} المهمة الفرعية: "${subTaskTitle}"`, 'المدير العام');
  };
  
  const handleAddTaskNote = (projectId: string, taskId: string, content: string) => {
    const newNote: TaskNote = {
      id: `tn-${Date.now()}`,
      content,
      createdAt: new Date().toLocaleString('ar', { hour: '2-digit', minute: '2-digit' }),
      createdBy: 'admin',
      authorName: 'المدير العام',
      authorAvatar: 'https://i.pravatar.cc/100?u=admin',
    };
     setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      return {
        ...p,
        tasks: p.tasks.map(t => 
          t.id === taskId ? { ...t, notes: [...t.notes, newNote] } : t
        )
      }
    }));
    addTaskActivityLog(projectId, taskId, `أضاف ملاحظة جديدة.`, 'المدير العام');
  };
  
  const handleUpdateEducatorApplicationStatus = (applicationId: string, newStatus: EducatorStatus, reason?: string) => {
      let applicant: Educator | undefined;
      setEducatorApplications(prev => prev.map(app => {
        if (app.id === applicationId) {
            applicant = educators.find(e => e.id === app.educatorId);
            return { ...app, status: newStatus, rejectionReason: reason };
        }
        return app;
      }));
      
      if (applicant) {
          setEducators(prev => prev.map(e => e.id === applicant!.id ? { ...e, status: newStatus } : e));
          
          if (newStatus === EducatorStatus.ACTIVE) {
              addNotification(`تم قبول طلب ${applicant.name} بنجاح.`, 'success');
          } else {
              addNotification(`تم تحديث حالة طلب ${applicant.name} إلى "${newStatus}".`, 'info');
          }
      }
  };

  const handleUpdateDocumentStatus = (applicationId: string, documentType: 'personalId' | 'certification' | 'experience', documentId: string, newStatus: VerificationStatus, reason?: string) => {
      setEducatorApplications(prev => prev.map(app => {
        if (app.id !== applicationId) return app;
        
        let updatedApp = { ...app };

        if (documentType === 'personalId') {
            updatedApp.personalId = { ...app.personalId, status: newStatus, rejectionReason: reason };
        } else if (documentType === 'certification') {
            updatedApp.certifications = app.certifications.map(c => c.id === documentId ? { ...c, document: {...c.document, status: newStatus, rejectionReason: reason }} : c);
        } else if (documentType === 'experience') {
            updatedApp.experiences = app.experiences.map(e => e.id === documentId ? { ...e, document: {...e.document, status: newStatus, rejectionReason: reason }} : e);
        }
        
        addNotification(`تم تحديث حالة المستند.`, 'success');
        return updatedApp;
      }));
  };

  const handleUpdateUserStatus = (userId: string, newStatus: UserStatus, reason: string) => {
      const user = users.find(u => u.id === userId);
      if(!user) return;
      
      setUsers(prev => prev.map(u => u.id === userId ? {...u, status: newStatus} : u));
      addNotification(`تم تحديث حالة المستخدم ${user.name} إلى "${newStatus}". السبب: ${reason}`, 'success');
  };
  
  const handleDeleteUser = (userId: string, reason: string) => {
      const user = users.find(u => u.id === userId);
      if(!user) return;
      
      setUsers(prev => prev.filter(u => u.id !== userId));
      // Optional: Handle related data e.g. anonymize requests
      addNotification(`تم حذف المستخدم ${user.name}. السبب: ${reason}`, 'success');
      navigateTo('users');
  };

  const [isInviteModalOpen, setInviteModalOpen] = useState(false);

  const renderContent = () => {
    const project = selectedProjectId ? projects.find(p => p.id === selectedProjectId) : null;
    const request = selectedRequestId ? educationalRequests.find(r => r.id === selectedRequestId) : null;
    const bid = selectedBidId ? bids.find(b => b.id === selectedBidId) : null;
    const task = project && selectedTaskId ? project.tasks.find(t => t.id === selectedTaskId) : null;
    const application = selectedApplicationId ? educatorApplications.find(app => app.id === selectedApplicationId) : null;
    const user = selectedUserId ? users.find(u => u.id === selectedUserId) : null;

    switch (currentView) {
      case 'dashboard':
        return <DashboardView navigateTo={navigateTo} projects={projects} bids={bids} educators={educators} activities={activities} />;
      case 'projects':
        return <ProjectsView navigateTo={navigateTo} projects={projects} bids={bids} educators={educators} users={users} educationalRequests={educationalRequests} onDeleteProject={handleDeleteProject} onToggleProjectPublication={handleToggleProjectPublication}/>;
      case 'createProject':
        return <CreateProjectView navigateTo={navigateTo} onAddProject={handleAddProject} educationalRequests={educationalRequests} selectedRequestId={selectedRequestId} users={users} />;
      case 'projectDetail':
        if (project) {
          const projectBids = bids.filter(b => b.projectId === project.id);
          const projectEducators = educators;
          return <ProjectDetailView 
                    project={project} 
                    bids={projectBids}
                    educators={projectEducators}
                    educationalRequests={educationalRequests}
                    users={users}
                    navigateTo={navigateTo} 
                    onAddTask={(pid, data) => handleAddTask(pid, data as any)}
                    onUpdateTaskStatus={handleUpdateTaskStatus}
                    onUpdateProjectDetails={handleUpdateProjectDetails}
                    onUpdateProjectStatus={handleUpdateProjectStatus}
                    onUpdateTask={handleUpdateTask}
                    onAssignProvider={handleAssignProvider}
                    onUpdateBidTaskStatus={handleUpdateBidTaskStatus}
                    onUpdateTaskBiddingStatus={handleUpdateTaskBiddingStatus}
                    onDeleteTask={handleDeleteTask}
                    onToggleProjectPublication={handleToggleProjectPublication}
                 />;
        }
        return <ProjectsView navigateTo={navigateTo} projects={projects} bids={bids} educators={educators} users={users} educationalRequests={educationalRequests} onDeleteProject={handleDeleteProject} onToggleProjectPublication={handleToggleProjectPublication}/>;
      case 'taskDetail':
         if (project && task) {
            return <TaskDetailView
                project={project}
                task={task}
                educators={educators}
                navigateTo={navigateTo}
                onAddNote={handleAddTaskNote}
                onAddSubTask={handleAddSubTask}
                onToggleSubTask={handleToggleSubTask}
                onUpdateTask={handleUpdateTaskDetails}
                onUpdateTaskStatus={handleUpdateTaskStatus}
                onDeleteTask={handleDeleteTask}
                onAssignProvider={handleAssignProvider}
                onUpdateBiddingStatus={handleUpdateTaskBiddingStatus}
            />
         }
        return <p>لم يتم العثور على المهمة.</p>;
      case 'bidDetail':
        if (bid && project) {
            const educator = educators.find(e => e.id === bid.educatorId);
            const projectBids = bids.filter(b => b.projectId === project.id);
            if(educator){
                return <BidDetailView
                    bid={bid}
                    project={project}
                    educator={educator}
                    allBids={projectBids}
                    navigateTo={navigateTo}
                    onUpdateBidTaskStatus={handleUpdateBidTaskStatus}
                />
            }
        }
        return <p>لم يتم العثور على العرض.</p>;
      case 'educators':
        return <EducatorsView educators={educators.filter(e => e.status === EducatorStatus.ACTIVE || e.status === EducatorStatus.INACTIVE || e.status === EducatorStatus.SUSPENDED || e.status === EducatorStatus.BANNED)} onInvite={() => setInviteModalOpen(true)} />;
       case 'educatorApplications':
        return <EducatorApplicationsView applications={educatorApplications.filter(app => app.status === EducatorStatus.PENDING_REVIEW)} educators={educators} navigateTo={navigateTo} />;
       case 'educatorApplicationDetail':
         if (application) {
            const applicant = educators.find(e => e.id === application.educatorId);
            if (applicant) {
                 return <EducatorApplicationDetailView 
                    application={application}
                    educator={applicant}
                    navigateTo={navigateTo}
                    onUpdateStatus={handleUpdateEducatorApplicationStatus}
                    onUpdateDocumentStatus={handleUpdateDocumentStatus}
                 />
            }
         }
         return <p>لم يتم العثور على الطلب.</p>;
       case 'rejectedEducators':
          return <RejectedEducatorsView applications={educatorApplications.filter(app => app.status === EducatorStatus.REJECTED)} educators={educators} navigateTo={navigateTo} />;
      case 'users':
        return <UsersView users={users} educationalRequests={educationalRequests} navigateTo={navigateTo} onDeleteUser={handleDeleteUser} onUpdateUserStatus={handleUpdateUserStatus} />;
      case 'userDetail':
        if (user) {
            return <UserDetailView user={user} requests={educationalRequests} projects={projects} navigateTo={navigateTo} onUpdateStatus={handleUpdateUserStatus} />;
        }
        return <UsersView users={users} educationalRequests={educationalRequests} navigateTo={navigateTo} onDeleteUser={handleDeleteUser} onUpdateUserStatus={handleUpdateUserStatus} />;
      case 'settings': return <SettingsView />;
      case 'educationalRequests':
        return <EducationalRequestsView requests={educationalRequests} projects={projects} users={users} navigateTo={navigateTo} />;
      case 'requestDetail':
        if (request) {
          return <RequestDetailView 
                    request={request}
                    users={users}
                    linkedProject={projects.find(p => p.educationalRequestId === request.id) || null}
                    navigateTo={navigateTo}
                    onUpdateRequestStatus={handleUpdateRequestStatus}
                    onUpdatePaymentStatus={handleUpdatePaymentStatus}
                    onUpdateFulfillmentStatus={handleUpdateFulfillmentStatus}
                    onUpdateRequest={handleUpdateRequest}
                    onAddNote={handleAddRequestNote}
                  />;
        }
        return <EducationalRequestsView requests={educationalRequests} projects={projects} users={users} navigateTo={navigateTo} />;
      case 'finance': return <FinanceView invoices={invoices} users={users} projects={projects} navigateTo={navigateTo} />;
      case 'reports': return <ReportsView projects={projects} educators={educators} invoices={invoices} />;
      case 'calendar': return <CalendarView projects={projects} navigateTo={navigateTo} />;
      default:
        return <DashboardView navigateTo={navigateTo} projects={projects} bids={bids} educators={educators} activities={activities} />;
    }
  };

  const unreadNotificationsCount = appNotifications.filter(n => !n.isRead).length;

  return (
    <div className="flex h-screen bg-gray-100/50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 font-sans">
      <Sidebar 
        currentView={currentView} 
        navigateTo={navigateTo} 
        isCollapsed={isSidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
       <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'lg:mr-20' : 'lg:mr-64'}`}>
        <Header 
          currentView={currentView}
          onNotificationClick={() => setNotificationsPanelOpen(!isNotificationsPanelOpen)}
          unreadCount={unreadNotificationsCount}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 lg:pb-8 pb-24">
            {renderContent()}
        </main>
      </div>

      <NotificationsPanel
        isOpen={isNotificationsPanelOpen}
        onClose={() => setNotificationsPanelOpen(false)}
        notifications={appNotifications}
        setNotifications={setAppNotifications}
        navigateTo={navigateTo}
      />

      <ToastContainer notifications={notifications} />
      <InviteEducatorModal isOpen={isInviteModalOpen} onClose={() => setInviteModalOpen(false)} onInvite={handleInviteEducator} />
      <BottomNavBar currentView={currentView} navigateTo={navigateTo} onMenuClick={() => setMobileMenuOpen(true)}/>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} currentView={currentView} navigateTo={navigateTo}/>
    </div>
  );
};

export default App;