import React from 'react';
import ContentLoader from "react-content-loader";

import styles from '../style/ContentItem.module.scss';
import noLike from './img/no-like.png';
import Like from './img/like.svg';
import btnPlus from './img/btn-plus.svg';
import btnChek from './img/btn-check.svg';

import AppContext from '../../context';

function ContentItem({
  id,
  price, 
  title, 
  imgUrl, 
  onFavorite, 
  onBtnPlus,
  favorited = false, 
  loading = false
}) {
 
 const [isFavorite, setIsFavorite] = React.useState(favorited);
 const {isItemAdded} = React.useContext(AppContext);
 const {isFavoriteAdded} = React.useContext(AppContext);
 const itemObj = {id, perentId: id, price, title, imgUrl};

 const onClickPlus = () => {
  onBtnPlus(itemObj);
 };

 const onClickFavorite = () => {
  onFavorite(itemObj);
  setIsFavorite(!isFavorite)
 };

return (
        <div className={styles.content__item}>
          {
            loading ? <ContentLoader 
            speed={2}
            width={160}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="155" height="146" /> 
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
            <rect x="124" y="230" rx="5" ry="5" width="32" height="32" /> 
            <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          </ContentLoader> : <>{onFavorite && 
          <div className={styles.like}>
          <img src={isFavoriteAdded(id) ? Like : noLike} alt="like" onClick={onClickFavorite} className={styles.no_like} />
        </div>}<img src={imgUrl} className={styles.content__item_img} alt="sneakers" /><p className={styles.content__item_headding}>{title}</p><div className={styles.content__item_description}>
            <div className={styles.price__wrapper}>
              <span className={styles.content__item_description_price_head}>Цена:</span>
              <b className={styles.content__item_description_price}>{price} руб.</b>
            </div>
            {onBtnPlus && 
            <img 
            src={isItemAdded(id) ? btnChek : btnPlus} 
            className={styles.content__item_description_btn} 
            alt="plus" 
            onClick={onClickPlus} />}
          </div></>
          }

        </div>
        )
      }

export default ContentItem 