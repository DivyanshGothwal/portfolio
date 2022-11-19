import React, { PureComponent } from 'react';
import { ClientComponent } from './client.component';

class Container extends PureComponent {
  render() {
    return <ClientComponent />;
  }
}

export const ClientContainer = Container;
