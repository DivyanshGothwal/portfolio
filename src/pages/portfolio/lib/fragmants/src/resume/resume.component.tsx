import { CustomGrid } from '@portfolio/component';
import React from 'react';
import { QualificationsComponent } from './qualifications.component';
import { SkillsComponent } from './skills.component';

export function ResumeComponent() {
  return (
    <CustomGrid
      container
      className="component__container mx-auto justify-content-center mb-5 w-100"
    >
      <CustomGrid className="w-100">
        <SkillsComponent />
      </CustomGrid>
      <CustomGrid className="w-100">
        <QualificationsComponent />
      </CustomGrid>
    </CustomGrid>
  );
}
