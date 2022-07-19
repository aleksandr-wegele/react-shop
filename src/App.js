


function App() {
  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="header__left">
          <img widht={40} height={40} src="/img/logo_header.png" className="header__left-logo" alt=""/>
          <div className="header__left-info">
            <h3 className="header__left-info_headding">React online shop</h3>
            <p className="header__left-info_description">the best shop</p>
          </div>
        </div>
        <div className="header__right">
          <ul className="header__right-list">
            <li className="header__right-list_item cart">
              <img widht={18} height={18} src="/img/cart_header.svg" className="cart_img" alt=""/>
              <span className="cart__count">1205 rub.</span>
            </li>
            <li>
              <img widht={18} height={18} src="/img/favorite_header.svg" className="favorite" alt=""/>
            </li>
            <li>
              <img widht={18} height={18} src="/img/union_header.svg" className="union" alt=""/>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        карточки
      </div>
    </div>
  );
}

export default App;
