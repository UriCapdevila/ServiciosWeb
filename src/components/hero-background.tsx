'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Mouse {
  x: number | undefined;
  y: number | undefined;
  radius: number;
}

export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse: Mouse = {
      x: undefined,
      y: undefined,
      radius: (canvas.height / 120) * (canvas.width / 120),
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };
    window.addEventListener('mouseout', handleMouseOut);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 120) * (canvas.width / 120);
      init();
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
              this.x += 5;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 5;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
              this.y += 5;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 5;
            }
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    let particlesArray: Particle[];

    function init() {
      particlesArray = [];
      const colorPalette = [
        'hsla(180, 100%, 50%, 0.7)', // Neon Cyan
        'hsla(251, 100%, 60%, 0.7)'  // Blue-Violet
      ];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `hsla(180, 100%, 70%, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className={cn(
        'absolute inset-0 z-0',
        '[mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)]'
      )}
    />
  );
};
