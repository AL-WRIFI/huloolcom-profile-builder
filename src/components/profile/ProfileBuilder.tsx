
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgressBar from "./ProgressBar";
import BasicInfoStep from "./steps/BasicInfoStep";
import LanguagesStep from "./steps/LanguagesStep";
import DocumentsStep from "./steps/DocumentsStep";
import ServicesStep from "./steps/ServicesStep";
import AchievementsStep from "./steps/AchievementsStep";
import BiographyStep from "./steps/BiographyStep";
import PaymentStep from "./steps/PaymentStep";
import { useToast } from "@/hooks/use-toast";

export interface ProfileData {
  // Basic Info
  identityId: string;
  identityImage?: File;
  nationality: string;
  gender: "male" | "female";
  birthDate: Date;
  country: string;
  city: string;
  educationLevel: string;
  specialization: string;
  experienceYears: number;
  
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
    attachments?: File[];
  }>;
  
  // Biography & Social
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

const STEP_TITLES = [
  "المعلومات الأساسية",
  "اللغات",
  "الوثائق الرسمية",
  "الخدمات والأنشطة",
  "الأعمال والإنجازات",
  "النبذة والسوشيال ميديا",
  "بيانات الدفع البنكية"
];

const ProfileBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const { toast } = useToast();
  
  const form = useForm<ProfileData>({
    defaultValues: {
      languages: [],
      documents: [],
      services: [],
      achievements: [],
      socialLinks: [],
      experienceYears: 0
    }
  });

  const calculateProgress = useCallback(() => {
    return (completedSteps.size / STEP_TITLES.length) * 100;
  }, [completedSteps]);

  const handleStepComplete = (stepNumber: number) => {
    setCompletedSteps(prev => new Set([...prev, stepNumber]));
  };

  const handleNext = () => {
    if (currentStep < STEP_TITLES.length) {
      handleStepComplete(currentStep);
      setCurrentStep(prev => prev + 1);
    } else {
      // Final submission
      toast({
        title: "مبروك، بروفايلك مكتمل!",
        description: "يمكنك الآن استكشاف المنصة والبدء في تقديم خدماتك",
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep form={form} />;
      case 2:
        return <LanguagesStep form={form} />;
      case 3:
        return <DocumentsStep form={form} />;
      case 4:
        return <ServicesStep form={form} />;
      case 5:
        return <AchievementsStep form={form} />;
      case 6:
        return <BiographyStep form={form} />;
      case 7:
        return <PaymentStep form={form} />;
      default:
        return <BasicInfoStep form={form} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar 
        currentStep={currentStep}
        totalSteps={STEP_TITLES.length}
        stepTitle={STEP_TITLES[currentStep - 1]}
        progress={calculateProgress()}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-foreground">
              بناء الملف الشخصي للأكاديمي
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {renderCurrentStep()}
            
            <div className="flex justify-between pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                السابق
              </Button>
              
              <Button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {currentStep === STEP_TITLES.length ? "إكمال التسجيل" : "التالي"}
                {currentStep < STEP_TITLES.length && <ChevronRight className="w-4 h-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileBuilder;
