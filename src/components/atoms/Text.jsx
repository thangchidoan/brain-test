export const Text = ({ 
  as = 'p', 
  variant = 'body', 
  className = '', 
  children,
  ...props 
}) => {
  const variants = {
    title: 'text-4xl md:text-5xl font-serif text-stone-800 leading-tight',
    heading: 'text-2xl md:text-3xl font-serif text-stone-800 leading-snug',
    subheading: 'text-xl font-serif text-stone-800',
    body: 'text-stone-600 font-light text-lg leading-relaxed font-sans',
    caption: 'text-xs font-bold tracking-widest text-stone-400 uppercase font-sans',
    small: 'text-sm text-stone-500 font-sans font-light'
  };

  const Component = as;

  return (
    <Component className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
