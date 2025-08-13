

import React, { useState, useEffect } from 'react';
import { Project, ProjectCreationType, EducationalRequest, User } from '../types';
import { ViewType } from '../App';
import { FileTextIcon, ProjectsIcon, UserCheckIcon, CheckIcon, ArrowRightIcon, TagIcon, UploadCloudIcon, XCircleIcon, ArrowLeftIcon } from './Icons';

interface CreateProjectViewProps {
    navigateTo: (view: ViewType, id?: string) => void;
    onAddProject: (projectData: Pick<Project, 'title' | 'description' | 'creationType' | 'educationalRequestId' | 'requesterName' | 'tags'>) => void;
    educationalRequests: EducationalRequest[];
    selectedRequestId: string | null;
    users: User[];
}

const TypeCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
}> = ({ icon, title, description, isSelected, onClick }) => (
    <div
        onClick={onClick}
        className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 relative ${
            isSelected ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-lg' : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700/50'
        }`}
    >
        <div className="flex items-center">
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-blue-600'}`}>
                {icon}
            </div>
            <div className="ms-4">
                <h3 className="text-md font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
            </div>
            {isSelected && <div className="absolute top-2 start-2 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-3 h-3"/></div>}
        </div>
    </div>
);

const TagInput: React.FC<{
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ tags, setTags }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const newTag = inputValue.trim();
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInputValue('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div>
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الوسوم (Tags)</label>
            <div className="flex flex-wrap items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-2 focus-within:ring-blue-500 w-full p-2 dark:bg-gray-700/50 dark:border-gray-600">
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-medium me-2 mb-1 px-2.5 py-1 rounded-full">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ms-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                            <XCircleIcon className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                <input
                    type="text"
                    id="tags"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none text-sm focus:ring-0 flex-grow p-1"
                    placeholder="أضف وسوم..."
                />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">اضغط Enter أو الفاصلة (,) لإضافة الوسم.</p>
        </div>
    );
};

const CreateProjectView: React.FC<CreateProjectViewProps> = ({ navigateTo, onAddProject, educationalRequests, selectedRequestId: initialRequestId, users }) => {
    const [creationType, setCreationType] = useState<ProjectCreationType>(initialRequestId ? ProjectCreationType.FROM_REQUEST : ProjectCreationType.PUBLIC);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(initialRequestId);

     useEffect(() => {
        if (initialRequestId) {
            const request = educationalRequests.find(r => r.id === initialRequestId);
            if (request) {
                setTitle(`مشروع بناء على طلب: ${request.title}`);
                setDescription(request.description);
                setCreationType(ProjectCreationType.FROM_REQUEST);
                setSelectedRequestId(initialRequestId);
                // Suggest tags from subject and education level
                const suggestedTags = [request.subject, request.educationLevel].filter(Boolean);
                setTags(suggestedTags);
            }
        }
    }, [initialRequestId, educationalRequests]);

    const handleRequestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const reqId = e.target.value;
        const request = educationalRequests.find(r => r.id === reqId);
        setSelectedRequestId(reqId);
        if(request){
             setTitle(`مشروع بناء على طلب: ${request.title}`);
             setDescription(request.description);
             const suggestedTags = [request.subject, request.educationLevel].filter(Boolean);
             setTags(suggestedTags);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description) {
            alert('يرجى ملء العنوان والوصف.');
            return;
        }
        if (creationType === ProjectCreationType.FROM_REQUEST && !selectedRequestId) {
            alert('يرجى اختيار طلب تعليمي لربطه بالمشروع.');
            return;
        }

        const selectedRequest = educationalRequests.find(req => req.id === selectedRequestId);
        const requester = selectedRequest ? users.find(u => u.id === selectedRequest.requesterId) : null;

        onAddProject({ 
            title, 
            description, 
            creationType, 
            educationalRequestId: creationType === ProjectCreationType.FROM_REQUEST ? selectedRequestId : null,
            requesterName: creationType === ProjectCreationType.FROM_REQUEST ? requester?.name : undefined,
            tags
        });
    };
    
    const creationTypes = [
        { type: ProjectCreationType.PUBLIC, icon: <ProjectsIcon className="w-6 h-6"/>, title: 'مشروع عام', description: 'ينشر للعامة لتقديم العروض.' },
        { type: ProjectCreationType.FROM_REQUEST, icon: <UserCheckIcon className="w-6 h-6"/>, title: 'بناءً على طلب', description: 'يرتبط بطلب تعليمي قائم.' },
        { type: ProjectCreationType.STANDALONE, icon: <FileTextIcon className="w-6 h-6"/>, title: 'خاص ومستقل', description: 'مشروع داخلي بتعيين مباشر.' },
    ];

    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                 <button onClick={() => navigateTo('projects')} className="flex items-center text-sm text-blue-600 dark:text-blue-500 hover:underline mb-2"><ArrowLeftIcon className="w-4 h-4 me-1" /> العودة إلى المشاريع</button>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إنشاء مشروع جديد</h1>
                <p className="text-gray-500 dark:text-gray-400">اتبع الخطوات لتعريف مشروعك وإطلاقه.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 p-6 lg:p-8 space-y-6">
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان المشروع</label>
                            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600" placeholder="مثال: تطوير منهج الفيزياء للصف الثاني الثانوي" required />
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">وصف تفصيلي للمشروع</label>
                            <textarea id="description" rows={8} value={description} onChange={e => setDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600" placeholder="اشرح المتطلبات، الأهداف، والمخرجات المتوقعة..." required></textarea>
                        </div>
                         <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">إضافة مرفقات</label>
                             <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700/50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600/50">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadCloudIcon className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">انقر للرفع</span> أو اسحب وأفلت</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX, PNG, JPG (5MB)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" multiple />
                                </label>
                            </div> 
                        </div>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 p-6">
                            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">نوع المشروع</h3>
                            <div className="space-y-3">
                                {creationTypes.map(item => (
                                    <TypeCard
                                        key={item.type}
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                                        isSelected={creationType === item.type}
                                        onClick={() => setCreationType(item.type)}
                                    />
                                ))}
                            </div>
                        </div>

                        {creationType === ProjectCreationType.FROM_REQUEST && (
                             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 p-6 animate-fade-in">
                                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">الطلب التعليمي المرتبط</h3>
                                <select 
                                    id="educational-request" 
                                    value={selectedRequestId ?? ''}
                                    onChange={handleRequestChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600"
                                    required
                                >
                                    <option value="" disabled>-- اختر طلبًا --</option>
                                    {educationalRequests.filter(r => r.status === 'مقبول').map(req => {
                                        const requester = users.find(u => u.id === req.requesterId);
                                        return <option key={req.id} value={req.id}>{req.title} - {requester?.name}</option>
                                    })}
                                </select>
                            </div>
                        )}
                        
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 p-6">
                             <TagInput tags={tags} setTags={setTags} />
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 flex items-center justify-end gap-4">
                    <button type="button" onClick={() => navigateTo('projects')} className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                        إلغاء
                    </button>
                    <button type="submit" className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md focus:ring-4 focus:ring-blue-300">
                        إنشاء وإعداد سير العمل <ArrowRightIcon className="w-5 h-5 ms-2"/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProjectView;