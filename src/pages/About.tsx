
import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "د. أحمد محمد العلي",
      position: "المؤسس والمدير التنفيذي",
      specialty: "دكتوراه في إدارة الأعمال",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "15+ سنة خبرة أكاديمية"
    },
    {
      name: "د. فاطمة أحمد",
      position: "مديرة الجودة الأكاديمية",
      specialty: "دكتوراه في التعليم",
      image: "https://images.unsplash.com/photo-1494790108755-2616b056b0d3?w=300&h=300&fit=crop&crop=face",
      experience: "12+ سنة في التعليم العالي"
    },
    {
      name: "د. محمد سالم",
      position: "رئيس قسم البحوث",
      specialty: "دكتوراه في الإحصاء",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "10+ سنة في البحث العلمي"
    },
    {
      name: "أ. سارة خالد",
      position: "مديرة خدمة العملاء",
      specialty: "ماجستير في الإدارة",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "8+ سنوات في خدمة العملاء"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "التميز الأكاديمي",
      description: "نسعى لتحقيق أعلى معايير الجودة في جميع خدماتنا الأكاديمية"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "الشغف بالتعلم",
      description: "نؤمن بأهمية التعلم المستمر ونسعى لنشر هذا الشغف بين طلابنا"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "الأمانة والنزاهة",
      description: "نلتزم بأعلى معايير الأمانة الأكاديمية في جميع أعمالنا"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "التعاون والشراكة",
      description: "نبني علاقات قوية مع طلابنا ونعمل معهم كشركاء في النجاح"
    }
  ];

  const achievements = [
    { number: "2500+", label: "طالب تم مساعدته", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "بحث أكاديمي مكتمل", icon: <Award className="h-6 w-6" /> },
    { number: "50+", label: "خبير أكاديمي", icon: <Star className="h-6 w-6" /> },
    { number: "98%", label: "معدل رضا العملاء", icon: <TrendingUp className="h-6 w-6" /> }
  ];

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
              <a href="/about" className="text-blue-600 font-medium">من نحن</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">تواصل معنا</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">تسجيل الدخول</a>
              <a href="/register" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                إنشاء حساب
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600/10 via-white to-purple-600/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233b82f6\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              🏢 من نحن
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-gray-900 to-purple-600 bg-clip-text text-transparent">
              رؤيتنا ورسالتنا
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن منصة رائدة في مجال الخدمات الأكاديمية، نهدف إلى مساعدة الطلاب في تحقيق التميز الأكاديمي من خلال تقديم خدمات عالية الجودة
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900">قصتنا</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  بدأت رحلتنا في عام 2020 برؤية واضحة: تقديم خدمات أكاديمية متميزة تساعد الطلاب في تحقيق أهدافهم التعليمية. انطلقنا من فكرة بسيطة وهي أن كل طالب يستحق الحصول على المساعدة الأكاديمية اللازمة لتحقيق النجاح.
                </p>
                <p>
                  على مدار السنوات، نمت منصتنا لتصبح واحدة من أكثر المنصات الأكاديمية ثقة في المنطقة، حيث ساعدنا آلاف الطلاب في إنجاز مشاريعهم وأبحاثهم الأكاديمية بأعلى معايير الجودة.
                </p>
                <p>
                  اليوم، نفخر بفريقنا المتخصص من الأكاديميين والخبراء الذين يعملون بشغف لضمان تحقيق رضا عملائنا وتفوقهم الأكاديمي.
                </p>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our Story"
                className="relative rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
              💎 قيمنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              القيم التي نؤمن بها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نسترشد بمجموعة من القيم الأساسية التي تشكل هويتنا وتوجه عملنا اليومي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              📊 إنجازاتنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              أرقام تتحدث عن نجاحنا
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-600">
                  {achievement.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
              👥 فريقنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              تعرف على فريق العمل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فريق من الخبراء والأكاديميين المتخصصين في مختلف المجالات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm group hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="relative mx-auto w-24 h-24 mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-blue-600 text-sm font-medium mb-2">{member.position}</p>
                      <p className="text-xs text-gray-500 mb-2">{member.specialty}</p>
                      <p className="text-xs text-gray-600">{member.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100/20 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Huloolcom
            </div>
            <p className="text-gray-600 mb-8">
              منصة الخدمات الأكاديمية الأولى في المنطقة
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">
                سياسة الخصوصية
              </a>
              <a href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">
                الشروط والأحكام
              </a>
              <a href="/contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                تواصل معنا
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Huloolcom. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
