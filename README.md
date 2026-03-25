# iCreate

Next.js LTS boilerplate with TypeScript, Tailwind CSS, and ESLint.

## Tech Stack

- **Next.js 16** (Active LTS)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint**
- **App Router** + **Turbopack**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
public/
```

## Path Aliases

Use `@/*` for imports from `src/`:

```tsx
import { Button } from "@/components/button";
```
