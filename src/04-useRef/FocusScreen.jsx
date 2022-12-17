import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = ()=> {
        inputRef.current.select();  // Selecciona el texto del input cuando hacemos click en el botón
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                placeholder="Nombre"
                className="form-control"
            />

            <button
                className="btn btn-primary mt-3"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    );
};
