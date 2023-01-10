import React, { useState, useEffect } from "react";
import getItems from"../../services/mockAsyncService"
import ItemList from "../itemList/ItemList";

 /*function ItemListContainer() {
  const [toggle, setToggle] = useState(false);
  const [otroToggle, setOtroToggle] = useState(false);

  console.log("%cRenderizando ItemListContainer...", "background-color: blue");

  useEffect(() => {
    console.log(
      "%cObteniendo items de la base de datos",
      "background-color: green"
    );
  }, []);

  useEffect(() => {
    console.log("%cEffecto deependiente de Toggle", "background-color: orange");
  }, [toggle]);
*/


  function ItemListContainer() {
    const [products, setProducts] = useState([]);

    console.log("Renderizamos el componenete ..");

    useEffect( () => {
      getItems().then((respuesta) => {
        console.log(respuesta)
        setProducts(respuesta)


    });
  }, [])

  return (
    <>
       <ItemList products={products}  />
    </>
  );
}

export default ItemListContainer;

 /* <button onClick={() => setToggle(!toggle)}>Toggle State</button>
      <button onClick={() => setOtroToggle(!toggle)}>Otro Toggle</button>*/