import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hola from "./components/Hola/Hola"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />      
      <Hola />
      <ItemListContainer />
      <ItemDetailContainer/>
    
    </>
  );
}

export default App;
