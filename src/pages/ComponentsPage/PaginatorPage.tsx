import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function PaginatorPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('navigation')} />
      <PageHeader {...getComponentHeader('Paginator')} />
    </main>
  );
}
