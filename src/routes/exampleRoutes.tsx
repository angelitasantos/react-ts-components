import { RouteObject } from 'react-router-dom';
import { ROUTES } from '../constants';
import { 
  ActionsPage,
  ContentPage,
  DateFieldPage,
  FieldsPage,
  LinesPage,
  NavigationPage
} from '../pages/ExamplesPage';

export const exampleRoutes: RouteObject[] = [
  { path: ROUTES.EXAMPLES.ACTIONS, element: <ActionsPage /> },
  { path: ROUTES.EXAMPLES.CONTENT, element: <ContentPage /> },
  { path: ROUTES.EXAMPLES.DATE, element: <DateFieldPage /> },
  { path: ROUTES.EXAMPLES.FIELDS, element: <FieldsPage /> },
  { path: ROUTES.EXAMPLES.LINES, element: <LinesPage /> },
  { path: ROUTES.EXAMPLES.NAVIGATION, element: <NavigationPage /> },
];
