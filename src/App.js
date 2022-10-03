import Header from "./components/Header";
import MainContent from "./components/content/MainContent";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <MainContent/>
      
    </div>
  );
}

export default App;
