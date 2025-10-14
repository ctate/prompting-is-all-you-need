<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  An interactive pixel-based pong game built with React, Canvas API, and Next.js
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

**Prompting Is All You Need** is a mesmerizing self-playing pong game that brings pixel art to life. Watch as a ball bounces dynamically around the screen, interacting with pixel-rendered text and AI-controlled paddles. This project demonstrates the power of canvas-based animations and responsive design, creating an engaging visual experience that adapts seamlessly to any screen size.

The game features a minimalist black-and-white aesthetic with smooth animations, collision detection, and reactive audio feedback, making it both a technical showcase and an entertaining visual display.

## ✨ Features

### Core Gameplay
- **Self-Playing Animation**: Fully automated game that plays itself infinitely
- **Dynamic Pixel Text**: Custom pixel-art rendering of "PROMPTING IS ALL YOU NEED"
- **Intelligent Paddles**: Four paddles (top, bottom, left, right) that automatically track the ball
- **Collision Detection**: Precise collision physics for ball-to-pixel and ball-to-paddle interactions

### Visual & Audio
- **Minimalist Aesthetic**: Clean black and white color scheme
- **Reactive Pixels**: Text pixels change color when hit by the ball
- **Audio Feedback**: Dynamic sound effects for different collision types:
  - Wall bounces (220 Hz triangle wave)
  - Paddle hits (330 Hz square wave)
  - Pixel collisions (440 Hz sine wave)
- **Smooth Animations**: 60 FPS rendering using `requestAnimationFrame`

### Responsive Design
- **Fully Responsive**: Automatically scales to any screen size
- **Mobile-Friendly**: Works seamlessly on desktop, tablet, and mobile devices
- **Adaptive Scaling**: Text and game elements resize proportionally

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
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
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action.

### Build for Production

```bash
# Create an optimized production build
pnpm build

# Run the production build locally
pnpm start
```

### Available Scripts

| Command       | Description                                      |
|---------------|--------------------------------------------------|
| `pnpm dev`    | Start development server on `http://localhost:3000` |
| `pnpm build`  | Create production build                          |
| `pnpm start`  | Run production server                            |
| `pnpm lint`   | Run ESLint for code quality                      |

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.2](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Graphics & Animation
- **Canvas API** - Native browser API for 2D rendering
- **Web Audio API** - Programmatic audio generation for sound effects
- **requestAnimationFrame** - Smooth 60 FPS animations

### Additional Tools
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** - Form validation
- **[Recharts](https://recharts.org/)** - Chart components

## 🎯 How It Works

### Game Architecture

The game is built using a custom Canvas-based rendering system with the following components:

1. **Pixel Rendering System**
   - Each letter is defined as a 2D array in `PIXEL_MAP`
   - Pixels are rendered as small squares with collision detection
   - Hit pixels change color to provide visual feedback

2. **Ball Physics**
   - Ball starts in the top-right corner
   - Velocity is calculated using dx/dy vectors
   - Speed scales with screen size for consistent gameplay
   - Collision detection uses radius-based bounding boxes

3. **Paddle AI**
   - Four paddles positioned at screen edges
   - Each paddle tracks the ball position
   - Smooth movement using interpolation (`targetY * 0.1`)
   - Prevents paddles from moving off-screen

4. **Audio System**
   - Uses Web Audio API for sound generation
   - Different frequencies/waveforms for different events
   - Low volume (0.1 gain) for ambient experience

5. **Responsive Scaling**
   - Base scale calculated from viewport dimensions
   - All game elements scale proportionally
   - Text automatically adjusts to fit 80% of screen width

### Code Structure

```
├── app/
│   ├── page.tsx              # Main entry point
│   ├── layout.tsx            # App layout
│   └── globals.css           # Global styles
├── prompting.tsx             # Core game logic
├── components/               # Reusable UI components
│   └── ui/                   # Shadcn UI components
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Customization

You can easily customize the game by modifying constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"           // Pixel color
const HIT_COLOR = "#333333"       // Hit pixel color
const BACKGROUND_COLOR = "#000000" // Background
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
```

Change the displayed text by editing the `words` array:
```typescript
const words = ["PROMPTING", "IS ALL YOU NEED"]
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Chris Tate**
- Twitter: [@ctatedev](https://x.com/ctatedev)

---

<p align="center">Made with ❤️ using Next.js and Canvas API</p>
