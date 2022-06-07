import 'antd/dist/antd.min.css';
import React from 'react';

import { Routes } from 'pages';

import { Providers } from './Providers';
import './config';

export const App: React.FC = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};
