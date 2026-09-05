export type CatalogComponent = {
  name: string;
  description: string;
  path: string;
  icon: string;
  header?: {
    eyebrow?: string;
    title?: string;
    description?: string;
  };
};

export type ComponentCategory = {
  id: string;
  title: string;
  description: string;
  components: CatalogComponent[];
};

export type ComponentHeader = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PublicHeaderKey = 
  | 'home'
  | 'catalog'
  | 'notFound'
  | 'actions'
  | 'fields'
  | 'date'
  | 'content'
  | 'lines'
  | 'navigation';
