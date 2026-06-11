export interface ClientLogo {
    src: string;
    alt: string;
    // Clase de escala (zoom) para logos que vienen con mucho espacio en blanco
    // y se ven pequeños dentro de su recuadro.
    scale?: string;
}

// Logos de empresas que trabajan con FIXMANTECH (carpeta CLIENTES).
export const clientLogos: ClientLogo[] = [
    { src: '/nuevas imagenes/CLIENTES/LOGO ANTAMINA.jpeg', alt: 'Antamina' },
    { src: '/nuevas imagenes/CLIENTES/logo CERRO VERDE.jpg', alt: 'Cerro Verde' },
    { src: '/nuevas imagenes/CLIENTES/logo HUDBAY.jpg', alt: 'Hudbay', scale: 'scale-[2]' },
    { src: '/nuevas imagenes/CLIENTES/logo LAS BAMBAS.jpg', alt: 'Las Bambas', scale: 'scale-[1.7]' },
    { src: '/nuevas imagenes/CLIENTES/logo VOLCAN.jpg', alt: 'Volcan', scale: 'scale-[2]' },
    { src: '/nuevas imagenes/CLIENTES/logo marcobre.png', alt: 'Marcobre', scale: 'scale-[2]' }
];
