// src/particles-config.js (Configuração de Malha Interativa)

const particlesConfig = {
  background: {
    color: {
      value: "var(--cor-fundo-principal)", // Usa a cor de fundo do nosso tema
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        // O modo "grab" cria as linhas que se conectam ao mouse
        mode: "grab", 
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200, // A distância que o mouse "puxa" as linhas
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2, // Linhas bem sutis
      width: 1,
    },
    collisions: {
      enable: false,
    },
    // AQUI ESTÁ A MÁGICA: as partículas não se movem sozinhas
    move: {
      enable: false, // <-- PARTÍCULAS ESTÁTICAS
    },

    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // Número de pontos na tela
    },
    opacity: {
      value: 0.3, // Pontos bem sutis
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;