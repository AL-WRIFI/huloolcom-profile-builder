
import React from 'react';
import { BookOpen, PenTool, BarChart3, Languages, Clock, Star, CheckCircle, Users } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle, CustomCardDescription } from '@/components/ui/CustomCard';
import CustomBadge from '@/components/ui/CustomBadge';

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
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="space-y-6 animate-fade-in">
            <CustomBadge className="bg-primary/10 text-primary border-primary/20">
              🎓 خدماتنا الأكاديمية
            </CustomBadge>
            
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
              <CustomCard key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <CustomBadge className="bg-primary text-primary-foreground">
                      {service.price}
                    </CustomBadge>
                  </div>
                </div>

                <CustomCardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CustomCardTitle className="text-xl">{service.title}</CustomCardTitle>
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
                  
                  <CustomCardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CustomCardDescription>
                </CustomCardHeader>

                <CustomCardContent>
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
                      <CustomButton className="px-6 group-hover:bg-primary/90">
                        اطلب الخدمة
                      </CustomButton>
                    </div>
                  </div>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <CustomBadge className="bg-accent/10 text-accent-foreground border-accent/20">
              ⭐ لماذا تختارنا
            </CustomBadge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              ما يميزنا عن الآخرين
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نحن نقدم خدمات أكاديمية متميزة تتسم بالجودة والاحترافية والالتزام
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <CustomCard key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CustomCardContent className="p-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CustomCardContent>
              </CustomCard>
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
            <CustomButton size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl">
              احصل على استشارة مجانية
            </CustomButton>
            
            <CustomButton variant="outline" size="lg" className="text-lg px-8 py-6">
              تصفح جميع الخدمات
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
