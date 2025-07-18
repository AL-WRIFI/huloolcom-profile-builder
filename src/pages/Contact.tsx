
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    userType: "student"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@huloolcom.com", "support@huloolcom.com"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: ["+966 12 345 6789", "+966 50 123 4567"],
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["الرياض، المملكة العربية السعودية", "شارع الملك فهد، حي العليا"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      details: ["الأحد - الخميس: 9:00 ص - 6:00 م", "الجمعة - السبت: 10:00 ص - 4:00 م"],
      color: "text-orange-600"
    }
  ];

  const supportStats = [
    { icon: MessageCircle, number: "24/7", label: "دعم فني" },
    { icon: Users, number: "5000+", label: "عميل سعيد" },
    { icon: Award, number: "99%", label: "معدل الرضا" }
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
            📞 نحن هنا لمساعدتك
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            تواصل معنا
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            فريق الدعم لدينا متاح على مدار الساعة لمساعدتك في أي استفسار أو مشكلة قد تواجهها
          </p>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportStats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                أرسل لنا رسالة
              </CardTitle>
              <p className="text-muted-foreground">
                سنرد عليك في أقرب وقت ممكن
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">نوع المستخدم</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, userType: "student"})}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        formData.userType === "student"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="text-sm font-medium">طالب</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, userType: "provider"})}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        formData.userType === "provider"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="text-sm font-medium">مزود خدمة</span>
                    </button>
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">الاسم الكامل</label>
                    <Input
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">البريد الإلكتروني</label>
                    <Input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">رقم الهاتف</label>
                    <Input
                      placeholder="أدخل رقم هاتفك"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">موضوع الرسالة</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="support">دعم فني</option>
                      <option value="complaint">شكوى</option>
                      <option value="suggestion">اقتراح</option>
                      <option value="partnership">شراكة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">الرسالة</label>
                  <textarea
                    placeholder="اكتب رسالتك هنا..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background min-h-32 resize-vertical"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                معلومات التواصل
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group hover:-translate-y-1"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-lg border-0">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">موقعنا على الخريطة</h3>
                  <p className="text-muted-foreground text-sm">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
