import React from 'react';
import style from './style.module.scss';

function Loading({loading}) {
    if (loading) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
  return (
    <div style={!loading ? {opacity: 0, pointerEvents: 'none'} : {opacity: 1, pointerEvents: 'none'}} className={style.loader_block}>
      <span className={style.loader}></span>
    </div>
  );
}

export default Loading;
