

function ContentItem(){
return (
        <div className="content__item">
          <div className="like">
            <img src="/img/no-like.svg" alt="no-like"/>
          </div>
          <img  src="/img/sneakers/1.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">12 999 руб.</b>
            </div>
            <img widht={11} height={11} src="/img/btn-plus.svg" className="content__item_description-btn plus" alt=""/>
          </div>
        </div>
        )
      }

export default ContentItem 