
import React from 'react';
import { Users, Award, Target, Heart, CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle, CustomCardDescription } from '@/components/ui/CustomCard';
import CustomBadge from '@/components/ui/CustomBadge';

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
      icon: <Target className="h-8 w-8 text-primary" />,
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="space-y-6 animate-fade-in">
            <CustomBadge className="bg-primary/10 text-primary border-primary/20">
              🏢 من نحن
            </CustomBadge>
            
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              رؤيتنا ورسالتنا
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              <h2 className="text-4xl font-bold">قصتنا</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
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
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <CustomBadge className="bg-accent/10 text-accent-foreground border-accent/20">
              💎 قيمنا
            </CustomBadge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              القيم التي نؤمن بها
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نسترشد بمجموعة من القيم الأساسية التي تشكل هويتنا وتوجه عملنا اليومي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <CustomCard key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CustomCardContent className="p-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <CustomBadge className="bg-primary/10 text-primary border-primary/20">
              📊 إنجازاتنا
            </CustomBadge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              أرقام تتحدث عن نجاحنا
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
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

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <CustomBadge className="bg-accent/10 text-accent-foreground border-accent/20">
              👥 فريقنا
            </CustomBadge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              تعرف على فريق العمل
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              فريق من الخبراء والأكاديميين المتخصصين في مختلف المجالات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <CustomCard key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CustomCardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="relative mx-auto w-24 h-24">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.position}</p>
                      <p className="text-xs text-muted-foreground">{member.specialty}</p>
                      <CustomBadge variant="secondary" className="text-xs">
                        {member.experience}
                      </CustomBadge>
                    </div>
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
              انضم إلى رحلة النجاح
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك الأكاديمية. ابدأ رحلتك معنا اليوم
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl">
              ابدأ الآن
            </CustomButton>
            
            <CustomButton variant="outline" size="lg" className="text-lg px-8 py-6">
              تواصل معنا
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
