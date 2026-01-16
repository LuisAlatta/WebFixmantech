import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Bright Background Image & Gradient */}
            <div className="absolute inset-0 z-0 opacity-20 grayscale">
                <img
                    src="/images/cta_industrial_v3.png"
                    alt="Industrial Complex"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-[1]" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="w-20 h-2 bg-primary-500 mx-auto mb-10" />
                    <h2 className="text-4xl md:text-7xl font-[900] text-secondary-900 mb-8 tracking-tighter uppercase leading-none">
                        ¿Listo para <span className="text-primary-500">Optimizar</span> su Industria?
                    </h2>
                    <p className="text-secondary-600 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Contáctenos hoy mismo y descubra por qué somos el socio estratégico número uno en el sur del país.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/51960153222?text=Hola,%20deseo%20solicitar%20asesoría%20especializada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-secondary-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-primary-600 transition-all duration-300"
                    >
                        Solicitar Asesoría de Ingeniería
                        <ArrowRight size={20} />
                    </motion.a>

                    <div className="mt-12 flex justify-center gap-8 text-secondary-400 font-bold text-xs tracking-widest uppercase">
                        <span>Eficiencia</span>
                        <span className="text-primary-500">•</span>
                        <span>Seguridad</span>
                        <span className="text-primary-500">•</span>
                        <span>Garantía</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
