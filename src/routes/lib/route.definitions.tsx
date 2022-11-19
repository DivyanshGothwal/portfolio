import { PortfolioRoutes } from '@portfolio/common';
import { NotFoundComponent } from '@portfolio/component';
import { ClientContainer } from '../../pages/portfolio/lib/fragmants/src/client/client.container';
import { TravellerContainer } from '../../pages/portfolio/lib/fragmants/src/traveller/traveller.container';
import { PortfolioPageContainer } from '../../pages/portfolio/lib/portfolio.page.container';
import { routeConstatnt } from './route.constants';

export const portfolioRoutes: PortfolioRoutes[] = [
  {
    path: routeConstatnt.initialHome.path,
    id: routeConstatnt.initialHome.id,
    key: routeConstatnt.initialHome.id,
    title: routeConstatnt.initialHome.title,
    element: PortfolioPageContainer,
    childRoutes: [
      {
        path: routeConstatnt.portfolios.path,
        id: routeConstatnt.portfolios.id,
        key: routeConstatnt.portfolios.id,
        title: routeConstatnt.portfolios.title,
        element: PortfolioPageContainer,
      },
      {
        path: routeConstatnt.home.path,
        id: routeConstatnt.home.id,
        key: routeConstatnt.home.id,
        title: routeConstatnt.home.title,
        element: ClientContainer,
      },
      {
        path: routeConstatnt.about.path,
        id: routeConstatnt.about.id,
        key: routeConstatnt.about.id,
        title: routeConstatnt.about.title,
        element: TravellerContainer,
      },
      {
        path: routeConstatnt.blogs.path,
        id: routeConstatnt.blogs.id,
        key: routeConstatnt.blogs.id,
        title: routeConstatnt.blogs.title,
        element: TravellerContainer,
      },
      {
        path: routeConstatnt.resume.path,
        id: routeConstatnt.resume.id,
        key: routeConstatnt.resume.id,
        title: routeConstatnt.resume.title,
        element: TravellerContainer,
      },
      {
        path: routeConstatnt.default.path,
        id: routeConstatnt.default.id,
        key: routeConstatnt.default.id,
        title: routeConstatnt.default.title,
        element: NotFoundComponent,
      },
    ],
  },
];
