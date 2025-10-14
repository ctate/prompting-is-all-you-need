<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  A mesmerizing self-playing pong game with pixel-perfect text rendering, built with React, Canvas API, and Next.js 15.
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

## 📖 About

**Prompting Is All You Need** is an interactive demonstration that combines classic Pong gameplay with modern web technologies. The game features self-playing AI paddles, custom pixel-rendered text that reads "PROMPTING IS ALL YOU NEED", and dynamic audio feedback. The ball bounces around the screen, interacting with pixel text and paddles, creating an engaging visual and auditory experience.

This project showcases:
- Advanced Canvas API manipulation
- Physics-based collision detection
- Responsive design that adapts to any viewport
- Web Audio API integration for dynamic sound effects
- Modern React patterns with hooks and refs

## ✨ Features

### Visual & Animation
- **Self-Playing Pong Game** - Four AI-controlled paddles automatically track and follow the ball
- **Custom Pixel Text Rendering** - Hand-crafted pixel font with letters rendered individually
- **Interactive Pixels** - Text pixels change color (#FFFFFF → #333333) when hit by the ball
- **Smooth Animations** - 60 FPS gameplay powered by `requestAnimationFrame`
- **Responsive Design** - Automatically scales to fit any screen size while maintaining proportions
- **Minimalist Aesthetic** - Clean black and white design with high contrast

### Audio
- **Dynamic Sound Effects** - Web Audio API generates sounds for:
  - Wall bounces (220Hz triangle wave)
  - Paddle hits (330Hz square wave)
  - Pixel collisions (440Hz sine wave)

### Physics
- **Realistic Collision Detection** - Accurate ball-to-paddle and ball-to-pixel collision handling
- **Smart Bounce Direction** - Ball bounces based on collision axis for natural movement
- **Smooth Paddle Tracking** - Paddles use interpolation for fluid AI movement

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the animation.

### Build for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## 🛠 Tech Stack

### Core
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Modern icon library

### Additional Libraries
- **Canvas API** - Native browser API for 2D rendering
- **Web Audio API** - Native browser API for sound generation
- **React Hook Form + Zod** - Form handling with validation
- **next-themes** - Dark mode support

## 🎮 How It Works

### Game Loop
The game runs on a continuous loop using `requestAnimationFrame`:
1. **Update Phase** - Calculate new positions, handle collisions, update paddle targets
2. **Draw Phase** - Clear canvas, render pixels, ball, and paddles
3. **Repeat** - Request next animation frame

### Collision Detection
- **Ball vs Walls** - Simple boundary checking with direction reversal
- **Ball vs Paddles** - AABB (Axis-Aligned Bounding Box) collision detection
- **Ball vs Pixels** - Per-pixel collision with smart bounce direction based on impact axis

### Pixel Rendering
Each letter is defined in a bitmap format (`PIXEL_MAP`), then:
1. Letters are converted to individual pixel objects with x, y coordinates
2. Text is centered and scaled to fit 80% of viewport width
3. Pixels maintain hit state for color changes
4. Collision detection runs per-pixel for interactive feedback

### Audio System
Sounds are generated programmatically using the Web Audio API:
- `OscillatorNode` creates waveforms
- `GainNode` controls volume with exponential decay
- Different frequencies and waveforms distinguish event types

### Responsive Scaling
All dimensions scale based on viewport size:
```typescript
scale = min(width / 1000, height / 1000)
pixelSize = baseSize * scale * scaleFactor
```

## 👨‍💻 Author

Created by **Chris Tate** ([@ctatedev](https://x.com/ctatedev))

---

<p align="center">
  <sub>Built with ❤️ using v0.dev</sub>
</p>
