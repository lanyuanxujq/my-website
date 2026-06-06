import { useTheme } from './hooks/useTheme';
import { Hero } from './components/hero/Hero';
import { ParticleCanvas } from './components/hero/ParticleCanvas';
import { NavBar } from './components/navigation/NavBar';
import { ProjectsSection } from './components/projects/ProjectsSection';

function App() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar brandName="My Website" />
      <Hero name="Your Name" title="Full Stack Developer" description="Building digital experiences with modern technologies.">
        <ParticleCanvas theme={theme} />
      </Hero>
      <ProjectsSection />
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
