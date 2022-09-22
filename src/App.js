import Header from "./components/Header";
import MainContent from "./components/content/MainContent";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">

      <Drawer/>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
