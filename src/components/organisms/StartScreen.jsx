import { BrainHeader, ButtonWithIcon } from '../molecules';
import { ArrowRight } from 'lucide-react';
import { Leaf } from 'lucide-react';

export const StartScreen = ({ 
  translations, 
  onStart 
}) => {
  const t = translations;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-10 animate-in fade-in duration-700 relative w-full max-w-lg mx-auto">
      <BrainHeader
        tag={t.start.tag}
        title={t.start.title}
        description={t.start.desc}
        tagIcon={Leaf}
      />

      <ButtonWithIcon
        icon={ArrowRight}
        onClick={onStart}
        variant="primary"
        iconPosition="right"
      >
        {t.start.btn}
      </ButtonWithIcon>
    </div>
  );
};
