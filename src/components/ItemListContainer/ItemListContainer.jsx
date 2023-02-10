import React, { useState, useEffect } from "react";

import getItems, { getItemsByCategory } from"../../services/mockAsyncService";
import item from "../item/Item";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

  let idcategory = undefined;

  

  async function getProducts() {
    if (!idcategory) {
      
        let response = await getItems();
        setProducts(response);
      
    } else {
      let response = await getItemsByCategory(idcategory);
      setProducts(response);
    }
  }

  useEffect(() => {
    getProducts();
  }, [idcategory]);

  return (
    
    
    <>
    <div> 
       
       
     
    <ItemList products={products} />
  
    </div>
    </>
  );
}

export default ItemListContainer;
