import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';

interface ParticleProps {
  options: ISourceOptions;
  id: string;
}

export function Particle({ options, id }: ParticleProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={options}
    />
  );
}
