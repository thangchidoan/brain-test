import { Card, Text } from '../atoms';

export const QuestionOption = ({ 
  type, 
  text, 
  onClick,
  optionHeader
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative p-8 h-full text-left rounded-[4px] border border-stone-200 bg-white hover:border-stone-800 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-stone-100/50 flex flex-col justify-between min-h-[200px]"
    >
      <div className="mb-4">
        <span className="inline-block text-xs font-bold px-2 py-1 rounded-[4px] border border-stone-200 text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300 font-sans">
          {optionHeader} {type}
        </span>
      </div>
      <span className="text-stone-600 font-light text-lg leading-relaxed group-hover:text-stone-900 transition-colors font-sans">
        {text}
      </span>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-stone-800 group-hover:w-full transition-all duration-500 rounded-b-[4px]"></div>
    </button>
  );
};
