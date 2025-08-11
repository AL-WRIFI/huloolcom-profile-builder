
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Plus, X, ChevronDown } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface LanguagesStepProps {
  form: UseFormReturn<ProfileData>;
}

const LANGUAGES = [
  { value: "arabic", label: "العربية" },
  { value: "english", label: "الإنجليزية" },
  { value: "french", label: "الفرنسية" },
  { value: "german", label: "الألمانية" },
  { value: "spanish", label: "الإسبانية" },
  { value: "chinese", label: "الصينية" },
  { value: "japanese", label: "اليابانية" },
  { value: "other", label: "أخرى" }
];

const LANGUAGE_LEVELS = [
  { value: "beginner", label: "مبتدئ" },
  { value: "intermediate", label: "متوسط" },
  { value: "advanced", label: "متقدم" },
  { value: "native", label: "لغة أم" }
];

const LanguagesStep = ({ form }: LanguagesStepProps) => {
  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages"
  });

  const watchedLanguages = watch("languages");

  const addLanguage = () => {
    append({
      language: "",
      level: "",
      isPrimary: false
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">اللغات التي تتقنها</h3>
        <p className="text-muted-foreground">أضف اللغات التي تتقنها ومستوى إتقانك لكل لغة</p>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="relative bg-card rounded-xl border border-border p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Language Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">اللغة</label>
                <div className="relative">
                  <select
                    value={watchedLanguages[index]?.language || ""}
                    onChange={(e) => setValue(`languages.${index}.language`, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  >
                    <option value="">اختر اللغة</option>
                    {LANGUAGES.map((language) => (
                      <option key={language.value} value={language.value}>
                        {language.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Language Level */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">المستوى</label>
                <div className="relative">
                  <select
                    value={watchedLanguages[index]?.level || ""}
                    onChange={(e) => setValue(`languages.${index}.level`, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  >
                    <option value="">اختر المستوى</option>
                    {LANGUAGE_LEVELS.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Primary Language */}
              <div className="space-y-2 flex items-center">
                <div className="flex items-center gap-2">
                  <input
                    id={`primary-${index}`}
                    type="checkbox"
                    checked={watchedLanguages[index]?.isPrimary || false}
                    onChange={(e) => setValue(`languages.${index}.isPrimary`, e.target.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <label htmlFor={`primary-${index}`} className="text-sm text-foreground">
                    لغة أساسية
                  </label>
                </div>
              </div>

              {/* Remove Button */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addLanguage}
        className="w-full border-dashed border-2 border-primary/30 hover:border-primary/50 bg-card hover:bg-primary/5 text-foreground py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        إضافة لغة جديدة
      </button>
    </div>
  );
};

export default LanguagesStep;
