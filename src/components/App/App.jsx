import React from 'react';
import style from './style.module.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../';
import { isNight } from '../../utils/common';
import { Home } from '../../pages';

function App() {
  isNight()
    ? document.body.classList.add(style.dark)
    : document.body.classList.remove(style.dark);
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/*       
            
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.PRODUCT} element={<ProductCard/>} />
            <Route path={ROUTES.PROFILE} element={<Profile/>} />
            <Route path={ROUTES.CATEGORY} element={<SingleCategory/>} /> 
        */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
