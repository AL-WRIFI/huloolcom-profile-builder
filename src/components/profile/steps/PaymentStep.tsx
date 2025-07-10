
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, CreditCard, Shield } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface PaymentStepProps {
  form: UseFormReturn<ProfileData>;
}

const MONTHS = [
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" }
];

const YEARS = Array.from({ length: 20 }, (_, i) => {
  const year = new Date().getFullYear() + i;
  return { value: year.toString(), label: year.toString() };
});

const PaymentStep = ({ form }: PaymentStepProps) => {
  const { watch, setValue } = form;
  const paymentInfo = watch("paymentInfo");

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    // Add spaces every 4 digits
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">بيانات الدفع البنكية</h3>
        <p className="text-muted-foreground">أضف بيانات بطاقتك البنكية لاستلام المدفوعات (اختياري)</p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />
            معلومات البطاقة البنكية
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Card Holder Name */}
          <div className="space-y-2">
            <Label htmlFor="cardName">الاسم على البطاقة</Label>
            <Input
              id="cardName"
              placeholder="أدخل الاسم كما يظهر على البطاقة"
              value={paymentInfo?.cardName || ""}
              onChange={(e) => setValue("paymentInfo.cardName", e.target.value)}
            />
          </div>

          {/* Card Number */}
          <div className="space-y-2">
            <Label htmlFor="cardNumber">رقم البطاقة</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentInfo?.cardNumber || ""}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                setValue("paymentInfo.cardNumber", formatted);
              }}
              maxLength={19}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* CVV */}
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={paymentInfo?.cvv || ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                  setValue("paymentInfo.cvv", value);
                }}
                maxLength={4}
              />
            </div>

            {/* Expiry Month */}
            <div className="space-y-2">
              <Label>الشهر</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {paymentInfo?.expiryMonth || "شهر"}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {MONTHS.map((month) => (
                    <DropdownMenuItem
                      key={month.value}
                      onClick={() => setValue("paymentInfo.expiryMonth", month.value)}
                    >
                      {month.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Expiry Year */}
            <div className="space-y-2">
              <Label>السنة</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {paymentInfo?.expiryYear || "سنة"}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {YEARS.map((year) => (
                    <DropdownMenuItem
                      key={year.value}
                      onClick={() => setValue("paymentInfo.expiryYear", year.value)}
                    >
                      {year.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">آمان المعلومات</p>
              <p className="text-muted-foreground">
                جميع بياناتك البنكية محمية بأعلى معايير الأمان والتشفير
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentStep;
