import { useState } from 'react';

export const Section4LP = () => {
    const [dato1, setDato1] = useState(0);
    const [dato2, setDato2] = useState(0);
    const [dato4, setDato4] = useState(0);

    // Calculamos dato 3 y dato 5 en base a los valores ingresados
    const dato3 = dato1 - dato2;
    const dato5 = dato3 * dato4;

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
                        </label>
                        <input type="number" value={dato1} onChange={(e) => setDato1(Number(e.target.value))} className="input-calculo" />
                    </div>

                    <div>
                        <p className="bold-text"> x </p>
                    </div>

                    <div className="input-control">
                        <label htmlFor="dato2" className="light-text">
                            Edad de jubilación
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
                        </label>
                        <input type="number" value={dato3} readOnly className="input-calculo" />
                    </div>

                    <div>
                        <p className="bold-text"> x </p>
                    </div>

                    <div className="input-control">
                        <label htmlFor="dato4" className="light-text">
                            Gastos de tu retiro
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
                    <p className="bold-text">{dato5}</p>
                </div>
            </div>
        </section>
    );
};
