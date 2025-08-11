
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, X, ChevronDown, Upload, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface BiographyStepProps {
  form: UseFormReturn<ProfileData>;
}

const SOCIAL_PLATFORMS = [
  { value: "facebook", label: "Facebook", icon: Facebook },
  { value: "twitter", label: "Twitter/X", icon: Twitter },
  { value: "instagram", label: "Instagram", icon: Instagram },
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
  { value: "youtube", label: "YouTube", icon: Youtube },
  { value: "website", label: "موقع شخصي", icon: Globe },
  { value: "other", label: "أخرى", icon: Globe }
];

const BiographyStep = ({ form }: BiographyStepProps) => {
  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks"
  });

  const watchedData = watch();
  const biography = watch("biography") || "";

  const addSocialLink = () => {
    append({
      platform: "",
      url: ""
    });
  };

  const getPlatformIcon = (platform: string) => {
    const platformData = SOCIAL_PLATFORMS.find(p => p.value === platform);
    return platformData ? platformData.icon : Globe;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">النبذة الشخصية ووسائل التواصل</h3>
        <p className="text-muted-foreground">أضف نبذة شخصية وروابط ملفاتك الشخصية على وسائل التواصل</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Image Upload */}
        <div className="space-y-4">
          <Label>الصورة الشخصية</Label>
          <Card className="border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground text-center mb-2">
                اسحب الصورة هنا أو اضغط للرفع
              </p>
              <Button variant="outline" size="sm">
                اختر صورة
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                الحد الأقصى: 5 ميجابايت
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Biography */}
        <div className="lg:col-span-2 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="biography">النبذة الشخصية</Label>
            <Textarea
              id="biography"
              placeholder="اكتب نبذة شخصية تعرّف بك وبخبراتك ومهاراتك..."
              value={biography}
              onChange={(e) => setValue("biography", e.target.value)}
              rows={8}
              className="resize-none"
            />
            <div className="text-right text-sm text-muted-foreground">
              {biography.length} / 1000 حرف
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">روابط وسائل التواصل الاجتماعي</h4>
        
        {fields.map((field, index) => {
          const platform = watchedData.socialLinks[index]?.platform;
          const Icon = getPlatformIcon(platform);
          
          return (
            <Card key={field.id} className="relative">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Platform Selection */}
                  <div className="space-y-2">
                    <Label>المنصة</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center gap-2">
                            {platform && <Icon className="w-4 h-4" />}
                            {platform ? 
                              SOCIAL_PLATFORMS.find(p => p.value === platform)?.label :
                              "اختر المنصة"
                            }
                          </div>
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {SOCIAL_PLATFORMS.map((platform) => (
                          <DropdownMenuItem
                            key={platform.value}
                            onClick={() => setValue(`socialLinks.${index}.platform`, platform.value)}
                            className="flex items-center gap-2"
                          >
                            <platform.icon className="w-4 h-4" />
                            {platform.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* URL Input */}
                  <div className="space-y-2">
                    <Label>رابط الملف الشخصي</Label>
                    <Input
                      placeholder="https://..."
                      value={watchedData.socialLinks[index]?.url || ""}
                      onChange={(e) => setValue(`socialLinks.${index}.url`, e.target.value)}
                    />
                  </div>
                </div>

                {/* Remove Link */}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => remove(index)}
                  className="absolute top-2 right-2 h-8 w-8 p-0 text-destructive"
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}

        <Button
          type="button"
          variant="outline"
          onClick={addSocialLink}
          className="w-full border-dashed border-2 hover:border-primary"
        >
          <Plus className="w-4 h-4 mr-2" />
          إضافة رابط جديد
        </Button>
      </div>
    </div>
  );
};

export default BiographyStep;
