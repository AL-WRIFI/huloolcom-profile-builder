import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const ProjectDetailView: React.FC = () => {
  const { selectedProjectId, navigateTo } = useAppStore();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">تفاصيل المشروع</h1>
          <p className="text-muted-foreground">مشروع رقم: {selectedProjectId}</p>
        </div>
        <Button onClick={() => navigateTo('projects')}>
          العودة للمشاريع
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* تفاصيل المشروع الرئيسية */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-lg border p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">مشروع تطوير منصة تعليمية</h2>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                قيد التنفيذ
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              مشروع شامل لتطوير منصة تعليمية تفاعلية تهدف إلى تحسين جودة التعليم وتوفير 
              تجربة تعلم مميزة للطلاب. المشروع يتضمن تطوير واجهة المستخدم، قاعدة البيانات، 
              وأنظمة إدارة المحتوى التعليمي.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground">تاريخ البداية</label>
                <p className="font-semibold">15 مارس 2024</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">تاريخ النهاية</label>
                <p className="font-semibold">30 يونيو 2024</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">الميزانية</label>
                <p className="font-semibold text-green-600">45,000 ريال</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">المنفق</label>
                <p className="font-semibold">32,500 ريال</p>
              </div>
            </div>

            {/* شريط التقدم */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">التقدم العام</label>
                <span className="text-sm font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* المهام */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">المهام</h3>
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer"
                  onClick={() => navigateTo('taskDetail', { projectId: selectedProjectId!, taskId: `task-${index}` })}
                >
                  <input 
                    type="checkbox" 
                    checked={index < 4} 
                    className="w-4 h-4"
                    readOnly
                  />
                  <div className="flex-1">
                    <h4 className={`font-medium ${index < 4 ? 'line-through text-muted-foreground' : ''}`}>
                      {index === 0 ? 'تصميم واجهة المستخدم' :
                       index === 1 ? 'تطوير قاعدة البيانات' :
                       index === 2 ? 'تطوير نظام المصادقة' :
                       index === 3 ? 'إنشاء لوحة التحكم' :
                       index === 4 ? 'اختبار النظام' : 'نشر المشروع'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      مخصصة لـ د. أحمد محمد
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    index < 4 ? 'bg-green-100 text-green-700' :
                    index === 4 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {index < 4 ? 'مكتملة' : index === 4 ? 'قيد التنفيذ' : 'معلقة'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* الشريط الجانبي */}
        <div className="space-y-6">
          {/* فريق المشروع */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">فريق المشروع</h3>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img 
                    src={`https://i.pravatar.cc/40?u=team-${index}`}
                    alt="عضو الفريق"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">د. {index === 0 ? 'أحمد محمد' : index === 1 ? 'فاطمة علي' : 'محمد سالم'}</h4>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 ? 'مطور رئيسي' : index === 1 ? 'مصممة واجهات' : 'مطور خلفية'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الملفات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الملفات</h3>
            <div className="space-y-2">
              {['متطلبات المشروع.pdf', 'التصميم الأولي.fig', 'دليل المستخدم.docx'].map((file, index) => (
                <div key={index} className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    📄
                  </div>
                  <span className="text-sm">{file}</span>
                </div>
              ))}
            </div>
          </div>

          {/* الإجراءات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الإجراءات</h3>
            <div className="space-y-2">
              <Button className="w-full" onClick={() => navigateTo('projects')}>
                عرض العروض
              </Button>
              <Button variant="outline" className="w-full">
                تحرير المشروع
              </Button>
              <Button variant="outline" className="w-full">
                إضافة مهمة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;