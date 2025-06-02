'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectModal from "@/components/ProjectModal";
// 3D 관련 import는 나중에 활성화
// import * as THREE from "three";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Model as CubeModel } from "@/components/3d/Cube";

// 기술 스택 아이콘 데이터
const frontendIcons = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "HTML5/CSS3", icon: "/icons/html5.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
];

const backendIcons = [
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "GraphQL", icon: "/icons/graphql.svg" },
];

const otherIcons = [
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "AWS", icon: "/icons/aws-color.png" },
  { name: "Jest", icon: "/icons/jest.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
];

// 3D 배경 컴포넌트 (나중에 활성화)
// const ThreeBackground = () => {
//   return (
//     <Canvas className="absolute inset-0 z-0">
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <Suspense fallback={null}>
//         <CubeModel position={[0, 0, 0]} />
//       </Suspense>
//     </Canvas>
//   );
// };

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 이벤트 리스너 - 현재는 특별한 동작 없음
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 홈 섹션 */}
      <section id="home" className="scroll-section relative flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute transform -rotate-12 left-1/4 top-1/4 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
            <div className="absolute transform rotate-12 right-1/4 bottom-1/4 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
            <div className="absolute transform right-1/3 top-1/3 w-24 h-24 bg-green-400 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                안녕하세요,<br />
                <span className="text-green-600">개발자 Garden</span>입니다
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                웹 & 모바일 애플리케이션 개발에 열정을 가진 풀스택 개발자입니다.
                사용자 경험을 개선하고 비즈니스 가치를 창출하는 솔루션을 만들고 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  href="#projects" 
                  className="btn-primary text-center"
                >
                  프로젝트 보기
                </Link>
                <Link 
                  href="#profile" 
                  className="btn-secondary text-center"
                >
                  프로필 보기
                </Link>
              </div>
            </div>
            <div className="card-3d relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl bg-white mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
                <div className="w-full h-full p-6 sm:p-8">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* 프로필 섹션 */}
      <section id="profile" className="scroll-section py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8 sm:mb-12 lg:mb-16">프로필</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg fade-in">
                <div className="h-48 sm:h-56 lg:h-64 bg-green-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-green-700">Garden</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">풀스택 개발자</p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-700 sm:w-24 text-sm sm:text-base">생년월일:</span>
                      <span className="text-gray-600 text-sm sm:text-base">2003.07.06</span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-700 sm:w-24 text-sm sm:text-base">이메일:</span>
                      <a href="mailto:garden4019@gmail.com" className="text-green-600 hover:text-green-700 text-sm sm:text-base break-all">garden4019@gmail.com</a>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <span className="font-semibold text-gray-700 sm:w-24 text-sm sm:text-base">GitHub:</span>
                      <a href="https://github.com/skkugardenpark" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm sm:text-base">skkugardenpark</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="rotate-in">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700">자기소개</h3>
                <div className="prose prose-green max-w-none text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  <p className="text-base sm:text-lg mb-4 sm:mb-5">👋 안녕하세요!<br />풀스택 개발자 Garden 입니다.</p>
                  
                  <p className="mb-4 sm:mb-5">개발은 저에게 <strong>정원을 가꾸는 일</strong>과 같아요.<br />
                  코드를 한 줄 한 줄 쌓아가며, 사용자의 경험을 고려한 인터페이스를 만들고,<br />
                  작은 세심함에서 큰 안정감을 주는 흐름을 좋아합니다. 🌿</p>
                  
                  <p className="mb-4 sm:mb-5"><strong>React, Next.js, Tailwind CSS</strong>를 중심으로<br />
                  깔끔하고 직관적인 UI를 구현하는 것을 즐기고,<br />
                  기술 그 자체보다 <strong>사람에게 닿는 결과물</strong>에 더 큰 가치를 둡니다.</p>
                  
                  <p className="mb-3 sm:mb-5">요즘은</p>
                  <ul className="ml-4 sm:ml-5 mb-4 sm:mb-5 space-y-1">
                    <li>✨ 인터랙션과 마이크로 애니메이션에 관심이 많고,</li>
                    <li>🛠 다양한 디자인 시스템을 직접 만들어보며</li>
                    <li>🧠 더 나은 코드 구조와 사용자 흐름을 고민하고 있어요.</li>
                  </ul>
                  
                  <p>이 작은 공간에, 저의 코드 철학과 성장의 흔적을 담아보았습니다.<br />
                  함께 감상해 주세요. 🙂</p>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700">학력</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="card-3d bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex-1 mb-4 sm:mb-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800">성균관대학교</h4>
                        <span className="text-gray-600 text-sm sm:text-base">2022년 ~ 현재</span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base">소프트웨어학과 재학중</p>
                    </div>
                    <div className="flex-shrink-0 self-center sm:ml-4">
                      <Image 
                        src="/skku_logo.png" 
                        alt="성균관대학교 로고" 
                        width={60} 
                        height={60} 
                        className="object-contain sm:w-20 sm:h-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 기술 섹션 */}
      <section id="skills" className="scroll-section py-12 sm:py-16 lg:py-20 bg-green-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8 sm:mb-12 lg:mb-16">기술 스택</h2>
          
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12">
            <div className="scale-in">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-green-700">프론트엔드</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {frontendIcons.map((tech) => (
                  <div key={tech.name} className="card-3d flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-green-600 mb-3 sm:mb-4 h-12 sm:h-16 flex items-center justify-center">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={36} 
                        height={36} 
                        className="object-contain sm:w-12 sm:h-12"
                      />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-800 text-center leading-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scale-in">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-green-700">백엔드</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {backendIcons.map((tech) => (
                  <div key={tech.name} className="card-3d flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-green-600 mb-3 sm:mb-4 h-12 sm:h-16 flex items-center justify-center">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={36} 
                        height={36} 
                        className="object-contain sm:w-12 sm:h-12"
                      />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-800 text-center leading-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scale-in">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-green-700">기타</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {otherIcons.map((tech) => (
                  <div key={tech.name} className="card-3d flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-green-600 mb-3 sm:mb-4 h-12 sm:h-16 flex items-center justify-center">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={36} 
                        height={36} 
                        className="object-contain sm:w-12 sm:h-12"
                      />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-800 text-center leading-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 프로젝트 섹션 */}
      <section id="projects" className="scroll-section py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8 sm:mb-12 lg:mb-16">프로젝트</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`card-3d bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer ${index % 2 === 0 ? 'fade-in' : 'rotate-in'}`}
                onClick={() => openProjectModal(project)}
              >
                <div className="h-36 sm:h-40 lg:h-48 bg-green-100 relative overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-green-500">
                      <svg className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-green-700">{project.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="text-center text-green-600 text-sm font-medium">
                    클릭하여 자세히 보기
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 모달 */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
}

// 프로젝트 목록 데이터
const projects = [
  {
    id: 1,
    title: "온라인 쇼핑몰",
    description: "React, Next.js, 그리고 Stripe를 사용하여 구축한 풀스택 이커머스 웹사이트입니다. 제품 검색, 장바구니, 결제 시스템을 구현했습니다.",
    stack: ["React", "Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/project-images/shopping-mall.png",
    link: "https://github.com",
    demo: "https://example.com",
    features: [
      "상품 검색 및 필터링 기능으로 원하는 제품을 쉽게 찾을 수 있음",
      "장바구니 기능으로 여러 상품을 담고 수량 조절 가능",
      "Stripe 결제 시스템 연동으로 안전한 온라인 결제 처리",
      "사용자 계정 관리 및 주문 내역 조회 기능",
      "반응형 디자인으로 모바일과 데스크톱에서 최적화된 쇼핑 경험"
    ]
  },
  {
    id: 2,
    title: "실시간 채팅 애플리케이션",
    description: "Socket.IO와 React를 활용한 실시간 채팅 애플리케이션입니다. 사용자 인증, 개인 및 그룹 채팅, 알림 기능을 제공합니다.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    image: "/project-images/chat-app.png",
    link: "https://github.com",
    demo: "https://example.com",
    features: [
      "Socket.IO를 활용한 실시간 메시지 송수신",
      "1:1 개인 채팅 및 그룹 채팅방 생성 기능",
      "JWT 토큰 기반 사용자 인증 및 보안 관리",
      "실시간 알림 및 읽지 않은 메시지 표시",
      "온라인/오프라인 상태 표시 및 타이핑 인디케이터"
    ]
  },
  {
    id: 3,
    title: "작업 관리 대시보드",
    description: "React와 Redux를 사용하여 개발한 작업 관리 대시보드입니다. 기업 사용자를 위한 팀 작업 할당 및 마감일 추적 기능을 포함합니다.",
    stack: ["React", "Redux", "Node.js", "PostgreSQL", "Material UI", "Chart.js"],
    image: "/project-images/task-dashboard.png",
    link: "https://github.com",
    demo: "https://example.com",
    features: [
      "칸반 보드 스타일의 직관적인 작업 관리 인터페이스",
      "팀원별 작업 할당 및 진행 상황 추적",
      "마감일 알림 및 우선순위 설정 기능",
      "Chart.js를 활용한 프로젝트 진행률 시각화",
      "팀 협업을 위한 댓글 및 파일 첨부 기능"
    ]
  },
  {
    id: 4,
    title: "날씨 모바일 앱",
    description: "React Native로 개발한 날씨 예보 모바일 애플리케이션입니다. 위치 기반 서비스를 통해 실시간 날씨 정보와 5일 예보를 제공합니다.",
    stack: ["React Native", "Expo", "OpenWeather API", "Firebase"],
    image: "/project-images/weather-app.png",
    link: "https://github.com",
    demo: null,
    features: [
      "GPS 기반 현재 위치의 실시간 날씨 정보 제공",
      "5일간의 상세한 날씨 예보 및 시간별 날씨 변화",
      "다양한 날씨 조건에 맞는 직관적인 아이콘 및 애니메이션",
      "즐겨찾기 도시 추가 및 여러 지역 날씨 비교",
      "날씨 알림 설정 및 푸시 알림 기능"
    ]
  },
  {
    id: 5,
    title: "개인 블로그 플랫폼",
    description: "Gatsby와 GraphQL을 사용하여 구축한 정적 블로그 웹사이트입니다. 마크다운 게시물, 코드 구문 강조, 카테고리별 필터링 기능이 있습니다.",
    stack: ["Gatsby", "GraphQL", "Markdown", "Netlify", "Tailwind CSS"],
    image: "/project-images/blog-platform.png",
    link: "https://github.com",
    demo: "https://example.com",
    features: [
      "마크다운 기반의 편리한 글 작성 및 관리",
      "Prism.js를 활용한 코드 구문 강조 및 복사 기능",
      "카테고리 및 태그 기반 게시물 분류 및 검색",
      "SEO 최적화 및 빠른 로딩 속도를 위한 정적 사이트 생성",
      "댓글 시스템 및 소셜 미디어 공유 기능"
    ]
  },
  {
    id: 6,
    title: "건강 추적 웹 앱",
    description: "운동 루틴 및 식이 습관 추적을 위한 웹 애플리케이션입니다. 사용자가 목표를 설정하고 진행 상황을 차트로 시각화할 수 있습니다.",
    stack: ["Vue.js", "Firebase", "Vuetify", "Chart.js"],
    image: "/project-images/health-tracker.png",
    link: "https://github.com",
    demo: "https://example.com",
    features: [
      "개인별 운동 루틴 생성 및 운동 기록 추적",
      "칼로리 계산 및 영양소 분석을 통한 식단 관리",
      "Chart.js를 활용한 운동량 및 체중 변화 시각화",
      "목표 설정 및 달성률 추적으로 동기부여 제공",
      "Firebase를 통한 실시간 데이터 동기화 및 백업"
    ]
  },
];
