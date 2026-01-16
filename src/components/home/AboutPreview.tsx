import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const benefits = [
    'Personal Técnico Altamente Calificado',
    'Cumplimiento de Normas de Seguridad',
    'Tecnología de Última Generación',
    'Atención Personalizada 24/7'
];

const AboutPreview = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -60 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-secondary-50">
                            <img
                                src="/images/about_bright_fixed.png"
                                alt="Tecnología Industrial"
                                className="w-full h-full object-cover aspect-[4/3] hover:scale-110 transition-transform duration-[1.5s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                        </div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-10 -right-6 bg-primary-600 p-8 rounded-3xl shadow-2xl text-white transform hover:rotate-3 transition-transform cursor-default hidden md:block"
                        >
                            <div className="text-5xl font-black mb-1">+10</div>
                            <div className="text-sm font-bold uppercase tracking-widest opacity-80">Años de Expertise</div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            className="h-1.5 bg-primary-500 mb-6"
                        />
                        <h2 className="text-primary-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Eficiencia Garantizada</h2>
                        <h3 className="text-4xl md:text-5xl font-[900] text-secondary-900 mb-8 leading-[1.1] tracking-tight">
                            Su Socio Estratégico en <span className="text-primary-500">Soluciones Industriales</span>
                        </h3>
                        <p className="text-xl text-secondary-600 mb-10 leading-relaxed font-light">
                            En FIXMANTECH, transformamos desafíos complejos en soluciones de ingeniería de precisión.
                            Nuestro compromiso trasciende el mantenimiento: optimizamos su infraestructura con tecnología de punta.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center gap-4 p-4 bg-secondary-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-primary-100"
                                >
                                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                        <CheckCircle size={20} />
                                    </div>
                                    <span className="text-secondary-800 font-bold text-sm tracking-tight">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            to="/nosotros"
                            className="inline-flex items-center justify-center px-10 py-5 bg-secondary-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-500/30 active:scale-95"
                        >
                            Ver Nuestra Historia
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
