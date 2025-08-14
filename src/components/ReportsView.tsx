import React from 'react';
import { useAppStore } from '../stores/app-store';

const ReportsView: React.FC = () => {
  const { projects, users, educators } = useAppStore();

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">التقارير والتحليلات</h1>
      
      {/* مؤشرات الأداء الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">معدل إنجاز المشاريع</h3>
          <p className="text-3xl font-bold text-green-600">87%</p>
          <p className="text-sm text-green-600 mt-1">+5% من الشهر الماضي</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">رضا المستخدمين</h3>
          <p className="text-3xl font-bold text-blue-600">4.8/5</p>
          <p className="text-sm text-blue-600 mt-1">⭐ تقييم ممتاز</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">نمو المستخدمين</h3>
          <p className="text-3xl font-bold text-purple-600">+23%</p>
          <p className="text-sm text-purple-600 mt-1">نمو شهري</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">متوسط وقت الاستجابة</h3>
          <p className="text-3xl font-bold text-orange-600">2.4 ساعة</p>
          <p className="text-sm text-orange-600 mt-1">أداء ممتاز</p>
        </div>
      </div>

      {/* الرسوم البيانية */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">المشاريع الشهرية</h3>
          <div className="h-64 bg-gradient-to-t from-primary/10 to-primary/5 rounded-lg flex items-end justify-center">
            <p className="text-muted-foreground">رسم بياني للمشاريع</p>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4">الإيرادات</h3>
          <div className="h-64 bg-gradient-to-t from-green-500/10 to-green-500/5 rounded-lg flex items-end justify-center">
            <p className="text-muted-foreground">رسم بياني للإيرادات</p>
          </div>
        </div>
      </div>

      {/* إحصائيات مفصلة */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">إحصائيات مفصلة</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">المشاريع</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المكتملة</span>
                  <span className="font-medium">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">قيد التنفيذ</span>
                  <span className="font-medium">38</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">معلقة</span>
                  <span className="font-medium">15</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">المتخصصون</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">نشط</span>
                  <span className="font-medium">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">غير متاح</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">جديد</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">المالية</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">إجمالي الإيرادات</span>
                  <span className="font-medium">285,450 ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">متوسط المشروع</span>
                  <span className="font-medium">2,247 ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">نمو الإيرادات</span>
                  <span className="font-medium text-green-600">+18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;