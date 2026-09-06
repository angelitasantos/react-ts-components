import { BackLink, ComponentGrid, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { useCategoryComponents } from '../../hooks';
import '../Pages.css';

export function LinesPage() {
  const { components, exists } = useCategoryComponents('lines');

  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('lines')} />

      {exists && (
        <ComponentGrid 
          components={components}
        />
      )}
    </main>
  );
}
