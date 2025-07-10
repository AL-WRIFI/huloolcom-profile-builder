
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowRight, 
  Star, 
  Clock, 
  CheckCircle, 
  MessageSquare,
  Heart,
  Share2,
  Award,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockService = {
  id: "1",
  title: "كتابة بحث تخرج في علوم الحاسوب",
  description: "إعداد بحث تخرج متكامل مع المراجع والتحليل الإحصائي في مجال الذكاء الاصطناعي وتعلم الآلة. يشمل البحث جميع الفصول المطلوبة مع التنسيق الأكاديمي الصحيح.",
  longDescription: "يتضمن هذا البحث إعداد خطة بحثية شاملة، مراجعة الأدبيات ذات العلاقة، تصميم المنهجية المناسبة، تطبيق النماذج العملية، تحليل النتائج إحصائياً، وكتابة التوصيات والخلاصة. كما يشمل إعداد العرض التقديمي للمناقشة.",
  category: "أبحاث التخرج",
  subcategory: "علوم الحاسوب",
  rating: 4.9,
  reviews: 45,
  completedOrders: 120,
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  provider: {
    id: "1",
    name: "د. أحمد محمد",
    title: "أستاذ في علوم الحاسوب",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviews: 156,
    responseTime: "خلال ساعة",
    isOnline: true
  },
  packages: [
    {
      name: "الباقة الأساسية",
      price: 800,
      duration: "21 يوم",
      features: [
        "20-25 صفحة",
        "5 مراجع حديثة",
        "مراجعة واحدة مجانية",
        "تسليم بصيغة PDF"
      ]
    },
    {
      name: "الباقة المتوسطة",
      price: 1200,
      duration: "18 يوم",
      features: [
        "30-35 صفحة",
        "10 مراجع حديثة",
        "تحليل إحصائي بسيط",
        "3 مراجعات مجانية",
        "تسليم بصيغتي PDF و Word",
        "ملخص تنفيذي"
      ],
      popular: true
    },
    {
      name: "الباقة المتقدمة",
      price: 1800,
      duration: "14 يوم",
      features: [
        "40-50 صفحة",
        "15 مراجع حديثة",
        "تحليل إحصائي متقدم",
        "مراجعات غير محدودة",
        "تسليم بجميع الصيغ",
        "ملخص تنفيذي مفصل",
        "عرض تقديمي",
        "دعم بعد التسليم لمدة شهر"
      ]
    }
  ],
  faq: [
    {
      question: "كم يستغرق إنجاز البحث؟",
      answer: "يختلف الوقت حسب الباقة المختارة، من 14 إلى 21 يوماً. سيتم تسليم البحث في الموعد المحدد أو قبله."
    },
    {
      question: "هل يمكنني طلب تعديلات؟",
      answer: "نعم، كل باقة تشمل عدد معين من المراجعات المجانية. كما يمكن طلب تعديلات إضافية مقابل رسوم رمزية."
    },
    {
      question: "هل البحث أصلي وخالي من الانتحال؟",
      answer: "نعم، جميع الأبحاث أصلية 100% ومكتوبة خصيصاً لك. نقدم تقرير فحص الانتحال مع التسليم."
    }
  ]
};

const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/services">
          <Button variant="ghost" className="gap-2">
            <ArrowRight className="h-4 w-4" />
            العودة للخدمات
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{mockService.category}</Badge>
                    <Badge variant="outline">{mockService.subcategory}</Badge>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-bold text-foreground">
                    {mockService.title}
                  </h1>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{mockService.rating}</span>
                      <span className="text-muted-foreground">({mockService.reviews} تقييم)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{mockService.completedOrders} طلب مكتمل</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Images */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockService.images.map((image, index) => (
                    <div key={index} className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg"></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">الوصف</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
                <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">نظرة عامة</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {mockService.longDescription}
                      </p>
                      
                      <h3 className="text-xl font-semibold">ما ستحصل عليه:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>بحث متكامل مع جميع الفصول المطلوبة</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>مراجع أكاديمية حديثة وموثوقة</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>تحليل إحصائي للبيانات</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>تنسيق أكاديمي احترافي</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <Card key={review}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>م</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">محمد الأحمد</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">منذ أسبوع</span>
                            </div>
                            <p className="text-muted-foreground">
                              بحث ممتاز وتسليم في الموعد المحدد. المراجع حديثة والتحليل عميق. أنصح بشدة.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <div className="space-y-4">
                  {mockService.faq.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">{item.question}</h4>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Provider Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mockService.provider.avatar} />
                      <AvatarFallback>أ</AvatarFallback>
                    </Avatar>
                    {mockService.provider.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{mockService.provider.name}</h3>
                    <p className="text-sm text-muted-foreground">{mockService.provider.title}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{mockService.provider.rating} ({mockService.provider.reviews} تقييم)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>يرد {mockService.provider.responseTime}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="h-4 w-4 ml-2" />
                    تواصل
                  </Button>
                  <Link to={`/providers/${mockService.provider.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      البروفايل
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Packages */}
            <Card>
              <CardHeader>
                <CardTitle>اختر الباقة المناسبة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockService.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedPackage === index
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedPackage(index)}
                  >
                    {pkg.popular && (
                      <Badge className="mb-2">الأكثر طلباً</Badge>
                    )}
                    
                    <div className="mb-3">
                      <h4 className="font-semibold">{pkg.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-bold text-primary">{pkg.price} ريال</span>
                        <Badge variant="outline">{pkg.duration}</Badge>
                      </div>
                    </div>
                    
                    <ul className="space-y-1 text-sm">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <Link to="/service-request" className="block">
                  <Button className="w-full mt-4">
                    اطلب الخدمة الآن
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
