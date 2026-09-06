import { Link } from 'react-router-dom';
import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { componentCategories } from '../../constants';
import '../Pages.css';

export function CatalogPage() {
  return (
    <main className='page'>
      <BackLink {...getBackLinkConfig('catalog')} />
      <PageHeader {...getPageHeader('catalog')} />

      {componentCategories.map((category) => (
        <section
          key={category.id}
          className='component-section'
          aria-labelledby={`category-${category.id}`}
        >
          <header className='component-section__header'>
            <h2 id={`category-${category.id}`}>{category.title}</h2>
            <p>{category.description}</p>
          </header>

          <div className='component-grid' aria-label={category.title}>
            {category.components.map((component) => (
              <Link
                key={component.name}
                to={component.path}
                className='component-card'
              >
                <span className='component-card__icon' aria-hidden='true'>{component.icon}</span>

                <div>
                  <h3>{component.name}</h3>
                  <p>{component.description}</p>
                </div>

                <span className='component-card__arrow' aria-hidden='true'>→</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
