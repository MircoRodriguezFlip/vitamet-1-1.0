import imgMoneda1 from '../../assets/images/moneda 1.webp';
import imgMoneda2 from '../../assets/images/moneda 2.webp';
import imgMoneda3 from '../../assets/images/moneda 3.webp';
import imgMoneda4 from '../../assets/images/moneda 4.webp';

export const Section3LP = () => {
    return (
        <section className="section-3-container">
            <header className="section-3-1">
                <h2 className="bold-text-2">AHORRA DESDE:</h2>
                <p className="bold-text">
                    $2,500 al mes y deja que tu dinero trabaje por ti. Al llegar a los 65 años, podrías disfrutar de un capital que transforme tu
                    retiro en la etapa más tranquila y próspera de tu vida.
                </p>
            </header>

            <div className="section-3-2">
                <div className="grupo-moneda">
                    <div className="burbuja-section-3 burbuja-derecha">
                        <p className="light-text">DATOS</p>
                    </div>

                    <div className="img-moneda fondo-moneda-1">
                        <img src={imgMoneda1} className="img-moneda-1" alt="Muchas monedas apiladas" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="grupo-moneda">
                    <div className="burbuja-section-3 burbuja-derecha">
                        <p className="light-text">DATOS</p>
                    </div>

                    <div className="img-moneda fondo-moneda-2">
                        <img src={imgMoneda2} className="img-moneda-2" alt="Varias monedas apiladas" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="grupo-moneda">
                    <div className="burbuja-section-3 burbuja-derecha">
                        <p className="light-text">DATOS</p>
                    </div>

                    <div className="img-moneda fondo-moneda-3">
                        <img src={imgMoneda3} className="img-moneda-3" alt="Pocas monedas apiladas" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="grupo-moneda">
                    <div className="burbuja-section-3 burbuja-derecha">
                        <p className="light-text">DATOS</p>
                    </div>

                    <div className="img-moneda fondo-moneda-4">
                        <img src={imgMoneda4} className="img-moneda-4" alt="Muy pocas monedas apiladas" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>

            <div className="section-3-3">
                <h3 className="bold-text">DATOS DATOS DATOS DATOS DATOS DATOS DATOS DATOS DATOS DATOS DATOS DATOS</h3>
            </div>
        </section>
    );
};
