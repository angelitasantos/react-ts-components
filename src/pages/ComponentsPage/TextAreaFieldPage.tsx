import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function TextAreaFieldPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('fields')} />
      <PageHeader {...getComponentHeader('TextAreaField')} />
    </main>
  );
}