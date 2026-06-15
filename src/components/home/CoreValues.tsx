import { motion } from 'framer-motion';

const values = ['Excelencia', 'Compromiso', 'Calidad', 'Integridad'];

const CoreValues = () => {
    return (
        <section className="bg-white pb-32 -mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <motion.span
                            key={value}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl md:text-4xl font-[900] text-secondary-900 uppercase tracking-tight"
                        >
                            {value}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
