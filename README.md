# ControlZebra Website

Marketing website for ControlZebra - a simplified Git client for industrial automation professionals.

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator with excellent performance
- **[React](https://react.dev/)** - For interactive components
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
website/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── Comparison.tsx
│   │   ├── FAQ.tsx
│   │   ├── WaitlistForm.tsx
│   │   ├── WaitlistSection.tsx
│   │   ├── Footer.tsx
│   │   └── icons/
│   │       └── Logo.tsx
│   ├── layouts/
│   │   └── Layout.astro   # Main layout
│   ├── pages/
│   │   └── index.astro    # Home page
│   └── styles/
│       └── global.css     # Global styles & Tailwind config
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Key Features

- **Product-Led Growth Focus**: Waitlist signup prominently featured
- **Dark Mode Design**: Modern dark theme with green accent (brand colors)
- **Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Performance**: Static generation, minimal JavaScript

## Customization

### Colors

The primary brand colors are defined in `src/styles/global.css`:

- Primary: Green (`#22c55e` - Tailwind's green-500)
- Accent: Lime (`#84cc16` - Tailwind's lime-500)
- Background: Near-black (`#030712` - Tailwind's gray-950)

### Waitlist Integration

The waitlist form in `src/components/WaitlistForm.tsx` currently simulates a submission. To connect to a real backend:

1. Update the `handleSubmit` function in `WaitlistForm.tsx`
2. Add API endpoint URL
3. Handle success/error responses

Example services to integrate:
- [Buttondown](https://buttondown.email/)
- [ConvertKit](https://convertkit.com/)
- [Resend](https://resend.com/)
- Custom backend API

## Deployment

The site can be deployed to any static hosting:

- **Vercel**: `vercel` CLI or GitHub integration
- **Netlify**: `netlify deploy` or GitHub integration
- **Cloudflare Pages**: GitHub integration
- **AWS S3 + CloudFront**: Upload `dist/` folder

## License

Part of the ControlZebra project.
