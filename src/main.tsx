import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './index.css';
import { IntlProvider } from 'react-intl';
import { messages } from './translations';

const i18nConfig = {
  locale:
    navigator.languages[0] !== 'en-US' && navigator.languages[0] !== 'es'
      ? 'es'
      : navigator.languages[0],
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider
      messages={messages[i18nConfig.locale]}
      locale={i18nConfig.locale}
      defaultLocale={i18nConfig.locale}
    >
      <RouterProvider router={router} />
    </IntlProvider>
  </React.StrictMode>
);
