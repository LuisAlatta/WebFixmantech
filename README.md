# FIXMANTECH S.A.C. - Sitio Web Corporativo

Sitio web corporativo de FIXMANTECH S.A.C., empresa especializada en soluciones integrales de ingeniería y servicios técnicos para la industria minera y manufacturera.

## 🚀 Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool y dev server de última generación
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones para React
- **React Router DOM** - Enrutamiento del lado del cliente
- **Lucide React** - Iconos modernos y personalizables

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd fixmantech-web
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la versión de producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de código

## 🏗️ Estructura del Proyecto

```
fixmantech-web/
├── public/
│   └── images/          # Imágenes estáticas
│       ├── services/    # Imágenes de servicios
│       ├── products/    # Imágenes de productos
│       └── ...
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── home/        # Componentes de la página de inicio
│   │   └── layout/      # Componentes de layout (Navbar, Footer)
│   ├── pages/           # Páginas principales
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ProductsPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── tailwind.config.js   # Configuración de Tailwind
├── tsconfig.json        # Configuración de TypeScript
└── vite.config.ts       # Configuración de Vite
```

## 🎨 Características

### Páginas Principales

- **Inicio** - Presentación de la empresa con hero section, servicios destacados y call-to-action
- **Nosotros** - Historia, misión, visión, valores y clientes
- **Servicios** - Catálogo completo de servicios con descripciones detalladas
- **Productos** - Líneas de productos industriales con especificaciones técnicas
- **Contáctenos** - Formulario de contacto y datos de la empresa

### Funcionalidades

- ✅ Diseño responsive para todos los dispositivos
- ✅ Animaciones suaves con Framer Motion
- ✅ Navegación fluida con React Router
- ✅ Modales interactivos para servicios y productos
- ✅ Integración con WhatsApp para consultas
- ✅ SEO optimizado
- ✅ Rendimiento optimizado con Vite

## 🎨 Paleta de Colores

El sitio utiliza una paleta de colores corporativa definida en Tailwind:

- **Primary (Naranja)**: `#FF6B35` - Color principal de la marca
- **Secondary (Gris Oscuro)**: `#1F2937` - Color secundario para contraste
- **Accent**: Variaciones de los colores primarios

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🚀 Deployment

### Build de Producción

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados listos para producción.

### Opciones de Hosting

El sitio puede ser desplegado en:
- **Vercel** (Recomendado para proyectos Vite)
- **Netlify**
- **GitHub Pages**
- **Servidor propio** (Apache, Nginx)

## 📞 Contacto

**FIXMANTECH S.A.C.**
- 📍 PP.JJ. JOSE SANTOS ATAHUALPA Mz T Lote 06, Cerro Colorado, Arequipa, Perú
- 📞 +51 960 153 222
- 📞 +51 996 087 437
- 📧 gerencia_general@fixmantech.com
- 📧 operaciones@fixmantech.com

## 📄 Licencia

© 2026 FIXMANTECH S.A.C. Todos los derechos reservados.

---

Desarrollado con ❤️ para FIXMANTECH S.A.C.
