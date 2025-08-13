import React, { useState, useMemo, Fragment } from 'react';
import { Educator, Assignment, AssignmentType, AssignmentStatus } from '../types';
import { StarIcon, SearchIcon, FilterIcon, XIcon, CheckCircleIcon, ChevronDownIcon, XCircleIcon as SmallXIcon } from './Icons';

interface AssignProviderModalProps {
    isOpen: boolean;
    onClose: () => void;
    educators: Educator[];
    onAssign: (newAssignments: Omit<Assignment, 'id'>[]) => void;
}

// Helper components
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} filled={i < Math.round(rating)} />
        ))}
        <span className="text-xs text-gray-500 dark:text-gray-400 ms-1 font-semibold">({rating.toFixed(1)})</span>
    </div>
);

const FilterControls: React.FC<{
    setSearchTerm: (s: string) => void;
    setDisciplineFilter: (s: string) => void;
    setExperienceFilter: (s: string) => void;
    setRatingFilter: (s: string) => void;
    disciplines: string[];
    experienceLevels: ('مبتدئ' | 'متوسط' | 'خبير')[];
}> = ({ setSearchTerm, setDisciplineFilter, setExperienceFilter, setRatingFilter, disciplines, experienceLevels }) => (
    <div className="space-y-4">
        <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">بحث</label>
            <input type="text" placeholder="ابحث بالاسم أو البريد..." onChange={e => setSearchTerm(e.target.value)} className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"/>
        </div>
        <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">التخصص</label>
            <select onChange={e => setDisciplineFilter(e.target.value)} className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5">
                <option value="">الكل</option>
                {disciplines.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
        </div>
        <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">مستوى الخبرة</label>
            <select onChange={e => setExperienceFilter(e.target.value)} className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5">
                <option value="">الكل</option>
                {experienceLevels.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
        </div>
        <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">التقييم</label>
            <select onChange={e => setRatingFilter(e.target.value)} className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5">
                <option value="">الكل</option>
                <option value="4">4 نجوم فأكثر</option>
                <option value="3">3 نجوم فأكثر</option>
                <option value="2">2 نجوم فأكثر</option>
                <option value="1">1 نجمة فأكثر</option>
            </select>
        </div>
    </div>
);

// Main Component
const AssignProviderModal: React.FC<AssignProviderModalProps> = ({ isOpen, onClose, educators, onAssign }) => {
    // State management
    const [selectedEducators, setSelectedEducators] = useState<Set<string>>(new Set());
    const [assignmentType, setAssignmentType] = useState<AssignmentType>(AssignmentType.INVITATION);
    const [amount, setAmount] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [disciplineFilter, setDisciplineFilter] = useState('');
    const [experienceFilter, setExperienceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [isFiltersOpen, setFiltersOpen] = useState(false);

    // Memoized data
    const disciplines = useMemo(() => [...new Set(educators.map(e => e.discipline))], [educators]);
    const experienceLevels = useMemo(() => [...new Set(educators.map(e => e.experienceLevel))] as ('مبتدئ' | 'متوسط' | 'خبير')[], [educators]);
    
    const filteredEducators = useMemo(() => {
        return educators.filter(e => {
            const searchMatch = searchTerm === '' || e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.email.toLowerCase().includes(searchTerm.toLowerCase());
            const disciplineMatch = disciplineFilter ? e.discipline === disciplineFilter : true;
            const experienceMatch = experienceFilter ? e.experienceLevel === experienceFilter : true;
            const ratingMatch = ratingFilter ? Math.round(e.rating) >= Number(ratingFilter) : true;
            return searchMatch && disciplineMatch && experienceMatch && ratingMatch;
        });
    }, [educators, searchTerm, disciplineFilter, experienceFilter, ratingFilter]);

    const selectedEducatorDetails = useMemo(() => 
        Array.from(selectedEducators).map(id => educators.find(e => e.id === id)).filter(Boolean) as Educator[]
    , [selectedEducators, educators]);
    
    // Handlers
    const handleSelectEducator = (educatorId: string) => {
        setSelectedEducators(prev => {
            const newSet = new Set(prev);
            if (newSet.has(educatorId)) newSet.delete(educatorId);
            else newSet.add(educatorId);
            return newSet;
        });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(selectedEducators.size === 0) return;
        
        const newAssignments: Omit<Assignment, 'id'>[] = Array.from(selectedEducators).map(educatorId => ({
            educatorId,
            type: assignmentType,
            status: assignmentType === AssignmentType.DIRECT ? AssignmentStatus.ACCEPTED : AssignmentStatus.PENDING,
            amount: amount ? Number(amount) : undefined,
        }));
        onAssign(newAssignments);
        onClose(); // Close modal on success
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="p-4 lg:p-6 border-b dark:border-gray-700 flex-shrink-0 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">تعيين متخصص</h2>
                        <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">ابحث واختر أفضل المتخصصين لمهمتك.</p>
                    </div>
                    <button type="button" onClick={onClose} className="p-2 -m-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <XIcon className="w-6 h-6"/>
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow flex flex-col lg:flex-row-reverse overflow-hidden">
                    {/* Filters Sidebar (Desktop) */}
                    <aside className="hidden lg:block w-full lg:w-80 p-6 border-s dark:border-gray-700 overflow-y-auto flex-shrink-0 bg-gray-50 dark:bg-gray-800/50">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">فلاتر البحث</h3>
                        <FilterControls {...{setSearchTerm, setDisciplineFilter, setExperienceFilter, setRatingFilter, disciplines, experienceLevels}}/>
                    </aside>
                    
                    {/* List Area */}
                    <main className="flex-1 flex flex-col overflow-y-auto">
                        {/* Mobile Filters Accordion */}
                        <div className="lg:hidden p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                            <button onClick={() => setFiltersOpen(!isFiltersOpen)} className="w-full flex justify-between items-center text-left">
                                <span className="font-semibold text-gray-700 dark:text-gray-200">فلاتر البحث</span>
                                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isFiltersOpen && (
                                <div className="mt-4">
                                    <FilterControls {...{setSearchTerm, setDisciplineFilter, setExperienceFilter, setRatingFilter, disciplines, experienceLevels}}/>
                                </div>
                            )}
                        </div>
                        
                        {/* Educator List */}
                        <ul className="space-y-3 p-4 lg:p-6">
                            {filteredEducators.map(educator => (
                                <li key={educator.id} onClick={() => handleSelectEducator(educator.id)} className={`py-3 px-4 flex items-center justify-between transition-all duration-200 rounded-lg cursor-pointer border-2 ${selectedEducators.has(educator.id) ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-transparent bg-gray-50 dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                                    <div className="flex items-center w-full">
                                        <img className="w-12 h-12 rounded-full me-4" src={educator.avatarUrl} alt={educator.name} />
                                        <div className="flex-grow">
                                            <p className="font-bold text-gray-800 dark:text-white">{educator.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{educator.discipline}</p>
                                            <RatingStars rating={educator.rating} />
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        {selectedEducators.has(educator.id) ? (
                                            <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                                        ) : (
                                            <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                                        )}
                                    </div>
                                </li>
                            ))}
                            {filteredEducators.length === 0 && (
                                <li className="text-center py-10 text-gray-500">لا توجد نتائج تطابق بحثك.</li>
                            )}
                        </ul>
                    </main>
                </div>
                
                {/* Action Bar */}
                <form onSubmit={handleSubmit} className="p-4 lg:p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 space-y-4 flex-shrink-0">
                    <div className="min-h-[52px]">
                        {selectedEducatorDetails.length > 0 && (
                             <div>
                                <h3 className="font-semibold text-gray-700 dark:text-gray-200 text-sm mb-2">المتخصصون المختارون ({selectedEducatorDetails.length})</h3>
                                <div className="flex flex-wrap items-center gap-2">
                                    {selectedEducatorDetails.map(e => (
                                        <div key={e.id} className="flex items-center gap-1.5 bg-gray-200 dark:bg-gray-700 rounded-full pl-1 pr-2 py-1">
                                            <img src={e.avatarUrl} alt={e.name} className="w-5 h-5 rounded-full" />
                                            <span className="text-xs font-semibold">{e.name}</span>
                                            <button type="button" onClick={() => handleSelectEducator(e.id)} className="text-gray-500 hover:text-red-500">
                                                <SmallXIcon className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                         <div className="sm:col-span-1">
                            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">نوع التعيين</label>
                            <div className="flex w-full">
                                <button
                                    type="button"
                                    onClick={() => setAssignmentType(AssignmentType.INVITATION)}
                                    className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-s-lg border border-gray-300 dark:border-gray-600 transition-colors ${
                                        assignmentType === AssignmentType.INVITATION
                                            ? 'bg-blue-600 text-white z-10 ring-1 ring-blue-600'
                                            : 'bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    دعوة
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setAssignmentType(AssignmentType.DIRECT)}
                                    className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-e-lg border-t border-b border-e border-gray-300 dark:border-gray-600 -ms-px transition-colors ${
                                        assignmentType === AssignmentType.DIRECT
                                            ? 'bg-blue-600 text-white z-10 ring-1 ring-blue-600'
                                            : 'bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    مباشر
                                </button>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">المبلغ (اختياري)</label>
                            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="500" className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-sm" />
                        </div>
                        <div className="sm:col-span-1 flex items-end gap-2">
                            <button type="button" onClick={onClose} className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">إلغاء</button>
                            <button type="submit" className="w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed" disabled={selectedEducators.size === 0}>
                                حفظ ({selectedEducators.size})
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssignProviderModal;