import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => { 

    const user = {
        id: 123, 
        name: 'Héctor', 
        surname: 'Penalva Peláez', 
        email: 'hectoralvaez@gmail.com'
    }

    test('Debe de mostrar el componente SIN el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>

        )
        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML).toBe('null');
        // screen.debug();

     });
    test('Debe de llamar el setUser cuando se hace click en el botón', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const btnSetUser = screen.getByLabelText('btn-set-user'); // aria-label
        fireEvent.click( btnSetUser );

        expect(setUserMock).toHaveBeenCalledWith( user );


        
     });
 });