import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* 히어로 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            안녕하세요,<br />
            <span className="text-blue-600">개발자 홍길동</span>입니다
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            웹 & 모바일 애플리케이션 개발에 열정을 가진 풀스택 개발자입니다.
            사용자 경험을 개선하고 비즈니스 가치를 창출하는 솔루션을 만들고 있습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              프로젝트 보기
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              연락하기
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px]">
          <div className="absolute inset-0 bg-gray-300 rounded-lg overflow-hidden">
            {/* 프로필 이미지 또는 아바타를 여기에 넣으세요 */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 기술 스택 섹션 */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">기술 스택</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Tailwind CSS", "Jest", "Docker", "AWS"].map((tech) => (
            <div key={tech} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gray-600 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 주요 프로젝트 미리보기 */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">주요 프로젝트</h2>
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
            모든 프로젝트 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-300 relative">
                {/* 프로젝트 썸네일 이미지 */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">프로젝트 {item}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  이 프로젝트는 React와 Node.js를 사용하여 개발된 웹 애플리케이션입니다. 사용자가 할 일을 관리하고 일정을 계획할 수 있습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">React</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Node.js</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">MongoDB</span>
                </div>
                <Link 
                  href={`/projects/${item}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
