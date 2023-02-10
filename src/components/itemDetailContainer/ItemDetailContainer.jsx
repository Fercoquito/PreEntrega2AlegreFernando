
import React, { useState, useEffect, useContext, handleAddToCart } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import { cartContext } from "../../storage/cartContext";
import Button, { ButtonChild } from "../Button/Button";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";



function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let  {itemid} = useParams();
  
  
  
  const { addItem, removeItem } = useContext(cartContext);
  
  
  function handleAddToCart (count) {
    alert(`Agregaste ${product.title} al carrito`);
    product.count = count;
    addItem(product);
  }


  useEffect(() => {
    getSingleItem(itemid)
    .then((respuesta) => {
      setProduct(respuesta);
    })
    .catch((error) => alert(`Error: ${error}`));

  }, [itemid]);

 
  return (
    
    <div className="containerDetail">
      <div className="details">
      <div className='imageDetail'>
        <img height={400} src={product.imgurl} alt={product.title} />
      </div>

      <div className="textDetails">
      <div className='categoryProduct'>
        <h1>{product.title}</h1>
        <div className='nameProduct'></div>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
        </div>
        <ItemCount onAddToCart={handleAddToCart} />
        
      <ButtonChild>Ir al carrito</ButtonChild>
      <button onClick={() => removeItem(product.id)}>Eliminar Item</button>
      <button>Vaciar Carrito</button>
    </div>
    </div>
</div>

  );
}
export default ItemDetailContainer;
