import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { clientLogos } from '../../data/clients';

const Footer = () => {
    return (
        <footer className="bg-secondary-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-semibold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4 text-xl">
                            <li>
                                <Link to="/" className="text-secondary-400 hover:text-primary-400 transition-colors">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/nosotros" className="text-secondary-400 hover:text-primary-400 transition-colors">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="text-secondary-400 hover:text-primary-400 transition-colors">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/productos" className="text-secondary-400 hover:text-primary-400 transition-colors">Productos</Link>
                            </li>
                            <li>
                                <Link to="/contactenos" className="text-secondary-400 hover:text-primary-400 transition-colors">Contáctenos</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-3xl font-semibold mb-6">Servicios</h3>
                        <ul className="space-y-4 text-secondary-400 text-xl">
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Revestimiento de Chutes
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Supresión de Polvo
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Colectores de Polvo
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Mantenimiento de Plantas
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Estructuras Metálicas
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Diseño e Ingeniería
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-3xl font-semibold mb-6">Contacto</h3>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <div className="text-secondary-400 leading-relaxed">
                                    <p>PP.JJ. José Santos Atahualpa Mz T Lote 06</p>
                                    <p>Cerro Colorado, Arequipa, Perú</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <p className="text-secondary-400">+51 996 087 437</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <div className="text-secondary-400 break-all leading-relaxed">
                                    <p>gerencia_ventas@fixmantech.com</p>
                                    <p>operaciones@fixmantech.com</p>
                                    <p>ventas@fixmantech.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Trusted Clients */}
                    <div className="md:col-span-2 lg:col-span-4">
                        <h3 className="text-3xl font-semibold mb-6">Confían en Nosotros</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {clientLogos.map((logo) => (
                                <div key={logo.alt} className="bg-white rounded-xl p-4 flex items-center justify-center aspect-[3/2] shadow-sm overflow-hidden">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={`max-w-full max-h-full object-contain ${logo.scale ?? ''}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-secondary-800 pt-8 text-center text-sm text-secondary-500">
                <p>&copy; {new Date().getFullYear()} FIXMANTECH S.A.C. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
