import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './router/router.tsx';
import { UserProvider } from './providers/UserProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
    <Router />
    </UserProvider>
  </React.StrictMode>
);
