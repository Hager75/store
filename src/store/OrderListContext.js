import { createContext, useState } from "react";

export let OrderListContext = createContext([]);

export function OrderListContextProvider(props) {
    const [totalOrder, setTotalOrder] = useState([]);
    console.log(totalOrder);
  const addOrder = (order)=>{
    setTotalOrder([...totalOrder , order])
  };
//   function updateQuantity(item , obj){
// setTotalOrder([...totalOrder ,totalOrder[item] = obj]);
//   };
// let totalOrder = [];
    return <OrderListContext.Provider value={{ totalOrder , addOrder}}>
        {props.children}
    </OrderListContext.Provider>
}