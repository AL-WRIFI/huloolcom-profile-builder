
import { useState } from "react";
import { Star, Search, Users, Award, BookOpen, Clock } from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      id: 1,
      title: "إعداد البحوث الأكاديمية",
      description: "مساعدة في كتابة وإعداد البحوث العلمية والأكاديمية بأعلى معايير الجودة",
      price: "من 500 ريال",
      rating: 4.8,
      provider: "د. أحمد محمد",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "حل الواجبات الجامعية",
      description: "حلول شاملة للواجبات والتكاليف الجامعية في جميع التخصصات",
      price: "من 200 ريال",
      rating: 4.9,
      provider: "أ. فاطمة علي",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "إعداد العروض التقديمية",
      description: "تصميم وإعداد عروض تقديمية احترافية ومؤثرة",
      price: "من 300 ريال",
      rating: 4.7,
      provider: "م. سارة أحمد",
      image: "/placeholder.svg"
    }
  ];

  const providers = [
    {
      id: 1,
      name: "د. أحمد محمد",
      title: "أستاذ في علوم الحاسوب",
      rating: 4.9,
      reviews: 156,
      specialties: ["البرمجة", "الذكاء الاصطناعي", "قواعد البيانات"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "أ. فاطمة علي",
      title: "مختصة في إدارة الأعمال",
      rating: 4.8,
      reviews: 98,
      specialties: ["التسويق", "المحاسبة", "إدارة المشاريع"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "م. سارة أحمد",
      title: "مهندسة تصميم جرافيكي",
      rating: 4.7,
      reviews: 134,
      specialties: ["التصميم", "العروض التقديمية", "الهوية البصرية"],
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
              احصل على أفضل الخدمات الأكاديمية
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              منصة موثوقة تربط الطلاب بأفضل المختصين لإنجاز المهام الأكاديمية بجودة عالية
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="ابحث عن الخدمة التي تحتاجها..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-4 pr-12 pl-6 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-lg"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                استعرض الخدمات
              </button>
              <button className="bg-card text-foreground px-8 py-4 rounded-lg font-semibold border border-border hover:bg-muted/50 transition-colors shadow-lg">
                انضم كمزود خدمة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">الخدمات المميزة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تصفح أفضل الخدمات الأكاديمية المتاحة على المنصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-background rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{service.provider}</span>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      طلب الخدمة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">أفضل مزودي الخدمات</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تعرف على أفضل المختصين والخبراء في المجالات المختلفة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider) => (
              <div key={provider.id} className="bg-card rounded-xl border border-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{provider.name}</h3>
                    <p className="text-muted-foreground text-sm">{provider.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{provider.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({provider.reviews} تقييم)</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  عرض الملف الشخصي
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1200+</div>
              <div className="text-muted-foreground">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">مزود خدمة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">معدل الرضا</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">دعم فني</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
