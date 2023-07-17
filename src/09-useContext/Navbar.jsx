import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    useContext
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink 
							className={"nav-link"}
							to="/">
                            Home
                        </NavLink>
                        <NavLink
							className={"nav-link"}
							to="about">
                            About
                        </NavLink>
                        <NavLink
							className={"nav-link"}
							to="login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
