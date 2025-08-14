import React from 'react';
import { useAppStore } from '../stores/app-store';
import { Button } from './ui/button';

const TaskDetailView: React.FC = () => {
  const { selectedTaskId, selectedProjectId, navigateTo } = useAppStore();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">تفاصيل المهمة</h1>
          <p className="text-muted-foreground">
            مهمة رقم: {selectedTaskId} - مشروع: {selectedProjectId}
          </p>
        </div>
        <Button onClick={() => navigateTo('projectDetail', selectedProjectId)}>
          العودة للمشروع
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* تفاصيل المهمة الرئيسية */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-lg border p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">تصميم واجهة المستخدم الرئيسية</h2>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                قيد التنفيذ
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              تصميم واجهة المستخدم الرئيسية للمنصة التعليمية مع التركيز على تجربة المستخدم
              وسهولة الاستخدام. يجب أن تكون الواجهة متجاوبة ومتوافقة مع جميع الأجهزة.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground">تاريخ البداية</label>
                <p className="font-semibold">20 مارس 2024</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">تاريخ النهاية</label>
                <p className="font-semibold">5 أبريل 2024</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">الأولوية</label>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">عالية</span>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">المخصص لـ</label>
                <p className="font-semibold">د. فاطمة علي</p>
              </div>
            </div>

            {/* شريط التقدم */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">تقدم المهمة</label>
                <span className="text-sm font-semibold">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* المتطلبات */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">المتطلبات</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <input type="checkbox" checked className="w-4 h-4" readOnly />
                  <span className="line-through text-muted-foreground">إنشاء النماذج الأولية</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" checked className="w-4 h-4" readOnly />
                  <span className="line-through text-muted-foreground">تصميم الصفحة الرئيسية</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>تصميم صفحات المستخدم</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>اختبار التجاوب</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>مراجعة نهائية</span>
                </li>
              </ul>
            </div>
          </div>

          {/* التعليقات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">التعليقات والتحديثات</h3>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <img 
                      src={`https://i.pravatar.cc/40?u=comment-${index}`}
                      alt="المعلق"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">
                          {index === 0 ? 'د. فاطمة علي' : index === 1 ? 'أحمد محمد' : 'سارة خالد'}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          منذ {index + 1} ساعة
                        </span>
                      </div>
                      <p className="text-sm">
                        {index === 0 ? 'تم الانتهاء من تصميم الصفحة الرئيسية، جاري العمل على صفحات المستخدم.' :
                         index === 1 ? 'التصميم يبدو رائعاً، لدي بعض الملاحظات الطفيفة.' :
                         'شكراً لك على التحديث، متى متوقع الانتهاء من الاختبارات؟'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* إضافة تعليق جديد */}
              <div className="pt-4">
                <textarea 
                  className="w-full p-3 border rounded-lg resize-none"
                  placeholder="إضافة تعليق..."
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <Button size="sm">إرسال</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الشريط الجانبي */}
        <div className="space-y-6">
          {/* معلومات المهمة */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">معلومات المهمة</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-muted-foreground">النوع</label>
                <p className="font-medium">تصميم واجهة</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">الفئة</label>
                <p className="font-medium">تطوير المنتج</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">الوقت المتوقع</label>
                <p className="font-medium">40 ساعة</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">الوقت المنقضي</label>
                <p className="font-medium">26 ساعة</p>
              </div>
            </div>
          </div>

          {/* الملفات المرفقة */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الملفات المرفقة</h3>
            <div className="space-y-2">
              {['mockup-v1.fig', 'requirements.pdf', 'assets.zip'].map((file, index) => (
                <div key={index} className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    📄
                  </div>
                  <span className="text-sm">{file}</span>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-3">
                إضافة ملف
              </Button>
            </div>
          </div>

          {/* الإجراءات */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">الإجراءات</h3>
            <div className="space-y-2">
              <Button className="w-full">
                تحديث الحالة
              </Button>
              <Button variant="outline" className="w-full">
                تعديل المهمة
              </Button>
              <Button variant="outline" className="w-full">
                تخصيص لمستخدم آخر
              </Button>
              <Button variant="outline" className="w-full text-red-600">
                حذف المهمة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailView;