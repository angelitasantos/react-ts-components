import { RouteObject } from 'react-router-dom';
import { componentRoutes } from './componentRoutes';
import { exampleRoutes } from './exampleRoutes';
import { publicRoutes } from './publicRoutes';
import { NotFoundPage } from '../pages/PublicPages';

export const routes: RouteObject[] = [
  ...componentRoutes,
  ...exampleRoutes,
  ...publicRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export { componentRoutes } from './componentRoutes';
export { exampleRoutes } from './exampleRoutes';
export { publicRoutes } from './publicRoutes';
