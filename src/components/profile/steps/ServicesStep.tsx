
import React, { useState } from "react";
import { Plus, X, ChevronDown } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface ServicesStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
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

const ServicesStep = ({ data, updateData }: ServicesStepProps) => {
  const [dropdownStates, setDropdownStates] = useState<{[key: string]: boolean}>({});

  const addService = () => {
    const newServices = [...data.services, {
      serviceType: "",
      customService: "",
      category: "",
      description: ""
    }];
    updateData({ services: newServices });
  };

  const removeService = (index: number) => {
    const newServices = data.services.filter((_, i) => i !== index);
    updateData({ services: newServices });
  };

  const updateService = (index: number, field: string, value: any) => {
    const newServices = [...data.services];
    newServices[index] = { ...newServices[index], [field]: value };
    updateData({ services: newServices });
  };

  const toggleDropdown = (key: string) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">الخدمات والأنشطة</h3>
        <p className="text-gray-600">حدد الخدمات التي تقدمها والأنشطة التي تتخصص فيها</p>
      </div>

      <div className="space-y-4">
        {data.services.map((service, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service Type */}
                <div className="space-y-2 relative">
                  <label className="block text-sm font-medium text-gray-700">نوع الخدمة</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(`service-${index}`)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
                    >
                      <span>
                        {service.serviceType ? 
                          APPROVED_SERVICES.find(s => s.value === service.serviceType)?.label :
                          "اختر نوع الخدمة"
                        }
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownStates[`service-${index}`] && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {APPROVED_SERVICES.map((serviceOption) => (
                          <button
                            key={serviceOption.value}
                            type="button"
                            onClick={() => {
                              updateService(index, 'serviceType', serviceOption.value);
                              toggleDropdown(`service-${index}`);
                            }}
                            className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {serviceOption.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Custom Service (if "other" selected) */}
                {service.serviceType === "other" && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">تفاصيل الخدمة</label>
                    <input
                      type="text"
                      placeholder="اكتب تفاصيل الخدمة"
                      value={service.customService || ""}
                      onChange={(e) => updateService(index, 'customService', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Service Category */}
                <div className="space-y-2 relative">
                  <label className="block text-sm font-medium text-gray-700">تصنيف الخدمة</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(`category-${index}`)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
                    >
                      <span>
                        {service.category ? 
                          SERVICE_CATEGORIES.find(c => c.value === service.category)?.label :
                          "اختر التصنيف"
                        }
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownStates[`category-${index}`] && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {SERVICE_CATEGORIES.map((category) => (
                          <button
                            key={category.value}
                            type="button"
                            onClick={() => {
                              updateService(index, 'category', category.value);
                              toggleDropdown(`category-${index}`);
                            }}
                            className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {category.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Description */}
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700">وصف مختصر للخدمة</label>
                  <textarea
                    placeholder="اكتب وصفاً مختصراً للخدمة التي تقدمها..."
                    value={service.description}
                    onChange={(e) => updateService(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Remove Service */}
              <button
                type="button"
                onClick={() => removeService(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-700 border border-red-300 rounded-lg p-2 hover:bg-red-50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addService}
        className="w-full border-2 border-dashed border-blue-300 hover:border-blue-500 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        إضافة خدمة جديدة
      </button>
    </div>
  );
};

export default ServicesStep;
