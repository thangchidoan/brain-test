import { Card, ProgressBar, Text } from '../atoms';

export const ScoreIndicator = ({ 
  label, 
  percentage,
  variant = 'default'
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs uppercase tracking-widest text-stone-500 mb-1 font-sans">
        <span>{label}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <ProgressBar percentage={percentage} variant={variant === 'secondary' ? 'secondary' : 'default'} />
    </div>
  );
};
