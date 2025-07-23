import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('dashboard');
  const [animationClass, setAnimationClass] = useState('');

  const profileData = {
    name: 'د. أحمد محمد علي',
    title: 'أستاذ الذكاء الاصطناعي وعلوم الحاسوب',
    university: 'جامعة الملك سعود',
    department: 'كلية علوم الحاسوب والمعلومات',
    bio: 'أستاذ جامعي متخصص في علوم الحاسوب مع خبرة تزيد عن 15 عاماً في التدريس والبحث الأكاديمي. حاصل على درجة الدكتوراه في الذكاء الاصطناعي من جامعة الملك سعود.',
    location: 'الرياض، السعودية',
    experience: '15+ سنة خبرة',
    rating: 4.9,
    reviews: 156,
    students: 1240,
    courses: 8,
    research: 24,
    status: 'متاح الآن'
  };

  const academicStats = [
    { title: 'الطلاب النشطون', value: '1,240', subtitle: 'في جميع الدورات', icon: '👨‍🎓', color: '#F8C421', trend: '+15%' },
    { title: 'الأبحاث المنشورة', value: '42', subtitle: 'هذا العام', icon: '📚', color: '#4CAF50', trend: '+8%' },
    { title: 'الدورات النشطة', value: '8', subtitle: 'قيد التدريس', icon: '🎓', color: '#2196F3', trend: '+2%' },
    { title: 'التقييم العام', value: '4.9', subtitle: 'من 5 نجوم', icon: '⭐', color: '#FF9800', trend: '+0.1' },
    { title: 'مشاريع التخرج', value: '28', subtitle: 'تحت الإشراف', icon: '🎯', color: '#9C27B0', trend: '+12%' },
    { title: 'ساعات التدريس', value: '340', subtitle: 'هذا الفصل', icon: '⏰', color: '#607D8B', trend: '+5%' }
  ];

  const recentActivities = [
    { type: 'student', title: 'طالب جديد انضم لدورة الذكاء الاصطناعي', time: 'منذ 5 دقائق', priority: 'جديد', icon: '👨‍🎓' },
    { type: 'research', title: 'تم قبول البحث في مؤتمر IEEE الدولي', time: 'منذ 20 دقيقة', priority: 'هام', icon: '📊' },
    { type: 'assignment', title: 'تم تسليم 12 مشروع من طلاب البرمجة', time: 'منذ ساعة', priority: 'عادي', icon: '📝' },
    { type: 'consultation', title: 'جلسة استشارة مع طالب الماجستير', time: 'منذ ساعتين', priority: 'مجدولة', icon: '🗣️' },
    { type: 'review', title: 'مراجعة 5 أوراق بحثية للمجلة العلمية', time: 'منذ 3 ساعات', priority: 'عادي', icon: '🔍' }
  ];

  const upcomingSchedule = [
    { time: '09:00', title: 'محاضرة: أساسيات التعلم العميق', type: 'lecture', room: 'قاعة 201', duration: '90 د' },
    { time: '11:00', title: 'اجتماع فريق البحث', type: 'meeting', room: 'مكتب الأستاذ', duration: '60 د' },
    { time: '13:00', title: 'استراحة وصلاة الظهر', type: 'break', room: '-', duration: '60 د' },
    { time: '14:00', title: 'جلسات إرشاد أكاديمي', type: 'consultation', room: 'مكتب 305', duration: '120 د' },
    { time: '16:00', title: 'ورشة: تطبيقات الذكاء الاصطناعي', type: 'workshop', room: 'معمل 102', duration: '180 د' }
  ];

  const coursesData = [
    { name: 'مقدمة في الذكاء الاصطناعي', code: 'CS401', students: 85, completion: 78, rating: 4.8, semester: 'الفصل الحالي' },
    { name: 'التعلم العميق والشبكات العصبية', code: 'CS502', students: 45, completion: 65, rating: 4.9, semester: 'الفصل الحالي' },
    { name: 'معالجة اللغات الطبيعية', code: 'CS503', students: 32, completion: 89, rating: 4.7, semester: 'الفصل الحالي' },
    { name: 'رؤية الحاسوب', code: 'CS504', students: 28, completion: 45, rating: 4.9, semester: 'الفصل الحالي' }
  ];

  const researchProjects = [
    { title: 'نظام ذكي لتحليل المشاعر في النصوص العربية', status: 'قيد التطوير', progress: 85, team: 4, funding: '250K ريال', journal: 'IEEE Transactions' },
    { title: 'تطبيق الذكاء الاصطناعي في التشخيص الطبي', status: 'مرحلة النشر', progress: 95, team: 6, funding: '400K ريال', journal: 'Nature AI' },
    { title: 'نموذج التعلم التعاوني للروبوتات المتعددة', status: 'بداية المشروع', progress: 25, team: 3, funding: '180K ريال', journal: 'Robotics Research' }
  ];

  useEffect(() => {
    setAnimationClass('animate-slide-in');
    const timer = setTimeout(() => setAnimationClass(''), 300);
    return () => clearTimeout(timer);
  }, [activeView]);

  const handleEditProfile = () => {
    navigate('/profile-builder');
  };

  const getActivityIcon = (type: string) => {
    const icons: Record<string, string> = {
      student: '👨‍🎓',
      research: '📊',
      assignment: '📝',
      consultation: '🗣️',
      review: '🔍'
    };
    return icons[type] || '📋';
  };

  const getScheduleIcon = (type: string) => {
    const icons: Record<string, string> = {
      lecture: '🎓',
      meeting: '🤝',
      break: '☕',
      consultation: '💬',
      workshop: '🔧'
    };
    return icons[type] || '📅';
  };

  const renderDashboard = () => (
    <div className={`space-y-8 ${animationClass}`}>
      {/* Hero Section */}
      <div 
        className="relative rounded-3xl p-8 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F8C421 0%, #FFA000 100%)',
          boxShadow: '0 20px 40px rgba(248, 196, 33, 0.3)'
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="w-full h-full rounded-full border-8 border-white transform rotate-45"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#333333' }}>مرحباً بك، {profileData.name}</h1>
            <p className="text-xl mb-4" style={{ color: '#333333', opacity: 0.8 }}>{profileData.title}</p>
            <p className="text-lg mb-6" style={{ color: '#333333', opacity: 0.7 }}>{profileData.university}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span>
                <span style={{ color: '#333333' }}>{profileData.students} طالب</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span style={{ color: '#333333' }}>{profileData.research} بحث</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span style={{ color: '#333333' }}>{profileData.rating}/5</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block p-8 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-6xl font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#F8C421' }}>
                أ
              </div>
            </div>
            <div className="mt-4">
              <button 
                onClick={handleEditProfile}
                className="px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#F8C421' }}
              >
                تحديث الملف الشخصي
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicStats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: stat.color + '20', color: stat.color }}
              >
                {stat.icon}
              </div>
              <div 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#F8C421' + '20', color: '#F8C421' }}
              >
                {stat.trend}
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>{stat.value}</h3>
            <p className="text-lg font-medium mb-1" style={{ color: '#333333' }}>{stat.title}</p>
            <p className="text-sm text-gray-500">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#333333' }}>النشاطات الأخيرة</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: '#F8C421' + '20' }}
                  >
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-relaxed" style={{ color: '#333333' }}>{activity.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: activity.priority === 'هام' ? '#F8C421' + '20' : '#f3f4f6',
                          color: activity.priority === 'هام' ? '#F8C421' : '#6b7280'
                        }}
                      >
                        {activity.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#333333' }}>جدول اليوم</h3>
            <div className="space-y-4">
              {upcomingSchedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg"
                    style={{ backgroundColor: '#F8C421' + '20' }}
                  >
                    {getScheduleIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold" style={{ color: '#333333' }}>{item.title}</h4>
                      <span className="text-sm font-medium" style={{ color: '#F8C421' }}>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📍 {item.room}</span>
                      <span>⏱️ {item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className={`space-y-6 ${animationClass}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold" style={{ color: '#333333' }}>إدارة الدورات</h2>
        <button 
          className="px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
          style={{ backgroundColor: '#F8C421', color: '#333333' }}
        >
          إضافة دورة جديدة
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {coursesData.map((course, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold" style={{ color: '#333333' }}>{course.name}</h3>
                <p className="text-sm text-gray-500">{course.code} • {course.semester}</p>
              </div>
              <div className="flex items-center gap-1">
                <span style={{ color: '#F8C421' }}>★</span>
                <span className="font-medium" style={{ color: '#333333' }}>{course.rating}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">عدد الطلاب</p>
                <p className="text-xl font-bold" style={{ color: '#333333' }}>{course.students}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">نسبة الإنجاز</p>
                <p className="text-xl font-bold" style={{ color: '#F8C421' }}>{course.completion}%</p>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${course.completion}%`,
                  backgroundColor: '#F8C421'
                }}
              ></div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors" style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                إدارة الدورة
              </button>
              <button className="py-2 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                عرض التفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className={`space-y-6 ${animationClass}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold" style={{ color: '#333333' }}>المشاريع البحثية</h2>
        <button 
          className="px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
          style={{ backgroundColor: '#F8C421', color: '#333333' }}
        >
          مشروع بحثي جديد
        </button>
      </div>
      
      <div className="space-y-6">
        {researchProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#333333' }}>{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">الهدف من النشر: {project.journal}</p>
              </div>
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: project.status === 'مرحلة النشر' ? '#4CAF50' + '20' : '#F8C421' + '20',
                  color: project.status === 'مرحلة النشر' ? '#4CAF50' : '#F8C421'
                }}
              >
                {project.status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">نسبة التقدم</p>
                <p className="text-2xl font-bold" style={{ color: '#333333' }}>{project.progress}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">أعضاء الفريق</p>
                <p className="text-2xl font-bold" style={{ color: '#333333' }}>{project.team}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">الميزانية</p>
                <p className="text-2xl font-bold" style={{ color: '#F8C421' }}>{project.funding}</p>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="h-3 rounded-full transition-all duration-300"
                style={{ 
                  width: `${project.progress}%`,
                  background: `linear-gradient(90deg, #F8C421 0%, #FFA000 100%)`
                }}
              ></div>
            </div>
            
            <div className="flex gap-2">
              <button className="py-2 px-4 rounded-lg font-medium transition-colors" style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                إدارة المشروع
              </button>
              <button className="py-2 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                تقرير التقدم
              </button>
              <button className="py-2 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
                فريق العمل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Top Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                style={{ color: '#333333' }}
              >
                <span className="text-xl">←</span>
                العودة للرئيسية
              </button>
              <h1 className="text-2xl font-bold" style={{ color: '#333333' }}>المنصة الأكاديمية</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-2xl">🔔</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
              </button>
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl" style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                أ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <div className="flex">
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
          <div className="p-6">
            <nav className="space-y-2">
              {[
                { id: 'dashboard', label: 'لوحة التحكم', icon: '🏠' },
                { id: 'courses', label: 'إدارة الدورات', icon: '📚' },
                { id: 'research', label: 'المشاريع البحثية', icon: '🔬' },
                { id: 'students', label: 'الطلاب', icon: '👨‍🎓' },
                { id: 'schedule', label: 'الجدول الزمني', icon: '📅' },
                { id: 'analytics', label: 'التحليلات', icon: '📊' },
                { id: 'messages', label: 'الرسائل', icon: '💬' },
                { id: 'settings', label: 'الإعدادات', icon: '⚙️' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                    activeView === item.id 
                      ? 'shadow-lg transform scale-105' 
                      : 'hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeView === item.id ? '#F8C421' : 'transparent',
                    color: activeView === item.id ? '#333333' : '#666666'
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeView === 'dashboard' && renderDashboard()}
          {activeView === 'courses' && renderCourses()}
          {activeView === 'research' && renderResearch()}
          {activeView === 'students' && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>إدارة الطلاب</h2>
              <p className="text-gray-600">قريباً... سيتم إضافة هذا القسم</p>
            </div>
          )}
          {activeView === 'schedule' && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>الجدول الزمني</h2>
              <p className="text-gray-600">قريباً... سيتم إضافة هذا القسم</p>
            </div>
          )}
          {activeView === 'analytics' && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>التحليلات</h2>
              <p className="text-gray-600">قريباً... سيتم إضافة هذا القسم</p>
            </div>
          )}
          {activeView === 'messages' && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>الرسائل</h2>
              <p className="text-gray-600">قريباً... سيتم إضافة هذا القسم</p>
            </div>
          )}
          {activeView === 'settings' && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>الإعدادات</h2>
              <p className="text-gray-600">قريباً... سيتم إضافة هذا القسم</p>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-slide-in {
            animation: slideIn 0.3s ease-out;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </div>
  );
};

export default ProviderDashboard;