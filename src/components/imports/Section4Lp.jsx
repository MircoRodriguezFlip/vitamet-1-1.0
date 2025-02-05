import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Tooltip = ({ text }) => <div className="tooltip">{text}</div>;

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Section4LP = () => {
    const [dato1, setDato1] = useState(0);
    const [dato2, setDato2] = useState(0);
    const [dato4, setDato4] = useState(0);
    const [hoveredTooltip, setHoveredTooltip] = useState(null);
    const [ingresoRequerido, setIngresoRequerido] = useState(null);
    const [mostrarCotizar, setMostrarCotizar] = useState(false);
    const [mostrarTexto, setMostrarTexto] = useState(false);

    const calcularIngreso = () => {
        const dato3 = dato1 - dato2;
        const dato5 = dato3 * 12 * dato4;
        setIngresoRequerido(dato5);
        setMostrarCotizar(true);
        setMostrarTexto(true);
    };

    return (
        <section className="section-4-container">
            <div className="section-4-1">
                <h2 className="bold-text-2">¿Sabes cuánto necesitas ahorrar para disfrutar del retiro que deseas?</h2>
                <h3 className="light-text">No dejes que la incertidumbre defina tu futuro.</h3>
                <h3 className="light-text">¡Consulta hoy y descubre cuánto necesitas para alcanzar el sueldo ideal en tu retiro!</h3>
            </div>

            <div className="section-4-2">
                {/* Primera operación: dato1 - dato2 */}
                <div className="calculadora-1">
                    <div className="input-control">
                        <label className="light-text">
                            Esperanza de vida
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('esperanza')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'esperanza' && (
                                    <Tooltip text="Promedio de vida de tus ascendentes (edad de vida de tu papá, mamá, abuelos)." />
                                )}
                            </span>
                        </label>
                        <input
                            type="text"
                            value={dato1 === 0 ? '' : dato1}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                    // Solo permite números
                                    setDato1(value === '' ? 0 : parseInt(value, 10));
                                }
                            }}
                            className="input-calculo bold-text"
                            maxLength={3}
                        />
                    </div>

                    <div>
                        <p className="bold-text"> - </p>
                    </div>

                    <div className="input-control">
                        <label className="light-text">
                            Edad de jubilación
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('jubilacion')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'jubilacion' && <Tooltip text="Edad que te gustaría pensionarte." />}
                            </span>
                        </label>
                        <input
                            type="text"
                            value={dato2 === 0 ? '' : dato2}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                    setDato2(value === '' ? 0 : parseInt(value, 10));
                                }
                            }}
                            className="input-calculo bold-text"
                            maxLength={3}
                        />
                    </div>
                </div>

                <div className="calculadora-igual">
                    <p className="bold-text">=</p>
                </div>

                {/* Resultado de la primera operación: dato3 */}
                <div className="calculadora-2">
                    <div className="input-control">
                        <label className="light-text">
                            Total años restantes
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('restantes')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'restantes' && <Tooltip text="Años después de pensionarte." />}
                            </span>
                        </label>
                        <input type="text" value={`${dato1 - dato2} (${(dato1 - dato2) * 12} meses)`} readOnly className="input-calculo bold-text" />
                    </div>

                    <div>
                        <p className="bold-text"> x </p>
                    </div>

                    <div className="input-control">
                        <label className="light-text">
                            Gastos de tu retiro
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('gastos')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'gastos' && (
                                    <Tooltip text="Que monto te gustaría recibir mensualmente que cumpla con tus necesidades de vida." />
                                )}
                            </span>
                        </label>
                        <input
                            type="text"
                            value={dato4 === 0 ? '' : dato4.toLocaleString('es-MX')}
                            onChange={(e) => {
                                let value = e.target.value.replace(/,/g, '');
                                if (/^\d*$/.test(value)) {
                                    setDato4(value === '' ? 0 : parseInt(value, 10));
                                }
                            }}
                            className="input-calculo bold-text"
                            maxLength={13}
                        />
                    </div>
                </div>

                {/* Botón de cálculo */}
                <div className="calculadora-igual">
                    <button className="btn-calcular bold-text" onClick={calcularIngreso}>
                        CALCULAR
                    </button>
                </div>

                <div className="contenido-oculto-section-4">
                    {/* Resultado final: dato5 (se muestra solo si se ha calculado) */}
                    {ingresoRequerido !== null && (
                        <div className="calculadora-3">
                            <label className="light-text" htmlFor="ingreso-requerido">
                                Ingreso requerido
                            </label>
                            <p id="ingreso-requerido" className="bold-text-2">
                                {ingresoRequerido.toLocaleString('es-MX')} MXN
                            </p>
                        </div>
                    )}

                    {mostrarCotizar && (
                        <div className="boton-cotizar-section-4">
                            <button className="btn-cotizar bold-text" onClick={scrollToTop}>
                                COTIZAR
                            </button>
                        </div>
                    )}

                    {mostrarTexto && (
                        <div className="texto-oculto-section-4">
                            <p className="light-text">Recuerda que estos datos son ficticios, para tener un análisis real, por favor cotizar.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
