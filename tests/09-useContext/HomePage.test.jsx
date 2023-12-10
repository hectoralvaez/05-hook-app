const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../src/09-useContext/HomePage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe('Pruebas en HomePage', () => { 
    const user = {
        id: 1,
        name: 'Fernando'
    }
    test('Debe mostrar el componente SIN el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML).toBe('null');
        // screen.debug();

     })

    test('Debe mostrar el componente CON el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        screen.debug();
        expect( preTag.innerHTML).toContain( `${user.id}`);
        expect( preTag.innerHTML).toContain(user.name);
        
     })
 });