/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, useContext, useState } from 'react';
import { LOCALES, messages } from '../translations';
import { IntlProvider } from 'react-intl';

interface ContextI {
  changeLocale: (pramr: string) => void;
}

export const LanguageContext = createContext<ContextI>({
  changeLocale: () => {},
});

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const i18nConfig = {
    locale:
      navigator.languages[0] !== 'en-US' && navigator.languages[0] !== 'es'
        ? 'es'
        : navigator.languages[0],
  };

  const [locale, setLocale] = useState<string>(i18nConfig.locale);

  const changeLocale = (locale: string) => {
    setLocale(locale);
  };

  return (
    <LanguageContext.Provider value={{ changeLocale }}>
      <IntlProvider
        // @ts-ignore
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.SPANISH}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('LanguageContext need to be in a context provider');
  }
  return context;
};