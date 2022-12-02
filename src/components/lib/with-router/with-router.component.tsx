import React from 'react';
import { NavigateOptions, useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouterComponent(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const navigateTo = (to: string, options?: NavigateOptions | undefined) => {
      navigate(to, options);
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
