import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'د. أحمد محمد علي',
    title: 'أستاذ في علوم الحاسوب',
    bio: 'أستاذ جامعي متخصص في علوم الحاسوب مع خبرة تزيد عن 15 عاماً في التدريس والبحث الأكاديمي. حاصل على درجة الدكتوراه في الذكاء الاصطناعي من جامعة الملك سعود.',
    location: 'الرياض، السعودية',
    experience: '15 سنة خبرة',
    rating: 4.9,
    reviews: 156,
    status: 'متاح الآن'
  });

  const handleEditProfile = () => {
    navigate('/profile-builder');
  };

  const stats = [
    { title: 'إجمالي الطلبات', value: '245', icon: '📋', color: '#F8C421' },
    { title: 'الطلبات المكتملة', value: '201', icon: '✅', color: '#28a745' },
    { title: 'الطلبات الجارية', value: '12', icon: '⏳', color: '#ffc107' },
    { title: 'التقييم العام', value: '4.9', icon: '⭐', color: '#6f42c1' },
  ];

  const currentRequests = [
    { id: 1, title: 'إعداد بحث في الذكاء الاصطناعي', client: 'سارة أحمد', deadline: '2024-01-15', status: 'في التنفيذ', price: '500 ريال' },
    { id: 2, title: 'تدريس خصوصي - JavaScript', client: 'محمد العلي', deadline: '2024-01-12', status: 'جديد', price: '300 ريال' },
    { id: 3, title: 'مراجعة كود Python', client: 'فاطمة الشهري', deadline: '2024-01-18', status: 'في المراجعة', price: '150 ريال' },
  ];

  const recentReviews = [
    { id: 1, client: 'سارة أحمد', rating: 5, comment: 'خدمة ممتازة وسرعة في التنفيذ. ساعدني الدكتور أحمد في إنجاز مشروع التخرج بأعلى جودة.', date: 'منذ أسبوع' },
    { id: 2, client: 'محمد الشهري', rating: 5, comment: 'أستاذ متميز ويشرح بطريقة واضحة ومفهومة. أنصح بالتعامل معه.', date: 'منذ أسبوعين' },
    { id: 3, client: 'فاطمة العلي', rating: 4, comment: 'عمل جيد والتزام بالمواعيد المحددة. شكراً لك دكتور.', date: 'منذ شهر' },
  ];

  const services = [
    { title: 'البحوث الأكاديمية', price: 'يبدأ من 300 ريال', orders: 45, status: 'نشط' },
    { title: 'التدريس الخصوصي', price: '150 ريال/ساعة', orders: 89, status: 'نشط' },
    { title: 'حل الواجبات البرمجية', price: 'يبدأ من 100 ريال', orders: 67, status: 'نشط' },
    { title: 'مراجعة الأكواد', price: 'يبدأ من 80 ريال', orders: 44, status: 'نشط' },
  ];

  const skills = [
    'Python', 'JavaScript', 'Java', 'C++', 'الذكاء الاصطناعي', 'تعلم الآلة', 'قواعد البيانات', 'تطوير الويب'
  ];

  const languages = [
    { name: 'العربية', level: 'لغة أم' },
    { name: 'الإنجليزية', level: 'متقدم' },
    { name: 'الفرنسية', level: 'متوسط' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                style={{ color: '#333333' }}
              >
                ← العودة للرئيسية
              </button>
              <h1 className="text-2xl font-bold" style={{ color: '#333333' }}>لوحة التحكم</h1>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-xl">🔔</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium" style={{ backgroundColor: '#F8C421' }}>
                <span style={{ color: '#333333' }}>أ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold" style={{ color: '#333333' }}>{stat.value}</p>
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl" style={{ backgroundColor: stat.color }}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: '#F8C421' }}>
                  <span style={{ color: '#333333' }}>أ</span>
                </div>
                <h2 className="text-xl font-bold" style={{ color: '#333333' }}>{profileData.name}</h2>
                <p className="text-gray-600">{profileData.title}</p>
                <div className="flex items-center justify-center mt-2">
                  <span style={{ color: '#F8C421' }}>★★★★★</span>
                  <span className="text-sm text-gray-600 mr-2">({profileData.rating}) · {profileData.reviews} تقييم</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F8C421', opacity: 0.2 }}>
                    <span style={{ color: '#F8C421' }}>📍</span>
                  </div>
                  <span style={{ color: '#333333' }}>{profileData.location}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600">🟢</span>
                  </div>
                  <span style={{ color: '#333333' }}>{profileData.status}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">⏱️</span>
                  </div>
                  <span style={{ color: '#333333' }}>{profileData.experience}</span>
                </div>
              </div>

              <button 
                onClick={handleEditProfile}
                className="w-full py-3 px-4 rounded-lg font-semibold transition-colors mb-3 text-white"
                style={{ backgroundColor: '#F8C421', color: '#333333' }}
              >
                تحديث الملف الشخصي
              </button>
              
              <button className="w-full border border-gray-300 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                عرض الملف العام
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#333333' }}>إحصائيات سريعة</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">الأرباح هذا الشهر</span>
                  <span className="font-semibold text-green-600">12,450 ريال</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">معدل الاستجابة</span>
                  <span className="font-semibold" style={{ color: '#333333' }}>98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">معدل إتمام الطلبات</span>
                  <span className="font-semibold" style={{ color: '#333333' }}>95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto">
                  {[
                    { id: 'overview', label: 'نظرة عامة' },
                    { id: 'requests', label: 'الطلبات' },
                    { id: 'reviews', label: 'التقييمات' },
                    { id: 'services', label: 'الخدمات' },
                    { id: 'profile', label: 'البيانات الشخصية' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                      style={{
                        borderColor: activeTab === tab.id ? '#F8C421' : 'transparent',
                        color: activeTab === tab.id ? '#F8C421' : '#333333'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>نظرة عامة</h3>
                    
                    {/* Current Requests Preview */}
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: '#333333' }}>الطلبات الحالية</h4>
                      <div className="space-y-3">
                        {currentRequests.slice(0, 3).map((request) => (
                          <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium" style={{ color: '#333333' }}>{request.title}</h5>
                              <span className={`px-2 py-1 rounded text-xs ${
                                request.status === 'جديد' ? 'bg-blue-100 text-blue-800' :
                                request.status === 'في التنفيذ' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {request.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">العميل: {request.client}</p>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-600">الموعد النهائي: {request.deadline}</span>
                              <span className="font-semibold" style={{ color: '#F8C421' }}>{request.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Reviews Preview */}
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: '#333333' }}>أحدث التقييمات</h4>
                      <div className="space-y-3">
                        {recentReviews.slice(0, 2).map((review) => (
                          <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium" style={{ color: '#333333' }}>{review.client}</span>
                              <div className="flex items-center gap-1">
                                <span style={{ color: '#F8C421' }}>{'★'.repeat(review.rating)}</span>
                                <span className="text-sm text-gray-600">{review.date}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Requests Tab */}
                {activeTab === 'requests' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>إدارة الطلبات</h3>
                      <div className="flex gap-2">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm" style={{ color: '#333333' }}>
                          <option>جميع الطلبات</option>
                          <option>طلبات جديدة</option>
                          <option>قيد التنفيذ</option>
                          <option>مكتملة</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {currentRequests.map((request) => (
                        <div key={request.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                            <div>
                              <h4 className="font-semibold text-lg" style={{ color: '#333333' }}>{request.title}</h4>
                              <p className="text-gray-600">العميل: {request.client}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              request.status === 'جديد' ? 'bg-blue-100 text-blue-800' :
                              request.status === 'في التنفيذ' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {request.status}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            <div>
                              <span className="text-sm text-gray-600">الموعد النهائي</span>
                              <p className="font-medium" style={{ color: '#333333' }}>{request.deadline}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">السعر</span>
                              <p className="font-medium" style={{ color: '#F8C421' }}>{request.price}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-600">الحالة</span>
                              <p className="font-medium" style={{ color: '#333333' }}>{request.status}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 rounded-lg text-sm transition-colors text-white" style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                              عرض التفاصيل
                            </button>
                            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                              تحديث الحالة
                            </button>
                            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                              تواصل مع العميل
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>التقييمات والمراجعات</h3>
                      <div className="text-sm text-gray-600">
                        متوسط التقييم: <span className="font-semibold" style={{ color: '#F8C421' }}>{profileData.rating}/5</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {recentReviews.map((review) => (
                        <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="font-medium" style={{ color: '#333333' }}>{review.client.charAt(0)}</span>
                              </div>
                              <div>
                                <h4 className="font-medium" style={{ color: '#333333' }}>{review.client}</h4>
                                <div className="flex items-center gap-2">
                                  <span style={{ color: '#F8C421' }}>{'★'.repeat(review.rating)}</span>
                                  <span className="text-sm text-gray-600">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                          <div className="mt-3 flex gap-2">
                            <button className="text-sm hover:underline" style={{ color: '#F8C421' }}>رد على التقييم</button>
                            <button className="text-sm text-gray-600 hover:underline">إبلاغ</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Tab */}
                {activeTab === 'services' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>إدارة الخدمات</h3>
                      <button className="px-4 py-2 rounded-lg transition-colors text-white" style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                        إضافة خدمة جديدة
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                          <h4 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>{service.title}</h4>
                          <p className="text-gray-600 mb-3">{service.price}</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-gray-600">عدد الطلبات: {service.orders}</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{service.status}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-1 rounded text-sm transition-colors text-white" style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                              تعديل
                            </button>
                            <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                              إيقاف
                            </button>
                            <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                              حذف
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>البيانات الشخصية</h3>
                      <button 
                        onClick={() => setEditMode(!editMode)}
                        className="px-4 py-2 rounded-lg transition-colors text-white"
                        style={{ backgroundColor: '#F8C421', color: '#333333' }}
                      >
                        {editMode ? 'حفظ التغييرات' : 'تعديل البيانات'}
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Basic Info */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold mb-4" style={{ color: '#333333' }}>المعلومات الأساسية</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>الاسم الكامل</label>
                            {editMode ? (
                              <input 
                                type="text" 
                                value={profileData.name}
                                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                style={{ color: '#333333' }}
                              />
                            ) : (
                              <p className="text-gray-600">{profileData.name}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>المسمى الوظيفي</label>
                            {editMode ? (
                              <input 
                                type="text" 
                                value={profileData.title}
                                onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                style={{ color: '#333333' }}
                              />
                            ) : (
                              <p className="text-gray-600">{profileData.title}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>الموقع</label>
                            {editMode ? (
                              <input 
                                type="text" 
                                value={profileData.location}
                                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                style={{ color: '#333333' }}
                              />
                            ) : (
                              <p className="text-gray-600">{profileData.location}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: '#333333' }}>سنوات الخبرة</label>
                            {editMode ? (
                              <input 
                                type="text" 
                                value={profileData.experience}
                                onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                style={{ color: '#333333' }}
                              />
                            ) : (
                              <p className="text-gray-600">{profileData.experience}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold mb-4" style={{ color: '#333333' }}>النبذة التعريفية</h4>
                        {editMode ? (
                          <textarea 
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            style={{ color: '#333333' }}
                          />
                        ) : (
                          <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
                        )}
                      </div>

                      {/* Skills */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold mb-4" style={{ color: '#333333' }}>المهارات</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#F8C421', color: '#333333', opacity: 0.8 }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                        {editMode && (
                          <button className="mt-3 text-sm hover:underline" style={{ color: '#F8C421' }}>
                            إضافة مهارة جديدة
                          </button>
                        )}
                      </div>

                      {/* Languages */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold mb-4" style={{ color: '#333333' }}>اللغات</h4>
                        <div className="space-y-3">
                          {languages.map((lang, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span style={{ color: '#333333' }}>{lang.name}</span>
                              <span className={`text-sm px-2 py-1 rounded ${
                                lang.level === 'لغة أم' ? 'bg-green-100 text-green-800' :
                                lang.level === 'متقدم' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {lang.level}
                              </span>
                            </div>
                          ))}
                        </div>
                        {editMode && (
                          <button className="mt-3 text-sm hover:underline" style={{ color: '#F8C421' }}>
                            إضافة لغة جديدة
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;