import { BackLink, ComponentGrid, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { useCategoryComponents } from '../../hooks';
import '../Pages.css';

export function DateFieldPage() {
  const { components, exists } = useCategoryComponents('date');

  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('date')} />

      {exists && (
        <ComponentGrid 
          components={components}
        />
      )}
    </main>
  );
}
