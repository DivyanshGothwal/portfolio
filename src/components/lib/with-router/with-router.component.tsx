import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouterComponent(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const navigateTo = (to: any) => {
      navigate(to);
    };
    return (
      <Component
        {...props}
        router={{
          location, navigate: navigateTo, params,
        }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export const withRouter = withRouterComponent;
