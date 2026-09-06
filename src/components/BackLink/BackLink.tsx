import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './BackLink.css';

interface BackLinkProps {
  to?: string;
  label?: string;
  className?: string;
  showIcon?: boolean;
  icon?: string;
  color?: 'green' | 'orange' | 'blue';
}

export function BackLink({ 
  to = ROUTES.HOME, 
  label = 'Voltar para Home',
  className = '',
  showIcon = true,
  icon = '←',
  color = 'green'
}: BackLinkProps) {
  const colorClass = {
    green: 'back-link--green',
    orange: 'back-link--orange',
    blue: 'back-link--blue',
  }[color];

  return (
    <Link 
      to={to} 
      className={`back-link ${colorClass} ${className}`}
    >
      {showIcon && <span className='back-link__icon'>{icon}</span>}
      {label}
    </Link>
  );
}
