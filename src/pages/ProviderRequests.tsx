import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderRequests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);

  const requests = [
    {
      id: 'REQ-001',
      student: {
        name: 'سارة أحمد محمد',
        avatar: '👩‍🎓',
        university: 'جامعة الملك سعود',
        rating: 4.8
      },
      title: 'مساعدة في مشروع التخرج - تطوير تطبيق ويب',
      description: 'أحتاج مساعدة في تطوير تطبيق ويب لإدارة المكتبات الجامعية باستخدام React وNode.js',
      category: 'مشاريع التخرج',
      subject: 'علوم الحاسوب',
      budget: '1500 ر.س',
      deadline: '2024-03-15',
      priority: 'عالي',
      status: 'جديد',
      createdAt: 'منذ 30 دقيقة',
      requirements: [
        'تطوير واجهة أمامية بـ React',
        'تطوير API بـ Node.js',
        'قاعدة بيانات MongoDB',
        'نظام المصادقة والتخويل',
        'توثيق شامل للمشروع'
      ],
      attachments: ['متطلبات_المشروع.pdf', 'مخطط_قاعدة_البيانات.png']
    },
    {
      id: 'REQ-002',
      student: {
        name: 'محمد الشهري',
        avatar: '👨‍💼',
        university: 'جامعة الملك فهد',
        rating: 4.9
      },
      title: 'حل واجب خوارزميات الترتيب',
      description: 'مطلوب حل واجب في مادة هياكل البيانات يتضمن تطبيق خوارزميات الترتيب المختلفة',
      category: 'واجبات',
      subject: 'هياكل البيانات',
      budget: '200 ر.س',
      deadline: '2024-02-28',
      priority: 'متوسط',
      status: 'قيد المراجعة',
      createdAt: 'منذ 2 ساعة',
      requirements: [
        'Bubble Sort',
        'Quick Sort',
        'Merge Sort',
        'تحليل التعقيد الزمني',
        'مقارنة الأداء'
      ],
      attachments: ['الواجب.pdf']
    },
    {
      id: 'REQ-003',
      student: {
        name: 'فاطمة العلي',
        avatar: '👩‍🔬',
        university: 'جامعة الأميرة نورا',
        rating: 4.7
      },
      title: 'مراجعة بحث في الذكاء الاصطناعي',
      description: 'مراجعة وتحسين بحث أكاديمي في مجال التعلم الآلي وإضافة المراجع المطلوبة',
      category: 'أبحاث',
      subject: 'الذكاء الاصطناعي',
      budget: '800 ر.س',
      deadline: '2024-03-10',
      priority: 'عالي',
      status: 'مقبول',
      createdAt: 'منذ يوم',
      requirements: [
        'مراجعة المحتوى العلمي',
        'تدقيق المراجع',
        'تحسين الصياغة',
        'إضافة التوصيات',
        'تنسيق البحث'
      ],
      attachments: ['البحث_الأولي.docx', 'المراجع.pdf']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'جديد': return 'bg-blue-100 text-blue-800';
      case 'قيد المراجعة': return 'bg-yellow-100 text-yellow-800';
      case 'مقبول': return 'bg-green-100 text-green-800';
      case 'مرفوض': return 'bg-red-100 text-red-800';
      case 'مكتمل': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'عالي': return 'bg-red-50 text-red-700 border-red-200';
      case 'متوسط': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'منخفض': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const filteredRequests = requests.filter(request => {
    if (activeTab === 'all') return true;
    if (activeTab === 'new') return request.status === 'جديد';
    if (activeTab === 'inProgress') return request.status === 'قيد المراجعة' || request.status === 'مقبول';
    if (activeTab === 'completed') return request.status === 'مكتمل';
    return true;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#333333' }}>
                إدارة الطلبات
              </h1>
              <p className="opacity-70 mt-1" style={{ color: '#333333' }}>
                متابعة وإدارة جميع طلبات الخدمات الأكاديمية
              </p>
            </div>
            <button 
              onClick={() => navigate('/provider-dashboard')}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              العودة للوحة التحكم
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'إجمالي الطلبات', value: '156', icon: '📊', color: '#4ECDC4' },
            { label: 'طلبات جديدة', value: '23', icon: '🆕', color: '#FF6B6B' },
            { label: 'قيد التنفيذ', value: '12', icon: '⚡', color: '#45B7D1' },
            { label: 'مكتملة اليوم', value: '8', icon: '✅', color: '#96CEB4' }
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
              { id: 'all', label: 'جميع الطلبات', count: requests.length },
              { id: 'new', label: 'الجديدة', count: requests.filter(r => r.status === 'جديد').length },
              { id: 'inProgress', label: 'قيد المعالجة', count: requests.filter(r => r.status === 'قيد المراجعة' || r.status === 'مقبول').length },
              { id: 'completed', label: 'المكتملة', count: requests.filter(r => r.status === 'مكتمل').length }
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

        {/* Requests List */}
        <div className="space-y-6">
          {filteredRequests.map((request) => (
            <div key={request.id} 
                 className="bg-white rounded-3xl shadow-lg border-0 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              
              {/* Request Header */}
              <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl">
                      {request.student.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg" style={{ color: '#333333' }}>
                          {request.student.name}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100" style={{ color: '#333333' }}>
                          {request.student.university}
                        </span>
                        <span className="text-xs">⭐ {request.student.rating}</span>
                      </div>
                      <h4 className="font-semibold text-xl mb-2" style={{ color: '#333333' }}>
                        {request.title}
                      </h4>
                      <p className="opacity-70 text-sm leading-relaxed" style={{ color: '#333333' }}>
                        {request.description}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center gap-1">
                          <span>🏷️</span>
                          <span>{request.category}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span>📚</span>
                          <span>{request.subject}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span>⏰</span>
                          <span>{request.createdAt}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </div>
                    <div className={`block text-xs px-2 py-1 rounded border ${getPriorityColor(request.priority)}`}>
                      أولوية {request.priority}
                    </div>
                  </div>
                </div>
              </div>

              {/* Request Details */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  
                  {/* Budget & Deadline */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-sm opacity-70" style={{ color: '#333333' }}>
                      التفاصيل المالية والزمنية
                    </h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">الميزانية</span>
                        <span className="font-semibold" style={{ color: '#F8C421' }}>
                          {request.budget}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">التسليم</span>
                        <span className="font-semibold" style={{ color: '#333333' }}>
                          {request.deadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-sm opacity-70" style={{ color: '#333333' }}>
                      المتطلبات
                    </h5>
                    <div className="space-y-1">
                      {request.requirements.slice(0, 3).map((req, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F8C421' }}></div>
                          <span style={{ color: '#333333' }}>{req}</span>
                        </div>
                      ))}
                      {request.requirements.length > 3 && (
                        <div className="text-xs opacity-50" style={{ color: '#333333' }}>
                          +{request.requirements.length - 3} متطلبات أخرى
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-sm opacity-70" style={{ color: '#333333' }}>
                      المرفقات
                    </h5>
                    <div className="space-y-2">
                      {request.attachments.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                          <span className="text-sm">📎</span>
                          <span className="text-sm truncate" style={{ color: '#333333' }}>
                            {file}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t" style={{ borderColor: '#F0F0F0' }}>
                  <button 
                    onClick={() => setSelectedRequest(request)}
                    className="flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                    عرض التفاصيل الكاملة
                  </button>
                  <button className="px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                          style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                    قبول الطلب
                  </button>
                  <button className="px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                          style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                    💬 تواصل
                  </button>
                  <button className="px-4 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                          style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                    ⋯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredRequests.length > 0 && (
          <div className="text-center pt-8">
            <button className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              تحميل المزيد من الطلبات
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredRequests.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#333333' }}>
              لا توجد طلبات في هذا القسم
            </h3>
            <p className="opacity-70" style={{ color: '#333333' }}>
              لم يتم العثور على أي طلبات تطابق الفلتر المحدد
            </p>
          </div>
        )}
      </div>

      {/* Request Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold" style={{ color: '#333333' }}>
                  تفاصيل الطلب {selectedRequest.id}
                </h3>
                <button 
                  onClick={() => setSelectedRequest(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  style={{ color: '#333333' }}>
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              {/* Modal content would go here */}
              <div className="text-center py-8">
                <p style={{ color: '#333333' }}>تفاصيل الطلب الكاملة</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderRequests;