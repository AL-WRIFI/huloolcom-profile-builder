import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderAnalytics = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('month');
  const [activeChart, setActiveChart] = useState('revenue');

  const analyticsData = {
    overview: {
      totalRevenue: '52,340',
      totalOrders: '342',
      averageRating: '4.8',
      responseTime: '2.3'
    },
    monthlyData: [
      { month: 'يناير', revenue: 4200, orders: 28, rating: 4.7 },
      { month: 'فبراير', revenue: 5100, orders: 35, rating: 4.8 },
      { month: 'مارس', revenue: 4800, orders: 32, rating: 4.9 },
      { month: 'أبريل', revenue: 6200, orders: 41, rating: 4.8 },
      { month: 'مايو', revenue: 7300, orders: 48, rating: 4.9 },
      { month: 'يونيو', revenue: 8100, orders: 52, rating: 4.8 }
    ],
    servicePerformance: [
      { service: 'البحوث الأكاديمية', orders: 45, revenue: 13500, rating: 4.9, growth: '+12%' },
      { service: 'التدريس الخصوصي', orders: 78, revenue: 11700, rating: 4.8, growth: '+8%' },
      { service: 'حل الواجبات', orders: 156, revenue: 18200, rating: 4.7, growth: '+15%' },
      { service: 'مراجعة الأكواد', orders: 89, revenue: 7120, rating: 4.6, growth: '+5%' },
      { service: 'مشاريع التخرج', orders: 23, revenue: 34500, rating: 4.9, growth: '+25%' }
    ],
    customerInsights: {
      repeatCustomers: 68,
      averageOrderValue: 153,
      customerSatisfaction: 94,
      referralRate: 23
    },
    topStudents: [
      { name: 'سارة أحمد', orders: 12, spent: 2450, university: 'جامعة الملك سعود' },
      { name: 'محمد الشهري', orders: 8, spent: 1800, university: 'جامعة الملك فهد' },
      { name: 'فاطمة العلي', orders: 15, spent: 3200, university: 'جامعة الأميرة نورا' },
      { name: 'أحمد خالد', orders: 6, spent: 980, university: 'جامعة الملك عبدالعزيز' }
    ]
  };

  const timeRanges = [
    { id: 'week', label: 'هذا الأسبوع' },
    { id: 'month', label: 'هذا الشهر' },
    { id: 'quarter', label: 'هذا الربع' },
    { id: 'year', label: 'هذا العام' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#333333' }}>
                الإحصائيات والتحليلات
              </h1>
              <p className="opacity-70 mt-1" style={{ color: '#333333' }}>
                تحليل شامل لأداء خدماتك وإيراداتك
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                📊 تصدير التقرير
              </button>
              <button 
                onClick={() => navigate('/provider-dashboard')}
                className="px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                العودة للوحة التحكم
              </button>
            </div>
          </div>

          {/* Time Range Filter */}
          <div className="flex gap-2">
            {timeRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setTimeRange(range.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  timeRange === range.id 
                    ? 'shadow-md' 
                    : 'hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: timeRange === range.id ? '#F8C421' : 'white',
                  color: timeRange === range.id ? '#333333' : '#666666'
                }}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              label: 'إجمالي الإيرادات', 
              value: `${analyticsData.overview.totalRevenue} ر.س`, 
              icon: '💰', 
              color: '#4ECDC4',
              change: '+15%',
              trend: 'up'
            },
            { 
              label: 'إجمالي الطلبات', 
              value: analyticsData.overview.totalOrders, 
              icon: '📊', 
              color: '#45B7D1',
              change: '+8%',
              trend: 'up'
            },
            { 
              label: 'متوسط التقييم', 
              value: analyticsData.overview.averageRating, 
              icon: '⭐', 
              color: '#F8C421',
              change: '+0.2',
              trend: 'up'
            },
            { 
              label: 'وقت الاستجابة', 
              value: `${analyticsData.overview.responseTime} ساعة`, 
              icon: '⚡', 
              color: '#96CEB4',
              change: '-0.5',
              trend: 'down'
            }
          ].map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10"
                   style={{ backgroundColor: metric.color, transform: 'translate(25%, -25%)' }}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{metric.icon}</span>
                  <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    <span>{metric.trend === 'up' ? '↗' : '↘'}</span>
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#333333' }}>
                  {metric.value}
                </div>
                <div className="text-sm opacity-70" style={{ color: '#333333' }}>
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={{ color: '#333333' }}>
                الإيرادات الشهرية
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveChart('revenue')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeChart === 'revenue' ? 'shadow-md' : 'hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeChart === 'revenue' ? '#F8C421' : 'transparent',
                    color: activeChart === 'revenue' ? '#333333' : '#666666'
                  }}
                >
                  الإيرادات
                </button>
                <button
                  onClick={() => setActiveChart('orders')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeChart === 'orders' ? 'shadow-md' : 'hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeChart === 'orders' ? '#F8C421' : 'transparent',
                    color: activeChart === 'orders' ? '#333333' : '#666666'
                  }}
                >
                  الطلبات
                </button>
              </div>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="space-y-4">
              {analyticsData.monthlyData.map((data, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 text-sm" style={{ color: '#333333' }}>
                    {data.month}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                    <div 
                      className="h-4 rounded-full transition-all duration-1000"
                      style={{ 
                        width: activeChart === 'revenue' 
                          ? `${(data.revenue / 8500) * 100}%` 
                          : `${(data.orders / 60) * 100}%`,
                        backgroundColor: '#F8C421'
                      }}
                    ></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-medium" 
                         style={{ color: '#333333' }}>
                      {activeChart === 'revenue' ? `${data.revenue} ر.س` : `${data.orders} طلب`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Performance */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#333333' }}>
              أداء الخدمات
            </h3>
            <div className="space-y-4">
              {analyticsData.servicePerformance.map((service, index) => (
                <div key={index} 
                     className="p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
                     style={{ borderColor: '#F0F0F0' }}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold" style={{ color: '#333333' }}>
                      {service.service}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                      {service.growth}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="opacity-70" style={{ color: '#333333' }}>الطلبات</div>
                      <div className="font-semibold" style={{ color: '#333333' }}>{service.orders}</div>
                    </div>
                    <div>
                      <div className="opacity-70" style={{ color: '#333333' }}>الإيرادات</div>
                      <div className="font-semibold" style={{ color: '#333333' }}>{service.revenue} ر.س</div>
                    </div>
                    <div>
                      <div className="opacity-70" style={{ color: '#333333' }}>التقييم</div>
                      <div className="font-semibold" style={{ color: '#333333' }}>⭐ {service.rating}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Insights & Top Students */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customer Insights */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#333333' }}>
              رؤى العملاء
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'العملاء المتكررون', value: `${analyticsData.customerInsights.repeatCustomers}%`, color: '#4ECDC4' },
                { label: 'متوسط قيمة الطلب', value: `${analyticsData.customerInsights.averageOrderValue} ر.س`, color: '#45B7D1' },
                { label: 'رضا العملاء', value: `${analyticsData.customerInsights.customerSatisfaction}%`, color: '#96CEB4' },
                { label: 'معدل الإحالة', value: `${analyticsData.customerInsights.referralRate}%`, color: '#F8C421' }
              ].map((insight, index) => (
                <div key={index} className="text-center p-4 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                  <div className="text-2xl font-bold mb-2" style={{ color: insight.color }}>
                    {insight.value}
                  </div>
                  <div className="text-sm opacity-70" style={{ color: '#333333' }}>
                    {insight.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Rings */}
            <div className="mt-8 space-y-4">
              {[
                { label: 'رضا العملاء', percentage: 94, color: '#96CEB4' },
                { label: 'العملاء المتكررون', percentage: 68, color: '#4ECDC4' },
                { label: 'معدل الإحالة', percentage: 23, color: '#F8C421' }
              ].map((metric, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: '#333333' }}>{metric.label}</span>
                      <span style={{ color: '#333333' }}>{metric.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${metric.percentage}%`,
                          backgroundColor: metric.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Students */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#333333' }}>
              أفضل الطلاب
            </h3>
            <div className="space-y-4">
              {analyticsData.topStudents.map((student, index) => (
                <div key={index} 
                     className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                     style={{ backgroundColor: '#F8F9FA' }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold" style={{ color: '#333333' }}>
                      {student.name}
                    </h4>
                    <p className="text-sm opacity-70" style={{ color: '#333333' }}>
                      {student.university}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold" style={{ color: '#333333' }}>
                      {student.spent} ر.س
                    </div>
                    <div className="text-sm opacity-70" style={{ color: '#333333' }}>
                      {student.orders} طلب
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              عرض جميع الطلاب
            </button>
          </div>
        </div>

        {/* Detailed Analytics Table */}
        <div className="bg-white rounded-3xl shadow-lg mt-8 overflow-hidden">
          <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
            <h3 className="text-xl font-bold" style={{ color: '#333333' }}>
              تفاصيل الأداء
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#F0F0F0', backgroundColor: '#F8F9FA' }}>
                  <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الخدمة</th>
                  <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الطلبات</th>
                  <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الإيرادات</th>
                  <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>التقييم</th>
                  <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>النمو</th>
                  <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.servicePerformance.map((service, index) => (
                  <tr key={index} 
                      className="border-b hover:bg-gray-50 transition-colors"
                      style={{ borderColor: '#F0F0F0' }}>
                    <td className="p-4">
                      <span className="font-medium" style={{ color: '#333333' }}>
                        {service.service}
                      </span>
                    </td>
                    <td className="p-4">
                      <span style={{ color: '#333333' }}>{service.orders}</span>
                    </td>
                    <td className="p-4">
                      <span style={{ color: '#333333' }}>{service.revenue} ر.س</span>
                    </td>
                    <td className="p-4">
                      <span style={{ color: '#333333' }}>⭐ {service.rating}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-green-600 font-medium">{service.growth}</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        نشط
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderAnalytics;