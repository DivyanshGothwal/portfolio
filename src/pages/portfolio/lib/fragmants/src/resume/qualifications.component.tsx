import { Typography } from '@material-ui/core';
import { CustomGrid, HeaderComponent } from '@portfolio/component';
import React from 'react';
import { qualifications } from './constants/resume.constants';
import { QualificationComponent } from './qualification.component';
import './styles/qualification.styles.css';

export function QualificationsComponent() {
  return (
    <CustomGrid container>
      <CustomGrid
        item
        xs={12}
      >
        <HeaderComponent
          text="Resume"
          progressBar={{
            value: 50,
          }}
          classes={{
            root: 'pt-6 mt-6',
          }}
        />
      </CustomGrid>
      {qualifications.map(({ text, Icon, test }) => (
        <CustomGrid
          item
          xs={12}
          key={text}
        >
          <div className="d-flex justify-content-start align-items-center mb-1">
            <Icon color="primary" className="mr-2" />
            <Typography variant="h5">
              {text}
            </Typography>
          </div>
          <CustomGrid container>
            <CustomGrid
              item
            >
              <QualificationComponent info={test} />
            </CustomGrid>
          </CustomGrid>
        </CustomGrid>
      ))}
    </CustomGrid>
  );
}
