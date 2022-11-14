import React from 'react';
import { Link } from "react-router-dom";

import AppContext from '../context';
import ContentItem from '../components/Item/ContentItem'

import styles from '../components/style/Drawer.module.scss'

function Favorite(items = []) {
  const {favorites, addToFavorite} = React.useContext(AppContext);
  
    return(

        <div className="content">
            <div className="content__headding">
              <h1 className="headding">Избранное</h1>
            </div>
            
            {favorites.length > 0 ? (<div className="all_item">
            {favorites.map((item, index) => (
              <ContentItem 
              key={index}
              favorited={true}
              onFavorite={addToFavorite}
              {... item}
              />
            ))}
            </div>) : ( 
              <div className='empty__box'>
              <img src='img/nofavorite.png' alt='Нет покупок' className='empty__box_img'/>
              <h2 className='empty__box_headding'>Закладок нет :(</h2>
              <p className='empty__box_description'>Вы ничего не добавляли в закладки</p>
              <Link to='/react-shop/'>
              <button  className={styles.drawer__btn}>
                <img src="img/back.svg" alt="back" className={styles.drawer__btn_back}/> Вернуться назад 
              </button>
              </Link>
              </div> 
              )}

        </div>
    )
}

export default Favorite