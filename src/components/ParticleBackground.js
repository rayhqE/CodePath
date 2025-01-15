import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Box } from '@mui/material';

function ParticleBackground() {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    setParticlesLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(10, 25, 41, 1) 0%, rgba(10, 25, 41, 0) 50%)',
          pointerEvents: 'none',
          zIndex: 1
        }
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          style: {
            position: "absolute",
            width: "100%",
            height: "100%"
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#00bcd4", "#62efff", "#008ba3"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.4,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#62efff",
              opacity: 0.2,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.05
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
                top: "bounce",
                left: "bounce",
                right: "bounce",
                bottom: "bounce"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "bubble"]
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                links: {
                  opacity: 0.5,
                  color: "#00bcd4"
                }
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                color: "#62efff"
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"]
              }
            }
          },
          background: {
            color: "transparent"
          },
          detectRetina: true,
          fpsLimit: 120
        }}
      />
    </Box>
  );
}

export default ParticleBackground; 