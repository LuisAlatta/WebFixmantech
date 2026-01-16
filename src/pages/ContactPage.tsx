import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulación de envío
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Visual & Info Column */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl font-[900] text-secondary-900 mb-8 uppercase tracking-tighter">
                                Canales de <span className="text-primary-500">Atención Directa</span>
                            </h3>

                            <div className="space-y-8">
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
                                        <p className="text-lg text-secondary-900 font-bold">+51 960 153 222</p>
                                        <p className="text-sm text-secondary-500">Atención Post-Venta: +51 996 087 437</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary-600 transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-secondary-900 uppercase tracking-widest text-xs mb-2">Consultas Técnicas</h4>
                                        <p className="text-lg text-secondary-600 font-medium">gerencia_general@fixmantech.com</p>
                                        <p className="text-sm text-secondary-500">operaciones@fixmantech.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Map Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-[3rem] overflow-hidden shadow-2xl h-80 border-8 border-white bg-white group"
                        >
                            <iframe
                                title="Mapa Sede Central"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.666014416345!2d-77.04279318561763!3d-12.045432145717316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b73a5a4083%3A0xc392bd988950dbe2!2sLima!5e0!3m2!1ses!2spe!4v1699999999999!5m2!1ses!2spe"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition-all duration-[1s]"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] relative overflow-hidden border-2 border-primary-500">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[5rem] -mr-8 -mt-8" />

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                                            <CheckCircle size={48} strokeWidth={3} />
                                        </div>
                                        <h3 className="text-4xl font-[900] text-secondary-900 mb-4 uppercase tracking-tighter">¡Comunicación Exitosa!</h3>
                                        <p className="text-xl text-secondary-500 font-light mb-10">Su requerimiento ha sido priorizado. Un ingeniero consultor le contactará a la brevedad.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="px-10 py-5 bg-secondary-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-all"
                                        >
                                            Redactar otro Mensaje
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form">
                                        <h3 className="text-3xl font-[900] text-secondary-900 mb-10 uppercase tracking-tighter">Portal de <span className="text-primary-500">Ingeniería</span></h3>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="relative group">
                                                    <input
                                                        type="text" id="name" name="name" required
                                                        value={formData.name} onChange={handleChange}
                                                        className="w-full bg-white border-2 border-primary-500 focus:border-primary-600 focus:bg-white px-8 py-5 rounded-[2rem] outline-none transition-all font-bold placeholder:text-secondary-600 text-secondary-900"
                                                        placeholder="NOMBRE COMPLETO"
                                                    />
                                                    <div className="absolute top-full left-8 text-[10px] font-black text-secondary-400 mt-2 tracking-widest uppercase">Identificación</div>
                                                </div>
                                                <div className="relative group">
                                                    <input
                                                        type="email" id="email" name="email" required
                                                        value={formData.email} onChange={handleChange}
                                                        className="w-full bg-white border-2 border-primary-500 focus:border-primary-600 focus:bg-white px-8 py-5 rounded-[2rem] outline-none transition-all font-bold placeholder:text-secondary-600 text-secondary-900"
                                                        placeholder="EMAIL CORPORATIVO"
                                                    />
                                                </div>
                                            </div>

                                            <div className="relative group">
                                                <input
                                                    type="tel" id="phone" name="phone"
                                                    value={formData.phone} onChange={handleChange}
                                                    className="w-full bg-white border-2 border-primary-500 focus:border-primary-600 focus:bg-white px-8 py-5 rounded-[2rem] outline-none transition-all font-bold placeholder:text-secondary-600 text-secondary-900"
                                                    placeholder="TELÉFONO / WHATSAPP"
                                                />
                                            </div>

                                            <div className="relative group">
                                                <textarea
                                                    id="message" name="message" rows={5} required
                                                    value={formData.message} onChange={handleChange}
                                                    className="w-full bg-white border-2 border-primary-500 focus:border-primary-600 focus:bg-white px-8 py-5 rounded-[2rem] outline-none transition-all font-bold placeholder:text-secondary-600 text-secondary-900 resize-none"
                                                    placeholder="DETALLES DEL REQUERIMIENTO TÉCNICO"
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className={`w-full group py-6 rounded-full font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-4 transition-all shadow-2xl relative z-10 ${status === 'submitting'
                                                    ? 'bg-secondary-200 cursor-not-allowed text-secondary-400'
                                                    : 'bg-primary-600 text-white hover:bg-secondary-900 shadow-primary-500/30'
                                                    }`}
                                            >
                                                {status === 'submitting' ? 'Procesando Enlace...' : (
                                                    <>
                                                        Enviar Requerimiento <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
