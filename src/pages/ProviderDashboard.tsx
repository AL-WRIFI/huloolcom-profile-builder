
import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Settings, 
  User, 
  FileText, 
  Wallet, 
  TrendingUp,
  Star,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Search,
  Bell,
  Menu,
  X,
  Home,
  Award,
  Target,
  Zap,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  ShoppingCart,
  HeadphonesIcon,
  Globe
} from 'lucide-react';

const ProviderDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // بيانات وهمية للإحصائيات
  const stats = [
    {
      title: "الرصيد الذكي",
      value: "$0.00",
      subtitle: "الرصيد المتاح $0.00",
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
      icon: Wallet,
      trend: "+15%"
    },
    {
      title: "الرصيد القابل للسحب", 
      value: "$0.00",
      subtitle: "الرصيد المتاح $0.00",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      icon: DollarSign,
      trend: "+8%"
    },
    {
      title: "مشاريعي",
      value: "6",
      subtitle: "المشاريع النشطة",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      icon: Package,
      trend: "+2"
    },
    {
      title: "أعمالي",
      value: "3",
      subtitle: "الأعمال المكتملة",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      icon: Award,
      trend: "+1"
    }
  ];

  // بيانات الأقسام الفرعية
  const projectStats = [
    { label: "قيد المراجعة", value: 0, percentage: "0%" },
    { label: "قيد التنفيذ", value: 0, percentage: "0%" },
    { label: "مكتملة", value: 6, percentage: "100%" },
    { label: "مرفوضة", value: 0, percentage: "0%" }
  ];

  const quickActions = [
    { 
      title: "إضافة مشروع جديد",
      icon: Plus,
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => console.log('Add project')
    },
    {
      title: "تحديث الملف الشخصي", 
      icon: User,
      color: "bg-green-500 hover:bg-green-600",
      action: () => console.log('Update profile')
    },
    {
      title: "إدارة الخدمات",
      icon: Settings,
      color: "bg-purple-500 hover:bg-purple-600", 
      action: () => console.log('Manage services')
    },
    {
      title: "الرسائل الجديدة",
      icon: MessageSquare,
      color: "bg-orange-500 hover:bg-orange-600",
      badge: "6",
      action: () => console.log('Check messages')
    }
  ];

  const navigationItems = [
    { id: 'overview', label: 'نظرة عامة', icon: Home },
    { id: 'projects', label: 'مشاريعي', icon: Package },
    { id: 'services', label: 'خدماتي', icon: Globe },
    { id: 'messages', label: 'الرسائل', icon: MessageSquare, badge: 6 },
    { id: 'earnings', label: 'الأرباح', icon: TrendingUp },
    { id: 'profile', label: 'الملف الشخصي', icon: User },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  const recentActivity = [
    {
      type: 'project',
      title: 'تم قبول مشروع تطوير موقع إلكتروني',
      time: 'منذ ساعتين',
      status: 'success',
      amount: '$1,200'
    },
    {
      type: 'message',
      title: 'رسالة جديدة من العميل أحمد محمد',
      time: 'منذ 4 ساعات',
      status: 'info'
    },
    {
      type: 'payment',
      title: 'تم استلام دفعة مقدمة',
      time: 'أمس',
      status: 'success',
      amount: '$500'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6 animate-fade-in">
      {/* الإحصائيات الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`${stat.color} rounded-2xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-white/80" />
                  <span className="text-sm font-medium text-white/80">{stat.trend}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-white/80 text-sm mb-2">{stat.title}</p>
                <p className="text-white/60 text-xs">{stat.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* الإجراءات السريعة */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Zap className="w-6 h-6 text-yellow-500 ml-2" />
          إجراءات سريعة
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <button 
                key={index}
                onClick={action.action}
                className={`${action.color} text-white rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 relative group`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="relative">
                    <IconComponent className="w-8 h-8" />
                    {action.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {action.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{action.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* إحصائيات المشاريع */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Activity className="w-6 h-6 text-blue-500 ml-2" />
            إحصائيات المشاريع
          </h2>
          
          <div className="space-y-4">
            {projectStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-yellow-500' :
                    index === 1 ? 'bg-blue-500' :
                    index === 2 ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium text-gray-700">{stat.label}</span>
                </div>
                <div className="text-left">
                  <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                  <span className="text-sm text-gray-500 mr-2">{stat.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Clock className="w-6 h-6 text-green-500 ml-2" />
            النشاط الأخير
          </h2>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'info' ? 'bg-blue-500' : 'bg-gray-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{activity.time}</span>
                    {activity.amount && (
                      <span className="text-sm font-bold text-green-600">{activity.amount}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* معلومات إضافية */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">نصائح لتحسين الأداء</h3>
            <p className="text-gray-600 text-sm mb-4">
              يمكنك زيادة فرص الحصول على المزيد من المشاريع من خلال تحديث ملفك الشخصي وإضافة أعمال جديدة
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              تحديث الملف الشخصي
            </button>
          </div>
          <div className="hidden md:block">
            <Target className="w-16 h-16 text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header للهاتف المحمول */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">د. أحمد محمد</h1>
              <p className="text-sm text-gray-500">مطور مواقع</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation للهاتف المحمول */}
        <div className="flex overflow-x-auto px-4 pb-2 space-x-2 space-x-reverse">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-shrink-0 flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar للشاشات الكبيرة */}
        <div className="hidden lg:block w-64 bg-white shadow-sm border-l border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 space-x-reverse mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800">د. أحمد محمد</h2>
                <p className="text-sm text-gray-500">مطور مواقع</p>
              </div>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-right transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Header للشاشات الكبيرة */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {navigationItems.find(item => item.id === activeSection)?.label}
              </h1>
              <p className="text-gray-600 mt-1">مرحباً بك في لوحة التحكم</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="relative p-3 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                إضافة مشروع جديد
              </button>
            </div>
          </div>

          {/* المحتوى */}
          {activeSection === 'overview' && renderOverview()}
          {activeSection !== 'overview' && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <FileText className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {navigationItems.find(item => item.id === activeSection)?.label}
              </h3>
              <p className="text-gray-500">هذا القسم قيد التطوير</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
