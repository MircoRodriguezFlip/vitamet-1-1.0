import fondoImgSection from '../../assets/images/imagen section 2 landing.webp';

export const Section2LP = () => {
    return (
        <section className="section-2-container">
            <div className="section-2-1">
                <h2 className="bold-text">¿Sabías qué?</h2>

                <p className="light-text">En México, el 70% de los trabajadores no ahorran lo suficiente para su retiro.</p>

                <p className="light-text">
                    El sistema actual de pensiones no garantiza un ingreso digno: la mayoría solo recibirá entre el 20% y el 40% de su último sueldo.
                </p>

                <p className="light-text">
                    Haz cuentas: <strong>¿podrías vivir con ese porcentaje?</strong> No dejes tu futuro al azar. Construye la vida que mereces para
                    mañana.
                </p>
            </div>

            <div className="section-2-2">
                <div>
                    <img src={fondoImgSection} alt="" />
                </div>

                <div className="sueldos-container light-text">
                    <div className="sueldo-pension-container-1">
                        <div className="sueldo-container">
                            <p>Sueldo: $10,000MXN</p>
                        </div>

                        <div className="sueldo-container">
                            <p>Pensión: $3,000 MXN</p>
                        </div>
                    </div>

                    <div className="sueldo-pension-container-2">
                        <div className="sueldo-container">
                            <p>Sueldo: $10,000MXN</p>
                        </div>

                        <div className="sueldo-container">
                            <p>Pensión: $4,500 MXN</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
