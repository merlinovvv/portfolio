import React from 'react';
import style from './style.module.scss';
import ProjectBlock from '../ProjectBlock/ProjectBlock';
import { isNight, dataBase } from '../../utils/common';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
function Projects() {
  const location = useLocation();

  return (
    <motion.main
      className={`${style.projects} ${isNight() ? style.dark : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className={style.text}>
        <h2 className={style.title}>Projects</h2>
        <p className={style.sub_title}>Projects I have done to date</p>
      </div>
      <div className={style.projects_list}>
        {location.pathname === '/projects'
          ? dataBase.map((item) => {
              const { id } = item;
              return <ProjectBlock key={id} {...item} />;
            })
          : dataBase.slice(0, 6).map((item) => {
              const { id } = item;
              return <ProjectBlock key={id} {...item} />;
            })}
      </div>
      {location.pathname !== '/projects' && (
        <Link className={style.project_btn} to="/projects">
          View all
        </Link>
      )}
    </motion.main>
  );
}

export default Projects;
