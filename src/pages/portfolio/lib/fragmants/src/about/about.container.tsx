import React, { PureComponent } from 'react';
import { AboutComponent } from './about.component';

class Container extends PureComponent {
  render() {
    return <AboutComponent />;
  }
}

export const AboutContainer = Container;
