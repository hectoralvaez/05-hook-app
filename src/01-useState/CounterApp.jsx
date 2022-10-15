import { useState } from "react";

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    return (
        <>
            <h1>Counter: { counter.counter1 }</h1>
            <hr />

            <button
                className="btn"
                onClick={ 
                    () => setCounter( counter + 1 )
                }>+1</button>
        </>
    );
};
