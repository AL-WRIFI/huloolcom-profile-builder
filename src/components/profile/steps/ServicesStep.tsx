
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Plus, X, ChevronDown } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface ServicesStepProps {
  form: UseFormReturn<ProfileData>;
}

const APPROVED_SERVICES = [
  { value: "research", label: "إعداد البحوث الأكاديمية" },
  { value: "assignments", label: "حل الواجبات والتكاليف" },
  { value: "thesis", label: "مشاريع التخرج والرسائل" },
  { value: "presentations", label: "إعداد العروض التقديمية" },
  { value: "translation", label: "خدمات الترجمة" },
  { value: "tutoring", label: "التدريس الخصوصي" },
  { value: "consultation", label: "الاستشارات الأكاديمية" },
  { value: "other", label: "خدمة أخرى" }
];

const SERVICE_CATEGORIES = [
  { value: "academic", label: "أكاديمي" },
  { value: "technical", label: "تقني" },
  { value: "creative", label: "إبداعي" },
  { value: "business", label: "أعمال" },
  { value: "consultation", label: "استشاري" }
];

const ServicesStep = ({ form }: ServicesStepProps) => {
  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "services"
  });

  const watchedServices = watch("services");

  const addService = () => {
    append({
      serviceType: "",
      customService: "",
      category: "",
      description: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">الخدمات والأنشطة</h3>
        <p className="text-muted-foreground">حدد الخدمات التي تقدمها والأنشطة التي تتخصص فيها</p>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="relative bg-card rounded-xl border border-border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Service Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">نوع الخدمة</label>
                <div className="relative">
                  <select
                    value={watchedServices[index]?.serviceType || ""}
                    onChange={(e) => setValue(`services.${index}.serviceType`, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  >
                    <option value="">اختر نوع الخدمة</option>
                    {APPROVED_SERVICES.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Custom Service (if "other" selected) */}
              {watchedServices[index]?.serviceType === "other" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">تفاصيل الخدمة</label>
                  <input
                    placeholder="اكتب تفاصيل الخدمة"
                    value={watchedServices[index]?.customService || ""}
                    onChange={(e) => setValue(`services.${index}.customService`, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {/* Service Category */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">تصنيف الخدمة</label>
                <div className="relative">
                  <select
                    value={watchedServices[index]?.category || ""}
                    onChange={(e) => setValue(`services.${index}.category`, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  >
                    <option value="">اختر التصنيف</option>
                    {SERVICE_CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Service Description */}
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-foreground">وصف مختصر للخدمة</label>
                <textarea
                  placeholder="اكتب وصفاً مختصراً للخدمة التي تقدمها..."
                  value={watchedServices[index]?.description || ""}
                  onChange={(e) => setValue(`services.${index}.description`, e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Remove Service */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-2 right-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addService}
        className="w-full border-dashed border-2 border-primary/30 hover:border-primary/50 bg-card hover:bg-primary/5 text-foreground py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        إضافة خدمة جديدة
      </button>
    </div>
  );
};

export default ServicesStep;
