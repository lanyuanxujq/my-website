import type { ReactNode } from 'react';

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  children?: ReactNode;
}

export function Hero({
  name = '',
  title = '',
  description = '',
  ctaText = '查看我的项目',
  ctaHref = '#projects',
  children,
}: HeroProps) {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(ctaHref);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 pt-16">
      {/* 粒子背景层 */}
      <div className="absolute inset-0 pointer-events-none">
        {children}
      </div>

      {/* 内容层 */}
      <div className="relative z-10 text-center px-4 py-16">
        {name && (
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {name}
          </h1>
        )}
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        {ctaText && (
          <a
            href={ctaHref}
            onClick={handleCTAClick}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
