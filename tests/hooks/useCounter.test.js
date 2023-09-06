import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Tests: UserCounter', () => {

    test('Debe retornar el valor por defecto y el tipo de variable definido.', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;
        console.log(result);

        expect( counter ).toEqual(expect.any( Number ));        // Comprobar que counter es un número
        expect( counter ).toBe(10);                             // Comprobar que el valor inicial del counter es "10"
        expect( decrement ).toEqual( expect.any( Function ) );  // Comprobar que "decrement" es una función
        expect( increment ).toEqual( expect.any( Function ) );  // Comprobar que "increment" es una función
        expect( reset ).toEqual( expect.any( Function ) );      // Comprobar que "reset" es una función
    });

    test('Debe retornar el valor que se pasa a la función de forma manual.', () => {
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);     // Comprobar que el valor que se pasa manualmente, lo recibe de forma correcta.
    });

    test('Debe incrementar el contador.', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment} = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(103);


    });

    test('Debe disminuir el contador.', () => {
        const { result } = renderHook( () => useCounter(23) );
        const { decrement} = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(20);


    });

    test('Debe resetear el contador.', () => {
        const { result } = renderHook( () => useCounter(5) );
        const { increment, decrement, reset} = result.current;

        act( () => {
            increment();
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(5);

    });
});