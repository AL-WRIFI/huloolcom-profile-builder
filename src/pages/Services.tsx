
import React, { useState } from 'react';
import { Search, Filter, Star, Clock, User } from 'lucide-react';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle } from '@/components/ui/CustomCard';
import CustomButton from '@/components/ui/CustomButton';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'البرمجة والتطوير', 'التصميم الجرافيكي', 'الكتابة والترجمة', 'التسويق الرقمي', 'البحث العلمي'];

  const services = [
    {
      id: 1,
      title: "تطوير موقع ويب متكامل",
      description: "تطوير موقع ويب احترافي باستخدام أحدث التقنيات مع تصميم متجاوب وسرعة عالية",
      provider: "أحمد محمد",
      rating: 4.9,
      price: "من 500 ريال",
      duration: "7-14 يوم",
      category: "البرمجة والتطوير",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "تصميم هوية بصرية متكاملة",
      description: "تصميم شعار وهوية بصرية كاملة للشركات والمؤسسات مع دليل الاستخدام",
      provider: "فاطمة علي",
      rating: 4.8,
      price: "من 300 ريال",
      duration: "5-10 أيام",
      category: "التصميم الجرافيكي",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "كتابة محتوى تسويقي",
      description: "كتابة محتوى تسويقي احترافي للمواقع الإلكترونية ووسائل التواصل الاجتماعي",
      provider: "محمد حسن",
      rating: 4.9,
      price: "من 150 ريال",
      duration: "3-7 أيام",
      category: "الكتابة والترجمة",
      image: "/placeholder.svg"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الخدمات الأكاديمية</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            اكتشف مجموعة واسعة من الخدمات الأكاديمية المقدمة من خبراء متخصصين
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن الخدمة التي تحتاجها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <CustomCard key={service.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                <CustomCardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.provider}</span>
                    <div className="flex items-center gap-1 mr-auto">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-lg font-semibold text-blue-600">{service.price}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <CustomButton className="w-full">
                    عرض التفاصيل
                  </CustomButton>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لم يتم العثور على نتائج</h3>
              <p className="text-gray-500">جرب تعديل معايير البحث أو التصفية</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
