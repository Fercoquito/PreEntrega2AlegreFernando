import { useState } from "react";

import "./itemCount.css";

function ItemCount({onAddToCart}) {
  const [count, setCount] = useState(0);

  function handleAdd() {
 
    setCount(count + 1);
  }

  function handleSubstract() {
 
    setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Agregar cantidad de productos deseados</small>
      <div className="itemcount_control">
        <button className="btn" onClick={handleSubstract}>-</button>
        <span className="itemcount_count">{count}</span>
        <button className="btn" onClick={handleAdd}>+</button>
      </div>

      <div className="itemcount_btns">
        <button className="btn" onClick={onAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;