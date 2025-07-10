
import { useState } from "react";
import { Search, Filter, Star, ArrowRight, Clock, Users, BookOpen, TrendingUp, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const mockServices = [
  {
    id: 1,
    title: "أبحاث التخرج في علوم الحاسوب",
    description: "إعداد بحث تخرج متكامل مع المراجع والتحليل الإحصائي في مجال الذكاء الاصطناعي",
    category: "أبحاث التخرج",
    price: "من 800 ريال",
    duration: "14-21 يوماً",
    rating: 4.9,
    reviews: 156,
    orders: 89,
    tags: ["ذكاء اصطناعي", "تعلم آلة", "برمجة"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    provider: {
      name: "د. أحمد محمد",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: 2,
    title: "التكاليف والواجبات الجامعية",
    description: "حلول شاملة للتكاليف الجامعية والواجبات الأسبوعية في جميع التخصصات",
    category: "التكاليف والواجبات",
    price: "من 50 ريال",
    duration: "1-3 أيام",
    rating: 4.8,
    reviews: 203,
    orders: 134,
    tags: ["رياضيات", "فيزياء", "كيمياء"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    provider: {
      name: "أ. فاطمة السالم",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: 3,
    title: "التحليل الإحصائي المتقدم",
    description: "تحليل البيانات الإحصائية باستخدام SPSS وR وPython مع تفسير شامل للنتائج",
    category: "التحليل الإحصائي",
    price: "من 200 ريال",
    duration: "3-7 أيام",
    rating: 4.9,
    reviews: 98,
    orders: 67,
    tags: ["SPSS", "R", "Python", "إحصاء"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    provider: {
      name: "د. محمد الأحمد",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: 4,
    title: "الترجمة الأكاديمية المتخصصة",
    description: "ترجمة علمية دقيقة من وإلى العربية والإنجليزية للأبحاث والمقالات الأكاديمية",
    category: "الترجمة الأكاديمية",
    price: "من 5 ريال/صفحة",
    duration: "1-5 أيام",
    rating: 4.7,
    reviews: 125,
    orders: 78,
    tags: ["ترجمة طبية", "ترجمة هندسية", "ترجمة قانونية"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    provider: {
      name: "أ. سارة عبدالله",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  }
];

const categories = [
  { name: "الكل", count: 120, icon: BookOpen },
  { name: "أبحاث التخرج", count: 45, icon: GraduationCap },
  { name: "التكاليف والواجبات", count: 38, icon: BookOpen },
  { name: "التحليل الإحصائي", count: 22, icon: TrendingUp },
  { name: "الترجمة الأكاديمية", count: 15, icon: Award }
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [sortBy, setSortBy] = useState("الأحدث");

  const filteredServices = mockServices.filter(service => 
    (selectedCategory === "الكل" || service.category === selectedCategory) &&
    (service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     service.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            استكشف <span className="text-primary">خدماتنا الأكاديمية</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            مجموعة شاملة من الخدمات التعليمية المتخصصة لمساعدتك في تحقيق أهدافك الأكاديمية
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="ابحث عن خدمة أو تخصص..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 hover:border-primary/50 focus:border-primary transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">التصنيفات</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={category.name}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in ${
                  selectedCategory === category.name 
                    ? "border-primary bg-primary/5 shadow-lg" 
                    : "hover:border-primary/50"
                }`}
                style={{animationDelay: `${index * 100}ms`}}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-full ${
                      selectedCategory === category.name 
                        ? "bg-primary text-white" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} خدمة</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              فلترة متقدمة
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              عرض {filteredServices.length} من الخدمات
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="الأحدث">الأحدث</option>
              <option value="الأعلى تقييماً">الأعلى تقييماً</option>
              <option value="الأقل سعراً">الأقل سعراً</option>
              <option value="الأكثر طلباً">الأكثر طلباً</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 shadow-lg hover:-translate-y-3 overflow-hidden bg-gradient-to-br from-white to-gray-50/50"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">{service.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={service.provider.avatar} 
                    alt={service.provider.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{service.provider.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{service.orders} طلب</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                  <Link to={`/services/${service.id}`}>
                    <Button className="group-hover:shadow-lg transition-all">
                      عرض التفاصيل
                      <ArrowRight className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            عرض المزيد من الخدمات
            <ArrowRight className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
