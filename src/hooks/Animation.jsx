import { useEffect, useRef } from 'react';

/**
 * Hook para manejar animaciones basadas en IntersectionObserver.
 *
 * @param {string} className - La clase que se añadirá cuando el elemento sea visible.
 * @param {object} options - Opciones para el IntersectionObserver (e.g., threshold, rootMargin).
 * @returns {React.RefObject} - Devuelve un ref que debe asignarse al elemento animado.
 */
const useIntersectionAnimation = (className, options = { threshold: 0.5 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target); // Deja de observar el elemento.
                }
            });
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [className, options]);

    return elementRef;
};

export default useIntersectionAnimation;
