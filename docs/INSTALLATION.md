# ASCII Website - Installation Guide (Developers)

## Prerequisites
- Node.js 20+ (LTS recommended)
- npm 10+ or pnpm 9+
- Git

## Install dependencies
```bash
cd path/to/ASCII-WEBSITE
pnpm install    # recommended
# or
npm install
```

## Run development server
```bash
pnpm dev
# or
npm run dev
```

Open http://localhost:3000

## Build
```bash
pnpm build
# or
npm run build
```

## Lint
```bash
pnpm lint
# or
npm run lint
```

## Notes
- `app/`: Next.js App Router pages
- `components/`: UI components and shared widgets
- `public/`: static assets
- `styles/`: global CSS
- `docs/`: documentation (single installation guide maintained)
