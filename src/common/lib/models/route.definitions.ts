export interface PortfolioRoutes{
  id: string;
  key: string;
  path: string;
  element: any;
  childRoutes?: PortfolioRoutes[],
  title: string,
  customProperties?: {
    [key: string]: any
  }
}
