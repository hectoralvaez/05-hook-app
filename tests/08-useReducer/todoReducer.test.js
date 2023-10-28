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
        const action = {
            type: "[TODO] Delete Todo",
            payload: {
                id: 1,
            },
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        console.log(action.payload);
    });

    test('Debe realizar el toggle del Todo', () => {

        const action = {
            type: "[TODO] Toggle Todo",
            payload: {
                done: true,
            },
        };

        const newState = todoReducer(initialState, action);
        expect(newState.done).toBe(false);

    });
});
