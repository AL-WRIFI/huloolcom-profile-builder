
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp, Star, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle, CustomCardDescription } from '@/components/ui/CustomCard';
import CustomBadge from '@/components/ui/CustomBadge';

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "أبحاث التخرج",
      description: "مساعدة شاملة في إعداد وكتابة أبحاث التخرج بأعلى المعايير الأكاديمية",
      features: ["بحث متقدم", "مراجعة لغوية", "توثيق علمي"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "التكاليف والواجبات",
      description: "حلول مخصصة لجميع أنواع التكاليف الجامعية والواجبات الأكاديمية",
      features: ["حلول سريعة", "جودة عالية", "مواعيد محددة"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "التحليل الإحصائي",
      description: "تحليل البيانات الإحصائية باستخدام أحدث البرامج والتقنيات",
      features: ["SPSS", "R Studio", "تقارير مفصلة"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "الترجمة الأكاديمية",
      description: "ترجمة المحتوى الأكاديمي بدقة عالية ومصطلحات متخصصة",
      features: ["ترجمة علمية", "مراجعة لغوية", "توثيق مراجع"]
    }
  ];

  const providers = [
    {
      name: "د. أحمد محمد",
      specialty: "أستاذ دكتور - إدارة الأعمال",
      rating: 4.9,
      completedWorks: 250,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "د. سارة أحمد",
      specialty: "أستاذ مساعد - علم النفس",
      rating: 4.8,
      completedWorks: 180,
      image: "https://images.unsplash.com/photo-1494790108755-2616b056b0d3?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "د. محمد علي",
      specialty: "أستاذ مشارك - الهندسة",
      rating: 4.9,
      completedWorks: 320,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const achievements = [
    { number: "2500+", label: "طالب راضٍ" },
    { number: "500+", label: "بحث مكتمل" },
    { number: "50+", label: "أكاديمي خبير" },
    { number: "98%", label: "معدل الرضا" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-background to-accent/10 py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <CustomBadge className="bg-primary/10 text-primary border-primary/20">
                  ✨ منصة الخدمات الأكاديمية الرائدة
                </CustomBadge>
                
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
                  نجاحك الأكاديمي
                  <span className="block text-primary">يبدأ من هنا</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  احصل على أفضل الخدمات الأكاديمية من خبراء متخصصين. نساعدك في تحقيق أهدافك التعليمية بجودة عالية ومواعيد محددة.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  ابدأ رحلتك الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </CustomButton>
                
                <CustomButton variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-primary/5">
                  استكشف الخدمات
                </CustomButton>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">جودة مضمونة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-muted-foreground">تسليم سريع</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-muted-foreground">سرية تامة</span>
                </div>
              </div>
            </div>

            <div className="relative lg:animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Academic Success"
                className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-4xl lg:text-5xl font-bold text-primary">
                  {achievement.number}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <CustomBadge className="bg-primary/10 text-primary border-primary/20">
              🎓 خدماتنا الأكاديمية
            </CustomBadge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              خدمات شاملة لنجاحك الأكاديمي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات الأكاديمية المتخصصة لمساعدتك في تحقيق التميز
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <CustomCard key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CustomCardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CustomCardTitle className="text-xl">{service.title}</CustomCardTitle>
                  </div>
                  <CustomCardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CustomCardDescription>
                </CustomCardHeader>
                
                <CustomCardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <CustomBadge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </CustomBadge>
                    ))}
                  </div>
                  
                  <CustomButton className="w-full group-hover:bg-primary/90">
                    اطلب الخدمة الآن
                    <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CustomButton>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Top Providers Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <CustomBadge className="bg-accent/10 text-accent-foreground border-accent/20">
              ⭐ أفضل المزودين
            </CustomBadge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              خبراء أكاديميون متميزون
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              تعرف على نخبة من الأكاديميين والخبراء المتخصصين في مختلف المجالات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <CustomCard key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CustomCardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={provider.image}
                        alt={provider.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{provider.name}</h3>
                      <p className="text-sm text-muted-foreground">{provider.specialty}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{provider.rating}</span>
                      </div>
                      <CustomBadge variant="secondary" className="text-xs">
                        {provider.completedWorks} عمل مكتمل
                      </CustomBadge>
                    </div>

                    <CustomButton variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      عرض الملف الشخصي
                    </CustomButton>
                  </div>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/providers">
              <CustomButton size="lg" variant="outline" className="px-8">
                عرض جميع المزودين
                <ArrowRight className="mr-2 h-5 w-5" />
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              جاهز لبدء رحلتك الأكاديمية؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              انضم إلى آلاف الطلاب الذين حققوا النجاح الأكاديمي معنا. ابدأ الآن واحصل على أفضل الخدمات
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <CustomButton size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl">
                إنشاء حساب جديد
                <ArrowRight className="mr-2 h-5 w-5" />
              </CustomButton>
            </Link>
            
            <Link to="/contact">
              <CustomButton variant="outline" size="lg" className="text-lg px-8 py-6">
                تواصل معنا
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
