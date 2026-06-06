import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'hero-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 首次访问：跟随系统偏好
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 从 localStorage 读取保存的主题
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved) {
      setTheme(saved);
    }
    setMounted(true);
  }, []);

  // 应用主题到 DOM
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // 保存到 localStorage
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage 不可用时静默失败
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme, mounted };
}
