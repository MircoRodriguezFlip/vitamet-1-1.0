import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit } = useForm(
        {
            nombreCompleto: '',
            telefono: '+52',
            email: '',
        },
        (success, data) => {
            if (success) {
                Swal.fire({
                    title: 'Excelente',
                    text: 'Datos enviados correctamente',
                    icon: 'success',
                    confirmButtonColor: '#9fc750',
                });
            } else {
                Swal.fire({
                    title: 'Ups',
                    text: 'Hubo un error al enviar los datos',
                    icon: 'error',
                    confirmButtonColor: '#1497ee',
                });
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className="content-form " noValidate>
            <p className="campos-obligatorios">(*) Campos obligatorios</p>

            <div className="form-block-1">
                {/* NOMBRE COMPLETO */}
                <div className="input-control">
                    <label htmlFor="nombreCompleto" className="bold-text">
                        *Nombre Completo:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        value={formData.nombreCompleto}
                        onChange={handleChange}
                    />
                    {errors.nombreCompleto && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.nombreCompleto}
                        </small>
                    )}
                </div>
            </div>

            <div className="form-block-2">
                {/* TELÉFONO */}

                <div className="input-control">
                    <label htmlFor="telefono" className="bold-text">
                        *Teléfono:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        maxLength="13"
                    />
                    {errors.telefono && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.telefono}
                        </small>
                    )}
                </div>

                {/* EMAIL */}

                <div className="input-control">
                    <label htmlFor="email" className="bold-text">
                        *Correo Electrónico:
                    </label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.email}
                        </small>
                    )}
                </div>
            </div>

            {/* BOTÓN DE ENVÍO */}
            <div className=" content-envio">
                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
                <button type="submit" className="boton-form bold-text" title="Enviar mi información de contacto" disabled={loading}>
                    Enviar
                </button>
            </div>
        </form>
    );
};
