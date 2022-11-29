import { CustomGrid, MediaQueryProps } from '@portfolio/component';
import React from 'react';
import { InfoComponent } from './info.component';
import { ServicesComponent } from './services.component';
import './styles/about.component.styles.css';

type AboutComponentProps = MediaQueryProps;

export function AboutComponent() {
  return (
    <CustomGrid
      container
      className="component__container mx-auto justify-content-center mb-5"
    >
      <CustomGrid
        container
      >
        <InfoComponent />
      </CustomGrid>
      <CustomGrid
        container
      >
        <ServicesComponent />
      </CustomGrid>
    </CustomGrid>
  );
}
