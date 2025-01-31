import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Tooltip = ({ text }) => <div className="tooltip">{text}</div>;

export const Section4LP = () => {
    const [dato1, setDato1] = useState(0);
    const [dato2, setDato2] = useState(0);
    const [dato4, setDato4] = useState(0);
    const [hoveredTooltip, setHoveredTooltip] = useState(null);

    const dato3 = dato1 - dato2;
    const dato5 = dato3 * 12 * dato4;

    return (
        <section className="section-4-container">
            <div className="section-4-1">
                <h2 className="bold-text">¿Sabes cuánto necesitas ahorrar para disfrutar del retiro que deseas?</h2>
                <h3 className="light-text">No dejes que la incertidumbre defina tu futuro.</h3>
                <h3 className="light-text">¡Consulta hoy y descubre cuánto necesitas para alcanzar el sueldo ideal en tu retiro!</h3>
            </div>

            <div className="section-4-2">
                {/* Primera operación: dato1 - dato2 */}
                <div className="calculadora-1">
                    <div className="input-control">
                        <label htmlFor="dato1" className="light-text">
                            Esperanza de vida
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('esperanza')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'esperanza' && <Tooltip text="Edad promedio de vida esperada." />}
                            </span>
                        </label>
                        <input type="number" value={dato1} onChange={(e) => setDato1(Number(e.target.value))} className="input-calculo" />
                    </div>

                    <div>
                        <p className="bold-text"> - </p>
                    </div>

                    <div className="input-control">
                        <label htmlFor="dato2" className="light-text">
                            Edad de jubilación
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('jubilacion')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'jubilacion' && <Tooltip text="Edad en la que planeas jubilarte." />}
                            </span>
                        </label>
                        <input type="number" value={dato2} onChange={(e) => setDato2(Number(e.target.value))} className="input-calculo" />
                    </div>
                </div>

                <div className="calculadora-igual">
                    <p className="bold-text">=</p>
                </div>

                {/* Resultado de la primera operación: dato3 */}
                <div className="calculadora-2">
                    <div className="input-control">
                        <label htmlFor="dato3" className="light-text">
                            Total años restantes
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('restantes')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'restantes' && <Tooltip text="Años que vivirás después de jubilarte." />}
                            </span>
                        </label>
                        <input type="text" value={`${dato3} (${dato3 * 12} meses)`} readOnly className="input-calculo" />
                    </div>

                    <div>
                        <p className="bold-text"> x </p>
                    </div>

                    <div className="input-control">
                        <label htmlFor="dato4" className="light-text">
                            Gastos de tu retiro
                            <span
                                className="tooltip-container"
                                onMouseEnter={() => setHoveredTooltip('gastos')}
                                onMouseLeave={() => setHoveredTooltip(null)}
                            >
                                <FontAwesomeIcon icon={faExclamationCircle} />
                                {hoveredTooltip === 'gastos' && <Tooltip text="Cantidad que gastarás cada año en tu retiro." />}
                            </span>
                        </label>
                        <input type="number" value={dato4} onChange={(e) => setDato4(Number(e.target.value))} className="input-calculo" />
                    </div>
                </div>

                <div className="calculadora-igual">
                    <p className="bold-text">=</p>
                </div>

                {/* Resultado final: dato5 */}
                <div className="calculadora-3">
                    <label htmlFor="dato5" className="light-text">
                        Ingreso requerido
                    </label>
                    <p className="bold-text">{dato5} MXN</p>
                </div>
            </div>
        </section>
    );
};
