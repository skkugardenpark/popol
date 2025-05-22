'use client';

import Link from "next/link";
import { useEffect } from "react";
// 3D 관련 import는 나중에 활성화
// import * as THREE from "three";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Model as CubeModel } from "@/components/3d/Cube";

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
      <section id="home" className="scroll-section relative flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white px-4">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute transform -rotate-12 left-1/4 top-1/4 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
            <div className="absolute transform rotate-12 right-1/4 bottom-1/4 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
            <div className="absolute transform right-1/3 top-1/3 w-24 h-24 bg-green-400 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                안녕하세요,<br />
                <span className="text-green-600">개발자 Garden</span>입니다
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                웹 & 모바일 애플리케이션 개발에 열정을 가진 풀스택 개발자입니다.
                사용자 경험을 개선하고 비즈니스 가치를 창출하는 솔루션을 만들고 있습니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#projects" 
                  className="btn-primary"
                >
                  프로젝트 보기
                </Link>
                <Link 
                  href="#profile" 
                  className="btn-secondary"
                >
                  프로필 보기
                </Link>
              </div>
            </div>
            <div className="card-3d relative h-96 rounded-xl overflow-hidden shadow-xl bg-white">
              <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
                <div className="w-full h-full p-8">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-32 h-32 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* 프로필 섹션 */}
      <section id="profile" className="scroll-section py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16">프로필</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg fade-in">
                <div className="h-64 bg-green-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-green-700">Garden</h3>
                  <p className="text-gray-600 mb-4">풀스택 개발자</p>
                  
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">생년월일:</span>
                      <span className="text-gray-600">1995.01.01</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">이메일:</span>
                      <a href="mailto:garden4019@gmail.com" className="text-green-600 hover:text-green-700">garden4019@gmail.com</a>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-24">GitHub:</span>
                      <a href="https://github.com/skkugardenpark" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">skkugardenpark</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="rotate-in">
                <h3 className="text-2xl font-bold mb-6 text-green-700">자기소개</h3>
                <p className="text-gray-700 mb-8">
                  안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 데 열정을 가진 풀스택 개발자입니다. 
                  지난 5년간 다양한 프로젝트에서 프론트엔드, 백엔드, 모바일 애플리케이션을 개발한 경험이 있습니다. 
                  최신 웹 기술 트렌드를 항상 연구하며 사용자 경험과 성능을 최적화하는 솔루션을 구현하고 있습니다.
                </p>
                
                <h3 className="text-2xl font-bold mb-6 text-green-700">학력</h3>
                <div className="space-y-6">
                  <div className="card-3d bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h4 className="text-xl font-bold text-gray-800">성균관대학교</h4>
                      <span className="text-gray-600">2014년 - 2018년</span>
                    </div>
                    <p className="text-gray-700">컴퓨터 공학 학사</p>
                  </div>
                  
                  <div className="card-3d bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h4 className="text-xl font-bold text-gray-800">개발자 부트캠프</h4>
                      <span className="text-gray-600">2018년</span>
                    </div>
                    <p className="text-gray-700">풀스택 웹 개발 과정 수료</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 기술 섹션 */}
      <section id="skills" className="scroll-section py-20 bg-green-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16">기술 스택</h2>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="scale-in">
              <h3 className="text-2xl font-bold mb-8 text-green-700">프론트엔드</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {["React", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS"].map((tech) => (
                  <div key={tech} className="card-3d flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-green-600 mb-4">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scale-in">
              <h3 className="text-2xl font-bold mb-8 text-green-700">백엔드</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"].map((tech) => (
                  <div key={tech} className="card-3d flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-green-600 mb-4">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scale-in">
              <h3 className="text-2xl font-bold mb-8 text-green-700">기타</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {["Git", "Docker", "AWS", "Jest", "Figma"].map((tech) => (
                  <div key={tech} className="card-3d flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-green-600 mb-4">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 프로젝트 섹션 */}
      <section id="projects" className="scroll-section py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16">프로젝트</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`card-3d bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all ${index % 2 === 0 ? 'fade-in' : 'rotate-in'}`}
              >
                <div className="h-48 bg-green-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-green-500">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-green-700">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center"
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
                        className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center"
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
      </section>
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
