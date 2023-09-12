import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";

describe('Pruebas en <MultipleCustomHooks />', () => { 

    test('Debe de mostar el componente por defecto', () => { 
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button', {name: 'Next quote' });

        expect( nextButton.disabled ).toBeTruthy();
        // console.log( "Valor del boleano 'nextButton: " + nextButton.disabled );

        // screen.debug();
     });

 });