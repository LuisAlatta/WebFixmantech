import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Shield,
    Wrench,
    Database,
    Hammer,
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
    icon: React.ReactNode;
    content: ContentBlock[];
}

const services: Service[] = [
    {
        id: 1,
        title: 'FABRICACIÓN Y REVESTIMIENTO DE CHUTES DE TRASFERENCIA',
        image: '/images/services/chutes_revestimiento.png',
        icon: <Shield />,
        content: [
            {
                type: 'list', items: [
                    'Diseño de ingeniería',
                    'Fabricación con acero A36 y revestido con plancha de acero manganeso.',
                    'Soldadura ER7100 con mezcla de argón y CO2'
                ]
            },
            { type: 'paragraph', text: 'En fixmantech S.A.C. contamos con los productos semi-manufacturados TIVAR 1000 UHMW, TIVAR 88 UHMW, TIVAR 88-2 UHMW y TIVAR HOT de Quadrant EPP, lider mundial en fabricación de materiales para revestimientos.' }
        ]
    },
    {
        id: 2,
        title: 'FABRICACIÓN E INSTALACIÓN DE CHUTES DE TRANSFERENCIA',
        image: '/images/services/chutes_instalacion.png',
        icon: <Wrench />,
        content: [
            {
                type: 'list', items: [
                    'Soluciones duraderas y eficientes',
                    'Instalación en planta con personal calificado',
                    'Diseños personalizados según requerimientos técnicos',
                    'Materiales de alta resistencia al desgaste y la abrasión'
                ]
            },
            { type: 'paragraph', text: 'Ofrecemos servicios especializados en diseño, fabricación e instalación de chutes, incluyendo chutes de transferencia, adaptados a las necesidades específicas de cada operación. Nuestro trabajo garantiza una óptima eficiencia en el manejo de materiales, minimizando el desgaste y mejorando la seguridad operativa.' }
        ]
    },
    {
        id: 3,
        title: 'DISEÑO Y FABRICACIÓN DE TANQUES Y DUCTOS',
        image: '/images/services/tanques_ductos.png',
        icon: <Database />,
        content: [
            {
                type: 'section', title: 'A. FABRICACIÓN DE TANQUES', items: [
                    'Para combustible',
                    'Tanques para agua',
                    'Tanques para equipos móviles, recubiertos con pintura epoxica y deflectores que ayudan a la estabilidad'
                ]
            },
            {
                type: 'section', title: 'B. FABRICACIÓN DE TANQUES ESTACIONARIOS', items: [
                    'Fabricación de carretes recubiertas con Poliuretano cerámico',
                    'Fabricación de codos de 90, 45,30 grados',
                    'Fabricación de conos truncadosy pantalones',
                    'Fabricación de ductos en acero inox 299, 309, 316, 316L, A36',
                    'Tuberías para ductos de colectores de polvos'
                ]
            },
            {
                type: 'section', title: 'C. FABRICACIÓN DE TANQUES ESTACIONARIOS', items: [
                    'Fabricación en acero inoxidable para industria alimentaria y con plancha de acero en A36, barandas protegidas con una capa de pintura Epóxica Anticorrosiva; aplicando Ensayos no Destructivos a la Soldadura para el Control de Calidad'
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'REPARACION PARCIAL Y TOTAL DE TOLVA CAT Y KOMATZU',
        image: '/images/services/reparacion_tolvas.png',
        icon: <Hammer />,
        content: [
            {
                type: 'list', items: [
                    'Aplicando normas de soldadura',
                    'Personal técnico homologado',
                    'Inspección continua en la aplicación de soldadura',
                    'Precalentado correcto de Materiales en casos de planchas de 400, 500 Brinell'
                ]
            },
            { type: 'paragraph', text: 'En FIXMANTECH SAC tenemos la capacidad para fabricar y reparar cucharones de toda capacidad para cargadores, scootrams, escavadoras y retroexcavadoras de equipos para movimiento de tierra de marcas CAT, KOMATSU, VOLVO, HITACHI, TEREX, LIEBHERR; entre otras importantes marcas, así como fabricación de pines y otros para sus equipos. La reparación de cucharones utilizando planchas bimetalicas anti-desgaste T1 500BHM,CHRONIT T1550 BHM, plancha aleada de gran resistencia al desgaste de abrasión, impacto y deslizamiento.' }
        ]
    },
    {
        id: 5,
        title: 'FABRICACION DE ESTRUCTURAS METALICAS',
        image: '/images/services/estructuras_metalicas.png',
        icon: <Factory />,
        content: [
            {
                type: 'list', items: [
                    'Servicio de Corte, Plegado',
                    'Corte por Plasma',
                    'Maquinado con Torno y Fresa'
                ]
            },
            { type: 'paragraph', text: 'Somos una empresa especializada en el desarrollo de proyectos de ingeniería y construcción para la gran industria, liderada por un equipo de profesionales jóvenes, con ideas innovadoras, que combinan calidad, compromiso y eficiencia.' }
        ]
    },
    {
        id: 6,
        title: 'MANTENIMIENTO DE PLANTAS CONCENTRADORAS',
        image: '/images/services/mantenimiento_plantas.png',
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
            { type: 'paragraph', text: 'Trabajamos de la mano con nuestros clientes para garantizar el funcionamiento óptimo de sus instalaciones, reduciendo tiempos de parada y aumentando la productividad. Nuestro compromiso es ofrecer un servicio confiable, seguro y de calidad, respaldado por la experiencia y profesionalismo de nuestro personal.' },
            { type: 'paragraph', text: 'FIXMANTECH S.A.C. es una empresa especialista en mantenimiento de plantas industriales. Contamos con amplia experiencia dedicada a la reparación, montaje y mantenimiento industrial. Ofrecemos un mantenimiento preventivo y correctivo de su maquinaria, llevando un control exhaustivo de cada uno de los elementos, previniendo paradas innecesarias y planificando una interveción controlada.' }
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
                        src="/images/services/mantenimiento_plantas.png"
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
                            PRECISIÓN PLASMADA <span className="text-primary-500">EN INGENIERÍA</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-900 max-w-2xl font-light leading-relaxed">
                            SERVICIO Y SOLUCIONES EN INGENIERIA A MEDIDA PARA LAS GRANDES EMPRESAS
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
                                        src={selectedService.image}
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
                                        href="https://wa.me/51960153222"
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
                            href="https://wa.me/51960153222"
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
