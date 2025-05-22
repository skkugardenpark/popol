'use client';

import { useEffect } from 'react';

const ScrollAnimationTrigger = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 한 번 애니메이션이 실행된 후에는 더 이상 관찰하지 않음
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // fade-in, rotate-in, scale-in 클래스를 가진 모든 요소 관찰
    const animElements = document.querySelectorAll('.fade-in, .rotate-in, .scale-in, .card-3d');
    animElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // 컴포넌트 언마운트 시 관찰 중단
      animElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default ScrollAnimationTrigger; 