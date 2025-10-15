<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  A mesmerizing self-playing pong game with pixel art text, dynamic animations, and retro sound effects.
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

## 📖 About

**Prompting Is All You Need** is an interactive canvas-based pong game featuring self-playing animation where a ball dynamically bounces around the screen, interacting with custom pixel-art text and intelligent paddles. Watch as the text "PROMPTING IS ALL YOU NEED" becomes part of the gameplay, with pixels changing color on impact and retro sound effects creating an immersive audiovisual experience.

This project demonstrates the power of modern web technologies combined with creative coding, showcasing smooth animations, collision detection, and responsive design—all in a minimalist black and white aesthetic.

## ✨ Features

### Core Gameplay
- **Self-Playing Animation** - Fully autonomous pong game that runs without user input
- **Intelligent Paddles** - Four paddles (top, bottom, left, right) that automatically track and follow the ball
- **Collision Detection** - Precise physics for ball interactions with paddles, walls, and pixel text

### Visual Design
- **Custom Pixel Art** - Hand-crafted pixel font rendering for "PROMPTING IS ALL YOU NEED"
- **Interactive Text** - Pixels change from white to dark gray when hit by the ball
- **Minimalist Aesthetic** - Clean black and white design with smooth animations
- **Fully Responsive** - Automatically scales to any screen size while maintaining proportions

### Audio Experience
- **Retro Sound Effects** - Web Audio API-powered sound effects for:
  - Wall bounces (220Hz triangle wave)
  - Paddle hits (330Hz square wave)
  - Pixel collisions (440Hz sine wave)

### Technical Excellence
- **60 FPS Animation** - Smooth gameplay using requestAnimationFrame
- **Dynamic Scaling** - Intelligent viewport adaptation for consistent experience across devices
- **Performance Optimized** - Efficient canvas rendering and collision detection algorithms

## 🛠 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with hooks for state management
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Canvas API** - Native browser API for 2D rendering
- **Web Audio API** - Real-time audio synthesis for sound effects
- **[shadcn/ui](https://ui.shadcn.com/)** - UI component library (included but not used in main game)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action.

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎮 How It Works

### Game Mechanics

1. **Initialization**
   - Canvas scales to window size
   - Pixel text is generated from a custom font map
   - Ball starts in top-right corner with diagonal velocity
   - Four paddles are positioned on each edge

2. **Animation Loop**
   - Ball position updates based on velocity vectors
   - Collision detection checks against walls, paddles, and pixels
   - Paddles smoothly track ball position using interpolation
   - Hit pixels change color and trigger sound effects
   - Canvas redraws at 60 FPS

3. **Collision System**
   - **Walls**: Ball bounces on screen edges
   - **Paddles**: Ball reverses direction with smooth tracking
   - **Pixels**: Ball deflects based on collision angle, pixel changes color

4. **Audio System**
   - Web Audio API creates oscillators for each sound
   - Different waveforms for different collision types
   - Volume-controlled with exponential gain reduction

### Key Components

- **`prompting.tsx`** - Main game component with canvas logic
- **`PIXEL_MAP`** - Character definitions for custom pixel font
- **Audio utilities** - Sound generation functions
- **Game loop** - requestAnimationFrame-based animation system

## 🎨 Customization

The game can be easily customized by modifying constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"           // Default pixel color
const HIT_COLOR = "#333333"       // Color when pixel is hit
const BACKGROUND_COLOR = "#000000" // Canvas background
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
```

You can also modify the text by changing the `words` array in the `initializeGame` function.

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)

---

<p align="center">Built with ❤️ using Next.js, React, and Canvas API</p>
