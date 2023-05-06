import React from 'react';
import style from './style.module.scss';
import ME from '../../img/me.jpg';
import { isNight } from '../../utils/common';
import { Projects, Stack } from '../../components';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.main
    className={`${style.main} ${isNight() ? style.dark : ''}`}
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

        <div className={style.intro}>
          <h1 className={style.intro_title}>
            Hi 👋, <br /> My name is <br />
            <span className={style.gradient}>Andriy.</span> <br /> I build
            things for web
          </h1>
          <img className={style.intro_img} src={ME} alt="" />
        </div>
        <Stack home={true} />
        <Projects home={true} />
    </motion.main>
  );
}

export default Home;
