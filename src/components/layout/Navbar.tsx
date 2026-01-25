import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Optimized Navbar styling: Always white with premium shadow and red items
    const navBgClass = "bg-white/95 backdrop-blur-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-4";

    const links = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Productos', path: '/productos' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Contáctenos', path: '/contactenos' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'} ${navBgClass}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/images/logo_fixmantech.png"
                            alt="FIXMANTECH Logo"
                            className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-secondary-900 border-b-2 ${isActive
                                        ? 'text-primary-600 border-primary-500'
                                        : 'text-primary-500 border-transparent hover:border-primary-200'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/51996087437"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-secondary-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-primary-600 transition-all shadow-xl shadow-secondary-900/10"
                        >
                            Cotizar Ahora
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary-600 hover:bg-primary-50 rounded-2xl transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-full left-4 right-4 mt-4 md:hidden bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-secondary-50"
                    >
                        <nav className="flex flex-col p-8 gap-4">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-sm font-black uppercase tracking-[0.2em] p-5 rounded-2xl transition-all ${isActive
                                            ? 'bg-primary-50 text-primary-600'
                                            : 'text-primary-500 hover:bg-secondary-50'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <a
                                href="https://wa.me/51996087437"
                                className="mt-4 p-5 bg-primary-600 text-white text-center rounded-2xl font-black uppercase tracking-[0.2em] text-xs"
                            >
                                WhatsApp Directo
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
