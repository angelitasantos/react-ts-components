import { Link } from 'react-router-dom';
import { BackLink, PageHeader } from '../../components';
import { getBackLinkConfig, getPageHeader } from '../../utils';
import { componentCategories } from '../../constants';
import '../Pages.css';

export function ContentPage() {
  const category = componentCategories.find(cat => cat.id === 'content');

  return (
    <main className="page">
      <BackLink {...getBackLinkConfig('examples')} />
      <PageHeader {...getPageHeader('content')} />

      {category && (
        <section className="component-category">
          <div className="component-grid">
            {category.components.map((component) => (
              <Link
                key={component.name}
                to={component.path}
                className="component-card"
              >
                <span className="component-card__icon" aria-hidden="true">{component.icon}</span>

                <div>
                  <h3>{component.name}</h3>
                  <p>{component.description}</p>
                </div>

                <span className="component-card__arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
