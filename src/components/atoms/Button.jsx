export const Button = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'rounded-[4px] font-medium text-sm tracking-widest uppercase transition-all duration-300 font-sans';
  
  const variants = {
    primary: 'px-10 py-4 bg-stone-900 text-stone-50 hover:bg-stone-800 active:scale-95 shadow-lg shadow-stone-200/50',
    secondary: 'px-8 py-3 border border-stone-300 text-stone-600 hover:bg-stone-800 hover:text-white hover:border-stone-800',
    outline: 'p-4 border border-stone-200 bg-white hover:border-stone-800 hover:shadow-lg hover:shadow-stone-100/50',
    danger: 'p-4 bg-red-50 text-red-600 text-sm border border-red-100 hover:bg-red-100'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
