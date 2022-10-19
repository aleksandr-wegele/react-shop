import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import ContentItem from '../components/Item/ContentItem';

import styles from '../components/style/Drawer.module.scss'

function Orders(items = []) {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); 

  React.useEffect(() => {
  (async () => {
    try {
    const { data } = await axios.get('https://633b38f9671dd0beee002729.mockapi.io/orders/');
    setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    setIsLoading(false);
    } catch (error) {
      alert('Ошибка при запросе заказов');
      console.error(error);
    }
  })();
}, [])

    return(

        <div className="content">
            <div className="content__headding">
              <h1 className="headding">Мои заказы</h1>
            </div>
            {orders.length > 0 ? (<div className="all_item">
            {(isLoading ? [...Array(8)] : orders).map((item, index) => (
              <ContentItem
              key={index}
              loading={isLoading}
              {...item}/>
            ))}
            </div>) : ( 
              <div className='empty__box'>
              <img src='img/noorder.png' alt='Нет покупок' className='empty__box_img'/>
              <h2 className='empty__box_headding'>У вас нет заказов</h2>
              <p className='empty__box_description'>Оформите хотя бы один заказ.</p>
              <Link to='/'>
              <button  className={styles.drawer__btn}>
                <img src="img/back.svg" alt="back" className={styles.drawer__btn_back}/> Вернуться назад 
              </button>
              </Link>
              </div> 
            )}
            
        </div>
    )
}

export default Orders

