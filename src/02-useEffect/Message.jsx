import { useState, useEffect } from "react";

export const Message = () => {

    const [coords, setCoords] = useState( {x: 0, y:0 } )

    useEffect(() => {

        const onMouseMove = ( {x, y} ) => {
            const coords = { x, y };
            console.log(coords);
            setCoords(coords);
        }
        
        window.addEventListener( 'mousemove', onMouseMove)
        
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove)
        };
    }, []); // Como queremos que se ejecute el useEffect cada vez que se llame al componente, no ponemos valores dentro del array de dependencias.

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify(coords) }
        </>
    );
};
