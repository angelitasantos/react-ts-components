import { componentCategories } from '../constants';

export function useCategoryComponents(categoryId: string) {
  const category = componentCategories.find(cat => cat.id === categoryId);
  
  return {
    category,
    components: category?.components || [],
    title: category?.title || '',
    description: category?.description || '',
    exists: !!category,
  };
}
