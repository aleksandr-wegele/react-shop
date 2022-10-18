import React from 'react';

import AppContext from '../context';
import styles from './style/Drawer.module.scss';

const InfoDrawer = ({title, image, description}) => {
    const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.drawer__empty}>
        <img src={image} alt='box' className={styles.drawer__empty_img}/>
        <h2 className={styles.drawer__empty_headding}>{title}</h2>
        <p className={styles.drawer__empty_description}>{description}</p>
            <button onClick={() => setCartOpened(false)} className={styles.drawer__btn}>
                <img src="/img/back.svg" alt="back" className={styles.drawer__btn_back}/> Вернуться назад 
            </button>
    </div>
  );
};

export default InfoDrawer;
