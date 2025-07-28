
import React, { useState } from "react";
import { Plus, X, ChevronDown, Upload, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface BiographyStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
}

const SOCIAL_PLATFORMS = [
  { value: "facebook", label: "Facebook", icon: Facebook },
  { value: "twitter", label: "Twitter/X", icon: Twitter },
  { value: "instagram", label: "Instagram", icon: Instagram },
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
  { value: "youtube", label: "YouTube", icon: Youtube },
  { value: "website", label: "موقع شخصي", icon: Globe },
  { value: "other", label: "أخرى", icon: Globe }
];

const BiographyStep = ({ data, updateData }: BiographyStepProps) => {
  const [dropdownStates, setDropdownStates] = useState<{[key: string]: boolean}>({});

  const addSocialLink = () => {
    const newSocialLinks = [...data.socialLinks, {
      platform: "",
      url: ""
    }];
    updateData({ socialLinks: newSocialLinks });
  };

  const removeSocialLink = (index: number) => {
    const newSocialLinks = data.socialLinks.filter((_, i) => i !== index);
    updateData({ socialLinks: newSocialLinks });
  };

  const updateSocialLink = (index: number, field: string, value: any) => {
    const newSocialLinks = [...data.socialLinks];
    newSocialLinks[index] = { ...newSocialLinks[index], [field]: value };
    updateData({ socialLinks: newSocialLinks });
  };

  const toggleDropdown = (key: string) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getPlatformIcon = (platform: string) => {
    const platformData = SOCIAL_PLATFORMS.find(p => p.value === platform);
    return platformData ? platformData.icon : Globe;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">النبذة الشخصية ووسائل التواصل</h3>
        <p className="text-gray-600">أضف نبذة شخصية وروابط ملفاتك الشخصية على وسائل التواصل</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Image Upload */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">الصورة الشخصية</label>
          <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors rounded-lg">
            <div className="flex flex-col items-center justify-center p-6">
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-sm text-gray-500 text-center mb-2">
                اسحب الصورة هنا أو اضغط للرفع
              </p>
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                اختر صورة
              </button>
              <p className="text-xs text-gray-500 mt-2">
                الحد الأقصى: 5 ميجابايت
              </p>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="lg:col-span-2 space-y-4">
          <div className="space-y-2">
            <label htmlFor="biography" className="block text-sm font-medium text-gray-700">النبذة الشخصية</label>
            <textarea
              id="biography"
              placeholder="اكتب نبذة شخصية تعرّف بك وبخبراتك ومهاراتك..."
              value={data.biography}
              onChange={(e) => updateData({ biography: e.target.value })}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="text-right text-sm text-gray-500">
              {data.biography.length} / 1000 حرف
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">روابط وسائل التواصل الاجتماعي</h4>
        
        {data.socialLinks.map((link, index) => {
          const Icon = getPlatformIcon(link.platform);
          
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Platform Selection */}
                  <div className="space-y-2 relative">
                    <label className="block text-sm font-medium text-gray-700">المنصة</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(`platform-${index}`)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          {link.platform && <Icon className="w-4 h-4" />}
                          <span>
                            {link.platform ? 
                              SOCIAL_PLATFORMS.find(p => p.value === link.platform)?.label :
                              "اختر المنصة"
                            }
                          </span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {dropdownStates[`platform-${index}`] && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                          {SOCIAL_PLATFORMS.map((platform) => (
                            <button
                              key={platform.value}
                              type="button"
                              onClick={() => {
                                updateSocialLink(index, 'platform', platform.value);
                                toggleDropdown(`platform-${index}`);
                              }}
                              className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2"
                            >
                              <platform.icon className="w-4 h-4" />
                              {platform.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* URL Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">رابط الملف الشخصي</label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={link.url}
                      onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Remove Link */}
                <button
                  type="button"
                  onClick={() => removeSocialLink(index)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-700 border border-red-300 rounded-lg p-2 hover:bg-red-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}

        <button
          type="button"
          onClick={addSocialLink}
          className="w-full border-2 border-dashed border-blue-300 hover:border-blue-500 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          إضافة رابط جديد
        </button>
      </div>
    </div>
  );
};

export default BiographyStep;
