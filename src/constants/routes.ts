export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
  EXAMPLES: {
    ACTIONS: '/examples/actions',
    FIELDS: '/examples/fields',
    DATE: '/examples/date-field',
    CONTENT: '/examples/content',
    LINES: '/examples/lines',
    NAVIGATION: '/examples/navigation',
  },
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES] | 
  typeof ROUTES.EXAMPLES[keyof typeof ROUTES.EXAMPLES];
