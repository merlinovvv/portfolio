import React from 'react';
import style from './style.module.scss';
import ProjectBlock from '../ProjectBlock/ProjectBlock';
import { isNight, dataBase } from '../../utils/common';
function Projects({ home }) {
  return (
    <div className={`${style.projects} ${isNight() ? style.dark : ''}`}>
      <div
        className={style.text}
        style={!home ? { textAlign: 'start' } : { textAlign: 'center' }}>
        <h2 className={style.title}>Projects</h2>
        <p className={style.sub_title}>Projects I have done to date</p>
      </div>
      <div className={style.projects_list}>
        {dataBase.map((item) => {
          const { id } = item;
          return <ProjectBlock key={id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
