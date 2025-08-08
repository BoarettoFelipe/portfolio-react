// src/components/FlowingBackground.jsx (Versão Corrigida e Interativa)

import React, { useRef, useEffect } from 'react';
import './FlowingBackground.css';

const FlowingBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Adiciona uma verificação de segurança
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // --- ADIÇÃO 1: RASTREAMENTO DO MOUSE ---
    const mouse = {
      x: null,
      y: null,
      radius: 50 // Área de influência do mouse
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);
    // --- FIM DA ADIÇÃO 1 ---

    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 0;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
      }

      // --- ALTERAÇÃO: LÓGICA DE MOVIMENTO ATUALIZADA ---
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Efeito de repelir do mouse
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.x += dx / 20;
          this.y += dy / 20;
        }
        
        // Faz as partículas voltarem para a tela quando saem
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
    }

    const init = () => {
      particlesArray.length = 0; // Limpa o array para redimensionamento
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    // SUA FUNÇÃO ORIGINAL, SEM ALTERAÇÕES
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `hsla(${distance * 2 + 100}, 100%, 70%, ${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // SUA FUNÇÃO ORIGINAL, SEM ALTERAÇÕES
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach(particle => particle.update());
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // Remove o listener de mouse corretamente
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="flowing-background-canvas" />;
};

export default FlowingBackground;