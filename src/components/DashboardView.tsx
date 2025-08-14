import React from 'react';

interface DashboardViewProps {
  navigateTo?: any;
  projects?: any;
  bids?: any;
  educators?: any;
  activities?: any;
}

const DashboardView: React.FC<DashboardViewProps> = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          مرحباً بك في حلولكم
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          منصة إدارة المشاريع الأكاديمية والتعليمية
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">المشاريع</h3>
          <p className="text-3xl font-bold text-primary">24</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">المتخصصون</h3>
          <p className="text-3xl font-bold text-green-600">156</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">المستخدمون</h3>
          <p className="text-3xl font-bold text-blue-600">432</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">الطلبات</h3>
          <p className="text-3xl font-bold text-purple-600">89</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;