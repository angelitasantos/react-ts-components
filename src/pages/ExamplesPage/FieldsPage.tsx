import { BackLink, ComponentGrid, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { useCategoryComponents } from '../../hooks';
import '../Pages.css';

export function FieldsPage() {
  const { components, exists } = useCategoryComponents('fields');

  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('fields')} />

      {exists && (
        <ComponentGrid 
          components={components}
        />
      )}
    </main>
  );
}
