
import { Users, Target, Eye, Award, Shield, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "الثقة والأمان",
      description: "نضمن أعلى معايير الأمان وحماية البيانات لجميع المستخدمين"
    },
    {
      icon: Award,
      title: "الجودة والتميز",
      description: "نلتزم بتقديم أفضل الخدمات بجودة عالية ومعايير مهنية"
    },
    {
      icon: Clock,
      title: "الالتزام بالمواعيد",
      description: "نحرص على تسليم جميع المشاريع في الوقت المحدد"
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description: "نؤمن بقوة التعاون والعمل المشترك لتحقيق أفضل النتائج"
    }
  ];

  const team = [
    {
      name: "أحمد محمد الأحمد",
      position: "المدير التنفيذي",
      description: "خريج إدارة أعمال بخبرة 15 عام في مجال التكنولوجيا والتعليم",
      image: "/placeholder.svg"
    },
    {
      name: "فاطمة علي السالم",
      position: "مديرة العمليات",
      description: "متخصصة في إدارة المشاريع والجودة مع خبرة 12 عام",
      image: "/placeholder.svg"
    },
    {
      name: "محمد سعد الغامدي",
      position: "مدير التقنية",
      description: "مهندس برمجيات مع خبرة واسعة في تطوير المنصات التعليمية",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              من نحن
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              نحن منصة رائدة في مجال الخدمات الأكاديمية، نهدف إلى ربط الطلاب بأفضل المختصين 
              لإنجاز مهامهم الأكاديمية بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">رسالتنا</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نسعى إلى تمكين الطلاب من تحقيق أهدافهم الأكاديمية من خلال ربطهم بمجتمع من 
                الخبراء والمختصين المؤهلين، مع ضمان الجودة والالتزام بأعلى المعايير المهنية.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نؤمن بأن التعليم حق للجميع، ونعمل على توفير خدمات أكاديمية متميزة وبأسعار 
                عادلة تناسب جميع الفئات.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">رؤيتنا</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                أن نكون المنصة الأولى والأكثر ثقة في الوطن العربي لتقديم الخدمات الأكاديمية، 
                ونساهم في رفع مستوى التعليم والبحث العلمي في المنطقة.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نتطلع إلى بناء مجتمع أكاديمي متكامل يجمع بين الطلاب والباحثين والمختصين 
                لتبادل المعرفة والخبرات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">قيمنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              القيم التي نؤمن بها ونسعى لتطبيقها في جميع جوانب عملنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">فريق العمل</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تعرف على الفريق المتخصص الذي يقف وراء نجاح المنصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-xl border border-border p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2018</div>
              <div className="text-muted-foreground">سنة التأسيس</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10000+</div>
              <div className="text-muted-foreground">طالب راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">مختص معتمد</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15000+</div>
              <div className="text-muted-foreground">مشروع منجز</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
