import React, { useEffect, useRef, useState } from 'react';

interface NatureParticleCanvasProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  floatAngle: number;
  floatSpeed: number;
  type: 'pollen' | 'spore' | 'leaf_mote' | 'dew';
}

const NATURE_COLORS = [
  { color: '132, 204, 22', type: 'spore' as const },      // Lime green (#84CC16)
  { color: '46, 125, 50', type: 'leaf_mote' as const },   // Forest emerald (#2E7D32)
  { color: '74, 222, 128', type: 'pollen' as const },     // Soft spring green (#4ADE80)
  { color: '221, 161, 94', type: 'pollen' as const },     // Warm sunlit pollen (#DDA15E)
  { color: '163, 230, 53', type: 'dew' as const },        // Bright lime dew (#A3E635)
  { color: '188, 108, 37', type: 'leaf_mote' as const },  // Earth tone (#BC6C25)
];

export const NatureParticleCanvas: React.FC<NatureParticleCanvasProps> = ({
  className = '',
  density = 'medium',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; radius: number; isInside: boolean }>({
    x: -9999,
    y: -9999,
    radius: 140,
    isInside: false,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Determine particle count based on screen size & density
    const getParticleCount = (w: number, h: number) => {
      const baseArea = 1920 * 1080;
      const currentArea = w * h;
      const scale = Math.max(0.4, Math.min(1.2, currentArea / baseArea));

      let baseCount = 45;
      if (density === 'low') baseCount = 28;
      if (density === 'high') baseCount = 65;

      return Math.floor(baseCount * scale);
    };

    // Initialize particles
    const initParticles = () => {
      const count = getParticleCount(width, height);
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const colorObj = NATURE_COLORS[Math.floor(Math.random() * NATURE_COLORS.length)];
        const baseRadius = Math.random() * 2.2 + 1.2; // 1.2px to 3.4px
        const baseAlpha = Math.random() * 0.28 + 0.12; // 0.12 to 0.40

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() * -0.4) - 0.1, // upward gentle drift
          radius: baseRadius,
          baseRadius,
          color: colorObj.color,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2,
          floatAngle: Math.random() * Math.PI * 2,
          floatSpeed: Math.random() * 0.015 + 0.005,
          type: colorObj.type,
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    // Resize Handler
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          width = canvas.width = newWidth;
          height = canvas.height = newHeight;
          initParticles();
        }
      }
    });

    resizeObserver.observe(container);

    // Mouse Tracking Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isInside =
        mouseRef.current.x >= 0 &&
        mouseRef.current.x <= width &&
        mouseRef.current.y >= 0 &&
        mouseRef.current.y <= height;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isInside = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - rect.left;
      mouseRef.current.y = e.touches[0].clientY - rect.top;
      mouseRef.current.isInside = true;
    };

    const handleTouchEnd = () => {
      mouseRef.current.isInside = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Main Animation Loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw subtle connecting organic filaments for close particles
      const connectionDist = 85;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDist * connectionDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / connectionDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(132, 204, 22, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Update & Draw Each Nature Particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Organic floating sine motion (breeze simulation)
          p.floatAngle += p.floatSpeed;
          p.pulsePhase += p.pulseSpeed;

          p.x += p.vx + Math.sin(p.floatAngle) * 0.25;
          p.y += p.vy + Math.cos(p.floatAngle * 0.8) * 0.15;

          // Pulse alpha slightly for bio-luminescent/pollen feel
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.08;

          // Interactive Mouse Repulsion / Deflection
          if (mouse.isInside) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius && dist > 0) {
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              p.x += Math.cos(angle) * force * 3.5;
              p.y += Math.sin(angle) * force * 3.5;
            }
          }

          // Screen boundary wrapping with organic re-entry
          if (p.y < -20) {
            p.y = height + 15;
            p.x = Math.random() * width;
          } else if (p.y > height + 20) {
            p.y = -15;
            p.x = Math.random() * width;
          }

          if (p.x < -20) {
            p.x = width + 15;
          } else if (p.x > width + 20) {
            p.x = -15;
          }
        }

        // Draw particle with soft halo
        ctx.save();
        
        // Soft outer glow halo
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 2.8
        );
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0.02, p.alpha)})`);
        gradient.addColorStop(0.5, `rgba(${p.color}, ${Math.max(0.01, p.alpha * 0.4)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Core bright point
        ctx.fillStyle = `rgba(${p.color}, ${Math.min(0.9, p.alpha + 0.25)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.75, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [density, interactive, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 mix-blend-multiply"
      />
    </div>
  );
};
