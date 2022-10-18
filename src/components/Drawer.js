import React from 'react'
import axios from 'axios';

import InfoDrawer from './InfoDrawer';
import { useCart } from './hooks/useCart';

import styles from './style/Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({onClose, onRemove, items = [], opened })  {
  const {cartItems, setCartItems, totalPrice, totalTax} = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplite, setIsOrderComplite] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => { 
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://633b38f9671dd0beee002729.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplite(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://633b38f9671dd0beee002729.mockapi.io/cart/' + item.id);
        await delay(1000)
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(')
    }
    setIsLoading(false);
  }


    return(
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
          <div className={styles.overlay_box} onClick={onClose}></div>
        <div className={styles.drawer}>
          <h2 className={styles.drawer__name}>Корзина <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" className={styles.btn_remove}/></h2>
          {
            items.length > 0 ? (
            <><div className={styles.items}>
              {items.map((obj) => ( 
                <div key={obj.id} className={styles.cartItem}>
                  <img src={obj.imgUrl} alt="Poster" className={styles.cartItem_img} widht={70} height={70} />
                  <div className={styles.cartItem_info}>
                    <p className={styles.cartItem_info_description}>{obj.title}</p>
                    <b className={styles.cartItem_info_price}>{obj.price} руб.</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove" className={styles.btn_remove} />
                </div>
              ))}
            </div><ul className={styles.drawer__list}>
                <li className={styles.drawer__list_item}>
                  <span className={styles.list__item_headding}>Итого:</span>
                  <div className={styles.list__item_dashed}></div>
                  <b className={styles.list__item_description}>{totalPrice} руб.</b>
                </li>
                <li className={styles.drawer__list_item}>
                  <span className={styles.list__item_headding}>Налог 5%:</span>
                  <div className={styles.list__item_dashed}></div>
                  <b className={styles.list__item_description}>{totalTax} руб.</b>
                </li>
              </ul>
                <button disabled={isLoading} onClick={onClickOrder} className={styles.drawer__btn}>
                  Оформить заказ <img src="/img/next.svg" alt="next" className={styles.drawer__btn_next} /> 
                </button></> 

          ) : (
            <InfoDrawer 
            title={isOrderComplite ? 'заказ оформлен!' : 'Корзина пустая'}
            description={isOrderComplite ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
            image={isOrderComplite ? '/img/orderCreate.png' : '/img/empty-drawer.png'} />
          )
          } 
        </div>
      </div>
    )
}

export default Drawer