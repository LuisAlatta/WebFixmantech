import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContentBlock {
    type: 'list' | 'paragraph' | 'section';
    items?: string[];
    text?: string;
    title?: string;
}

interface Product {
    id: string;
    name: string;
    image: string;
    content: ContentBlock[];
}

interface Category {
    id: string;
    name: string;
    image: string;
    count: string;
    description: string;
    products: Product[];
}

const categories: Category[] = [
    {
        id: 'wear-system',
        name: 'WAER SYSTEM--LAMINATED WHITE IRON',
        image: '/images/products/prod_waer_system_cat.png',
        count: 'Alta Resistencia 700BHN',
        description: 'Bloques de desgaste laminados únicos que combinan hierro blanco ASTM A532 con acero dulce soldable.',
        products: [
            {
                id: 'ws-001',
                name: 'HARD TECH (Barras de Cuña)',
                image: '/images/products/prod_hard_tech.png',
                content: [
                    { type: 'paragraph', text: 'El diseño único y moldeable de las barras de cuña Hyster-Wear está disponible en varias longitudes, grados y tamaños. Son fáciles de usar e instalar, pudiendo doblarse, cortarse y moldearse.' },
                    {
                        type: 'section', title: 'Aplicaciones', items: [
                            'Protección en baldes para cargadoras y excavadoras',
                            'Puntas de martillo para reciclaje',
                            'Revestimientos de conductos',
                            'Bordes de cajas de rocas'
                        ]
                    },
                    {
                        type: 'section', title: 'Especificaciones', items: [
                            'Espesor estándar: 23 mm',
                            'Longitud: 240 mm',
                            'Ancho: Desde 25 mm'
                        ]
                    }
                ]
            },
            {
                id: 'ws-002',
                name: 'Barras de Desgaste Estándar',
                image: '/images/products/prod_barras_estandar.png',
                content: [
                    { type: 'paragraph', text: 'Ofrecen una vida útil superior en comparación con aleaciones convencionales como el manganeso, Ni-hard y placas de revestimiento duro.' },
                    {
                        type: 'section', title: 'Dimensiones Disponibles', items: [
                            'Espesor: 25 a 100 mm',
                            'Ancho: 25 a 300 mm',
                            'Longitudes variables'
                        ]
                    },
                    {
                        type: 'list', items: [
                            'Mejor rendimiento de resistencia al desgaste',
                            'Durabilidad extrema',
                            'Pulido fino',
                            'Rentabilidad operativa',
                            'Excelente calidad'
                        ]
                    }
                ]
            },
            {
                id: 'ws-003',
                name: 'Placas Overlay (Carburo de Cromo)',
                image: '/images/products/prod_overlay_plates.png',
                content: [
                    { type: 'paragraph', text: 'Soldada con revestimiento de carburo de cromo sobre una placa de soporte de acero dulce con técnica exclusiva para excelente rendimiento en abrasión.' },
                    {
                        type: 'section', title: 'Ficha Técnica', items: [
                            'Composición: C 4,0%~5,5%, Cr 21%~27%',
                            'Soporte: Acero dulce SS400 (Inox a pedido)',
                            'Dureza: HV600±',
                            'Resistencia Calor: Máx 400˚C',
                            'Microestructura: Mezcla de carburo de cromo hexagonal (Grado 2355)',
                            'Penetración: 1,5 mm al metal base'
                        ]
                    }
                ]
            },
            {
                id: 'ws-004',
                name: 'Botones de Desgaste',
                image: '/images/products/prod_wear_buttons.png',
                content: [
                    { type: 'paragraph', text: 'Ideales para áreas más pequeñas que requieren materiales resistentes a la abrasión y al impacto.' }
                ]
            }
        ]
    },
    {
        id: 'epoxy',
        name: 'EPOXY WEARING COMPOUND FX-CE -30S',
        image: '/images/products/prod_epoxy_compound.png',
        count: 'Reparación Cerámica',
        description: 'Compuesto epóxico con perlas de cerámica para proteger contra abrasión por deslizamiento fuerte.',
        products: [
            {
                id: 'ep-001',
                name: 'FX-CE -30S Wearing Compound',
                image: '/images/products/prod_epoxy_compound.png',
                content: [
                    {
                        type: 'section', title: 'Características', items: [
                            'Baja contracción después del curado',
                            'Excelente resistencia al desgaste al impacto'
                        ]
                    },
                    { type: 'paragraph', text: 'Combina propiedades de perlas de cerámica grandes y pequeñas con carburo de silicio. Protege contra el daño de la abrasión por deslizamiento fuerte bajo temperaturas típicas de servicio en seco.' },
                    {
                        type: 'section', title: 'Aplicaciones Típicas', items: [
                            'Revestimientos e impulsores de bombas',
                            'Revestimientos de tolvas y conductos',
                            'Cuerpos de ciclón y separador',
                            'Aspas y carcasas de ventiladores',
                            'Depuradores y colectores de polvo',
                            'Extractores y áreas de succión de bombas'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'lagging',
        name: 'REVESTIMIENTO DE CERÁMICO CON CAUCHO',
        image: '/images/products/prod_ceramic_lagging.png',
        count: 'Agarre 38% Cerámica',
        description: 'Solución inteligente para tracción máxima en poleas motrices y protección de poleas no motrices.',
        products: [
            {
                id: 'rl-001',
                name: 'Revestimiento Cerámico Fila Simple Mediana',
                image: '/images/products/prod_ceramic_lagging.png',
                content: [
                    { type: 'paragraph', text: 'Ofrece un agarre superior y resistencia excepcional, eliminando el deslizamiento en condiciones extremas de humedad o materiales abrasivos.' },
                    {
                        type: 'section', title: 'Características y Beneficios', items: [
                            'Alúmina hasta 96%: Máxima resistencia a la abrasión',
                            'Tracción superior: Elimina deslizamiento en condiciones húmedas',
                            'Encapsulado en caucho técnico: Absorbe impactos y evita desprendimientos',
                            'Adhesión de alto desempeño: Unión cerámica–caucho–metal duradera',
                            'Diseño inteligente: Hoyuelos para tracción y lisos para protección'
                        ]
                    },
                    {
                        type: 'section', title: 'Dimensiones y Suministro', items: [
                            'Ancho estándar: 250 mm',
                            'Espesores: 12 a 25 mm',
                            'Formatos: Rollos, Rollos para vulcanización en caliente, Tiras prefabricadas'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'filters',
        name: 'FILTRO COLECTOR DE POLVO',
        image: '/images/products/prod_filter_cartridge.png',
        count: 'Eficiencia 99.999%',
        description: 'Cartuchos con tecnología Poly Tech y cono interno patentado para máxima dispersión uniforme.',
        products: [
            {
                id: 'fl-001',
                name: 'Cartucho Filtrante Poly Tech',
                image: '/images/products/prod_filter_cartridge.png',
                content: [
                    {
                        type: 'section', title: 'Características Clave', items: [
                            'Capacidad ampliada por cono interno patentado',
                            'Dispersión uniforme del aire pulsante',
                            'Eficiencia de separación: 99.999% hasta 0,5 micrones',
                            'Juntas de doble sello continuo para evitar fugas',
                            'Espaciado uniforme de pliegues con esferas sintéticas'
                        ]
                    },
                    {
                        type: 'section', title: 'Ventajas Técnicas', items: [
                            'Pérdida de carga un 30% inferior al mercado',
                            'Hasta 35 m² de superficie filtrante útil por cartucho',
                            'Cantidad líder del sector de media orientada hacia abajo',
                            'Medios de celulosa/papel y tejido sin tejer/sintéticos'
                        ]
                    }
                ]
            }
        ]
    }
];

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (selectedProduct || selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProduct, selectedCategory]);

    return (
        <div className="pt-20 bg-primary-50 min-h-screen">
            <div className="bg-secondary-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/banner_productos.png')] bg-cover bg-center" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-primary-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Catálogo de Productos</h2>
                        <h1 className="text-5xl md:text-7xl font-[900] mb-6 tracking-tighter uppercase">
                            Alta <span className="text-primary-500">Tecnología</span> Industrial
                        </h1>
                        <p className="text-xl text-secondary-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Componentes y consumibles de alto rendimiento diseñados para extender la vida útil de sus equipos.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedCategory(category)}
                            className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer bg-secondary-900 border-8 border-white"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-900/20 to-transparent z-10" />

                            <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
                                <span className="text-primary-500 font-black uppercase tracking-widest text-xs mb-4 bg-primary-500/10 self-start px-4 py-1 rounded-full backdrop-blur-md">
                                    {category.count}
                                </span>
                                <h3 className="text-3xl font-[900] text-white mb-4 tracking-tight uppercase leading-none">{category.name}</h3>
                                <p className="text-secondary-200 text-lg line-clamp-2 max-w-sm mb-6 font-light">{category.description}</p>
                                <div className="flex items-center text-primary-400 font-black text-xs tracking-[0.2em] group-hover:text-white transition-colors">
                                    EXPLORAR LÍNEA <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Category Detailed View Modal */}
                <AnimatePresence>
                    {selectedCategory && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCategory(null)}
                                className="absolute inset-0 bg-secondary-950/95 backdrop-blur-xl"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[4rem] shadow-2xl relative z-10 flex flex-col"
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Sidebar Category Info */}
                                    <div className="w-full md:w-1/3 bg-secondary-900 p-12 flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                                            <img src={selectedCategory.image} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div className="relative z-10">
                                            <button
                                                onClick={() => setSelectedCategory(null)}
                                                className="mb-12 p-3 bg-white/10 hover:bg-primary-500 rounded-full text-white transition-all backdrop-blur-md border border-white/20"
                                            >
                                                <X size={20} />
                                            </button>
                                            <span className="text-primary-500 font-black text-xs uppercase tracking-widest mb-4 block">{selectedCategory.count}</span>
                                            <h2 className="text-4xl font-[900] text-white mb-6 leading-none uppercase tracking-tighter">
                                                {selectedCategory.name}
                                            </h2>
                                            <p className="text-xl text-secondary-300 font-light leading-relaxed">
                                                {selectedCategory.description}
                                            </p>
                                        </div>
                                        <div className="relative z-10 mt-12 bg-white/5 p-6 rounded-3xl border border-white/10">
                                            <p className="text-xs text-secondary-400 font-black uppercase tracking-widest mb-2">Asistencia Técnica</p>
                                            <a href="https://wa.me/51996087437" className="text-white font-bold hover:text-primary-400 transition-colors">+51 996 087 437</a>
                                        </div>
                                    </div>

                                    {/* Products Grid */}
                                    <div className="w-full md:w-2/3 p-12 overflow-y-auto bg-secondary-50">
                                        <h3 className="text-xl font-black text-secondary-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                                            <div className="w-1.5 h-6 bg-primary-500 rounded-full" />
                                            Productos en esta Línea
                                        </h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            {selectedCategory.products.map((product) => (
                                                <motion.div
                                                    key={product.id}
                                                    whileHover={{ x: 10 }}
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="bg-white p-6 rounded-3xl border border-secondary-200 hover:border-primary-500 hover:shadow-xl transition-all cursor-pointer flex items-center gap-6 group"
                                                >
                                                    <div className="w-24 h-24 bg-secondary-50 rounded-2xl overflow-hidden shadow-inner shrink-0">
                                                        <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={product.name} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h4 className="text-xl font-black text-secondary-900 uppercase tracking-tight mb-1">{product.name}</h4>
                                                        <p className="text-secondary-500 text-xs font-bold uppercase tracking-widest">Ver especificaciones técnicas</p>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center text-secondary-300 group-hover:bg-primary-600 group-hover:text-white transition-all">
                                                        <ArrowRight size={20} />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Product Detail Modal */}
                <AnimatePresence>
                    {selectedProduct && (
                        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                className="absolute inset-0 bg-secondary-950/95 backdrop-blur-2xl"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                className="bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[3.5rem] shadow-2xl relative z-20 flex flex-col"
                            >
                                <div className="p-8 md:p-16">
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="max-w-2xl">
                                            <h2 className="text-4xl md:text-5xl font-[900] text-secondary-900 mb-4 leading-none uppercase tracking-tighter">
                                                {selectedProduct.name}
                                            </h2>
                                            <div className="h-2 w-20 bg-primary-500 rounded-full" />
                                        </div>
                                        <button
                                            onClick={() => setSelectedProduct(null)}
                                            className="p-4 bg-secondary-100 hover:bg-primary-600 hover:text-white rounded-full transition-all"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="space-y-10">
                                        {selectedProduct.content.map((block, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                            >
                                                {block.type === 'paragraph' && (
                                                    <p className="text-xl text-secondary-600 font-light leading-relaxed border-l-4 border-secondary-100 pl-8 italic">
                                                        {block.text}
                                                    </p>
                                                )}
                                                {block.type === 'section' && (
                                                    <div className="bg-secondary-50 p-10 rounded-[2.5rem] border border-secondary-100">
                                                        <h3 className="text-primary-600 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                                                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                                                            {block.title}
                                                        </h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {block.items?.map((item, i) => (
                                                                <div key={i} className="flex items-start gap-3">
                                                                    <CheckCircle2 size={16} className="text-primary-500 mt-1 shrink-0" />
                                                                    <span className="text-secondary-800 font-medium tracking-tight leading-snug">{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {block.type === 'list' && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {block.items?.map((item, i) => (
                                                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm group hover:border-primary-500 transition-colors">
                                                                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                                                                    <CheckCircle2 size={20} />
                                                                </div>
                                                                <span className="text-lg text-secondary-900 font-bold leading-tight">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-16 pt-10 border-t border-secondary-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                                        <div className="text-center sm:text-left">
                                            <p className="text-secondary-400 text-xs font-black uppercase tracking-widest mb-1">¿Desea una oferta formal?</p>
                                            <p className="text-secondary-900 font-bold">Solicite un presupuesto técnico hoy mismo.</p>
                                        </div>
                                        <a
                                            href={`https://wa.me/51996087437?text=Hola, deseo una cotización del producto: ${selectedProduct.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-12 py-5 bg-secondary-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-all shadow-xl flex items-center gap-3"
                                        >
                                            Solicitar Cotización <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Direct Engineering Contact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-32 p-16 rounded-[4rem] bg-secondary-900 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <h2 className="text-4xl md:text-6xl font-[900] text-white mb-8 tracking-tighter uppercase relative z-10">
                        Soluciones de ingeniería diseñadas <span className="text-primary-500 text-shadow-glow">para decisiones estratégicas</span>?
                    </h2>
                    <p className="text-secondary-300 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
                        Soluciones de alto rendimiento para maximizar el valor de sus activos industriales
                        Ofrecemos componentes y consumibles diseñados estratégicamente para extender la vida útil de sus equipos, optimizar la eficiencia operativa y garantizar la continuidad de sus operaciones críticas.
                        Nuestro enfoque combina ingeniería de precisión, calidad certificada y soporte especializado, asegurando que cada inversión genere retorno tangible, reducción de riesgos y ventajas competitivas sostenibles para su organización.

                    </p>
                    <Link
                        to="/contactenos"
                        className="inline-block relative z-10 px-16 py-6 bg-white text-primary-600 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary-600 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        contáctate con área de ventas
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductsPage;
