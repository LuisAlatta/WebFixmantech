import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
    icon: string;
    title: string;
    description: string;
}

// Order and content per client correction (PDF pág. 2). Icons are numbered 1-8.
const services: Service[] = [
    {
        icon: '/nuevas imagenes/iconos servicios/1.png',
        title: 'Fabricación de Estructuras Metálicas en General',
        description: 'Diseño, fabricación y montaje de estructuras metálicas para los sectores minero e industrial, cumpliendo altos estándares de calidad, seguridad y precisión.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/2.png',
        title: 'Fabricación y Mantenimiento de Chutes de Transferencia',
        description: 'Fabricación de chutes de transferencia personalizados para minería e industria, utilizando aceros antidesgaste y revestimientos especializados.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/3.png',
        title: 'Revestimiento de Chutes',
        description: 'Diseño y fabricación especializada con acero estructural y revestimiento: acero al manganeso, carburo de cromo, carburo de tungsteno y cerámico en alúmina al 92%, ZTA, ARZ.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/4.png',
        title: 'Suministro y Mantenimiento de Colectores de Polvo',
        description: 'Filtros de mangas con eficiencia de filtrado de hasta 5 micrones, ignífugos y para humedad.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/5.png',
        title: 'Instalación de Sistemas Contra Polución',
        description: 'Supresión de polvo mediante niebla seca de alta eficiencia.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/6.png',
        title: 'Fabricación de Ductos para Sistemas de Colección de Polvo',
        description: 'Fabricación especializada en acero al carbono con revestimiento cerámico, poliuretano y caucho.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/7.png',
        title: 'Reparación de Tolvas',
        description: 'Mantenimiento parcial y total de tolvas CAT y KOMATSU con personal homologado.'
    },
    {
        icon: '/nuevas imagenes/iconos servicios/8.png',
        title: 'Mantenimiento de Plantas',
        description: 'Servicio preventivo y correctivo asegurando operación continua y segura.'
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-secondary-950">
            {/* Section background image (IMAGEN 003) with dark overlay for contrast */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/nuevas imagenes/IMAGEN 003.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mb-16"
                    style={{ textShadow: '0 2px 14px rgba(0,0,0,0.65)' }}
                >
                    <h2 className="text-primary-400 font-black uppercase tracking-[0.3em] text-sm mb-4">Especialidades</h2>
                    <h3 className="text-4xl md:text-6xl font-[900] text-white uppercase tracking-tight leading-tight mb-6">
                        Soluciones de Alto Valor para la <span className="text-primary-500">Industria Minera</span>
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <p className="text-secondary-100 text-2xl font-light leading-relaxed max-w-2xl">
                            Contribuimos a la continuidad operativa mediante servicios de ingeniería, mantenimiento y fabricación metalmecánica <span className="font-bold text-white">especializada</span>.
                        </p>
                        <Link
                            to="/servicios"
                            className="group inline-flex items-center gap-4 shrink-0 whitespace-nowrap text-white font-black tracking-widest text-lg uppercase hover:text-primary-400 transition-colors"
                        >
                            Ver Portafolio Completo <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary-600 group-hover:text-white text-secondary-900 transition-all"><ArrowRight className="w-5 h-5" /></div>
                        </Link>
                    </div>
                </motion.div>

                <div className="svc-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            whileHover={{ y: -15 }}
                            className="h-full"
                        >
                            <Link
                                to="/servicios"
                                className="flex flex-col h-full bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all group border border-transparent hover:border-primary-100"
                            >
                                <div className="flex flex-col items-start gap-4 mb-5">
                                    <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner p-2.5">
                                        <img src={service.icon} alt="" aria-hidden="true" className="w-full h-full object-contain" />
                                    </div>
                                    <h4 className="text-lg font-black tracking-tight text-secondary-900 uppercase leading-tight group-hover:text-primary-600 transition-colors">
                                        {service.title}
                                    </h4>
                                </div>
                                <p className="text-black text-lg leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
