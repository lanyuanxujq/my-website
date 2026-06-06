import { useEffect, useState, useCallback } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const absoluteTop = top + window.scrollY;
        const absoluteBottom = bottom + window.scrollY;

        if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
          setActiveSection(id);
          return;
        }
      }
    }
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return activeSection;
}
