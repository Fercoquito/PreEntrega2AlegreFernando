import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAsyncService";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItem().then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return (
    <>
      <div className="item-card">
      
      <div className="item-card_header">
        <h2>{product.title}</h2>
      </div>
      <div className="item-card_img">
        <img src={product.imgurl} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {product.price}</h4>
        <p>{product.detail}</p>
      
      </div>
    </div>


    </>
  );
}

export default ItemDetailContainer;