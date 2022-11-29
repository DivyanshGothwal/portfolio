import { WithRouter } from '@portfolio/common';
import { MediaQueryProps, withRouter } from '@portfolio/component';
import React, { PureComponent } from 'react';
import { routeConstant } from 'routes/lib/route.constants';
import { PortfolioComponent } from './portfolio.page.component';

interface PortfolioPageContainerState{
  test: string;
}
export interface PortfolioPageContainerProps extends WithRouter, MediaQueryProps {
  setApplicationTheme: (isDark: boolean) => void;
}

class Container extends PureComponent<PortfolioPageContainerProps, PortfolioPageContainerState> {
  render() {
    const { router: { location: { pathname }, navigate }, setApplicationTheme } = this.props;
    if (pathname === routeConstant.initialHome.path) {
      navigate(routeConstant.home.path);
      setApplicationTheme(true);
    }
    return (
      <PortfolioComponent />
    );
  }
}

export const PortfolioPageContainer = withRouter(Container);
