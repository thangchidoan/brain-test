import { Brain } from 'lucide-react';
import { Text, Badge } from '../atoms';

export const BrainHeader = ({ 
  tag, 
  title, 
  description,
  tagIcon = null
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-10 animate-in fade-in duration-700 relative w-full max-w-lg mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-stone-200 rounded-[4px] blur-2xl opacity-20 scale-150"></div>
        <Brain size={80} className="text-stone-800 relative z-10" strokeWidth={1} />
      </div>
      
      <div className="space-y-4 px-4">
        <Badge icon={tagIcon}>
          {tag}
        </Badge>
        <Text as="h1" variant="title">
          {title}
        </Text>
        <Text variant="body">
          {description}
        </Text>
      </div>
    </div>
  );
};
