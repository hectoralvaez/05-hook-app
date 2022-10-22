import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        if ( counter === 0 ) return; // Una forma sencilla de controlar que el contador no llegue a valores negativos 
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}