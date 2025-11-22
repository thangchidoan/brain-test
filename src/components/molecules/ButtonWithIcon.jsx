import { ArrowRight } from 'lucide-react';
import { Button } from '../atoms';

export const ButtonWithIcon = ({ 
  icon: Icon = null, 
  onClick, 
  children, 
  iconPosition = 'right',
  variant = 'primary',
  ...props 
}) => {
  return (
    <Button onClick={onClick} variant={variant} className="flex items-center gap-3" {...props}>
      {iconPosition === 'left' && Icon && <Icon className="w-4 h-4" />}
      {children}
      {iconPosition === 'right' && Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </Button>
  );
};
