import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import AppContext from './context.js';

import Home from './pages/Home.jsx'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import MyFavorits from "./pages/MyFavorits.jsx"
import Orders from "./pages/Orders.jsx";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);  
  
  React.useEffect(() => {
    async function fetchData() {
    try {
    setIsLoading(true);
    const[cartResponse, itemsResponse, favorItesResponse] = await Promise.all([
    axios.get('https://633b38f9671dd0beee002729.mockapi.io/cart'),
    axios.get('https://633b38f9671dd0beee002729.mockapi.io/Items'),
    axios.get('https://633b38f9671dd0beee002729.mockapi.io/favorites')]);
    
    setIsLoading(false);
    setFavorites(favorItesResponse.data);
    setCartItems(cartResponse.data);
    setItems(itemsResponse.data);
    } catch (error) {
      alert('Ошибка при запросе данных')
      console.error(error)
    }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.perentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.perentId) !== Number(obj.id)));
        await axios.delete(`https://633b38f9671dd0beee002729.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://633b38f9671dd0beee002729.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.perentId === data.perentId) {
            return{
              ...item,
              id: data.id
            }
          }
          return item;
        }))
      } 
    } catch (error) {
      alert("Не удалось добавить в корзину")
      console.error(error)
    }
  };
  
  const onRemoveItem = (id) => {
    try {
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    axios.delete(`https://633b38f9671dd0beee002729.mockapi.io/cart/${id}`);
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.error(error)
    }
    
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const addToFavorite = async (obj) => {
     try{
      const favItem = favorites.find((favObj) => Number(favObj.perentId) === Number(obj.id))
      if (favItem) {
        setFavorites((prev) => prev.filter(item => Number(item.perentId) !== Number(obj.id)));
        await axios.delete(`https://633b38f9671dd0beee002729.mockapi.io/favorites/${favItem.id}`); 
      } else {
        setFavorites((prev) => [...prev, obj])
        const {data} = await axios.post('https://633b38f9671dd0beee002729.mockapi.io/favorites', obj);
        setFavorites((prev) => prev.map(item => {
          if (item.perentId === data.perentId){
            return{
              ...item,
              id: data.id
            }
          } return item;
        }));
      }
     } catch (error) {
    alert('Не удалось добавить в избранное');
    console.error(error)
    }
  };

const isFavoriteAdded = (id) =>{
  return favorites.some((obj) => Number(obj.perentId) === Number(id))
};

const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.perentId) === Number(id))
};

  return (
    <AppContext.Provider value={{
    cartItems, 
    favorites, 
    items, 
    isItemAdded, 
    addToFavorite,
    setCartOpened,
    setCartItems,
    onAddToCart,
    isFavoriteAdded
    }}>
      <div className="wrapper clear">
      
      <Drawer 
      items={cartItems} 
      onClose={() => setCartOpened(false)} 
      onRemove={onRemoveItem} 
      opened={cartOpened}/>
      
      
      <Header onClickCart={() => setCartOpened(true)}/>
        <Route exact path="/react-shop/">
          <Home 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput} 
          addToFavorite={addToFavorite} 
          onAddToCart={onAddToCart}  
          isLoading={isLoading}/>
        </Route>          
        <Route exact path="/react-shop/favorits">
          <MyFavorits />
        </Route>
        <Route exact path="/react-shop/orders">
          <Orders/>
        </Route>
    </div>
    </AppContext.Provider>
  );
}

export default App;


