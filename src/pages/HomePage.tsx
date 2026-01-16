import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import CTA from '../components/home/CTA';

const HomePage = () => {
    return (
        <div className="w-full">
            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <CTA />
        </div>
    );
};

export default HomePage;
