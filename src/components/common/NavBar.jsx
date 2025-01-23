import { NavLink } from 'react-router-dom';
import LogoNavbar from '../../assets/images/Logo Vitamet NavBar 3.webp';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Barra de navegación principal">
                {/* Logo */}
                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal">
                        <img src={LogoNavbar} alt="Logotipo de MetLife en la barra de navegación" className="logo-navbar" loading="lazy" />
                    </NavLink>
                </div>

                {/* Menú de Navegación */}
                <ul className="menu-nav light-text">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.to} title={item.title}>
                                {item.label}
                            </NavLink>
                            {item.id !== navLinks[navLinks.length - 1].id && <span className="linea-separadora">|</span>}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menú Hamburguesa */}
            <BurgerMenu />
        </header>
    );
};
