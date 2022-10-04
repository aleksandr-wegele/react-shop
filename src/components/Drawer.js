function Drawer ({onClose, items = []}){
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className="drawer__name">Корзина <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" className="btn-remove"/></h2>
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem">
              <img src={obj.imgUrl} alt="" className="cartItem_img" widht={70} height={70}/>
              <div className="cartItem_info">
                <p className="cartItem_info-description">{obj.title}</p>
                <b className="cartItem_info-price">{obj.price} руб.</b>
              </div>
              <img src="/img/btn-remove.svg" alt="Remove" className="btn-remove"/>
            </div>
            ))}
          </div>

          <ul className="drawer__list">
            <li className="drawer__list_item">
              <span className="list__item_headding">Итого:</span>
              <div className="list__item_dashed"></div>
              <b  className="list__item_description">21 498 руб.</b>
            </li>
            <li className="drawer__list_item">
              <span className="list__item_headding">Налог 5%:</span>
              <div className="list__item_dashed"></div>
              <b  className="list__item_description">1074 руб.</b>
            </li>
          </ul>
          <button className="drawer__btn">Оформить заказ <img src="/img/next.svg" alt="next" className="drawer__btn_next"/> </button>

        </div>
      </div>
    )
}

export default Drawer