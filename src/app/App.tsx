import 'antd/dist/antd.css';
import React from 'react';

import { Routes } from 'pages';

import { Providers } from './Providers';

export const App: React.FC = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};
