# Website Build Brief — Atika Software
**Preparado:** 2026-03-28 | **Estado:** PENDIENTE APROBACIÓN

---

## El Posicionamiento Central

> **"El puente entre tu sistema legacy y la inteligencia artificial."**

Atika ocupa un espacio único en el mercado: 20+ años de expertise en sistemas de gestión VB/legacy + capacidades reales de OCR/Vision AI para documentos financieros. Ningún competidor lo tiene. Este es el eje de todo el sitio.

---

## Dirección de Diseño

### Paleta de Colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Navy Deep | `#0F1729` | Fondos hero, headers oscuros |
| Navy Mid | `#1E3A8A` | Gradientes, secciones intermedias |
| Electric Blue | `#2563EB` | CTAs primarios, highlights, links |
| Gold | `#F59E0B` | Acento financiero, badges, highlights |
| Off White | `#F8F9FA` | Fondos de secciones claras |
| White | `#FFFFFF` | Cards, texto sobre oscuro |
| Ink | `#1A1612` | Texto principal |
| Muted | `#6B7280` | Texto secundario |

### Tipografía

- **Headings:** `Plus Jakarta Sans` 700/800 (Google Fonts)
- **Body:** `Inter` 400/500 (Google Fonts)
- **Accents/Numbers:** `Plus Jakarta Sans` 300 italic para citas

### Animaciones

- Hero: partículas de documento procesándose → base de datos (entrada)
- Scroll: GSAP ScrollTrigger en cada sección (fade + slide up)
- Contador numérico animado (20 años, 200+ empresas, 22+ clientes)
- Cards de servicios: hover con border glow azul
- CTA button: shimmer effect sutil

---

## Arquitectura del Sitio

### Páginas a construir

| Página | URL | Propósito |
|--------|-----|-----------|
| Home | `/` | Captura, posicionamiento, trust, lead gen |
| Servicios IA | `/servicios-ia` | OCR/Vision AI en profundidad + demo |
| Productos | `/productos` | Catálogo completo con fichas |
| Nosotros | `/nosotros` | Historia, equipo, trayectoria |
| Casos de Éxito | `/casos` | Social proof con resultados reales |
| Contacto | `/contacto` | WhatsApp + formulario + mapa |

### Navegación

```
Logo | Servicios IA | Productos | Nosotros | Casos | Contacto
                                                    [Pedir Demo →]
```

CTA flotante: WhatsApp (bottom right, siempre visible)

---

## Estructura de la Homepage (sección por sección)

### 1. HERO — "El puente entre legacy e IA"

**Layout:** Full-viewport dark (Navy `#0F1729`), texto izquierda, animación derecha

**Headline (opción A — recomendada):**
> *Tu sistema legacy, ahora con inteligencia artificial.*
> Leemos facturas, remitos, cheques y comprobantes automáticamente y los volcamos directo a tu base de datos — en segundos.

**Headline (opción B — más directa):**
> *500 facturas procesadas. 0 carga manual. 100% compatible con tu sistema actual.*

**Headline (opción C — más emocional):**
> *Dejá de cargar datos a mano. Empezá hoy.*

**Sub-copy:**
Atika integra OCR + Vision AI con sistemas VB, .NET y ERP legacy sin reemplazarlos.
AFIP-compatible. Implementación en días, no en meses.

**CTAs:**
- Primario: `[Ver Demo en Vivo →]` (abre video o solicita demo)
- Secundario: `[Hablar por WhatsApp]`

**Asset visual placeholder:** `<!-- 3D SCROLL ASSET: animación de documento → base de datos, 680×480px -->`

---

### 2. TRUST BAR — Logos + números

**Layout:** Fondo off-white, centrado, full-width

**Contenido:**
- `[22+ empresas confían en Atika]`
- Logo carousel con 22 logos de clientes (los que ya tiene el sitio actual)
- Números: **20+ años** · **22+ clientes** · **14 productos** · **AFIP certificado**

---

### 3. EL PROBLEMA — "¿Cuánto tiempo perdés cargando datos a mano?"

**Layout:** Sección oscura (Navy mid), dos columnas

**Antes (pain points):**
- Empleados cargando facturas a mano → errores, demoras, costos
- Sistemas legacy que "no se pueden tocar" pero necesitan modernizarse
- OCR genérico que no entiende el formato AFIP
- Consultoras de IA que no conocen los sistemas legacy que ya tenés

**Después (con Atika):**
- Lectura automática de facturas, remitos, cheques, comprobantes
- Integración directa con tu sistema VB, .NET o ERP actual
- Sin reemplazar lo que funciona, sumando lo que falta
- Implementación local, soporte en castellano, conocimiento del mercado argentino

---

### 4. SERVICIOS IA — "Automatización de documentos financieros"

**Layout:** Fondo claro, cards con hover glow

**Cards (3 principales):**

**1. OCR + Vision AI para Documentos Financieros**
Lectura automática de facturas, comprobantes, remitos y cheques. Extracción de datos estructurados y volcado directo a la base de datos.
`[Saber más →]`

**2. Integración con Sistemas Legacy**
Conectamos la IA con tu sistema VB, .NET, ERP o base de datos existente. Sin reemplazarlo. Sin tirar el trabajo de años.
`[Saber más →]`

**3. Desarrollo a Medida (.NET / Mobile / Web)**
Desarrollo de nuevas funcionalidades sobre plataformas existentes: apps móviles, módulos web, APIs REST.
`[Saber más →]`

---

### 5. CÓMO FUNCIONA — "De imagen a dato en 3 pasos"

**Layout:** Fondo oscuro, timeline horizontal con animación scroll

**Step 1:** El usuario escanea o fotografía el documento (factura, remito, cheque)
**Step 2:** El motor OCR + Vision IA extrae los datos estructurados (CUIT, monto, fecha, conceptos)
**Step 3:** Los datos se escriben directo en la base de datos del sistema legacy

**Visual placeholder:** `<!-- VIDEO/GIF: demo del proceso OCR, ~800×450px -->`

---

### 6. PRODUCTOS — Catálogo destacado

**Layout:** Grid 3 columnas, fondo off-white

Mostrar los 6 productos más relevantes de los 14:
COMAR ERP/CRM · GPL MRP · AIEL OLAP · Facturación MiPyme · GAP Access Control · GCE Turnero

CTA: `[Ver todos los productos →]`

---

### 7. SOCIAL PROOF — "Más de 20 años haciendo que los sistemas funcionen"

**Layout:** Fondo navy, quote destacada + stats

**Quote destacada:** (usar un testimonio real de cliente — placeholder marcado)
> *"[PLACEHOLDER: testimonio de cliente con nombre, empresa y resultado específico]"*
> — [Nombre], [Cargo], [Empresa]

**Stats animados:**
- 20+ años en el mercado
- 22+ empresas clientes
- 14 soluciones de software
- AFIP-compatible

---

### 8. CTA FINAL — "Empezá tu demo gratuita"

**Layout:** Full-width, gradient navy→blue, texto centrado

**Headline:** *¿Listo para que tu sistema hable con la IA?*
**Sub:** En una llamada de 30 minutos te mostramos cómo funciona el OCR en vivo con un documento tuyo.

**CTAs:**
- Primario: `[Pedir Demo Gratuita →]`
- Secundario: `[Escribinos por WhatsApp]`

---

### 9. FOOTER

- Logo + tagline
- Links: Servicios · Productos · Nosotros · Contacto · Política de Privacidad
- Emails: info / ventas / soporte
- Teléfono: 15.6300.1050/51
- Redes sociales: LinkedIn (crear) + Instagram (crear)
- Copyright © 2004–2026 Atika Software

---

## Content Framework

### Headlines — Fórmulas de los top performers

**Fórmula 1 (Resultado específico):**
"[Número] [documentos] procesados por [tiempo] — sin carga manual"

**Fórmula 2 (Antes/Después):**
"Antes: [pain]. Ahora: [solución específica]."

**Fórmula 3 (Credibilidad + Transformación):**
"[X años] integrando sistemas. Ahora con IA."

### Palabras clave a incluir en copy

Primarias: OCR facturas, automatización documentos, integración legacy, sistemas VB, AFIP
Secundarias: lectura automática, digitalización, comprobantes, remitos, cheques, base de datos

---

## CTA Strategy

| Página / Sección | CTA Primario | CTA Secundario |
|---|---|---|
| Hero | Ver Demo en Vivo | WhatsApp |
| Servicios IA | Solicitar Implementación | Descargar Ficha Técnica |
| Productos | Ver Detalle | Pedir Cotización |
| Casos de Éxito | Hablar con un Experto | WhatsApp |
| CTA Final | Pedir Demo Gratuita | WhatsApp |
| Footer | info@atikasoft.com.ar | — |

**WhatsApp flotante:** Siempre visible, bottom-right, mensaje pre-cargado:
`"Hola! Quiero saber más sobre la automatización de documentos con IA"`

---

## Conversion Playbook

**Objetivo primario:** Solicitud de demo (form o WhatsApp)
**Objetivo secundario:** Descarga de ficha técnica / brochure

**Lead capture:**
- Formulario de demo en hero y en CTA final
- WhatsApp flotante omnipresente
- Email de ventas visible en footer

**Trust signals checklist:**
- [ ] Badge AFIP/ARCA visible en hero o trust bar
- [ ] Logo carousel de 22+ clientes
- [ ] Años en el mercado (número animado)
- [ ] Testimonial real con nombre y empresa
- [ ] Emails corporativos (no Gmail)
- [ ] Número de teléfono local visible
- [ ] SSL/HTTPS activo
- [ ] Política de Privacidad en footer

---

## SEO Targets

**Página home:** "software integración sistemas legacy IA Argentina"
**Página Servicios IA:** "OCR facturas automatización Argentina", "lectura automática documentos AFIP"
**Página Productos:** "COMAR ERP Argentina", "software gestión PYME Argentina"
**Blog (fase 2):** contenido long-form para keywords primarias de baja competencia

---

## Tech Stack

- HTML5 + CSS3 + Vanilla JS
- GSAP + ScrollTrigger (animaciones)
- Google Fonts (Plus Jakarta Sans + Inter)
- No frameworks (portabilidad máxima)
- Hosting: Netlify o Vercel (deploy en minutos)

---

## Información Pendiente del Cliente

Los siguientes elementos están marcados como placeholders en el sitio y necesitan ser provistos por Atika:

- [ ] **Logo en alta resolución** (SVG o PNG 2x mínimo)
- [ ] **Colores de marca exactos** (si tienen manual de marca)
- [ ] **Testimonio real** de al menos 1 cliente con resultado concreto
- [ ] **Foto de equipo o fundadores** (para sección Nosotros)
- [ ] **Video o GIF del OCR en acción** (el asset más poderoso)
- [ ] **Lista actualizada de clientes** para el carousel
- [ ] **Número de WhatsApp Business** para el botón flotante
- [ ] **Perfil de LinkedIn** (si existe o necesita crearse)

---

## ⚠️ CHECKPOINT — APROBACIÓN REQUERIDA

Este brief define la dirección completa del nuevo sitio. Los puntos clave de decisión son:

1. **Headline del hero** — ¿Cuál de las 3 opciones preferís?
2. **Nombre de la sección IA** — ¿"Servicios IA" o "Automatización de Documentos" o "OCR + IA"?
3. **Páginas a construir** — ¿Confirmamos las 6 páginas definidas?
4. **Información pendiente** — ¿Qué tenés disponible ahora para empezar?

**¿Listo para hacer el build?**
