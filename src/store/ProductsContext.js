import { createContext , useState } from "react";

export let ProductsContext = createContext([]);

export function ProductsContextProvider(props) {
    const [products, setProducts] = useState([{
        id: Math.random().toString(),
        imgUrl:'./assets/2.jpg',
        productName: "Miray",
        category: "cotton",
        price: 365
      },{
        id: Math.random().toString(),
        imgUrl:'./assets/1.jpg',
        productName: "Petra",
        category: "cotton",
        price: 365
      },{
        id: Math.random().toString(),
        imgUrl:'./assets/2.jpg',
        productName: "Lunara",
        category: "chiffon",
        price: 365
      },{
        id: Math.random().toString(),
        imgUrl:'./assets/1.jpg',
        productName: "Nuray",
        category: "cotton",
        price: 300
      },{
        id: Math.random().toString(),
        imgUrl:'./assets/2.jpg',
        productName: "Sarai",
        category: "chiffon",
        price: 360
      },{
        id: Math.random().toString(),
        imgUrl:'./assets/1.jpg',
        productName: "Aiyla",
        category: "chiffon",
        price: 360
      }]);
    // const products =["hello"]
    return <ProductsContext.Provider value={{ products }}>
        {props.children}
    </ProductsContext.Provider>
}