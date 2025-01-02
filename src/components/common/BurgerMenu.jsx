import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../utils/NavBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        // Verifica si el usuario ha hecho scroll hacia abajo
        if (window.scrollY > 50) {
            setIsScrolled(true); // Muestra la "X" al hacer scroll hacia abajo
        } else {
            setIsScrolled(false); // Oculta la "X" al estar en la parte superior
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="burger-menu">
            {/* Icono de barras para abrir el menú */}
            <FontAwesomeIcon icon={faBars} className="burger-menu-icon" onClick={toggleMenu} />

            {/* Contenedor del menú móvil */}
            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* Botón "X" independiente */}
                {isScrolled && <FontAwesomeIcon icon={faTimes} className="close-menu-icon" onClick={toggleMenu} />}

                {/* Opciones del menú */}
                <ul className="burger-menu-nav bold-text">
                    {navLinks.map((link) => (
                        <div className="link-container" key={link.id}>
                            <li>
                                <NavLink to={link.to} onClick={toggleMenu} title={link.title}>
                                    {link.label}
                                </NavLink>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
