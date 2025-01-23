import LogoNavbar from '../../assets/images/Logo Vitamet NavBar 3.webp';

export const Footer = () => {
    return (
        <footer className="footer" aria-label="Pie de página con logo de MetLife">
            <div className="footer-content">
                <img src={LogoNavbar} alt="Logo de MetLife en el pie de página" className="logo-footer" loading="lazy" />
            </div>
        </footer>
    );
};
