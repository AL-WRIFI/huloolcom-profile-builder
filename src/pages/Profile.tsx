
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, Star, Edit, Camera, Save, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'أحمد محمد العلي',
    email: 'ahmed.ali@example.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، السعودية',
    bio: 'طالب دكتوراه في علوم الحاسوب، متخصص في الذكاء الاصطناعي وتعلم الآلة',
    university: 'جامعة الملك سعود',
    field: 'علوم الحاسوب',
    joinDate: '2023-01-15'
  });

  const [editData, setEditData] = useState(profileData);

  const stats = [
    { label: 'المشاريع المكتملة', value: '12', icon: Award },
    { label: 'التقييم', value: '4.9', icon: Star },
    { label: 'سنوات الخبرة', value: '3', icon: Calendar }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'بحث في الذكاء الاصطناعي',
      status: 'مكتمل',
      date: '2024-01-15',
      rating: 5
    },
    {
      id: 2,
      title: 'تحليل البيانات الإحصائية',
      status: 'جاري العمل',
      date: '2024-01-10',
      rating: null
    },
    {
      id: 3,
      title: 'كتابة مقال أكاديمي',
      status: 'مكتمل',
      date: '2023-12-20',
      rating: 4
    }
  ];

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Huloolcom
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">الخدمات</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">تواصل معنا</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="text-blue-600 font-medium">البروفايل</div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="p-6 -mt-16 relative">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-16 w-16 text-gray-500" />
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                    <p className="text-gray-600 mb-4">{profileData.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>{profileData.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{profileData.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{profileData.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>انضم في {new Date(profileData.joinDate).toLocaleDateString('ar-SA')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                  >
                    <Edit className="h-4 w-4" />
                    تعديل البروفايل
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <h3 className="text-xl font-semibold leading-none tracking-tight">المشاريع الأخيرة</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{project.title}</h4>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.status === 'مكتمل' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{new Date(project.date).toLocaleDateString('ar-SA')}</span>
                      {project.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{project.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <h3 className="text-xl font-semibold leading-none tracking-tight">المعلومات الأكاديمية</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">الجامعة</label>
                  <p className="text-gray-900 mt-1">{profileData.university}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">التخصص</label>
                  <p className="text-gray-900 mt-1">{profileData.field}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">النبذة الشخصية</label>
                  <p className="text-gray-900 mt-1 leading-relaxed">{profileData.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold leading-none tracking-tight">تعديل البروفايل</h3>
                <button
                  onClick={handleCancel}
                  className="rounded-md p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">الاسم الكامل</label>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">رقم الهاتف</label>
                  <input
                    type="tel"
                    value={editData.phone}
                    onChange={(e) => setEditData({...editData, phone: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">الموقع</label>
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => setEditData({...editData, location: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">الجامعة</label>
                  <input
                    type="text"
                    value={editData.university}
                    onChange={(e) => setEditData({...editData, university: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">التخصص</label>
                  <input
                    type="text"
                    value={editData.field}
                    onChange={(e) => setEditData({...editData, field: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">النبذة الشخصية</label>
                  <textarea
                    value={editData.bio}
                    onChange={(e) => setEditData({...editData, bio: e.target.value})}
                    className="flex min-h-20 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    rows={4}
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 flex-1"
                  >
                    <Save className="h-4 w-4" />
                    حفظ التغييرات
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 flex-1"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
