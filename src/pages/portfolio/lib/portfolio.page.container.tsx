import { WithRouter } from '@portfolio/common';
import { MediaQueryProps, withRouter } from '@portfolio/component';
import React, { PureComponent } from 'react';
import { PortfolioComponent } from './portfolio.page.component';

interface PortfolioPageContainerState{
  rendered: boolean;
}
export interface PortfolioPageContainerProps extends WithRouter, MediaQueryProps {
}

class Container extends PureComponent<PortfolioPageContainerProps, PortfolioPageContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
    };
  }

  componentDidMount() {
    this.setState({
      rendered: true,
    });
  }

  componentDidUpdate(_, { rendered: prevRendered }) {
    const { router: { location: { pathname }, navigate } } = this.props;
    const pathArray = pathname.split('/');
    const { rendered } = this.state;
    if (prevRendered !== rendered
      && (pathArray.length <= 3
        && !pathArray?.[0]
        && !pathArray?.[2])
    ) {
      navigate('home');
    }
  }

  render() {
    return (
      <PortfolioComponent />
    );
  }
}

export const PortfolioPageContainer = withRouter(Container);
