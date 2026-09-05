# DataPilot

A modern, responsive marketing website for **DataPilot** — a data analytics platform that helps teams understand their data through powerful analytics and intelligent insights.

Built with **Next.js**, **React**, **Tailwind CSS v4**, and **TypeScript**.

## Features

- **Fully responsive** — mobile-first layout with hamburger menu, tablet and desktop breakpoints
- **Dark / light mode** — manual toggle with system preference detection, saved to `localStorage`
- **Animated mobile menu** — smooth max-height/opacity transitions
- **FAQ accordion** — smooth expand/collapse with accessibility attributes
- **Contact form** — client-side validation with inline error messages
- **Theming** — custom brand colors via Tailwind v4 `@theme` tokens

## Tech Stack

| Tool | Purpose |
| --- | --- |
| Next.js (App Router) | Framework |
| React | UI components |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| next/link | Client-side navigation |

## Project Structure

```javascript
├── app/                  # Pages and layouts
├── components/
│   ├── Navbar.tsx        # Header with mobile menu + theme toggle
│   ├── ThemeToggle.tsx   # Dark/light mode toggle
│   ├── Footer.tsx        # Footer with contact info + form
│   ├── ContactForm.tsx   # Validated contact form
│   ├── TestimonialsSection.tsx
│   └── TestimonialCard.tsx
├── public/assets/        # Images and SVGs (logo, icons, photos)
└── globals.css           # Tailwind v4 config, theme tokens, dark variant
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Dark Mode

Dark mode is class-based. The theme is applied by toggling the `dark` class on `<html>`, with the preference persisted in `localStorage`. The Tailwind v4 dark variant is defined in `globals.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Custom Theme Colors

Defined in `globals.css` under `@theme`:

| Token | Color |
| --- | --- |
| `--color-dp-navy` | `#033494` |
| `--color-dp-blue` | `#075B91` |
| `--color-dp-yellow` | `#FEBF03` |
| `--color-dp-light` | `#F1F1F1` |
| `--color-dp-card` | `#C7D5DA` |
| `--color-dp-text` | `#243B5A` |
| `--color-dp-bluee` | `#2B638D` |

Use them as utility classes, e.g. `text-dp-yellow`, `bg-dp-navy`.

## License

© 2026 DataPilot. All rights reserved.