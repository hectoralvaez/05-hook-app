import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en <TodoItem />  ", () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test("Debe mostrar el Todo pendiente de completar", () => {

        render( 
            <TodoItem 
                todo={ todo }
                onToggleTodo = { onToggleTodoMock }
                onDeleteTodo = { onDeleteTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between")
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe("align-self-center ")

        // screen.debug();
    });

    test("Debe mostrar el Todo completado", () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo }
                onToggleTodo = { onToggleTodoMock }
                onDeleteTodo = { onDeleteTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe("align-self-center text-decoration-line-through");
        
        // screen.debug();
    });

    test("Span debe llamar el ToggleTodo cuando se hace click", () => {

        render( 
            <TodoItem 
                todo={ todo }
                onToggleTodo = { onToggleTodoMock }
                onDeleteTodo = { onDeleteTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
        // screen.debug();
    });

    test("Button debe llamar el onDeleteTodo", () => {

        render( 
            <TodoItem 
                todo={ todo }
                onToggleTodo = { onToggleTodoMock }
                onDeleteTodo = { onDeleteTodoMock }
            />
        );
        
        const deleteButton = screen.getByLabelText('delete-button');

        fireEvent.click(deleteButton);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
        // screen.debug();
    });

});
