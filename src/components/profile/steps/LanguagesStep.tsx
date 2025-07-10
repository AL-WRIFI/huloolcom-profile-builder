
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
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
          <Card key={field.id} className="relative">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Language Selection */}
                <div className="space-y-2">
                  <Label>اللغة</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {watchedLanguages[index]?.language ? 
                          LANGUAGES.find(l => l.value === watchedLanguages[index].language)?.label :
                          "اختر اللغة"
                        }
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {LANGUAGES.map((language) => (
                        <DropdownMenuItem
                          key={language.value}
                          onClick={() => setValue(`languages.${index}.language`, language.value)}
                        >
                          {language.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Language Level */}
                <div className="space-y-2">
                  <Label>المستوى</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {watchedLanguages[index]?.level ? 
                          LANGUAGE_LEVELS.find(l => l.value === watchedLanguages[index].level)?.label :
                          "اختر المستوى"
                        }
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {LANGUAGE_LEVELS.map((level) => (
                        <DropdownMenuItem
                          key={level.value}
                          onClick={() => setValue(`languages.${index}.level`, level.value)}
                        >
                          {level.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Primary Language */}
                <div className="space-y-2 flex items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`primary-${index}`}
                      checked={watchedLanguages[index]?.isPrimary || false}
                      onCheckedChange={(checked) => 
                        setValue(`languages.${index}.isPrimary`, checked as boolean)
                      }
                    />
                    <Label htmlFor={`primary-${index}`}>لغة أساسية</Label>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="flex items-center justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => remove(index)}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={addLanguage}
        className="w-full border-dashed border-2 hover:border-primary"
      >
        <Plus className="w-4 h-4 mr-2" />
        إضافة لغة جديدة
      </Button>
    </div>
  );
};

export default LanguagesStep;
