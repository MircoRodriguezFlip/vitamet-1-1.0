import { useState } from 'react';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            const phoneNumber = value.replace(/\D/g, '');
            const newPhoneValue = phoneNumber ? '+52' + phoneNumber.slice(2) : '+52';
            setFormData((prevData) => ({ ...prevData, telefono: newPhoneValue }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Validar nombre completo
        validateNombreCompleto(newErrors);

        // Validar teléfono si corresponde
        validateTelefono(newErrors);

        // Validar correo si corresponde
        validateEmail(newErrors);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Funciones de validación individuales

    const validateNombreCompleto = (newErrors) => {
        if (!formData.nombreCompleto.trim()) {
            newErrors.nombreCompleto = 'Completa este campo.';
        }
    };

    const validateTelefono = (newErrors) => {
        if (!formData.telefono.match(/^\+52\d{10}$/)) {
            newErrors.telefono = 'Ingresa un número de teléfono válido.';
        }
    };

    const validateEmail = (newErrors) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const formDataToSend = {
                nombre: formData.nombreCompleto,
                telefono: formData.telefono,
                email: formData.email,
            };

            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataToSend),
            });

            const data = await response.json();

            if (response.ok) {
                submitCallback(true, data);
            } else {
                submitCallback(false, data);
            }
        } catch (error) {
            submitCallback(false, error);
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        loading,
        handleChange,
        handleSubmit,
    };
};
