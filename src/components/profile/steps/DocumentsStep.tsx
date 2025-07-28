
import React, { useState } from "react";
import { Upload, X, ChevronDown, FileText } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface DocumentsStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
}

const DOCUMENT_TYPES = [
  { value: "identity", label: "هوية شخصية" },
  { value: "passport", label: "جواز سفر" },
  { value: "license", label: "رخصة مهنية" },
  { value: "certificate", label: "شهادة أكاديمية" },
  { value: "diploma", label: "دبلوم" },
  { value: "other", label: "أخرى" }
];

const DocumentsStep = ({ data, updateData }: DocumentsStepProps) => {
  const [activeTab, setActiveTab] = useState('documents');
  const [dropdownStates, setDropdownStates] = useState<{[key: string]: boolean}>({});

  const addDocument = () => {
    const newDocuments = [...data.documents, {
      type: "",
      name: "",
      issueDate: new Date(),
      file: undefined
    }];
    updateData({ documents: newDocuments });
  };

  const removeDocument = (index: number) => {
    const newDocuments = data.documents.filter((_, i) => i !== index);
    updateData({ documents: newDocuments });
  };

  const updateDocument = (index: number, field: string, value: any) => {
    const newDocuments = [...data.documents];
    newDocuments[index] = { ...newDocuments[index], [field]: value };
    updateData({ documents: newDocuments });
  };

  const toggleDropdown = (key: string) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">الوثائق الرسمية</h3>
        <p className="text-gray-600">أرفق الوثائق والشهادات الرسمية الخاصة بك</p>
      </div>

      <div className="w-full">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('documents')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'documents'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              الوثائق
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'certificates'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              الشهادات والرخص
            </button>
          </div>
        </div>
        
        {activeTab === 'documents' && (
          <div className="mt-6 space-y-4">
            {data.documents.map((doc, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Document Type */}
                    <div className="space-y-2 relative">
                      <label className="block text-sm font-medium text-gray-700">نوع الوثيقة</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => toggleDropdown(`type-${index}`)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white flex items-center justify-between"
                        >
                          <span>
                            {doc.type ? 
                              DOCUMENT_TYPES.find(t => t.value === doc.type)?.label :
                              "اختر نوع الوثيقة"
                            }
                          </span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {dropdownStates[`type-${index}`] && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {DOCUMENT_TYPES.map((type) => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => {
                                  updateDocument(index, 'type', type.value);
                                  toggleDropdown(`type-${index}`);
                                }}
                                className="w-full px-3 py-2 text-right hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                              >
                                {type.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Document Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">اسم الوثيقة</label>
                      <input
                        type="text"
                        placeholder="أدخل اسم الوثيقة"
                        value={doc.name}
                        onChange={(e) => updateDocument(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Issue Date */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">تاريخ الإصدار</label>
                      <input
                        type="date"
                        value={doc.issueDate ? new Date(doc.issueDate).toISOString().split('T')[0] : ""}
                        onChange={(e) => updateDocument(index, 'issueDate', new Date(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">رفع الملف</label>
                      <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors rounded-lg cursor-pointer">
                        <div className="flex items-center justify-center p-4">
                          <div className="text-center">
                            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                            <p className="text-xs text-gray-500">اضغط للرفع</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Files */}
                  {doc.file && (
                    <div className="mt-4">
                      <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        <FileText className="w-4 h-4" />
                        {doc.name || "ملف مرفوع"}
                        <button
                          type="button"
                          onClick={() => updateDocument(index, 'file', undefined)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Remove Document */}
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

            <button
              type="button"
              onClick={addDocument}
              className="w-full border-2 border-dashed border-blue-300 hover:border-blue-500 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              إضافة وثيقة جديدة
            </button>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="mt-6">
            <div className="border-2 border-dashed border-blue-200 rounded-lg">
              <div className="flex flex-col items-center justify-center p-8">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">الشهادات والرخص المهنية</h4>
                <p className="text-gray-600 text-center mb-4">
                  أرفق شهاداتك الأكاديمية والرخص المهنية
                </p>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  اختر الملفات
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsStep;
