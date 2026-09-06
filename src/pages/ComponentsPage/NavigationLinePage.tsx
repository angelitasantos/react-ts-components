import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function NavigationLinePage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('lines')} />
      <PageHeader {...getComponentHeader('NavigationLine')} />
    </main>
  );
}