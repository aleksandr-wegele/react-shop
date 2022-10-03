import React from 'react';
import styles from './ContentItem.module.scss';
import noLike from './img/no-like.png'
import btnPlus from './img/btn-plus.svg'
import btnChek from './img/btn-check.svg';

function ContentItem({price, title, imgUrl, onFavorite, onBtnPlus}){
 const [isAdded, setIsAdded] = React.useState();

 const onClickPlus = () => {
  onBtnPlus({price, title, imgUrl});
  setIsAdded(!isAdded);
 };

return (
        <div className={styles.content__item}>
          <div className={styles.like}>
            <img src={noLike} alt="no-like" onClick={onFavorite} className={styles.no_like}/>
          </div>
          <img  src={imgUrl} className={styles.content__item_img} alt="sneakers"/>
          <p className={styles.content__item_headding}>{title}</p>
          <div className={styles.content__item_description}>
            <div className={styles.price__wrapper}>
            <span className={styles.content__item_description_price_head}>Цена:</span>
            <b className={styles.content__item_description_price}>{price} руб.</b>
            </div>
            <img src={isAdded ? btnChek : btnPlus} className={styles.content__item_description_btn} alt="plus" onClick={onClickPlus}/>
          </div>
        </div>
        )
      }

export default ContentItem 