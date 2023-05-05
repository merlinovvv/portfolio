import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { isNight } from '../../utils/common';

function Footer() {
  return (
    <footer className={`${style.footer} ${isNight() ? style.dark : ''}`}>
      <div className={style.top_footer}>
        <Link className={style.logo} to="/">
          A.Merlinov
        </Link>
        <nav className={style.contacts}>
          <a className={style.contacts_link} href="tel:+380963978606">
            +380 96 397 8606
          </a>
          <a
            className={style.contacts_link}
            href="mailto:merlinovandrej@gmail.com">
            merlinovandrej@gmail.com
          </a>
          <div className={style.contacts_social}>
            <a
              className={style.social_link}
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.88228 0 15.3794C0 22.1848 4.29375 27.9328 10.2562 29.9706C11.0062 30.1052 11.2875 29.6438 11.2875 29.2401C11.2875 28.8748 11.2688 27.6637 11.2688 26.3757C7.5 27.087 6.525 25.4337 6.225 24.5686C6.05625 24.1264 5.325 22.7615 4.6875 22.3963C4.1625 22.1079 3.4125 21.3966 4.66875 21.3774C5.85 21.3582 6.69375 22.4924 6.975 22.9538C8.325 25.2799 10.4812 24.6263 11.3437 24.2226C11.475 23.2229 11.8688 22.5501 12.3 22.1656C8.9625 21.7811 5.475 20.4546 5.475 14.572C5.475 12.8995 6.05625 11.5153 7.0125 10.4388C6.8625 10.0543 6.3375 8.4779 7.1625 6.36323C7.1625 6.36323 8.41875 5.95952 11.2875 7.93962C12.4875 7.59358 13.7625 7.42056 15.0375 7.42056C16.3125 7.42056 17.5875 7.59358 18.7875 7.93962C21.6562 5.9403 22.9125 6.36323 22.9125 6.36323C23.7375 8.4779 23.2125 10.0543 23.0625 10.4388C24.0188 11.5153 24.6 12.8803 24.6 14.572C24.6 20.4738 21.0938 21.7811 17.7562 22.1656C18.3 22.6462 18.7688 23.5689 18.7688 25.0108C18.7688 27.0678 18.75 28.721 18.75 29.2401C18.75 29.6438 19.0312 30.1244 19.7812 29.9706C22.759 28.9398 25.3465 26.9776 27.1796 24.3602C29.0127 21.7427 29.9991 18.6018 30 15.3794C30 6.88228 23.2875 0 15 0Z"
                  fill="#A7A7A7"
                />
              </svg>
            </a>
            <a
              className={style.social_link}
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM21.96 10.2C21.735 12.57 20.76 18.33 20.265 20.985C20.055 22.11 19.635 22.485 19.245 22.53C18.375 22.605 17.715 21.96 16.875 21.405C15.555 20.535 14.805 19.995 13.53 19.155C12.045 18.18 13.005 17.64 13.86 16.77C14.085 16.545 17.925 13.05 18 12.735C18.0104 12.6873 18.009 12.6378 17.996 12.5907C17.9829 12.5437 17.9585 12.5005 17.925 12.465C17.835 12.39 17.715 12.42 17.61 12.435C17.475 12.465 15.375 13.86 11.28 16.62C10.68 17.025 10.14 17.235 9.66 17.22C9.12 17.205 8.1 16.92 7.335 16.665C6.39 16.365 5.655 16.2 5.715 15.675C5.745 15.405 6.12 15.135 6.825 14.85C11.205 12.945 14.115 11.685 15.57 11.085C19.74 9.345 20.595 9.045 21.165 9.045C21.285 9.045 21.57 9.075 21.75 9.225C21.9 9.345 21.945 9.51 21.96 9.63C21.945 9.72 21.975 9.99 21.96 10.2Z"
                  fill="#A7A7A7"
                />
              </svg>
            </a>
            <a
              className={style.social_link}
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_14_33)">
                  <path
                    d="M15 0C6.71563 0 0 6.71563 0 15C0 23.2844 6.71563 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71563 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72188C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72188C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9438 13.6828 17.8453 13.6828C17.0063 13.6828 16.5078 14.2625 16.2875 14.8203C16.2063 15.0188 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3188 13.0672 11.4406H15.7063L15.8453 12.7984H15.9063C16.3063 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z"
                    fill="#A7A7A7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_33">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <span className={style.line}></span>
      <div className={style.bottom_footer}>
        <nav className={style.menu_list}>
          <Link className={style.menu_link}>Home</Link>
          <Link className={style.menu_link}>About</Link>
          <Link className={style.menu_link}>Tech Stack</Link>
          <Link className={style.menu_link}>Projects</Link>
          <Link className={style.menu_link}>Contact</Link>
        </nav>
        <p className={style.copyright}>
          Designed by&nbsp;<Link className={style.developers}> Pavan MG. </Link>
          &nbsp; Development by&nbsp;
          <Link className={style.developers}> A.Merlinov </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
