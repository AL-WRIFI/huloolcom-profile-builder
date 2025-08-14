import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const EducatorsView: React.FC = () => {
  const { educators, navigateTo } = useAppStore();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">المتخصصون</h1>
        <Button onClick={() => navigateTo('educatorApplications')}>
          طلبات التسجيل
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigateTo('userDetail', `educator-${index}`)}
          >
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={`https://i.pravatar.cc/64?u=educator-${index}`}
                alt="صورة المتخصص"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">د. أحمد محمد {index + 1}</h3>
                <p className="text-muted-foreground">متخصص في الرياضيات</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                  متاح
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  ⭐ 4.8
                </span>
              </div>
              <span className="text-sm text-muted-foreground">5 مشاريع</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducatorsView;