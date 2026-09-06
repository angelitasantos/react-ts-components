import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import '../Pages.css';

export function DateFieldPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('date')} />
    </main>
  );
}
