'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

const PARTICLE_COLORS = [
  'hsla(180, 100%, 50%, 0.65)',
  'hsla(251, 100%, 60%, 0.6)',
];

function startParticleAnimation(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let animationFrameId = 0;
  let particles: Particle[] = [];
  let width = 0;
  let height = 0;
  const pointer = { x: -1000, y: -1000 };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const particleCount = Math.min(90, Math.max(28, Math.floor((width * height) / 15000)));
    particles = Array.from({ length: particleCount }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.random() * 0.4 - 0.2,
      vy: Math.random() * 0.4 - 0.2,
      radius: Math.random() * 1.5 + 1,
      color: PARTICLE_COLORS[index % PARTICLE_COLORS.length],
    }));
  };

  const handlePointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  };

  const handlePointerLeave = () => {
    pointer.x = -1000;
    pointer.y = -1000;
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 100 && distance > 0) {
        particle.x -= (dx / distance) * 0.7;
        particle.y -= (dy / distance) * 0.7;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.fill();
    });

    const connectionDistance = 110;
    for (let first = 0; first < particles.length; first += 1) {
      for (let second = first + 1; second < particles.length; second += 1) {
        const dx = particles[first].x - particles[second].x;
        const dy = particles[first].y - particles[second].y;
        const distance = Math.hypot(dx, dy);

        if (distance < connectionDistance) {
          context.strokeStyle = `hsla(180, 100%, 70%, ${0.18 * (1 - distance / connectionDistance)})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particles[first].x, particles[first].y);
          context.lineTo(particles[second].x, particles[second].y);
          context.stroke();
        }
      }
    }

    animationFrameId = window.requestAnimationFrame(draw);
  };

  resize();
  if (!reducedMotion.matches) draw();

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('pointerleave', handlePointerLeave);

  return () => {
    window.cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerleave', handlePointerLeave);
  };
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    return startParticleAnimation(canvas, context);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_50%_35%,_hsl(var(--primary)/0.07),_transparent_45%)] [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)]"
    />
  );
}
