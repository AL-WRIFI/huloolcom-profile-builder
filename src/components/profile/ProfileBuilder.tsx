
import { useState } from "react";
import { CheckCircle, User, Languages, FileText, Briefcase, Award, MessageSquare, CreditCard } from "lucide-react";
import BasicInfoStep from "./steps/BasicInfoStep";
import LanguagesStep from "./steps/LanguagesStep";
import DocumentsStep from "./steps/DocumentsStep";
import ServicesStep from "./steps/ServicesStep";
import AchievementsStep from "./steps/AchievementsStep";
import BiographyStep from "./steps/BiographyStep";
import PaymentStep from "./steps/PaymentStep";

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

const ProfileBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
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

  const steps = [
    { id: 1, name: "المعلومات الأساسية", icon: User, component: BasicInfoStep },
    { id: 2, name: "اللغات", icon: Languages, component: LanguagesStep },
    { id: 3, name: "الوثائق", icon: FileText, component: DocumentsStep },
    { id: 4, name: "الخدمات", icon: Briefcase, component: ServicesStep },
    { id: 5, name: "الإنجازات", icon: Award, component: AchievementsStep },
    { id: 6, name: "النبذة الشخصية", icon: MessageSquare, component: BiographyStep },
    { id: 7, name: "بيانات الدفع", icon: CreditCard, component: PaymentStep },
  ];

  const currentStepData = steps.find(step => step.id === currentStep);
  const CurrentStepComponent = currentStepData?.component;

  const progressPercentage = (completedSteps.length / steps.length) * 100;

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const updateProfileData = (newData: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">إعداد ملفك الشخصي</h1>
              <p className="text-gray-600">أكمل ملفك الشخصي لتصبح مزود خدمات معتمد</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">نسبة الإكمال</div>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="font-medium text-blue-600">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Side Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <div className="p-6">
                <div className="space-y-3">
                  {steps.map((step) => {
                    const IconComponent = step.icon;
                    const isCompleted = completedSteps.includes(step.id);
                    const isCurrent = currentStep === step.id;
                    const isAccessible = step.id <= currentStep || isCompleted;

                    return (
                      <div
                        key={step.id}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                          isCurrent
                            ? "bg-blue-50 border border-blue-200"
                            : isCompleted
                            ? "bg-green-50 hover:bg-green-100"
                            : isAccessible
                            ? "hover:bg-gray-50"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                        onClick={() => isAccessible && handleStepClick(step.id)}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isCurrent
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <IconComponent className="w-4 h-4" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium truncate ${
                            isCurrent
                              ? "text-blue-600"
                              : isCompleted
                              ? "text-green-700"
                              : "text-gray-900"
                          }`}>
                            {step.name}
                          </div>
                          {isCurrent && (
                            <div className="text-xs text-gray-500">
                              الخطوة {step.id} من {steps.length}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progress Summary */}
                <div className="mt-6 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {completedSteps.length}/{steps.length}
                    </div>
                    <div className="text-sm text-gray-500">
                      خطوات مكتملة
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px]">
              <div className="p-8">
                {/* Step Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    {currentStepData && (
                      <>
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <currentStepData.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {currentStepData.name}
                          </h2>
                          <p className="text-gray-600">
                            الخطوة {currentStep} من {steps.length}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step Component */}
                <div className="mb-8">
                  {CurrentStepComponent && (
                    <CurrentStepComponent 
                      data={profileData} 
                      updateData={updateProfileData} 
                    />
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="px-8 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    السابق
                  </button>

                  <div className="flex gap-3">
                    {currentStep < steps.length ? (
                      <button 
                        onClick={handleNext} 
                        className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        التالي
                      </button>
                    ) : (
                      <button 
                        onClick={handleNext} 
                        className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        إنهاء الإعداد
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilder;
