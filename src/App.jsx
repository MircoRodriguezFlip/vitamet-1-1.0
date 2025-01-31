import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import { LandingPage } from './components/pages/LandingPage';
import { PoliticasPage } from './components/pages/PoliticasPage';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

function App() {
    return (
        <BrowserRouter basename="/vitamet-1-1.0">
            <ScrollToTop />

            <NavBar id="inicio" />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/politica-privacidad" element={<PoliticasPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
