import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      () => {
        console.log("setCounter(counter + 1)");
        setCounter(counter + 1);
      },
      [],
    )

    return (
        <>
            <h1>usCallback Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    );
};
