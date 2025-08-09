
import React, { useState } from "react";
import { Upload, ChevronDown } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface BasicInfoStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
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

const BasicInfoStep = ({ data, updateData }: BasicInfoStepProps) => {
  const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);
  const [showEducationDropdown, setShowEducationDropdown] = useState(false);
  const [showSpecializationDropdown, setShowSpecializationDropdown] = useState(false);

  const handleInputChange = (field: keyof ProfileData, value: any) => {
    updateData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Identity ID */}
        <div className="space-y-2">
          <label htmlFor="identityId" className="block text-sm font-medium text-gray-700">
            رقم الهوية *
          </label>
          <input
            id="identityId"
            type="text"
            required
            value={data.identityId}
            onChange={(e) => handleInputChange('identityId', e.target.value)}
            placeholder="أدخل رقم الهوية"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Identity Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">صورة الهوية *</label>
          <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors rounded-lg">
            <div className="flex flex-col items-center justify-center p-6">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 text-center">
                اسحب الملف هنا أو اضغط للرفع
              </p>
              <button className="mt-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                اختر ملف
              </button>
            </div>
          </div>
        </div>

        {/* Nationality */}
        <div className="space-y-2 relative">
          <label className="block text-sm font-medium text-gray-700">الجنسية *</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNationalityDropdown(!showNationalityDropdown)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
            >
              <span>
                {data.nationality ? 
                  NATIONALITIES.find(n => n.value === data.nationality)?.label :
                  "اختر الجنسية"
                }
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showNationalityDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {NATIONALITIES.map((nationality) => (
                  <button
                    key={nationality.value}
                    type="button"
                    onClick={() => {
                      handleInputChange('nationality', nationality.value);
                      setShowNationalityDropdown(false);
                    }}
                    className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {nationality.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">الجنس *</label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={data.gender === "male"}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="mr-2 text-sm text-gray-700">ذكر</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={data.gender === "female"}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="mr-2 text-sm text-gray-700">أنثى</span>
            </label>
          </div>
        </div>

        {/* Birth Date */}
        <div className="space-y-2">
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
            تاريخ الميلاد *
          </label>
          <input
            id="birthDate"
            type="date"
            required
            value={data.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            البلد *
          </label>
          <input
            id="country"
            type="text"
            required
            value={data.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            placeholder="أدخل البلد"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            المدينة *
          </label>
          <input
            id="city"
            type="text"
            required
            value={data.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="أدخل المدينة"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Education Level */}
        <div className="space-y-2 relative">
          <label className="block text-sm font-medium text-gray-700">المستوى التعليمي *</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowEducationDropdown(!showEducationDropdown)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
            >
              <span>
                {data.educationLevel ? 
                  EDUCATION_LEVELS.find(e => e.value === data.educationLevel)?.label :
                  "اختر المستوى التعليمي"
                }
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showEducationDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {EDUCATION_LEVELS.map((level) => (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => {
                      handleInputChange('educationLevel', level.value);
                      setShowEducationDropdown(false);
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

        {/* Specialization */}
        <div className="space-y-2 relative">
          <label className="block text-sm font-medium text-gray-700">التخصص *</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSpecializationDropdown(!showSpecializationDropdown)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
            >
              <span>
                {data.specialization ? 
                  SPECIALIZATIONS.find(s => s.value === data.specialization)?.label :
                  "اختر التخصص"
                }
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSpecializationDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {SPECIALIZATIONS.map((spec) => (
                  <button
                    key={spec.value}
                    type="button"
                    onClick={() => {
                      handleInputChange('specialization', spec.value);
                      setShowSpecializationDropdown(false);
                    }}
                    className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {spec.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Experience Years */}
        <div className="space-y-2">
          <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700">
            عدد سنوات الخبرة
          </label>
          <input
            id="experienceYears"
            type="number"
            min="0"
            max="50"
            value={data.experienceYears || ''}
            onChange={(e) => handleInputChange('experienceYears', parseInt(e.target.value) || 0)}
            placeholder="أدخل عدد سنوات الخبرة"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
