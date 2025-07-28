
import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mockProviders = [
  {
    id: 1,
    name: "د. أحمد محمد",
    title: "أستاذ في علوم الحاسوب",
    rating: 4.8,
    reviews: 156,
    location: "الرياض، السعودية",
    responseTime: "خلال ساعة",
    completedProjects: 89,
    specializations: ["برمجة", "ذكاء اصطناعي", "قواعد البيانات"],
    image: "/placeholder.svg",
    price: "من 200 ريال",
    isOnline: true
  },
  {
    id: 2,
    name: "د. فاطمة السالم",
    title: "محاضرة في إدارة الأعمال",
    rating: 4.9,
    reviews: 203,
    location: "جدة، السعودية",
    responseTime: "خلال 30 دقيقة",
    completedProjects: 134,
    specializations: ["إدارة", "تسويق", "ريادة الأعمال"],
    image: "/placeholder.svg",
    price: "من 150 ريال",
    isOnline: true
  },
  {
    id: 3,
    name: "أ. محمد الأحمد",
    title: "مهندس معماري",
    rating: 4.7,
    reviews: 98,
    location: "الدمام، السعودية",
    responseTime: "خلال ساعتين",
    completedProjects: 67,
    specializations: ["هندسة معمارية", "تصميم", "AutoCAD"],
    image: "/placeholder.svg",
    price: "من 300 ريال",
    isOnline: false
  }
];

const Providers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", "علوم الحاسوب", "إدارة الأعمال", "الهندسة", "الطب", "الأدب"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">المزودون الأكاديميون</h1>
              <p className="text-muted-foreground mt-2">اعثر على أفضل الخبراء الأكاديميين لمساعدتك</p>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="ابحث عن مزود أو تخصص..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                فلترة
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockProviders.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={provider.image} alt={provider.name} />
                      <AvatarFallback>{provider.name.split(' ')[1]?.[0] || 'م'}</AvatarFallback>
                    </Avatar>
                    {provider.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-foreground truncate">{provider.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{provider.title}</p>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{provider.rating}</span>
                      <span className="text-muted-foreground text-sm">({provider.reviews} تقييم)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  {/* Specializations */}
                  <div className="flex flex-wrap gap-1">
                    {provider.specializations.slice(0, 3).map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{provider.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="truncate">{provider.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{provider.completedProjects} مشروع</span>
                    </div>
                    <div className="font-semibold text-primary">
                      {provider.price}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" size="sm">
                      عرض البروفايل
                    </Button>
                    <Button variant="outline" size="sm">
                      راسل
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            عرض المزيد من المزودين
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Providers;
