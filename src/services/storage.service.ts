class StorageService {
  private prefix = 'holoolokom_';

  set<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(this.prefix + key, serializedValue);
    } catch (error) {
      console.error(`Error saving to localStorage with key "${key}":`, error);
    }
  }

  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(this.prefix + key);
      if (item === null) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error reading from localStorage with key "${key}":`, error);
      return defaultValue;
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(this.prefix + key);
    } catch (error) {
      console.error(`Error removing from localStorage with key "${key}":`, error);
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }

  // Specific methods for app data
  saveProjects(projects: any[]): void {
    this.set('projects', projects);
  }

  getProjects(defaultValue: any[] = []): any[] {
    return this.get('projects', defaultValue);
  }

  saveBids(bids: any[]): void {
    this.set('bids', bids);
  }

  getBids(defaultValue: any[] = []): any[] {
    return this.get('bids', defaultValue);
  }

  saveUsers(users: any[]): void {
    this.set('users', users);
  }

  getUsers(defaultValue: any[] = []): any[] {
    return this.get('users', defaultValue);
  }

  saveEducators(educators: any[]): void {
    this.set('educators', educators);
  }

  getEducators(defaultValue: any[] = []): any[] {
    return this.get('educators', defaultValue);
  }

  saveEducationalRequests(requests: any[]): void {
    this.set('educational_requests', requests);
  }

  getEducationalRequests(defaultValue: any[] = []): any[] {
    return this.get('educational_requests', defaultValue);
  }

  saveEducatorApplications(applications: any[]): void {
    this.set('educator_applications', applications);
  }

  getEducatorApplications(defaultValue: any[] = []): any[] {
    return this.get('educator_applications', defaultValue);
  }

  saveInvoices(invoices: any[]): void {
    this.set('invoices', invoices);
  }

  getInvoices(defaultValue: any[] = []): any[] {
    return this.get('invoices', defaultValue);
  }

  saveNotifications(notifications: any[]): void {
    this.set('notifications', notifications);
  }

  getNotifications(defaultValue: any[] = []): any[] {
    return this.get('notifications', defaultValue);
  }
}

export const storageService = new StorageService();