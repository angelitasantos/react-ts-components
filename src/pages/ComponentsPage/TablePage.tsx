import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function TablePage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('content')} />
      <PageHeader {...getComponentHeader('Table')} />
    </main>
  );
}
