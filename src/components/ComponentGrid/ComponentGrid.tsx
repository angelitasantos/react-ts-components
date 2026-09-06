import { Link } from 'react-router-dom';
import { CatalogComponent } from '../../types';
import './ComponentGrid.css';

interface ComponentGridProps {
  components: CatalogComponent[];
}

export function ComponentGrid({ components }: ComponentGridProps) {
  return (
    <section className='component-section'>
      <div className='component-grid'>
        {components.map((component) => (
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
  );
}
