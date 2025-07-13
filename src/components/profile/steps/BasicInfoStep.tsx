
import { UseFormReturn } from "react-hook-form";
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
          <label htmlFor="identityId" className="block text-sm font-medium text-foreground">
            رقم الهوية *
          </label>
          <input
            id="identityId"
            {...register("identityId", { required: true })}
            placeholder="أدخل رقم الهوية"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Identity Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            صورة الهوية *
          </label>
          <div className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors rounded-lg bg-card">
            <div className="flex flex-col items-center justify-center p-6">
              <Upload className="w-8 h-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground text-center">
                اسحب الملف هنا أو اضغط للرفع
              </p>
              <button className="mt-2 px-4 py-2 text-sm border border-border bg-background text-foreground rounded-lg hover:bg-muted/50 transition-colors">
                اختر ملف
              </button>
            </div>
          </div>
        </div>

        {/* Nationality */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            الجنسية *
          </label>
          <div className="relative">
            <select
              value={watchedValues.nationality || ""}
              onChange={(e) => setValue("nationality", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              <option value="">اختر الجنسية</option>
              {NATIONALITIES.map((nationality) => (
                <option key={nationality.value} value={nationality.value}>
                  {nationality.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            الجنس *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="male"
                checked={watchedValues.gender === "male"}
                onChange={(e) => setValue("gender", e.target.value as "male" | "female")}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="text-sm text-foreground">ذكر</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="female"
                checked={watchedValues.gender === "female"}
                onChange={(e) => setValue("gender", e.target.value as "male" | "female")}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="text-sm text-foreground">أنثى</span>
            </label>
          </div>
        </div>

        {/* Birth Date */}
        <div className="space-y-2">
          <label htmlFor="birthDate" className="block text-sm font-medium text-foreground">
            تاريخ الميلاد *
          </label>
          <input
            id="birthDate"
            type="date"
            {...register("birthDate", { required: true })}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <label htmlFor="country" className="block text-sm font-medium text-foreground">
            البلد *
          </label>
          <input
            id="country"
            {...register("country", { required: true })}
            placeholder="أدخل البلد"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-foreground">
            المدينة *
          </label>
          <input
            id="city"
            {...register("city", { required: true })}
            placeholder="أدخل المدينة"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Education Level */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            المستوى التعليمي *
          </label>
          <div className="relative">
            <select
              value={watchedValues.educationLevel || ""}
              onChange={(e) => setValue("educationLevel", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              <option value="">اختر المستوى التعليمي</option>
              {EDUCATION_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Specialization */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            التخصص *
          </label>
          <div className="relative">
            <select
              value={watchedValues.specialization || ""}
              onChange={(e) => setValue("specialization", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              <option value="">اختر التخصص</option>
              {SPECIALIZATIONS.map((spec) => (
                <option key={spec.value} value={spec.value}>
                  {spec.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Experience Years */}
        <div className="space-y-2">
          <label htmlFor="experienceYears" className="block text-sm font-medium text-foreground">
            عدد سنوات الخبرة
          </label>
          <input
            id="experienceYears"
            type="number"
            min="0"
            max="50"
            {...register("experienceYears", { valueAsNumber: true })}
            placeholder="أدخل عدد سنوات الخبرة"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
