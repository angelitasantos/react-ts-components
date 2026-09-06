import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function NavbarPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('navigation')} />
      <PageHeader {...getComponentHeader('Navbar')} />
    </main>
  );
}
