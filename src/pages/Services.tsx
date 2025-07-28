
import React, { useState } from 'react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الخدمات' },
    { id: 'research', name: 'البحوث الأكاديمية' },
    { id: 'assignments', name: 'الواجبات والتكاليف' },
    { id: 'thesis', name: 'مشاريع التخرج' },
    { id: 'translation', name: 'الترجمة' },
    { id: 'tutoring', name: 'التدريس' }
  ];

  const services = [
    {
      id: 1,
      title: 'إعداد البحوث الأكاديمية',
      description: 'بحوث أكاديمية متخصصة وفقاً لأعلى المعايير العلمية',
      category: 'research',
      price: 'يبدأ من 200 ريال',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      title: 'حل الواجبات الجامعية',
      description: 'حلول شاملة للواجبات والتكاليف الدراسية',
      category: 'assignments',
      price: 'يبدأ من 50 ريال',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 3,
      title: 'مشاريع التخرج والرسائل',
      description: 'إعداد مشاريع التخرج ورسائل الماجستير والدكتوراه',
      category: 'thesis',
      price: 'يبدأ من 500 ريال',
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      title: 'خدمات الترجمة الأكاديمية',
      description: 'ترجمة النصوص والوثائق الأكاديمية بدقة عالية',
      category: 'translation',
      price: 'يبدأ من 30 ريال/صفحة',
      rating: 4.6,
      reviews: 312
    },
    {
      id: 5,
      title: 'التدريس الخصوصي',
      description: 'جلسات تدريس فردية مع مدرسين متخصصين',
      category: 'tutoring',
      price: 'يبدأ من 100 ريال/ساعة',
      rating: 4.9,
      reviews: 445
    },
    {
      id: 6,
      title: 'تحليل البيانات الإحصائية',
      description: 'تحليل البيانات باستخدام برامج SPSS و R',
      category: 'research',
      price: 'يبدأ من 150 ريال',
      rating: 4.5,
      reviews: 67
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">خدماتنا المتخصصة</h1>
            <p className="text-xl opacity-90">
              اكتشف مجموعة شاملة من الخدمات الأكاديمية عالية الجودة
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-600">
                      {service.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">
                        {service.rating} ({service.reviews} تقييم)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      اطلب الخدمة
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            لم تجد الخدمة التي تبحث عنها؟
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا وسنساعدك في العثور على الخدمة المناسبة أو نوفر لك خدمة مخصصة
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            تواصل معنا
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
