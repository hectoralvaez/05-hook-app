import { Navigate, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="about" element={ <AboutPage /> } />

            <Route path="/*" element={ <Navigate to="about" /> } />

        </Routes>
    </UserProvider>
  )
}
