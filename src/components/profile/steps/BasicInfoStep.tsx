
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, ChevronDown } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface BasicInfoStepProps {
  form: UseFormReturn<ProfileData>;
}

const NATIONALITIES = [
  { value: "saudi", label: "🇸🇦 السعودية" },
  { value: "egypt", label: "🇪🇬 مصر" },
  { value: "jordan", label: "🇯🇴 الأردن" },
  { value: "lebanon", label: "🇱🇧 لبنان" },
  { value: "syria", label: "🇸🇾 سوريا" },
  { value: "iraq", label: "🇮🇶 العراق" },
  { value: "other", label: "🌍 أخرى" }
];

const EDUCATION_LEVELS = [
  { value: "high_school", label: "الثانوية العامة" },
  { value: "diploma", label: "دبلوم" },
  { value: "bachelor", label: "بكالوريوس" },
  { value: "master", label: "ماجستير" },
  { value: "phd", label: "دكتوراه" }
];

const SPECIALIZATIONS = [
  { value: "engineering", label: "الهندسة" },
  { value: "medicine", label: "الطب" },
  { value: "business", label: "إدارة الأعمال" },
  { value: "law", label: "القانون" },
  { value: "education", label: "التعليم" },
  { value: "it", label: "تكنولوجيا المعلومات" },
  { value: "other", label: "أخرى" }
];

const BasicInfoStep = ({ form }: BasicInfoStepProps) => {
  const { register, watch, setValue } = form;
  const watchedValues = watch();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Identity ID */}
        <div className="space-y-2">
          <Label htmlFor="identityId">رقم الهوية *</Label>
          <Input
            id="identityId"
            {...register("identityId", { required: true })}
            placeholder="أدخل رقم الهوية"
          />
        </div>

        {/* Identity Image Upload */}
        <div className="space-y-2">
          <Label>صورة الهوية *</Label>
          <Card className="border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Upload className="w-8 h-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground text-center">
                اسحب الملف هنا أو اضغط للرفع
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                اختر ملف
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Nationality */}
        <div className="space-y-2">
          <Label>الجنسية *</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {watchedValues.nationality ? 
                  NATIONALITIES.find(n => n.value === watchedValues.nationality)?.label :
                  "اختر الجنسية"
                }
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {NATIONALITIES.map((nationality) => (
                <DropdownMenuItem
                  key={nationality.value}
                  onClick={() => setValue("nationality", nationality.value)}
                >
                  {nationality.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label>الجنس *</Label>
          <RadioGroup
            value={watchedValues.gender}
            onValueChange={(value) => setValue("gender", value as "male" | "female")}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">ذكر</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">أنثى</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Birth Date */}
        <div className="space-y-2">
          <Label htmlFor="birthDate">تاريخ الميلاد *</Label>
          <Input
            id="birthDate"
            type="date"
            {...register("birthDate", { required: true })}
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country">البلد *</Label>
          <Input
            id="country"
            {...register("country", { required: true })}
            placeholder="أدخل البلد"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city">المدينة *</Label>
          <Input
            id="city"
            {...register("city", { required: true })}
            placeholder="أدخل المدينة"
          />
        </div>

        {/* Education Level */}
        <div className="space-y-2">
          <Label>المستوى التعليمي *</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {watchedValues.educationLevel ? 
                  EDUCATION_LEVELS.find(e => e.value === watchedValues.educationLevel)?.label :
                  "اختر المستوى التعليمي"
                }
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {EDUCATION_LEVELS.map((level) => (
                <DropdownMenuItem
                  key={level.value}
                  onClick={() => setValue("educationLevel", level.value)}
                >
                  {level.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Specialization */}
        <div className="space-y-2">
          <Label>التخصص *</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {watchedValues.specialization ? 
                  SPECIALIZATIONS.find(s => s.value === watchedValues.specialization)?.label :
                  "اختر التخصص"
                }
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {SPECIALIZATIONS.map((spec) => (
                <DropdownMenuItem
                  key={spec.value}
                  onClick={() => setValue("specialization", spec.value)}
                >
                  {spec.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Experience Years */}
        <div className="space-y-2">
          <Label htmlFor="experienceYears">عدد سنوات الخبرة</Label>
          <Input
            id="experienceYears"
            type="number"
            min="0"
            max="50"
            {...register("experienceYears", { valueAsNumber: true })}
            placeholder="أدخل عدد سنوات الخبرة"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
