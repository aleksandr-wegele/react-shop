import React from 'react';
import { Link } from "react-router-dom";

import styles from './style/Header.module.scss'
import { useCart } from './hooks/useCart';

function Header(props){
  
  const { totalPrice } = useCart();
  
    return(
        <header className={styles.header}>
        <Link to='/'>
          <div className={styles.header__left}>
            <img widht={40} height={40} src="/img/logo_header.png" className={styles.header__left_logo} alt=""/>
            <div className={styles.header__left_info}>
              <h3 className={styles.header__left_info_headding}>React online shop</h3>
              <p className={styles.header__left_info_description}>Лучший магазин кросовок</p>
            </div>
          </div>
        </Link>
        <div className={styles.header__right}>
          <ul className={styles.header__right_list}>
            <li onClick={props.onClickCart} className={`${styles.header__right_list_item} ${styles.cart}`}>
              <img widht={18} height={18} src="/img/cart_header.svg" className={styles.cart_img} alt=""/>
              <span className={styles.cart__count}>{totalPrice} руб.</span>
            </li>
            <li className={`${styles.header__right_list_item} ${styles.favorite}`}>
              <Link to='/favorits'>
                <img widht={18} height={18} src="/img/favorite_header.svg" className={styles.favorite} alt=""/>
              </Link>
            </li>
            <li className={`${styles.header__right_list_item} ${styles.union}`}>
              <Link to='/orders'>
                <img widht={18} height={18} src="/img/union_header.svg" className={styles.union} alt=""/>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
}

export default Header