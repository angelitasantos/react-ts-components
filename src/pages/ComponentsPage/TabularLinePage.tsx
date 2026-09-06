import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function TabularLinePage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('lines')} />
      <PageHeader {...getComponentHeader('TabularLine')} />
    </main>
  );
}