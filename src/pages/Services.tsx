import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, BookOpen, FileText, GraduationCap, Briefcase, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const serviceCategories = [
  {
    id: "research",
    name: "الأبحاث والتقارير",
    icon: FileText,
    description: "أبحاث أكاديمية ومشاريع تخرج",
    count: 245,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: "assignments",
    name: "الواجبات والتكاليف",
    icon: BookOpen,
    description: "حل الواجبات والتكاليف الدراسية",
    count: 189,
    color: "bg-green-100 text-green-800"
  },
  {
    id: "thesis",
    name: "مشاريع التخرج",
    icon: GraduationCap,
    description: "إعداد ومتابعة مشاريع التخرج",
    count: 156,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: "consulting",
    name: "الاستشارات الأكاديمية",
    icon: Briefcase,
    description: "استشارات في التخصصات المختلفة",
    count: 98,
    color: "bg-orange-100 text-orange-800"
  }
];

const mockServices = [
  {
    id: 1,
    title: "كتابة بحث تخرج في علوم الحاسوب",
    description: "إعداد بحث تخرج متكامل مع المراجع والتحليل الإحصائي في مجال الذكاء الاصطناعي وتعلم الآلة",
    category: "thesis",
    provider: "د. أحمد محمد",
    rating: 4.9,
    reviews: 45,
    price: "من 800 ريال",
    duration: "14-21 يوم",
    features: ["مراجع حديثة", "تحليل إحصائي", "مراجعة مجانية"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "حل واجبات الرياضيات المتقدمة",
    description: "حل شامل لواجبات الرياضيات في التفاضل والتكامل والجبر الخطي مع شرح مفصل للحلول",
    category: "assignments",
    provider: "أ. سارة الأحمد",
    rating: 4.8,
    reviews: 78,
    price: "من 50 ريال",
    duration: "1-3 أيام",
    features: ["حلول مفصلة", "شرح خطوات", "مراجعة سريعة"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "استشارة أكاديمية في إدارة الأعمال",
    description: "جلسة استشارية شاملة لتطوير خطة البحث وتحديد المنهجية المناسبة للدراسة",
    category: "consulting",
    provider: "د. فاطمة السالم",
    rating: 4.9,
    reviews: 89,
    price: "من 200 ريال",
    duration: "1-2 ساعة",
    features: ["جلسة مباشرة", "خطة مفصلة", "متابعة مجانية"],
    image: "/placeholder.svg"
  }
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredServices, setFilteredServices] = useState(mockServices);

  // Filter and search functionality
  const handleSearch = () => {
    let filtered = mockServices;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort results
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        break;
      case "price-high":
        filtered.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // newest
        break;
    }
    
    setFilteredServices(filtered);
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              اكتشف خدماتنا الأكاديمية
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              خدمات تعليمية متخصصة من أفضل الخبراء الأكاديميين لمساعدتك في رحلتك التعليمية
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="ابحث عن الخدمة التي تحتاجها..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
              <Button 
                className="absolute right-2 top-2 h-10"
                onClick={handleSearch}
              >
                ابحث
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">فئات الخدمات</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-scale-in"
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge className={category.color}>
                    {category.count} خدمة متاحة
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">ترتيب حسب:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="newest">الأحدث</option>
              <option value="rating">الأعلى تقييماً</option>
              <option value="price-low">السعر (الأقل أولاً)</option>
              <option value="price-high">السعر (الأعلى أولاً)</option>
            </select>
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              size="sm"
            >
              الكل
            </Button>
            {serviceCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {serviceCategories.find(cat => cat.id === service.category)?.name}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-xs text-muted-foreground">({service.reviews})</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg leading-tight mb-2">
                  {service.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Provider */}
                  <div className="text-sm">
                    <span className="text-muted-foreground">بواسطة: </span>
                    <Link 
                      to={`/providers/${service.id}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {service.provider}
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and Duration */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div className="font-bold text-lg text-primary">
                      {service.price}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link to={`/services/${service.id}`} className="flex-1">
                      <Button variant="outline" className="w-full" size="sm">
                        عرض التفاصيل
                      </Button>
                    </Link>
                    <Link to="/service-request" className="flex-1">
                      <Button className="w-full" size="sm">
                        اطلب الخدمة
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">لم يتم العثور على خدمات تطابق البحث</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4"
            >
              إعادة تعيين الفلاتر
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredServices.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              عرض المزيد من الخدمات
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
