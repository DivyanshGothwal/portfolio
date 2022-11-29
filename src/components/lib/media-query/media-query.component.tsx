
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export interface MediaQueryProps{
  isExtraSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isExtraLarge: boolean;
}

export const withMediaQueries = (Component: any) => function MediaQueries(props: any) {
  const { breakpoints: { values: { lg, md, sm, xl } } } = useTheme();
  const isExtraSmall = useMediaQuery(`(max-width: ${sm}px)`);
  const isSmall = useMediaQuery(`(max-width: ${md}px) and (min-width: ${sm}px)`);
  const isMedium = useMediaQuery(`(max-width: ${lg}px) and (min-width: ${md}px)`);
  const isLarge = useMediaQuery(`(max-width: ${xl}px) and (min-width: ${lg}px)`);
  const isExtraLarge = useMediaQuery(`(min-width: ${xl}px)`);

  return (
    <Component
      isExtraSmall={isExtraSmall}
      isSmall={isSmall}
      isMedium={isMedium}
      isLarge={isLarge}
      isExtraLarge={isExtraLarge}
      {...props}
    />
  );
};
