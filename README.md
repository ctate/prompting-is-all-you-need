<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  <strong>A mesmerizing, self-playing pixel-based pong game with generative sound effects</strong>
  <br/>
  Built with React, Canvas API, and Next.js
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## About

**Prompting Is All You Need** is a captivating visual experience that combines the nostalgia of classic Pong with modern web technologies. This self-playing animation creates an endless, hypnotic loop where a ball bounces around the screen, interacting with pixel-rendered text and AI-controlled paddles.

The project demonstrates the power of the Canvas API and showcases how complex animations can be created with clean, performant code. Each collision produces dynamically generated sound effects, creating an immersive audiovisual experience.

## Demo

Simply load the page and watch the magic happen! The animation runs automatically with no user interaction required. The experience is:
- **Fully responsive** - Adapts beautifully to any screen size
- **Interactive** - Pixels change color when struck by the ball
- **Intelligent** - Paddles automatically track and follow the ball's movement
- **Auditory** - Generates unique sound effects for each collision type

## Features

### Visual Effects
- **Pixel-Perfect Text Rendering** - Custom pixel font displaying "PROMPTING IS ALL YOU NEED"
- **Dynamic Color Changes** - Pixels transition from white to gray when hit
- **Smooth Animations** - 60 FPS performance using `requestAnimationFrame`
- **Responsive Design** - Automatically scales to fit any viewport

### Game Mechanics
- **Self-Playing Pong** - Fully autonomous gameplay with no user input
- **AI Paddle Movement** - Four paddles intelligently track the ball
- **Advanced Collision Detection** - Precise pixel-level collision physics
- **Smart Ball Physics** - Directional bouncing based on collision angles

### Audio Experience
- **Generative Sound Effects** - Web Audio API creates unique sounds for:
  - Pixel collisions (440 Hz sine wave)
  - Paddle hits (330 Hz square wave)
  - Wall bounces (220 Hz triangle wave)
- **Dynamic Audio Context** - Sounds adapt to gameplay in real-time

### Technical Excellence
- **TypeScript** - Fully typed for robust code
- **React Hooks** - Modern React patterns with `useRef` and `useEffect`
- **Next.js 15** - Server-side rendering and optimal performance
- **Zero Runtime Dependencies** - Pure Canvas API implementation

## Tech Stack

### Core Technologies
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first styling

### Animation & Graphics
- **Canvas API** - Native browser 2D rendering
- **Web Audio API** - Generative sound synthesis
- **requestAnimationFrame** - Smooth 60 FPS animation loop

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **shadcn/ui** - High-quality component library (included but not used in main animation)
- **Radix UI** - Accessible component primitives (available for extensions)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-v0-project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## How It Works

### Pixel Text Rendering
The text is rendered using a custom pixel map system. Each letter is defined as a 2D array where `1` represents a pixel and `0` represents empty space:

```typescript
P: [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
]
```

### Collision Detection
Three types of collisions are handled:
1. **Pixel Collisions** - Ball intersects with text pixels, causing color change
2. **Paddle Collisions** - Ball bounces off the four tracking paddles
3. **Wall Collisions** - Ball bounces off screen edges

### AI Paddle Movement
Paddles use smooth interpolation to track the ball:
```typescript
paddle.targetY = ball.y - paddle.height / 2
paddle.y += (paddle.targetY - paddle.y) * 0.1
```

### Sound Generation
Unique sounds are created for each interaction type using the Web Audio API with different waveforms and frequencies.

## Code Structure

```
├── app/
│   ├── page.tsx          # Main entry point
│   └── layout.tsx        # App layout
├── prompting.tsx         # Core game component
├── components/           # UI components (shadcn/ui)
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Customization

You can easily customize the experience by modifying constants in `prompting.tsx`:

- `COLOR` - Pixel text color (default: white)
- `HIT_COLOR` - Color when pixels are hit (default: dark gray)
- `BALL_SPEED` - Ball velocity multiplier
- `PIXEL_MAP` - Add new letters or modify existing ones
- Sound frequencies and waveforms in `playSound()` calls

## License

This project is open source and available for educational and personal use.

## Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- v0 Community: [Project Page](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)

---

<p align="center">
  <strong>Made with love using v0.dev</strong>
  <br/>
  <sub>A demonstration of creative coding with React and Canvas API</sub>
</p>
