import { createContext } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hola from "./components/Hola/Hola"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

import {BrowserRouter, Routes, Route  } from "react-router-dom";
import { CartContextProvider } from "./storage/cartContext";
import CartWidget from "./components/CartWitget/CartWidget";




function App() {
  function handleLogin(username) {
    alert(`${username} Iniciaste sesión`);
  }

  return (
    <CartContextProvider>
      <BrowserRouter>
         <NavBar />
           <Hola />
               <Routes>        
                 
                      <Route path="/" element={<ItemListContainer />} />        
                      <Route path="/item/:itemid" element={<ItemDetailContainer/>} />        
                      <Route path="/category/:categoryid" element={<ItemListContainer/>} />
                      <Route path="/contacto" element={ <h1>Contacto </h1>} />
                      <Route path="/cart" element={<CartWidget/>} />
                </Routes>    
      
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
