export const Icon = ({ 
  Icon, 
  size = 24, 
  className = '', 
  strokeWidth = 1.5,
  ...props 
}) => {
  return (
    <Icon 
      size={size} 
      strokeWidth={strokeWidth} 
      className={`text-stone-600 ${className}`}
      {...props}
    />
  );
};
