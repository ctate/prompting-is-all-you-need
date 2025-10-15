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
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## About

Prompting Is All You Need is a self-playing pong game that demonstrates the power of modern web technologies. Watch as a ball bounces around the screen, interacting with pixel-rendered text and intelligent paddles that automatically track its movement. The project features dynamic animations, collision detection, procedural audio, and a minimalist aesthetic.

## Features

- **Self-Playing Animation** - Autonomous game loop with no user input required
- **Pixel Text Rendering** - Custom pixel-art font system rendering "PROMPTING IS ALL YOU NEED"
- **Smart Paddle AI** - Four paddles (top, bottom, left, right) that automatically follow the ball
- **Dynamic Collision Detection** - Ball interacts with text pixels, paddles, and walls
- **Procedural Sound Effects** - Web Audio API generates retro sounds for collisions:
  - Wall bounces (220Hz triangle wave)
  - Paddle hits (330Hz square wave)
  - Pixel impacts (440Hz sine wave)
- **Visual Feedback** - Pixels change color from white to dark gray when struck
- **Fully Responsive** - Automatically scales to any screen size while maintaining proportions
- **Minimalist Design** - Clean black and white aesthetic with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prompting-is-all-you-need
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint for code quality checks

## Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

### Canvas & Animation
- **HTML5 Canvas API** - 2D rendering context for graphics
- **requestAnimationFrame** - Smooth 60fps animation loop
- **Web Audio API** - Real-time sound synthesis

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Re-usable component collection
- **Lucide React** - Icon library

## How It Works

### Pixel Rendering System
The game uses a custom pixel mapping system (prompting.tsx:40-146) to render text character by character. Each letter is defined as a 2D array of 1s and 0s, which are converted to canvas pixels at runtime.

### Game Physics
- Ball movement uses velocity vectors (dx, dy) updated each frame
- Collision detection uses AABB (Axis-Aligned Bounding Box) for rectangles
- Circle-to-rectangle collision for ball interactions
- Direction reversal based on collision angle

### Paddle AI
Paddles use smooth interpolation to follow the ball:
```typescript
paddle.y += (paddle.targetY - paddle.y) * 0.1
```
This creates natural-looking movement with easing.

### Audio Synthesis
Sound effects are generated procedurally using oscillators:
- Different frequencies distinguish collision types
- Exponential gain ramping creates authentic retro game sounds
- No audio files needed - all sounds generated in-browser

## Project Structure

```
/vercel/sandbox/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page component
├── components/
│   ├── theme-provider.tsx  # Dark mode support
│   └── ui/                 # shadcn/ui components
├── prompting.tsx           # Core game component
├── package.json
└── README.md
```

## Author

Created by Chris Tate ([@ctatedev](https://x.com/ctatedev))

## License

This project is open source and available for use and modification.
