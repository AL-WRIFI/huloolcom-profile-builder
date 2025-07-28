
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Award, BookOpen, ChevronRight, Star, Clock, MapPin } from 'lucide-react';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle } from '@/components/ui/CustomCard';
import CustomButton from '@/components/ui/CustomButton';

const Home = () => {
  const stats = [
    { number: "5000+", label: "مزود خدمة", icon: Users },
    { number: "15000+", label: "مشروع مكتمل", icon: Award },
    { number: "98%", label: "نسبة الرضا", icon: Star },
    { number: "24/7", label: "دعم فني", icon: Clock }
  ];

  const categories = [
    { name: "البرمجة والتطوير", count: "1200+ خدمة", color: "bg-blue-500" },
    { name: "التصميم الجرافيكي", count: "850+ خدمة", color: "bg-purple-500" },
    { name: "الكتابة والترجمة", count: "600+ خدمة", color: "bg-green-500" },
    { name: "التسويق الرقمي", count: "450+ خدمة", color: "bg-orange-500" }
  ];

  const featuredProviders = [
    {
      name: "أحمد محمد",
      title: "مطور Full Stack",
      rating: 4.9,
      projects: 89,
      image: "/placeholder.svg",
      specialization: "React & Node.js"
    },
    {
      name: "فاطمة علي",
      title: "مصممة UI/UX",
      rating: 4.8,
      projects: 156,
      image: "/placeholder.svg",
      specialization: "تصميم التطبيقات"
    },
    {
      name: "محمد حسن",
      title: "كاتب محتوى",
      rating: 4.9,
      projects: 234,
      image: "/placeholder.svg",
      specialization: "المحتوى التسويقي"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            منصة الخدمات الأكاديمية
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            اكتشف أفضل المزودين للخدمات الأكاديمية والبحثية من جامعات مرموقة
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن الخدمة التي تحتاجها..."
                className="w-full px-6 py-4 pl-14 text-gray-800 bg-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <CustomButton size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100">
                تصفح الخدمات
              </CustomButton>
            </Link>
            <Link to="/providers">
              <CustomButton variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                تصفح المزودين
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">التخصصات المتاحة</h2>
            <p className="text-xl text-gray-600">اختر من بين مجموعة واسعة من الخدمات الأكاديمية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CustomCard key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CustomCardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count}</p>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">مزودو الخدمات المميزون</h2>
            <p className="text-xl text-gray-600">تعرف على أفضل المختصين في منصتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProviders.map((provider, index) => (
              <CustomCard key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CustomCardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{provider.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{provider.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{provider.specialization}</p>
                  
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{provider.rating}</span>
                    </div>
                    <div className="text-gray-600 text-sm">{provider.projects} مشروع</div>
                  </div>

                  <CustomButton className="w-full">عرض الملف الشخصي</CustomButton>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">ابدأ رحلتك الأكاديمية اليوم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            انضم إلى آلاف الطلاب والباحثين الذين يحققون أهدافهم الأكاديمية معنا
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <CustomButton size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100">
                إنشاء حساب جديد
              </CustomButton>
            </Link>
            <Link to="/about">
              <CustomButton variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                تعرف علينا أكثر
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
