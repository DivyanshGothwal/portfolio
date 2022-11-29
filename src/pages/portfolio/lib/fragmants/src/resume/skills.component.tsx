import { CustomGrid, HeaderComponent } from '@portfolio/component';
import React from 'react';
import { skills } from './constants/resume.constants';
import { SkillComponent } from './skill.component';

const Test = require('../../../../../../static/images/about_pic.jpg');

export function SkillsComponent() {
  return (
    <CustomGrid
      container
      className="w-100"
    >
      <CustomGrid
        item
        xs={12}
      >
        <HeaderComponent
          text="My Skills"
          progressBar={{
            value: 50,
          }}
          classes={{
            root: 'pt-6 mt-6',
          }}
        />
      </CustomGrid>
      {skills.map(({ text, percentage }) => (
        <CustomGrid
          item
          key={text}
          lg={6}
          xl={6}
          md={6}
          sm={12}
          xs={12}
        >
          <SkillComponent
            text={text}
            progressBar={{
              value: percentage,
            }}
            classes={{
              root: 'mx-2 mb-4',
            }}
          />
        </CustomGrid>
      ))}
    </CustomGrid>
  );
}
