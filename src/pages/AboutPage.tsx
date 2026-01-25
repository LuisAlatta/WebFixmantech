import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

// Specialized Shield Icon (Moved up for hoisting/reference safety)
const ShieldIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const values = [
    { icon: <Award className="w-8 h-8" />, title: 'Excelencia', desc: 'Buscamos la perfección técnica en cada detalle operativo.' },
    { icon: <Users className="w-8 h-8" />, title: 'Compromiso', desc: 'Su éxito operativo es la medida de nuestro desempeño.' },
    { icon: <Target className="w-8 h-8" />, title: 'Innovación', desc: 'Implementamos tecnología de vanguardia en procesos.' },
    { icon: <ShieldIcon className="w-8 h-8" />, title: 'Seguridad', desc: 'Cero Riesgos: Nuestra prioridad absoluta en campo.' }
];

const AboutPage = () => {
    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Header section with sophisticated industrial feel */}
            <div className="bg-secondary-900 text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/hero_bright_fixed.png')] bg-cover bg-fixed grayscale" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-6">Nuestra Esencia</h2>
                        <h1 className="text-6xl md:text-8xl font-[900] mb-8 tracking-tighter uppercase leading-none">
                            Ingeniería que <span className="text-primary-500">Trasciende</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Más de una década consolidando la confianza de los gigantes industriales del Perú.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section - The Story */}
            <div className="container mx-auto px-4 py-32">
                <div className="flex flex-col lg:flex-row gap-24 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2"
                    >
                        <div className="w-20 h-2 bg-primary-500 mb-10" />
                        <h2 className="text-primary-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Trayectoria</h2>
                        <h3 className="text-5xl font-[900] text-secondary-900 mb-10 leading-tight tracking-tight uppercase">
                            Décadas de Experiencia en <span className="text-primary-500">Mantenimiento mecánico </span>
                        </h3>
                        <div className="space-y-6 text-xl text-secondary-600 font-light leading-relaxed text-justify">
                            <p>
                                <span className="font-bold text-secondary-900">FIXMANTECH S.A.C.</span> no solo es un proveedor de servicios; somos arquitectos de la continuidad operativa. Nacimos con la visión de elevar los estándares de ingeniería en el país.
                            </p>
                            <p>
                                Hemos consolidado un ecosistema de profesionales altamente especializados que entienden que en la gran industria, cada minuto cuenta. Nuestra historia está forjada en metal, precisión y compromiso absoluto.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-secondary-50">
                            <img
                                src="/images/about_bright_fixed.png"
                                alt="Instalaciones FixmanTech"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-[2s] hover:scale-110"
                            />
                        </div>
                        {/* Numerical Badge */}
                        <div className="absolute -bottom-12 -left-12 bg-primary-600 p-10 rounded-[2rem] shadow-2xl text-white">
                            <div className="text-6xl font-[900] mb-1 leading-none">10+</div>
                            <div className="font-bold uppercase tracking-widest text-xs opacity-80">Años Liderando</div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission & Vision - High Contrast Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
                    <motion.div
                        whileHover={{ y: -15 }}
                        className="bg-secondary-900 p-16 rounded-[4rem] text-white overflow-hidden relative group"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform">
                            <Target size={150} />
                        </div>
                        <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
                            <Target size={32} />
                        </div>
                        <h3 className="text-4xl font-[900] mb-8 uppercase tracking-tighter">Misión</h3>
                        <p className="text-xl text-secondary-300 font-light leading-relaxed">
                            “Proporcionar soluciones integrales de ingeniería innovadoras, confiables y a medida, que optimicen procesos, prolonguen la vida útil de los equipos y generen valor sostenible para nuestros clientes y socios estratégicos en todo el país.”

                        </p> <br />
                        <p className="text-xl text-secondary-300 font-light leading-relaxed">
                            Nos enfocamos en desarrollar y ejecutar proyectos de ingeniería metalmecánica, con los más altos estándares de calidad, seguridad y eficiencia. Nuestro objetivo es apoyar a nuestros clientes en la toma de decisiones estratégicas, enfrentar desafíos operativos complejos y fortalecer su competitividad en un entorno industrial cada vez más exigente.
                            A través de nuestro trabajo, buscamos ser un aliado estratégico que combina innovación, excelencia técnica y visión empresarial, asegurando que cada proyecto entregue resultados tangibles, sostenibles y medibles, alineados con los objetivos de negocio de nuestros clientes y socios estratégicos.

                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -15 }}
                        className="bg-primary-600 p-16 rounded-[4rem] text-white overflow-hidden relative group"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform">
                            <Eye size={150} />
                        </div>
                        <div className="w-16 h-16 bg-white text-primary-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-4xl font-[900] mb-8 uppercase tracking-tighter text-white">Visión</h3>
                        <p className="text-xl text-white/80 font-light leading-relaxed">
                            "Ser reconocidos a nivel nacional como la empresa líder en soluciones integrales de ingeniería, combinando innovación, confiabilidad y excelencia operacional para generar valor tangible y sostenible para nuestros clientes y socios estratégicos.”
                            <br /><br />
                            En FIXMANTECH SAC, aspiramos a transformar la forma en que la ingeniería impulsa los negocios en Perú consolidando nuestra presencia nacional mediante la ejecución de proyectos estratégicos en metalmecánica.
                            Buscamos convertir los desafíos operativos en oportunidades de crecimiento, ofreciendo soluciones a medida que optimizan procesos, prolongan la vida útil de los activos y fortalecen la competitividad de nuestros clientes.
                            Nuestro compromiso con la innovación, la eficiencia y la excelencia nos permite acompañar a empresas de gran escala en la consecución de sus objetivos, generando un impacto positivo, medible y sostenible en cada proyecto que realizamos.
                            Con esta visión, nos posicionamos como un aliado estratégico confiable, respaldado por la experiencia y el reconocimiento de nuestros socios, con la meta de seguir expandiendo nuestra capacidad de servicio a nivel nacional para 2025 y más allá.

                        </p>
                    </motion.div>
                </div>

                {/* Corporate Values - Circular Layout Style */}
                <div className="text-center">
                    <h2 className="text-primary-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Nuestra Filosofía</h2>
                    <h3 className="text-5xl font-[900] text-secondary-900 mb-20 uppercase tracking-tighter">Valores <span className="text-primary-500 underline decoration-8 underline-offset-8">Fundamentales</span></h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="w-24 h-24 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-primary-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                                    {value.icon}
                                </div>
                                <h4 className="text-2xl font-[900] text-secondary-900 mb-4 tracking-tight uppercase leading-none">{value.title}</h4>
                                <p className="text-secondary-500 font-light leading-snug px-4">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trusted Clients Section */}
                    <div className="mt-32 pt-16 border-t-2 border-secondary-100">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-primary-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Nuestros Aliados</h2>
                            <h3 className="text-5xl font-[900] text-secondary-900 mb-12 uppercase tracking-tighter">
                                Empresas que <span className="text-primary-500">Confían</span> en Nosotros
                            </h3>
                            <p className="text-xl text-secondary-600 font-light mb-16 max-w-3xl mx-auto">
                                Trabajamos con las empresas más importantes del sector industrial, brindando soluciones de ingeniería de clase mundial.
                            </p>
                            <div className="bg-white p-12 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] border-4 border-secondary-50 max-w-4xl mx-auto">
                                <img
                                    src="/images/clientes_logos.png"
                                    alt="Empresas clientes de FIXMANTECH"
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
