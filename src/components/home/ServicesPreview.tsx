import { motion } from 'framer-motion';
import { Shield, Wrench, Settings, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Shield />,
        title: 'Revestimiento de Chutes',
        description: 'Diseño y fabricación con acero A36 y revestido con plancha de acero manganeso.'
    },
    {
        icon: <Wrench />,
        title: 'Tanques y Ductos',
        description: 'Fabricación especializada en acero inoxidable y A36 para diversas industrias.'
    },
    {
        icon: <Hammer />,
        title: 'Reparación de Tolvas',
        description: 'Mantenimiento parcial y total de tolvas CAT y KOMATSU con personal homologado.'
    },
    {
        icon: <Settings />,
        title: 'Mantenimiento de Plantas',
        description: 'Servicio preventivo y correctivo asegurando operación continua y segura.'
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-24 bg-primary-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 transform translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-primary-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Especialidades</h2>
                        <h3 className="text-4xl md:text-5xl font-[900] text-secondary-900 tracking-tight mb-6 uppercase">Expertos en <span className="text-primary-500 underline decoration-8 underline-offset-8">Alta Ingeniería</span></h3>
                        <p className="text-secondary-600 text-xl font-light leading-relaxed">
                            Proporcionamos soluciones técnicas que extienden drásticamente la vida útil de sus activos industriales.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/servicios"
                            className="group flex items-center gap-4 text-secondary-900 font-black tracking-widest text-xs uppercase hover:text-primary-600 transition-colors"
                        >
                            Ver Portafolio Completo <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-all"><ArrowRight className="w-5 h-5" /></div>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all group border border-transparent hover:border-primary-100"
                        >
                            <div className="w-16 h-16 bg-secondary-50 text-primary-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                <div className="scale-125">{service.icon}</div>
                            </div>
                            <h4 className="text-xl font-black mb-4 tracking-tight text-secondary-900 uppercase leading-none group-hover:text-primary-600 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-secondary-500 text-sm leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
