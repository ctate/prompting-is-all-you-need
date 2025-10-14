<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  <strong>A mesmerizing self-playing pong game with pixel art typography and retro sound effects</strong>
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-demo"><strong>Demo</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-technology-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-project-structure"><strong>Structure</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>

<br/>

## About

**Prompting Is All You Need** is a captivating autonomous pong game that creates an endless hypnotic animation. Watch as a white ball bounces across the screen, interacting with pixel-art text that reads "PROMPTING IS ALL YOU NEED". The game features intelligent paddles that automatically track the ball's movement, creating a perpetual gameplay experience.

This project showcases the power of creative coding, combining classic game mechanics with modern web technologies to create an engaging visual experience. Each pixel collision triggers subtle sound effects, adding an auditory dimension to the visual spectacle.

## Demo

Visit the [live demo](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D) to see the game in action.

## Features

### Visual & Interactive
- **Self-Playing Gameplay** - Fully autonomous ball and paddle movement
- **Pixel Art Typography** - Custom-rendered text using individual pixels
- **Dynamic Color Changes** - Pixels change from white to gray when struck by the ball
- **Intelligent Paddles** - Four paddles (top, bottom, left, right) that automatically track the ball
- **Smooth Animations** - 60 FPS animations powered by `requestAnimationFrame`
- **Responsive Design** - Automatically scales to any screen size while maintaining aspect ratios

### Technical
- **Canvas API Rendering** - Hardware-accelerated 2D graphics
- **Retro Sound Effects** - Web Audio API generates authentic pong sounds
  - Wall bounces (220 Hz triangle wave)
  - Paddle hits (330 Hz square wave)
  - Pixel collisions (440 Hz sine wave)
- **Collision Detection** - Precise pixel-perfect collision algorithms
- **Minimalist Aesthetic** - Clean black and white color scheme

## Getting Started

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
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action.

### Building for Production

```bash
pnpm build
pnpm start
```

## Technology Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI component library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set

### Graphics & Animation
- **HTML5 Canvas API** - 2D rendering
- **Web Audio API** - Dynamic sound generation
- **requestAnimationFrame** - Smooth 60 FPS animations

### Additional Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[date-fns](https://date-fns.org/)** - Modern date utility library
- **[Recharts](https://recharts.org/)** - Composable charting library

## Project Structure

```
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── theme-provider.tsx    # Theme context provider
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── prompting.tsx             # Main game component
└── README.md
```

### Key Files

- **`prompting.tsx`** - Contains all game logic:
  - Canvas rendering and animation loop
  - Ball physics and collision detection
  - Paddle AI and movement
  - Pixel map definitions for text rendering
  - Sound generation using Web Audio API

## Customization

### Modifying Colors

Edit the constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"        // Pixel color (default)
const HIT_COLOR = "#333333"    // Pixel color when hit
const BACKGROUND_COLOR = "#000000"  // Background
const BALL_COLOR = "#FFFFFF"   // Ball color
const PADDLE_COLOR = "#FFFFFF" // Paddle color
```

### Changing Text

Modify the `words` array in the `initializeGame` function:

```typescript
const words = ["YOUR TEXT", "GOES HERE"]
```

Note: Only letters defined in the `PIXEL_MAP` object will render (A-Z currently supported).

### Adjusting Game Physics

Tune the gameplay by modifying these values in `initializeGame`:

```typescript
const BALL_SPEED = 6 * scale    // Ball velocity
const paddleLength = 10 * adjustedLargePixelSize  // Paddle size
```

## Sound Effects

The game generates retro-style sound effects using the Web Audio API:

- **Wall Collisions**: 220 Hz triangle wave (100ms)
- **Paddle Hits**: 330 Hz square wave (150ms)  
- **Pixel Hits**: 440 Hz sine wave (80ms)

All sounds use exponential gain ramping for smooth audio decay.

## How It Works

1. **Initialization**: The game creates pixel arrays from letter definitions to spell out text
2. **Animation Loop**: `requestAnimationFrame` updates game state at 60 FPS
3. **Physics Engine**: Ball velocity updated each frame with collision detection
4. **AI Paddles**: Paddles smoothly interpolate toward ball position using easing
5. **Rendering**: Canvas API draws all elements (pixels, ball, paddles) each frame
6. **Responsive Scaling**: All elements scale proportionally to viewport size

## License

This project is open source and available under the MIT License.

## Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- Website: [v0.dev](https://v0.dev)

---

<p align="center">
  Made with Next.js and Canvas API
</p>
