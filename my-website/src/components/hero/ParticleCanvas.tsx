import { useRef } from 'react';
import { useParticles } from '../../hooks/useParticles';

interface ParticleCanvasProps {
  theme: 'light' | 'dark';
  className?: string;
}

export function ParticleCanvas({ theme, className = '' }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  // 使用粒子 Hook
  useParticles({ theme, canvasRef });

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
