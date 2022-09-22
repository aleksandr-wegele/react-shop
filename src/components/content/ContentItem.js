function ContentItem(props){
return (
        <div className="content__item">
          <div className="like">
            <img src="/img/no-like.svg" alt="no-like"/>
          </div>
          <img  src={props.imgUrl} className="content__item_img" alt=""/>
          <p className="content__item_headding">{props.title}</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">{props.price} руб.</b>
            </div>
            <img widht={11} height={11} src="/img/btn-plus.svg" className="content__item_description-btn plus" alt=""/>
          </div>
        </div>
        )
      }

export default ContentItem 