import {storage} from '../config/storage';
import {createContext, useContext, useEffect, useState} from 'react';
import {en} from '../lang/en';
import {tr} from '../lang/tr';

interface LocalizationContextProps {
  children: React.ReactNode;
}

interface LocalizationContextType {
  strings: any;
  changeLanguage: (locale: string) => void;
}

const LocalizationContext = createContext<LocalizationContextType>({
  strings: (key: string) => key,
  changeLanguage: (locale: string) => {},
});

export const LocalizationProvider = ({children}: LocalizationContextProps) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const getLanguage = () => {
      const language = storage.getString('language');
      if (language) {
        setLocale(language);
      }
    };
    getLanguage();
  }, []);

  const changeLanguage = (locale: string) => {
    storage.set('language', locale);
    setLocale(locale);
  };

  const strings = locale === 'en' ? en : tr;

  return (
    <LocalizationContext.Provider
      value={{
        strings,
        changeLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
