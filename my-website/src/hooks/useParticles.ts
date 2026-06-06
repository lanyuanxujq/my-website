import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface UseParticlesOptions {
  theme: 'light' | 'dark';
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

// 粒子颜色配置
const PARTICLE_COLORS = {
  light: { r: 96, g: 165, b: 250, a: 0.6 },   // 浅蓝色 #60A5FA
  dark: { r: 59, g: 130, b: 246, a: 0.8 },      // 亮蓝色 #3B82F6
};

// 粒子数量配置
const PARTICLE_COUNTS = {
  large: 80,    // > 1024px
  medium: 50,   // 768-1024px
  small: 30,    // < 768px
};

export function useParticles({ theme, canvasRef }: UseParticlesOptions) {
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  // 根据屏幕尺寸计算粒子数量
  const calculateParticleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1024) return PARTICLE_COUNTS.large;
    if (width >= 768) return PARTICLE_COUNTS.medium;
    return PARTICLE_COUNTS.small;
  }, []);

  // 初始化粒子
  const initParticles = useCallback((count: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }
    return particles;
  }, []);

  // 绘制粒子
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 获取当前主题颜色
    const colorConfig = PARTICLE_COLORS[theme];
    const color = `rgba(${colorConfig.r}, ${colorConfig.g}, ${colorConfig.b}, ${colorConfig.a})`;

    // 绘制所有粒子
    ctx.fillStyle = color;
    particlesRef.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [theme, canvasRef]);

  // 更新粒子位置
  const update = useCallback(() => {
    particlesRef.current.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // 边界检测
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.vy *= -1;
      }
    });
  }, []);

  // 动画循环
  const animate = useCallback(() => {
    update();
    draw();
    animationRef.current = requestAnimationFrame(animate);
  }, [update, draw]);

  // 初始化 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);

  // 初始化粒子并开始动画
  useEffect(() => {
    const count = calculateParticleCount();
    particlesRef.current = initParticles(count);
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, animate, calculateParticleCount]);

  // 主题切换时重新绘制
  useEffect(() => {
    draw();
  }, [theme, draw]);
}
