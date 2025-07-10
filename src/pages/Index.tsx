
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Award, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "أبحاث أكاديمية",
      description: "أبحاث عالية الجودة مع مراجع موثوقة وتنسيق احترافي"
    },
    {
      icon: Users,
      title: "خبراء متخصصون",
      description: "فريق من الخبراء المتخصصين في مختلف المجالات الأكاديمية"
    },
    {
      icon: Award,
      title: "جودة مضمونة",
      description: "ضمان الجودة مع إمكانية التعديل حتى الحصول على النتيجة المرضية"
    },
    {
      icon: CheckCircle,
      title: "تسليم في الوقت",
      description: "التزام كامل بالمواعيد المحددة مع متابعة مستمرة للتقدم"
    }
  ];

  const services = [
    {
      title: "أبحاث التخرج",
      description: "مشاريع تخرج شاملة ومتميزة في جميع التخصصات",
      price: "من 500 ريال"
    },
    {
      title: "التكاليف والواجبات",
      description: "حلول مبتكرة للتكاليف الجامعية والواجبات الأسبوعية",
      price: "من 50 ريال"
    },
    {
      title: "التحليل الإحصائي",
      description: "تحليل البيانات باستخدام أحدث البرامج الإحصائية",
      price: "من 200 ريال"
    },
    {
      title: "الترجمة الأكاديمية",
      description: "ترجمة علمية دقيقة من وإلى العربية والإنجليزية",
      price: "من 5 ريال/صفحة"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "طالب ماجستير - إدارة أعمال",
      content: "خدمة ممتازة وجودة عالية. تم تسليم البحث في الوقت المحدد مع مراعاة جميع المتطلبات.",
      rating: 5
    },
    {
      name: "فاطمة علي",
      role: "طالبة بكالوريوس - هندسة",
      content: "فريق محترف ومتعاون. ساعدوني في حل التكاليف الصعبة بطريقة واضحة ومفهومة.",
      rating: 5
    },
    {
      name: "عبدالله سالم",
      role: "طالب دكتوراه - طب",
      content: "أفضل منصة للخدمات التعليمية. التعامل مهني والأسعار معقولة جداً.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              منصة <span className="text-primary">Huloolcom</span>
              <br />
              التعليمية المتكاملة
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              نربط طلاب الجامعات بمزودي الخدمات التعليمية الموثوقين
              <br />
              للحصول على أفضل الحلول الأكاديمية والأبحاث المتميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <GraduationCap className="h-6 w-6 ml-2" />
                  ابدأ رحلتك الأكاديمية
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  استكشف الخدمات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تختار منصة Huloolcom؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم خدمات تعليمية متميزة تساعدك على تحقيق أهدافك الأكاديمية بكفاءة وجودة عالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات التعليمية المصممة لتلبية احتياجاتك الأكاديمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
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
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    اطلب الخدمة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              آراء طلابنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تجارب حقيقية من طلاب استفادوا من خدماتنا التعليمية المتميزة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              جاهز لبدء رحلتك التعليمية؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              انضم إلى آلاف الطلاب الذين حققوا النجاح الأكاديمي من خلال منصة Huloolcom
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <GraduationCap className="h-6 w-6 ml-2" />
                ابدأ الآن مجاناً
              </Button>
            </Link>
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
                <li><Link to="/services/research" className="hover:text-primary transition-colors">أبحاث التخرج</Link></li>
                <li><Link to="/services/assignments" className="hover:text-primary transition-colors">التكاليف والواجبات</Link></li>
                <li><Link to="/services/analysis" className="hover:text-primary transition-colors">التحليل الإحصائي</Link></li>
                <li><Link to="/services/translation" className="hover:text-primary transition-colors">الترجمة الأكاديمية</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط مهمة</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-primary transition-colors">من نحن</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
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
