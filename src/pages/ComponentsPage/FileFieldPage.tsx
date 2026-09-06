import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function FileFieldPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('fields')} />
      <PageHeader {...getComponentHeader('FileField')} />
    </main>
  );
}