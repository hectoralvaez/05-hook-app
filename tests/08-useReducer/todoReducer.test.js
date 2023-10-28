import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
    const initialState = [
        {
            id: 1,
            description: "Demo Todo",
            done: false,
        },
    ];

    test("Debe regresar el estado inicial", () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test("Debe agregar un Todo", () => {
        const action = {
            type: "[TODO] Add Todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2",
                done: false,
            },
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

        console.log(action);
        console.log(action.payload);
    });

    test("Debe eliminar un Todo", () => {

    });

    test('Debe realizar el toggle del Todo', () => {

    });
});
