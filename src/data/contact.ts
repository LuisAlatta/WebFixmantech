// Datos de contacto compartidos para los botones de cotización.
export const QUOTE_EMAIL = 'gerencia_ventas@fixmantech.com';
export const WHATSAPP_NUMBER = '51996087437';

// Construye un enlace mailto con asunto y cuerpo prellenados.
export const buildQuoteMailto = (subject: string, body: string) =>
    `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
