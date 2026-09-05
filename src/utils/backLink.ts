import { ROUTES } from '../constants';

export const BACK_LINK_CONFIG = {
  default: {
    to: ROUTES.HOME,
    label: 'Voltar para Home',
  },
  catalog: {
    to: ROUTES.HOME,
    label: 'Voltar para Home',
  },
  examples: {
    to: ROUTES.HOME,
    label: 'Voltar para Home',
  },
  component: {
    to: ROUTES.CATALOG,
    label: 'Voltar ao catálogo',
  },
} as const;

export function getBackLinkConfig(page?: 'catalog' | 'examples' | 'component' | 'default') {
  const config = BACK_LINK_CONFIG[page || 'default'];
  return {
    to: config.to,
    label: config.label,
  };
}
