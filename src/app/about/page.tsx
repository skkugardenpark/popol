import Image from "next/image";

export const metadata = {
  title: "소개 | 개발자 포트폴리오",
  description: "개발자 소개 및 경력 정보",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">소개</h1>
      
      {/* 프로필 정보 */}
      <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-gray-500">
          {/* 프로필 이미지 */}
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div className="md:flex-1">
          <h2 className="text-2xl font-bold mb-2 text-center md:text-left">홍길동</h2>
          <p className="text-gray-600 mb-4 text-center md:text-left">풀스택 개발자</p>
          <p className="text-gray-700 mb-4">
            안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 데 열정을 가진 풀스택 개발자입니다.
            지난 5년간 다양한 프로젝트에서 프론트엔드, 백엔드, 모바일 애플리케이션을 개발한 경험이 있습니다.
            최신 웹 기술 트렌드를 항상 연구하며 사용자 경험과 성능을 최적화하는 솔루션을 구현하고 있습니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:example@email.com" className="text-blue-600 hover:text-blue-700">
              example@email.com
            </a>
            <span className="text-gray-400">|</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              GitHub
            </a>
            <span className="text-gray-400">|</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      {/* 경력 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">경력</h2>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-bold">ABC 테크</h3>
              <span className="text-gray-600">2020년 - 현재</span>
            </div>
            <p className="text-gray-600 mb-2">시니어 프론트엔드 개발자</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>주요 서비스의 웹 애플리케이션 개발 및 유지보수</li>
              <li>React, TypeScript를 사용한 프론트엔드 아키텍처 설계</li>
              <li>주니어 개발자 멘토링 및 코드 리뷰</li>
              <li>성능 최적화로 페이지 로딩 시간 40% 단축</li>
            </ul>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-bold">XYZ 소프트웨어</h3>
              <span className="text-gray-600">2018년 - 2020년</span>
            </div>
            <p className="text-gray-600 mb-2">풀스택 개발자</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>React와 Node.js를 활용한 프로젝트 다수 완성</li>
              <li>RESTful API 설계 및 구현</li>
              <li>클라이언트와 협업하여 요구사항 분석 및 기능 구현</li>
              <li>애자일 개발 방법론 적용 및 팀 내 업무 프로세스 개선</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 교육 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">교육</h2>
        <div className="space-y-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-bold">한국대학교</h3>
              <span className="text-gray-600">2014년 - 2018년</span>
            </div>
            <p className="text-gray-700">컴퓨터 공학 학사</p>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-bold">개발자 부트캠프</h3>
              <span className="text-gray-600">2018년</span>
            </div>
            <p className="text-gray-700">풀스택 웹 개발 과정 수료</p>
          </div>
        </div>
      </div>
      
      {/* 자격증 및 수상 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">자격증 및 수상</h2>
        <ul className="space-y-3">
          <li className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-medium">AWS 공인 솔루션스 아키텍트</span>
            <span className="text-gray-600">2021년</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-medium">해커톤 우승 - 모바일 앱 카테고리</span>
            <span className="text-gray-600">2019년</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-medium">정보처리기사</span>
            <span className="text-gray-600">2018년</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 