import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        console.log("Message mounted!");

        return () => {
            console.log("Message Unmounted!");
        };
    }, []); // Como queremos que se ejecute el useEffect cada vez que se llame al componente, no ponemos valores dentro del array de dependencias.

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
};
