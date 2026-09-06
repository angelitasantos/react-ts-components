import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getComponentHeader } from '../../utils';
import '../Pages.css';

export function CheckboxPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('actions')} />
      <PageHeader {...getComponentHeader('CheckBox')} />
    </main>
  );
}