import './MainContent.module.scss';
import React from 'react';
import ContentItem from "./Item/ContentItem";



function MainContent(){
  const [items, setItems] = React.useState([])

React.useEffect(() =>{
  fetch('https://633b38f9671dd0beee002729.mockapi.io/Items').then(res =>{
    return res.json();
  }).then((json) => {
    setItems(json)
  });
}, []);

    return(
        <main className="main">
          <div className="slider"></div>
          <div className="content">
            <div className="content__headding">
              <h1 className="headding">Все кроссовки</h1>
              <div className="search__block">
                <img src="../img/search.svg" className="search_img" alt="search"/>
                <input className="search__block_search" placeholder="Поиск..."/>
              </div>
            </div>
            <div className="all_item">
            {items.map((obj) => (
              <ContentItem 
              title={obj.title} 
              price={obj.price} 
              imgUrl={obj.imgUrl} 
              onFavorite={() => console.log("добавили закладки")}
              onBtnPlus={() => console.log("Нажали плюс")}
              />
            ))}
            </div>
          </div>
       </main>
    )
}

export default MainContent