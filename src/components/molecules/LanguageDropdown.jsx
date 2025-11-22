import { ChevronDown } from 'lucide-react';
import { Button, Text } from '../atoms';

export const LanguageDropdown = ({ 
  currentLang, 
  languages, 
  isOpen, 
  onToggle, 
  onSelect 
}) => {
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 text-sm font-sans hover:border-stone-800 transition-colors shadow-sm"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden md:inline text-stone-600">{currentLang?.label}</span>
        <ChevronDown size={14} className={`text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-stone-200 rounded-lg shadow-lg py-2 min-w-[140px] animate-in fade-in slide-in-from-top-2">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelect(l.code)}
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-stone-50 ${currentLang?.code === l.code ? 'text-stone-900 font-medium bg-stone-50' : 'text-stone-600'}`}
            >
              <span className="text-lg">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
