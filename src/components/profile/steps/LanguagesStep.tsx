
import React, { useState } from "react";
import { Plus, X, ChevronDown } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface LanguagesStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
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

const LanguagesStep = ({ data, updateData }: LanguagesStepProps) => {
  const [dropdownStates, setDropdownStates] = useState<{[key: string]: boolean}>({});

  const addLanguage = () => {
    const newLanguages = [...data.languages, {
      language: "",
      level: "",
      isPrimary: false
    }];
    updateData({ languages: newLanguages });
  };

  const removeLanguage = (index: number) => {
    const newLanguages = data.languages.filter((_, i) => i !== index);
    updateData({ languages: newLanguages });
  };

  const updateLanguage = (index: number, field: string, value: any) => {
    const newLanguages = [...data.languages];
    newLanguages[index] = { ...newLanguages[index], [field]: value };
    updateData({ languages: newLanguages });
  };

  const toggleDropdown = (key: string) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">اللغات التي تتقنها</h3>
        <p className="text-gray-600">أضف اللغات التي تتقنها ومستوى إتقانك لكل لغة</p>
      </div>

      <div className="space-y-4">
        {data.languages.map((lang, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Language Selection */}
                <div className="space-y-2 relative">
                  <label className="block text-sm font-medium text-gray-700">اللغة</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(`lang-${index}`)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
                    >
                      <span>
                        {lang.language ? 
                          LANGUAGES.find(l => l.value === lang.language)?.label :
                          "اختر اللغة"
                        }
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownStates[`lang-${index}`] && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {LANGUAGES.map((language) => (
                          <button
                            key={language.value}
                            type="button"
                            onClick={() => {
                              updateLanguage(index, 'language', language.value);
                              toggleDropdown(`lang-${index}`);
                            }}
                            className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {language.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Language Level */}
                <div className="space-y-2 relative">
                  <label className="block text-sm font-medium text-gray-700">المستوى</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(`level-${index}`)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
                    >
                      <span>
                        {lang.level ? 
                          LANGUAGE_LEVELS.find(l => l.value === lang.level)?.label :
                          "اختر المستوى"
                        }
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownStates[`level-${index}`] && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {LANGUAGE_LEVELS.map((level) => (
                          <button
                            key={level.value}
                            type="button"
                            onClick={() => {
                              updateLanguage(index, 'level', level.value);
                              toggleDropdown(`level-${index}`);
                            }}
                            className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {level.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Primary Language */}
                <div className="space-y-2 flex items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={lang.isPrimary}
                      onChange={(e) => updateLanguage(index, 'isPrimary', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="mr-2 text-sm text-gray-700">لغة أساسية</span>
                  </label>
                </div>

                {/* Remove Button */}
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => removeLanguage(index)}
                    className="text-red-600 hover:text-red-700 border border-red-300 rounded-lg p-2 hover:bg-red-50 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addLanguage}
        className="w-full border-2 border-dashed border-blue-300 hover:border-blue-500 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        إضافة لغة جديدة
      </button>
    </div>
  );
};

export default LanguagesStep;
