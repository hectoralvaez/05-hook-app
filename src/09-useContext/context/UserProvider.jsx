import { UserContext } from "./UserContext"

const user = { 
    id: 123,
    name: 'Héctor',
    surname: 'Penalva Peláez',
    email: 'hectoralvaez@gmail.com',
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user }}>
        { children }
    </UserContext.Provider>
  )
}
