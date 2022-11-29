import { LinearProgress, Typography } from '@material-ui/core';
import React from 'react';
import './styles/header.component.styles.css';

interface HeaderComponentProps {
  text: string;
  progressBar:{
    value: number;
  }
  classes:{
    root: string;
  }
}

export function HeaderComponent({
  text,
  progressBar: { value },
  classes: { root },
}:HeaderComponentProps) {
  return (
    <div className={`header_component__root ${root}`}>
      <Typography
        variant="h1"
        component="span"
        className="fw-700 display-inline-block position-absolute mt-3 pt-3 light-color"
      >
        {text.toUpperCase()}
      </Typography>
      <Typography variant="h3" className="fw-700" gutterBottom>
        {text.toUpperCase()}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        className="border-radius-2 header_component__linear_progress_bar"
      />
    </div>
  );
}

