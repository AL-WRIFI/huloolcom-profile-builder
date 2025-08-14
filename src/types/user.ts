export enum UserStatus {
  ACTIVE = 'نشط',
  SUSPENDED = 'معلق',
  BANNED = 'محظور',
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  avatarUrl: string;
  status: UserStatus;
  registrationDate: string;
}