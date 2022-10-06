import ContentItem from "./components/Item/ContentItem"
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  

  React.useEffect(() => {
  axios.get('https://633b38f9671dd0beee002729.mockapi.io/Items').then((res) => {
    setItems(res.data);
  });
  axios.get('https://633b38f9671dd0beee002729.mockapi.io/cart').then((res) => {
    setCartItems(res.data);
  });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://633b38f9671dd0beee002729.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
  };
  
  const onRemoveItem = (id) => {
    axios.delete(`https://633b38f9671dd0beee002729.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  
  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <main className="main">
          <div className="slider"></div>
          <div className="content">
            <div className="content__headding">
              <h1 className="headding">{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
              <div className="search__block">
                {searchValue && <img onClick={() => setSearchValue('')} src="./img/btn-remove.svg" alt="clearSearch" className="search__clear"/>}
                <img src="../img/search.svg" className="search_img" alt="search"/>
                <input onChange={onChangeSearchInput} value={searchValue} className="search__block_search" placeholder="Поиск..."/>
              </div>
            </div>
            <div className="all_item">
            {items.map((item) => (
              <ContentItem 
              title={item.title} 
              price={item.price} 
              imgUrl={item.imgUrl} 
              onFavorite={() => console.log("добавили закладки")}
              onBtnPlus={(obj) => onAddToCart(obj)}
              />
            ))}
            </div>
          </div>
       </main>
      
    </div>
  );
}

export default App;
