
import { useState } from "react";
import { Search, Filter, BookOpen, Users, Award, Clock, Star, ArrowRight } from "lucide-react";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");

  const categories = [
    { id: "all", name: "جميع الخدمات", count: 156 },
    { id: "research", name: "البحوث الأكاديمية", count: 45 },
    { id: "assignments", name: "الواجبات", count: 38 },
    { id: "presentations", name: "العروض التقديمية", count: 25 },
    { id: "thesis", name: "رسائل الماجستير", count: 18 },
    { id: "translation", name: "الترجمة", count: 20 },
    { id: "tutoring", name: "التدريس الخصوصي", count: 10 }
  ];

  const services = [
    {
      id: 1,
      title: "إعداد البحوث الأكاديمية المتخصصة",
      description: "خدمة شاملة لإعداد البحوث الأكاديمية في جميع التخصصات مع ضمان الجودة والأصالة",
      price: "من 800 ريال",
      originalPrice: "1200 ريال",
      rating: 4.9,
      reviews: 127,
      provider: {
        name: "د. أحمد محمد",
        image: "/placeholder.svg",
        verified: true
      },
      category: "research",
      duration: "7-14 يوم",
      features: ["بحث أصلي 100%", "مراجع محدثة", "تدقيق لغوي", "تسليم في الموعد"],
      image: "/placeholder.svg",
      badge: "الأكثر طلباً"
    },
    {
      id: 2,
      title: "حل الواجبات الجامعية",
      description: "حلول شاملة ومفصلة للواجبات الجامعية في مختلف التخصصات",
      price: "من 200 ريال",
      rating: 4.8,
      reviews: 89,
      provider: {
        name: "أ. فاطمة علي",
        image: "/placeholder.svg",
        verified: true
      },
      category: "assignments",
      duration: "2-5 أيام",
      features: ["حلول مفصلة", "شرح الخطوات", "متابعة مجانية"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "إعداد العروض التقديمية الاحترافية",
      description: "تصميم وإعداد عروض تقديمية متميزة وجذابة لجميع المناسبات",
      price: "من 400 ريال",
      rating: 4.7,
      reviews: 156,
      provider: {
        name: "م. سارة أحمد",
        image: "/placeholder.svg",
        verified: true
      },
      category: "presentations",
      duration: "3-7 أيام",
      features: ["تصميم احترافي", "محتوى متميز", "تفاعلي"],
      image: "/placeholder.svg",
      badge: "جديد"
    },
    {
      id: 4,
      title: "ترجمة النصوص الأكاديمية",
      description: "ترجمة دقيقة ومتخصصة للنصوص الأكاديمية والعلمية",
      price: "من 150 ريال",
      rating: 4.6,
      reviews: 73,
      provider: {
        name: "د. محمد سالم",
        image: "/placeholder.svg",
        verified: true
      },
      category: "translation",
      duration: "1-3 أيام",
      features: ["ترجمة دقيقة", "مراجعة لغوية", "تسليم سريع"],
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "التدريس الخصوصي أونلاين",
      description: "جلسات تدريس خصوصي فردية أو جماعية عبر الإنترنت",
      price: "من 100 ريال/ساعة",
      rating: 4.9,
      reviews: 234,
      provider: {
        name: "أ. علي حسن",
        image: "/placeholder.svg",
        verified: true
      },
      category: "tutoring",
      duration: "حسب الحاجة",
      features: ["تفاعل مباشر", "مرونة في المواعيد", "متابعة مستمرة"],
      image: "/placeholder.svg",
      badge: "الأعلى تقييماً"
    },
    {
      id: 6,
      title: "إشراف على رسائل الماجستير",
      description: "إشراف أكاديمي متخصص على رسائل الماجستير والدكتوراه",
      price: "من 2000 ريال",
      rating: 4.8,
      reviews: 45,
      provider: {
        name: "د. نوال أحمد",
        image: "/placeholder.svg",
        verified: true
      },
      category: "thesis",
      duration: "2-6 أشهر",
      features: ["إشراف متخصص", "متابعة دورية", "تقييم مستمر"],
      image: "/placeholder.svg"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              جميع الخدمات الأكاديمية
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              اكتشف مجموعة واسعة من الخدمات الأكاديمية المتخصصة من أفضل الخبراء
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                التصنيفات
              </h3>
              
              <div className="space-y-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-right transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <span className="text-sm">{category.count}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-3">النطاق السعري</h4>
                <div className="space-y-2">
                  {[
                    { id: "all", label: "جميع الأسعار" },
                    { id: "low", label: "أقل من 500 ريال" },
                    { id: "medium", label: "500 - 1000 ريال" },
                    { id: "high", label: "أكثر من 1000 ريال" }
                  ].map((range) => (
                    <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.id}
                        checked={priceRange === range.id}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm text-foreground">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">ترتيب حسب:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-card border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="popular">الأكثر طلباً</option>
                  <option value="rating">الأعلى تقييماً</option>
                  <option value="price-low">السعر من الأقل للأعلى</option>
                  <option value="price-high">السعر من الأعلى للأقل</option>
                  <option value="newest">الأحدث</option>
                </select>
              </div>
              <div className="text-muted-foreground">
                {filteredServices.length} خدمة متاحة
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary" />
                    {service.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Provider Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-foreground">{service.provider.name}</span>
                          {service.provider.verified && (
                            <Award className="h-3 w-3 text-primary" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{service.rating}</span>
                          </div>
                          <span>({service.reviews} تقييم)</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        {service.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">{service.originalPrice}</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                      <span>طلب الخدمة</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {filteredServices.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-card text-foreground px-8 py-3 rounded-lg font-medium border border-border hover:bg-muted/50 transition-colors">
                  عرض المزيد من الخدمات
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
