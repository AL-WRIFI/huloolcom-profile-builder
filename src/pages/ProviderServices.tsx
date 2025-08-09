import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [showAddService, setShowAddService] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const services = [
    {
      id: 'SRV-001',
      title: 'البحوث الأكاديمية',
      description: 'إعداد البحوث المتخصصة في علوم الحاسوب والذكاء الاصطناعي مع التوثيق الشامل والمراجع العلمية',
      category: 'أكاديمي',
      price: 'يبدأ من 300 ر.س',
      priceType: 'متغير',
      duration: '5-10 أيام',
      status: 'نشط',
      orders: 45,
      rating: 4.9,
      earnings: '13,500 ر.س',
      createdAt: '2023-09-15',
      lastUpdated: '2024-01-20',
      features: [
        'بحث شامل ومتخصص',
        'توثيق علمي دقيق',
        'مراجع حديثة ومعتمدة',
        'تدقيق لغوي',
        'مراجعات مجانية'
      ],
      requirements: [
        'تحديد موضوع البحث',
        'عدد الصفحات المطلوب',
        'نوع التوثيق المطلوب',
        'المراجع المفضلة'
      ]
    },
    {
      id: 'SRV-002',
      title: 'التدريس الخصوصي',
      description: 'دروس فردية في البرمجة وعلوم الحاسوب مع متابعة شخصية وخطة دراسية مخصصة',
      category: 'تدريس',
      price: '150 ر.س/ساعة',
      priceType: 'ثابت',
      duration: '1 ساعة',
      status: 'نشط',
      orders: 78,
      rating: 4.8,
      earnings: '11,700 ر.س',
      createdAt: '2023-08-20',
      lastUpdated: '2024-02-01',
      features: [
        'جلسات فردية مباشرة',
        'خطة دراسية مخصصة',
        'متابعة دورية للتقدم',
        'مواد تعليمية إضافية',
        'دعم ما بعد الجلسة'
      ],
      requirements: [
        'تحديد المادة أو الموضوع',
        'المستوى الأكاديمي',
        'الأهداف المطلوبة',
        'توقيت الجلسات المفضل'
      ]
    },
    {
      id: 'SRV-003',
      title: 'حل الواجبات البرمجية',
      description: 'حلول متكاملة للواجبات والمشاريع البرمجية مع شرح مفصل للكود والخوارزميات',
      category: 'برمجة',
      price: 'يبدأ من 100 ر.س',
      priceType: 'متغير',
      duration: '1-3 أيام',
      status: 'نشط',
      orders: 156,
      rating: 4.7,
      earnings: '18,200 ر.س',
      createdAt: '2023-07-10',
      lastUpdated: '2024-01-30',
      features: [
        'كود محسن ومنظم',
        'شرح تفصيلي للحل',
        'اختبار شامل للكود',
        'توثيق كامل',
        'ضمان عدم الأخطاء'
      ],
      requirements: [
        'تفاصيل الواجب',
        'لغة البرمجة المطلوبة',
        'المتطلبات الخاصة',
        'موعد التسليم'
      ]
    },
    {
      id: 'SRV-004',
      title: 'مراجعة الأكواد',
      description: 'مراجعة وتحسين الأكواد البرمجية مع إضافة التوثيق وتحسين الأداء',
      category: 'مراجعة',
      price: 'يبدأ من 80 ر.س',
      priceType: 'متغير',
      duration: '1-2 أيام',
      status: 'متوقف',
      orders: 89,
      rating: 4.6,
      earnings: '7,120 ر.س',
      createdAt: '2023-06-15',
      lastUpdated: '2023-12-10',
      features: [
        'تحليل شامل للكود',
        'اقتراحات التحسين',
        'إضافة التوثيق',
        'تحسين الأداء',
        'إصلاح الأخطاء'
      ],
      requirements: [
        'رفع ملفات الكود',
        'وصف المشكلة (إن وجدت)',
        'نوع المراجعة المطلوبة',
        'لغة البرمجة'
      ]
    },
    {
      id: 'SRV-005',
      title: 'مشاريع التخرج',
      description: 'مساعدة شاملة في مشاريع التخرج من التخطيط إلى التنفيذ والتوثيق',
      category: 'مشاريع',
      price: 'يبدأ من 1500 ر.س',
      priceType: 'متغير',
      duration: '2-4 أسابيع',
      status: 'نشط',
      orders: 23,
      rating: 4.9,
      earnings: '42,000 ر.س',
      createdAt: '2023-10-01',
      lastUpdated: '2024-02-05',
      features: [
        'تخطيط شامل للمشروع',
        'تطوير كامل',
        'اختبار وتجريب',
        'توثيق متكامل',
        'عرض تقديمي'
      ],
      requirements: [
        'فكرة المشروع',
        'المتطلبات التقنية',
        'قواعد الجامعة',
        'الميزانية والوقت'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'نشط': return 'bg-green-100 text-green-800';
      case 'متوقف': return 'bg-red-100 text-red-800';
      case 'مسودة': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredServices = services.filter(service => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return service.status === 'نشط';
    if (activeTab === 'inactive') return service.status === 'متوقف';
    return true;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#333333' }}>
                إدارة الخدمات
              </h1>
              <p className="opacity-70 mt-1" style={{ color: '#333333' }}>
                إدارة وتطوير خدماتك الأكاديمية وتتبع أدائها
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowAddService(true)}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                ➕ إضافة خدمة جديدة
              </button>
              <button 
                onClick={() => navigate('/provider-dashboard')}
                className="px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                العودة للوحة التحكم
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: 'إجمالي الخدمات', 
              value: services.length.toString(), 
              icon: '🎯', 
              color: '#4ECDC4' 
            },
            { 
              label: 'الخدمات النشطة', 
              value: services.filter(s => s.status === 'نشط').length.toString(), 
              icon: '✅', 
              color: '#96CEB4' 
            },
            { 
              label: 'إجمالي الطلبات', 
              value: services.reduce((sum, s) => sum + s.orders, 0).toString(), 
              icon: '📊', 
              color: '#45B7D1' 
            },
            { 
              label: 'متوسط التقييم', 
              value: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1), 
              icon: '⭐', 
              color: '#F8C421' 
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10"
                   style={{ backgroundColor: stat.color, transform: 'translate(25%, -25%)' }}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: stat.color }}></div>
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#333333' }}>
                  {stat.value}
                </div>
                <div className="text-sm opacity-70" style={{ color: '#333333' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-2xl p-2 shadow-lg mb-8">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'جميع الخدمات', count: services.length },
              { id: 'active', label: 'النشطة', count: services.filter(s => s.status === 'نشط').length },
              { id: 'inactive', label: 'المتوقفة', count: services.filter(s => s.status === 'متوقف').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id 
                    ? 'text-white shadow-md' 
                    : 'hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? '#F8C421' : 'transparent',
                  color: activeTab === tab.id ? '#333333' : '#666666'
                }}
              >
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} 
                 className="bg-white rounded-3xl shadow-lg border-0 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              
              {/* Service Header */}
              <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-xl" style={{ color: '#333333' }}>
                        {service.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full" 
                            style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                        {service.category}
                      </span>
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed" style={{ color: '#333333' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                    {service.status}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="font-bold text-lg" style={{ color: '#333333' }}>
                      {service.orders}
                    </div>
                    <div className="text-xs opacity-70" style={{ color: '#333333' }}>
                      طلب
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="font-bold text-lg" style={{ color: '#333333' }}>
                      ⭐ {service.rating}
                    </div>
                    <div className="text-xs opacity-70" style={{ color: '#333333' }}>
                      التقييم
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="font-bold text-lg" style={{ color: '#333333' }}>
                      {service.earnings}
                    </div>
                    <div className="text-xs opacity-70" style={{ color: '#333333' }}>
                      الأرباح
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-70" style={{ color: '#333333' }}>السعر</span>
                    <span className="font-semibold" style={{ color: '#F8C421' }}>{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-70" style={{ color: '#333333' }}>مدة التنفيذ</span>
                    <span className="font-semibold" style={{ color: '#333333' }}>{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-70" style={{ color: '#333333' }}>آخر تحديث</span>
                    <span className="font-semibold" style={{ color: '#333333' }}>{service.lastUpdated}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h5 className="font-semibold text-sm opacity-70 mb-3" style={{ color: '#333333' }}>
                    الميزات الرئيسية
                  </h5>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F8C421' }}></div>
                        <span style={{ color: '#333333' }}>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs opacity-50" style={{ color: '#333333' }}>
                        +{service.features.length - 3} ميزات أخرى
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setEditingService(service)}
                    className="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                    تعديل الخدمة
                  </button>
                  <button className="px-4 py-2 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                          style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                    📊 الإحصائيات
                  </button>
                  <button className="px-4 py-2 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                          style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                    ⋯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#333333' }}>
              لا توجد خدمات في هذا القسم
            </h3>
            <p className="opacity-70" style={{ color: '#333333' }}>
              قم بإضافة خدمة جديدة لبدء تقديم خدماتك الأكاديمية
            </p>
            <button 
              onClick={() => setShowAddService(true)}
              className="mt-6 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              إضافة خدمة جديدة
            </button>
          </div>
        )}
      </div>

      {/* Add/Edit Service Modal */}
      {(showAddService || editingService) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold" style={{ color: '#333333' }}>
                  {editingService ? 'تعديل الخدمة' : 'إضافة خدمة جديدة'}
                </h3>
                <button 
                  onClick={() => {
                    setShowAddService(false);
                    setEditingService(null);
                  }}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  style={{ color: '#333333' }}>
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🚧</div>
                <p style={{ color: '#333333' }}>نموذج إضافة/تعديل الخدمة</p>
                <p className="text-sm opacity-70 mt-2" style={{ color: '#333333' }}>
                  هذا النموذج قيد التطوير
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderServices;