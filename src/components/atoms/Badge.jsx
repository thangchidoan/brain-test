export const Badge = ({ 
  children, 
  icon: Icon = null,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-stone-200 text-stone-500 text-xs uppercase tracking-widest font-sans ${className}`}>
      {Icon && <Icon size={12} />}
      <span>{children}</span>
    </div>
  );
};
