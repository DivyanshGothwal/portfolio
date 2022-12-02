import { Location } from 'history';
import { NavigateOptions } from 'react-router-dom';

export interface WithRouter {
  to: string;
  router: {
    location: Location;
    navigate: (to: string, options?: NavigateOptions | undefined) => void
  }
}
