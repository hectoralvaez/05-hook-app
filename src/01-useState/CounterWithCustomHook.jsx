import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With Custom Hook: { counter }</h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => increment(2) }>+2</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement() }>-1</button>
        </>
    )
}
