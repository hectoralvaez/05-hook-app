import { useEffect, useState } from "react";

export const FormWithCustomHooks = () => {
    
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,       // Desestructuramos el fomrState, ya que podría tener muchos otros valores que no queremos perder
            [ name ]: value     // Propiedades computadas el objeto
        });
    }

    // NO SE RECOMIENDA USAR useEffect SIN DEPENDENCIAS:
    // useEffect( () => {
    //     console.log('useEffect called!');
    // });

    useEffect( () => {
        console.log('useEffect called!');
    }, []);

    useEffect( () => {
        console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        console.log('email changed!');
    }, [email]);

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@loquesea.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

        </>
    );
};
