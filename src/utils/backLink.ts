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
    label: 'Voltar para Catálogo',
  },

  actions: {
    to: ROUTES.EXAMPLES.ACTIONS,
    label: 'Voltar para Ações',
  },
  content: {
    to: ROUTES.EXAMPLES.CONTENT,
    label: 'Voltar para Conteúdo',
  },
  dateField: {
    to: ROUTES.EXAMPLES.DATE,
    label: 'Voltar para DateField',
  },
  fields: {
    to: ROUTES.EXAMPLES.FIELDS,
    label: 'Voltar para Campos de Formulário',
  },
  lines: {
    to: ROUTES.EXAMPLES.LINES,
    label: 'Voltar para Linhas',
  },
  navigation: {
    to: ROUTES.EXAMPLES.NAVIGATION,
    label: 'Voltar para Navegação',
  },
} as const;

export type BackLinkPageKey = keyof typeof BACK_LINK_CONFIG;

export function getBackLinkConfig(page?: BackLinkPageKey) {
  const config = BACK_LINK_CONFIG[page || 'default'];
  return {
    to: config.to,
    label: config.label,
  };
}
