import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton.tsx';
import { SecondaryButton } from './components/atoms/button/SecondaryButton.tsx';
import { SerchInput } from './components/molecules/SerchInput.tsx';
import { UserCard } from './components/organisms/user/UserCard.tsx';
import { HeaderOnly } from './components/templates/HeaderOnly.tsx';
import { DefaultLayout } from './components/templates/DefaultLayout.js';
import { Router } from './router/router.tsx';
const user = {
  name: 'ジャケ',
  image:
    'https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: '1233@.com',
  phone: '000-000-0000',
  company: {
    name: 'テスト',
  },
  website: 'https://google.com',
};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
