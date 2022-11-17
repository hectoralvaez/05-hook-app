
export const useForm = () => {

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

    // En este return ponemos la información que necesitaremos extraer del formulario ("exponer al mundo exterior")
    return {
        formState,          // El Valor del formulario
        onInputChange,      // La función para cambiarlo
    }

}

