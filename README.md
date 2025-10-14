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
  <a href="#-quick-start"><strong>Quick Start</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>
<br/>

## 🎮 About

**Prompting Is All You Need** is an interactive pixel-based pong game that demonstrates the power of creative coding and modern web technologies. Watch as a ball autonomously bounces around the screen, colliding with custom pixel-art text spelling "PROMPTING IS ALL YOU NEED" while four intelligent paddles track its movement. 

This project showcases:
- **Real-time physics simulation** with collision detection
- **Procedural audio generation** using the Web Audio API
- **Responsive canvas rendering** that adapts to any screen size
- **Custom pixel art font** rendered from scratch
- **Smooth animations** powered by `requestAnimationFrame`

Perfect for demonstrating canvas capabilities, animation techniques, or just enjoying a hypnotic visual experience!

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and pnpm installed

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd prompting-is-all-you-need

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the animation in action!

### Build for Production

```bash
# Create an optimized production build
pnpm build

# Start the production server
pnpm start
```

## ✨ Features

### Visual Experience
- 🎨 **Pixel Art Text Rendering** - Custom-built pixel font with letters dynamically rendered on canvas
- 🎱 **Dynamic Ball Physics** - Realistic ball movement with velocity and collision detection
- 🎯 **Smart Paddles** - Four paddles (top, bottom, left, right) that intelligently track the ball
- 🌈 **Color Changes** - Pixels change color from white to gray when hit by the ball
- 📱 **Fully Responsive** - Automatically scales to fit any screen size and orientation
- 🖤 **Minimalist Design** - Clean black and white aesthetic with smooth animations

### Audio Experience
- 🔊 **Retro Sound Effects** - Procedurally generated sounds for:
  - Wall collisions (triangle wave at 220Hz)
  - Paddle hits (square wave at 330Hz)
  - Pixel collisions (sine wave at 440Hz)
- 🎵 **Web Audio API** - Native browser audio synthesis with no external dependencies

### Technical Excellence
- ⚡ **Smooth 60fps Animation** - Uses `requestAnimationFrame` for optimal performance
- 🎯 **Precise Collision Detection** - Accurate physics for ball-paddle and ball-pixel interactions
- 🔄 **Adaptive Scaling** - Dynamic sizing based on viewport dimensions
- ♿ **Accessibility** - Proper ARIA labels for screen readers

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS framework

### Canvas & Animation
- **HTML5 Canvas API** - Hardware-accelerated 2D rendering
- **requestAnimationFrame** - Browser-optimized animation loop
- **Web Audio API** - Real-time audio synthesis

### UI Components (Included)
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, customizable UI components
- **[Lucide React](https://lucide.dev/)** - Modern icon library

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic vendor prefixing

## 🎯 How It Works

### Game Loop Architecture
The game uses a classic game loop pattern:

1. **Initialization** (`initializeGame`)
   - Creates pixel grid for text "PROMPTING IS ALL YOU NEED"
   - Initializes ball position and velocity
   - Sets up four paddles (left, right, top, bottom)
   - Calculates responsive scaling

2. **Update** (`updateGame`)
   - Moves ball based on velocity
   - Detects collisions with walls, paddles, and pixels
   - Updates paddle positions to track ball
   - Triggers sound effects on collisions

3. **Render** (`drawGame`)
   - Clears canvas
   - Draws all pixels (white or gray depending on hit state)
   - Draws ball as a circle
   - Draws four paddles

4. **Loop** (`gameLoop`)
   - Repeats update and render using `requestAnimationFrame`

### Pixel Font System
Each letter is defined as a 2D array in `PIXEL_MAP`:
```typescript
P: [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
]
```
Where `1` represents a filled pixel and `0` represents empty space.

### Collision Detection
- **Wall Collision**: Checks if ball exceeds canvas boundaries
- **Paddle Collision**: AABB (Axis-Aligned Bounding Box) detection
- **Pixel Collision**: AABB detection with directional bounce calculation

## 📂 Project Structure

```
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── theme-provider.tsx    # Theme context
├── prompting.tsx             # Main game component
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── package.json              # Dependencies
└── README.md                 # You are here!
```

## 🎨 Customization

You can easily customize the game by modifying these constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"           // Pixel color
const HIT_COLOR = "#333333"       // Color when pixel is hit
const BACKGROUND_COLOR = "#000000" // Background color
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
const BALL_SPEED = 6              // Ball velocity multiplier
```

Or change the text by modifying the `words` array:
```typescript
const words = ["YOUR", "CUSTOM TEXT"]
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ by **Chris Tate**

- Twitter/X: [@ctatedev](https://x.com/ctatedev)
- v0: [View Project](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)

---

<p align="center">
  <strong>Built with v0 by Vercel</strong><br>
  A demonstration of creative coding with React and Canvas
</p>
