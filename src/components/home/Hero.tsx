import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Bright Background Image & Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent z-10" />
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="/images/hero_bright_fixed.png"
                    alt="Modern Industrial Facility"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-primary-600 font-black text-lg mb-4 uppercase tracking-[0.2em]">
                            Ingeniería y Servicios Técnicos
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-[900] text-secondary-900 mb-6 leading-tight tracking-tighter">
                            Soluciones Integrales para su <span className="text-primary-500">Industria</span>
                        </h1>
                        <p className="text-xl text-secondary-900 mb-8 leading-relaxed max-w-2xl font-light">
                            Especialistas en mantenimiento industrial, instalaciones eléctricas y proyectos de ingeniería.
                            Garantizamos eficiencia, seguridad y calidad superior.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/51960153222?text=Hola,%20quisiera%20solicitar%20una%20cotización"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-10 py-5 bg-primary-600 text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-secondary-900 transition-all shadow-2xl shadow-primary-500/30"
                            >
                                Solicitar Cotización
                            </motion.a>
                            <Link
                                to="/servicios"
                                className="group px-10 py-5 bg-primary-600 text-white rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-secondary-900 transition-all shadow-2xl shadow-primary-500/30"
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
