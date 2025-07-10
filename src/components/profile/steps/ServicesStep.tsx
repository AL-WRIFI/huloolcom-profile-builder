
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
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
          <Card key={field.id} className="relative">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service Type */}
                <div className="space-y-2">
                  <Label>نوع الخدمة</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {watchedServices[index]?.serviceType ? 
                          APPROVED_SERVICES.find(s => s.value === watchedServices[index].serviceType)?.label :
                          "اختر نوع الخدمة"
                        }
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {APPROVED_SERVICES.map((service) => (
                        <DropdownMenuItem
                          key={service.value}
                          onClick={() => setValue(`services.${index}.serviceType`, service.value)}
                        >
                          {service.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Custom Service (if "other" selected) */}
                {watchedServices[index]?.serviceType === "other" && (
                  <div className="space-y-2">
                    <Label>تفاصيل الخدمة</Label>
                    <Input
                      placeholder="اكتب تفاصيل الخدمة"
                      value={watchedServices[index]?.customService || ""}
                      onChange={(e) => setValue(`services.${index}.customService`, e.target.value)}
                    />
                  </div>
                )}

                {/* Service Category */}
                <div className="space-y-2">
                  <Label>تصنيف الخدمة</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {watchedServices[index]?.category ? 
                          SERVICE_CATEGORIES.find(c => c.value === watchedServices[index].category)?.label :
                          "اختر التصنيف"
                        }
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {SERVICE_CATEGORIES.map((category) => (
                        <DropdownMenuItem
                          key={category.value}
                          onClick={() => setValue(`services.${index}.category`, category.value)}
                        >
                          {category.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Service Description */}
                <div className="md:col-span-2 space-y-2">
                  <Label>وصف مختصر للخدمة</Label>
                  <Textarea
                    placeholder="اكتب وصفاً مختصراً للخدمة التي تقدمها..."
                    value={watchedServices[index]?.description || ""}
                    onChange={(e) => setValue(`services.${index}.description`, e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Remove Service */}
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
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={addService}
        className="w-full border-dashed border-2 hover:border-primary"
      >
        <Plus className="w-4 h-4 mr-2" />
        إضافة خدمة جديدة
      </Button>
    </div>
  );
};

export default ServicesStep;
