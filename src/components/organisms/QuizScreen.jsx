import { QuestionOption } from '../molecules';
import { Text } from '../atoms';

export const QuizScreen = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions,
  questionIcons,
  onAnswer,
  optionHeader
}) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end mb-12 border-b border-stone-200 pb-4">
        <span className="font-serif text-2xl text-stone-800 italic">0{currentQuestionIndex + 1}</span>
        <span className="text-xs tracking-widest text-stone-400 uppercase font-sans">
          Question 0{totalQuestions}
        </span>
      </div>

      <div className="mb-12">
        <div className="flex justify-center md:justify-start">
          {questionIcons[currentQuestionIndex]}
        </div>
        <Text as="h2" variant="heading">
          {question.question}
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {question.options.map((opt) => (
          <QuestionOption
            key={opt.type}
            type={opt.type}
            text={opt.text}
            onClick={() => onAnswer(opt.type, opt.text)}
            optionHeader={optionHeader}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-stone-100">
        <div 
          className="h-full bg-stone-800 transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
