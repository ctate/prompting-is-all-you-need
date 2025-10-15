<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  An interactive pixel-based pong game built with React, Canvas API, and Next.js.
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#how-to-use"><strong>How to Use</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## About

Prompting Is All You Need is an interactive pixel-based pong game that features a self-playing animation where a ball bounces around the screen, hitting pixel text and paddles. The game showcases dynamic animations and responsive design, creating an engaging visual experience.

This project demonstrates the power of modern web technologies combined with creative animation techniques to create a nostalgic yet modern gaming experience.

## Features

- Self-playing animation - Watch the game play itself with intelligent paddle movement
- Pixel art rendering - Custom pixel-based text rendering on canvas
- Dynamic collisions - Real-time collision detection with visual feedback
- Responsive design - Adapts seamlessly to different screen sizes and orientations
- Smooth animations - 60 FPS animations using requestAnimationFrame
- Theme support - Light and dark mode with next-themes
- Minimalist aesthetic - Clean black and white design with pixel-perfect graphics

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prompting-is-all-you-need
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## How to Use

- Simply load the page to watch the animation play automatically
- The ball bounces around the screen, hitting the pixel text and paddles
- Paddles automatically track and follow the ball with realistic physics
- Pixels change color when hit by the ball, creating dynamic visual effects
- Responsive design adapts to different screen sizes
- Toggle between light and dark modes using the theme switcher

## Tech Stack

### Core Framework
- **Next.js 15.2** - React framework for production
- **React 19** - UI component library
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI component library
- **next-themes** - Theme management with dark mode support
- **class-variance-authority** - CSS variant management
- **lucide-react** - Icon library

### Animation & Rendering
- **Canvas API** - For pixel-perfect rendering and animations
- **requestAnimationFrame** - Smooth 60 FPS animations

### Additional Libraries
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **date-fns** - Date utility library
- **Sonner** - Toast notifications

## Project Structure

```
.
├── app/                 # Next.js app directory
├── components/          # React components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
└── prompting.tsx       # Main pong game component
```

## Author

Created by Chris Tate ([@ctatedev](https://x.com/ctatedev))

---

<p align="center">
  Made with React, Canvas API, and Next.js
</p>
