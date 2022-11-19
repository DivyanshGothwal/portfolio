import { withRouter } from '@portfolio/component';
import { WithRouter } from 'common/lib/models/with-router';
import React, { PureComponent } from 'react';
import { PortfolioComponent } from './portfolio.page.component';

interface PortfolioPageContainerState{
  test: string;
}
interface PortfolioPageContainerProps extends WithRouter {
}

class Container extends PureComponent<PortfolioPageContainerProps, PortfolioPageContainerState> {
  render() {
    return (
      <PortfolioComponent />
    );
  }
}

export const PortfolioPageContainer = withRouter(Container);
