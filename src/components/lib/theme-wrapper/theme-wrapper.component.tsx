import { colors, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { CssBaseline } from '@mui/material';
import React, { memo, useState } from 'react';

interface ThemeWrapperComponentProps {
  children: React.ReactElement
}
/**
 * Theme provider component used to change the theme of the application.
 * @returns {JSX} ThemeWrapper component .
 */
const ThemeWrapper = memo((props: ThemeWrapperComponentProps) => {
  const breakpointsFull = {
    breakpoints: createBreakpoints({
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    }),
  };
  const [theme] = useState({
    palette: {
      primary: {
        main: '#037fff',
        light: colors.blue[100],
        dark: colors.blue[700],
      },
    },
    typography: {
      fontFamily: 'Nunito, Roboto, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={responsiveFontSizes(createTheme(theme, breakpointsFull))}>
      <CssBaseline />
      { props.children }
    </ThemeProvider>
  );
});

export default ThemeWrapper;
