import React, { useRef, useEffect } from 'react';

export const InteractiveMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    const dots: { x: number; y: number; originX: number; originY: number }[] = [];
    const spacing = 40;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      dots.length = 0;
      for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
          dots.push({ x, y, originX: x, originY: y });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'hsla(var(--primary) / 0.15)';

      dots.forEach((dot) => {
        const dx = mouseRef.current.x - dot.originX;
        const dy = mouseRef.current.y - dot.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          dot.x = dot.originX - dx * force * 0.4;
          dot.y = dot.originY - dy * force * 0.4;
        } else {
          dot.x += (dot.originX - dot.x) * 0.1;
          dot.y += (dot.originY - dot.y) * 0.1;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    render();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-1 opacity-40 transition-opacity duration-1000 motion-reduce:hidden"
    />
  );
};
