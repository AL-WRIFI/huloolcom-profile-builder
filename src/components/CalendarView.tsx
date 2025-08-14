import React from 'react';
import { useAppStore } from '../stores/app-store';

const CalendarView: React.FC = () => {
  const { projects } = useAppStore();

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

  const monthNames = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  const weekDays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">الجدول الزمني</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* التقويم */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-muted rounded-lg">
                  ←
                </button>
                <button className="p-2 hover:bg-muted rounded-lg">
                  →
                </button>
              </div>
            </div>

            {/* أيام الأسبوع */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            {/* أيام الشهر */}
            <div className="grid grid-cols-7 gap-1">
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="p-2 h-24"></div>
              ))}
              {days.map(day => (
                <div 
                  key={day} 
                  className={`p-2 h-24 border rounded-lg hover:bg-muted cursor-pointer ${
                    day === currentDate.getDate() ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  <div className="font-medium text-sm">{day}</div>
                  {/* أحداث اليوم */}
                  {day % 7 === 0 && (
                    <div className="mt-1">
                      <div className="bg-green-100 text-green-700 text-xs p-1 rounded">
                        اجتماع
                      </div>
                    </div>
                  )}
                  {day % 5 === 0 && day !== currentDate.getDate() && (
                    <div className="mt-1">
                      <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
                        مهمة
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* الأحداث القادمة */}
        <div>
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الأحداث القادمة</h3>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-muted">
                  <div className={`w-3 h-3 rounded-full mt-1 ${
                    index % 3 === 0 ? 'bg-green-500' :
                    index % 3 === 1 ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">
                      {index % 3 === 0 ? 'اجتماع فريق' :
                       index % 3 === 1 ? 'تسليم مشروع' : 'مراجعة طلب'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      غداً الساعة {10 + index}:00 ص
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* إحصائيات سريعة */}
          <div className="bg-card rounded-lg border p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">هذا الأسبوع</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">مشاريع مكتملة</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">اجتماعات</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">مهام جديدة</span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ساعات العمل</span>
                <span className="font-medium">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;