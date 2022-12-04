import { Paper } from '@material-ui/core';
import { useMediaQuery } from '@mui/material';
import { PortfolioRoutes } from '@portfolio/common';
import { portfolioRoutes } from '@portfolio/routes';
import 'animate.css';
import ThemeWrapper from 'components/lib/theme-wrapper/theme-wrapper.component';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

export function AppComponent() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getRoutes = (routes?: PortfolioRoutes[]) => routes
    ?.map(({ element: Component, key, path, childRoutes, to }) => (
      <Route
        key={key}
        path={path}
        element={(
          <>
            <Component to={to} />
            {childRoutes?.length && <Outlet />}
          </>
        )}
      >
        {getRoutes(childRoutes)}
      </Route>
    ));

  return (
    <ThemeWrapper>
      <Paper
        elevation={0}
        className="d-flex p-2"
        style={{
          background: '#f1f1f1',
          minHeight: '100vh',
        }}
      >
        <Routes>
          {getRoutes(portfolioRoutes)}
        </Routes>
      </Paper>
    </ThemeWrapper>
  );
}
