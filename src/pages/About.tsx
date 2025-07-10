
import { GraduationCap, Users, Award, Target, Eye, Heart, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";

const About = () => {
  const stats = [
    { number: "5000+", label: "طالب راضي", icon: Users },
    { number: "500+", label: "خبير أكاديمي", icon: GraduationCap },
    { number: "10000+", label: "مشروع مكتمل", icon: Award },
    { number: "99%", label: "معدل الرضا", icon: Star }
  ];

  const values = [
    {
      icon: Target,
      title: "الهدف",
      description: "نهدف إلى تمكين الطلاب من تحقيق أهدافهم الأكاديمية بأعلى معايير الجودة والاحترافية.",
      color: "text-blue-600"
    },
    {
      icon: Eye,
      title: "الرؤية",
      description: "أن نكون المنصة الرائدة في الوطن العربي لربط الطلاب بأفضل الخبراء الأكاديميين.",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "القيم",
      description: "الجودة، الأمانة، الشفافية، والالتزام بالمواعيد هي القيم الأساسية التي نؤمن بها.",
      color: "text-purple-600"
    }
  ];

  const team = [
    {
      name: "د. محمد العلي",
      role: "المؤسس والرئيس التنفيذي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "دكتوراه في إدارة الأعمال، خبرة 15 عاماً في التعليم الإلكتروني"
    },
    {
      name: "أ. فاطمة السالم",
      role: "مديرة الجودة الأكاديمية",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=300&h=300&fit=crop&crop=face",
      description: "ماجستير في التربية، خبرة 12 عاماً في ضمان الجودة التعليمية"
    },
    {
      name: "م. أحمد محمد",
      role: "مدير التطوير التقني",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "بكالوريوس هندسة حاسوب، خبرة 10 سنوات في تطوير المنصات التعليمية"
    }
  ];

  const achievements = [
    "أول منصة عربية متخصصة في الخدمات الأكاديمية",
    "شراكات مع أكثر من 50 جامعة في الوطن العربي",
    "فريق من أكثر من 500 خبير أكاديمي معتمد",
    "أكثر من 10,000 مشروع أكاديمي مكتمل بنجاح",
    "معدل رضا العملاء 99% على مدار 5 سنوات"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm animate-scale-in">
            🎓 منصة تعليمية رائدة منذ 2019
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            من نحن؟
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            نحن منصة Huloolcom، المنصة التعليمية الرائدة في الوطن العربي التي تهدف إلى ربط الطلاب 
            بأفضل الخبراء الأكاديميين لتقديم خدمات تعليمية متميزة وحلول أكاديمية شاملة
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              رؤيتنا وقيمنا
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نؤمن بأن التعليم الجيد حق للجميع، ونسعى لتحقيق ذلك من خلال منصتنا المتطورة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg group hover:-translate-y-3"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardHeader>
                  <div className={`mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              فريق العمل
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نخبة من الخبراء والمتخصصين في التعليم والتكنولوجيا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg group hover:-translate-y-3 overflow-hidden"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                إنجازاتنا وتميزنا
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                منذ تأسيسنا، حققنا العديد من الإنجازات المهمة التي تؤكد ريادتنا في مجال التعليم الإلكتروني
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{animationDelay: `${index * 150}ms`}}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="فريق العمل"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              انضم إلى عائلة Huloolcom
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              سواء كنت طالباً تبحث عن المساعدة الأكاديمية أو خبيراً تريد تقديم خدماتك، 
              نحن هنا لنساعدك في تحقيق أهدافك
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
