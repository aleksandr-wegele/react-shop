import React from "react";
import SimpleSlider from "../components/slaider/SimpleSlider";

import ContentItem from "../components/Item/ContentItem";
import AppContext from "../context";

function Home({
  isLoading, 
  searchValue, 
  setSearchValue, 
  onChangeSearchInput, 
  addToFavorite, 
  onAddToCart
}) {
  
  const {items} = React.useContext(AppContext);
  


  const renderItems =() =>{
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      isLoading 
      ? [...Array(10)] 
      : filtredItems)
    .map((item, index) => (
      <ContentItem 
      key={index}
      onFavorite={(obj) => addToFavorite(obj)}
      onBtnPlus={(obj) => onAddToCart(obj)}
      loading={isLoading}
      {...item}
      />
    ));
  }
    return(
        <main className="main">
          <SimpleSlider/>
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
            {renderItems()}
            </div>
          </div>
       </main>
    )
}

export default Home