import React, { useEffect, useRef } from 'react';

export const NoiseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // Smooth lerp mouse position
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian Base
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Ambient Gold Spotlight 1
      const goldGlow = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, Math.max(width, height) * 0.45);
      goldGlow.addColorStop(0, 'rgba(212, 175, 55, 0.045)');
      goldGlow.addColorStop(0.5, 'rgba(197, 168, 128, 0.015)');
      goldGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');

      ctx.fillStyle = goldGlow;
      ctx.fillRect(0, 0, width, height);

      // Secondary Blue Spot Top Right (Minimal accent)
      const blueGlow = ctx.createRadialGradient(width * 0.85, height * 0.15, 0, width * 0.85, height * 0.15, width * 0.35);
      blueGlow.addColorStop(0, 'rgba(56, 189, 248, 0.025)');
      blueGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');

      ctx.fillStyle = blueGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Texture grain overlay */}
      <div className="absolute inset-0 noise-bg opacity-40 mix-blend-overlay pointer-events-none" />
    </div>
  );
};
