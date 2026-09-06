import { BackLink, ComponentGrid, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { useCategoryComponents } from '../../hooks';
import '../Pages.css';

export function ActionsPage() {
  const { components, exists } = useCategoryComponents('actions');

  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('actions')} />

      {exists && (
        <ComponentGrid 
          components={components}
        />
      )}
    </main>
  );
}
