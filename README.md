# TRAJESBOMBERO — trajesbomberos.com

Sitio de venta de trajes y equipo de protección para bomberos en México.
Astro 6 + Markdown (canónico OrigenLab). CSS vanilla. Deploy: GitHub Pages (build-based).

## Estructura

- `config/site.ts` — SSoT de datos del negocio (completar teléfono/WhatsApp/email)
- `src/content.config.ts` — colecciones `productos` y `blog` (glob loader, md/mdx)
  (va en `src/`, no en la raíz: Astro 5+ solo lo lee desde ahí)
- `src/content/productos/` — un `.md` por producto (`_plantilla.md` como base)
- `src/content/blog/` — un `.md` por artículo; categorías en `BLOG_CATEGORIES` (site.ts)
- `src/lib/seo.ts` — meta + JSON-LD por pageType (sin ratings fabricados)
- `src/layouts/BaseLayout.astro`, `src/components/`, `src/styles/global.css`

## Publicación

El sitio vive en **dos repositorios** y eso no es accidental:

| Repo | Rol | Visibilidad |
| --- | --- | --- |
| `Origenlab/TRAJESBOMBERO` | Donde se trabaja | Privado |
| `Frankoropeza/trajesbomberos-web` | Donde se publica | Público |

El dominio `trajesbomberos.com` apunta a GitHub Pages del repo **público**
(cname y certificado configurados ahí). GitHub Pages no publica repos
privados en plan gratuito, así que el privado no puede servir el sitio.

### El flujo, ya automatizado

```
push a main (Origenlab)
   → workflow "Publicar en el repo del dominio"  (espeja main)
   → push a main (Frankoropeza)
   → workflow "Publicar en GitHub Pages"          (build + deploy)
   → trajesbomberos.com
```

No hay paso manual. Empujas a `origin` y el sitio se actualiza en ~2 min.

### Credencial

El espejo usa una **deploy key SSH** (secret `PAGES_DEPLOY_KEY` en
Origenlab), con permiso de escritura sobre un solo repositorio. No es un
token de cuenta: si se filtrara, no daría acceso a nada más.

Para rotarla:

```bash
ssh-keygen -t ed25519 -N "" -f /tmp/k -C "origenlab-ci"
gh auth switch --user Frankoropeza
gh repo deploy-key add /tmp/k.pub --repo Frankoropeza/trajesbomberos-web --allow-write
gh auth switch --user Origenlab
gh secret set PAGES_DEPLOY_KEY --repo Origenlab/TRAJESBOMBERO < /tmp/k
rm -f /tmp/k /tmp/k.pub
```

### Por qué cada workflow lleva una guarda `if:`

Los dos repos comparten el mismo código, así que ambos ven los dos
workflows. Sin la guarda por repositorio, el de Pages correría también en
el privado —reportando éxito sin publicar nada— y el del espejo correría
en el público, empujándose a sí mismo en bucle.

Ese falso positivo tuvo el sitio congelado dos días en julio de 2026: los
commits estaban bien, el deploy decía "success" y nada llegaba al dominio.

### Verificar que una publicación entró

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://trajesbomberos.com/blog/
```

## Comandos

```bash
npm install
npm run dev
npm run build   # astro check && astro build
```
