import { PortfolioRoutes } from '@portfolio/common';
import { portfolioRoutes } from '@portfolio/routes';
import React, { PureComponent } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

export class AppComponent extends PureComponent {
  getRoutes = (routes?: PortfolioRoutes[]) => routes?.map(({
    element: Component, key, path, childRoutes,
  }) => (
    <Route
      key={key}
      path={path}
      element={(
        <>
          <Component />
          {childRoutes?.length && <Outlet />}
        </>
        )}
    >
      {this.getRoutes(childRoutes)}
    </Route>
  ));

  render() {
    return (
      <div>
        <Routes>
          {this.getRoutes(portfolioRoutes)}
        </Routes>
      </div>
    );
  }
}
