export const ProgressBar = ({ 
  percentage = 0, 
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-stone-800',
    secondary: 'bg-stone-400'
  };

  return (
    <div className={`w-full bg-stone-100 h-px ${className}`}>
      <div 
        className={`${variants[variant]} h-0.5 transition-all duration-1000`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
