import { LinearProgress, Typography } from '@material-ui/core';
import React from 'react';

interface SkillComponentProp {
  text: string;
  progressBar: {
    value: number;
  };
  classes?: {
    root?: string;
  }
}

export function SkillComponent({
  text,
  progressBar: { value },
  classes: { root } = {
  },
}: SkillComponentProp) {
  return (
    <div className={root}>
      <Typography variant="subtitle2" className="fw-700">
        {text}
      </Typography>
      <div className="d-flex align-items-center justify-content-center">
        <Typography className="mr-3">
          {value}
          %
        </Typography>
        <LinearProgress
          variant="determinate"
          value={value}
          className="w-100"
        />
      </div>
    </div>
  );
}
