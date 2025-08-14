import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const FinanceView: React.FC = () => {
  const { invoices, navigateTo } = useAppStore();

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">المالية</h1>
      
      {/* إحصائيات مالية */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-medium mb-2">إجمالي الإيرادات</h3>
          <p className="text-3xl font-bold">285,450 ريال</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-medium mb-2">المدفوعات المعلقة</h3>
          <p className="text-3xl font-bold">45,200 ريال</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-medium mb-2">عدد الفواتير</h3>
          <p className="text-3xl font-bold">127</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <h3 className="text-lg font-medium mb-2">متوسط الفاتورة</h3>
          <p className="text-3xl font-bold">2,247 ريال</p>
        </div>
      </div>

      {/* قائمة الفواتير */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">الفواتير الحديثة</h2>
        </div>
        <div className="divide-y">
          {Array.from({ length: 10 }).map((_, index) => (
            <div 
              key={index}
              className="p-6 hover:bg-muted/50 cursor-pointer transition-colors"
              onClick={() => navigateTo('invoiceDetail', `invoice-${index}`)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">فاتورة #{1000 + index}</h3>
                  <p className="text-muted-foreground text-sm">
                    مشروع تعليمي - د. أحمد محمد
                  </p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">
                    {(Math.random() * 5000 + 1000).toFixed(0)} ريال
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    index % 3 === 0 ? 'bg-green-100 text-green-700' :
                    index % 3 === 1 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {index % 3 === 0 ? 'مدفوعة' : index % 3 === 1 ? 'معلقة' : 'متأخرة'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceView;