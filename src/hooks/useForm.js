import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );  // De esta manera el formState será lo que se le pase al Hook como argumento, 
                                                                // con los campos que sean, no solo los que teníamos hasta ahora (user, email, pass)
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,       // Desestructuramos el fomrState, ya que podría tener muchos otros valores que no queremos perder
            [ name ]: value     // Propiedades computadas el objeto
        });
    }

    // En este return ponemos la información que necesitaremos extraer del formulario ("exponer al mundo exterior")
    return {
        formState,          // El Valor del formulario
        onInputChange,      // La función para cambiarlo
    }

}

