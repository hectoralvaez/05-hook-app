import { useReducer } from "react";
import { todoReducer } from "./todoReducer";


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar piedra del Poder',
        done: false,
    },
]

export const TodoApp = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </>
    );
};
