
import { useState } from "react";
import { ArrowRight, Upload, Calendar, DollarSign, MessageSquare, Star, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PackageType {
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

const ServiceRequest = () => {
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [files, setFiles] = useState<File[]>([]);

  const serviceData = {
    title: "كتابة بحث تخرج في علوم الحاسوب",
    provider: {
      name: "د. أحمد محمد",
      title: "أستاذ في علوم الحاسوب",
      rating: 4.9,
      reviews: 45,
      responseTime: "خلال ساعة",
      image: "/placeholder.svg"
    },
    packages: {
      basic: {
        name: "الباقة الأساسية",
        price: 800,
        duration: "21 يوم",
        features: [
          "20-25 صفحة",
          "5 مراجع حديثة",
          "مراجعة واحدة مجانية",
          "تسليم بصيغة PDF"
        ]
      } as PackageType,
      standard: {
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
      } as PackageType,
      premium: {
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
      } as PackageType
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowRight className="h-4 w-4" />
          العودة للخدمات
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{serviceData.title}</CardTitle>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={serviceData.provider.image} />
                    <AvatarFallback>أ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{serviceData.provider.name}</h3>
                    <p className="text-sm text-muted-foreground">{serviceData.provider.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{serviceData.provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({serviceData.provider.reviews} تقييم)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Package Selection */}
            <Card>
              <CardHeader>
                <CardTitle>اختر الباقة المناسبة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(serviceData.packages).map(([key, pkg]) => (
                    <div
                      key={key}
                      className={`relative p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedPackage === key
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      {pkg.popular && (
                        <Badge className="absolute -top-2 left-4">الأكثر طلباً</Badge>
                      )}
                      
                      <div className="text-center mb-4">
                        <h4 className="font-semibold text-lg">{pkg.name}</h4>
                        <div className="text-2xl font-bold text-primary mt-2">
                          {pkg.price} ريال
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                          <Clock className="h-4 w-4" />
                          {pkg.duration}
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-sm">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Request Details */}
            <Card>
              <CardHeader>
                <CardTitle>تفاصيل الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">عنوان البحث *</label>
                  <Input placeholder="أدخل عنوان البحث المطلوب" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">وصف تفصيلي للمطلوب *</label>
                  <Textarea
                    placeholder="اشرح بالتفصيل ما تحتاجه في البحث، المحاور المطلوبة، المنهجية، المراجع المفضلة..."
                    rows={6}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">التخصص</label>
                    <select className="w-full px-3 py-2 border rounded-md bg-background">
                      <option>علوم الحاسوب</option>
                      <option>هندسة البرمجيات</option>
                      <option>الذكاء الاصطناعي</option>
                      <option>أمن المعلومات</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">تاريخ التسليم المطلوب</label>
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">المرفقات (اختياري)</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      اسحب الملفات هنا أو انقر للرفع
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        اختر الملفات
                      </label>
                    </Button>
                  </div>
                  
                  {files.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {file.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>الباقة المختارة:</span>
                    <span className="font-medium">
                      {serviceData.packages[selectedPackage as keyof typeof serviceData.packages].name}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>مدة التنفيذ:</span>
                    <span className="font-medium">
                      {serviceData.packages[selectedPackage as keyof typeof serviceData.packages].duration}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>المبلغ الإجمالي:</span>
                    <span className="text-primary">
                      {serviceData.packages[selectedPackage as keyof typeof serviceData.packages].price} ريال
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full gap-2">
                    <DollarSign className="h-4 w-4" />
                    اطلب الآن
                  </Button>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    تواصل أولاً
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center pt-2">
                  بالمتابعة، أنت توافق على شروط الخدمة وسياسة الاسترداد
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
