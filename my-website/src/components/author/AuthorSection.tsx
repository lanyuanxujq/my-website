import { AuthorPhoto } from './AuthorPhoto';
import { MapPin, Briefcase } from 'lucide-react';

export function AuthorSection() {
  return (
    <section id="author" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            关于作者
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            用代码构建梦想，用设计创造价值
          </p>
        </div>

        {/* Author card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-8 md:p-12 shadow-2xl hover:scale-[1.02] transition-all duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center">
              <AuthorPhoto
                src="https://n.sinaimg.cn/sinacn10104/57/w700h957/20190610/6f7a-hyeztys1836771.jpg"
                alt="付经民 - 江西博微软件设计师"
                size="lg"
              />
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  付经民
                </h3>
                <div className="flex items-center gap-2 text-xl md:text-2xl bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  <Briefcase className="w-5 h-5 text-purple-300" strokeWidth={2} />
                  <span>江西博微软件设计师</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" strokeWidth={2} />
                <span>江西 · 南昌</span>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
                <p>
                  专注软件设计与开发领域，拥有丰富的全栈开发经验。擅长使用现代前端技术栈（React、TypeScript、Tailwind CSS）构建高性能、用户体验优秀的 Web 应用。
                </p>
                <p>
                  热衷于探索新技术，追求代码质量与工程实践，致力于将复杂的技术转化为简洁优雅的解决方案。相信好的设计不仅在于美观，更在于实用和可维护性。
                </p>
                <p>
                  工作之余喜欢研究开源项目，参与技术社区交流，分享开发经验与技术心得。
                </p>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  React 19
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  Tailwind CSS v4
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  Vite 7
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  全栈开发
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
