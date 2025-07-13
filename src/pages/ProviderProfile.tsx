
import React from 'react';

const ProviderProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">ملف مزود الخدمة</h1>
            <p className="text-xl opacity-90">
              اطلع على تفاصيل مزود الخدمة وخبراته المتنوعة
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-gray-900">د. أحمد محمد علي</h2>
                <p className="text-gray-600">أستاذ في علوم الحاسوب</p>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-sm text-gray-600 mr-2">(4.9) · 156 تقييم</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">الرياض، السعودية</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">متاح الآن</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">15 سنة خبرة</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  تواصل معي
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  طلب خدمة
                </button>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">اللغات</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">العربية</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">لغة أم</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">الإنجليزية</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">متقدم</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">الفرنسية</span>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">متوسط</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-4">نبذة عني</h3>
              <p className="text-gray-700 leading-relaxed">
                أستاذ جامعي متخصص في علوم الحاسوب مع خبرة تزيد عن 15 عاماً في التدريس والبحث الأكاديمي. 
                حاصل على درجة الدكتوراه في الذكاء الاصطناعي من جامعة الملك سعود. أقدم خدمات متنوعة في 
                إعداد البحوث الأكاديمية، وحل الواجبات البرمجية، والتدريس الخصوصي في مختلف لغات البرمجة.
              </p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-4">الخدمات المقدمة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">البحوث الأكاديمية</h4>
                  <p className="text-sm text-gray-600 mb-3">إعداد البحوث المتخصصة في علوم الحاسوب</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">يبدأ من 300 ريال</span>
                    <button className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">اطلب الآن</button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">التدريس الخصوصي</h4>
                  <p className="text-sm text-gray-600 mb-3">دروس فردية في البرمجة وعلوم الحاسوب</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">150 ريال/ساعة</span>
                    <button className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">اطلب الآن</button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">حل الواجبات البرمجية</h4>
                  <p className="text-sm text-gray-600 mb-3">حلول متكاملة للواجبات والمشاريع</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">يبدأ من 100 ريال</span>
                    <button className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">اطلب الآن</button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">مراجعة الأكواد</h4>
                  <p className="text-sm text-gray-600 mb-3">مراجعة وتحسين الأكواد البرمجية</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">يبدأ من 80 ريال</span>
                    <button className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">اطلب الآن</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-4">الأعمال والإنجازات</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">نظام إدارة المكتبات الذكي</h4>
                  <p className="text-sm text-gray-600 mb-2">2023 · جامعة الملك سعود</p>
                  <p className="text-gray-700">تطوير نظام ذكي لإدارة المكتبات الجامعية باستخدام تقنيات الذكاء الاصطناعي</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">بحث في التعلم العميق</h4>
                  <p className="text-sm text-gray-600 mb-2">2022 · مجلة الحاسوب العربية</p>
                  <p className="text-gray-700">بحث محكم حول تطبيقات التعلم العميق في معالجة اللغة العربية</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">تطبيق الذكاء الاصطناعي للتشخيص الطبي</h4>
                  <p className="text-sm text-gray-600 mb-2">2021 · مستشفى الملك فهد</p>
                  <p className="text-gray-700">تطوير نظام ذكي لمساعدة الأطباء في التشخيص المبكر للأمراض</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-4">التقييمات</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="font-medium text-gray-900">سارة أحمد</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-gray-500">منذ أسبوع</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    خدمة ممتازة وسرعة في التنفيذ. ساعدني الدكتور أحمد في إنجاز مشروع التخرج بأعلى جودة.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="font-medium text-gray-900">محمد الشهري</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-gray-500">منذ أسبوعين</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    أستاذ متميز ويشرح بطريقة واضحة ومفهومة. أنصح بالتعامل معه.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="font-medium text-gray-900">فاطمة العلي</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="text-sm text-gray-500">منذ شهر</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    عمل جيد والتزام بالمواعيد المحددة. شكراً لك دكتور.
                  </p>
                </div>
              </div>

              <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                عرض جميع التقييمات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
