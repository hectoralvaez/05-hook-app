import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {

    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    
    // NO SE RECOMIENDA USAR useEffect SIN DEPENDENCIAS:
    // useEffect( () => {
    //     console.log('useEffect called!');
    // });

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
