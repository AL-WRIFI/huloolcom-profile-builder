
import { FileText, Shield, Users, Scale, Eye, AlertCircle } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Huloolcom
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">الخدمات</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">تواصل معنا</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">تسجيل الدخول</a>
              <a href="/register" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                إنشاء حساب
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600/10 via-white to-purple-600/10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm animate-scale-in">
            📋 شروط وأحكام الاستخدام
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            الشروط والأحكام
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
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
            <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto mt-12 rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm bg-blue-50 border-blue-200 shadow-lg">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">ملاحظة مهمة</h3>
                <p className="text-gray-600 leading-relaxed">
                  تحتفظ منصة Huloolcom بالحق في تعديل هذه الشروط والأحكام في أي وقت. 
                  سيتم إشعار المستخدمين بأي تغييرات مهمة عبر البريد الإلكتروني أو الإشعارات على المنصة. 
                  استمرارك في استخدام المنصة بعد تعديل الشروط يعني موافقتك على الشروط الجديدة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm bg-gradient-to-r from-blue-50 to-blue-50">
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">هل لديك أسئلة حول الشروط والأحكام؟</h3>
              <p className="text-gray-600 mb-4">
                إذا كان لديك أي استفسار حول هذه الشروط، لا تتردد في التواصل معنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@huloolcom.com" 
                  className="text-blue-600 hover:underline font-medium"
                >
                  legal@huloolcom.com
                </a>
                <span className="text-gray-600 hidden sm:inline">|</span>
                <a 
                  href="tel:+966123456789" 
                  className="text-blue-600 hover:underline font-medium"
                >
                  +966 12 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
