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
    CheckCircle2,
    Mail
} from 'lucide-react';
import { buildQuoteMailto } from '../data/contact';

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
    modalImages?: string[];
    icon: React.ReactNode;
    content: ContentBlock[];
}

const services: Service[] = [
    {
        id: 1,
        title: 'FABRICACIÓN Y MANTENIMIENTO DE CHUTES DE TRANSFERENCIA',
        image: '/nuevas imagenes/IMAGEN 006 SERVICIOS FABRICACION Y MNTTO DE CHUTES.png',
        modalImage: '/nuevas imagenes/IMAGEN 007 RESTIMIENTO.png',
        icon: <Shield />,
        content: [
            {
                type: 'list', items: [
                    'Diseño de ingeniería',
                    'Fabricación con acero A36 y revestido con plancha de acero manganeso.',
                    'Soldadura ER7100 con mezcla de argón y CO2',
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
            { type: 'paragraph', text: 'Tecnología en supresión de polvo de alta eficiencia utilizando microgotas atomizadas que capturan partículas suspendidas en el aire, controlando emisiones fugitivas sin humedecer significativamente el material procesado y/o equipos, aplicando niebla seca, consumo mínimo de agua.' },
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
        modalImage: '/nuevas imagenes/colectores_polvo_modal.jpg',
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
        modalImages: ['/nuevas imagenes/IMAGEN 013 MANTO PLANTAS.png', '/nuevas imagenes/IMAGEN 14.png'],
        icon: <Settings />,
        content: [
            {
                type: 'list', items: [
                    'Mantenimiento general en plantas concentradoras, tanto preventivo como correctivo.',
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
                        <h1 className="text-6xl md:text-8xl font-[900] mb-8 tracking-tighter uppercase leading-none text-white">
                            INGENIERÍA DE PLASMA <span className="text-primary-500">DE ALTA PRECISIÓN</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-white max-w-3xl font-light leading-relaxed">
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
                                    <div className="flex items-center justify-end text-white font-black text-sm md:text-base tracking-[0.25em] uppercase group-hover:text-primary-400 transition-colors">
                                        Explorar Detalles <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
                            className="svc-modal bg-white w-full max-w-7xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col"
                        >
                            <div className="flex flex-col lg:flex-row flex-1 min-h-0">
                                {/* Image Column */}
                                <div className="w-full lg:w-1/2 h-72 lg:h-auto relative shrink-0 overflow-hidden">
                                    {selectedService.modalImages ? (
                                        <div className="absolute inset-0 flex flex-col">
                                            {selectedService.modalImages.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt={selectedService.title}
                                                    className="w-full h-1/2 object-cover"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <img
                                            src={selectedService.modalImage}
                                            alt={selectedService.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-secondary-900/10 pointer-events-none" />
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="absolute top-6 left-6 p-3 bg-white/10 hover:bg-white/30 rounded-full text-white backdrop-blur-lg border border-white/20 transition-all"
                                    >
                                        <X size={22} />
                                    </button>
                                </div>

                                {/* Content Column */}
                                <div className="w-full lg:w-1/2 min-h-0 p-6 lg:p-7 overflow-y-auto flex flex-col">

                                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-[900] text-secondary-900 mb-4 leading-tight uppercase tracking-tight text-balance shrink-0">
                                        {selectedService.title}
                                    </h2>

                                    <div className="flex-1 flex flex-col justify-evenly gap-2">
                                        {selectedService.content.map((block, idx) => (
                                            <div key={idx}>
                                                {block.type === 'section' && (
                                                    <div>
                                                        <h3 className="text-primary-600 font-black text-xl uppercase tracking-widest mb-2.5 border-l-4 border-primary-500 pl-3">
                                                            {block.title}
                                                        </h3>
                                                        <div className="grid grid-cols-1 gap-y-3">
                                                            {block.items?.map((item, i) => (
                                                                <div key={i} className="flex items-start gap-3 group">
                                                                    <CheckCircle2 size={22} className="text-primary-600 shrink-0 mt-0.5" />
                                                                    <p className="text-xl font-bold text-black leading-relaxed">{item}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {block.type === 'list' && (
                                                    <div className="space-y-3">
                                                        {block.items?.map((item, i) => (
                                                            <div key={i} className="flex items-start gap-3 group">
                                                                <CheckCircle2 size={22} className="text-primary-600 shrink-0 mt-0.5" />
                                                                <p className="text-xl font-bold text-black leading-relaxed">{item}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {block.type === 'paragraph' && (
                                                    <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100 shadow-inner">
                                                        <p className="text-xl font-bold text-black leading-relaxed">{block.text}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap items-center justify-end gap-3 mt-6 shrink-0">
                                        <a
                                            href={buildQuoteMailto(
                                                `Consulta de proyecto: ${selectedService.title}`,
                                                `Hola, deseo consultar sobre el servicio: ${selectedService.title}.`
                                            )}
                                            className="inline-flex items-center gap-3 py-4 px-8 bg-white text-secondary-900 rounded-full font-black uppercase tracking-widest text-lg border-2 border-secondary-900 hover:bg-secondary-900 hover:text-white transition-all shadow-xl active:scale-95"
                                        >
                                            <Mail size={18} /> Por Correo
                                        </a>
                                        <a
                                            href="https://wa.me/51996087437"
                                            className="inline-flex items-center gap-3 py-4 px-10 bg-secondary-900 text-white rounded-full font-black uppercase tracking-widest text-lg hover:bg-primary-600 transition-all shadow-xl active:scale-95"
                                        >
                                            Consultar Proyecto Especial <ArrowRight size={18} />
                                        </a>
                                    </div>
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
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="https://wa.me/51996087437"
                                className="inline-block px-16 py-6 bg-white text-secondary-900 rounded-full font-black uppercase tracking-widest text-lg md:text-xl hover:bg-primary-600 hover:text-white transition-all shadow-2xl active:scale-95"
                            >
                                Solicitar Presupuesto Técnico
                            </a>
                            <a
                                href={buildQuoteMailto('Solicitud de Presupuesto Técnico', 'Hola, deseo solicitar un presupuesto técnico.')}
                                className="inline-flex items-center gap-3 px-16 py-6 bg-transparent text-white rounded-full font-black uppercase tracking-widest text-lg md:text-xl border-2 border-white hover:bg-white hover:text-secondary-900 transition-all shadow-2xl active:scale-95"
                            >
                                <Mail size={20} /> Por Correo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
