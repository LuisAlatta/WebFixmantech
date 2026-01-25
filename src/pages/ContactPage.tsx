import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-20 bg-primary-50 min-h-screen">
            {/* Header section with high-impact daylight imagery */}
            <div className="bg-secondary-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/hero_bright_fixed.png')] bg-cover bg-center" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <h2 className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Canales Oficiales</h2>
                        <h1 className="text-5xl md:text-7xl font-[900] mb-6 tracking-tighter uppercase leading-none">
                            Conecte con <span className="text-primary-500">Expertos</span>
                        </h1>
                        <p className="text-xl text-secondary-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Nuestra central de ingeniería está disponible para evaluar sus proyectos de mayor envergadura.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <h3 className="text-4xl font-[900] text-secondary-900 uppercase tracking-tighter">
                                Líneas de Atención  <span className="text-primary-500">Corporativa directa</span>
                            </h3>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary-600 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-secondary-900 uppercase tracking-widest text-xs mb-2">Sede Central</h4>
                                        <p className="text-lg text-secondary-600 font-light">Cerro Colorado, Arequipa, Perú</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary-600 transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-secondary-900 uppercase tracking-widest text-xs mb-2">Central Telefónica</h4>
                                        <p className="text-lg text-secondary-900 font-bold">+51 996 087 437</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary-600 transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-secondary-900 uppercase tracking-widest text-xs mb-2">Consultas Técnicas</h4>
                                        <p className="text-lg text-secondary-600 font-medium">Gerencia_Ventas@fixmantech.com</p>
                                        <p className="text-sm text-secondary-500">operaciones@fixmantech.com</p>
                                        <p className="text-sm text-secondary-500">ventas@fixmantech.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Map Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white bg-white group"
                        >
                            <iframe
                                title="Mapa Sede Central"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.666014416345!2d-77.04279318561763!3d-12.045432145717316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b73a5a4083%3A0xc392bd988950dbe2!2sLima!5e0!3m2!1ses!2spe!4v1699999999999!5m2!1ses!2spe"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition-all duration-[1s]"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
