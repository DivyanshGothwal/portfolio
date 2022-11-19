/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { TravellerComponent } from './traveller.component';

class Container extends PureComponent<{
  dispatch: (t: any) => any
}> {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return <TravellerComponent />;
  }
}

export const TravellerContainer = Container;
