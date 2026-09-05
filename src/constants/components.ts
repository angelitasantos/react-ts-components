import { ROUTES } from './routes';

export const componentCategories = [
  {
    id: 'actions',
    title: 'Ações e seleções',
    description: 'Componentes para executar ações e escolher opções.',
    components: [
      {
        name: 'Button',
        description:
          'Botão para executar ações principais, secundárias e destrutivas.',
        path: ROUTES.COMPONENTS.BUTTON,
        icon: '▰',
        header: {
          eyebrow: 'Componente',
          title: 'Button',
          description: 'Botão para executar ações principais, secundárias e destrutivas.',
        },
      },
      {
        name: 'CheckBox',
        description:
          'Controle para aceitar termos ou selecionar opções independentes.',
        path: ROUTES.COMPONENTS.CHECKBOX,
        icon: '☑',
        header: {
          eyebrow: 'Componente',
          title: 'CheckBox',
          description: 'Controle para aceitar termos ou selecionar opções independentes.',
        },
      },
      {
        name: 'RadioButton',
        description:
          'Controle para selecionar uma única opção em um grupo.',
        path: ROUTES.COMPONENTS.RADIO_BUTTON,
        icon: '◉',
        header: {
          eyebrow: 'Componente',
          title: 'RadioButton',
          description: 'Controle para selecionar uma única opção em um grupo.',
        },
      },
      {
        name: 'SelectionButtons',
        description:
          'Grupo de opções exclusivas apresentadas como botões.',
        path: ROUTES.COMPONENTS.SELECTION_BUTTONS,
        icon: '▣',
        header: {
          eyebrow: 'Componente',
          title: 'SelectionButtons',
          description: 'Grupo de opções exclusivas apresentadas como botões.',
        },
      },
      {
        name: 'SwitchButton',
        description:
          'Interruptor para ativar ou desativar uma preferência.',
        path: ROUTES.COMPONENTS.SWITCH_BUTTON,
        icon: '◐',
        header: {
          eyebrow: 'Componente',
          title: 'SwitchButton',
          description: 'Interruptor para ativar ou desativar uma preferência.',
        },
      },
    ],
  },
  {
    id: 'fields',
    title: 'Campos de formulário',
    description: 'Componentes para entrada, busca e seleção de dados.',
    components: [
      {
        name: 'DateField',
        description: 'Campo de data que abre um calendário para seleção.',
        path: ROUTES.COMPONENTS.DATE_FIELD,
        icon: '📅',
        header: {
          eyebrow: 'Componente',
          title: 'DateField',
          description: 'Campo de data que abre um calendário para seleção.',
        },
      },
      {
        name: 'FileField',
        description: 'Campo para seleção e envio de arquivos.',
        path: ROUTES.COMPONENTS.FILE_FIELD,
        icon: '↥',
        header: {
          eyebrow: 'Componente',
          title: 'FileField',
          description: 'Campo para seleção e envio de arquivos.',
        },
      },
      {
        name: 'MoneyField',
        description: 'Campo formatado para valores monetários.',
        path: ROUTES.COMPONENTS.MONEY_FIELD,
        icon: '$',
        header: {
          eyebrow: 'Componente',
          title: 'MoneyField',
          description: 'Campo formatado para valores monetários.',
        },
      },
      {
        name: 'SearchField',
        description:
          'Campo de busca com ícone e ação para limpar a pesquisa.',
        path: ROUTES.COMPONENTS.SEARCH_FIELD,
        icon: '⌕',
        header: {
          eyebrow: 'Componente',
          title: 'SearchField',
          description: 'Campo de busca com ícone e ação para limpar a pesquisa.',
        },
      },
      {
        name: 'SelectField',
        description:
          'Lista de seleção para escolher uma opção entre alternativas.',
        path: ROUTES.COMPONENTS.SELECT_FIELD,
        icon: '▾',
        header: {
          eyebrow: 'Componente',
          title: 'SelectField',
          description: 'Lista de seleção para escolher uma opção entre alternativas.',
        },
      },
      {
        name: 'TextField',
        description:
          'Campo de entrada para textos curtos, e-mails, senhas e outros dados.',
        path: ROUTES.COMPONENTS.TEXT_FIELD,
        icon: 'T',
        header: {
          eyebrow: 'Componente',
          title: 'TextField',
          description: 'Campo de entrada para textos curtos, e-mails, senhas e outros dados.',
        },
      },
      {
        name: 'TextAreaField',
        description:
          'Componente para incluir mais detalhes e informações.',
        path: ROUTES.COMPONENTS.TEXT_AREA_FIELD,
        icon: '◫',
        header: {
          eyebrow: 'Componente',
          title: 'TextAreaField',
          description: 'Componente para incluir mais detalhes e informações.',
        },
      },
    ],
  },
  {
    id: 'content',
    title: 'Conteúdo e visualização',
    description:
      'Componentes para estruturar e exibir conteúdos na interface.',
    components: [
      {
        name: 'Accordion',
        description:
          'Componente expansível para organizar e revelar conteúdos.',
        path: ROUTES.COMPONENTS.ACCORDION,
        icon: '↕',
        header: {
          eyebrow: 'Componente',
          title: 'Accordion',
          description: 'Componente expansível para organizar e revelar conteúdos.',
        },
      },
      {
        name: 'Card',
        description:
          'Container para agrupar conteúdos, ações rápidas e botões principais.',
        path: ROUTES.COMPONENTS.CARD,
        icon: '▣',
        header: {
          eyebrow: 'Componente',
          title: 'Card',
          description: 'Container para agrupar conteúdos, ações rápidas e botões principais.',
        },
      },
      {
        name: 'Carousel',
        description:
          'Componente para navegar entre banners, imagens ou conteúdos em slides.',
        path: ROUTES.COMPONENTS.CAROUSEL,
        icon: '◫',
        header: {
          eyebrow: 'Componente',
          title: 'Carousel',
          description: 'Componente para navegar entre banners, imagens ou conteúdos em slides.',
        },
      },
      {
        name: 'List',
        description:
          'Lista tipada para exibir coleções de conteúdos e estados vazios.',
        path: ROUTES.COMPONENTS.LIST,
        icon: '☷',
        header: {
          eyebrow: 'Componente',
          title: 'List',
          description: 'Lista tipada para exibir coleções de conteúdos e estados vazios.',
        },
      },
      {
        name: 'Modal',
        description:
          'Janela sobreposta para confirmações, formulários e ações contextuais.',
        path: ROUTES.COMPONENTS.MODAL,
        icon: '▰',
        header: {
          eyebrow: 'Componente',
          title: 'Modal',
          description: 'Janela sobreposta para confirmações, formulários e ações contextuais.',
        },
      },
      {
        name: 'Table',
        description:
          'Tabela responsiva e tipada para apresentar listas de dados.',
        path: ROUTES.COMPONENTS.TABLE,
        icon: '▤',
        header: {
          eyebrow: 'Componente',
          title: 'Table',
          description: 'Tabela responsiva e tipada para apresentar listas de dados.',
        },
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Menu e navegação',
    description:
      'Componentes para orientar a navegação e estruturar páginas da aplicação.',
    components: [
      {
        name: 'Breadcrumbs',
        description:
          'Indica a localização atual do usuário dentro da estrutura de páginas.',
        path: ROUTES.COMPONENTS.BREADCRUMBS,
        icon: '›',
        header: {
          eyebrow: 'Componente',
          title: 'Breadcrumbs',
          description: 'Indica a localização atual do usuário dentro da estrutura de páginas.',
        },
      },
      {
        name: 'FixedFooter',
        description:
          'Barra de ações fixa no rodapé da página para operações persistentes.',
        path: ROUTES.COMPONENTS.FIXED_FOOTER,
        icon: '▂',
        header: {
          eyebrow: 'Componente',
          title: 'FixedFooter',
          description: 'Barra de ações fixa no rodapé da página para operações persistentes.',
        },
      },
      {
        name: 'Navbar',
        description:
          'Cabeçalho superior com marca, contexto da página e ações globais.',
        path: ROUTES.COMPONENTS.NAVBAR,
        icon: '▬',
        header: {
          eyebrow: 'Componente',
          title: 'Navbar',
          description: 'Cabeçalho superior com marca, contexto da página e ações globais.',
        },
      },
      {
        name: 'Paginator',
        description:
          'Controla a navegação entre páginas de uma lista ou tabela.',
        path: ROUTES.COMPONENTS.PAGINATOR,
        icon: '1',
        header: {
          eyebrow: 'Componente',
          title: 'Paginator',
          description: 'Controla a navegação entre páginas de uma lista ou tabela.',
        },
      },
      {
        name: 'Sidebar',
        description:
          'Menu lateral para navegação principal entre áreas da aplicação.',
        path: ROUTES.COMPONENTS.SIDEBAR,
        icon: '☰',
        header: {
          eyebrow: 'Componente',
          title: 'Sidebar',
          description: 'Menu lateral para navegação principal entre áreas da aplicação.',
        },
      },
      {
        name: 'Stepper',
        description:
          'Indica o progresso e a etapa atual em fluxos compostos por múltiplos passos.',
        path: ROUTES.COMPONENTS.STEPPER,
        icon: '①',
        header: {
          eyebrow: 'Componente',
          title: 'Stepper',
          description: 'Indica o progresso e a etapa atual em fluxos compostos por múltiplos passos.',
        },
      },
    ],
  },
  {
    id: 'lines',
    title: 'Linhas',
    description:
      'Componentes para apresentar informações, ações e opções de navegação.',
    components: [
      {
        name: 'ActionLine',
        description:
          'Linha com conteúdo principal e área para ações contextuais.',
        path: ROUTES.COMPONENTS.ACTION_LINE,
        icon: '⚡',
        header: {
          eyebrow: 'Componente',
          title: 'ActionLine',
          description: 'Linha com conteúdo principal e área para ações contextuais.',
        },
      },
      {
        name: 'NavigationLine',
        description:
          'Linha clicável para navegar entre páginas ou executar uma ação.',
        path: ROUTES.COMPONENTS.NAVIGATION_LINE,
        icon: '→',
        header: {
          eyebrow: 'Componente',
          title: 'NavigationLine',
          description: 'Linha clicável para navegar entre páginas ou executar uma ação.',
        },
      },
      {
        name: 'SimpleLine',
        description:
          'Linha simples para exibir uma informação composta por rótulo e valor.',
        path: ROUTES.COMPONENTS.SIMPLE_LINE,
        icon: '—',
        header: {
          eyebrow: 'Componente',
          title: 'SimpleLine',
          description: 'Linha simples para exibir uma informação composta por rótulo e valor.',
        },
      },
      {
        name: 'TabularLine',
        description:
          'Linha estruturada em colunas para apresentar dados e ações rápidas.',
        path: ROUTES.COMPONENTS.TABULAR_LINE,
        icon: '▤',
        header: {
          eyebrow: 'Componente',
          title: 'TabularLine',
          description: 'Linha estruturada em colunas para apresentar dados e ações rápidas.',
        },
      },
    ],
  },
];
