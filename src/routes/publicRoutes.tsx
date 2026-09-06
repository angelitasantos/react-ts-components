import { RouteObject } from 'react-router-dom';
import { HomePage, CatalogPage } from '../pages/PublicPages';
import { ROUTES } from '../constants';

export const publicRoutes: RouteObject[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.CATALOG, element: <CatalogPage /> },
];
