import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit, estados } = useForm(
        {
            nombreCompleto: '',
            telefono: '+52',
            email: '',
            estado: '',
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
        <form onSubmit={handleSubmit} className="form" noValidate>
            {/* NOMBRE COMPLETO */}
            <div className="campo-precalificar-form">
                <label htmlFor="nombreCompleto" className="light-text">
                    Nombre Completo:
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

            {/* EMAIL */}

            <div className="campo-precalificar-form">
                <label htmlFor="email" className="light-text">
                    Correo Electrónico:
                </label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* TELÉFONO */}

            <div className="campo-precalificar-form">
                <label htmlFor="telefono" className="light-text">
                    Teléfono:
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

            {/* ESTADO */}
            <div className="campo-precalificar-form">
                <label htmlFor="estado" className="light-text">
                    Estado donde vives:
                </label>
                <select className="form-control select-control" id="estado" name="estado" value={formData.estado} onChange={handleChange}>
                    {estados.map((estado) => (
                        <option key={estado} value={estado}>
                            {estado}
                        </option>
                    ))}
                </select>
                {errors.estado && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.estado}
                    </small>
                )}
            </div>

            {/* BOTÓN DE ENVÍO */}
            <div className="envio-form-container">
                <button type="submit" className="botonForm bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    ENVIAR
                </button>

                {/* Mostrar el spinner solo si el formulario está en proceso de envío */}
                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>
        </form>
    );
};
