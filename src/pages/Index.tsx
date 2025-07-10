
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Award, CheckCircle, Star, ArrowRight, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "أبحاث أكاديمية",
      description: "أبحاث عالية الجودة مع مراجع موثوقة وتنسيق احترافي",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "خبراء متخصصون",
      description: "فريق من الخبراء المتخصصين في مختلف المجالات الأكاديمية",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "ضمان الجودة مع إمكانية التعديل حتى الحصول على النتيجة المرضية",
      color: "text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "تسليم في الوقت",
      description: "التزام كامل بالمواعيد المحددة مع متابعة مستمرة للتقدم",
      color: "text-orange-600"
    }
  ];

  const services = [
    {
      title: "أبحاث التخرج",
      description: "مشاريع تخرج شاملة ومتميزة في جميع التخصصات",
      price: "من 500 ريال",
      icon: GraduationCap,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "التكاليف والواجبات",
      description: "حلول مبتكرة للتكاليف الجامعية والواجبات الأسبوعية",
      price: "من 50 ريال",
      icon: BookOpen,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "التحليل الإحصائي",
      description: "تحليل البيانات باستخدام أحدث البرامج الإحصائية",
      price: "من 200 ريال",
      icon: TrendingUp,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "الترجمة الأكاديمية",
      description: "ترجمة علمية دقيقة من وإلى العربية والإنجليزية",
      price: "من 5 ريال/صفحة",
      icon: Award,
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const topProviders = [
    {
      id: 1,
      name: "د. أحمد محمد",
      title: "أستاذ في علوم الحاسوب",
      rating: 4.9,
      reviews: 156,
      completedProjects: 89,
      specialization: "الذكاء الاصطناعي",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "د. فاطمة السالم",
      title: "محاضرة في إدارة الأعمال",
      rating: 4.9,
      reviews: 203,
      completedProjects: 134,
      specialization: "ريادة الأعمال",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "أ. محمد الأحمد",
      title: "مهندس معماري",
      rating: 4.7,
      reviews: 98,
      completedProjects: 67,
      specialization: "التصميم المعماري",
      avatar: "/placeholder.svg"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "طالب ماجستير - إدارة أعمال",
      content: "خدمة ممتازة وجودة عالية. تم تسليم البحث في الوقت المحدد مع مراعاة جميع المتطلبات.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "فاطمة علي",
      role: "طالبة بكالوريوس - هندسة",
      content: "فريق محترف ومتعاون. ساعدوني في حل التكاليف الصعبة بطريقة واضحة ومفهومة.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "عبدالله سالم",
      role: "طالب دكتوراه - طب",
      content: "أفضل منصة للخدمات التعليمية. التعامل مهني والأسعار معقولة جداً.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "1000+", label: "طالب راضي" },
    { number: "500+", label: "مشروع مكتمل" },
    { number: "50+", label: "خبير أكاديمي" },
    { number: "98%", label: "معدل الرضا" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <Badge className="mb-6 px-4 py-2 text-sm animate-scale-in">
                🎓 منصة تعليمية موثوقة
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                منصة <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Huloolcom</span>
                <br />
                التعليمية المتكاملة
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                نربط طلاب الجامعات بمزودي الخدمات التعليمية الموثوقين
                <br />
                للحصول على أفضل الحلول الأكاديمية والأبحاث المتميزة
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <GraduationCap className="h-6 w-6 ml-2 group-hover:rotate-12 transition-transform" />
                  ابدأ رحلتك الأكاديمية
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg group hover:bg-primary/5 transition-all duration-300">
                  استكشف الخدمات
                  <ArrowRight className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تختار منصة Huloolcom؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم خدمات تعليمية متميزة تساعدك على تحقيق أهدافك الأكاديمية بكفاءة وجودة عالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-md group hover:-translate-y-2"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardHeader>
                  <div className={`mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Providers Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              أفضل المزودين لدينا
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تعرف على نخبة من أفضل الخبراء الأكاديميين المتاحين على منصتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topProviders.map((provider, index) => (
              <Card 
                key={provider.id} 
                className="hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-md group hover:-translate-y-2"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <AvatarImage src={provider.avatar} />
                      <AvatarFallback className="text-xl">{provider.name[3]}</AvatarFallback>
                    </Avatar>
                    
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {provider.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{provider.title}</p>
                    <Badge variant="secondary" className="mb-4">{provider.specialization}</Badge>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="text-muted-foreground">({provider.reviews} تقييم)</span>
                      </div>
                      <div className="text-muted-foreground">
                        {provider.completedProjects} مشروع مكتمل
                      </div>
                    </div>
                    
                    <Link to={`/providers/${provider.id}`}>
                      <Button className="w-full mt-4 group-hover:shadow-lg transition-all">
                        عرض البروفايل
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/providers">
              <Button variant="outline" size="lg" className="group">
                عرض جميع المزودين
                <ArrowRight className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات التعليمية المصممة لتلبية احتياجاتك الأكاديمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-md group hover:-translate-y-2 ${service.color}`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Link to="/services">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white group-hover:shadow-lg transition-all">
                      اطلب الخدمة
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              آراء طلابنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تجارب حقيقية من طلاب استفادوا من خدماتنا التعليمية المتميزة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-md group hover:-translate-y-2"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic mb-6 text-center">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              جاهز لبدء رحلتك التعليمية؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              انضم إلى آلاف الطلاب الذين حققوا النجاح الأكاديمي من خلال منصة Huloolcom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <GraduationCap className="h-6 w-6 ml-2 group-hover:rotate-12 transition-transform" />
                  ابدأ الآن مجاناً
                </Button>
              </Link>
              <Link to="/providers">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg group hover:bg-primary/5 transition-all duration-300">
                  تصفح المزودين
                  <ArrowRight className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Huloolcom</h3>
                  <p className="text-sm text-gray-300">منصة تعليمية متكاملة</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                نهدف إلى تقديم أفضل الخدمات التعليمية لطلاب الجامعات في الوطن العربي
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/services" className="hover:text-primary transition-colors">أبحاث التخرج</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">التكاليف والواجبات</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">التحليل الإحصائي</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">الترجمة الأكاديمية</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط مهمة</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/providers" className="hover:text-primary transition-colors">المزودون</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">من نحن</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-gray-300">
                <p>info@huloolcom.com</p>
                <p>+966 12 345 6789</p>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Huloolcom. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
