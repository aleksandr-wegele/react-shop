


function App() {
  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="header__left">
          <img widht={40} height={40} src="/img/logo_header.png" className="header__left-logo" alt=""/>
          <div className="header__left-info">
            <h3 className="header__left-info_headding">React online shop</h3>
            <p className="header__left-info_description">Лучший магазин кросовок</p>
          </div>
        </div>
        <div className="header__right">
          <ul className="header__right-list">
            <li className="header__right-list_item cart">
              <img widht={18} height={18} src="/img/cart_header.svg" className="cart_img" alt=""/>
              <span className="cart__count">1205 руб.</span>
            </li>
            <li className="header__right-list_item favorite">
              <img widht={18} height={18} src="/img/favorite_header.svg" className="favorite" alt=""/>
            </li>
            <li className="header__right-list_item union">
              <img widht={18} height={18} src="/img/union_header.svg" className="union" alt=""/>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
      <div className="slider"></div>
      <div className="content">
        <h1 className="content__headding headding">Все кроссовки</h1>
        <div className="all_item">
        <div className="content__item">
          <img  src="/img/sneakers/1.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">12 999 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/2.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Air Max 270</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">12 999 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/3.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">8 499 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/4.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Кроссовки Puma X Aka Boku Future Rider</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">8 999 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/5.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Under Armour Curry 8</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">15 199 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/6.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Kyrie 7</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">11 299 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/7.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Jordan Air Jordan 11</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">10 899 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/8.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike LeBron XVIII</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">16 150 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/9.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Lebron XVIII Low</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">13 999 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/10.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">8 699 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/11.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Кроссовки Puma X Aka Boku Future Rider</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">8 999 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
        </div>

        <div className="content__item">
          <img  src="/img/sneakers/12.png" className="content__item_img" alt=""/>
          <p className="content__item_headding">Мужские Кроссовки Nike Kyrie Flytrap IV</p>
          <div className="content__item_description">
            <div className="price__wrapper">
            <span className="content__item_description-price_head">Цена:</span>
            <b className="content__item_description-price">11 299 руб.</b>
            </div>
            <button className="content__item_description-btn"><img widht={11} height={11} src="/img/plus.svg" className="plus" alt=""/></button>
          </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
