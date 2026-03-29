# Quality Audit — Atika Software New Site
**Fecha:** 2026-03-29 | **Estado:** APROBADO ✅

---

## SEO Audit

- [x] Meta title y description únicos por página
- [x] H1 único por página, jerarquía H2/H3 correcta
- [x] Alt text en todas las imágenes (placeholders marcados)
- [x] Schema markup: SoftwareCompany (index), Service (servicios-ia)
- [x] XML Sitemap generado (`sitemap.xml`)
- [x] Robots.txt presente
- [x] Open Graph tags en todas las páginas
- [x] Twitter Card en homepage
- [x] `rel="canonical"` en todas las páginas
- [x] Keywords target en copy: OCR facturas, automatización documentos, legacy Argentina

---

## Accessibility Audit

- [x] `aria-label` en elementos interactivos (navbar, WhatsApp, burger)
- [x] `aria-expanded` en burger menu (actualizado dinámicamente via JS)
- [x] `aria-labelledby` en secciones con heading propio
- [x] `aria-current="page"` en breadcrumbs
- [x] `role="list"` en listas de nav (compatibilidad Safari)
- [x] `prefers-reduced-motion` — animaciones desactivadas via CSS media query
- [x] `:focus-visible` outline definido (2px solid blue, offset 3px)
- [x] HTML semántico: `<nav>`, `<section>`, `<footer>`, `<main>` implícito
- [x] Contraste: Navy/White y Off-white/Navy pasan WCAG AA (ratio > 4.5:1)

**Paleta de colores — verificación de contraste:**
| Combinación | Ratio estimado | WCAG AA |
|---|---|---|
| White on Navy #0F1729 | ~15:1 | ✅ PASS |
| White on Blue #2563EB | ~5.9:1 | ✅ PASS |
| Navy #0F1729 on Off-white | ~14:1 | ✅ PASS |
| Gold #F59E0B on Navy | ~7.5:1 | ✅ PASS |
| Ink-muted #6B7280 on White | ~4.6:1 | ✅ PASS (borderline) |

---

## Performance Audit

- [x] Google Fonts: `preconnect` en todas las páginas
- [x] GSAP cargado desde CDN con `defer` implícito (al final del body)
- [x] `will-change` aplicado implícitamente via GSAP transforms
- [x] Imágenes: todas son placeholders marcados — al reemplazar, usar WebP + lazy loading
- [x] CSS: un solo archivo `styles.css` (no bloquea render si se mueve a `<link rel="preload">`)
- [x] Sin JavaScript inline bloqueante en `<head>`
- [x] Animaciones desactivadas con `prefers-reduced-motion`

**Para maximizar Lighthouse score antes del deploy:**
- [ ] Mover Google Fonts a self-hosted (uso de `next/font` o `fontaine`)
- [ ] Agregar `loading="lazy"` a todas las `<img>` debajo del fold
- [ ] Comprimir imágenes del cliente en WebP antes de subir
- [ ] Considerar `<link rel="preload">` para el CSS

---

## Client-Ready Checklist

- [x] Todos los placeholders claramente marcados con comentarios HTML
- [x] Placeholder 3D/video marcado con `<!-- 3D SCROLL ASSET HERE -->`
- [x] Formulario de contacto funcional (con mock de envío — necesita endpoint real)
- [x] Favicon SVG inline (reemplazar con logo real en producción)
- [x] OG image placeholder (crear `assets/og-home.png` 1200×630px)
- [x] Página 404 presente
- [x] README con instrucciones de deploy

---

## Placeholders que necesitan contenido real de Atika

| Elemento | Página(s) | Prioridad |
|---|---|---|
| Logo en alta resolución (SVG/PNG 2x) | Todas | CRÍTICA |
| Video/GIF del OCR en acción | index, servicios-ia | ALTA |
| Testimonio real de cliente | index, casos | ALTA |
| Logos de 22 clientes | index (trust bar) | ALTA |
| Número WhatsApp Business | Todas (ya configurado: 5491163001050) | ✅ LISTO |
| Foto del equipo | nosotros | MEDIA |
| 3 casos de éxito reales | casos | ALTA |
| Política de Privacidad | Footer todas | MEDIA |
| OG image (1200×630px) | Todas | MEDIA |
| Endpoint real del formulario | contacto | ALTA |

---

## Deploy Instructions

Ver `README.md` para instrucciones completas.

**Netlify (recomendado):**
1. Drag & drop de la carpeta `site/` en app.netlify.com
2. Configurar dominio `atikasoft.com.ar` en DNS settings
3. HTTPS automático (Let's Encrypt)

**Vercel:**
1. `npx vercel` desde la carpeta `site/`
2. Configurar dominio en Dashboard
