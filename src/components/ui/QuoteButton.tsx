import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X } from 'lucide-react';
import { WHATSAPP_NUMBER, QUOTE_EMAIL, buildQuoteMailto } from '../../data/contact';

interface QuoteButtonProps {
    children: React.ReactNode;
    className?: string;
    waMessage?: string;
    emailSubject?: string;
    emailBody?: string;
    /** Se ejecuta tras elegir un canal (ej: cerrar el menú móvil). */
    onSelect?: () => void;
}

/**
 * Botón de cotización: muestra el texto que recibe y, al pulsarlo, abre un
 * diálogo con dos opciones (WhatsApp y correo) para no saturar la UI con
 * múltiples botones de primer nivel.
 */
const QuoteButton = ({
    children,
    className,
    waMessage = 'Hola, quisiera solicitar una cotización.',
    emailSubject = 'Solicitud de Cotización',
    emailBody = 'Hola, quisiera solicitar una cotización.',
    onSelect,
}: QuoteButtonProps) => {
    const [open, setOpen] = useState(false);
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    const mailHref = buildQuoteMailto(emailSubject, emailBody);

    const handleSelect = () => {
        setOpen(false);
        onSelect?.();
    };

    return (
        <>
            <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); setOpen(true); }}
                className={className}
            >
                {children}
            </motion.button>

            {createPortal(
                <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                            className="absolute inset-0 bg-secondary-950/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative z-10 w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 normal-case tracking-normal text-left"
                        >
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Cerrar"
                                className="absolute top-5 right-5 p-2 text-secondary-400 hover:text-secondary-900 hover:bg-secondary-100 rounded-full transition-all"
                            >
                                <X size={22} />
                            </button>

                            <h3 className="text-2xl md:text-3xl font-[900] text-secondary-900 tracking-tight mb-2">
                                ¿Cómo deseas <span className="text-primary-600">cotizar</span>?
                            </h3>
                            <p className="text-secondary-500 font-medium mb-8">Elige tu canal de preferencia.</p>

                            <div className="space-y-4">
                                <a
                                    href={waHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleSelect}
                                    className="flex items-center gap-4 w-full p-5 rounded-2xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/30 hover:brightness-105 active:scale-[0.98] transition-all"
                                >
                                    <span className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                        <MessageCircle size={26} />
                                    </span>
                                    <span className="leading-tight">
                                        <span className="block text-lg">WhatsApp</span>
                                        <span className="block text-sm font-medium text-white/80">Respuesta inmediata por chat</span>
                                    </span>
                                </a>

                                <a
                                    href={mailHref}
                                    onClick={handleSelect}
                                    className="flex items-center gap-4 w-full p-5 rounded-2xl bg-secondary-900 text-white font-bold shadow-lg hover:bg-primary-600 active:scale-[0.98] transition-all"
                                >
                                    <span className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </span>
                                    <span className="leading-tight min-w-0">
                                        <span className="block text-lg">Correo electrónico</span>
                                        <span className="block text-sm font-medium text-white/70 truncate">{QUOTE_EMAIL}</span>
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default QuoteButton;
