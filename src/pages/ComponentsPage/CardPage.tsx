import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function CardPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('content')} />
      <PageHeader {...getComponentHeader('Card')} />
    </main>
  );
}
