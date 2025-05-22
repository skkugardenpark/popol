// import Link from 'next/link';

export const metadata = {
  title: "프로젝트 | 개발자 포트폴리오",
  description: "개발 프로젝트 목록 및 상세 정보",
};

const projects = [
  {
    id: 1,
    title: "온라인 쇼핑몰",
    description: "React, Next.js, 그리고 Stripe를 사용하여 구축한 풀스택 이커머스 웹사이트입니다. 제품 검색, 장바구니, 결제 시스템을 구현했습니다.",
    stack: ["React", "Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    image: null,
    link: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "실시간 채팅 애플리케이션",
    description: "Socket.IO와 React를 활용한 실시간 채팅 애플리케이션입니다. 사용자 인증, 개인 및 그룹 채팅, 알림 기능을 제공합니다.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    image: null,
    link: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "작업 관리 대시보드",
    description: "React와 Redux를 사용하여 개발한 작업 관리 대시보드입니다. 기업 사용자를 위한 팀 작업 할당 및 마감일 추적 기능을 포함합니다.",
    stack: ["React", "Redux", "Node.js", "PostgreSQL", "Material UI", "Chart.js"],
    image: null,
    link: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "날씨 모바일 앱",
    description: "React Native로 개발한 날씨 예보 모바일 애플리케이션입니다. 위치 기반 서비스를 통해 실시간 날씨 정보와 5일 예보를 제공합니다.",
    stack: ["React Native", "Expo", "OpenWeather API", "Firebase"],
    image: null,
    link: "https://github.com",
    demo: null,
  },
  {
    id: 5,
    title: "개인 블로그 플랫폼",
    description: "Gatsby와 GraphQL을 사용하여 구축한 정적 블로그 웹사이트입니다. 마크다운 게시물, 코드 구문 강조, 카테고리별 필터링 기능이 있습니다.",
    stack: ["Gatsby", "GraphQL", "Markdown", "Netlify", "Tailwind CSS"],
    image: null,
    link: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "건강 추적 웹 앱",
    description: "운동 루틴 및 식이 습관 추적을 위한 웹 애플리케이션입니다. 사용자가 목표를 설정하고 진행 상황을 차트로 시각화할 수 있습니다.",
    stack: ["Vue.js", "Firebase", "Vuetify", "Chart.js"],
    image: null,
    link: "https://github.com",
    demo: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">프로젝트</h1>
      <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
        최근에 진행한 프로젝트들입니다. 대부분의 프로젝트는 GitHub에서 소스 코드를 확인할 수 있으며, 일부는 라이브 데모가 제공됩니다.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 bg-gray-300 relative">
              {/* 프로젝트 썸네일 이미지 */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="font-bold text-xl mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  코드 보기
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    데모 보기
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 