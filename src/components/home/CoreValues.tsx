import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, Handshake } from 'lucide-react';

const values = [
    { icon: <Award className="w-8 h-8" />, title: 'Excelencia', desc: 'Años de trayectoria en soluciones industriales.' },
    { icon: <Users className="w-8 h-8" />, title: 'Compromiso', desc: 'Con nuestros clientes en cada proyecto.' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Calidad', desc: 'Estándares altos en cada solución que entregamos.' },
    { icon: <Handshake className="w-8 h-8" />, title: 'Integridad', desc: 'Construimos relaciones de confianza y largo plazo.' }
];

const CoreValues = () => {
    return (
        <section className="bg-white pb-32 -mt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center max-w-6xl mx-auto">
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
                            <h4 className="text-3xl font-[900] text-secondary-900 mb-4 tracking-tight uppercase leading-none">{value.title}</h4>
                            <p className="text-lg text-black font-light leading-snug px-4">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
