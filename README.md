<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  A mesmerizing self-playing pong animation with dynamic pixel art — built entirely through AI prompting
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>

<br/>

## About

**Prompting Is All You Need** is a hypnotic, self-playing pong game that demonstrates the power of AI-assisted development. This project features a continuously bouncing ball that interacts with pixel-rendered text and autonomous paddles, creating an engaging visual showcase of dynamic canvas animations.

The entire application was built using AI prompting, showcasing how natural language can be transformed into production-ready code. Watch as the ball bounces endlessly, the pixels react to collisions, and the paddles intelligently track their target — all rendered with retro pixel-perfect precision.

## Features

### Core Gameplay
- **Fully Autonomous** — Self-playing animation requiring no user input
- **Smart Paddles** — Automatic paddle tracking that follows the ball
- **Reactive Pixels** — Dynamic color changes on ball collision with text
- **Audio Feedback** — Retro-style sound effects using Web Audio API

### Technical Features
- **Fully Responsive** — Adapts seamlessly to any screen size
- **Pixel-Perfect Rendering** — Custom pixel font system for authentic retro aesthetics
- **Smooth Performance** — Optimized canvas rendering with requestAnimationFrame
- **Physics Simulation** — Realistic ball movement with collision detection
- **Minimalist Design** — Clean black and white aesthetic

## Tech Stack

This project leverages modern web technologies:

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **Canvas API** — For high-performance 2D graphics rendering
- **Web Audio API** — For procedural sound generation
- **[Radix UI](https://www.radix-ui.com/)** — Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** — Beautifully designed components

## Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the animation in action

### Build for Production

```bash
pnpm build
pnpm start
```

## How It Works

The animation is powered by a custom canvas-based rendering engine:

### Pixel Text System
- Each character is defined in a pixel matrix format
- Text "PROMPTING IS ALL YOU NEED" is rendered pixel-by-pixel
- Individual pixels track collision state for color changes

### Physics Engine
- Ball maintains velocity with realistic bounce physics
- Collision detection against paddles, walls, and individual pixels
- Paddles use smooth interpolation for natural movement

### Animation Loop
- Powered by `requestAnimationFrame` for 60 FPS rendering
- Calculates positions, checks collisions, and updates state
- Responsive canvas that scales with viewport dimensions

### Sound Design
- Web Audio API generates procedural retro-style bleeps
- Different frequencies for wall hits, paddle hits, and pixel collisions
- Oscillators create authentic 8-bit sound effects

## Project Structure

```
├── app/
│   ├── page.tsx          # Main entry point
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx
├── prompting.tsx         # Main game component with canvas logic
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Customization

You can easily customize the game by modifying constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"           // Pixel text color
const HIT_COLOR = "#333333"       // Color when pixels are hit
const BACKGROUND_COLOR = "#000000" // Canvas background
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
```

## Contributing

This project demonstrates AI-assisted development. Feel free to fork and experiment with:
- Adding new pixel fonts or text
- Implementing different physics behaviors
- Creating new visual effects
- Adding user controls or game modes

## License

This project is open source and available for educational and demonstration purposes.

## Author

**Chris Tate** ([@ctatedev](https://x.com/ctatedev))

Built with [v0.dev](https://v0.dev/) — where prompting truly is all you need.

---

<p align="center">
  <strong>If you enjoyed this project, consider giving it a star!</strong>
</p>
