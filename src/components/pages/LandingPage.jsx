import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Section1LP } from '../imports/Section1Lp';
import { Section2LP } from '../imports/Section2Lp';
import { Section3LP } from '../imports/Section3Lp';
import { Section4LP } from '../imports/Section4Lp';
import { Section5LP } from '../imports/Section5Lp';

export const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main className="landing-page-container fade-in">
            <section>
                <Section1LP />
            </section>

            <section id="section2">
                <Section2LP />
            </section>

            <section id="section3">
                <Section3LP />
            </section>

            <section id="section4">
                <Section4LP />
            </section>

            <section id="section5">
                <Section5LP />
            </section>
        </main>
    );
};
