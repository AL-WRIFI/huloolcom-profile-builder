
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">من نحن</h1>
            <p className="text-xl opacity-90">
              منصة رائدة في تقديم الخدمات الأكاديمية المتخصصة والموثوقة
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">رؤيتنا ورسالتنا</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">رؤيتنا</h3>
                <p className="text-blue-800 leading-relaxed">
                  أن نكون المنصة الأولى والأكثر ثقة في العالم العربي لتقديم الخدمات الأكاديمية المتخصصة، 
                  ونساهم في تطوير التعليم ودعم الطلاب في رحلتهم الأكاديمية.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">رسالتنا</h3>
                <p className="text-green-800 leading-relaxed">
                  نربط بين الطلاب ومزودي الخدمات الأكاديمية المؤهلين، ونقدم منصة آمنة وموثوقة 
                  لتقديم خدمات أكاديمية عالية الجودة تساعد في تحقيق النجاح التعليمي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا الأساسية</h2>
              <p className="text-gray-600">المبادئ التي نؤمن بها ونعمل من خلالها</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">الجودة</h3>
                <p className="text-gray-600">نلتزم بأعلى معايير الجودة في جميع خدماتنا</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">الثقة</h3>
                <p className="text-gray-600">نبني علاقات قائمة على الثقة والشفافية</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">الابتكار</h3>
                <p className="text-gray-600">نسعى للتطوير المستمر والابتكار في خدماتنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريقنا</h2>
            <p className="text-gray-600 mb-12">
              فريق متخصص من الخبراء والأكاديميين المتفانين في خدمة التعليم
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">د. أحمد محمد</h3>
                <p className="text-gray-600">المدير التنفيذي</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">د. فاطمة علي</h3>
                <p className="text-gray-600">مدير الجودة الأكاديمية</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">م. خالد سعد</h3>
                <p className="text-gray-600">مدير التطوير التقني</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
