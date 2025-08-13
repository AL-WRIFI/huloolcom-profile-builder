import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((props: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...props, id };
    
    setToasts((prev) => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
    
    return { id };
  }, []);

  const dismiss = useCallback((toastId?: string) => {
    setToasts((prev) => {
      if (toastId) {
        return prev.filter((t) => t.id !== toastId);
      }
      return [];
    });
  }, []);

  return {
    toast,
    dismiss,
    toasts,
  };
}