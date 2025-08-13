

import { Educator, Project, Task, Bid, Activity, ProjectStatus, BidStatus, ProjectCreationType, AssignmentType, AssignmentStatus, EducationalRequest, EducationalRequestStatus, Assignment, PricingType, PaymentStatus, FulfillmentStatus, ProjectActivityLog, EducatorStatus, EducatorApplication, VerificationStatus, User, UserStatus, Invoice, AppNotification } from './types';

export const USERS: User[] = [
    { id: 'u1', name: 'عبدالله صالح', email: 'abdullah.s@example.com', phone: '966501234567+', city: 'الرياض', address: 'حي الياسمين، شارع العليا العام', avatarUrl: 'https://i.pravatar.cc/100?u=u1', status: UserStatus.ACTIVE, registrationDate: '2024-07-20' },
    { id: 'u2', name: 'محمد الغامدي', email: 'mohammed.g@example.com', phone: '966555555555+', city: 'جدة', address: 'حي السلامة، شارع صاري', avatarUrl: 'https://i.pravatar.cc/100?u=u2', status: UserStatus.ACTIVE, registrationDate: '2024-07-22' },
    { id: 'u3', name: 'هالة عمر', email: 'hala.o@example.com', phone: '966543219876+', city: 'الدمام', address: 'حي الشاطئ، الكورنيش', avatarUrl: 'https://i.pravatar.cc/100?u=u3', status: UserStatus.BANNED, registrationDate: '2024-07-10' },
    { id: 'u4', name: 'إيمان السيد', email: 'iman.s@example.com', phone: '966567891234+', city: 'الرياض', address: 'حي النخيل', avatarUrl: 'https://i.pravatar.cc/100?u=u4', status: UserStatus.ACTIVE, registrationDate: '2024-08-01' },
    { id: 'u5', name: 'سارة العتيبي', email: 'sara.o@example.com', phone: '966598765432+', city: 'مكة', address: 'حي العزيزية', avatarUrl: 'https://i.pravatar.cc/100?u=u5', status: UserStatus.SUSPENDED, registrationDate: '2024-08-02' },
];

export const EDUCATORS: Educator[] = [
  { id: 'e1', name: 'أحمد محمود', email: 'ahmad.m@example.com', phone: '+966501112222', discipline: 'الرياضيات', avatarUrl: 'https://i.pravatar.cc/100?u=e1', status: EducatorStatus.ACTIVE, experienceLevel: 'خبير', country: 'السعودية', skills: ['الجبر', 'الهندسة التحليلية', 'التفاضل'], rating: 4.8, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e2', name: 'فاطمة الزهراء', email: 'fatima.z@example.com', phone: '+201001112222', discipline: 'الفيزياء', avatarUrl: 'https://i.pravatar.cc/100?u=e2', status: EducatorStatus.ACTIVE, experienceLevel: 'خبير', country: 'مصر', skills: ['الميكانيكا الكلاسيكية', 'الكهرومغناطيسية'], rating: 4.9, languages: ['العربية', 'الإنجليزية', 'الفرنسية'] },
  { id: 'e3', name: 'يوسف علي', email: 'yusuf.a@example.com', phone: '+971501112222', discipline: 'اللغة العربية', avatarUrl: 'https://i.pravatar.cc/100?u=e3', status: EducatorStatus.INACTIVE, experienceLevel: 'متوسط', country: 'الإمارات', skills: ['النحو والصرف', 'الأدب الجاهلي'], rating: 4.2, languages: ['العربية'] },
  { id: 'e4', name: 'سارة إبراهيم', email: 'sara.i@example.com', phone: '+966503334444', discipline: 'الكيمياء', avatarUrl: 'https://i.pravatar.cc/100?u=e4', status: EducatorStatus.ACTIVE, experienceLevel: 'متوسط', country: 'السعودية', skills: ['الكيمياء العضوية', 'الكيمياء التحليلية'], rating: 4.5, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e5', name: 'خالد العامر', email: 'k.amer@example.com', phone: '+965501112222', discipline: 'الفيزياء', avatarUrl: 'https://i.pravatar.cc/100?u=e5', status: EducatorStatus.ACTIVE, experienceLevel: 'مبتدئ', country: 'الكويت', skills: ['الديناميكا الحرارية'], rating: 3.9, languages: ['العربية'] },
  { id: 'e6', name: 'مريم عبدالله', email: 'mariam.a@example.com', phone: '+201112223333', discipline: 'الأحياء', avatarUrl: 'https://i.pravatar.cc/100?u=e6', status: EducatorStatus.ACTIVE, experienceLevel: 'خبير', country: 'مصر', skills: ['علم الوراثة', 'البيولوجيا الجزيئية', 'التشريح'], rating: 5.0, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e7', name: 'علي حسن', email: 'ali.h@example.com', phone: '+962791112222', discipline: 'التاريخ', avatarUrl: 'https://i.pravatar.cc/100?u=e7', status: EducatorStatus.SUSPENDED, experienceLevel: 'متوسط', country: 'الأردن', skills: ['التاريخ الإسلامي', 'التاريخ الحديث'], rating: 4.4, languages: ['العربية'] },
  { id: 'e8', name: 'نورة خالد', email: 'noura.k@example.com', phone: '+966505556666', discipline: 'الرياضيات', avatarUrl: 'https://i.pravatar.cc/100?u=e8', status: EducatorStatus.ACTIVE, experienceLevel: 'مبتدئ', country: 'السعودية', skills: ['الإحصاء', 'الاحتمالات'], rating: 4.1, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e9', name: 'محمد سعيد', email: 'mohammed.s@example.com', phone: '+971503334444', discipline: 'علوم الحاسب', avatarUrl: 'https://i.pravatar.cc/100?u=e9', status: EducatorStatus.ACTIVE, experienceLevel: 'خبير', country: 'الإمارات', skills: ['الذكاء الاصطناعي', 'تطوير الويب', 'قواعد البيانات'], rating: 4.9, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e10', name: 'هند فيصل', email: 'hind.f@example.com', phone: '+974501112222', discipline: 'اللغة الإنجليزية', avatarUrl: 'https://i.pravatar.cc/100?u=e10', status: EducatorStatus.ACTIVE, experienceLevel: 'متوسط', country: 'قطر', skills: ['الكتابة الأكاديمية', 'الأدب الإنجليزي'], rating: 4.6, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e11', name: 'عبدالرحمن وليد', email: 'abdul.w@example.com', phone: '+973301112222', discipline: 'الجغرافيا', avatarUrl: 'https://i.pravatar.cc/100?u=e11', status: EducatorStatus.INACTIVE, experienceLevel: 'مبتدئ', country: 'البحرين', skills: ['نظم المعلومات الجغرافية'], rating: 3.8, languages: ['العربية'] },
  { id: 'e12', name: 'عائشة منصور', email: 'aisha.m@example.com', phone: '+966507778888', discipline: 'الفنون', avatarUrl: 'https://i.pravatar.cc/100?u=e12', status: EducatorStatus.ACTIVE, experienceLevel: 'خبير', country: 'السعودية', skills: ['الرسم الزيتي', 'تاريخ الفن'], rating: 4.7, languages: ['العربية', 'الفرنسية'] },
  { id: 'e13', name: 'سلطان فهد', email: 'sultan.f@example.com', phone: '+965503334444', discipline: 'علوم الحاسب', avatarUrl: 'https://i.pravatar.cc/100?u=e13', status: EducatorStatus.ACTIVE, experienceLevel: 'متوسط', country: 'الكويت', skills: ['الأمن السيبراني', 'الشبكات'], rating: 4.5, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e14', name: 'جميلة رياض', email: 'jamila.r@example.com', phone: '+201223334444', discipline: 'الفيزياء', avatarUrl: 'https://i.pravatar.cc/100?u=e14', status: EducatorStatus.ACTIVE, experienceLevel: 'مبتدئ', country: 'مصر', skills: ['الفيزياء النووية'], rating: 4.0, languages: ['العربية'] },
  { id: 'e15', name: 'فهد تركي', email: 'fahad.t@example.com', phone: '+966509990000', discipline: 'الرياضيات', avatarUrl: 'https://i.pravatar.cc/100?u=e15', status: EducatorStatus.ACTIVE, experienceLevel: 'خبير', country: 'السعودية', skills: ['التحليل العددي', 'الرياضيات المتقطعة'], rating: 4.9, languages: ['العربية', 'الإنجليزية'] },
  // New educators for applications
  { id: 'e16', name: 'لبنى القرشي', email: 'lubna.q@example.com', phone: '+966501112233', discipline: 'علوم الحاسب', avatarUrl: 'https://i.pravatar.cc/100?u=e16', status: EducatorStatus.PENDING_REVIEW, experienceLevel: 'خبير', country: 'السعودية', skills: ['تعلم الآلة', 'معالجة الصور'], rating: 0, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e17', name: 'طارق زياد', email: 'tariq.z@example.com', phone: '+201001112233', discipline: 'الكيمياء', avatarUrl: 'https://i.pravatar.cc/100?u=e17', status: EducatorStatus.PENDING_REVIEW, experienceLevel: 'متوسط', country: 'مصر', skills: ['الكيمياء الحيوية', 'الصيدلانية'], rating: 0, languages: ['العربية', 'الإنجليزية'] },
  { id: 'e18', name: 'أميرة حمدان', email: 'amira.h@example.com', phone: '+971501112233', discipline: 'اللغة العربية', avatarUrl: 'https://i.pravatar.cc/100?u=e18', status: EducatorStatus.REJECTED, experienceLevel: 'مبتدئ', country: 'الإمارات', skills: ['البلاغة'], rating: 0, languages: ['العربية'] },
];

export const EDUCATOR_APPLICATIONS: EducatorApplication[] = [
    {
        id: 'app1',
        educatorId: 'e16',
        status: EducatorStatus.PENDING_REVIEW,
        applicationDate: '2024-08-10',
        personalId: { id: 'doc1', fileUrl: '#', fileName: 'ID_Lubna.pdf', status: VerificationStatus.PENDING },
        certifications: [
            { id: 'cert1', title: 'دكتوراه في علوم الحاسب', issuingAuthority: 'جامعة الملك سعود', issueDate: '2020', document: { id: 'doc2', fileUrl: '#', fileName: 'PhD_Cert.pdf', status: VerificationStatus.PENDING } },
            { id: 'cert2', title: 'شهادة محترف تعلم الآلة', issuingAuthority: 'Google', issueDate: '2022', document: { id: 'doc3', fileUrl: '#', fileName: 'ML_Cert.pdf', status: VerificationStatus.PENDING } },
        ],
        experiences: [
            { id: 'exp1', company: 'شركة علم', role: 'باحث ذكاء اصطناعي', startDate: '2021', endDate: 'الآن', description: 'العمل على مشاريع رؤية الحاسب.', document: { id: 'doc4', fileUrl: '#', fileName: 'Elm_Exp.pdf', status: VerificationStatus.PENDING } }
        ]
    },
    {
        id: 'app2',
        educatorId: 'e17',
        status: EducatorStatus.PENDING_REVIEW,
        applicationDate: '2024-08-11',
        personalId: { id: 'doc5', fileUrl: '#', fileName: 'Tariq_ID.jpg', status: VerificationStatus.VERIFIED },
        certifications: [
            { id: 'cert3', title: 'ماجستير في الكيمياء', issuingAuthority: 'جامعة القاهرة', issueDate: '2019', document: { id: 'doc6', fileUrl: '#', fileName: 'MSc_Chem.pdf', status: VerificationStatus.REJECTED, rejectionReason: 'الوثيقة غير واضحة.' } },
        ],
        experiences: []
    },
    {
        id: 'app3',
        educatorId: 'e18',
        status: EducatorStatus.REJECTED,
        applicationDate: '2024-08-09',
        rejectionReason: 'الخبرة المقدمة لا تتوافق مع متطلبات المنصة الحالية.',
        personalId: { id: 'doc7', fileUrl: '#', fileName: 'Amira_ID.pdf', status: VerificationStatus.VERIFIED },
        certifications: [],
        experiences: []
    }
];

export const EDUCATIONAL_REQUESTS: EducationalRequest[] = [
    {
        id: 'er1',
        title: 'تطوير محتوى تفاعلي للعلوم',
        description: 'مطلوب تطوير محتوى تفاعلي لمادة العلوم للصف الخامس، يشمل تجارب افتراضية واختبارات قصيرة. يجب أن يكون المحتوى متوافقًا مع معايير المنهج الوطني ويغطي الوحدات التالية: \n1. دورة حياة النباتات. \n2. النظام الشمسي والكواكب. \n3. حالات المادة.',
        requesterId: 'u1',
        status: EducationalRequestStatus.ACCEPTED,
        createdAt: '2024-07-28',
        subject: 'العلوم',
        educationLevel: 'المرحلة الابتدائية',
        budget: 5000,
        pricingType: PricingType.FIXED,
        paymentStatus: PaymentStatus.PARTIALLY_PAID,
        fulfillmentStatus: FulfillmentStatus.IN_PROGRESS,
        expectedDeliveryDate: '2024-09-15',
        finalAgreement: "يلتزم المتخصص بتسليم المحتوى كاملاً قبل تاريخ 2024-09-15. يتم دفع 50% من المبلغ مقدماً والباقي عند التسليم النهائي بعد المراجعة والاعتماد من قبل اللجنة الأكاديمية.",
        attachments: [
            { id: 'att1', name: 'منهج_العلوم_الخامس.pdf', url: '#', size: '2.3 MB', type: 'PDF' },
            { id: 'att2', name: 'نموذج_محتوى_سابق.docx', url: '#', size: '800 KB', type: 'DOCX' },
        ],
        activityLog: [
            { id: 'actlog-5', type: 'PROJECT_LINKED', details: 'تم ربط الطلب بمشروع "تصميم تجارب معملية بناءً على طلب"', timestamp: 'منذ يومين', actor: 'المدير العام', actorAvatar: 'https://i.pravatar.cc/100?u=admin' },
            { id: 'actlog-4', type: 'NOTE', details: 'تمت مراجعة الطلب، يبدو واعدًا. تم تحديد ميزانية تقديرية وإضافة الاتفاق المبدئي.', timestamp: 'منذ 3 أيام', actor: 'أحمد محمود', actorAvatar: 'https://i.pravatar.cc/100?u=e1' },
            { id: 'actlog-3', type: 'PAYMENT_STATUS_CHANGED', details: 'من "غير مدفوع" إلى "مدفوع جزئياً"', reason: 'تم استلام الدفعة المقدمة.', timestamp: 'منذ 3 أيام', actor: 'قسم المالية', actorAvatar: 'https://i.pravatar.cc/100?u=finance' },
            { id: 'actlog-2', type: 'STATUS_CHANGED', details: 'من "معلق" إلى "مقبول"', reason: 'تمت الموافقة من قبل اللجنة الأكاديمية.', timestamp: 'منذ 4 أيام', actor: 'المدير العام', actorAvatar: 'https://i.pravatar.cc/100?u=admin' },
            { id: 'actlog-1', type: 'CREATED', details: 'تم إنشاء الطلب بواسطة عبدالله صالح.', timestamp: 'منذ 5 أيام', actor: 'النظام', actorAvatar: 'https://i.pravatar.cc/100?u=system' },
        ]
    },
    {
        id: 'er2',
        title: 'إعداد بنك أسئلة للتاريخ',
        description: 'مطلوب إعداد بنك أسئلة شامل يغطي منهج التاريخ للمرحلة الثانوية بأكمله، مع مراعاة مستويات الصعوبة المختلفة (بلوم). يجب أن يحتوي البنك على 500 سؤال على الأقل.',
        requesterId: 'u2',
        status: EducationalRequestStatus.PENDING,
        createdAt: '2024-08-01',
        subject: 'التاريخ',
        educationLevel: 'المرحلة الثانوية',
        attachments: [],
        activityLog: [{ id: 'actlog-6', type: 'CREATED', details: 'تم إنشاء الطلب.', timestamp: 'منذ 3 أيام', actor: 'النظام', actorAvatar: 'https://i.pravatar.cc/100?u=system' }],
        pricingType: PricingType.FIXED,
        budget: 3000,
        paymentStatus: PaymentStatus.UNPAID,
        fulfillmentStatus: FulfillmentStatus.NOT_STARTED,
        expectedDeliveryDate: '2024-09-01',
    },
    {
        id: 'er3',
        title: 'ترجمة مواد علمية في الذكاء الاصطناعي',
        description: 'ترجمة مجموعة من الأبحاث العلمية الحديثة من اللغة الإنجليزية إلى العربية في مجال الذكاء الاصطناعي. الأبحاث تتعلق بمعالجة اللغات الطبيعية.',
        requesterId: 'u3',
        status: EducationalRequestStatus.REJECTED,
        createdAt: '2024-07-15',
        subject: 'علوم الحاسب',
        educationLevel: 'المرحلة الجامعية',
        attachments: [{ id: 'att3', name: 'research_papers.zip', url: '#', size: '15.7 MB', type: 'ZIP' }],
        activityLog: [
            { id: 'actlog-8', type: 'STATUS_CHANGED', details: 'من "معلق" إلى "مرفوض"', reason: 'تم الرفض لعدم توفر مترجمين متخصصين حالياً في هذا المجال الدقيق.', timestamp: 'منذ 3 أسابيع', actor: 'المدير العام', actorAvatar: 'https://i.pravatar.cc/100?u=admin' },
            { id: 'actlog-7', type: 'CREATED', details: 'تم إنشاء الطلب.', timestamp: 'منذ 3 أسابيع', actor: 'النظام', actorAvatar: 'https://i.pravatar.cc/100?u=system' },
        ],
        pricingType: PricingType.HOURLY,
        budget: 8000,
        paymentStatus: PaymentStatus.UNPAID,
        fulfillmentStatus: FulfillmentStatus.NOT_STARTED,
        expectedDeliveryDate: null,
    },
    { id: 'er4', title: 'تصميم تجارب معملية للكيمياء', description: 'تصميم وتنفيذ مجموعة من التجارب المعملية الآمنة لمادة الكيمياء للصف الأول الثانوي.', requesterId: 'u4', status: EducationalRequestStatus.PENDING, createdAt: '2024-08-03', subject: 'الكيمياء', educationLevel: 'المرحلة الثانوية', attachments: [], activityLog: [], pricingType: PricingType.FIXED, budget: 4500, paymentStatus: PaymentStatus.UNPAID, fulfillmentStatus: FulfillmentStatus.NOT_STARTED, expectedDeliveryDate: '2024-09-20', },
    { id: 'er5', title: 'إنشاء فيديوهات تعليمية للغة الإنجليزية', description: 'إنتاج سلسلة فيديوهات قصيرة وممتعة لتعليم قواعد اللغة الإنجليزية للمبتدئين.', requesterId: 'u5', status: EducationalRequestStatus.ACCEPTED, createdAt: '2024-08-05', subject: 'اللغة الإنجليزية', educationLevel: 'المبتدئين', attachments: [], activityLog: [], pricingType: PricingType.FIXED, budget: 2500, paymentStatus: PaymentStatus.PAID, fulfillmentStatus: FulfillmentStatus.COMPLETED, expectedDeliveryDate: '2024-10-01', },
];

const TASK_1_1_ASSIGNMENTS: Assignment[] = [
    { id: 'a1-1-1', educatorId: 'e1', type: AssignmentType.DIRECT, status: AssignmentStatus.ACCEPTED, amount: 1500 }
];
const TASK_1_2_ASSIGNMENTS: Assignment[] = [
    { id: 'a1-2-1', educatorId: 'e1', type: AssignmentType.DIRECT, status: AssignmentStatus.ACCEPTED, amount: 1500 }
];
const TASK_1_3_ASSIGNMENTS: Assignment[] = [
    { id: 'a1-3-1', educatorId: 'e2', type: AssignmentType.INVITATION, status: AssignmentStatus.PENDING }
];


const TASKS_P1: Task[] = [
    { id: 't1-1', title: 'الفصل الأول: مقدمة في الجبر', description: 'كتابة محتوى تعليمي وشرح مبسط للمفاهيم الأساسية.', status: ProjectStatus.COMPLETED, assignments: TASK_1_1_ASSIGNMENTS, creationDate: '2024-07-16', deadline: '2024-08-10', budget: 1500, isPublic: false, biddingStatus: 'CLOSED', subTasks: [], attachments: [], notes: [], activityLog: [] },
    { id: 't1-2', title: 'الفصل الثاني: المعادلات الخطية', description: 'إعداد تمارين وتطبيقات عملية على المعادلات.', status: ProjectStatus.IN_PROGRESS, assignments: TASK_1_2_ASSIGNMENTS, creationDate: '2024-07-16', deadline: '2024-08-20', budget: 1500, isPublic: false, biddingStatus: 'CLOSED', subTasks: [], attachments: [], notes: [], activityLog: [] },
    { id: 't1-3', title: 'إعداد الاختبار النصفي', description: 'تصميم اختبار يغطي الفصول الأولى.', status: ProjectStatus.PENDING, assignments: TASK_1_3_ASSIGNMENTS, creationDate: '2024-07-20', deadline: '2024-08-25', budget: 1000, isPublic: true, biddingStatus: 'OPEN', subTasks: [], attachments: [], notes: [], activityLog: [] },
];

const TASKS_P2: Task[] = [
    { 
        id: 't2-1', 
        title: 'تجربة قياس التسارع', 
        description: 'تصوير فيديو للتجربة وشرح الخطوات. يجب أن يكون الفيديو عالي الدقة والصوت واضح. المدة المستهدفة 10-15 دقيقة.', 
        status: ProjectStatus.IN_PROGRESS, 
        assignments: [{id: 't2-a1', educatorId: 'e14', type: AssignmentType.FROM_BID, status: AssignmentStatus.ACCEPTED, agreementNotes: "تم الاتفاق على التصوير في معمل الجامعة.", amount: 1800}], 
        creationDate: '2024-07-22',
        deadline: '2024-09-05', 
        budget: 1800, 
        isPublic: true, 
        biddingStatus: 'CLOSED',
        subTasks: [
            { id: 'st-2-1-1', title: 'كتابة سيناريو الفيديو', completed: true, createdBy: 'provider', providerId: 'e14' },
            { id: 'st-2-1-2', title: 'تجهيز الأدوات والمواد', completed: true, createdBy: 'provider', providerId: 'e14', attachments: [
                { id: 'ta-2', name: 'قائمة_المواد.pdf', url: '#', size: '300KB', uploadedBy: 'provider', providerId: 'e14', createdAt: '2024-08-11' }
            ]},
            { id: 'st-2-1-3', title: 'تصوير التجربة', completed: false, createdBy: 'provider', providerId: 'e14' },
            { id: 'st-2-1-4', title: 'مونتاج الفيديو وإضافة الرسومات', completed: false, createdBy: 'provider', providerId: 'e14' },
            { id: 'st-2-1-5', title: 'مراجعة أولية من المدير', completed: false, createdBy: 'admin' },
        ],
        attachments: [
            { id: 'ta-1', name: 'ارشادات_السلامة.pdf', url: '#', size: '1.2MB', uploadedBy: 'admin', createdAt: '2024-08-10' },
        ],
        notes: [
             { id: 'tn-1', content: 'هل يمكن توفير كاميرا احترافية للتصوير؟', createdAt: 'منذ يومين', createdBy: 'provider', authorName: 'جميلة رياض', authorAvatar: 'https://i.pravatar.cc/100?u=e14' },
             { id: 'tn-2', content: 'بالتأكيد، تم التنسيق مع قسم الإعلام لتوفير المعدات اللازمة.', createdAt: 'منذ يوم', createdBy: 'admin', authorName: 'محمد سعيد', authorAvatar: 'https://i.pravatar.cc/100?u=e9' },
        ],
        activityLog: [
            { id: 'tal-1', message: 'أضافت جميلة رياض ملاحظة جديدة.', timestamp: 'منذ يومين', actorName: 'جميلة رياض' },
            { id: 'tal-2', message: 'أكملت جميلة رياض مهمة فرعية: "تجهيز الأدوات والمواد".', timestamp: 'منذ 3 ساعات', actorName: 'جميلة رياض' },
        ]
    },
    { 
        id: 't2-2', 
        title: 'تحليل البيانات وكتابة التقرير', 
        description: 'تحليل النتائج المستخلصة من التجربة وكتابة تقرير علمي مفصل.', 
        status: ProjectStatus.PENDING, 
        assignments: [], 
        creationDate: '2024-07-22',
        deadline: '2024-09-15', 
        budget: 1700, 
        isPublic: true, 
        biddingStatus: 'OPEN',
        subTasks: [],
        attachments: [],
        notes: [],
        activityLog: [],
    },
];

const TASKS_P3: Task[] = [
    { id: 't3-1', title: 'بحث الشعراء', description: 'جمع مادة علمية عن 5 شعراء جاهليين.', status: ProjectStatus.COMPLETED, assignments: [{id: 't3-a1', educatorId: 'e3', type: AssignmentType.DIRECT, status: AssignmentStatus.ACCEPTED, amount: 1000}], creationDate: '2024-06-02', deadline: '2024-06-15', budget: 1000, isPublic: false, biddingStatus: 'CLOSED', subTasks: [], attachments: [], notes: [], activityLog: [] },
    { id: 't3-2', title: 'إعداد العرض التقديمي', description: 'تصميم عرض تقديمي جذاب للمادة العلمية.', status: ProjectStatus.COMPLETED, assignments: [{id: 't3-a2', educatorId: 'e3', type: AssignmentType.DIRECT, status: AssignmentStatus.ACCEPTED, amount: 1000}], creationDate: '2024-06-02', deadline: '2024-06-25', budget: 1000, isPublic: false, biddingStatus: 'CLOSED', subTasks: [], attachments: [], notes: [], activityLog: [] },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'تطوير منهج الرياضيات للمرحلة الإعدادية',
    description: 'مشروع متكامل لتطوير وتحديث منهج الرياضيات للصف الثاني الإعدادي ليشمل أحدث الطرق التعليمية والتمارين التفاعلية.',
    creationType: ProjectCreationType.STANDALONE,
    educationalRequestId: null,
    status: ProjectStatus.IN_PROGRESS,
    budget: 6000,
    createdAt: '2024-07-15',
    deadline: '2024-09-30',
    createdBy: 'الإدارة الأكاديمية',
    projectManagerId: 'e9',
    tasks: TASKS_P1,
    tags: ['رياضيات', 'مناهج', 'تطوير محتوى'],
    isPublished: false,
    activityLog: [
      { id: 'pal-1', message: 'تغيير حالة المشروع إلى "قيد التنفيذ"', timestamp: '2024-07-16', actor: 'محمد سعيد' },
      { id: 'pal-2', message: 'إضافة مهمة جديدة: "إعداد الاختبار النصفي"', timestamp: '2024-07-20', actor: 'محمد سعيد' },
      { id: 'pal-3', message: 'تم تعيين "أحمد محمود" للمهمة "الفصل الأول"', timestamp: '2024-07-16', actor: 'محمد سعيد' },
       { id: 'pal-4', message: 'تم نشر المشروع لاستقبال العروض.', timestamp: '2024-07-21', actor: 'محمد سعيد' },
    ],
  },
  {
    id: 'p2',
    title: 'إنشاء محتوى فيديو لمادة الفيزياء',
    description: 'مطلوب معلم متخصص لإنشاء سلسلة فيديوهات تعليمية عالية الجودة تشرح مفاهيم الفيزياء الحديثة بطريقة مبسطة وجذابة.',
    creationType: ProjectCreationType.PUBLIC,
    educationalRequestId: null,
    status: ProjectStatus.IN_PROGRESS,
    budget: 3500,
    createdAt: '2024-07-20',
    deadline: '2024-10-15',
    createdBy: 'قسم الإعلام التعليمي',
    projectManagerId: 'e9',
    tasks: TASKS_P2,
    tags: ['فيزياء', 'فيديو تعليمي'],
    isPublished: true,
    activityLog: [],
  },
  {
    id: 'p3',
    title: 'ورشة عمل عن الشعر الجاهلي',
    description: 'تنظيم وإعداد محتوى لورشة عمل تفاعلية عن أبرز شعراء العصر الجاهلي وأعمالهم.',
    creationType: ProjectCreationType.PUBLIC,
    educationalRequestId: null,
    status: ProjectStatus.COMPLETED,
    budget: 2000,
    createdAt: '2024-06-01',
    deadline: '2024-06-30',
    createdBy: 'قسم اللغة العربية',
    projectManagerId: 'e10',
    tasks: TASKS_P3,
    tags: ['لغة عربية', 'أدب', 'ورشة عمل'],
    isPublished: true,
    activityLog: [],
  },
  {
    id: 'p4',
    title: 'تصميم تجارب معملية بناءً على طلب',
    description: 'تصميم وتنفيذ مجموعة من التجارب المعملية الآمنة بناءً على الطلب التعليمي رقم #er1.',
    creationType: ProjectCreationType.FROM_REQUEST,
    educationalRequestId: 'er1',
    status: ProjectStatus.PENDING,
    budget: null, // لم يحدد بعد
    createdAt: '2024-08-01',
    deadline: null, // لم يحدد بعد
    createdBy: 'الإدارة الأكاديمية',
    projectManagerId: 'e4',
    tasks: [],
    tags: ['علوم', 'تجارب معملية'],
    isPublished: false,
    activityLog: [],
  },
   {
    id: 'p5',
    title: 'تطبيق ويب لتعليم البرمجة للأطفال',
    description: 'تطوير تطبيق ويب تفاعلي لتعليم أساسيات البرمجة للأطفال من سن 8-12 باستخدام لغة Scratch.',
    creationType: ProjectCreationType.STANDALONE,
    educationalRequestId: null,
    status: ProjectStatus.CANCELED,
    budget: 12000,
    createdAt: '2024-05-10',
    deadline: '2024-09-01',
    createdBy: 'قسم التقنية',
    projectManagerId: 'e13',
    tasks: [],
    tags: ['برمجة', 'تطوير ويب', 'أطفال'],
    isPublished: false,
    activityLog: [],
  },
];

export const BIDS: Bid[] = [
    { 
        id: 'b1', 
        projectId: 'p2', 
        educatorId: 'e2', 
        bidTasks: [
            { taskId: 't2-1', status: BidStatus.PENDING, amount: 1600 },
            { taskId: 't2-2', status: BidStatus.PENDING, amount: 1600 }
        ],
        deliveryDays: 50, 
        proposal: 'لدي خبرة واسعة في إنتاج المحتوى التعليمي وأضمن تقديم فيديوهات بجودة عالية وتصوير احترافي لكلا المهمتين. يمكنني البدء فورًا.', 
        createdAt: '2024-07-22',
        attachments: [],
        links: [
            { id: 'l1', title: 'قناتي التعليمية على يوتيوب', url: 'https://youtube.com' }
        ],
    },
    { 
        id: 'b2', 
        projectId: 'p2', 
        educatorId: 'e5', 
        bidTasks: [{ taskId: 't2-1', status: BidStatus.PENDING, amount: 1750 }],
        deliveryDays: 20, 
        proposal: 'يمكنني إنجاز مهمة تصوير الفيديو في وقت قياسي مع الحفاظ على الجودة. مرفق نماذج أعمال سابقة في الفيزياء تحديدًا.', 
        createdAt: '2024-07-21',
        attachments: [
            { id: 'att-b2', name: 'نموذج_عمل_سابق.mp4', url: '#', size: '12 MB', type: 'Video'}
        ],
        links: [],
    },
    { 
        id: 'b3', 
        projectId: 'p2', 
        educatorId: 'e13', 
        bidTasks: [{ taskId: 't2-2', status: BidStatus.PENDING, amount: 1500 }],
        deliveryDays: 30, 
        proposal: 'أقدم عرضًا تنافسيًا لمهمة تحليل البيانات. لدي خبرة ممتازة في كتابة التقارير العلمية.', 
        createdAt: '2024-07-23',
        attachments: [],
        links: [],
    },
    { 
        id: 'b4', 
        projectId: 'p2', 
        educatorId: 'e14', 
        bidTasks: [{ taskId: 't2-1', status: BidStatus.ASSIGNED, amount: 1800, rejectionReason: 'العرض الأكثر تخصصًا ومناسبة للمهمة.' }],
        deliveryDays: 25, 
        proposal: 'متخصص في الفيزياء وأستطيع تبسيط المفاهيم المعقدة للطلاب. هذا العرض لتنفيذ مهمة قياس التسارع فقط.', 
        createdAt: '2024-07-24',
        attachments: [],
        links: [
            { id: 'l2', title: 'مقال لي في مجلة علمية', url: 'https://example.com' }
        ],
    },
    { 
        id: 'b5', 
        projectId: 'p3', 
        educatorId: 'e2', 
        bidTasks: [{ taskId: 't3-1', status: BidStatus.REJECTED, amount: 1800, rejectionReason: 'تم التعيين المباشر لمتخصص آخر.' }],
        deliveryDays: 25, 
        proposal: 'خبرة في الأدب العربي ومستعد لتقديم ورشة عمل غنية بالمعلومات.', 
        createdAt: '2024-06-02',
        attachments: [],
        links: [],
    },
     { 
        id: 'b6', 
        projectId: 'p2', 
        educatorId: 'e2', 
        bidTasks: [{ taskId: 't2-2', status: BidStatus.APPROVED, amount: 1400, approvalMessage: 'عرضك ممتاز، يرجى الاستعداد للبدء.' }],
        deliveryDays: 28, 
        proposal: 'أستطيع تحليل البيانات وكتابة التقرير النهائي باحترافية عالية.', 
        createdAt: '2024-07-25',
        attachments: [],
        links: [],
    }
];

export const ACTIVITIES: Activity[] = [
    {id: 'a1', message: 'قام بقبول العرض المقدم من جميلة رياض لمشروع "إنشاء محتوى فيديو لمادة الفيزياء".', actor: 'المدير', timestamp: 'منذ 2 ساعة', type: 'bid'},
    {id: 'a2', message: 'أضاف مهمة جديدة: "إعداد الاختبار النصفي" إلى مشروع "تطوير منهج الرياضيات".', actor: 'المدير', timestamp: 'منذ 5 ساعات', type: 'task'},
    {id: 'a3', message: 'نشر مشروع جديد للعامة: "ورشة عمل عن الشعر الجاهلي".', actor: 'المدير', timestamp: 'بالأمس', type: 'project'},
    {id: 'a4', message: 'انضم "خالد العامر" كمتخصص جديد.', actor: 'النظام', timestamp: 'منذ 3 أيام', type: 'user'},
    {id: 'a5', message: 'تم إكمال مشروع "ورشة عمل عن الشعر الجاهلي".', actor: 'يوسف علي', timestamp: 'منذ أسبوع', type: 'project'},
    {id: 'a6', message: 'تم إصدار فاتورة جديدة لمشروع "تطوير منهج الرياضيات".', actor: 'النظام المالي', timestamp: 'منذ أسبوع', type: 'invoice'},
];

export const INVOICES: Invoice[] = [
    {
        id: 'inv1', invoiceNumber: '2024-001', projectId: 'p3', requesterId: 'u2', issueDate: '2024-07-01', dueDate: '2024-07-15',
        status: 'PAID',
        items: [{ description: "إنجاز مهمة بحث الشعراء", quantity: 1, unitPrice: 1000, total: 1000 }, { description: "إعداد العرض التقديمي", quantity: 1, unitPrice: 1000, total: 1000 }],
        subtotal: 2000, tax: 300, totalAmount: 2300,
        notes: "تم الدفع بالكامل."
    },
    {
        id: 'inv2', invoiceNumber: '2024-002', projectId: 'p1', requesterId: 'u1', issueDate: '2024-08-12', dueDate: '2024-08-26',
        status: 'ISSUED',
        items: [{ description: "إنجاز الفصل الأول: مقدمة في الجبر", quantity: 1, unitPrice: 1500, total: 1500 }],
        subtotal: 1500, tax: 225, totalAmount: 1725,
        notes: "يرجى الدفع قبل تاريخ الاستحقاق."
    },
     {
        id: 'inv3', invoiceNumber: '2024-003', projectId: 'p2', requesterId: 'u4', issueDate: '2024-08-01', dueDate: '2024-08-15',
        status: 'OVERDUE',
        items: [{ description: "دفعة مقدمة لمشروع محتوى فيديو الفيزياء", quantity: 1, unitPrice: 1000, total: 1000 }],
        subtotal: 1000, tax: 150, totalAmount: 1150,
        notes: "الفاتورة متأخرة عن موعد السداد."
    },
];

export const NOTIFICATIONS: AppNotification[] = [
    { id: 'n1', type: 'success', message: 'تم قبول عرضك لمهمة "تحليل البيانات".', link: { view: 'projectDetail', id: 'p2' }, isRead: false, timestamp: 'منذ 5 دقائق', icon: 'bid'},
    { id: 'n2', type: 'info', message: 'تم إضافة مهمة جديدة "إعداد الاختبار النهائي" لمشروع الرياضيات.', link: { view: 'projectDetail', id: 'p1' }, isRead: false, timestamp: 'منذ ساعة', icon: 'task'},
    { id: 'n3', type: 'warning', message: 'فاتورة رقم 2024-003 مستحقة الدفع غداً.', link: { view: 'finance', id: 'inv3'}, isRead: false, timestamp: 'منذ 4 ساعات', icon: 'invoice'},
    { id: 'n4', type: 'info', message: 'قدم "يوسف علي" عرضاً جديداً على مشروع الفيزياء.', link: { view: 'projectDetail', id: 'p2'}, isRead: true, timestamp: 'بالأمس', icon: 'bid'},
    { id: 'n5', type: 'success', message: 'طلب التسجيل الخاص بك كمتخصص فيزياء تم قبوله!', link: { view: 'educators', id: 'e2'}, isRead: true, timestamp: 'منذ يومين', icon: 'application'},
];