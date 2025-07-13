
import React from 'react';
import { BookOpen, PenTool, Users, Trophy, CheckCircle, Star, ArrowRight, Play } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "أبحاث عالية الجودة",
      description: "نقدم أبحاث أكاديمية متميزة تلبي أعلى المعايير العلمية"
    },
    {
      icon: <PenTool className="h-8 w-8 text-green-600" />,
      title: "كتابة احترافية",
      description: "فريق من الكتاب المحترفين لإنجاز مهامك الأكاديمية"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "دعم مستمر",
      description: "نوفر الدعم والمتابعة طوال فترة العمل على مشروعك"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      title: "ضمان التميز",
      description: "نضمن لك الحصول على نتائج متميزة تحقق أهدافك الأكاديمية"
    }
  ];

  const stats = [
    { number: "2500+", label: "مشروع مكتمل" },
    { number: "500+", label: "طالب راضي" },
    { number: "50+", label: "خبير أكاديمي" },
    { number: "98%", label: "معدل الرضا" }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "طالب دكتوراه",
      text: "خدمة ممتازة وجودة عالية في البحث. انصح بشدة بالتعامل معهم.",
      rating: 5
    },
    {
      name: "فاطمة السالم",
      role: "طالبة ماجستير",
      text: "تم إنجاز البحث في الوقت المحدد وبأعلى المعايير المطلوبة.",
      rating: 5
    },
    {
      name: "محمد العلي",
      role: "طالب بكالوريوس",
      text: "فريق محترف ومتعاون، ساعدوني في تحقيق أهدافي الأكاديمية.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Huloolcom
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-blue-600 font-medium">الرئيسية</a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">الخدمات</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">تواصل معنا</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">تسجيل الدخول</a>
              <a href="/register" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                إنشاء حساب
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600/10 via-white to-purple-600/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233b82f6\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              🎓 منصة الخدمات الأكاديمية الأولى
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-gray-900 to-purple-600 bg-clip-text text-transparent">
              حلول أكاديمية شاملة
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم خدمات أكاديمية متخصصة عالية الجودة لمساعدة الطلاب والباحثين في تحقيق أهدافهم العلمية والوصول للتميز الأكاديمي
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 rounded-md px-8 text-lg py-6 shadow-lg hover:shadow-xl">
                <Play className="h-5 w-5 ml-2" />
                ابدأ مشروعك الآن
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-11 rounded-md px-8 text-lg py-6">
                تعرف على خدماتنا
                <ArrowRight className="h-5 w-5 mr-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
              ✨ مميزاتنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              لماذا تختار Huloolcom؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات أكاديمية متميزة بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              💬 آراء العملاء
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ماذا يقول عملاؤنا
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/10 via-white to-purple-600/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ابدأ رحلتك الأكاديمية معنا
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              انضم إلى آلاف الطلاب الذين حققوا النجاح الأكاديمي من خلال خدماتنا المتميزة
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 rounded-md px-8 text-lg py-6 shadow-lg hover:shadow-xl">
              احصل على استشارة مجانية
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-11 rounded-md px-8 text-lg py-6">
              تصفح جميع الخدمات
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100/20 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Huloolcom
            </div>
            <p className="text-gray-600 mb-8">
              منصة الخدمات الأكاديمية الأولى في المنطقة
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">
                سياسة الخصوصية
              </a>
              <a href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">
                الشروط والأحكام
              </a>
              <a href="/contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                تواصل معنا
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Huloolcom. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
