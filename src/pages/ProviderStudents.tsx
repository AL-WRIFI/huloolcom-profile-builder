import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderStudents = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('grid');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    {
      id: 'STU-001',
      name: 'سارة أحمد محمد',
      avatar: '👩‍🎓',
      email: 'sara.ahmed@example.com',
      phone: '+966 50 123 4567',
      university: 'جامعة الملك سعود',
      major: 'علوم الحاسوب',
      year: 'السنة الرابعة',
      gpa: '4.2',
      joinDate: '2023-09-15',
      lastActive: 'منذ يوم',
      status: 'نشط',
      completedProjects: 12,
      ongoingProjects: 2,
      totalSpent: '2,450 ر.س',
      averageRating: 4.8,
      subjects: ['البرمجة', 'قواعد البيانات', 'الذكاء الاصطناعي'],
      recentProjects: [
        { title: 'مشروع التخرج - نظام إدارة المكتبة', status: 'مكتمل', date: '2024-01-15' },
        { title: 'واجب خوارزميات الترتيب', status: 'قيد التنفيذ', date: '2024-02-01' }
      ],
      notes: 'طالبة متميزة ومجتهدة، تتفاعل بشكل إيجابي مع التوجيهات'
    },
    {
      id: 'STU-002',
      name: 'محمد الشهري',
      avatar: '👨‍💼',
      email: 'mohammed.alshehri@example.com',
      phone: '+966 55 987 6543',
      university: 'جامعة الملك فهد',
      major: 'هندسة البرمجيات',
      year: 'السنة الثالثة',
      gpa: '3.8',
      joinDate: '2023-10-20',
      lastActive: 'منذ 3 أيام',
      status: 'نشط',
      completedProjects: 8,
      ongoingProjects: 1,
      totalSpent: '1,800 ر.س',
      averageRating: 4.9,
      subjects: ['هياكل البيانات', 'البرمجة الكائنية', 'تطوير الويب'],
      recentProjects: [
        { title: 'تطبيق إدارة المهام', status: 'مكتمل', date: '2024-01-20' },
        { title: 'مشروع قاعدة البيانات', status: 'قيد التنفيذ', date: '2024-02-05' }
      ],
      notes: 'طالب نشيط ويطرح أسئلة ذكية، يحتاج للمزيد من التوجيه في الخوارزميات'
    },
    {
      id: 'STU-003',
      name: 'فاطمة العلي',
      avatar: '👩‍🔬',
      email: 'fatima.alali@example.com',
      phone: '+966 56 456 7890',
      university: 'جامعة الأميرة نورا',
      major: 'نظم المعلومات',
      year: 'ماجستير',
      gpa: '4.5',
      joinDate: '2023-08-10',
      lastActive: 'منذ أسبوع',
      status: 'متوقف مؤقتاً',
      completedProjects: 15,
      ongoingProjects: 0,
      totalSpent: '3,200 ر.س',
      averageRating: 4.7,
      subjects: ['الذكاء الاصطناعي', 'التعلم الآلي', 'تحليل البيانات'],
      recentProjects: [
        { title: 'بحث في التعلم العميق', status: 'مكتمل', date: '2024-01-10' },
        { title: 'تحليل البيانات الضخمة', status: 'مكتمل', date: '2023-12-15' }
      ],
      notes: 'طالبة ماجستير متميزة جداً، تعمل على أبحاث متقدمة في الذكاء الاصطناعي'
    },
    {
      id: 'STU-004',
      name: 'أحمد خالد',
      avatar: '👨‍🎓',
      email: 'ahmed.khaled@example.com',
      phone: '+966 54 321 0987',
      university: 'جامعة الملك عبدالعزيز',
      major: 'أمن المعلومات',
      year: 'السنة الثانية',
      gpa: '3.5',
      joinDate: '2024-01-05',
      lastActive: 'منذ ساعتين',
      status: 'نشط',
      completedProjects: 3,
      ongoingProjects: 2,
      totalSpent: '650 ر.س',
      averageRating: 4.6,
      subjects: ['أساسيات البرمجة', 'الشبكات', 'أمن المعلومات'],
      recentProjects: [
        { title: 'مشروع أمان الشبكات', status: 'قيد التنفيذ', date: '2024-02-01' },
        { title: 'واجب البرمجة بـ Python', status: 'قيد التنفيذ', date: '2024-02-10' }
      ],
      notes: 'طالب جديد يحتاج للمزيد من التوجيه والمتابعة'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'نشط': return 'bg-green-100 text-green-800';
      case 'متوقف مؤقتاً': return 'bg-yellow-100 text-yellow-800';
      case 'غير نشط': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#333333' }}>
                إدارة الطلاب
              </h1>
              <p className="opacity-70 mt-1" style={{ color: '#333333' }}>
                متابعة تقدم الطلاب وإدارة العلاقات الأكاديمية
              </p>
            </div>
            <button 
              onClick={() => navigate('/provider-dashboard')}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              العودة للوحة التحكم
            </button>
          </div>

          {/* Search and Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="البحث عن طالب..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-xl border-0 shadow-sm"
                  style={{ backgroundColor: 'white', color: '#333333' }}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveView('grid')}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeView === 'grid' ? 'shadow-md' : ''
                }`}
                style={{
                  backgroundColor: activeView === 'grid' ? '#F8C421' : 'white',
                  color: '#333333'
                }}>
                📱 شبكة
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeView === 'list' ? 'shadow-md' : ''
                }`}
                style={{
                  backgroundColor: activeView === 'list' ? '#F8C421' : 'white',
                  color: '#333333'
                }}>
                📋 قائمة
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'إجمالي الطلاب', value: students.length.toString(), icon: '👥', color: '#4ECDC4' },
            { label: 'الطلاب النشطين', value: students.filter(s => s.status === 'نشط').length.toString(), icon: '🟢', color: '#96CEB4' },
            { label: 'المشاريع الجارية', value: students.reduce((sum, s) => sum + s.ongoingProjects, 0).toString(), icon: '⚡', color: '#45B7D1' },
            { label: 'متوسط التقييم', value: '4.7', icon: '⭐', color: '#F8C421' }
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

        {/* Students Display */}
        {activeView === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <div key={student.id} 
                   className="bg-white rounded-3xl p-6 shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                   onClick={() => setSelectedStudent(student)}>
                
                {/* Student Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    {student.avatar}
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#333333' }}>
                    {student.name}
                  </h3>
                  <p className="text-sm opacity-70 mb-2" style={{ color: '#333333' }}>
                    {student.university}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full" 
                          style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                      {student.major}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100" 
                          style={{ color: '#333333' }}>
                      {student.year}
                    </span>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                    {student.status}
                  </div>
                </div>

                {/* Student Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="font-bold text-lg" style={{ color: '#333333' }}>
                      {student.completedProjects}
                    </div>
                    <div className="text-xs opacity-70" style={{ color: '#333333' }}>
                      مشاريع مكتملة
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="font-bold text-lg" style={{ color: '#333333' }}>
                      ⭐ {student.averageRating}
                    </div>
                    <div className="text-xs opacity-70" style={{ color: '#333333' }}>
                      متوسط التقييم
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-70" style={{ color: '#333333' }}>إجمالي الإنفاق</span>
                    <span className="font-semibold" style={{ color: '#333333' }}>{student.totalSpent}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-70" style={{ color: '#333333' }}>آخر نشاط</span>
                    <span style={{ color: '#333333' }}>{student.lastActive}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                    عرض الملف
                  </button>
                  <button className="px-4 py-2 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                          style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                    💬
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: '#F0F0F0', backgroundColor: '#F8F9FA' }}>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الطالب</th>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الجامعة</th>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>التخصص</th>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>المشاريع</th>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>التقييم</th>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الحالة</th>
                    <th className="text-right p-4 font-semibold" style={{ color: '#333333' }}>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} 
                        className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
                        style={{ borderColor: '#F0F0F0' }}
                        onClick={() => setSelectedStudent(student)}>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg">
                            {student.avatar}
                          </div>
                          <div>
                            <div className="font-semibold" style={{ color: '#333333' }}>
                              {student.name}
                            </div>
                            <div className="text-sm opacity-70" style={{ color: '#333333' }}>
                              {student.year}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span style={{ color: '#333333' }}>{student.university}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-xs px-2 py-1 rounded-full" 
                              style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                          {student.major}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-sm" style={{ color: '#333333' }}>
                          <div>مكتمل: {student.completedProjects}</div>
                          <div>جاري: {student.ongoingProjects}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span style={{ color: '#333333' }}>⭐ {student.averageRating}</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                                  style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                            عرض
                          </button>
                          <button className="px-3 py-1 rounded-lg text-xs border transition-all duration-300 hover:scale-105"
                                  style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                            💬
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#333333' }}>
              لا توجد نتائج
            </h3>
            <p className="opacity-70" style={{ color: '#333333' }}>
              لم يتم العثور على طلاب يطابقون البحث
            </p>
          </div>
        )}
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl">
                    {selectedStudent.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#333333' }}>
                      {selectedStudent.name}
                    </h3>
                    <p className="opacity-70" style={{ color: '#333333' }}>
                      {selectedStudent.university} • {selectedStudent.major}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  style={{ color: '#333333' }}>
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Student Info */}
                <div>
                  <h4 className="font-bold mb-4" style={{ color: '#333333' }}>
                    معلومات الطالب
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="opacity-70" style={{ color: '#333333' }}>البريد الإلكتروني</span>
                      <span style={{ color: '#333333' }}>{selectedStudent.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70" style={{ color: '#333333' }}>رقم الهاتف</span>
                      <span style={{ color: '#333333' }}>{selectedStudent.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70" style={{ color: '#333333' }}>المعدل التراكمي</span>
                      <span style={{ color: '#333333' }}>{selectedStudent.gpa}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70" style={{ color: '#333333' }}>تاريخ الانضمام</span>
                      <span style={{ color: '#333333' }}>{selectedStudent.joinDate}</span>
                    </div>
                  </div>

                  <h4 className="font-bold mt-6 mb-4" style={{ color: '#333333' }}>
                    المواد التي يدرسها
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.subjects.map((subject, index) => (
                      <span key={index} 
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects & Performance */}
                <div>
                  <h4 className="font-bold mb-4" style={{ color: '#333333' }}>
                    الأداء والمشاريع
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'مشاريع مكتملة', value: selectedStudent.completedProjects },
                      { label: 'مشاريع جارية', value: selectedStudent.ongoingProjects },
                      { label: 'متوسط التقييم', value: selectedStudent.averageRating },
                      { label: 'إجمالي الإنفاق', value: selectedStudent.totalSpent }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                        <div className="font-bold text-lg" style={{ color: '#333333' }}>
                          {stat.value}
                        </div>
                        <div className="text-xs opacity-70" style={{ color: '#333333' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-bold mb-4" style={{ color: '#333333' }}>
                    المشاريع الأخيرة
                  </h4>
                  <div className="space-y-3">
                    {selectedStudent.recentProjects.map((project, index) => (
                      <div key={index} className="p-3 rounded-xl border" style={{ borderColor: '#E0E0E0' }}>
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium" style={{ color: '#333333' }}>
                            {project.title}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="text-sm opacity-70" style={{ color: '#333333' }}>
                          {project.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="mt-8">
                <h4 className="font-bold mb-4" style={{ color: '#333333' }}>
                  ملاحظات المدرس
                </h4>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                  <p style={{ color: '#333333' }}>{selectedStudent.notes}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <button className="flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                  إرسال رسالة
                </button>
                <button className="px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                        style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                  تعديل الملاحظات
                </button>
                <button className="px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105"
                        style={{ borderColor: '#E0E0E0', color: '#333333' }}>
                  عرض التاريخ الكامل
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderStudents;