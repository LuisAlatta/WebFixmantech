// Datos de contacto compartidos para los botones de cotización.
export const QUOTE_EMAIL = 'gerencia_ventas@fixmantech.com';
export const WHATSAPP_NUMBER = '51996087437';

// Construye un enlace mailto con asunto y cuerpo prellenados.
export const buildQuoteMailto = (subject: string, body: string) =>
    `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Construye un enlace de redacción de Gmail (se abre en el navegador, sin app de correo).
export const buildGmailCompose = (subject: string, body: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(QUOTE_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
