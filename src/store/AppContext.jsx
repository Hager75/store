import { createContext } from "react";

export const AppContext = createContext({
    products:[],
    count:0,
    cartItems:[],
    totalPrice:0,
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    addCouter:()=>{}
});

