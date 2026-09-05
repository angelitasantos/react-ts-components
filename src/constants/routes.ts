export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalogo',
  EXAMPLES: {
    ACTIONS: '/exemplos/actions',
    FIELDS: '/exemplos/fields',
    DATE: '/exemplos/date-field',
    CONTENT: '/exemplos/content',
    LINES: '/exemplos/lines',
    NAVIGATION: '/exemplos/navigation',
  },
  COMPONENTS: {
    BUTTON: '/button',
    CHECKBOX: '/checkbox',
    RADIO_BUTTON: '/radio-button',
    SELECTION_BUTTONS: '/selection-buttons',
    SWITCH_BUTTON: '/switch-button',
    
    DATE_FIELD: '/date-field',
    FILE_FIELD: '/file-field',
    MONEY_FIELD: '/money-field',
    SEARCH_FIELD: '/search-field',
    SELECT_FIELD: '/select-field',
    TEXT_FIELD: '/text-field',
    TEXT_AREA_FIELD: '/text-area-field',
    
    ACCORDION: '/accordion',
    CARD: '/card',
    CAROUSEL: '/carousel',
    LIST: '/list',
    MODAL: '/modal',
    TABLE: '/table',
    
    BREADCRUMBS: '/breadcrumbs',
    FIXED_FOOTER: '/fixed-footer',
    NAVBAR: '/navbar',
    PAGINATOR: '/paginator',
    SIDEBAR: '/sidebar',
    STEPPER: '/stepper',
    
    ACTION_LINE: '/action-line',
    NAVIGATION_LINE: '/navigation-line',
    SIMPLE_LINE: '/simple-line',
    TABULAR_LINE: '/tabular-line',
  },
} as const;

export type RoutePath = 
  | typeof ROUTES.HOME
  | typeof ROUTES.CATALOG
  | typeof ROUTES.EXAMPLES[keyof typeof ROUTES.EXAMPLES]
  | typeof ROUTES.COMPONENTS[keyof typeof ROUTES.COMPONENTS];
