import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="NavBar_header">
            <NavLink to="/">
                <h1 className="NavBar__title">Mi Tienda</h1>
            </NavLink>
            <nav className="header__nav">
                <NavLink to="/category/1" className="header__link link">categoria 1</NavLink>
                <NavLink to="/category/2" className="header__link link">categoria 2</NavLink>
                <NavLink to="/carrito" className="header__link link">carrito</NavLink>

                <NavLink to="/cart" className="header__link link"><CartWidget /></NavLink>
            </nav>
        </header>
    )
}

export default NavBar;