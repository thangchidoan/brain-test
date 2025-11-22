import { Wind, Sparkles, Leaf, RefreshCcw } from 'lucide-react';
import { Card, Text, Brain, Button } from '../atoms';
import { ScoreIndicator, AIAnalysisButton, ButtonWithIcon } from '../molecules';

export const ResultScreen = ({ 
  scores, 
  totalQuestions,
  result,
  translations,
  isAnalyzing,
  aiAnalysis,
  aiError,
  onAIAnalyze,
  onRetry
}) => {
  const t = translations;
  const pA = (scores.A / totalQuestions) * 100;
  const pB = (scores.B / totalQuestions) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-6">
          <Card variant="default" className="aspect-square flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Wind size={100} strokeWidth={0.5} />
            </div>

            <div className="space-y-8 relative z-10">
              <ScoreIndicator 
                label={t.result.leftBrain} 
                percentage={pA}
              />
              <ScoreIndicator 
                label={t.result.rightBrain} 
                percentage={pB}
                variant="secondary"
              />

              <div className="pt-8 flex justify-center">
                <div className="text-center">
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    <div className="absolute inset-0 bg-stone-200 rounded-sm blur-2xl opacity-20"></div>
                  </div>
                  <Text variant="subheading">{result.title}</Text>
                </div>
              </div>
            </div>
          </Card>
          
          <AIAnalysisButton
            isAnalyzing={isAnalyzing}
            hasAnalysis={!!aiAnalysis}
            onClick={onAIAnalyze}
            buttonText={t.result.aiBtn}
            loadingText={t.result.aiLoading}
          />
        </div>

        <div className="space-y-8">
          <div>
            <Text variant="caption" className="block mb-2">{t.result.header}</Text>
            <Text as="h2" variant="heading" className="mb-6">{result.subtitle}</Text>
            <Text variant="body" className="border-l-2 border-stone-200 pl-6">
              {result.desc}
            </Text>
          </div>

          {aiAnalysis && (
            <Card variant="light" className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 mb-4 text-stone-800">
                <Sparkles size={18} className="text-yellow-600" />
                <Text variant="subheading" className="font-medium">{t.result.aiTitle}</Text>
              </div>
              <div className="prose prose-stone prose-sm font-light font-sans text-stone-600 leading-relaxed whitespace-pre-line">
                {aiAnalysis}
              </div>
            </Card>
          )}

          {aiError && (
            <Card variant="error">
              {aiError}
            </Card>
          )}

          {!aiAnalysis && (
            <Card variant="light">
              <Text variant="subheading" className="mb-2 flex items-center gap-2">
                <Leaf size={16} className="text-stone-600"/>
                {t.result.adviceTitle}
              </Text>
              <Text variant="small" className="italic">
                "{result.advice}"
              </Text>
            </Card>
          )}

          <ButtonWithIcon
            icon={RefreshCcw}
            onClick={onRetry}
            variant="secondary"
            iconPosition="left"
          >
            {t.result.retryBtn}
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};
