# TRAJESBOMBERO — trajesbombero.com

Sitio de venta de trajes y equipo de protección para bomberos en México.
Astro 6 + Markdown (canónico OrigenLab). CSS vanilla. Deploy: GitHub Pages (build-based).

## Estructura

- `config/site.ts` — SSoT de datos del negocio (completar teléfono/WhatsApp/email)
- `content.config.ts` — colección `productos` (glob loader, md/mdx)
- `src/content/productos/` — un `.md` por producto (`_plantilla.md` como base)
- `src/lib/seo.ts` — meta + JSON-LD por pageType (sin ratings fabricados)
- `src/layouts/BaseLayout.astro`, `src/components/`, `src/styles/global.css`

## Comandos

```bash
npm install
npm run dev
npm run build   # astro check && astro build
```
