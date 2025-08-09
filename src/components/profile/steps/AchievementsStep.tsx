
import React, { useState } from "react";
import { Plus, X, Upload, FileText } from "lucide-react";
import { ProfileData } from "../ProfileBuilder";

interface AchievementsStepProps {
  data: ProfileData;
  updateData: (newData: Partial<ProfileData>) => void;
}

const AchievementsStep = ({ data, updateData }: AchievementsStepProps) => {
  const addAchievement = () => {
    const newAchievements = [...data.achievements, {
      name: "",
      completionDate: new Date(),
      description: "",
      organization: "",
      attachments: []
    }];
    updateData({ achievements: newAchievements });
  };

  const removeAchievement = (index: number) => {
    const newAchievements = data.achievements.filter((_, i) => i !== index);
    updateData({ achievements: newAchievements });
  };

  const updateAchievement = (index: number, field: string, value: any) => {
    const newAchievements = [...data.achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    updateData({ achievements: newAchievements });
  };

  const removeAttachment = (achievementIndex: number, fileIndex: number) => {
    const newAchievements = [...data.achievements];
    const newAttachments = newAchievements[achievementIndex].attachments.filter((_, i) => i !== fileIndex);
    newAchievements[achievementIndex] = { ...newAchievements[achievementIndex], attachments: newAttachments };
    updateData({ achievements: newAchievements });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">الأعمال والإنجازات</h3>
        <p className="text-gray-600">أضف أعمالك وإنجازاتك السابقة ومشاريعك المميزة</p>
      </div>

      <div className="space-y-4">
        {data.achievements.map((achievement, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm relative">
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Achievement Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">اسم العمل/الإنجاز</label>
                  <input
                    type="text"
                    placeholder="أدخل اسم العمل أو الإنجاز"
                    value={achievement.name}
                    onChange={(e) => updateAchievement(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Completion Date */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">تاريخ الإنجاز</label>
                  <input
                    type="date"
                    value={achievement.completionDate ? new Date(achievement.completionDate).toISOString().split('T')[0] : ""}
                    onChange={(e) => updateAchievement(index, 'completionDate', new Date(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">جهة العمل/المؤسسة</label>
                  <input
                    type="text"
                    placeholder="أدخل اسم الجهة أو المؤسسة"
                    value={achievement.organization}
                    onChange={(e) => updateAchievement(index, 'organization', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Attachments Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">المرفقات (اختياري)</label>
                  <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors cursor-pointer rounded-lg">
                    <div className="flex items-center justify-center p-4">
                      <div className="text-center">
                        <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">رفع ملفات</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700">وصف الإنجاز</label>
                  <textarea
                    placeholder="اكتب وصفاً تفصيلياً للإنجاز والمهارات المستخدمة..."
                    value={achievement.description}
                    onChange={(e) => updateAchievement(index, 'description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Uploaded Files Display */}
              {achievement.attachments && achievement.attachments.length > 0 && (
                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">الملفات المرفقة:</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {achievement.attachments.map((file, fileIndex) => (
                      <div key={fileIndex} className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        <FileText className="w-4 h-4" />
                        {file.name}
                        <button
                          type="button"
                          onClick={() => removeAttachment(index, fileIndex)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Remove Achievement */}
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
        className="w-full border-2 border-dashed border-blue-300 hover:border-blue-500 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        إضافة إنجاز جديد
      </button>
    </div>
  );
};

export default AchievementsStep;
