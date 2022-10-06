import React from 'react';
import styles from '../style/ContentItem.module.scss';
import noLike from './img/no-like.png'
import Like from './img/like.svg'
import btnPlus from './img/btn-plus.svg'
import btnChek from './img/btn-check.svg';

function ContentItem({price, title, imgUrl, onFavorite, onBtnPlus}){
 const [isAdded, setIsAdded] = React.useState(false);
 const [isFavorite, setIsFavorite] = React.useState(false);


 const onClickPlus = () => {
  onBtnPlus({price, title, imgUrl});
  setIsAdded(!isAdded);
 };

 const onClickFavorite = () => {
  onFavorite({price, title, imgUrl});
  setIsFavorite(!isFavorite)
 };

return (
        <div className={styles.content__item}>
          <div className={styles.like}>
            <img src={isFavorite ? Like : noLike} alt="like" onClick={onClickFavorite} className={styles.no_like}/>
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