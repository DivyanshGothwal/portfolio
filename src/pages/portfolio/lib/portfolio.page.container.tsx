import { withRouter } from '@portfolio/component';
import { WithRouter } from 'common/lib/models/with-router';
import React, { PureComponent } from 'react';
import { CLIENT, TRAVELLER } from 'routes/lib/route.constants';
import { PortfolioComponent } from './portfolio.page.component';

interface PortfolioPageContainerState{
  test: string;
}
interface PortfolioPageContainerProps extends WithRouter {
}

class Container extends PureComponent<PortfolioPageContainerProps, PortfolioPageContainerState> {
  constructor(props: PortfolioPageContainerProps) {
    super(props);
    this.onClickClient = this.onClickClient.bind(this);
    this.onClickTraveller = this.onClickTraveller.bind(this);
  }

  onClickClient() {
    const { router: { navigate } } = this.props;
    navigate(CLIENT);
  }

  onClickTraveller = () => {
    const { router: { navigate } } = this.props;
    navigate(TRAVELLER);
  };

  render() {
    document.title = 'da';
    return (
      <PortfolioComponent />
    );
  }
}

export const PortfolioPageContainer = withRouter(Container);
