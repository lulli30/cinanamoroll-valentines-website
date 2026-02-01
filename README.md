# Cinnamoroll Valentine Website

A sweet, Cinnamoroll-inspired Valentine's Day invitation built with Next.js. Ask someone to be your Valentine with a playful Yes/No question—the "No" button runs away when you hover over it!

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

## Features

- **Valentine question** — Yes/No buttons with a cheeky twist: the "No" button moves when you try to click it
- **Success screen** — A celebratory screen when they say yes
- **Animated background** — Soft, romantic atmosphere
- **Floating tulips** — Decorative tulips for a Valentine’s feel
- **Cinnamoroll theme** — Cute, pastel styling inspired by the Sanrio character

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Vercel Analytics** (optional)

## Getting Started

### Prerequisites

- Node.js 18+ (or use pnpm/npm)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cinnamoroll-valentine-website.git
cd cinnamoroll-valentine-website

# Install dependencies (npm, pnpm, or yarn)
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/              # Next.js App Router (layout, page, styles)
├── components/       # React components (question, success screen, decorations)
├── hooks/            # Custom hooks (valentine state)
├── public/           # Static assets (images, favicon)
└── types/            # TypeScript types
```

## Customization

- **Title & description** — Edit `app/layout.tsx` to change the page title and meta description (e.g. replace "Daphnee Jane Devilleres" with your name or your Valentine’s name).
- **Content** — Update copy in `components/ValentineQuestion.tsx` and `components/SuccessScreen.tsx` to personalize the message.

## License

MIT (or your preferred license)

---

Made with 💕 for Valentine's Day
