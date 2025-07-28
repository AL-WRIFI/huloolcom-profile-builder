
import React, { useState } from "react";
import { ChevronDown, CreditCard, Shield } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface PaymentStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
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

const PaymentStep = ({ data, updateData }: PaymentStepProps) => {
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const updatePaymentInfo = (field: string, value: string) => {
    const newPaymentInfo = { ...data.paymentInfo, [field]: value };
    updateData({ paymentInfo: newPaymentInfo });
  };

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
        <p className="text-gray-600">أضف بيانات بطاقتك البنكية لاستلام المدفوعات (اختياري)</p>
      </div>

      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 text-center border-b border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CreditCard className="w-5 h-5" />
            <h4 className="text-lg font-semibold">معلومات البطاقة البنكية</h4>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {/* Card Holder Name */}
          <div className="space-y-2">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">الاسم على البطاقة</label>
            <input
              id="cardName"
              type="text"
              placeholder="أدخل الاسم كما يظهر على البطاقة"
              value={data.paymentInfo?.cardName || ""}
              onChange={(e) => updatePaymentInfo('cardName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Card Number */}
          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">رقم البطاقة</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={data.paymentInfo?.cardNumber || ""}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                updatePaymentInfo('cardNumber', formatted);
              }}
              maxLength={19}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* CVV */}
            <div className="space-y-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                id="cvv"
                type="text"
                placeholder="123"
                value={data.paymentInfo?.cvv || ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                  updatePaymentInfo('cvv', value);
                }}
                maxLength={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Expiry Month */}
            <div className="space-y-2 relative">
              <label className="block text-sm font-medium text-gray-700">الشهر</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center bg-white flex items-center justify-between"
                >
                  <span>{data.paymentInfo?.expiryMonth || "شهر"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showMonthDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {MONTHS.map((month) => (
                      <button
                        key={month.value}
                        type="button"
                        onClick={() => {
                          updatePaymentInfo('expiryMonth', month.value);
                          setShowMonthDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-center hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {month.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Expiry Year */}
            <div className="space-y-2 relative">
              <label className="block text-sm font-medium text-gray-700">السنة</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowYearDropdown(!showYearDropdown)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center bg-white flex items-center justify-between"
                >
                  <span>{data.paymentInfo?.expiryYear || "سنة"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showYearDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {YEARS.map((year) => (
                      <button
                        key={year.value}
                        type="button"
                        onClick={() => {
                          updatePaymentInfo('expiryYear', year.value);
                          setShowYearDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-center hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {year.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-gray-900">آمان المعلومات</p>
              <p className="text-gray-600">
                جميع بياناتك البنكية محمية بأعلى معايير الأمان والتشفير
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
