import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Sample data
  const dashboardData = {
    profile: {
      name: 'د. أحمد محمد علي',
      title: 'أستاذ الذكاء الاصطناعي',
      avatar: 'أ',
      status: 'متاح الآن',
      rating: 4.9,
      completedSessions: 247,
      totalEarnings: '125,000 ريال'
    },
    quickStats: [
      { label: 'الجلسات اليوم', value: '8', icon: '📅', change: '+12%' },
      { label: 'الطلاب النشطون', value: '156', icon: '👥', change: '+8%' },
      { label: 'التقييم المتوسط', value: '4.9', icon: '⭐', change: '+0.2' },
      { label: 'الأرباح الشهرية', value: '12,500', icon: '💰', change: '+15%' }
    ],
    recentActivity: [
      { type: 'session', student: 'سارة أحمد', subject: 'الرياضيات', time: '10:30', status: 'completed' },
      { type: 'booking', student: 'محمد علي', subject: 'الفيزياء', time: '14:00', status: 'upcoming' },
      { type: 'review', student: 'فاطمة محمد', rating: 5, comment: 'شرح ممتاز ومفصل', time: '12:15' }
    ]
  };

  const floatingComponents = [
    {
      id: 'quickActions',
      title: 'الإجراءات السريعة',
      position: { top: '20%', left: '5%' },
      content: (
        <div className="space-y-3">
          <button className="w-full p-3 rounded-xl text-left transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#F8C421', color: '#333333' }}>
            📅 جدولة جلسة جديدة
          </button>
          <button className="w-full p-3 rounded-xl text-left transition-all hover:scale-105 hover:shadow-lg border"
            style={{ borderColor: '#F8C421', color: '#333333' }}>
            💬 الرسائل الواردة
          </button>
          <button className="w-full p-3 rounded-xl text-left transition-all hover:scale-105 hover:shadow-lg border"
            style={{ borderColor: '#F8C421', color: '#333333' }}>
            📊 تقارير الأداء
          </button>
        </div>
      )
    },
    {
      id: 'earnings',
      title: 'ملخص الأرباح',
      position: { top: '20%', right: '5%' },
      content: (
        <div className="text-center space-y-4">
          <div className="text-3xl font-bold" style={{ color: '#F8C421' }}>
            125,000 ريال
          </div>
          <div className="text-sm text-gray-600">إجمالي الأرباح هذا الشهر</div>
          <div className="flex justify-between text-sm">
            <span>الأسبوع الماضي</span>
            <span style={{ color: '#F8C421' }}>+15%</span>
          </div>
        </div>
      )
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F2F2F3' }}>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin mx-auto"></div>
          <p className="text-lg" style={{ color: '#333333' }}>جاري تحميل لوحة التحكم...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-5 animate-pulse"
          style={{ backgroundColor: '#F8C421' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-3 animate-pulse"
          style={{ backgroundColor: '#F8C421' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-2 animate-pulse"
          style={{ backgroundColor: '#F8C421' }}></div>
      </div>

      {/* Floating Navigation Hub */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20">
          {[
            { id: 'overview', icon: '🏠', label: 'نظرة عامة' },
            { id: 'sessions', icon: '📚', label: 'الجلسات' },
            { id: 'students', icon: '👥', label: 'الطلاب' },
            { id: 'analytics', icon: '📊', label: 'التحليلات' },
            { id: 'settings', icon: '⚙️', label: 'الإعدادات' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="relative flex flex-col items-center p-3 rounded-xl transition-all duration-300 hover:scale-110 group"
              style={{
                backgroundColor: activeSection === item.id ? '#F8C421' : 'transparent',
                color: activeSection === item.id ? '#333333' : '#666666'
              }}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
              {activeSection === item.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 rounded-full"
                  style={{ backgroundColor: '#333333' }}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 pt-32 px-8 pb-20">
        {/* Hero Profile Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: '#F8C421' }}></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-white shadow-lg"
                  style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                  {dashboardData.profile.avatar}
                </div>
                <div className="mt-3 text-center">
                  <div className="w-3 h-3 rounded-full mx-auto animate-pulse"
                    style={{ backgroundColor: '#4CAF50' }}></div>
                  <span className="text-xs text-gray-600 mt-1 block">{dashboardData.profile.status}</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>
                  {dashboardData.profile.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{dashboardData.profile.title}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#F8C421' }}>
                      {dashboardData.profile.rating}⭐
                    </div>
                    <div className="text-sm text-gray-600">التقييم</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#F8C421' }}>
                      {dashboardData.profile.completedSessions}
                    </div>
                    <div className="text-sm text-gray-600">جلسة مكتملة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#F8C421' }}>
                      {dashboardData.profile.totalEarnings}
                    </div>
                    <div className="text-sm text-gray-600">إجمالي الأرباح</div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/profile-builder')}
                className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                تحديث الملف الشخصي
              </button>
            </div>
          </div>
        </div>

        {/* Floating Content Cards */}
        <div className="relative max-w-6xl mx-auto">
          {floatingComponents.map((component) => (
            <div
              key={component.id}
              className="absolute bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 min-w-[280px] transition-all hover:scale-105 hover:shadow-2xl"
              style={component.position}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: '#333333' }}>
                {component.title}
              </h3>
              {component.content}
            </div>
          ))}

          {/* Central Interactive Dashboard */}
          <div className="mx-auto max-w-2xl">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#333333' }}>
                إحصائيات سريعة
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {dashboardData.quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl transition-all hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: '#F8C421' + '20' }}
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#333333' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                    <div className="text-xs font-medium" style={{ color: '#F8C421' }}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Live Activity Feed */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold" style={{ color: '#333333' }}>النشاط الأخير</h3>
                {dashboardData.recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                      style={{ backgroundColor: '#F8C421' + '30' }}>
                      {activity.type === 'session' ? '📚' : activity.type === 'booking' ? '📅' : '⭐'}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium" style={{ color: '#333333' }}>
                        {activity.student}
                      </div>
                      <div className="text-sm text-gray-600">
                        {activity.subject || `تقييم: ${activity.rating}⭐`}
                      </div>
                    </div>
                    <div className="text-sm" style={{ color: '#F8C421' }}>
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="w-16 h-16 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-3xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: '#F8C421', color: '#333333' }}>
          ➕
        </button>
      </div>

      {/* Quick Search */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20 min-w-[300px]">
          <input
            type="text"
            placeholder="البحث السريع..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            style={{ backgroundColor: '#F2F2F3' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .hover-shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default ProviderDashboard;