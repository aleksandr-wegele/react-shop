import styles from './Drawer.module.scss'

function Drawer ({onClose, items = []}){
    return(
        <div className={styles.overlay}>
        <div className={styles.drawer}>
          <h2 className={styles.drawer__name}>Корзина <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" className={styles.btn_remove}/></h2>
          <div className={styles.items}>
            {items.map((obj) => (
              <div className={styles.cartItem}>
              <img src={obj.imgUrl} alt="Poster" className={styles.cartItem_img} widht={70} height={70}/>
              <div className={styles.cartItem_info}>
                <p className={styles.cartItem_info_description}>{obj.title}</p>
                <b className={styles.cartItem_info_price}>{obj.price} руб.</b>
              </div>
              <img src="/img/btn-remove.svg" alt="Remove" className={styles.btn_remove}/>
            </div>
            ))}
          </div>

          <ul className={styles.drawer__list}>
            <li className={styles.drawer__list_item}>
              <span className={styles.list__item_headding}>Итого:</span>
              <div className={styles.list__item_dashed}></div>
              <b  className={styles.list__item_description}>21 498 руб.</b>
            </li>
            <li className={styles.drawer__list_item}>
              <span className={styles.list__item_headding}>Налог 5%:</span>
              <div className={styles.list__item_dashed}></div>
              <b  className={styles.list__item_description}>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.drawer__btn}>Оформить заказ <img src="/img/next.svg" alt="next" className={styles.drawer__btn_next}/> </button>

        </div>
      </div>
    )
}

export default Drawer