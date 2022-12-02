import { WithRouter } from '@portfolio/common';
import { useEffect, useState } from 'react';
import { withRouter } from '../with-router/with-router.component';

function Component({ router: { navigate, location }, to }: WithRouter) {
  const [rendered, setRendered] = useState<boolean>(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    const ar = location.pathname.split('/');
    if (rendered) {
      navigate(to, {
        replace: true,
      });
    }
  }, [rendered]);
}

export const NotFoundComponent = withRouter(Component);
