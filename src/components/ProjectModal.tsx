'use client';

import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image: string | null;
  link: string;
  demo: string | null;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-green-700">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 컨텐츠 */}
        <div className="p-6">
          {/* 프로젝트 이미지 */}
          <div className="h-48 bg-green-100 rounded-lg mb-6 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-green-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>

          {/* 프로젝트 설명 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">프로젝트 소개</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* 기술 스택 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">사용 기술</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 주요 기능 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">주요 기능</h3>
            <ul className="space-y-2 text-gray-700">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* 액션 버튼 */}
          <div className="flex justify-center pt-4 border-t border-gray-200">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              GitHub에서 코드 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 