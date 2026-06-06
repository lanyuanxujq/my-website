interface NavBarProps {
  logo?: string;
  brandName: string;
}

export function NavBar({ logo, brandName }: NavBarProps) {
  return (
    <nav role="navigation" aria-label="主导航" className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-gradient-to-r from-gray-900/90 to-gray-800/90 dark:from-gray-950/90 dark:to-gray-900/90 backdrop-blur-lg border-b border-gray-700/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left: Logo/Brand */}
          <div className="flex-shrink-0">
            {logo ? (
              <img src={logo} alt={brandName} className="h-8 w-auto" />
            ) : (
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {brandName}
              </span>
            )}
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#home"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              首页
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              项目
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              联系我
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
