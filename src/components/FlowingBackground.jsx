import { useRef, useEffect } from 'react';
import './FlowingBackground.css';

const FlowingBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particlesArray = [];
    const numberOfParticles = 55;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 0;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.x += dx / 20;
          this.y += dy / 20;
        }
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
    }

    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(142, 217, 196, ${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => particle.update());
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    const syncMotion = () => {
      cancelAnimationFrame(animationFrameId);
      if (!motion.matches && !document.hidden) animate();
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    syncMotion();
    motion.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncMotion);

    return () => {
      motion.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncMotion);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas aria-hidden="true" ref={canvasRef} className="flowing-background-canvas" />;
};

export default FlowingBackground;