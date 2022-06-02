import React from 'react';

import style from './logo.module.scss';
import logo from './logo.png';

export const Logo: React.FC = () => {
  return (
    <img height={44} width={44} className={style.root} alt="logo" src={logo} />
  );
};
