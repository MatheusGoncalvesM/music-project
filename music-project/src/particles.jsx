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
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 125,
          },
        },
      },
      particles: {
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.13,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0,
        },
        shape: {
          type: "none",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      id={props.id}
      style={{
        width: '100%',  // Defina o tamanho que você deseja
        height: '500px', // Defina a altura da área onde você quer as partículas
        position: 'relative', // Certifique-se de que o canvas fique na posição correta
      }}
    >
      <Particles id="tsparticles" init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;
