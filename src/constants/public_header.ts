import { PublicHeaderKey } from '../types';

export const PUBLIC_HEADERS: Record<PublicHeaderKey, {
  eyebrow?: string;
  title?: string;
  description?: string;
}> = {
  home: {
    eyebrow: 'React + TypeScript',
    title: 'Design System Web',
    description: 'Biblioteca de componentes reutilizáveis para criação de interfaces consistentes.',
  },
  catalog: {
    eyebrow: 'Catálogo de componentes',
    title: 'Design System Web',
    description: 'Selecione um componente para visualizar seu comportamento e exemplos de uso.',
  },
  notFound: {
    eyebrow: 'Erro 404',
    title: 'Página não encontrada',
    description: 'A página que você está procurando não existe ou foi movida.',
  },
  actions: {
    eyebrow: 'Exemplo de componentes',
    title: 'Ações e seleções',
    description: 'Componentes para executar ações e escolher opções.',
  },
  fields: {
    eyebrow: 'Exemplo de componentes',
    title: 'Campos de formulário',
    description: 'Componentes para entrada, busca e seleção de dados.',
  },
  date: {
    eyebrow: 'Exemplo de componentes',
    title: 'Campo de data',
    description: 'Componentes para seleção de datas com calendário.',
  },
  content: {
    eyebrow: 'Exemplo de componentes',
    title: 'Conteúdo e visualização',
    description: 'Componentes para estruturar e exibir conteúdos.',
  },
  lines: {
    eyebrow: 'Exemplo de componentes',
    title: 'Linhas',
    description: 'Componentes para apresentar informações e ações.',
  },
  navigation: {
    eyebrow: 'Exemplo de componentes',
    title: 'Menu e navegação',
    description: 'Componentes para orientar a navegação.',
  },
} as const;
