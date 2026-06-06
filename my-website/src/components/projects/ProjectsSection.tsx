import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types/project';

const projects: Project[] = [
  {
    id: 1,
    name: 'Personal Brand Site',
    description: '个人品牌网站，使用 React 19 + Vite 7 + TypeScript + Tailwind CSS v4 构建，支持动态粒子背景和亮暗模式切换。',
    imageUrl: '/projects/project-1.png',
    githubUrl: 'https://github.com/yourusername/my-website',
  },
  {
    id: 2,
    name: 'Task Manager',
    description: '任务管理应用，支持拖拽排序、分类筛选和暗色模式，使用 React Query 进行数据管理。',
    imageUrl: '/projects/project-2.png',
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: '天气仪表盘，集成 OpenWeatherMap API，支持多城市对比和历史数据可视化。',
    imageUrl: '/projects/project-3.png',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    id: 4,
    name: 'Code Snippet Manager',
    description: '代码片段管理工具，支持语法高亮、标签分类和全文搜索，开发者效率利器。',
    imageUrl: '/projects/project-4.png',
    githubUrl: 'https://github.com/yourusername/snippet-manager',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          项目展示
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          以下是我近期完成的项目案例，涵盖前端开发、全栈应用和工具开发
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
