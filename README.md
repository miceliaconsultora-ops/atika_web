# Atika Software — Nuevo Sitio Web
**Generado:** Marzo 2026 | **Versión:** 1.0

---

## Estructura del proyecto

```
Atika Software/
├── research/
│   ├── 01-client-brand.md         # Extracción de marca del sitio actual
│   ├── 02-competitor-analysis.md  # Análisis de 5 competidores
│   ├── 03-build-brief.md          # Brief completo del sitio
│   └── 04-quality-audit.md        # Auditoría SEO/A11y/Performance
├── competitive-analysis.html      # Reporte PDF para el cliente
├── site/
│   ├── index.html                 # Home
│   ├── servicios-ia.html          # Servicios OCR + IA
│   ├── productos.html             # Catálogo de 14 productos
│   ├── nosotros.html              # Historia y equipo
│   ├── casos.html                 # Casos de éxito
│   ├── contacto.html              # Formulario + WhatsApp
│   ├── 404.html                   # Página de error
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── css/
│   │   └── styles.css             # Estilos completos
│   ├── js/
│   │   └── main.js                # GSAP + interacciones
│   └── assets/                    # Imágenes, logo, OG (a completar)
└── README.md
```

---

## Stack técnico

- **HTML5 + CSS3 + Vanilla JavaScript** — sin frameworks, máxima portabilidad
- **GSAP 3.12 + ScrollTrigger** — animaciones de scroll (CDN, sin build step)
- **Google Fonts** — Plus Jakarta Sans + Inter (CDN)
- **Sin dependencias de servidor** — sitio 100% estático

---

## Contenido pendiente (proveer antes del deploy)

| Elemento | Formato recomendado | Tamaño |
|---|---|---|
| Logo | SVG o PNG transparente | Mín. 200×60px |
| Video OCR demo | MP4 o WebM | Max 5MB, 800×450px |
| Foto equipo | JPG/WebP | 800×600px |
| OG image | JPG/PNG | 1200×630px |
| Logos de clientes (22) | PNG transparente | 200×80px c/u |
| Endpoint formulario | URL o email config | — |

---

## Deploy en Netlify (recomendado — gratis)

1. Ir a [app.netlify.com](https://app.netlify.com)
2. Hacer drag & drop de la carpeta `site/`
3. Obtener URL de preview (ej: `https://atika-software.netlify.app`)
4. Configurar dominio custom `atikasoft.com.ar`:
   - En el panel DNS del registrador, agregar CNAME: `www` → `[tu-site].netlify.app`
   - En Netlify: Domain Settings → Add custom domain

---

## Deploy en Vercel (alternativa)

```bash
cd "Atika Software/site"
npx vercel
# Seguir el wizard
# Agregar dominio en vercel.com/dashboard
```

---

## Variables a actualizar antes del deploy

En `main.js`, el formulario usa un mock de envío. Reemplazar con:

**Opción A — Netlify Forms (gratis):**
Agregar `data-netlify="true"` al `<form>` en `contacto.html` y Netlify maneja el envío.

**Opción B — EmailJS (gratuito hasta 200/mes):**
```javascript
// En main.js, reemplazar el setTimeout por:
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
  .then(() => { /* éxito */ });
```

---

## WhatsApp configurado

Número: **+54 9 11 6300-1050**
Link directo: `https://wa.me/5491163001050`
Mensajes pre-cargados por página:
- Home: "Quiero saber más sobre la automatización de documentos con IA"
- Servicios IA: "Quiero probar el OCR con un documento mío"
- Productos: "Quiero consultar sobre los productos de Atika"
- Contacto: "Quiero una demo gratuita de Atika Software"

---

## Reporte competitivo

Abrir `competitive-analysis.html` en Chrome → `Ctrl+P` → Guardar como PDF → Enviar al cliente.
