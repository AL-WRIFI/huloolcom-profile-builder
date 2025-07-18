
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Upload, FileText } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface AchievementsStepProps {
  form: UseFormReturn<ProfileData>;
}

const AchievementsStep = ({ form }: AchievementsStepProps) => {
  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "achievements"
  });

  const watchedAchievements = watch("achievements");

  const addAchievement = () => {
    append({
      name: "",
      completionDate: new Date(),
      description: "",
      organization: "",
      attachments: []
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">الأعمال والإنجازات</h3>
        <p className="text-muted-foreground">أضف أعمالك وإنجازاتك السابقة ومشاريعك المميزة</p>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <Card key={field.id} className="relative">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Achievement Name */}
                <div className="space-y-2">
                  <Label>اسم العمل/الإنجاز</Label>
                  <Input
                    placeholder="أدخل اسم العمل أو الإنجاز"
                    value={watchedAchievements[index]?.name || ""}
                    onChange={(e) => setValue(`achievements.${index}.name`, e.target.value)}
                  />
                </div>

                {/* Completion Date */}
                <div className="space-y-2">
                  <Label>تاريخ الإنجاز</Label>
                  <Input
                    type="date"
                    value={watchedAchievements[index]?.completionDate ? 
                      new Date(watchedAchievements[index].completionDate).toISOString().split('T')[0] : ""
                    }
                    onChange={(e) => setValue(`achievements.${index}.completionDate`, new Date(e.target.value))}
                  />
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <Label>جهة العمل/المؤسسة</Label>
                  <Input
                    placeholder="أدخل اسم الجهة أو المؤسسة"
                    value={watchedAchievements[index]?.organization || ""}
                    onChange={(e) => setValue(`achievements.${index}.organization`, e.target.value)}
                  />
                </div>

                {/* Attachments Upload */}
                <div className="space-y-2">
                  <Label>المرفقات (اختياري)</Label>
                  <Card className="border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                    <CardContent className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">رفع ملفات</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Description */}
                <div className="md:col-span-2 space-y-2">
                  <Label>وصف الإنجاز</Label>
                  <Textarea
                    placeholder="اكتب وصفاً تفصيلياً للإنجاز والمهارات المستخدمة..."
                    value={watchedAchievements[index]?.description || ""}
                    onChange={(e) => setValue(`achievements.${index}.description`, e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Uploaded Files Display */}
              {watchedAchievements[index]?.attachments && watchedAchievements[index].attachments.length > 0 && (
                <div className="mt-4">
                  <Label className="text-sm font-medium">الملفات المرفقة:</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {watchedAchievements[index].attachments.map((file: File, fileIndex: number) => (
                      <Badge key={fileIndex} variant="secondary" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {file.name}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newAttachments = watchedAchievements[index].attachments.filter((_: any, i: number) => i !== fileIndex);
                            setValue(`achievements.${index}.attachments`, newAttachments);
                          }}
                          className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Remove Achievement */}
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
        onClick={addAchievement}
        className="w-full border-dashed border-2 hover:border-primary"
      >
        <Plus className="w-4 h-4 mr-2" />
        إضافة إنجاز جديد
      </Button>
    </div>
  );
};

export default AchievementsStep;
