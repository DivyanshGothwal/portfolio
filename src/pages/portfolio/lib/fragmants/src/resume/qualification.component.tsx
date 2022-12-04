import { Step, StepContent, StepLabel, Stepper, Typography } from '@material-ui/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import React, { useState } from 'react';
import './styles/qualification.styles.css';

interface Information {
    from: string;
    to?: string;
    heading: string;
    subHeading: string;
    about: string[];
}

interface QualificationComponentProps {
  info:Information[]
}

function IconComponent({ onClickIcon }: any) {
  return <FiberManualRecordOutlinedIcon color="disabled" className="cursor-pointer" onClick={onClickIcon} />;
}

export function QualificationComponent({ info }: QualificationComponentProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getIconComponent = ({ icon }) => (
    icon - 1 !== activeStep
      ? (
        <IconComponent
          onClickIcon={() => setActiveStep(icon - 1)}
        />
      )
      : (
        <span
          onClick={() => setActiveStep(4)}
          onKeyUp={() => setActiveStep(4)}
          role="button"
          tabIndex={-1}
        >
          <CheckCircleIcon
            color="primary"
            className="cursor-pointer"
          />
        </span>
      )
  );

  return (
    <Stepper
      orientation="vertical"
      classes={{
        root: 'qualification__stepper_root',
      }}
      activeStep={activeStep}
    >
      {info.map(({ from, to, heading, subHeading, about }, idx) => (
        <Step key={about.join(',')}>
          <StepLabel StepIconComponent={getIconComponent}>
            {from }
            {to ? ` - ${to}` : ''}
            {activeStep !== idx
            && (` - ${subHeading}`)}
          </StepLabel>
          <StepContent>
            <Typography color="primary" variant="h5" className="fw-700">
              {heading}
            </Typography>
            <Typography variant="subtitle1" className="fw-700">
              {subHeading}
            </Typography>
            <Typography>
              {about.map((text) => (
                <div key={text}>{text}</div>
              ))}
            </Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
