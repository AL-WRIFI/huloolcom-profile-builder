
import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Users } from "lucide-react";

const mockProviders = [
  {
    id: 1,
    name: "د. أحمد محمد",
    title: "أستاذ في علوم الحاسوب",
    rating: 4.8,
    reviews: 156,
    location: "الرياض، السعودية",
    responseTime: "خلال ساعة",
    completedProjects: 89,
    specializations: ["برمجة", "ذكاء اصطناعي", "قواعد البيانات"],
    image: "/placeholder.svg",
    price: "من 200 ريال",
    isOnline: true
  },
  {
    id: 2,
    name: "د. فاطمة السالم",
    title: "محاضرة في إدارة الأعمال",
    rating: 4.9,
    reviews: 203,
    location: "جدة، السعودية",
    responseTime: "خلال 30 دقيقة",
    completedProjects: 134,
    specializations: ["إدارة", "تسويق", "ريادة الأعمال"],
    image: "/placeholder.svg",
    price: "من 150 ريال",
    isOnline: true
  },
  {
    id: 3,
    name: "أ. محمد الأحمد",
    title: "مهندس معماري",
    rating: 4.7,
    reviews: 98,
    location: "الدمام، السعودية",
    responseTime: "خلال ساعتين",
    completedProjects: 67,
    specializations: ["هندسة معمارية", "تصميم", "AutoCAD"],
    image: "/placeholder.svg",
    price: "من 300 ريال",
    isOnline: false
  }
];

const Providers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", "علوم الحاسوب", "إدارة الأعمال", "الهندسة", "الطب", "الأدب"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">المزودون الأكاديميون</h1>
              <p className="text-gray-600 mt-2">اعثر على أفضل الخبراء الأكاديميين لمساعدتك</p>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <input
                  placeholder="ابحث عن مزود أو تخصص..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 w-full sm:w-80"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 gap-2">
                <Filter className="h-4 w-4" />
                فلترة
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockProviders.map((provider) => (
            <div key={provider.id} className="rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                      <span className="text-lg font-medium">{provider.name.split(' ')[1]?.[0] || 'م'}</span>
                    </div>
                    {provider.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">{provider.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{provider.title}</p>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{provider.rating}</span>
                      <span className="text-gray-600 text-sm">({provider.reviews} تقييم)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="space-y-3">
                  {/* Specializations */}
                  <div className="flex flex-wrap gap-1">
                    {provider.specializations.slice(0, 3).map((spec) => (
                      <span key={spec} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{provider.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="truncate">{provider.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{provider.completedProjects} مشروع</span>
                    </div>
                    <div className="font-semibold text-blue-600">
                      {provider.price}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-9 px-3 flex-1">
                      عرض البروفايل
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-9 px-3">
                      راسل
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-11 px-8">
            عرض المزيد من المزودين
          </button>
        </div>
      </div>
    </div>
  );
};

export default Providers;
