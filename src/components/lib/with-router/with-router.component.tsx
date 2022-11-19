import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouterComponent(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export const withRouter = withRouterComponent;
