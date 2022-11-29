import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';

interface ParticleProps {
  options: ISourceOptions;
  id: string;
}

export function Particle({ options, id }: ParticleProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}
