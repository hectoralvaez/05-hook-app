import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => { 
    
    const initialForm = {
        name: 'Héctor',
        email: 'hector@google.com',
    }

    test('Debe de regreesar los valores por defecto', () => { 
        
        const { result } =  renderHook( () => useForm( initialForm ) );
        // console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange:  expect.any( Function ),
            onResetForm:    expect.any( Function )
          });

     });

     test('Debe cambiar el valor del campo "name" del formulario', () => { 

        const newValue = 'Juan';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;
        
        act(() =>{
            onInputChange( { target: {name: 'name', value: newValue} } );
        });
        
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

      });

     test('Debe resetear la información del formulario', () => { 

        const newValue = 'Juan';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;
        
        act(() =>{
            onInputChange( { target: {name: 'name', value: newValue} } );
            onResetForm();
        });
        
        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

      });
 })