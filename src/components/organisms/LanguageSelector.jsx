import { LanguageDropdown } from '../molecules';

export const LanguageSelector = ({ 
  lang, 
  onLanguageChange, 
  isOpen, 
  onToggle 
}) => {
  const languages = [
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];
  
  const currentLang = languages.find(l => l.code === lang);

  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
      <LanguageDropdown
        currentLang={currentLang}
        languages={languages}
        isOpen={isOpen}
        onToggle={onToggle}
        onSelect={onLanguageChange}
      />
    </div>
  );
};
