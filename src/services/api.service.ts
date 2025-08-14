import { Project, Bid, User, Educator, EducationalRequest, EducatorApplication, Invoice } from '@/types';

class ApiService {
  private baseUrl = '/api'; // This would be your actual API base URL

  // Generic HTTP methods
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return this.request<Project[]>('/projects');
  }

  async getProject(id: string): Promise<Project> {
    return this.request<Project>(`/projects/${id}`);
  }

  async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    return this.request<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  }

  async updateProject(id: string, project: Partial<Project>): Promise<Project> {
    return this.request<Project>(`/projects/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(project),
    });
  }

  async deleteProject(id: string): Promise<void> {
    return this.request<void>(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Bids
  async getBids(): Promise<Bid[]> {
    return this.request<Bid[]>('/bids');
  }

  async getBid(id: string): Promise<Bid> {
    return this.request<Bid>(`/bids/${id}`);
  }

  async createBid(bid: Omit<Bid, 'id'>): Promise<Bid> {
    return this.request<Bid>('/bids', {
      method: 'POST',
      body: JSON.stringify(bid),
    });
  }

  async updateBid(id: string, bid: Partial<Bid>): Promise<Bid> {
    return this.request<Bid>(`/bids/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(bid),
    });
  }

  // Users
  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  async getUser(id: string): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    return this.request<User>(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
    });
  }

  // Educators
  async getEducators(): Promise<Educator[]> {
    return this.request<Educator[]>('/educators');
  }

  async getEducator(id: string): Promise<Educator> {
    return this.request<Educator>(`/educators/${id}`);
  }

  async createEducator(educator: Omit<Educator, 'id'>): Promise<Educator> {
    return this.request<Educator>('/educators', {
      method: 'POST',
      body: JSON.stringify(educator),
    });
  }

  async updateEducator(id: string, educator: Partial<Educator>): Promise<Educator> {
    return this.request<Educator>(`/educators/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(educator),
    });
  }

  // Educational Requests
  async getEducationalRequests(): Promise<EducationalRequest[]> {
    return this.request<EducationalRequest[]>('/educational-requests');
  }

  async getEducationalRequest(id: string): Promise<EducationalRequest> {
    return this.request<EducationalRequest>(`/educational-requests/${id}`);
  }

  async createEducationalRequest(request: Omit<EducationalRequest, 'id'>): Promise<EducationalRequest> {
    return this.request<EducationalRequest>('/educational-requests', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async updateEducationalRequest(id: string, request: Partial<EducationalRequest>): Promise<EducationalRequest> {
    return this.request<EducationalRequest>(`/educational-requests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(request),
    });
  }

  // Educator Applications
  async getEducatorApplications(): Promise<EducatorApplication[]> {
    return this.request<EducatorApplication[]>('/educator-applications');
  }

  async getEducatorApplication(id: string): Promise<EducatorApplication> {
    return this.request<EducatorApplication>(`/educator-applications/${id}`);
  }

  async updateEducatorApplication(id: string, application: Partial<EducatorApplication>): Promise<EducatorApplication> {
    return this.request<EducatorApplication>(`/educator-applications/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(application),
    });
  }

  // Invoices
  async getInvoices(): Promise<Invoice[]> {
    return this.request<Invoice[]>('/invoices');
  }

  async getInvoice(id: string): Promise<Invoice> {
    return this.request<Invoice>(`/invoices/${id}`);
  }

  async createInvoice(invoice: Omit<Invoice, 'id'>): Promise<Invoice> {
    return this.request<Invoice>('/invoices', {
      method: 'POST',
      body: JSON.stringify(invoice),
    });
  }

  async updateInvoice(id: string, invoice: Partial<Invoice>): Promise<Invoice> {
    return this.request<Invoice>(`/invoices/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(invoice),
    });
  }

  // File Upload
  async uploadFile(file: File, folder = 'uploads'): Promise<{ url: string; filename: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const response = await fetch(`${this.baseUrl}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed! status: ${response.status}`);
    }

    return response.json();
  }
}

export const apiService = new ApiService();