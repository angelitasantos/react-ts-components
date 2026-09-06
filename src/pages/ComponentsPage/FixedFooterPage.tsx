import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function FixedFooterPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('navigation')} />
      <PageHeader {...getComponentHeader('FixedFooter')} />
    </main>
  );
}
