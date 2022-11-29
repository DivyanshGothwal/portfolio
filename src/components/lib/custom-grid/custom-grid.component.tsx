import { Grid as MuiGrid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { forwardRef } from 'react';

/*
  Regex to replace throughout project:
  search for: import\s*\{(.*)(Grid[,\s]+)(.*)
  replace with: import {$1$3\nimport { Grid } from 'src/components/Grid';
*/

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const useStyles = makeStyles((theme) => {
  const styles = {
  };

  // Add a set of styles for each media breakpoint for each size
  sizes.forEach((size) => {
    // Media query based on user-defined custom breakpoints in theme
    const media = `@media (min-width: ${theme.breakpoints.values[size]}px)`;

    // Add the styles for sizes 1-12
    for (let i = 1; i <= 12; i += 1) {
      const percentage = `${(i / 12) * 100}%`;

      styles[`${size}-${i}`] = {
        [media]: {
          flexGrow: 0,
          maxWidth: percentage,
          flexBasis: percentage,
        },
      };
    }

    // Add the "true" auto sizing style
    styles[`${size}-true`] = {
      [media]: {
        flexGrow: 1,
        maxWidth: '100%',
        flexBasis: 0,
      },
    };
  });

  return styles;
});

const CustomGrid = forwardRef((props: any, ref) => {
  const { item, className: propsClassName } = props as any;
  const classes = useStyles(props);
  let className = propsClassName;

  if (item) {
    sizes.forEach((size) => {
      const value = props[size];

      // Nothing to do if value is one of these
      if ([undefined, null, false, 'auto'].includes(value)) return;

      let classKey;
      if (value === true) classKey = 'true';
      else classKey = value;

      // Add class name for this size
      className = `${className}  ${classes[`${size}-${classKey}`]}`;
    });
  }

  return <MuiGrid ref={ref} {...props as any} className={className} />;
});

export { CustomGrid };
