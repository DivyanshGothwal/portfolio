import { Location } from 'history';

export interface WithRouter {
  router: {
    location: Location;
    // eslint-disable-next-line no-unused-vars
    navigate: (to: string) => void
  }
}
