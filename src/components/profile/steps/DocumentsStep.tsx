
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, X, ChevronDown, FileText } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface DocumentsStepProps {
  form: UseFormReturn<ProfileData>;
}

const DOCUMENT_TYPES = [
  { value: "identity", label: "هوية شخصية" },
  { value: "passport", label: "جواز سفر" },
  { value: "license", label: "رخصة مهنية" },
  { value: "certificate", label: "شهادة أكاديمية" },
  { value: "diploma", label: "دبلوم" },
  { value: "other", label: "أخرى" }
];

const DocumentsStep = ({ form }: DocumentsStepProps) => {
  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents"
  });

  const watchedDocuments = watch("documents");

  const addDocument = () => {
    append({
      type: "",
      name: "",
      issueDate: new Date(),
      file: undefined
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">الوثائق الرسمية</h3>
        <p className="text-muted-foreground">أرفق الوثائق والشهادات الرسمية الخاصة بك</p>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="documents">الوثائق</TabsTrigger>
          <TabsTrigger value="certificates">الشهادات والرخص</TabsTrigger>
        </TabsList>
        
        <TabsContent value="documents" className="space-y-4">
          {fields.map((field, index) => (
            <Card key={field.id} className="relative">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Document Type */}
                  <div className="space-y-2">
                    <Label>نوع الوثيقة</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          {watchedDocuments[index]?.type ? 
                            DOCUMENT_TYPES.find(t => t.value === watchedDocuments[index].type)?.label :
                            "اختر نوع الوثيقة"
                          }
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {DOCUMENT_TYPES.map((type) => (
                          <DropdownMenuItem
                            key={type.value}
                            onClick={() => setValue(`documents.${index}.type`, type.value)}
                          >
                            {type.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Document Name */}
                  <div className="space-y-2">
                    <Label>اسم الوثيقة</Label>
                    <Input
                      placeholder="أدخل اسم الوثيقة"
                      value={watchedDocuments[index]?.name || ""}
                      onChange={(e) => setValue(`documents.${index}.name`, e.target.value)}
                    />
                  </div>

                  {/* Issue Date */}
                  <div className="space-y-2">
                    <Label>تاريخ الإصدار</Label>
                    <Input
                      type="date"
                      value={watchedDocuments[index]?.issueDate ? 
                        new Date(watchedDocuments[index].issueDate).toISOString().split('T')[0] : ""
                      }
                      onChange={(e) => setValue(`documents.${index}.issueDate`, new Date(e.target.value))}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>رفع الملف</Label>
                    <Card className="border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                      <CardContent className="flex items-center justify-center p-4">
                        <div className="text-center">
                          <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">اضغط للرفع</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Uploaded Files */}
                {watchedDocuments[index]?.file && (
                  <div className="mt-4">
                    <Badge variant="secondary" className="flex items-center gap-2 w-fit">
                      <FileText className="w-4 h-4" />
                      {watchedDocuments[index].name || "ملف مرفوع"}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setValue(`documents.${index}.file`, undefined)}
                        className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  </div>
                )}

                {/* Remove Document */}
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

          <Button
            type="button"
            variant="outline"
            onClick={addDocument}
            className="w-full border-dashed border-2 hover:border-primary"
          >
            <Upload className="w-4 h-4 mr-2" />
            إضافة وثيقة جديدة
          </Button>
        </TabsContent>

        <TabsContent value="certificates">
          <Card className="border-dashed border-2 border-primary/20">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <h4 className="text-lg font-semibold mb-2">الشهادات والرخص المهنية</h4>
              <p className="text-muted-foreground text-center mb-4">
                أرفق شهاداتك الأكاديمية والرخص المهنية
              </p>
              <Button variant="outline">
                اختر الملفات
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentsStep;
