import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <main className='not-found-page'>
      <section className='not-found-content'>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>O endereço acessado não corresponde a uma página do catálogo.</p>

        <Link to={ROUTES.HOME} className='not-found-link'>
          Voltar ao Catálogo
        </Link>
      </section>
    </main>
  );
}