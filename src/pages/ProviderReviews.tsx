import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderReviews = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 'REV-001',
      student: {
        name: 'سارة أحمد محمد',
        avatar: '👩‍🎓',
        university: 'جامعة الملك سعود'
      },
      service: 'مساعدة في مشروع التخرج',
      rating: 5,
      title: 'خدمة استثنائية ومتميزة',
      comment: 'الدكتور أحمد ساعدني بشكل كبير في مشروع التخرج. الشرح كان واضح والمتابعة كانت ممتازة. حصلت على درجة عالية بفضل توجيهاته القيمة. أنصح بشدة بالتعامل معه.',
      date: '2024-02-15',
      verified: true,
      helpful: 23,
      projectComplexity: 'عالي',
      responseTime: 'سريع جداً',
      communication: 'ممتاز',
      orderValue: '1500 ر.س'
    },
    {
      id: 'REV-002',
      student: {
        name: 'محمد الشهري',
        avatar: '👨‍💼',
        university: 'جامعة الملك فهد'
      },
      service: 'حل واجب خوارزميات',
      rating: 5,
      title: 'سرعة في التنفيذ وجودة عالية',
      comment: 'تم حل الواجب بسرعة مذهلة وبجودة عالية. الشرح المرفق كان مفصل وساعدني في فهم الخوارزميات بشكل أفضل. شكراً لك دكتور أحمد.',
      date: '2024-02-10',
      verified: true,
      helpful: 18,
      projectComplexity: 'متوسط',
      responseTime: 'سريع',
      communication: 'جيد جداً',
      orderValue: '200 ر.س'
    },
    {
      id: 'REV-003',
      student: {
        name: 'فاطمة العلي',
        avatar: '👩‍🔬',
        university: 'جامعة الأميرة نورا'
      },
      service: 'مراجعة بحث الذكاء الاصطناعي',
      rating: 4,
      title: 'مراجعة شاملة ومفيدة',
      comment: 'قام الدكتور بمراجعة شاملة للبحث وأضاف تحسينات مهمة. الوقت كان أطول قليلاً من المتوقع ولكن النتيجة كانت ممتازة. أشكره على الجهد المبذول.',
      date: '2024-02-05',
      verified: true,
      helpful: 15,
      projectComplexity: 'عالي',
      responseTime: 'متوسط',
      communication: 'جيد',
      orderValue: '800 ر.س'
    },
    {
      id: 'REV-004',
      student: {
        name: 'عبدالله الخالد',
        avatar: '👨‍🎓',
        university: 'جامعة الملك عبدالعزيز'
      },
      service: 'التدريس الخصوصي',
      rating: 5,
      title: 'أستاذ ممتاز ويستحق التقدير',
      comment: 'جلسات التدريس كانت مفيدة جداً. الدكتور أحمد يشرح بطريقة واضحة ومبسطة. تحسن مستواي بشكل ملحوظ بعد الجلسات. سأحجز معه جلسات أخرى بالتأكيد.',
      date: '2024-01-30',
      verified: true,
      helpful: 31,
      projectComplexity: 'متوسط',
      responseTime: 'سريع جداً',
      communication: 'ممتاز',
      orderValue: '450 ر.س'
    },
    {
      id: 'REV-005',
      student: {
        name: 'نورا السعيد',
        avatar: '👩‍💻',
        university: 'جامعة الإمام'
      },
      service: 'مراجعة الأكواد',
      rating: 4,
      title: 'مراجعة دقيقة مع اقتراحات مفيدة',
      comment: 'راجع الكود بدقة وأضاف تحسينات مهمة. التوثيق المضاف كان مفيد جداً. كان بإمكانه توضيح بعض النقاط أكثر ولكن بشكل عام الخدمة ممتازة.',
      date: '2024-01-25',
      verified: true,
      helpful: 12,
      projectComplexity: 'منخفض',
      responseTime: 'سريع',
      communication: 'جيد',
      orderValue: '120 ر.س'
    },
    {
      id: 'REV-006',
      student: {
        name: 'خالد الأحمد',
        avatar: '👨‍🔬',
        university: 'جامعة الدمام'
      },
      service: 'بحث أكاديمي متخصص',
      rating: 3,
      title: 'جودة مقبولة مع بعض التحفظات',
      comment: 'البحث كان جيد بشكل عام ولكن كان هناك بعض النقاط التي تحتاج لمزيد من التفصيل. التسليم كان في الوقت المحدد. أتمنى تحسين بعض الجوانب في المرات القادمة.',
      date: '2024-01-20',
      verified: true,
      helpful: 8,
      projectComplexity: 'عالي',
      responseTime: 'متوسط',
      communication: 'متوسط',
      orderValue: '600 ر.س'
    }
  ];

  const getRatingColor = (rating) => {
    if (rating >= 5) return 'text-green-600';
    if (rating >= 4) return 'text-yellow-600';
    if (rating >= 3) return 'text-orange-600';
    return 'text-red-600';
  };

  const getStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const filteredAndSortedReviews = reviews
    .filter(review => {
      if (activeFilter === 'all') return true;
      if (activeFilter === '5stars') return review.rating === 5;
      if (activeFilter === '4stars') return review.rating === 4;
      if (activeFilter === '3stars') return review.rating <= 3;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'highest') return b.rating - a.rating;
      if (sortBy === 'lowest') return a.rating - b.rating;
      return 0;
    });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F3' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: '#333333' }}>
                التقييمات والمراجعات
              </h1>
              <p className="opacity-70 mt-1" style={{ color: '#333333' }}>
                آراء الطلاب وتقييماتهم لخدماتك الأكاديمية
              </p>
            </div>
            <button 
              onClick={() => navigate('/provider-dashboard')}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              العودة للوحة التحكم
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Rating Overview */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-6xl font-bold mb-2" style={{ color: '#F8C421' }}>
                {averageRating.toFixed(1)}
              </div>
              <div className="text-3xl mb-2" style={{ color: '#F8C421' }}>
                {getStars(Math.round(averageRating))}
              </div>
              <p className="text-lg font-semibold mb-1" style={{ color: '#333333' }}>
                متوسط التقييم العام
              </p>
              <p className="opacity-70" style={{ color: '#333333' }}>
                من أصل {reviews.length} تقييم
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map(stars => (
                <div key={stars} className="flex items-center gap-4">
                  <span className="text-sm font-medium w-12" style={{ color: '#333333' }}>
                    {stars} نجوم
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(ratingDistribution[stars] / reviews.length) * 100}%`,
                        backgroundColor: '#F8C421'
                      }}
                    ></div>
                  </div>
                  <span className="text-sm w-8" style={{ color: '#333333' }}>
                    {ratingDistribution[stars]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-2xl p-4 shadow-lg mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Buttons */}
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'جميع التقييمات', count: reviews.length },
                { id: '5stars', label: '5 نجوم', count: ratingDistribution[5] },
                { id: '4stars', label: '4 نجوم', count: ratingDistribution[4] },
                { id: '3stars', label: '3 نجوم وأقل', count: ratingDistribution[3] + ratingDistribution[2] + ratingDistribution[1] }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    activeFilter === filter.id 
                      ? 'text-white shadow-md' 
                      : 'hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: activeFilter === filter.id ? '#F8C421' : 'transparent',
                    color: activeFilter === filter.id ? '#333333' : '#666666'
                  }}
                >
                  <span>{filter.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl border-0 shadow-sm"
              style={{ backgroundColor: 'white', color: '#333333' }}
            >
              <option value="newest">الأحدث أولاً</option>
              <option value="oldest">الأقدم أولاً</option>
              <option value="highest">أعلى تقييم</option>
              <option value="lowest">أقل تقييم</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredAndSortedReviews.map((review) => (
            <div key={review.id} 
                 className="bg-white rounded-3xl shadow-lg border-0 overflow-hidden transition-all duration-300 hover:shadow-xl">
              
              {/* Review Header */}
              <div className="p-6 border-b" style={{ borderColor: '#F0F0F0' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl">
                      {review.student.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg" style={{ color: '#333333' }}>
                          {review.student.name}
                        </h4>
                        {review.verified && (
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                            ✓ موثق
                          </span>
                        )}
                      </div>
                      <p className="text-sm opacity-70 mb-1" style={{ color: '#333333' }}>
                        {review.student.university}
                      </p>
                      <p className="text-sm font-medium" style={{ color: '#333333' }}>
                        خدمة: {review.service}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <span className={`text-2xl ${getRatingColor(review.rating)}`}>
                        {getStars(review.rating)}
                      </span>
                      <span className="font-bold text-lg" style={{ color: '#333333' }}>
                        {review.rating}.0
                      </span>
                    </div>
                    <p className="text-sm opacity-70" style={{ color: '#333333' }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                
                <h5 className="font-bold text-lg mb-2" style={{ color: '#333333' }}>
                  {review.title}
                </h5>
              </div>

              {/* Review Content */}
              <div className="p-6">
                <p className="leading-relaxed mb-6" style={{ color: '#333333' }}>
                  {review.comment}
                </p>

                {/* Review Details */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="text-sm opacity-70 mb-1" style={{ color: '#333333' }}>
                      تعقيد المشروع
                    </div>
                    <div className="font-semibold" style={{ color: '#333333' }}>
                      {review.projectComplexity}
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="text-sm opacity-70 mb-1" style={{ color: '#333333' }}>
                      سرعة الرد
                    </div>
                    <div className="font-semibold" style={{ color: '#333333' }}>
                      {review.responseTime}
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="text-sm opacity-70 mb-1" style={{ color: '#333333' }}>
                      التواصل
                    </div>
                    <div className="font-semibold" style={{ color: '#333333' }}>
                      {review.communication}
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="text-sm opacity-70 mb-1" style={{ color: '#333333' }}>
                      قيمة الطلب
                    </div>
                    <div className="font-semibold" style={{ color: '#333333' }}>
                      {review.orderValue}
                    </div>
                  </div>
                </div>

                {/* Review Actions */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#F0F0F0' }}>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: '#F8F9FA', color: '#333333' }}>
                      <span>👍</span>
                      <span className="text-sm">مفيد ({review.helpful})</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: '#F8F9FA', color: '#333333' }}>
                      <span>💬</span>
                      <span className="text-sm">رد</span>
                    </button>
                  </div>
                  
                  <button className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: '#F8C421', color: '#333333' }}>
                    تواصل مع الطالب
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredAndSortedReviews.length > 0 && (
          <div className="text-center pt-8">
            <button className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#F8C421', color: '#333333' }}>
              تحميل المزيد من التقييمات
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredAndSortedReviews.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#333333' }}>
              لا توجد تقييمات في هذا القسم
            </h3>
            <p className="opacity-70" style={{ color: '#333333' }}>
              لم يتم العثور على تقييمات تطابق الفلتر المحدد
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderReviews;