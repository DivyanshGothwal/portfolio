import loadable from '@loadable/component';
import React from 'react';

export function AsyncComponent({ load, resolver, ...props } : any) {
  const Component = loadable(load, resolver);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} />;
}
