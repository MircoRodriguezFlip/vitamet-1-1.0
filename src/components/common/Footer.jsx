import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/Logo Vitamet NavBar 3.webp';

export const Footer = () => {
    return (
        <footer className="footer" aria-label="Pie de página con logo de MetLife">
            <div className="footer-content">
                <img src={LogoNavbar} alt="Logo de MetLife en el pie de página" className="logo-footer" loading="lazy" />
            </div>
            <div>
                <NavLink to="/politica-privacidad" className={'light-text'} title="Ver la política de privacidad">
                    Política de privacidad
                </NavLink>
            </div>
        </footer>
    );
};
