import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function SearchFieldPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('fields')} />
      <PageHeader {...getComponentHeader('SearchField')} />
    </main>
  );
}