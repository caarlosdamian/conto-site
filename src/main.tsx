import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { LanguageContextProvider } from './context/languageContext';
import './styles/index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <RouterProvider router={router} />
    </LanguageContextProvider>
  </React.StrictMode>
);
