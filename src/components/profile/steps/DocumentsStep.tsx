
import { UseFormReturn, useFieldArray } from "react-hook-form";
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
  const [activeTab, setActiveTab] = useState("documents");

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

      {/* Custom Tabs */}
      <div className="w-full">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab("documents")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "documents" 
                ? "border-primary text-primary" 
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            الوثائق
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "certificates" 
                ? "border-primary text-primary" 
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            الشهادات والرخص
          </button>
        </div>
        
        {activeTab === "documents" && (
          <div className="py-4 space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="relative bg-card rounded-xl border border-border p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Document Type */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">نوع الوثيقة</label>
                    <div className="relative">
                      <select
                        value={watchedDocuments[index]?.type || ""}
                        onChange={(e) => setValue(`documents.${index}.type`, e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                      >
                        <option value="">اختر نوع الوثيقة</option>
                        {DOCUMENT_TYPES.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Document Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">اسم الوثيقة</label>
                    <input
                      placeholder="أدخل اسم الوثيقة"
                      value={watchedDocuments[index]?.name || ""}
                      onChange={(e) => setValue(`documents.${index}.name`, e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Issue Date */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">تاريخ الإصدار</label>
                    <input
                      type="date"
                      value={watchedDocuments[index]?.issueDate ? 
                        new Date(watchedDocuments[index].issueDate).toISOString().split('T')[0] : ""
                      }
                      onChange={(e) => setValue(`documents.${index}.issueDate`, new Date(e.target.value))}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">رفع الملف</label>
                    <div className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors rounded-lg bg-card cursor-pointer">
                      <div className="flex items-center justify-center p-4">
                        <div className="text-center">
                          <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">اضغط للرفع</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Uploaded Files */}
                {watchedDocuments[index]?.file && (
                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      <FileText className="w-4 h-4" />
                      {watchedDocuments[index].name || "ملف مرفوع"}
                      <button
                        type="button"
                        onClick={() => setValue(`documents.${index}.file`, undefined)}
                        className="ml-2 p-1 hover:bg-destructive hover:text-destructive-foreground rounded-full transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Remove Document */}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute top-2 right-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addDocument}
              className="w-full border-dashed border-2 border-primary/30 hover:border-primary/50 bg-card hover:bg-primary/5 text-foreground py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              إضافة وثيقة جديدة
            </button>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="py-4">
            <div className="border-2 border-dashed border-primary/20 rounded-lg bg-card">
              <div className="flex flex-col items-center justify-center p-8">
                <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                <h4 className="text-lg font-semibold mb-2">الشهادات والرخص المهنية</h4>
                <p className="text-muted-foreground text-center mb-4">
                  أرفق شهاداتك الأكاديمية والرخص المهنية
                </p>
                <button className="px-4 py-2 border border-border bg-background text-foreground rounded-lg hover:bg-muted/50 transition-colors">
                  اختر الملفات
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsStep;
