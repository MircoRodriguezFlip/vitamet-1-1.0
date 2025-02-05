import fotoTexto1 from '../../assets/images/foto texto 1.webp';
import fotoTexto2 from '../../assets/images/foto texto 2.webp';
import fotoTexto3 from '../../assets/images/foto texto 3.webp';
import imgSection5 from '../../assets/images/imagen section 5 landing.webp';
import fondoImgSection from '../../assets/images/fondo imagenes.webp';

export const Section5LP = () => {
    return (
        <section className="section-5-container">
            <div className="section-5-1">
                <h2 className="bold-text-2">Descubre los beneficios que te da PPR de VITAMET</h2>
            </div>

            <div className="section-5-2">
                <div className="container-texto-general">
                    <img src={fotoTexto1} alt="" />

                    <div className="container-texto-section-5">
                        <p className="bold-text">Rendimiento garantizado del 2% nominal anual sobre la reserva de la prima de las coberturas.</p>
                    </div>
                </div>

                <div className="container-texto-general">
                    <img src={fotoTexto2} alt="" />

                    <div className="container-texto-section-5">
                        <p className="bold-text">En caso de fallecimiento, se incluye el servicio de asistencia funeraria.</p>
                    </div>
                </div>

                <div className="container-texto-general">
                    <img src={fotoTexto3} alt="" />

                    <div className="container-texto-section-5">
                        <p className="bold-text">Ofrece descuentos con proveedores, tarifas preferenciales, consultas médicas telefónicas, y más.</p>
                    </div>
                </div>

                <div className="imagen-section-5-1">
                    <img src={fondoImgSection} className="img-1-section-5" alt="" />
                    <img src={imgSection5} className="img-2-section-5" alt="" />
                </div>
            </div>

            <div className="imagen-section-5">
                <img src={fondoImgSection} className="img-1-section-5" alt="" />
                <img src={imgSection5} className="img-2-section-5" alt="" />
            </div>
        </section>
    );
};
