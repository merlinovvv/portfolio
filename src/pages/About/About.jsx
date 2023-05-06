import React from 'react';
import style from './style.module.scss';
import { isNight } from '../../utils/common';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.main
      className={`${style.about} ${isNight() ? style.dark : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className={style.about_block}>
        <h2 className={style.title}>About me</h2>
        <p className={style.text}>
          I've been studying Front-end for more than a year and during this time
          I've learned React and its ecosystem quite well and, of course, I have
          good experience with the base: JavaScript, HTML and CSS.
          <br />
          <br />
          I can create interactive and responsive web applications using modern
          technologies and best practices. I am able to work both independently
          and in a team, learn quickly and am ready to accept challenges to
          constantly improve my skills.
          <br />
          <br />
          I also have basic knowledge of Redux, Node.js, Express, Socket.io and
          MongoDB. I am ready to develop and deepen my knowledge in these
          technologies.
          <br />
          <br />
          I worked on online shopping, an air alert map, a weather app. Layout
          of both landing pages and corporate sites. Made various telegram bots.
          <br />
          <br />
          If you are looking for a young, ambitious, strategically savvy,
          scrupulous React Junior Front-end developer who is ready to take on
          challenges and contribute to your team, I am ready to work with you!
        </p>
      </div>
      <div className={style.education_block}>
        <h2 className={style.title}>Education</h2>
        <div className={style.institution}>
          <div className={style.first}>
            <p className={style.name_specialty}>Computer engineering</p>
            <p className={style.name_institution}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.333313 0.5V9.5H4.33331V7.75H5.66665V9.5H9.66665V0.5H0.333313ZM1.66665 1.5H2.99998V2.5H1.66665V1.5ZM4.33331 1.5H5.66665V2.5H4.33331V1.5ZM6.99998 1.5H8.33331V2.5H6.99998V1.5ZM1.66665 3.5H2.99998V4.5H1.66665V3.5ZM4.33331 3.5H5.66665V4.5H4.33331V3.5ZM6.99998 3.5H8.33331V4.5H6.99998V3.5ZM1.66665 5.5H2.99998V6.5H1.66665V5.5ZM4.33331 5.5H5.66665V6.5H4.33331V5.5ZM6.99998 5.5H8.33331V6.5H6.99998V5.5ZM1.66665 7.5H2.99998V8.5H1.66665V7.5ZM6.99998 7.5H8.33331V8.5H6.99998V7.5Z"
                  fill="#A7A7A7"
                />
              </svg>
              Volodymyr Dahl East Ukrainian national university
            </p>
          </div>
          <div className={style.second}>
            <p className={style.employment}>Full Time</p>
            <p className={style.time}>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.33329 5.5C3.15648 5.5 2.98691 5.44732 2.86189 5.35355C2.73686 5.25979 2.66663 5.13261 2.66663 5C2.66663 4.86739 2.73686 4.74021 2.86189 4.64645C2.98691 4.55268 3.15648 4.5 3.33329 4.5C3.5101 4.5 3.67967 4.55268 3.8047 4.64645C3.92972 4.74021 3.99996 4.86739 3.99996 5C3.99996 5.13261 3.92972 5.25979 3.8047 5.35355C3.67967 5.44732 3.5101 5.5 3.33329 5.5ZM3.33329 7.5C3.15648 7.5 2.98691 7.44732 2.86189 7.35355C2.73686 7.25979 2.66663 7.13261 2.66663 7C2.66663 6.86739 2.73686 6.74021 2.86189 6.64645C2.98691 6.55268 3.15648 6.5 3.33329 6.5C3.5101 6.5 3.67967 6.55268 3.8047 6.64645C3.92972 6.74021 3.99996 6.86739 3.99996 7C3.99996 7.13261 3.92972 7.25979 3.8047 7.35355C3.67967 7.44732 3.5101 7.5 3.33329 7.5ZM5.33329 7C5.33329 7.13261 5.40353 7.25979 5.52855 7.35355C5.65358 7.44732 5.82315 7.5 5.99996 7.5C6.17677 7.5 6.34634 7.44732 6.47136 7.35355C6.59639 7.25979 6.66663 7.13261 6.66663 7C6.66663 6.86739 6.59639 6.74021 6.47136 6.64645C6.34634 6.55268 6.17677 6.5 5.99996 6.5C5.82315 6.5 5.65358 6.55268 5.52855 6.64645C5.40353 6.74021 5.33329 6.86739 5.33329 7ZM8.66663 7.5C8.48981 7.5 8.32025 7.44732 8.19522 7.35355C8.0702 7.25979 7.99996 7.13261 7.99996 7C7.99996 6.86739 8.0702 6.74021 8.19522 6.64645C8.32025 6.55268 8.48981 6.5 8.66663 6.5C8.84344 6.5 9.01301 6.55268 9.13803 6.64645C9.26305 6.74021 9.33329 6.86739 9.33329 7C9.33329 7.13261 9.26305 7.25979 9.13803 7.35355C9.01301 7.44732 8.84344 7.5 8.66663 7.5ZM5.33329 5C5.33329 5.13261 5.40353 5.25979 5.52855 5.35355C5.65358 5.44732 5.82315 5.5 5.99996 5.5C6.17677 5.5 6.34634 5.44732 6.47136 5.35355C6.59639 5.25979 6.66663 5.13261 6.66663 5C6.66663 4.86739 6.59639 4.74021 6.47136 4.64645C6.34634 4.55268 6.17677 4.5 5.99996 4.5C5.82315 4.5 5.65358 4.55268 5.52855 4.64645C5.40353 4.74021 5.33329 4.86739 5.33329 5ZM8.66663 5.5C8.48981 5.5 8.32025 5.44732 8.19522 5.35355C8.0702 5.25979 7.99996 5.13261 7.99996 5C7.99996 4.86739 8.0702 4.74021 8.19522 4.64645C8.32025 4.55268 8.48981 4.5 8.66663 4.5C8.84344 4.5 9.01301 4.55268 9.13803 4.64645C9.26305 4.74021 9.33329 4.86739 9.33329 5C9.33329 5.13261 9.26305 5.25979 9.13803 5.35355C9.01301 5.44732 8.84344 5.5 8.66663 5.5ZM3.33329 2.5C3.15648 2.5 2.98691 2.55268 2.86189 2.64645C2.73686 2.74021 2.66663 2.86739 2.66663 3C2.66663 3.13261 2.73686 3.25979 2.86189 3.35355C2.98691 3.44732 3.15648 3.5 3.33329 3.5H8.66663C8.84344 3.5 9.01301 3.44732 9.13803 3.35355C9.26305 3.25979 9.33329 3.13261 9.33329 3C9.33329 2.86739 9.26305 2.74021 9.13803 2.64645C9.01301 2.55268 8.84344 2.5 8.66663 2.5H3.33329Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0.5C1.46957 0.5 0.960859 0.658035 0.585787 0.93934C0.210714 1.22064 0 1.60218 0 2V8C0 8.39782 0.210714 8.77936 0.585787 9.06066C0.960859 9.34196 1.46957 9.5 2 9.5H10C10.5304 9.5 11.0391 9.34196 11.4142 9.06066C11.7893 8.77936 12 8.39782 12 8V2C12 1.60218 11.7893 1.22064 11.4142 0.93934C11.0391 0.658035 10.5304 0.5 10 0.5H2ZM10 1.5H2C1.82319 1.5 1.65362 1.55268 1.5286 1.64645C1.40357 1.74021 1.33333 1.86739 1.33333 2V8C1.33333 8.13261 1.40357 8.25979 1.5286 8.35355C1.65362 8.44732 1.82319 8.5 2 8.5H10C10.1768 8.5 10.3464 8.44732 10.4714 8.35355C10.5964 8.25979 10.6667 8.13261 10.6667 8V2C10.6667 1.86739 10.5964 1.74021 10.4714 1.64645C10.3464 1.55268 10.1768 1.5 10 1.5Z"
                  fill="#A7A7A7"
                />
              </svg>
              Sep 2020 - Jul 2024
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default About;
