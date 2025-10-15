<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  A mesmerizing interactive pixel-based pong game that demonstrates the power of modern web animations
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>
<br/>

## About

**Prompting Is All You Need** is an interactive pixel-based pong game that showcases the intersection of creative coding and modern web technologies. Built entirely with React and Canvas API, it features a self-playing animation where a ball bounces dynamically across the screen, interacting with pixel-rendered text and AI-controlled paddles.

This project demonstrates:
- Advanced canvas rendering techniques
- Pixel-perfect collision detection
- Smooth 60fps animations using requestAnimationFrame
- Responsive design that adapts to any screen size
- Minimalist aesthetic with maximum visual impact

## Features

### Core Gameplay
- **Self-Playing Animation** - Watch an autonomous game of pong unfold automatically
- **Intelligent Paddle AI** - Paddles track and respond to ball movement in real-time
- **Dynamic Collision Detection** - Precise physics for ball interactions with text, paddles, and boundaries

### Visual Design
- **Pixel-Based Text Rendering** - Custom pixel art text that reacts to ball collisions
- **Color-Changing Pixels** - Visual feedback when the ball strikes individual pixels
- **Dark/Light Mode Support** - Seamless theme switching with next-themes
- **Minimalist Aesthetic** - Clean black and white design that focuses on movement

### Technical Excellence
- **Fully Responsive** - Automatically adapts to any viewport size
- **Smooth 60fps Animations** - Optimized rendering loop for consistent performance
- **Type-Safe** - Built with TypeScript for reliability and maintainability
- **Modern React** - Uses React 19 with functional components and hooks

## Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prompting-is-all-you-need
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

### Core Framework
- **Next.js 15.2** - React framework with server-side rendering and optimal performance
- **React 19** - Latest version with improved hooks and concurrent features
- **TypeScript 5** - Type safety and enhanced developer experience

### Rendering & Animation
- **Canvas API** - Hardware-accelerated 2D graphics rendering
- **requestAnimationFrame** - Browser-native animation timing for smooth 60fps
- **Custom Physics Engine** - Collision detection and ball trajectory calculations

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **next-themes 0.4** - Dark mode support with no flash
- **Radix UI** - Accessible component primitives
- **class-variance-authority** - Type-safe component variants

### Developer Experience
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## How It Works

The game uses the HTML5 Canvas API to render everything from scratch:

1. **Initialization** - Canvas is set up with responsive dimensions based on viewport
2. **Pixel Text Generation** - Text is converted into individual pixel coordinates
3. **Animation Loop** - requestAnimationFrame drives the game at 60fps:
   - Ball position updates based on velocity
   - Collision detection checks ball against pixels, paddles, and boundaries
   - Paddle AI calculates optimal position to intercept ball
   - Canvas redraws all elements with updated positions
4. **Collision Response** - Physics calculations determine new ball trajectory when hitting objects
5. **Responsive Updates** - Window resize events trigger canvas recalculation

The entire animation runs autonomously, creating a hypnotic visual experience that showcases the power of web animations.

## Project Structure

```
.
├── prompting.tsx          # Main game component with Canvas logic
├── components.json        # shadcn/ui component configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Author

Created by **Chris Tate** ([@ctatedev](https://x.com/ctatedev))

## License

This project is open source and available for educational purposes.

---

<p align="center">
  Built with React, Canvas, and a passion for creative coding
</p>
