import React from 'react';
import style from './style.module.scss';
import ME from '../../img/me.jpg';
import { isNight } from '../../utils/common';
import { Stack } from '../../components';

function Home() {
  return (
    <div className={`${style.main} ${isNight() ? style.dark : ''}`}>
      <div className={style.intro}>
        <h1 className={style.intro_title}>
          Hi 👋, <br /> My name is <br />
          <span className={style.gradient}>Andrii.</span> <br /> I build things
          for web
        </h1>
        <img className={style.intro_img} src={ME} alt="" />
      </div>
      <Stack home={true}/>
    </div>
  );
}

export default Home;
