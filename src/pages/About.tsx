
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, Heart, BookOpen, Lightbulb } from 'lucide-react';
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle } from '@/components/ui/CustomCard';
import CustomButton from '@/components/ui/CustomButton';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "الجودة والتميز",
      description: "نلتزم بتقديم أعلى معايير الجودة في جميع الخدمات الأكاديمية"
    },
    {
      icon: Users,
      title: "الشراكة والتعاون",
      description: "نبني شراكات قوية مع الجامعات والمؤسسات الأكاديمية المرموقة"
    },
    {
      icon: Target,
      title: "التركيز على النتائج",
      description: "نسعى لتحقيق أهداف عملائنا الأكاديمية بأفضل الطرق الممكنة"
    },
    {
      icon: Heart,
      title: "الشغف بالتعليم",
      description: "نؤمن بقوة التعليم في تغيير حياة الأفراد والمجتمعات"
    }
  ];

  const team = [
    {
      name: "د. محمد الأحمد",
      role: "الرئيس التنفيذي",
      education: "دكتوراه في إدارة الأعمال - جامعة هارفارد",
      image: "/placeholder.svg"
    },
    {
      name: "د. فاطمة النور",
      role: "مديرة العمليات الأكاديمية",
      education: "دكتوراه في علوم التربية - جامعة أكسفورد",
      image: "/placeholder.svg"
    },
    {
      name: "أ. عبدالله حسن",
      role: "مدير التكنولوجيا",
      education: "ماجستير في علوم الحاسب - معهد MIT",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">من نحن</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            رؤيتنا هي أن نكون الجسر الذي يربط بين الطلاب والباحثين وأفضل الخبراء الأكاديميين
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">رسالتنا</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                نسعى إلى تمكين الطلاب والباحثين من تحقيق أهدافهم الأكاديمية من خلال ربطهم بأفضل المختصين 
                من الجامعات والمؤسسات الأكاديمية المرموقة حول العالم.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نؤمن بأن التعليم الجيد هو حق للجميع، ولذلك نعمل على توفير منصة موثوقة وآمنة تضمن 
                الحصول على خدمات أكاديمية عالية الجودة بأسعار عادلة.
              </p>
              <Link to="/services">
                <CustomButton size="lg" className="px-8 py-4">
                  اكتشف خدماتنا
                </CustomButton>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2019</div>
                  <div className="text-gray-600">تأسيس المنصة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">مزود خدمة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15000+</div>
                  <div className="text-gray-600">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">نسبة الرضا</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">قيمنا الأساسية</h2>
            <p className="text-xl text-gray-600">المبادئ التي نسير عليها في رحلتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <CustomCard key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CustomCardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CustomCardContent>
                </CustomCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">فريق القيادة</h2>
            <p className="text-xl text-gray-600">الخبراء الذين يقودون رؤيتنا نحو المستقبل</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <CustomCard key={index} className="text-center hover:shadow-xl transition-shadow">
                <CustomCardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.education}</p>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">انضم إلى مجتمعنا الأكاديمي</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            سواء كنت طالباً تبحث عن المساعدة أو خبيراً تريد مشاركة معرفتك، نحن نرحب بك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <CustomButton size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100">
                ابدأ الآن
              </CustomButton>
            </Link>
            <Link to="/contact">
              <CustomButton variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                تواصل معنا
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
