'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      // 스크롤 위치에 따라 activeSection 업데이트
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });

      // 스크롤에 따른 헤더 스타일 변경
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="font-bold text-xl text-green-700 hover:text-green-600 transition-colors">
              garden&apos;s 포트폴리오
            </Link>
          </div>
          
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link 
              href="#home" 
              className={`nav-highlight text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-green-700 active' : ''}`}
            >
              홈
            </Link>
            <Link 
              href="#profile" 
              className={`nav-highlight text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'profile' ? 'text-green-700 active' : ''}`}
            >
              프로필
            </Link>
            <Link 
              href="#skills" 
              className={`nav-highlight text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'skills' ? 'text-green-700 active' : ''}`}
            >
              기술
            </Link>
            <Link 
              href="#projects" 
              className={`nav-highlight text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'projects' ? 'text-green-700 active' : ''}`}
            >
              프로젝트
            </Link>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-700 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">메뉴 열기</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              href="#home" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'home' ? 'text-green-700 bg-gray-50' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              홈
            </Link>
            <Link 
              href="#profile" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'profile' ? 'text-green-700 bg-gray-50' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              프로필
            </Link>
            <Link 
              href="#skills" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'skills' ? 'text-green-700 bg-gray-50' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              기술
            </Link>
            <Link 
              href="#projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'projects' ? 'text-green-700 bg-gray-50' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              프로젝트
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 