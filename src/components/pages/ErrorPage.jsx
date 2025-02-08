import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <main className="page-container fade-in">
            <section className="section-1-error-page">
                <h1 className="bold-text">
                    Error 404 <br /> Página no encontrada
                </h1>

                <h2 className="light-text">Lo sentimos, la página que estás buscando no existe.</h2>

                <NavLink to="/" aria-label="Ir a la página de inicio.">
                    <button className="botonForm bold-text-2" title="Haz clic para ir a la página de inicio">
                        IR AL INICIO
                    </button>
                </NavLink>
            </section>
        </main>
    );
};
