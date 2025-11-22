import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from '../atoms';

export const AIAnalysisButton = ({ 
  isAnalyzing, 
  onClick, 
  hasAnalysis,
  buttonText,
  loadingText
}) => {
  if (isAnalyzing) {
    return (
      <div className="w-full p-4 border border-stone-200 bg-stone-50 rounded-[4px] flex items-center justify-center gap-3 text-stone-500 font-sans text-sm">
        <Loader2 size={18} className="animate-spin" />
        {loadingText}
      </div>
    );
  }

  if (hasAnalysis) {
    return null;
  }

  return (
    <Button 
      onClick={onClick}
      variant="primary"
      className="w-full flex items-center justify-center gap-2"
    >
      <Sparkles size={16} className="text-yellow-200" />
      {buttonText}
    </Button>
  );
};
