import './MainContent.module.scss';
import ContentItem from "./Item/ContentItem";

const arrContentItem = [
  {imgUrl:'../../img/sneakers/1.png', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
  {imgUrl:'../../img/sneakers/2.png', title: 'Мужские Кроссовки Nike Air Max 270', price: 15999},
  {imgUrl:'../../img/sneakers/3.png', title: 'Кроссовки Puma X Aka Boku Future Rider', price: 10999},
  {imgUrl:'../../img/sneakers/4.png', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999},
  {imgUrl:'../../img/sneakers/5.png', title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 13240},
  {imgUrl:'../../img/sneakers/6.png', title: 'Мужские Кроссовки Nike Kyrie 7', price: 11250},
  {imgUrl:'../../img/sneakers/7.png', title: 'Мужские Кроссовки Under Armour Curry 8', price: 7580},
  {imgUrl:'../../img/sneakers/8.png', title: 'Мужские Кроссовки Nike LeBron XVIII', price: 9999},
  {imgUrl:'../../img/sneakers/8.png', title: 'Мужские Кроссовки Nike LeBron XVIII', price: 9999},
  {imgUrl:'../../img/sneakers/8.png', title: 'Мужские Кроссовки Nike LeBron XVIII', price: 9999},
  {imgUrl:'../../img/sneakers/8.png', title: 'Мужские Кроссовки Nike LeBron XVIII', price: 9999},
  {imgUrl:'../../img/sneakers/9.png', title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 10470},
  {imgUrl:'../../img/sneakers/10.png', title: 'Кроссовки Puma X Aka Boku Future Rider', price: 23000},
  {imgUrl:'../../img/sneakers/11.png', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 7380},
  {imgUrl:'../../img/sneakers/12.png', title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 8750},
]

function MainContent(){
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
        {arrContentItem.map((obj) => (
          <ContentItem 
          title={obj.title} 
          price={obj.price} 
          imgUrl={obj.imgUrl} 
          onClick={() => console.log(obj)}
          />
        ))}
        </div>
      </div>
      </main>
    )
}
export default MainContent