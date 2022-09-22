import ContentItem from "./ContentItem";

function MainContent(){
    return(
        <main className="main">
      <div className="slider"></div>
      <div className="content">
        <div className="content__headding">
          <h1 className="headding">Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" className="search_img" alt="search"/>
            <input className="search__block_search" placeholder="Поиск..."/>
          </div>
        </div>
        <div className="all_item">
        <ContentItem/>
        </div>
      </div>
      </main>
    )
}
export default MainContent