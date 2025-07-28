
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Briefcase } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle, CustomCardDescription } from '@/components/ui/CustomCard';
import CustomInput from '@/components/ui/CustomInput';
import CustomBadge from '@/components/ui/CustomBadge';

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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.03"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="w-full max-w-md relative">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            مرحباً بعودتك
          </h1>
          <p className="text-muted-foreground">
            سجل الدخول للوصول إلى حسابك
          </p>
        </div>

        <CustomCard className="shadow-2xl border-0 bg-background/80 backdrop-blur-sm animate-scale-in">
          <CustomCardHeader className="text-center pb-6">
            <CustomCardTitle className="text-2xl">تسجيل الدخول</CustomCardTitle>
            <CustomCardDescription>
              اختر نوع حسابك وأدخل بياناتك
            </CustomCardDescription>
          </CustomCardHeader>

          <CustomCardContent>
            {/* User Type Selection */}
            <div className="flex gap-2 mb-6 p-1 bg-muted rounded-lg">
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'student'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
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
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
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
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <CustomInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <CustomInput
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="أدخل كلمة المرور"
                    className="pr-10 pl-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span>تذكرني</span>
                </label>
                <Link to="/forgot-password" className="text-primary hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              {/* Submit Button */}
              <CustomButton type="submit" className="w-full py-6 text-base font-medium">
                تسجيل الدخول
              </CustomButton>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">أو</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <CustomButton variant="outline" className="w-full py-6 text-base">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-5 w-5 ml-2" />
                الدخول بحساب Google
              </CustomButton>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-primary hover:underline font-medium">
                إنشاء حساب جديد
              </Link>
            </p>

            {/* User Type Info */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-3">
                {userType === 'student' ? (
                  <>
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground mb-1">حساب الطالب</p>
                      <p className="text-muted-foreground text-xs">
                        يمكنك طلب الخدمات الأكاديمية ومتابعة طلباتك
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground mb-1">حساب مزود الخدمة</p>
                      <p className="text-muted-foreground text-xs">
                        يمكنك تقديم الخدمات الأكاديمية وإدارة عملائك
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </CustomCardContent>
        </CustomCard>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center animate-fade-in" style={{animationDelay: '300ms'}}>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <p className="text-xs text-muted-foreground">أمان عالي</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-xs text-muted-foreground">سرعة في الاستجابة</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-xs text-muted-foreground">دعم 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
