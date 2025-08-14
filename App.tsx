import React from 'react';
import './index.css';
import { useAppStore } from './src/stores/app-store';
import { Layout } from './src/components/layout/Layout';
import DashboardView from './src/components/DashboardView';
import ProjectsView from './src/components/ProjectsView';
import SettingsView from './src/components/SettingsView';
import BidsView from './src/components/BidsView';
import EducatorsView from './src/components/EducatorsView';
import EducationalRequestsView from './src/components/EducationalRequestsView';
import FinanceView from './src/components/FinanceView';
import ReportsView from './src/components/ReportsView';
import CalendarView from './src/components/CalendarView';
import ProjectDetailView from './src/components/ProjectDetailView';
import UserDetailView from './src/components/UserDetailView';
import TaskDetailView from './src/components/TaskDetailView';
// Toast notifications will be added later

const App: React.FC = () => {
  const { currentView, toastNotifications } = useAppStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'projects':
        return <ProjectsView />;
      case 'projectDetail':
        return <ProjectDetailView />;
      case 'bids':
        return <BidsView />;
      case 'educators':
        return <EducatorsView />;
      case 'educationalRequests':
        return <EducationalRequestsView />;
      case 'finance':
        return <FinanceView />;
      case 'reports':
        return <ReportsView />;
      case 'calendar':
        return <CalendarView />;
      case 'userDetail':
        return <UserDetailView />;
      case 'taskDetail':
        return <TaskDetailView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <>
      <Layout>
        {renderCurrentView()}
      </Layout>
      
      {/* Toast notifications will be added later */}
    </>
  );
};

export default App;