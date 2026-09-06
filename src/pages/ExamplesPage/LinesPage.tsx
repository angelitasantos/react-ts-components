import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import '../Pages.css';

export function LinesPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('lines')} />
    </main>
  );
}
