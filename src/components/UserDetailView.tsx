import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const UserDetailView: React.FC = () => {
  const { selectedUserId, navigateTo } = useAppStore();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">تفاصيل المستخدم</h1>
          <p className="text-muted-foreground">مستخدم رقم: {selectedUserId}</p>
        </div>
        <Button onClick={() => navigateTo('users')}>
          العودة للمستخدمين
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* معلومات المستخدم الأساسية */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-start gap-6 mb-6">
              <img 
                src={`https://i.pravatar.cc/120?u=user-${selectedUserId}`}
                alt="صورة المستخدم"
                className="w-24 h-24 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">د. أحمد محمد علي</h2>
                <p className="text-muted-foreground mb-2">متخصص في الرياضيات والفيزياء</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    نشط
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    ⭐ 4.9
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>انضم في: مارس 2023</span>
                  <span>آخر نشاط: منذ ساعتين</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">البريد الإلكتروني</label>
                <p className="font-medium">ahmed.mohamed@email.com</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">رقم الهاتف</label>
                <p className="font-medium">+966 50 123 4567</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">الموقع</label>
                <p className="font-medium">الرياض، السعودية</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">التخصص</label>
                <p className="font-medium">الرياضيات التطبيقية</p>
              </div>
            </div>
          </div>

          {/* المشاريع */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">المشاريع المشارك فيها</h3>
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
                  <div>
                    <h4 className="font-medium">مشروع تطوير منصة تعليمية {index + 1}</h4>
                    <p className="text-sm text-muted-foreground">دور: {index === 0 ? 'مطور رئيسي' : 'مستشار تقني'}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    index < 2 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {index < 2 ? 'مكتمل' : 'قيد التنفيذ'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* التقييمات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">التقييمات الأخيرة</h3>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <span key={star} className={star < 4 ? 'text-yellow-400' : 'text-gray-300'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">منذ {index + 1} أسبوع</span>
                  </div>
                  <p className="text-sm">
                    عمل ممتاز ومحترف، تم تسليم المشروع في الوقت المحدد بجودة عالية.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    من: مؤسسة التعليم المتقدم
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* الشريط الجانبي */}
        <div className="space-y-6">
          {/* الإحصائيات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الإحصائيات</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">المشاريع المكتملة</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">قيد التنفيذ</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">متوسط التقييم</span>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">معدل الإنجاز</span>
                <span className="font-semibold text-green-600">98%</span>
              </div>
            </div>
          </div>

          {/* المهارات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">المهارات</h3>
            <div className="flex flex-wrap gap-2">
              {['الرياضيات', 'الفيزياء', 'البرمجة', 'التحليل', 'التدريس'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* الإجراءات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الإجراءات</h3>
            <div className="space-y-2">
              <Button className="w-full">
                إرسال رسالة
              </Button>
              <Button variant="outline" className="w-full">
                عرض الملف الشخصي
              </Button>
              <Button variant="outline" className="w-full">
                إدارة الصلاحيات
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailView;