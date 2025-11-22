export const Card = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-white p-8 md:p-12 rounded-[4px] border border-stone-200 shadow-sm',
    light: 'bg-stone-50 p-6 rounded-[4px] border border-stone-200',
    error: 'p-4 bg-red-50 text-red-600 text-sm rounded-[4px] border border-red-100'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
