
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Calendar,
  Languages,
  FileText,
  Heart,
  Share2,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const mockProvider = {
  id: "1",
  name: "د. أحمد محمد",
  title: "أستاذ في علوم الحاسوب",
  university: "جامعة الملك سعود",
  rating: 4.9,
  reviews: 156,
  location: "الرياض، السعودية",
  responseTime: "خلال ساعة",
  completedProjects: 89,
  joinDate: "2020",
  specialization: "الذكاء الاصطناعي وتعلم الآلة",
  profileImage: "/placeholder.svg",
  coverImage: "/placeholder.svg",
  isOnline: true,
  biography: "دكتوراه في علوم الحاسوب من جامعة ستانفورد، خبرة أكثر من 15 عامًا في مجال الذكاء الاصطناعي وتعلم الآلة. نشرت أكثر من 50 بحثًا علميًا في مؤتمرات دولية محكمة. أشرفت على أكثر من 100 مشروع تخرج وأطروحة ماجستير ودكتوراه.",
  languages: [
    { name: "العربية", level: "الأم", isPrimary: true },
    { name: "الإنجليزية", level: "ممتاز", isPrimary: false },
    { name: "الفرنسية", level: "جيد", isPrimary: false }
  ],
  achievements: [
    {
      title: "جائزة أفضل بحث في الذكاء الاصطناعي",
      organization: "مؤتمر الذكاء الاصطناعي العالمي",
      date: "2023",
      description: "حصلت على جائزة أفضل بحث علمي في مجال الذكاء الاصطناعي التطبيقي"
    },
    {
      title: "شهادة خبير معتمد في تعلم الآلة",
      organization: "جوجل كلاود",
      date: "2022",
      description: "شهادة معتمدة من جوجل في مجال تعلم الآلة والذكاء الاصطناعي"
    }
  ],
  services: [
    {
      title: "إعداد أبحاث التخرج",
      description: "مساعدة في إعداد وكتابة أبحاث التخرج في مجال علوم الحاسوب",
      price: "من 800 ريال",
      duration: "14-21 يوم"
    },
    {
      title: "تحليل البيانات باستخدام Python",
      description: "تحليل البيانات وبناء نماذج تعلم الآلة",
      price: "من 400 ريال",
      duration: "7-10 أيام"
    }
  ],
  portfolio: [
    {
      title: "نظام التعرف على الوجوه",
      description: "تطوير نظام ذكي للتعرف على الوجوه باستخدام التعلم العميق",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "OpenCV"]
    },
    {
      title: "منصة التعلم الذكي",
      description: "تطوير منصة تعليمية ذكية تتكيف مع أسلوب تعلم الطالب",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "AI/ML"]
    }
  ]
};

const ProviderProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/providers">
          <Button variant="ghost" className="gap-2">
            <ArrowRight className="h-4 w-4" />
            العودة للمزودين
          </Button>
        </Link>
      </div>

      {/* Cover & Profile Section */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-primary/20 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Profile Info */}
        <div className="container mx-auto px-4">
          <div className="relative -mt-16 md:-mt-20">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar & Basic Info */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="relative">
                      <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                        <AvatarImage src={mockProvider.profileImage} />
                        <AvatarFallback className="text-2xl">أ</AvatarFallback>
                      </Avatar>
                      {mockProvider.isOnline && (
                        <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-green-500 rounded-full border-3 border-white"></div>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                          {mockProvider.name}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-2">
                          {mockProvider.title}
                        </p>
                        <p className="text-lg text-primary font-medium mb-4">
                          {mockProvider.university}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{mockProvider.rating}</span>
                            <span className="text-muted-foreground">({mockProvider.reviews})</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-5 w-5" />
                            <span>{mockProvider.completedProjects} مشروع</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-5 w-5" />
                            <span>{mockProvider.responseTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5" />
                            <span>{mockProvider.location}</span>
                          </div>
                        </div>

                        {/* Specialization Badge */}
                        <Badge variant="secondary" className="mb-4">
                          {mockProvider.specialization}
                        </Badge>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3 min-w-[200px]">
                        <Button size="lg" className="w-full">
                          <MessageSquare className="h-5 w-5 ml-2" />
                          تواصل الآن
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="services">الخدمات</TabsTrigger>
            <TabsTrigger value="portfolio">الأعمال</TabsTrigger>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
            <TabsTrigger value="reviews">التقييمات</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Biography */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      النبذة الشخصية
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {mockProvider.biography}
                    </p>
                  </CardContent>
                </Card>

                {/* Languages */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Languages className="h-5 w-5" />
                      اللغات
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockProvider.languages.map((lang, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{lang.name}</span>
                            {lang.isPrimary && (
                              <Badge variant="outline" className="text-xs">أساسية</Badge>
                            )}
                          </div>
                          <span className="text-muted-foreground">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>إحصائيات سريعة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">معدل الاستجابة</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">معدل إكمال المشاريع</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">عضو منذ</span>
                      <span className="font-medium">{mockProvider.joinDate}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>النشاط الأخير</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>أكمل مشروع تحليل البيانات</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                      <span>رد على 5 استفسارات جديدة</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span>حصل على تقييم 5 نجوم</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProvider.services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Badge variant="outline">{service.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button className="w-full">طلب الخدمة</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProvider.portfolio.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="mt-6">
            <div className="space-y-6">
              {mockProvider.achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                        <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                        <p className="text-muted-foreground mb-2">{achievement.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Rating Summary */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{mockProvider.rating}</div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{mockProvider.reviews} تقييم</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <span className="text-sm">{stars}</span>
                          <Star className="h-3 w-3" />
                          <Progress value={stars === 5 ? 90 : stars === 4 ? 8 : 2} className="flex-1" />
                          <span className="text-sm text-muted-foreground">
                            {stars === 5 ? 140 : stars === 4 ? 12 : 4}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Individual Reviews */}
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
                            خدمة ممتازة وتعامل راقي. أنجز المشروع في الوقت المحدد وبجودة عالية جداً. أنصح بالتعامل معه.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProviderProfile;
