
import { FileText, Shield, Users, Scale, Eye, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "التعريفات والمصطلحات",
      content: [
        "المنصة: تعني موقع Huloolcom الإلكتروني وجميع خدماته",
        "المستخدم: أي شخص يستخدم المنصة سواء كان طالباً أو مزود خدمة",
        "الخدمات: جميع الخدمات الأكاديمية المقدمة عبر المنصة",
        "المحتوى: جميع النصوص والصور والمواد المتاحة على المنصة"
      ]
    },
    {
      icon: Users,
      title: "حقوق والتزامات المستخدمين",
      content: [
        "يحق لجميع المستخدمين الوصول إلى خدمات المنصة وفقاً لهذه الشروط",
        "يلتزم المستخدمون بتقديم معلومات صحيحة وحديثة عند التسجيل",
        "يحظر استخدام المنصة لأغراض غير قانونية أو مخالفة للآداب العامة",
        "يلتزم مزودو الخدمات بتقديم خدمات عالية الجودة في المواعيد المحددة"
      ]
    },
    {
      icon: Shield,
      title: "سياسة الخصوصية وحماية البيانات",
      content: [
        "نحن ملتزمون بحماية خصوصية المستخدمين وبياناتهم الشخصية",
        "لا نشارك البيانات الشخصية مع أطراف ثالثة دون موافقة صريحة",
        "نستخدم تقنيات التشفير المتقدمة لحماية البيانات",
        "يحق للمستخدمين طلب حذف بياناتهم في أي وقت"
      ]
    },
    {
      icon: Scale,
      title: "سياسة الدفع والاسترداد",
      content: [
        "جميع المدفوعات تتم عبر بوابات دفع آمنة ومعتمدة",
        "يحق للعملاء طلب استرداد الأموال في حالة عدم تلقي الخدمة",
        "يتم معالجة طلبات الاسترداد خلال 3-5 أيام عمل",
        "تحتفظ المنصة بعمولة 10% من قيمة الخدمة كرسوم إدارية"
      ]
    },
    {
      icon: Eye,
      title: "المراقبة وضمان الجودة",
      content: [
        "تراقب المنصة جودة الخدمات المقدمة لضمان المعايير العالية",
        "يحق للمنصة رفض أو إلغاء أي خدمة لا تلبي معايير الجودة",
        "نوفر نظام تقييم وتعليقات للحفاظ على جودة الخدمات",
        "يتم مراجعة مزودي الخدمات بشكل دوري لضمان الالتزام بالمعايير"
      ]
    },
    {
      icon: AlertCircle,
      title: "القيود والمحظورات",
      content: [
        "يحظر نشر محتوى مخالف للقوانين أو الآداب العامة",
        "يحظر انتهاك حقوق الملكية الفكرية للآخرين",
        "يحظر محاولة اختراق المنصة أو التلاعب بأنظمتها",
        "يحظر إنشاء حسابات وهمية أو تقديم معلومات كاذبة"
      ]
    }
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
            📋 شروط وأحكام الاستخدام
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            الشروط والأحكام
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة Huloolcom. 
            باستخدامك للمنصة، فإنك توافق على الالتزام بهذه الشروط
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto animate-fade-in">
            <p className="text-yellow-800 text-sm">
              <strong>تاريخ آخر تحديث:</strong> 10 يوليو 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <Card className="max-w-4xl mx-auto mt-12 bg-primary/5 border-primary/20 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">ملاحظة مهمة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تحتفظ منصة Huloolcom بالحق في تعديل هذه الشروط والأحكام في أي وقت. 
                  سيتم إشعار المستخدمين بأي تغييرات مهمة عبر البريد الإلكتروني أو الإشعارات على المنصة. 
                  استمرارك في استخدام المنصة بعد تعديل الشروط يعني موافقتك على الشروط الجديدة.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Questions */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-0">
            <CardContent className="pt-6">
              <h3 className="font-bold text-foreground mb-4">هل لديك أسئلة حول الشروط والأحكام؟</h3>
              <p className="text-muted-foreground mb-4">
                إذا كان لديك أي استفسار حول هذه الشروط، لا تتردد في التواصل معنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@huloolcom.com" 
                  className="text-primary hover:underline font-medium"
                >
                  legal@huloolcom.com
                </a>
                <span className="text-muted-foreground hidden sm:inline">|</span>
                <a 
                  href="tel:+966123456789" 
                  className="text-primary hover:underline font-medium"
                >
                  +966 12 345 6789
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
