import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Shield,
    Wrench,
    Database,
    Factory,
    Settings,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

interface ContentBlock {
    type: 'list' | 'paragraph' | 'section';
    items?: string[];
    text?: string;
    title?: string;
}

interface Service {
    id: number;
    title: string;
    image: string;
    modalImage: string;
    icon: React.ReactNode;
    content: ContentBlock[];
}

const services: Service[] = [
    {
        id: 1,
        title: 'FABRICACIÓN Y REVESTIMIENTO DE CHUTES DE TRANSFERENCIA',
        image: '/nuevas imagenes/IMAGEN 006 SERVICIOS FABRICACION Y MNTTO DE CHUTES.png',
        modalImage: '/nuevas imagenes/IMAGEN 007 RESTIMIENTO.png',
        icon: <Shield />,
        content: [
            {
                type: 'list', items: [
                    'Diseño de ingeniería',
                    'Servicios de instalación, reparación y mantenimiento en campo',
                    'Revestimientos antiabrasivos que maximizan la vida útil de los equipos y reducen el desgaste operativo.'
                ]
            },
            { type: 'paragraph', text: 'En FIXMANTECH S.A.C. trabajamos con productos manufacturados con aceros brinell 400, 500 HB.' }
        ]
    },
    {
        id: 2,
        title: 'SISTEMAS DE SUPRESIÓN DE POLVO DE ALTA TECNOLOGÍA',
        image: '/nuevas imagenes/IMAGEN 008 SISTEMAS DE SUPRESIÓN DE POLVO.png',
        modalImage: '/nuevas imagenes/IMAGEN 009 - SISTEMA DE NIEBLA.png',
        icon: <Wrench />,
        content: [
            { type: 'paragraph', text: 'Sistema de niebla seca para control de polución.' },
            {
                type: 'list', items: [
                    'Consumo de agua optimizado, desde 0.5 L/min por punto de aplicación.',
                    'Reduce la contaminación ambiental y mejora la calidad del aire.',
                    'Minimiza el consumo de agua en comparación con sistemas convencionales.',
                    'Aplicable en chancado primario, secundario y terciario. Fajas transportadoras.',
                    'Zarandas vibratorias.',
                    'Tolvas de recepción y descarga.'
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'SUMINISTRO Y MANTENIMIENTO DE COLECTORES DE POLVO',
        image: '/nuevas imagenes/IMAGEN 010 MANTO COLECTORES DE POLVO.png',
        modalImage: '/nuevas imagenes/IMAGEN 011.png',
        icon: <Database />,
        content: [
            {
                type: 'list', items: [
                    'Nuestros filtros de mangas están diseñados y fabricados con materiales de alta calidad.',
                    'Filtración superior para máxima protección del sistema y del personal.',
                    'Fabricados con material ignífugo.',
                    'Cambio de filtros en campo.'
                ]
            },
            {
                type: 'section', title: 'Soporte Técnico Especializado', items: [
                    'Asesoría y respaldo técnico en cada etapa del servicio y postventa.'
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'MANTENIMIENTO DE PLANTAS CONCENTRADORAS',
        image: '/nuevas imagenes/IMAGEN 012 MANTO PLANTAS.png',
        modalImage: '/nuevas imagenes/IMAGEN 013 MANTO PLANTAS.png',
        icon: <Settings />,
        content: [
            {
                type: 'list', items: [
                    'Mantenimiento general en plantas concentradoras, tanto preventivo como correctivo.',
                    'Fabricación y montaje de estructuras metálicas, bases y soportes para equipos industriales.',
                    'Diseño y ejecución de proyectos personalizados, según las necesidades operativas de cada planta.',
                    'Asistencia técnica en planta, asegurando una operación continua y segura.'
                ]
            },
            {
                type: 'section', title: 'Trabajos Especializados', items: [
                    'Cambio de polines',
                    'Cambio de válvulas Pinck y Clarkson',
                    'Mantenimiento de zarandas',
                    'Hidrociclones y cambio de poleas',
                    'Mesa centradora',
                    'HPGR'
                ]
            },
            { type: 'paragraph', text: 'Trabajamos de la mano con nuestros clientes para garantizar el funcionamiento óptimo de sus instalaciones, reduciendo tiempos de parada y aumentando la productividad. Nuestro compromiso es ofrecer un servicio confiable, seguro y de calidad, respaldado por la experiencia y profesionalismo de nuestro personal.' }
        ]
    },
    {
        id: 5,
        title: 'FABRICACIÓN DE ESTRUCTURAS METÁLICAS',
        image: '/nuevas imagenes/IMAGEN 15 FABRICACION.png',
        modalImage: '/nuevas imagenes/IMAGEN 016.png',
        icon: <Factory />,
        content: [
            { type: 'paragraph', text: 'Soluciones integrales en fabricación y montaje de estructuras metálicas con calidad, precisión y compromiso con la excelencia operativa.' },
            {
                type: 'section', title: 'Nuestros Servicios Incluyen', items: [
                    'Fabricación de estructuras metálicas livianas y pesadas.',
                    'Construcción de plataformas, soportes, chutes y tolvas.',
                    'Fabricación de transportadores y sistemas de manejo de materiales.',
                    'Soldadura especializada y procesos de corte y conformado.',
                    'Maquinado, plegado y corte por plasma CNC.',
                    'Montaje y adecuación de componentes en planta y campo.'
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'DISEÑO E INGENIERÍA',
        image: '/nuevas imagenes/IMAGEN 017.png',
        modalImage: '/nuevas imagenes/IMAGEN 18.png',
        icon: <Database />,
        content: [
            { type: 'paragraph', text: 'En FIXMANTECH S.A.C. desarrollamos soluciones de ingeniería orientadas a la fabricación, mantenimiento y optimización de equipos para plantas mineras e industriales.' },
            { type: 'paragraph', text: 'Realizamos planos de fabricación y detalle en AutoCAD, así como modelos 3D en SolidWorks e Inventor, permitiendo visualizar, validar y mejorar cada componente antes de su fabricación o montaje.' },
            {
                type: 'section', title: 'Nuestro Servicio Incluye', items: [
                    'Ingeniería conceptual, básica y de detalle.',
                    'Modelamiento 3D de estructuras, tolvas, chutes y transportadores.',
                    'Planos de fabricación y montaje.',
                    'Desarrollo de despieces y listas de materiales.',
                    'Verificación de interferencias y mejoras constructivas.',
                    'Soporte técnico para fabricación y montaje en campo.'
                ]
            }
        ]
    }
];

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedService]);

    return (
        <div className="pt-20 bg-primary-50 min-h-screen">
            {/* Bright Hero Section */}
            <div className="bg-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent z-10" />
                    <img
                        src="/nuevas imagenes/IMAGEN 005.png"
                        alt="Ingeniería Industrial"
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-[900] mb-8 tracking-tighter uppercase leading-none text-secondary-900">
                            INGENIERÍA DE PLASMA <span className="text-primary-500">DE ALTA PRECISIÓN</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-secondary-900 max-w-3xl font-light leading-relaxed">
                            Desarrollamos soluciones técnicas personalizadas que impulsan la eficiencia, la innovación y el crecimiento a medida para las grandes empresas.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-24 -mt-16 relative z-30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedService(service)}
                            className="group relative h-96 rounded-[3rem] overflow-hidden cursor-pointer shadow-xl border-8 border-white"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-secondary-900/40 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                                <div>
                                    <h4 className="text-2xl font-[900] text-white uppercase tracking-tight leading-none mb-4 group-hover:text-primary-400 transition-colors">
                                        {service.title}
                                    </h4>
                                    <div className="flex items-center text-primary-500 font-black text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                                        Explorar Detalles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-secondary-950/95 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[4rem] shadow-2xl relative z-10 overflow-hidden flex flex-col"
                        >
                            <div className="flex flex-col lg:flex-row h-full">
                                {/* Image Column */}
                                <div className="w-full lg:w-1/2 h-80 lg:h-auto relative">
                                    <img
                                        src={selectedService.modalImage}
                                        alt={selectedService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent lg:bg-gradient-to-r" />
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="absolute top-8 left-8 p-4 bg-white/10 hover:bg-white/30 rounded-full text-white backdrop-blur-lg border border-white/20 transition-all"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Content Column */}
                                <div className="w-full lg:w-1/2 p-10 lg:p-20 overflow-y-auto">

                                    <h2 className="text-4xl lg:text-5xl font-[900] text-secondary-900 mb-8 leading-none uppercase tracking-tighter text-balance">
                                        {selectedService.title}
                                    </h2>

                                    <div className="space-y-8 mb-12">
                                        {selectedService.content.map((block, idx) => (
                                            <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                                                {block.type === 'section' && (
                                                    <div className="mb-6">
                                                        <h3 className="text-primary-600 font-black text-sm uppercase tracking-widest mb-4 border-l-4 border-primary-500 pl-4">
                                                            {block.title}
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {block.items?.map((item, i) => (
                                                                <div key={i} className="flex items-start gap-4 group">
                                                                    <div className="mt-1 p-0.5 bg-primary-50 text-primary-600 rounded-full group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                                                        <CheckCircle2 size={16} />
                                                                    </div>
                                                                    <p className="text-lg text-secondary-600 font-light leading-relaxed">{item}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {block.type === 'list' && (
                                                    <div className="space-y-4">
                                                        {block.items?.map((item, i) => (
                                                            <div key={i} className="flex items-start gap-4 group">
                                                                <div className="mt-1.5 p-1 bg-primary-50 text-primary-600 rounded-full group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                                                    <CheckCircle2 size={18} />
                                                                </div>
                                                                <p className="text-xl text-secondary-600 font-light leading-relaxed italic">{item}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {block.type === 'paragraph' && (
                                                    <div className="bg-secondary-50 p-8 lg:p-10 rounded-[2.5rem] border border-secondary-100 shadow-inner">
                                                        <p className="text-lg text-secondary-900 font-bold leading-relaxed">{block.text}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="https://wa.me/51996087437"
                                        className="inline-flex items-center gap-4 py-5 px-12 bg-secondary-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-all shadow-xl active:scale-95"
                                    >
                                        Consultar Proyecto Especial <ArrowRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Final Call to Action */}
            <div className="container mx-auto px-4 pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-16 rounded-[4rem] bg-secondary-900 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/hero_bright_fixed.png')] bg-cover grayscale group-hover:scale-105 transition-transform duration-[3s]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-[900] text-white mb-8 tracking-tighter uppercase leading-none">
                            ¿Listo para llevar su industria al <span className="text-primary-500">Siguiente Nivel</span>?
                        </h2>
                        <a
                            href="https://wa.me/51996087437"
                            className="inline-block px-16 py-6 bg-white text-secondary-900 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary-600 hover:text-white transition-all shadow-2xl active:scale-95"
                        >
                            Solicitar Presupuesto Técnico
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
