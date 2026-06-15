import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import CTA from '../components/home/CTA';
import CoreValues from '../components/home/CoreValues';

const HomePage = () => {
    return (
        <div className="w-full">
            <Hero />
            <ServicesPreview />
            <div className="home-lower">
                <AboutPreview />
                <CTA />
                <CoreValues />
            </div>
        </div>
    );
};

export default HomePage;
