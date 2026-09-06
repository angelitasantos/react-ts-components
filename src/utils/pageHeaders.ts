import { componentCategories, PUBLIC_HEADERS } from '../constants';
import { CatalogComponent, ComponentHeader, PublicHeaderKey } from '../types';

function findComponentByName(name: string): CatalogComponent | null {
  for (const category of componentCategories) {
    const component = category.components.find(c => c.name === name);
    if (component) return component;
  }
  return null;
}

export function getComponentHeader(componentName: string): ComponentHeader {
  const component = findComponentByName(componentName);
  
  if (component?.header) {
    return {
      eyebrow: component.header.eyebrow || 'Componente',
      title: component.header.title || component.name,
      description: component.header.description || component.description,
    };
  }
  
  return {
    eyebrow: 'Componente',
    title: componentName,
    description: `Componente ${componentName}`,
  };
}

export function getPageHeader(page: PublicHeaderKey) {
  const header = PUBLIC_HEADERS[page];
  
  return {
    eyebrow: header?.eyebrow || '',
    title: header?.title || 'Página',
    description: header?.description || '',
  };
}

export function getHeader(
  type: 'public' | 'component',
  key: string
) {
  if (type === 'public') {
    return getPageHeader(key as PublicHeaderKey);
  }
  return getComponentHeader(key);
}