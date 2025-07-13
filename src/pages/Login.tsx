
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Briefcase } from 'lucide-react';

const Login = () => {
  const [userType, setUserType] = useState<'student' | 'provider'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { ...formData, userType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233b82f6\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="w-full max-w-md relative">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            مرحباً بعودتك
          </h1>
          <p className="text-gray-600">
            سجل الدخول للوصول إلى حسابك
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm shadow-2xl bg-white/80 backdrop-blur-sm animate-scale-in">
          <div className="flex flex-col space-y-1.5 p-6 text-center pb-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">تسجيل الدخول</h3>
            <p className="text-sm text-gray-600">
              اختر نوع حسابك وأدخل بياناتك
            </p>
          </div>

          <div className="p-6 pt-0">
            {/* User Type Selection */}
            <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'student'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="h-4 w-4" />
                طالب
              </button>
              <button
                type="button"
                onClick={() => setUserType('provider')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'provider'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="h-4 w-4" />
                مزود خدمة
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="أدخل كلمة المرور"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10 pl-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>تذكرني</span>
                </label>
                <Link to="/forgot-password" className="text-blue-600 hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              {/* Submit Button */}
              <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full py-6 text-base font-medium">
                تسجيل الدخول
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">أو</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 w-full py-6 text-base">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-5 w-5 ml-2" />
                الدخول بحساب Google
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                إنشاء حساب جديد
              </Link>
            </p>

            {/* User Type Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                {userType === 'student' ? (
                  <>
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-900 mb-1">حساب الطالب</p>
                      <p className="text-gray-600 text-xs">
                        يمكنك طلب الخدمات الأكاديمية ومتابعة طلباتك
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Briefcase className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-900 mb-1">حساب مزود الخدمة</p>
                      <p className="text-gray-600 text-xs">
                        يمكنك تقديم الخدمات الأكاديمية وإدارة عملائك
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center animate-fade-in" style={{animationDelay: '300ms'}}>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-600">أمان عالي</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-green-50 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-600">سرعة في الاستجابة</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-600">دعم 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
