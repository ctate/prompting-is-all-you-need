<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  A mesmerizing interactive pixel-based pong game featuring dynamic animations, sound effects, and theme switching.
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

## 🎮 About

**Prompting Is All You Need** is a self-playing, hypnotic pong game that brings pixel art to life through physics-based animations. Watch as a ball bounces perpetually around the screen, interacting with custom pixel-rendered text ("PROMPTING IS ALL YOU NEED") and four intelligent paddles that track the ball's movement in real-time.

This project demonstrates the power of modern web technologies to create smooth, engaging animations entirely in the browser, with thoughtful details like theme switching, sound effects, and fully responsive scaling.

## ✨ Features

### Core Gameplay
- **🎯 Self-Playing Animation**: Autonomous gameplay that runs indefinitely with no user input required
- **🎨 Pixel Art Text**: Custom pixel-mapped font rendering for "PROMPTING IS ALL YOU NEED"
- **🏓 Smart Paddles**: Four paddles (top, bottom, left, right) that intelligently track the ball
- **⚡ Physics-Based Collisions**: Realistic ball bouncing with directional collision detection

### User Experience
- **🌓 Theme Toggle**: Seamless dark/light mode switching with theme-aware colors
- **🔊 Sound Effects**: Synthesized audio feedback for different collision types:
  - Sine waves for pixel hits (440 Hz)
  - Square waves for paddle hits (330 Hz)
  - Triangle waves for wall bounces (220 Hz)
- **🔇 Mute Toggle**: Optional sound muting for quiet browsing
- **📱 Fully Responsive**: Intelligent scaling system that maintains gameplay across all screen sizes
- **♿ Accessible**: Proper ARIA labels for screen readers

### Technical Excellence
- **🎭 Smooth 60fps Animation**: Powered by `requestAnimationFrame`
- **🎨 Canvas Rendering**: Hardware-accelerated 2D graphics
- **📐 Dynamic Scaling**: Automatic resize handling with proportional element scaling
- **🔄 State Persistence**: Theme and mute preferences persist across sessions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

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
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.2](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, reusable components built on Radix UI
- **[Lucide React](https://lucide.dev/)** - Icon system
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Canvas & Animation
- **HTML5 Canvas API** - 2D rendering context
- **Web Audio API** - Real-time sound synthesis
- **requestAnimationFrame** - Optimized animation loop

### Additional Libraries
- **[class-variance-authority](https://cva.style/docs)** - Component variant management
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Smart Tailwind class merging

## 🎯 How It Works

### Pixel Text Rendering
The text "PROMPTING IS ALL YOU NEED" is rendered using a custom pixel mapping system. Each letter is defined as a 2D array in the `PIXEL_MAP` object:

```typescript
P: [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
]
```

Individual pixels are rendered as squares on the canvas and change color when hit by the ball.

### Game Physics
- **Ball Movement**: The ball moves with constant velocity (`dx`, `dy`) updated each frame
- **Collision Detection**: AABB (Axis-Aligned Bounding Box) collision detection for:
  - Wall boundaries
  - Paddle surfaces (vertical and horizontal)
  - Individual pixel blocks
- **Bounce Direction**: Calculated based on which side of an object is hit

### Paddle AI
Paddles use smooth easing to track the ball:
```typescript
paddle.y += (paddle.targetY - paddle.y) * 0.1
```

This creates natural, fluid movement rather than instant snapping.

### Responsive Scaling
The game uses a uniform scaling system that:
1. Calculates a scale factor based on viewport size
2. Scales all game elements (pixels, ball, paddles) proportionally
3. Maintains gameplay balance across different screen sizes
4. Recalculates positions relative to the center point during resize

### Sound System
Uses the Web Audio API to synthesize sounds in real-time:
- **Oscillator types**: Sine, square, and triangle waves
- **Gain envelope**: Exponential ramp for natural sound decay
- **Context-aware**: Respects mute state without recreating audio context

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── mute-provider.tsx    # Mute state management
│   ├── mute-toggle.tsx      # Mute button component
│   ├── theme-provider.tsx   # Theme context provider
│   ├── theme-toggle.tsx     # Theme switcher component
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/
│   └── utils.ts             # Utility functions
├── prompting.tsx            # Main game component
└── public/                  # Static assets
```

## 🎨 Customization

### Adjusting Game Speed
Modify the `BALL_SPEED` constant in `prompting.tsx`:
```typescript
const BALL_SPEED = 6 * scale // Increase for faster gameplay
```

### Changing Colors
Theme colors are defined in the `getColors()` function. Edit the hex values to customize:
```typescript
const getColors = () => {
  const isDark = resolvedThemeRef.current === 'dark'
  return {
    COLOR: isDark ? "#FFFFFF" : "#000000",
    HIT_COLOR: isDark ? "#333333" : "#CCCCCC",
    // ... more colors
  }
}
```

### Adding New Letters
Extend the `PIXEL_MAP` object with new letter patterns:
```typescript
F: [
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
]
```

## 🐛 Known Issues & Limitations

- Audio API requires user interaction in some browsers (handled gracefully)
- Performance may vary on low-end devices with small pixel sizes
- Canvas rendering is CPU-bound (no WebGL acceleration)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: [@ctatedev](https://github.com/ctatedev)

---

<p align="center">
  Made with ❤️ using v0.dev
</p>
