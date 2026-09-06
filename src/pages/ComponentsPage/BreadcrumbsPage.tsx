import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function BreadcrumbsPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('navigation')} />
      <PageHeader {...getComponentHeader('Breadcrumbs')} />
    </main>
  );
}
