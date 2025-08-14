import { ViewType } from './common';

export interface AppNotification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  link?: { view: ViewType; id: string };
  isRead: boolean;
  timestamp: string;
  icon: 'bid' | 'task' | 'project' | 'user' | 'invoice' | 'request' | 'application';
}