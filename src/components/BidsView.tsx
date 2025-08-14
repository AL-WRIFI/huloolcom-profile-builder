import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const BidsView: React.FC = () => {
  const { bids, navigateTo } = useAppStore();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">العروض</h1>
        <Button onClick={() => navigateTo('projects')}>
          العودة للمشاريع
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bids.slice(0, 9).map((bid, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigateTo('bidDetail', `bid-${index}`)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">عرض رقم #{index + 1}</h3>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                جديد
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              عرض مقدم للمشروع التعليمي بميزانية تنافسية
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-primary">25,000 ريال</span>
              <span className="text-sm text-muted-foreground">منذ يومين</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidsView;