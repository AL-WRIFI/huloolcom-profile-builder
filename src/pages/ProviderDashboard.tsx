
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
  X
} from 'lucide-react';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle } from '@/components/ui/CustomCard';
import CustomButton from '@/components/ui/CustomButton';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: "إجمالي الأرباح",
      value: "12,450 ريال",
      change: "+15%",
      changeType: "positive",
      icon: Wallet,
      color: "bg-green-500"
    },
    {
      title: "المشاريع النشطة",
      value: "8",
      change: "+2",
      changeType: "positive",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      title: "العملاء",
      value: "156",
      change: "+12",
      changeType: "positive",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "متوسط التقييم",
      value: "4.9",
      change: "0.0",
      changeType: "neutral",
      icon: Star,
      color: "bg-yellow-500"
    }
  ];

  const recentOrders = [
    {
      id: "ORD001",
      title: "تطوير موقع إلكتروني",
      client: "أحمد محمد",
      amount: "1,200 ريال",
      status: "in_progress",
      deadline: "2024-01-15",
      priority: "high"
    },
    {
      id: "ORD002", 
      title: "تصميم هوية بصرية",
      client: "فاطمة علي",
      amount: "800 ريال",
      status: "pending",
      deadline: "2024-01-20",
      priority: "medium"
    },
    {
      id: "ORD003",
      title: "كتابة محتوى تسويقي",
      client: "محمد حسن",
      amount: "450 ريال",
      status: "completed",
      deadline: "2024-01-10",
      priority: "low"
    }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: BarChart3 },
    { id: 'orders', label: 'الطلبات', icon: FileText },
    { id: 'services', label: 'خدماتي', icon: Settings },
    { id: 'messages', label: 'الرسائل', icon: MessageSquare },
    { id: 'calendar', label: 'التقويم', icon: Calendar },
    { id: 'earnings', label: 'الأرباح', icon: Wallet },
    { id: 'profile', label: 'الملف الشخصي', icon: User }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'pending': { label: 'في الانتظار', class: 'bg-yellow-100 text-yellow-800', icon: AlertCircle },
      'in_progress': { label: 'قيد التنفيذ', class: 'bg-blue-100 text-blue-800', icon: Clock },
      'completed': { label: 'مكتمل', class: 'bg-green-100 text-green-800', icon: CheckCircle },
      'cancelled': { label: 'ملغي', class: 'bg-red-100 text-red-800', icon: XCircle }
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap];
    const IconComponent = statusInfo.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusInfo.class}`}>
        <IconComponent className="w-3 h-3" />
        {statusInfo.label}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityMap = {
      'high': { label: 'عالية', class: 'bg-red-100 text-red-800' },
      'medium': { label: 'متوسطة', class: 'bg-yellow-100 text-yellow-800' },
      'low': { label: 'منخفضة', class: 'bg-gray-100 text-gray-800' }
    };
    
    const priorityInfo = priorityMap[priority as keyof typeof priorityMap];
    
    return (
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${priorityInfo.class}`}>
        {priorityInfo.label}
      </span>
    );
  };

  const renderDashboardContent = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <CustomCard key={index} className="hover:shadow-lg transition-shadow">
              <CustomCardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 
                        stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 mr-1">من الشهر الماضي</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CustomCardContent>
            </CustomCard>
          );
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <div className="lg:col-span-2">
          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle className="flex items-center justify-between">
                <span>الأرباح الشهرية</span>
                <CustomButton variant="outline" size="sm">
                  <Filter className="w-4 h-4 ml-1" />
                  تصفية
                </CustomButton>
              </CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">رسم بياني للأرباح</p>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>

        {/* Quick Actions */}
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>إجراءات سريعة</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="space-y-3">
            <CustomButton className="w-full justify-start">
              <Plus className="w-4 h-4 ml-2" />
              إضافة خدمة جديدة
            </CustomButton>
            <CustomButton variant="outline" className="w-full justify-start">
              <MessageSquare className="w-4 h-4 ml-2" />
              الرد على الرسائل
            </CustomButton>
            <CustomButton variant="outline" className="w-full justify-start">
              <Calendar className="w-4 h-4 ml-2" />
              جدولة موعد
            </CustomButton>
            <CustomButton variant="outline" className="w-full justify-start">
              <Settings className="w-4 h-4 ml-2" />
              إعدادات الحساب
            </CustomButton>
          </CustomCardContent>
        </CustomCard>
      </div>

      {/* Recent Orders */}
      <CustomCard>
        <CustomCardHeader>
          <CustomCardTitle className="flex items-center justify-between">
            <span>الطلبات الأخيرة</span>
            <CustomButton variant="outline" size="sm">
              عرض الكل
            </CustomButton>
          </CustomCardTitle>
        </CustomCardHeader>
        <CustomCardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-medium text-gray-700">رقم الطلب</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">العنوان</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">العميل</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">المبلغ</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">الحالة</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">الأولوية</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">الموعد النهائي</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-700">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{order.id}</td>
                    <td className="py-3 px-4">{order.title}</td>
                    <td className="py-3 px-4">{order.client}</td>
                    <td className="py-3 px-4 font-medium text-green-600">{order.amount}</td>
                    <td className="py-3 px-4">{getStatusBadge(order.status)}</td>
                    <td className="py-3 px-4">{getPriorityBadge(order.priority)}</td>
                    <td className="py-3 px-4 text-gray-600">{order.deadline}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CustomCardContent>
      </CustomCard>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-3 text-right rounded-lg mb-1 transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="w-5 h-5 ml-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Profile Section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="mr-3">
              <p className="text-sm font-medium text-gray-800">د. أحمد محمد</p>
              <p className="text-xs text-gray-500">مزود خدمات</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:mr-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 ml-2"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">
                {menuItems.find(item => item.id === activeTab)?.label}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="بحث..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && renderDashboardContent()}
          {activeTab !== 'dashboard' && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {menuItems.find(item => item.id === activeTab)?.label}
              </h3>
              <p className="text-gray-500">هذا القسم قيد التطوير</p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ProviderDashboard;
