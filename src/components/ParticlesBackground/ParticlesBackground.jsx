import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 300,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Белые звездочки
        },
        shape: {
          type: "star", // Звездочки вместо обычных кругов
        },
        move: {
          direction: "none", // Частицы будут двигаться в случайные направления
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 3,
          straight: false, // Двигаются случайным образом
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 150, // Количество частиц
        },
        opacity: {
          value: 0.6, // Прозрачность частиц
        },
        size: {
          value: { min: 1, max: 5 }, // Размер звездочек
        },
        rotate: {
          value: 45, // Вращение частиц для создания эффекта "лучиков"
          animation: {
            enable: true,
            speed: 50,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
