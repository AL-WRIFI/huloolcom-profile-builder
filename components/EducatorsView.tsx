
import React, { useState, useMemo } from 'react';
import { Educator, EducatorStatus } from '../types';
import { StarIcon, PlusIcon, SearchIcon, ViewGridIcon, ViewListIcon, MoreVerticalIcon } from './Icons';

interface EducatorsViewProps {
    educators: Educator[];
    onInvite: () => void;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} filled={i < Math.round(rating)} />
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ms-1.5 font-medium">({rating.toFixed(1)})</span>
        </div>
    );
};

const getStatusInfo = (status: EducatorStatus) => {
    switch (status) {
        case EducatorStatus.ACTIVE: return { text: 'نشط', class: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' };
        case EducatorStatus.INACTIVE: return { text: 'غير نشط', class: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300' };
        case EducatorStatus.SUSPENDED: return { text: 'معلق', class: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' };
        case EducatorStatus.BANNED: return { text: 'محظور', class: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' };
        default: return { text: status, class: 'bg-gray-100 text-gray-800' };
    }
};

const EducatorCard: React.FC<{ educator: Educator }> = ({ educator }) => {
    const statusInfo = getStatusInfo(educator.status);
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 text-center transition-transform transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col">
            <img className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-gray-200 dark:border-gray-700" src={educator.avatarUrl} alt={educator.name} />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{educator.name}</h3>
            <p className="text-sm text-blue-500 flex-grow">{educator.discipline}</p>
            <div className="my-3 flex justify-center">
                <RatingStars rating={educator.rating} />
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1">
                {educator.skills.slice(0,3).map(skill => (
                    <span key={skill} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {skill}
                    </span>
                ))}
            </div>
             <div className="mt-4 pt-4 border-t dark:border-gray-700 flex justify-between items-center">
                 <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{educator.country}</span>
                 <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusInfo.class}`}>
                    {statusInfo.text}
                </span>
            </div>
        </div>
    );
};

const EducatorRow: React.FC<{ educator: Educator }> = ({ educator }) => {
    const statusInfo = getStatusInfo(educator.status);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/30">
            <td className="px-6 py-4">
                 <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full me-3" src={educator.avatarUrl} alt={educator.name} />
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white">{educator.name}</p>
                        <p className="text-xs text-gray-500">{educator.email}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">{educator.discipline}</td>
            <td className="px-6 py-4">{educator.country}</td>
            <td className="px-6 py-4"><RatingStars rating={educator.rating} /></td>
            <td className="px-6 py-4">
                 <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusInfo.class}`}>
                    {statusInfo.text}
                </span>
            </td>
            <td className="px-6 py-4">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    <MoreVerticalIcon className="w-5 h-5 text-gray-500"/>
                </button>
            </td>
        </tr>
    );
};


const EducatorsView: React.FC<EducatorsViewProps> = ({ educators, onInvite }) => {
    const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
    const [searchTerm, setSearchTerm] = useState('');
    const [disciplineFilter, setDisciplineFilter] = useState('all');
    const [experienceFilter, setExperienceFilter] = useState('all');
    const [ratingFilter, setRatingFilter] = useState('all');
    
    const disciplines = useMemo(() => ['all', ...new Set(educators.map(e => e.discipline))], [educators]);
    const experienceLevels = useMemo(() => ['all', ...new Set(educators.map(e => e.experienceLevel))], [educators]);

    const filteredEducators = useMemo(() => {
        return educators.filter(e => {
            const searchMatch = searchTerm === '' || e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.email.toLowerCase().includes(searchTerm.toLowerCase());
            const disciplineMatch = disciplineFilter === 'all' || e.discipline === disciplineFilter;
            const experienceMatch = experienceFilter === 'all' || e.experienceLevel === experienceFilter;
            const ratingMatch = ratingFilter === 'all' || Math.round(e.rating) >= parseInt(ratingFilter, 10);
            return searchMatch && disciplineMatch && experienceMatch && ratingMatch;
        });
    }, [educators, searchTerm, disciplineFilter, experienceFilter, ratingFilter]);

    return (
        <div className="animate-fade-in">
             <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">المتخصصون المقبولون</h1>
                <p className="text-gray-500 dark:text-gray-400">تصفح، ابحث، وقم بإدارة المتخصصين.</p>
              </div>
                <div className="flex items-center gap-2">
                    <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                        <button onClick={() => setViewMode('table')} className={`p-1.5 rounded-md ${viewMode === 'table' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}>
                            <ViewListIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        <button onClick={() => setViewMode('cards')} className={`p-1.5 rounded-md ${viewMode === 'cards' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}>
                            <ViewGridIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>
                     <button onClick={onInvite} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                        <PlusIcon className="w-5 h-5 me-2" />
                        دعوة متخصص
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6 border dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                     <div className="relative col-span-1 md:col-span-2">
                        <label className="text-xs text-gray-500 dark:text-gray-400">بحث بالاسم أو البريد</label>
                        <input 
                            type="text" 
                            placeholder="ابحث عن متخصص..."
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2 ps-10"
                        />
                        <SearchIcon className="absolute top-7 start-3 w-5 h-5 text-gray-400"/>
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 dark:text-gray-400">التخصص</label>
                        <select onChange={e => setDisciplineFilter(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2">
                            {disciplines.map(d => <option key={d} value={d}>{d === 'all' ? 'الكل' : d}</option>)}
                        </select>
                    </div>
                     <div>
                        <label className="text-xs text-gray-500 dark:text-gray-400">الخبرة</label>
                        <select onChange={e => setExperienceFilter(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 rounded-md text-sm p-2">
                            {experienceLevels.map(l => <option key={l} value={l}>{l === 'all' ? 'الكل' : l}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            
            {viewMode === 'cards' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredEducators.map(educator => <EducatorCard key={educator.id} educator={educator} />)}
                </div>
            ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
                    <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">المتخصص</th>
                                <th scope="col" className="px-6 py-3">التخصص</th>
                                <th scope="col" className="px-6 py-3">الدولة</th>
                                <th scope="col" className="px-6 py-3">التقييم</th>
                                <th scope="col" className="px-6 py-3">الحالة</th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEducators.map(educator => <EducatorRow key={educator.id} educator={educator} />)}
                        </tbody>
                    </table>
                </div>
            )}

            {filteredEducators.length === 0 && (
                <div className="text-center py-10 col-span-full">
                    <p className="text-gray-500">لا يوجد متخصصون يطابقون هذا الفلتر.</p>
                </div>
            )}
        </div>
    )
};

export default EducatorsView;
