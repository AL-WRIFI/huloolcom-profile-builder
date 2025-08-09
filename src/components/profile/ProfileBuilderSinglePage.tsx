import React, { useState } from "react";

// Icons as simple components
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
  </svg>
);

const Plus = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Upload = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export interface ProfileData {
  // Basic Info
  identityId: string;
  identityImage?: File;
  nationality: string;
  gender: "male" | "female";
  birthDate: string;
  country: string;
  city: string;
  educationLevel: string;
  specialization: string;
  experienceYears?: number;

  // Languages
  languages: Array<{
    language: string;
    level: string;
    isPrimary: boolean;
  }>;

  // Documents
  documents: Array<{
    type: string;
    name: string;
    issueDate: Date;
    file?: File;
  }>;

  // Services
  services: Array<{
    serviceType: string;
    customService?: string;
    category: string;
    description: string;
  }>;

  // Achievements
  achievements: Array<{
    name: string;
    completionDate: Date;
    description: string;
    organization: string;
    attachments: File[];
  }>;

  // Biography
  biography: string;
  profileImage?: File;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;

  // Payment
  paymentInfo?: {
    cardName: string;
    cardNumber: string;
    cvv: string;
    expiryMonth: string;
    expiryYear: string;
  };
}

const ProfileBuilderSinglePage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    identityId: "",
    nationality: "",
    gender: "male",
    birthDate: "",
    country: "",
    city: "",
    educationLevel: "",
    specialization: "",
    languages: [],
    documents: [],
    services: [],
    achievements: [],
    socialLinks: [],
    biography: "",
  });

  const [dropdownStates, setDropdownStates] = useState<{[key: string]: boolean}>({});

  const updateProfileData = (newData: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...newData }));
  };

  const toggleDropdown = (key: string) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Languages
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

  const addLanguage = () => {
    const newLanguages = [...profileData.languages, {
      language: "",
      level: "",
      isPrimary: false
    }];
    updateProfileData({ languages: newLanguages });
  };

  const removeLanguage = (index: number) => {
    const newLanguages = profileData.languages.filter((_, i) => i !== index);
    updateProfileData({ languages: newLanguages });
  };

  const updateLanguage = (index: number, field: string, value: any) => {
    const newLanguages = [...profileData.languages];
    newLanguages[index] = { ...newLanguages[index], [field]: value };
    updateProfileData({ languages: newLanguages });
  };

  // Documents
  const addDocument = () => {
    const newDocuments = [...profileData.documents, {
      type: "",
      name: "",
      issueDate: new Date(),
    }];
    updateProfileData({ documents: newDocuments });
  };

  const removeDocument = (index: number) => {
    const newDocuments = profileData.documents.filter((_, i) => i !== index);
    updateProfileData({ documents: newDocuments });
  };

  const updateDocument = (index: number, field: string, value: any) => {
    const newDocuments = [...profileData.documents];
    newDocuments[index] = { ...newDocuments[index], [field]: value };
    updateProfileData({ documents: newDocuments });
  };

  // Services
  const addService = () => {
    const newServices = [...profileData.services, {
      serviceType: "",
      category: "",
      description: ""
    }];
    updateProfileData({ services: newServices });
  };

  const removeService = (index: number) => {
    const newServices = profileData.services.filter((_, i) => i !== index);
    updateProfileData({ services: newServices });
  };

  const updateService = (index: number, field: string, value: any) => {
    const newServices = [...profileData.services];
    newServices[index] = { ...newServices[index], [field]: value };
    updateProfileData({ services: newServices });
  };

  // Achievements
  const addAchievement = () => {
    const newAchievements = [...profileData.achievements, {
      name: "",
      completionDate: new Date(),
      description: "",
      organization: "",
      attachments: []
    }];
    updateProfileData({ achievements: newAchievements });
  };

  const removeAchievement = (index: number) => {
    const newAchievements = profileData.achievements.filter((_, i) => i !== index);
    updateProfileData({ achievements: newAchievements });
  };

  const updateAchievement = (index: number, field: string, value: any) => {
    const newAchievements = [...profileData.achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    updateProfileData({ achievements: newAchievements });
  };

  // Social Links
  const addSocialLink = () => {
    const newSocialLinks = [...profileData.socialLinks, {
      platform: "",
      url: ""
    }];
    updateProfileData({ socialLinks: newSocialLinks });
  };

  const removeSocialLink = (index: number) => {
    const newSocialLinks = profileData.socialLinks.filter((_, i) => i !== index);
    updateProfileData({ socialLinks: newSocialLinks });
  };

  const updateSocialLink = (index: number, field: string, value: any) => {
    const newSocialLinks = [...profileData.socialLinks];
    newSocialLinks[index] = { ...newSocialLinks[index], [field]: value };
    updateProfileData({ socialLinks: newSocialLinks });
  };

  const handleSubmit = () => {
    console.log("Profile Data:", profileData);
    alert("تم حفظ البيانات بنجاح!");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#333333' }}>إعداد ملفك الشخصي</h1>
              <p className="text-gray-600">أكمل ملفك الشخصي لتصبح مزود خدمات معتمد</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8 space-y-12">
            
            {/* Basic Info Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>المعلومات الأساسية</h2>
                <p className="text-gray-600">أدخل بياناتك الشخصية الأساسية</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>رقم الهوية</label>
                  <input
                    type="text"
                    placeholder="أدخل رقم الهوية"
                    value={profileData.identityId}
                    onChange={(e) => updateProfileData({ identityId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>الجنسية</label>
                  <input
                    type="text"
                    placeholder="أدخل الجنسية"
                    value={profileData.nationality}
                    onChange={(e) => updateProfileData({ nationality: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>الجنس</label>
                  <select
                    value={profileData.gender}
                    onChange={(e) => updateProfileData({ gender: e.target.value as "male" | "female" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  >
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>تاريخ الميلاد</label>
                  <input
                    type="date"
                    value={profileData.birthDate}
                    onChange={(e) => updateProfileData({ birthDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>البلد</label>
                  <input
                    type="text"
                    placeholder="أدخل البلد"
                    value={profileData.country}
                    onChange={(e) => updateProfileData({ country: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>المدينة</label>
                  <input
                    type="text"
                    placeholder="أدخل المدينة"
                    value={profileData.city}
                    onChange={(e) => updateProfileData({ city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>المستوى التعليمي</label>
                  <input
                    type="text"
                    placeholder="أدخل المستوى التعليمي"
                    value={profileData.educationLevel}
                    onChange={(e) => updateProfileData({ educationLevel: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>التخصص</label>
                  <input
                    type="text"
                    placeholder="أدخل التخصص"
                    value={profileData.specialization}
                    onChange={(e) => updateProfileData({ specialization: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>اللغات التي تتقنها</h2>
                <p className="text-gray-600">أضف اللغات التي تتقنها ومستوى إتقانك لكل لغة</p>
              </div>

              <div className="space-y-4">
                {profileData.languages.map((lang, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Language Selection */}
                        <div className="space-y-2 relative">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>اللغة</label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => toggleDropdown(`lang-${index}`)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-right bg-white flex items-center justify-between"
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
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>المستوى</label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => toggleDropdown(`level-${index}`)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-right bg-white flex items-center justify-between"
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
                              className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                              style={{ accentColor: '#F8C421' }}
                            />
                            <span className="mr-2 text-sm" style={{ color: '#333333' }}>لغة أساسية</span>
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
                className="w-full border-2 border-dashed py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: '#F8C421', color: '#F8C421' }}
              >
                <Plus className="w-4 h-4" />
                إضافة لغة جديدة
              </button>
            </section>

            {/* Documents Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>الوثائق والشهادات</h2>
                <p className="text-gray-600">أضف الوثائق والشهادات التي تثبت خبرتك ومؤهلاتك</p>
              </div>

              <div className="space-y-4">
                {profileData.documents.map((doc, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>نوع الوثيقة</label>
                          <input
                            type="text"
                            placeholder="أدخل نوع الوثيقة"
                            value={doc.type}
                            onChange={(e) => updateDocument(index, 'type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>اسم الوثيقة</label>
                          <input
                            type="text"
                            placeholder="أدخل اسم الوثيقة"
                            value={doc.name}
                            onChange={(e) => updateDocument(index, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>تاريخ الإصدار</label>
                          <input
                            type="date"
                            value={doc.issueDate ? new Date(doc.issueDate).toISOString().split('T')[0] : ""}
                            onChange={(e) => updateDocument(index, 'issueDate', new Date(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeDocument(index)}
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
                onClick={addDocument}
                className="w-full border-2 border-dashed py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: '#F8C421', color: '#F8C421' }}
              >
                <Plus className="w-4 h-4" />
                إضافة وثيقة جديدة
              </button>
            </section>

            {/* Services Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>الخدمات التي تقدمها</h2>
                <p className="text-gray-600">أضف الخدمات التي تقدمها وصف كل خدمة بالتفصيل</p>
              </div>

              <div className="space-y-4">
                {profileData.services.map((service, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>نوع الخدمة</label>
                          <input
                            type="text"
                            placeholder="أدخل نوع الخدمة"
                            value={service.serviceType}
                            onChange={(e) => updateService(index, 'serviceType', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>الفئة</label>
                          <input
                            type="text"
                            placeholder="أدخل فئة الخدمة"
                            value={service.category}
                            onChange={(e) => updateService(index, 'category', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="md:col-span-2 space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>وصف الخدمة</label>
                          <textarea
                            placeholder="اكتب وصفاً تفصيلياً للخدمة..."
                            value={service.description}
                            onChange={(e) => updateService(index, 'description', e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                          />
                        </div>
                      </div>

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
                className="w-full border-2 border-dashed py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: '#F8C421', color: '#F8C421' }}
              >
                <Plus className="w-4 h-4" />
                إضافة خدمة جديدة
              </button>
            </section>

            {/* Achievements Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>الأعمال والإنجازات</h2>
                <p className="text-gray-600">أضف أعمالك وإنجازاتك السابقة ومشاريعك المميزة</p>
              </div>

              <div className="space-y-4">
                {profileData.achievements.map((achievement, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>اسم العمل/الإنجاز</label>
                          <input
                            type="text"
                            placeholder="أدخل اسم العمل أو الإنجاز"
                            value={achievement.name}
                            onChange={(e) => updateAchievement(index, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>تاريخ الإنجاز</label>
                          <input
                            type="date"
                            value={achievement.completionDate ? new Date(achievement.completionDate).toISOString().split('T')[0] : ""}
                            onChange={(e) => updateAchievement(index, 'completionDate', new Date(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>جهة العمل/المؤسسة</label>
                          <input
                            type="text"
                            placeholder="أدخل اسم الجهة أو المؤسسة"
                            value={achievement.organization}
                            onChange={(e) => updateAchievement(index, 'organization', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>المرفقات (اختياري)</label>
                          <div className="border-2 border-dashed rounded-lg" style={{ borderColor: '#F8C421', opacity: 0.5 }}>
                            <div className="flex items-center justify-center p-4">
                              <div className="text-center">
                                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                                <p className="text-xs text-gray-500">رفع ملفات</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                          <label className="block text-sm font-medium" style={{ color: '#333333' }}>وصف الإنجاز</label>
                          <textarea
                            placeholder="اكتب وصفاً تفصيلياً للإنجاز والمهارات المستخدمة..."
                            value={achievement.description}
                            onChange={(e) => updateAchievement(index, 'description', e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeAchievement(index)}
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
                onClick={addAchievement}
                className="w-full border-2 border-dashed py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: '#F8C421', color: '#F8C421' }}
              >
                <Plus className="w-4 h-4" />
                إضافة إنجاز جديد
              </button>
            </section>

            {/* Biography Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>النبذة الشخصية</h2>
                <p className="text-gray-600">اكتب نبذة عن نفسك وخبراتك وما يميزك</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>نبذة شخصية</label>
                  <textarea
                    placeholder="اكتب نبذة تفصيلية عن نفسك وخبراتك..."
                    value={profileData.biography}
                    onChange={(e) => updateProfileData({ biography: e.target.value })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>الروابط الاجتماعية</label>
                  {profileData.socialLinks.map((link, index) => (
                    <div key={index} className="flex gap-4">
                      <select
                        value={link.platform}
                        onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                        className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      >
                        <option value="">اختر المنصة</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="twitter">Twitter</option>
                        <option value="github">GitHub</option>
                        <option value="website">موقع شخصي</option>
                      </select>
                      <input
                        type="url"
                        placeholder="أدخل الرابط"
                        value={link.url}
                        onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => removeSocialLink(index)}
                        className="text-red-600 hover:text-red-700 border border-red-300 rounded-lg p-2 hover:bg-red-50 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addSocialLink}
                    className="w-full border-2 border-dashed py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    style={{ borderColor: '#F8C421', color: '#F8C421' }}
                  >
                    <Plus className="w-4 h-4" />
                    إضافة رابط اجتماعي
                  </button>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>بيانات الدفع</h2>
                <p className="text-gray-600">أدخل بيانات بطاقتك الائتمانية لاستلام المدفوعات</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>اسم حامل البطاقة</label>
                  <input
                    type="text"
                    placeholder="أدخل اسم حامل البطاقة"
                    value={profileData.paymentInfo?.cardName || ""}
                    onChange={(e) => updateProfileData({ 
                      paymentInfo: { ...profileData.paymentInfo, cardName: e.target.value } as any
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>رقم البطاقة</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={profileData.paymentInfo?.cardNumber || ""}
                    onChange={(e) => updateProfileData({ 
                      paymentInfo: { ...profileData.paymentInfo, cardNumber: e.target.value } as any
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>CVV</label>
                  <input
                    type="text"
                    placeholder="000"
                    value={profileData.paymentInfo?.cvv || ""}
                    onChange={(e) => updateProfileData({ 
                      paymentInfo: { ...profileData.paymentInfo, cvv: e.target.value } as any
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: '#333333' }}>تاريخ الانتهاء</label>
                  <div className="flex gap-3">
                    <select
                      value={profileData.paymentInfo?.expiryMonth || ""}
                      onChange={(e) => updateProfileData({ 
                        paymentInfo: { ...profileData.paymentInfo, expiryMonth: e.target.value } as any
                      })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    >
                      <option value="">الشهر</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {String(i + 1).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                    <select
                      value={profileData.paymentInfo?.expiryYear || ""}
                      onChange={(e) => updateProfileData({ 
                        paymentInfo: { ...profileData.paymentInfo, expiryYear: e.target.value } as any
                      })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    >
                      <option value="">السنة</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={2024 + i}>
                          {2024 + i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center pt-8 border-t">
              <button
                onClick={handleSubmit}
                className="px-12 py-4 text-white rounded-lg font-semibold text-lg transition-colors"
                style={{ backgroundColor: '#F8C421', color: '#333333' }}
              >
                حفظ الملف الشخصي
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilderSinglePage;