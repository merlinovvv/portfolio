import React from 'react';
import style from './style.module.css';
import { Header, Footer, AppRoutes } from '../';
import { isNight } from '../../utils/common';
import Background from '../Background/Background';

function App() {
  isNight()
    ? document.body.classList.add(style.dark)
    : document.body.classList.remove(style.dark);

  return (
    <div className={style.app}>
      <Background />
      <div className={style.container}>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
