
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              منصة الخدمات الأكاديمية الموثوقة
            </h1>
            <p className="text-xl mb-8 opacity-90">
              احصل على أفضل الخدمات الأكاديمية من مزودي خدمات معتمدين ومتخصصين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                ابدأ الآن
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                تعرف على المزيد
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تختارنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نوفر لك أفضل تجربة في الحصول على الخدمات الأكاديمية المتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">جودة مضمونة</h3>
              <p className="text-gray-600">جميع مزودي الخدمات معتمدين ومتخصصين</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">سرعة في التنفيذ</h3>
              <p className="text-gray-600">تسليم الخدمات في الوقت المحدد</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-2-4h4m-4 0a1 1 0 00-1-1H9.5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1m-6 0V9a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">دعم متواصل</h3>
              <p className="text-gray-600">فريق دعم متاح على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا المتنوعة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الأكاديمية لتلبية جميع احتياجاتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">البحوث الأكاديمية</h3>
              <p className="text-blue-700 text-sm">إعداد البحوث والدراسات الأكاديمية</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">حل الواجبات</h3>
              <p className="text-green-700 text-sm">حل الواجبات والتكاليف الدراسية</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">مشاريع التخرج</h3>
              <p className="text-purple-700 text-sm">إعداد مشاريع التخرج والرسائل</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">الترجمة</h3>
              <p className="text-orange-700 text-sm">خدمات الترجمة الأكاديمية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للبدء؟</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين يثقون بخدماتنا لتحقيق النجاح الأكاديمي
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            ابدأ رحلتك الآن
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
