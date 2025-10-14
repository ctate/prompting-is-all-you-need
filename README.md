<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  <strong>An interactive pixel-art pong game built with React, Canvas API, and Next.js</strong>
  <br />
  <em>Watch as a self-playing animation bounces around pixel text with retro sound effects</em>
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
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-project-structure"><strong>Structure</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>
<br/>

## About

**Prompting Is All You Need** is a mesmerizing self-playing pong animation that combines nostalgic arcade aesthetics with modern web technologies. The project features a bouncing ball that interacts with pixel-rendered text displaying "PROMPTING IS ALL YOU NEED", complete with automatic paddle tracking and retro sound effects powered by the Web Audio API.

This project showcases the power of creative prompting and demonstrates how simple concepts can create engaging visual experiences through code.

## Demo

Simply load the page and watch the magic happen! The animation runs automatically with:
- **Automatic Ball Movement**: Bounces continuously around the screen
- **Smart Paddle AI**: Four paddles automatically track and follow the ball
- **Interactive Pixels**: Text changes color on ball collision
- **Retro Sound Effects**: 8-bit style audio feedback for collisions
- **Fully Responsive**: Adapts seamlessly to any screen size

## Features

### Visual Effects
- **Pixel-Perfect Text Rendering**: Custom pixel art font system for "PROMPTING IS ALL YOU NEED"
- **Dynamic Color Changes**: Pixels transition from white to grey when hit by the ball
- **Smooth Ball Physics**: Realistic collision detection and bounce mechanics
- **Responsive Scaling**: Automatically adjusts to viewport dimensions

### Game Mechanics
- **Four-Way Paddle System**: Vertical and horizontal paddles on all screen edges
- **AI Paddle Tracking**: Smooth, predictive paddle movement that follows the ball
- **Real-time Physics**: Collision detection with walls, paddles, and individual pixels
- **Perpetual Motion**: Endless animation loop with no manual interaction needed

### Technical Excellence
- **Web Audio Integration**: Dynamic sound synthesis for collisions (3 different sound types)
- **Canvas API**: High-performance rendering using native canvas operations
- **Mobile-Friendly**: Touch-screen compatible and fully responsive
- **Accessibility**: Proper ARIA labels for screen readers
- **Minimalist Design**: Clean black and white aesthetic

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm (or npm/yarn)
- A modern web browser with Canvas API support

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
   Navigate to [http://localhost:3000](http://localhost:3000) to see the animation

### Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

### Graphics & Animation
- **Canvas API** - Native browser rendering for high performance
- **requestAnimationFrame** - Smooth 60fps animation loop
- **Web Audio API** - Real-time sound synthesis

### Additional Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[date-fns](https://date-fns.org/)** - Modern date utility library
- **[Recharts](https://recharts.org/)** - Composable charting library

## Project Structure

```
my-v0-project/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main page component
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   └── theme-provider.tsx   # Theme context
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions
├── prompting.tsx           # Main game component
├── public/                 # Static assets
├── styles/                 # Additional styles
└── package.json           # Dependencies
```

### Key Files

- **`prompting.tsx`** - The heart of the application containing all game logic, rendering, and physics
- **`app/page.tsx`** - Entry point that renders the PromptingIsAllYouNeed component
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration

## How It Works

### Pixel Text Rendering
The text is rendered using a custom pixel map system where each letter is defined as a 2D array of 1s and 0s:

```typescript
P: [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
]
```

Each pixel is tracked individually with position, size, and hit state.

### Physics System
- **Ball Movement**: Updates position based on velocity vectors (dx, dy)
- **Collision Detection**: Checks intersection between ball and pixels/paddles/walls
- **Bounce Mechanics**: Reverses velocity on collision based on impact direction
- **Paddle AI**: Smoothly interpolates paddle position toward ball location

### Sound Design
Three distinct sounds using Web Audio API:
- **Wall Bounce**: 220Hz triangle wave (0.1s duration)
- **Paddle Hit**: 330Hz square wave (0.15s duration)
- **Pixel Hit**: 440Hz sine wave (0.08s duration)

### Responsive Scaling
The entire game scales based on viewport size:
1. Calculates scale factor from viewport dimensions
2. Adjusts all game elements proportionally
3. Maintains text centering and proper spacing
4. Recalculates on window resize

## Use Cases

- **Portfolio Piece**: Showcase creative coding skills
- **Landing Page**: Eye-catching hero section for websites
- **Interactive Art**: Digital art installation or exhibition
- **Educational Demo**: Teaching canvas API and game physics
- **Inspiration**: Starting point for similar animation projects

## Customization

### Colors
Edit constants in `prompting.tsx`:
```typescript
const COLOR = "#FFFFFF"         // Pixel color
const HIT_COLOR = "#333333"     // Hit pixel color
const BACKGROUND_COLOR = "#000000" // Background
const BALL_COLOR = "#FFFFFF"    // Ball color
const PADDLE_COLOR = "#FFFFFF"  // Paddle color
```

### Text Content
Modify the `words` array:
```typescript
const words = ["YOUR TEXT", "GOES HERE"]
```

### Physics
Adjust ball speed and paddle responsiveness:
```typescript
const BALL_SPEED = 6 * scale  // Ball velocity
paddle.y += (paddle.targetY - paddle.y) * 0.1 // Paddle smoothing
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)
- GitHub: Check out more projects

---

<p align="center">
  <strong>Built with love using v0.dev</strong>
  <br />
  <em>Prompting Is All You Need - Because sometimes, it really is.</em>
</p>
