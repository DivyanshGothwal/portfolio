import { PortfolioRoutes } from '@portfolio/common';
import { NotFoundComponent } from '@portfolio/component';
import { ClientContainer } from '../../pages/portfolio/lib/fragmants/src/client/client.container';
import { TravellerContainer } from '../../pages/portfolio/lib/fragmants/src/traveller/traveller.container';
import { PortfolioPageContainer } from '../../pages/portfolio/lib/portfolio.page.container';
import { CLIENT, DEFAULT, TRAVELLER } from './route.constants';

export const portfolioRoutes: PortfolioRoutes[] = [
  {
    path: '/',
    id: 'Portfolio',
    key: 'Portfolio',
    title: 'Portfolio',
    element: PortfolioPageContainer,
  },
  {
    path: CLIENT,
    id: CLIENT,
    key: CLIENT,
    title: CLIENT,
    element: ClientContainer,
  },
  {
    path: TRAVELLER,
    id: TRAVELLER,
    key: TRAVELLER,
    title: TRAVELLER,
    element: TravellerContainer,
  },
  {
    path: DEFAULT,
    id: 'Not Found',
    key: 'Not Found',
    title: 'Not Found',
    element: NotFoundComponent,
  },
];
