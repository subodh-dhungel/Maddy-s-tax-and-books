import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    animationClass = 'animate-in-view',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            entry.target.classList.add(animationClass);
          } else {
            // Remove animation class when element leaves viewport
            entry.target.classList.remove(animationClass);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, animationClass]);

  return ref;
}
