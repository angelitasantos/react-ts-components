import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function ListPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('content')} />
      <PageHeader {...getComponentHeader('List')} />
    </main>
  );
}
