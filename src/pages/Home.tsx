
import React from 'react';
import { BookOpen, Users, Award, Star, ArrowRight, CheckCircle, MessageSquare, Clock, TrendingUp } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "أبحاث متخصصة",
      description: "نقدم أبحاث أكاديمية متخصصة في جميع المجالات مع ضمان الجودة والأصالة"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "خبراء أكاديميون",
      description: "فريق من الأكاديميين والخبراء المتخصصين في مختلف المجالات العلمية"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "جودة مضمونة",
      description: "نضمن أعلى مستويات الجودة مع إمكانية المراجعة والتعديل"
    }
  ];

  const services = [
    {
      title: "أبحاث التخرج",
      description: "إعداد أبحاث التخرج الجامعية بأعلى المعايير الأكاديمية",
      price: "من 500 ريال",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: "التكاليف والواجبات",
      description: "حلول سريعة ومضمونة لجميع أنواع التكاليف الجامعية",
      price: "من 50 ريال",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"
    },
    {
      title: "التحليل الإحصائي",
      description: "تحليل البيانات الإحصائية باستخدام أحدث البرامج",
      price: "من 200 ريال",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      comment: "خدمة ممتازة وجودة عالية، ساعدوني في إنجاز بحث التخرج بأفضل شكل",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "فاطمة أحمد",
      comment: "سرعة في التنفيذ والتزام بالمواعيد، أنصح بشدة بالتعامل معهم",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b056b0d3?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "سارة خالد",
      comment: "فريق محترف ومتعاون، النتائج فاقت توقعاتي بكثير",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Huloolcom
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">الخدمات</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">من نحن</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">تواصل معنا</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-foreground hover:text-primary transition-colors">تسجيل الدخول</a>
              <a href="/register" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                إنشاء حساب
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f59e0b\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary border-primary/20">
              🎓 منصة الخدمات الأكاديمية الأولى
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
              حلول أكاديمية متكاملة
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              نساعدك في تحقيق التفوق الأكاديمي من خلال خدمات متخصصة عالية الجودة
              مقدمة من نخبة من الأكاديميين والخبراء
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/services" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-lg py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                اكتشف خدماتنا
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              
              <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-lg py-6">
                <MessageSquare className="h-5 w-5 ml-2" />
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus-offset-2 bg-accent/10 text-accent-foreground border-accent/20">
              ⭐ لماذا تختارنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              ما يميزنا عن الآخرين
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نقدم خدمات أكاديمية متميزة تجمع بين الخبرة والاحترافية والجودة العالية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary border-primary/20">
              🚀 خدماتنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              الخدمات الأكثر طلباً
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مجموعة شاملة من الخدمات الأكاديمية المتخصصة لتلبية جميع احتياجاتك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 cursor-pointer animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground">
                      {service.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                
                <div className="p-6 pt-0">
                  <a href="/services" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full group-hover:bg-primary/90">
                    اطلب الخدمة
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-lg py-6">
              عرض جميع الخدمات
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2500+", label: "طالب سعيد", icon: <Users className="h-8 w-8" /> },
              { number: "500+", label: "بحث مكتمل", icon: <BookOpen className="h-8 w-8" /> },
              { number: "50+", label: "خبير أكاديمي", icon: <Award className="h-8 w-8" /> },
              { number: "98%", label: "معدل الرضا", icon: <TrendingUp className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-accent/10 text-accent-foreground border-accent/20">
              💬 آراء العملاء
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              ما يقوله عملاؤنا
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              انضم إلى آلاف الطلاب الذين حققوا التفوق الأكاديمي معنا
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-lg py-6 shadow-lg hover:shadow-xl">
              ابدأ الآن مجاناً
            </a>
            
            <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-lg py-6">
              تحدث مع خبير
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/20 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Huloolcom
            </div>
            <p className="text-muted-foreground mb-8">
              منصة الخدمات الأكاديمية الأولى في المنطقة
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                تواصل معنا
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Huloolcom. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
