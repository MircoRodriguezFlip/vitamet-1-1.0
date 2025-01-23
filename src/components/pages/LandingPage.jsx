import { Section1LP } from '../imports/Section1Lp';
import { Section2LP } from '../imports/Section2Lp';
import { Section3LP } from '../imports/Section3Lp';
import { Section4LP } from '../imports/Section4Lp';
import { Section5LP } from '../imports/Section5Lp';

export const LandingPage = () => {
    return (
        <main>
            <section>
                <Section1LP />
            </section>

            <section>
                <Section2LP />
            </section>

            <section>
                <Section3LP />
            </section>

            <section>
                <Section4LP />
            </section>

            <section>
                <Section5LP />
            </section>
        </main>
    );
};
