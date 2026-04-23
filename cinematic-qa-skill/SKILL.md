---
description: Protocolo de Quality Assurance (QA) para landings cinemáticas y uso avanzado de GSAP en React.
---

# Cinematic QA Skill - MicelIA

Esta skill debe invocarse cuando el desarrollo de una Landing Page "Cinemática" (tipo Premium / Web3 / AI Lab) esté en su etapa final o necesite pulido.

## Checklist de Revisión

### 1. Limpieza de Memoria y Hooks en React
- ¿Se está utilizando `@gsap/react` `useGSAP` en lugar de `useEffect` puro?
- Si se usa `ScrollTrigger`, asegurarse de incluir `{ scope: ref }` para que la limpieza de la animación suceda automáticamente al desmontar.

### 2. Rendimiento (60fps Target)
- Nunca animar propiedades caras como `width`, `height`, `top` o `left`.
- Animar siempre **Transforms** (`x`, `y`, `scale`, `rotation`) y **Opacity**.
- Asegurar el uso de `will-change: transform` mediante clases de tailwind o CSS donde el elemento reciba animaciones muy pesadas.

### 3. Estética Premium (Micropy / Detalles)
- Ninguna animación debe rebotar (bounce) agresivamente. Usar easing como `power3.out` o `expo.out`.
- Botones principales:
  - Deben tener estado hover con `scale-105` o un efecto sutil magnético.
  - El active state debe ser de compresión (e.g., `active:scale-95`).
- "Noise Overlay" global: ¿Está activo? Debe tener opacidad entre 0.03 y 0.05.

## Reglas de Implementación Automática
Cuando un agente lea esta skill, debe **revisar el código fuente de los componentes** aplicando los tres puntos mencionados antes de entregar el proyecto al usuario final.
