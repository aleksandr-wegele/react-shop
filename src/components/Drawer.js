import styles from './style/Drawer.module.scss'

function Drawer ({onClose, onRemove, items = []}){
    return(
        <div className={styles.overlay}>
        <div className={styles.drawer}>
          <h2 className={styles.drawer__name}>Корзина <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" className={styles.btn_remove}/></h2>
          {
            items.length > 0 ? (
            <><div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
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
                  <b className={styles.list__item_description}>21 498 руб.</b>
                </li>
                <li className={styles.drawer__list_item}>
                  <span className={styles.list__item_headding}>Налог 5%:</span>
                  <div className={styles.list__item_dashed}></div>
                  <b className={styles.list__item_description}>1074 руб.</b>
                </li>
              </ul><button className={styles.drawer__btn}>Оформить заказ <img src="/img/next.svg" alt="next" className={styles.drawer__btn_next} /> </button></> 

          ) : (<div className={styles.drawer__empty}>
            <img src='/img/empty-drawer.png' alt='box' className={styles.drawer__empty_img}/>
            <h2 className={styles.drawer__empty_headding}>Корзина пустая</h2>
            <p className={styles.drawer__empty_description}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className={styles.drawer__btn}><img src="/img/back.svg" alt="back" className={styles.drawer__btn_back}/> Вернуться назад </button>
          </div>)
          } 
        </div>
      </div>
    )
}

export default Drawer