import { BackLink, ComponentGrid, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { useCategoryComponents } from '../../hooks';
import '../Pages.css';

export function ContentPage() {
  const { components, exists } = useCategoryComponents('content');

  return (
    <main className="page">
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('content')} />

      {exists && (
        <ComponentGrid 
          components={components}
        />
      )}
    </main>
  );
}
