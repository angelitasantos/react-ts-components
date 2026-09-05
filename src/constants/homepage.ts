import { ROUTES } from './routes';

export const categories = [
  {
    title: 'Ações e seleções',
    description:
      'Botões, opções de escolha, checkboxes, radios e interruptores.',
    path: ROUTES.EXAMPLES.ACTIONS,
    icon: '◉',
  },
  {
    title: 'Campos de formulário',
    description:
      'Campos de texto, busca, seleção, moeda, arquivos e área de texto.',
    path: ROUTES.EXAMPLES.FIELDS,
    icon: '⌕',
  },
  {
    title: 'Calendário',
    description:
      'Exemplos de preenchimento e seleção de datas utilizando calendário.',
    path: ROUTES.EXAMPLES.DATE,
    icon: '📅',
  },
  {
    title: 'Conteúdo e visualização',
    description:
      'Accordions, cards, carrosséis, modais e tabelas para exibição de dados.',
    path: ROUTES.EXAMPLES.CONTENT,
    icon: '▣',
  },
  {
    title: 'Linhas e Informações',
    description:
      'Linhas para exibir informações, executar ações e direcionar o usuário.',
    path: ROUTES.EXAMPLES.LINES,
    icon: '☰',
  },
  {
    title: 'Menu e navegação',
    description:
      'Breadcrumbs, paginação, navegação lateral e cabeçalho da aplicação.',
    path: ROUTES.EXAMPLES.NAVIGATION,
    icon: '☰',
  },
] as const;

export type Category = typeof categories[number];
