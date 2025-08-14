import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { 
  ViewType, 
  Project, 
  Bid, 
  User, 
  Educator, 
  EducationalRequest, 
  EducatorApplication, 
  Invoice, 
  AppNotification,
  ToastNotification 
} from '@/types';

interface AppState {
  // View Management
  currentView: ViewType;
  selectedProjectId: string | null;
  selectedRequestId: string | null;
  selectedBidId: string | null;
  selectedTaskId: string | null;
  selectedApplicationId: string | null;
  selectedUserId: string | null;
  selectedInvoiceId: string | null;

  // Data
  projects: Project[];
  bids: Bid[];
  users: User[];
  educators: Educator[];
  activities: any[];
  educationalRequests: EducationalRequest[];
  educatorApplications: EducatorApplication[];
  invoices: Invoice[];
  appNotifications: AppNotification[];
  toastNotifications: ToastNotification[];

  // UI State
  isSidebarCollapsed: boolean;
  isMobileMenuOpen: boolean;
  isNotificationsPanelOpen: boolean;
}

interface AppActions {
  // Navigation
  navigateTo: (view: ViewType, id?: string | { projectId: string; taskId: string } | null) => void;
  
  // UI Actions
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setNotificationsPanelOpen: (open: boolean) => void;
  
  // Data Actions
  setProjects: (projects: Project[]) => void;
  setBids: (bids: Bid[]) => void;
  setUsers: (users: User[]) => void;
  setEducators: (educators: Educator[]) => void;
  setEducationalRequests: (requests: EducationalRequest[]) => void;
  setEducatorApplications: (applications: EducatorApplication[]) => void;
  setInvoices: (invoices: Invoice[]) => void;
  setAppNotifications: (notifications: AppNotification[]) => void;
  
  // Toast Management
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

export const useAppStore = create<AppState & AppActions>()(
  subscribeWithSelector((set, get) => ({
    // Initial State
    currentView: 'dashboard',
    selectedProjectId: null,
    selectedRequestId: null,
    selectedBidId: null,
    selectedTaskId: null,
    selectedApplicationId: null,
    selectedUserId: null,
    selectedInvoiceId: null,
    
    projects: [],
    bids: [],
    users: [],
    educators: [],
    activities: [],
    educationalRequests: [],
    educatorApplications: [],
    invoices: [],
    appNotifications: [],
    toastNotifications: [],
    
    isSidebarCollapsed: false,
    isMobileMenuOpen: false,
    isNotificationsPanelOpen: false,

    // Actions
    navigateTo: (view, id = null) => {
      set((state) => {
        const newState = {
          ...state,
          currentView: view,
          selectedProjectId: null,
          selectedRequestId: null,
          selectedBidId: null,
          selectedTaskId: null,
          selectedApplicationId: null,
          selectedUserId: null,
          selectedInvoiceId: null,
          isMobileMenuOpen: false,
          isNotificationsPanelOpen: false,
        };

        if (view === 'taskDetail' && typeof id === 'object' && id !== null) {
          newState.selectedProjectId = id.projectId;
          newState.selectedTaskId = id.taskId;
        } else if (typeof id === 'string') {
          switch(view) {
            case 'projectDetail': 
              newState.selectedProjectId = id; 
              break;
            case 'requestDetail':
            case 'createProject': 
              newState.selectedRequestId = id; 
              break;
            case 'bidDetail':
              const bid = state.bids.find(b => b.id === id);
              if (bid) {
                newState.selectedProjectId = bid.projectId;
                newState.selectedBidId = id;
              }
              break;
            case 'educatorApplicationDetail': 
              newState.selectedApplicationId = id; 
              break;
            case 'userDetail': 
              newState.selectedUserId = id; 
              break;
            case 'invoiceDetail': 
              newState.selectedInvoiceId = id; 
              break;
            case 'taskDetail':
              const project = state.projects.find(p => p.tasks.some(t => t.id === id));
              newState.selectedProjectId = project?.id ?? null;
              newState.selectedTaskId = id;
              break;
          }
        }

        return newState;
      });
    },

    setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
    setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
    setNotificationsPanelOpen: (open) => set({ isNotificationsPanelOpen: open }),

    setProjects: (projects) => set({ projects }),
    setBids: (bids) => set({ bids }),
    setUsers: (users) => set({ users }),
    setEducators: (educators) => set({ educators }),
    setEducationalRequests: (requests) => set({ educationalRequests: requests }),
    setEducatorApplications: (applications) => set({ educatorApplications: applications }),
    setInvoices: (invoices) => set({ invoices }),
    setAppNotifications: (notifications) => set({ appNotifications: notifications }),

    addToast: (message, type = 'info') => {
      const id = `toast-${Date.now()}`;
      const newToast = { id, message, type };
      
      set((state) => ({
        toastNotifications: [...state.toastNotifications, newToast]
      }));

      setTimeout(() => {
        set((state) => ({
          toastNotifications: state.toastNotifications.filter(n => n.id !== id)
        }));
      }, 5000);
    },

    removeToast: (id) => {
      set((state) => ({
        toastNotifications: state.toastNotifications.filter(n => n.id !== id)
      }));
    },
  }))
);