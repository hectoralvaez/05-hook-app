import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Tests: UserCounter', () => {

    test('Retorna el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;
        console.log(result);

        expect( counter ).toEqual(expect.any( Number ));        // Comprobar que counter es un número
        expect( counter ).toBe(10);                             // Comprobar que el valor inicial del counter es "10"
        expect( decrement ).toEqual( expect.any( Function ) );  // Comprobar que "decrement" es una función
        expect( increment ).toEqual( expect.any( Function ) );  // Comprobar que "increment" es una función
        expect( reset ).toEqual( expect.any( Function ) );      // Comprobar que "reset" es una función
    });

    test('El valor que se pasa a la función de forma manual, lo recibe correctamente', () => {
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);     // Comprobar que el valor que se pasa manualmente, lo recibe de forma correcta.
    });
});