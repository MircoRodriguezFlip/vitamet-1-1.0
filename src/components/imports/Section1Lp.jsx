import { Form } from './form';

import iconosection1 from '../../assets/images/icono section 1 landing.webp';
import imgSection1 from '../../assets/images/imagen section 1 landing.webp';
import fondoImgSection from '../../assets/images/fondo imagenes.webp';

export const Section1LP = () => {
    return (
        <section className="section-1-container">
            <div className="section-1-1">
                <div className="section-1-titulo">
                    <h1 className="bold-text-2">
                        TU FUTURO <br /> ASEGURADO
                    </h1>

                    <h2 className="light-text">
                        Con un Plan Personal de Retiro <br /> ¡Cotiza Hoy y Vive Tranquilo!
                    </h2>

                    <div className="section-1-icono-2">
                        <img src={iconosection1} alt="Icono de dos personas conversando" />

                        <h3 className="bold-text-2">Asesoría Gratuita</h3>
                    </div>
                </div>

                <div className="section-1-img">
                    <img src={fondoImgSection} className="img-2-section-1" alt="Luz que invita a llenar el formulario" />
                    <img src={imgSection1} className="img-1-section-1" alt="Mujer joven levantando un pulgar" />
                </div>
            </div>

            <div>
                <Form />
            </div>

            <div className="section-1-icono">
                <img src={iconosection1} alt="Icono de dos personas conversando" />

                <h3 className="bold-text-2">Asesoría Gratuita</h3>
            </div>
        </section>
    );
};
