# Terradata AI Solutions

Sitio comercial de consultoría en datos, inteligencia artificial, automatización
y software a medida. Está construido con Next.js App Router, React, TypeScript y
Tailwind CSS, y se despliega en Netlify desde la rama `main`.

**Producción:** [urielcapdevilaservicios.netlify.app](https://urielcapdevilaservicios.netlify.app/)

## Desarrollo local

Requisitos: Node.js 20 y npm.

```bash
npm ci
npm run dev
```

El servidor de desarrollo usa `http://localhost:9002`.

## Contrato de verificación

La definición de terminado está automatizada:

```bash
npm run verify
```

El comando ejecuta, en orden:

1. Integridad del harness y su documentación.
2. ESLint.
3. TypeScript en modo estricto.
4. Contratos SEO del código fuente.
5. Build de producción de Next.js.

También pueden ejecutarse comprobaciones focalizadas:

```bash
npm run verify:harness
npm run verify:seo
npm run lint
npm run typecheck
npm run build
```

GitHub Actions ejecuta el mismo `npm run verify` en cada pull request y en cada
push a `main`.

## Organización del repositorio

- `src/app/`: rutas, metadata, `robots.ts` y `sitemap.ts`.
- `src/components/`: componentes de presentación y conversión.
- `src/lib/`: configuración y contenido compartido tipado.
- `public/`: recursos públicos de marca.
- `scripts/`: validaciones determinísticas del repositorio.
- `docs/`: arquitectura, decisiones, estado y plan de ejecución.
- `AGENTS.md`: contrato operativo para personas y agentes.

Antes de modificar el proyecto, leer `AGENTS.md` y `docs/STATUS.md`.

## Principios editoriales

- No inventar clientes, testimonios, métricas, credenciales ni resultados.
- Cada ruta pública debe declarar metadata y canonical propios.
- Toda página indexable debe incorporarse al sitemap.
- Los cambios se completan en fases pequeñas que terminan con `npm run verify`
  en verde.

## Despliegue

Netlify despliega la producción desde `UriCapdevila/ServiciosWeb` en GitHub. El
repositorio no requiere Firebase, Genkit, una base de datos ni secretos para
renderizar las páginas comerciales actuales.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/uriel-capdevila0024/)
- [GitHub](https://github.com/UriCapdevila)
- [Correo](mailto:Uri_CapdevilaWRK@outlook.com)
