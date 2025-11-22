import { Copyright } from 'lucide-react';
import { translations } from './data';
import { useQuiz, useLanguage, useAIAnalysis } from './hooks';
import { getResult, getQuestionIcons } from './services';
import {
  StartScreen,
  QuizScreen,
  ResultScreen,
  LanguageSelector,
} from './components/organisms';
import './App.css';

function App() {
  // 1. Language State
  const { lang, isLangOpen, changeLanguage, toggleLanguageMenu } =
    useLanguage('vi');
  const t = translations[lang];
  const qData = t.questions;

  // 2. Quiz Logic
  const {
    gameState,
    setGameState,
    currentQuestion,
    scores,
    userChoices,
    handleAnswer,
    resetQuiz: resetQuizState,
  } = useQuiz(qData);

  // 3. AI Analysis Logic
  const {
    isAnalyzing,
    aiAnalysis,
    aiError,
    analyzeWithGemini,
    reset: resetAI,
  } = useAIAnalysis();

  // 4. Handlers
  const handleStart = () => setGameState('quiz');

  const handleAIAnalyze = () => {
    analyzeWithGemini(userChoices, lang, translations);
  };

  const handleRetry = () => {
    resetQuizState();
    resetAI();
  };

  // 5. Computed Data
  const result = getResult(scores, qData, t);
  const questionIcons = getQuestionIcons();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans p-6 md:p-12 flex flex-col items-center justify-center selection:bg-stone-200 selection:text-stone-900 relative">
      <LanguageSelector
        lang={lang}
        onLanguageChange={changeLanguage}
        isOpen={isLangOpen}
        onToggle={toggleLanguageMenu}
      />

      <div className="grow w-full flex items-center justify-center">
        {gameState === 'start' && (
          <StartScreen translations={t} onStart={handleStart} />
        )}

        {gameState === 'quiz' && (
          <QuizScreen
            question={qData[currentQuestion]}
            currentQuestionIndex={currentQuestion}
            totalQuestions={qData.length}
            questionIcons={questionIcons}
            onAnswer={handleAnswer}
            optionHeader={t.quiz.optionHeader}
          />
        )}

        {gameState === 'result' && (
          <ResultScreen
            scores={scores}
            totalQuestions={qData.length}
            result={result}
            translations={t}
            isAnalyzing={isAnalyzing}
            aiAnalysis={aiAnalysis}
            aiError={aiError}
            onAIAnalyze={handleAIAnalyze}
            onRetry={handleRetry}
          />
        )}
      </div>

      <div className="mt-12 text-center border-t border-stone-100 pt-6 w-full max-w-4xl">
        <p className="text-[10px] md:text-xs text-stone-400 font-sans font-light tracking-wide flex flex-col md:flex-row items-center justify-center gap-1">
          <span className="flex items-center gap-1">
            <Copyright size={10} />
            {t.footer}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
