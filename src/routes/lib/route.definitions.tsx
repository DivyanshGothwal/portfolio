import { PortfolioRoutes } from '@portfolio/common';
import { NotFoundComponent } from '@portfolio/component';
import { AboutContainer, BlogsContainer, ContactMeContainer, HomeContainer, PortfolioPageContainer, ResumeContainer } from '@portfolio/pages';
import { routeConstant } from './route.constants';

export const portfolioRoutes: PortfolioRoutes[] = [
  {
    path: routeConstant.initialHome.path,
    id: routeConstant.initialHome.id,
    key: routeConstant.initialHome.id,
    title: routeConstant.initialHome.title,
    element: PortfolioPageContainer,
    childRoutes: [
      {
        path: routeConstant.home.path,
        id: routeConstant.home.id,
        key: routeConstant.home.id,
        title: routeConstant.home.title,
        element: HomeContainer,
      },
      {
        path: routeConstant.about.path,
        id: routeConstant.about.id,
        key: routeConstant.about.id,
        title: routeConstant.about.title,
        element: AboutContainer,
      },
      {
        path: routeConstant.resume.path,
        id: routeConstant.resume.id,
        key: routeConstant.resume.id,
        title: routeConstant.resume.title,
        element: ResumeContainer,
      },

      {
        path: routeConstant.contact.path,
        id: routeConstant.contact.id,
        key: routeConstant.contact.id,
        title: routeConstant.contact.title,
        element: ContactMeContainer,
      },
      // {
      //   path: routeConstant.projects.path,
      //   id: routeConstant.projects.id,
      //   key: routeConstant.projects.id,
      //   title: routeConstant.projects.title,
      //   element: AboutContainer,
      // },
      {
        path: routeConstant.blogs.path,
        id: routeConstant.blogs.id,
        key: routeConstant.blogs.id,
        title: routeConstant.blogs.title,
        element: BlogsContainer,
      },
    ],
  },
  {
    path: routeConstant.default.path,
    id: routeConstant.default.id,
    key: routeConstant.default.id,
    title: routeConstant.default.title,
    element: NotFoundComponent,
  },
];
