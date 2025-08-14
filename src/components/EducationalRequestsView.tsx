import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const EducationalRequestsView: React.FC = () => {
  const { educationalRequests, navigateTo } = useAppStore();

  const requestStatuses = ['معلق', 'قيد المراجعة', 'مقبول', 'مرفوض'];
  const subjects = ['الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء', 'اللغة العربية'];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">الطلبات الأكاديمية</h1>
        <Button onClick={() => navigateTo('createProject')}>
          طلب جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigateTo('requestDetail', `request-${index}`)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">طلب أكاديمي #{index + 1}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${
                index % 4 === 0 ? 'bg-yellow-100 text-yellow-700' :
                index % 4 === 1 ? 'bg-blue-100 text-blue-700' :
                index % 4 === 2 ? 'bg-green-100 text-green-700' :
                'bg-red-100 text-red-700'
              }`}>
                {requestStatuses[index % 4]}
              </span>
            </div>
            <p className="text-muted-foreground mb-3">
              طلب مساعدة في {subjects[index % 5]}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                منذ {Math.floor(Math.random() * 5) + 1} أيام
              </span>
              <span className="font-semibold text-primary">
                {(Math.random() * 2000 + 500).toFixed(0)} ريال
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalRequestsView;