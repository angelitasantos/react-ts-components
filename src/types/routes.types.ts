export type RoutePath = 
  | '/'
  | '/catalogo'
  | '/exemplos/actions'
  | '/exemplos/fields'
  | '/exemplos/date-field'
  | '/exemplos/content'
  | '/exemplos/lines'
  | '/exemplos/navigation'
  | '/button'
  | '/checkbox'
  | '/radio-button'
  | '/selection-buttons'
  | '/switch-button'
  | '/date-field'
  | '/file-field'
  | '/money-field'
  | '/search-field'
  | '/select-field'
  | '/text-field'
  | '/text-area-field'
  | '/accordion'
  | '/card'
  | '/carousel'
  | '/list'
  | '/modal'
  | '/table'
  | '/breadcrumbs'
  | '/fixed-footer'
  | '/navbar'
  | '/paginator'
  | '/sidebar'
  | '/stepper'
  | '/action-line'
  | '/navigation-line'
  | '/simple-line'
  | '/tabular-line';

export type RouteConfig = {
  path: RoutePath;
  title: string;
  description?: string;
};
