import { useState } from 'react';

export const useLanguage = (defaultLang = 'vi') => {
  const [lang, setLang] = useState(defaultLang);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLangOpen(!isLangOpen);
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
    setIsLangOpen(false);
  };

  return {
    lang,
    isLangOpen,
    changeLanguage,
    toggleLanguageMenu
  };
};
