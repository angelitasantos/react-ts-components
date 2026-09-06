import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function RadioButtonPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('actions')} />
      <PageHeader {...getComponentHeader('RadioButton')} />
    </main>
  );
}