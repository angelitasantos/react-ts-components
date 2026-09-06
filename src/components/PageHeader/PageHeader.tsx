import { PageHeaderProps } from '../../types';
import './PageHeader.css';

export function PageHeader({ 
  eyebrow = 'Exemplo de componentes',
  title, 
  description,
  className = '' 
}: PageHeaderProps) {
  return (
    <header className={`page-header ${className}`}>
      {eyebrow && (
        <p className='page-header__eyebrow'>{eyebrow}</p>
      )}
      <h1>{title}</h1>
      {description && (
        <p>{description}</p>
      )}
    </header>
  );
}