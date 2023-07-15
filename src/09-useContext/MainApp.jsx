import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import {LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <hr />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="about" element={ <AboutPage /> } />

            <Route path="/*" element={ <Navigate to="about" /> } />

        </Routes>
    </>
  )
}
