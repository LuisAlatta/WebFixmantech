import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="mb-6">
                            <img
                                src="/images/logo_fixmantech.png"
                                alt="FIXMANTECH Logo"
                                className="h-12 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-secondary-400 text-sm leading-relaxed mb-6">
                            Soluciones integrales de ingeniería y servicios técnicos especializados. Calidad y profesionalismo en cada proyecto.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
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
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Servicios</h3>
                        <ul className="space-y-4 text-secondary-400">
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Fabricación y Revestimiento de Chutes
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Instalación de Chutes de Transferencia
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Diseño de Tanques y Ductos
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Reparación de Tolvas CAT y Komatsu
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Fabricación de Estructuras Metálicas
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios" className="hover:text-primary-400 transition-colors">
                                    Mantenimiento de Plantas Concentradoras
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary-400 shrink-0 mt-1" size={20} />
                                <span className="text-secondary-400">PP.JJ. JOSE SANTOS ATAHUALPA Mz T Lote 06</span>
                                <span className="text-secondary-400">Cerro Colorado, Arequipa, Perú</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-primary-400 shrink-0 mt-1" size={20} />
                                <div className="text-secondary-400">
                                    <p>+51 960 153 222</p>
                                    <p>+51 996 087 437</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-primary-400 shrink-0 mt-1" size={20} />
                                <div className="text-secondary-400">
                                    <p>gerencia_general@fixmantech.com</p>
                                    <p>operaciones@fixmantech.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Trusted Clients */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Confían en Nosotros</h3>
                        <div className="bg-secondary-800/50 p-3 rounded-2xl">
                            <img
                                src="/images/clientes_logos.png"
                                alt="Empresas clientes"
                                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
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
