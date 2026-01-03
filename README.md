# Omeir Mustafa — Digital Infrastructure Structure

This repository contains the source code for my personal digital infrastructure.
It is engineered to serve as a high-performance client acquisition system for professional services.

## Architecture

- **Core**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (Zero-runtime)
- **Animation**: Framer Motion (GPU-accelerated)
- **Type Safety**: TypeScript Strict Mode

## Design Philosophy

This system is built on "Subtraction".
- No unnecessary dependencies.
- No client-side bloat.
- No decorative elements that do not serve a conversion purpose.

## Performance

- LCP (Largest Contentful Paint): Optimized via `next/image` and priority loading.
- CLS (Cumulative Layout Shift): Zero. Fonts are subsetted and preloaded.
- TBT (Total Blocking Time): Minimized by deferring non-critical scripts.

## Project Structure

```bash
/components
  /sections    # Landing page sections (Hero, About, Services, etc.)
  /ui          # Atomic design primitives (Buttons, Containers)
  /layout      # Global shell (Navbar, Footer)
/lib           # Utilities and constants
/public        # Static assets
```

## Local Development

```bash
npm install
npm run dev
```

## License

All rights reserved. Omeir Mustafa.
