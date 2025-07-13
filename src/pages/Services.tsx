
import React from 'react';
import { BookOpen, PenTool, BarChart3, Languages, Clock, Star, CheckCircle, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "أبحاث التخرج",
      description: "نساعدك في إعداد وكتابة بحث التخرج بأعلى المعايير الأكاديمية مع ضمان الجودة والأصالة",
      features: ["بحث شامل ومتقدم", "مراجعة لغوية دقيقة", "توثيق علمي صحيح", "مراجعة من خبراء"],
      price: "من 500 ريال",
      duration: "2-4 أسابيع",
      rating: 4.9,
      completedWorks: 150,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "التكاليف والواجبات",
      description: "حلول مخصصة وسريعة لجميع أنواع التكاليف الجامعية والواجبات الأكاديمية في مختلف التخصصات",
      features: ["حلول سريعة ومضمونة", "جودة عالية", "التزام بالمواعيد", "مراجعة شاملة"],
      price: "من 50 ريال",
      duration: "1-3 أيام",
      rating: 4.8,
      completedWorks: 320,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "التحليل الإحصائي",
      description: "تحليل البيانات الإحصائية باستخدام أحدث البرامج والتقنيات مع تفسير شامل للنتائج",
      features: ["استخدام SPSS و R", "تحليل متقدم", "تقارير مفصلة", "شرح النتائج"],
      price: "من 200 ريال",
      duration: "3-7 أيام",
      rating: 4.9,
      completedWorks: 85,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "الترجمة الأكاديمية",
      description: "ترجمة المحتوى الأكاديمي والعلمي بدقة عالية مع الحفاظ على المصطلحات المتخصصة",
      features: ["ترجمة علمية دقيقة", "مراجعة لغوية", "توثيق المراجع", "خبراء متخصصون"],
      price: "من 10 ريال/صفحة",
      duration: "1-5 أيام",
      rating: 4.7,
      completedWorks: 200,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "جودة مضمونة",
      description: "نضمن أعلى مستويات الجودة في جميع خدماتنا"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "التزام بالمواعيد",
      description: "نلتزم بتسليم العمل في الوقت المحدد دون تأخير"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "خبراء متخصصون",
      description: "فريق من الأكاديميين والخبراء في مختلف المجالات"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: "رضا العملاء",
      description: "نحرص على تحقيق أعلى مستويات رضا عملائنا"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
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
              <a href="/" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
              <a href="/services" className="text-primary font-medium">الخدمات</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">من نحن</a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">تواصل معنا</a>
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
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f59e0b\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"7\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary/10 text-primary border-primary/20">
              🎓 خدماتنا الأكاديمية
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              خدمات أكاديمية شاملة
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة متكاملة من الخدمات الأكاديمية المتخصصة لمساعدة الطلاب في تحقيق التميز والنجاح في مسيرتهم التعليمية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
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
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight text-xl">{service.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{service.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        {service.completedWorks} عمل مكتمل
                      </div>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 px-6 group-hover:bg-primary/90">
                        اطلب الخدمة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-accent/10 text-accent-foreground border-accent/20">
              ⭐ لماذا تختارنا
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              ما يميزنا عن الآخرين
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نحن نقدم خدمات أكاديمية متميزة تتسم بالجودة والاحترافية والالتزام
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تواصل معنا الآن واحصل على استشارة مجانية لتحديد الخدمة المناسبة لاحتياجاتك
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-lg py-6 shadow-lg hover:shadow-xl">
              احصل على استشارة مجانية
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-lg py-6">
              تصفح جميع الخدمات
            </button>
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

export default Services;
