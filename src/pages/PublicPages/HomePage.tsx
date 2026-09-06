import { Link } from 'react-router-dom';
import { PageHeader } from '../../components';
import { getPageHeader } from '../../utils';
import { ROUTES, categories } from '../../constants';
import '../Pages.css';

export function HomePage() {
  return (
    <main className='page'>
      <PageHeader {...getPageHeader('home')} />

      <section className='component-grid' aria-label='Categorias de componentes'>
        {categories.map((category) => (
          <Link key={category.path} to={category.path} className='component-card'>
            <span className='component-card__icon' aria-hidden='true'>{category.icon}</span>

            <div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>

            <span className='component-card__arrow' aria-hidden='true'>→</span>
          </Link>
        ))}
      </section>

      <section className='home-info'>
        <h2>Catálogo completo</h2>
        <p>Consulte todos os componentes disponíveis e acesse exemplos individuais quando necessário.</p>

        <Link to={ROUTES.CATALOG} className='home-info__link'>Ver catálogo completo</Link>
      </section>
    </main>
  );
}