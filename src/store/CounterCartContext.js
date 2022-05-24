import { createContext, useState } from "react";

export let CounterCartContext = createContext(0);

export function CounterCartContextProvider(props) {
    const [count, setcount] = useState(0);
    const increase = () => {
        setcount(count + 1)
    };
    const decrease = () => {
        setcount(count - 1)
    };
    return <CounterCartContext.Provider value={{ count , increase}}>
        {props.children}
    </CounterCartContext.Provider>
}