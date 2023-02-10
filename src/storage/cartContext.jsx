const { createContext, useState } = require("react");

export const cartContext = createContext();


export function CartContextProvider(props) {
 
 return <cartContext.Provider value= { {cart: [] } }>

  {props.children}
</cartContext.Provider>
}
