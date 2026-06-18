import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import QuoteButton from '../ui/QuoteButton';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-36 pb-20 md:pt-40 md:pb-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="/nuevas imagenes/portada_inicio.jpg"
                    alt="Modern Industrial Facility"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay corporate logo (top-left, only on hero) */}
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                src="/nuevas imagenes/logocompletosinfondo.png"
                alt="FIXMANTECH"
                className="absolute top-32 md:top-36 left-6 md:left-12 z-20 w-32 md:w-44 h-auto object-contain pointer-events-none drop-shadow-xl"
            />

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-[900] text-white mb-6 leading-tight tracking-tighter">
                            Soluciones Integrales para su <span className="text-primary-500">Industria</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed max-w-2xl font-light">
                            Desarrollamos soluciones especializadas en mantenimiento industrial y proyectos de ingeniería
                            que permiten maximizar la confiabilidad y disponibilidad de planta, fortaleciendo el desempeño
                            de los procesos eléctricos, mecánicos y operacionales, y garantizando una operación segura,
                            eficiente y sostenible.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <QuoteButton
                                className="group px-12 py-6 bg-primary-600 text-white rounded-full font-black uppercase tracking-widest text-lg md:text-xl flex items-center gap-3 hover:bg-secondary-900 transition-all shadow-2xl shadow-primary-500/30"
                            >
                                Solicitar Cotización
                            </QuoteButton>
                            <Link
                                to="/servicios"
                                className="group px-12 py-6 bg-primary-600 text-white rounded-full font-black uppercase tracking-widest text-lg md:text-xl flex items-center gap-3 hover:bg-secondary-900 transition-all shadow-2xl shadow-primary-500/30"
                            >
                                Nuestros Servicios
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
