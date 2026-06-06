import { useTheme } from './hooks/useTheme';
import { Hero } from './components/hero/Hero';
import { ParticleCanvas } from './components/hero/ParticleCanvas';
import { NavBar } from './components/navigation/NavBar';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AuthorSection } from './components/author/AuthorSection';

function App() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar brandName="My Website" />
      <Hero name="付经民" title="江西博微软件设计师" description="专注软件设计与开发领域，拥有丰富的全栈开发经验。擅长使用现代前端技术栈（React、TypeScript、Tailwind CSS）构建高性能、用户体验优秀的 Web 应用。">
        <ParticleCanvas theme={theme} />
      </Hero>
      <ProjectsSection />
      <AuthorSection />
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">联系我</h2>
          <p className="text-gray-400 mb-8">欢迎与我联系，一起探讨合作机会</p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            发送邮件
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
