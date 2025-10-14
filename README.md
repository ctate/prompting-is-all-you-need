<div align="center">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600">
  
  # Prompting Is All You Need
  
  <p><strong>An interactive pixel-based pong game with dynamic text collision and Web Audio API</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Canvas API](https://img.shields.io/badge/Canvas-API-orange?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
  
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
    </a>
  </p>
</div>

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Customization](#customization)
- [Responsive Design](#responsive-design)
- [Audio Features](#audio-features)
- [Development](#development)
- [License](#license)
- [Author](#author)

## Features

- **Self-Playing Pong Game** - Watch as the ball bounces around with intelligent paddle AI
- **Pixel-Based Text Rendering** - Custom pixel font system for "PROMPTING IS ALL YOU NEED"
- **Web Audio Integration** - Dynamic sound effects for collisions and interactions
- **Fully Responsive** - Adapts seamlessly to any screen size and orientation
- **Smooth Animations** - 60fps gameplay using requestAnimationFrame
- **Interactive Collisions** - Pixels change color when hit by the ball
- **Audio Feedback** - Different sounds for wall bounces, paddle hits, and pixel collisions
- **Minimalist Design** - Clean black and white aesthetic with modern UI

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action!

## Installation

### Prerequisites

- Node.js 18.0 or later
- npm, pnpm, or yarn package manager

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/prompting-is-all-you-need.git
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## How It Works

The game is built using a combination of modern web technologies:

### Core Game Loop
- **Canvas Rendering**: Uses HTML5 Canvas API for pixel-perfect graphics
- **Animation Frame**: Leverages `requestAnimationFrame` for smooth 60fps animations
- **Collision Detection**: Custom algorithms for ball-pixel and ball-paddle interactions
- **Audio Synthesis**: Web Audio API for real-time sound generation

### Pixel Text System
- **Custom Font Mapping**: Each letter is defined as a 2D array of pixels
- **Dynamic Scaling**: Text automatically scales based on viewport size
- **Hit Detection**: Individual pixels can be hit and change color
- **Responsive Layout**: Text reflows and scales for different screen sizes

### AI Paddle System
- **Predictive Movement**: Paddles anticipate ball trajectory
- **Smooth Following**: Gradual acceleration/deceleration for natural movement
- **Boundary Detection**: Paddles stay within screen bounds
- **Multi-Directional**: Both vertical and horizontal paddles

## Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Graphics & Animation
- **HTML5 Canvas API** - Low-level 2D graphics rendering
- **requestAnimationFrame** - Smooth animation loop
- **Custom Pixel Engine** - Hand-crafted pixel font system

### Audio
- **Web Audio API** - Real-time audio synthesis
- **Oscillator Nodes** - Dynamic sound generation
- **Gain Control** - Volume and envelope management

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **CSS-in-JS** - Component-scoped styling
- **Responsive Design** - Mobile-first approach

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## Customization

### Colors
You can easily customize the game's color scheme by modifying these constants in `prompting.tsx`:

```typescript
const COLOR = "#FFFFFF"           // Default pixel color
const HIT_COLOR = "#333333"       // Hit pixel color
const BACKGROUND_COLOR = "#000000" // Background color
const BALL_COLOR = "#FFFFFF"      // Ball color
const PADDLE_COLOR = "#FFFFFF"    // Paddle color
```

### Game Speed
Adjust the ball speed by modifying the `BALL_SPEED` constant:

```typescript
const BALL_SPEED = 6 * scale  // Increase for faster gameplay
```

### Audio Settings
Customize sound effects by modifying the `playSound` function calls:

```typescript
// Wall bounce sound
playSound(audioContextRef.current, 220, 0.1, "triangle")

// Paddle hit sound  
playSound(audioContextRef.current, 330, 0.15, "square")

// Pixel hit sound
playSound(audioContextRef.current, 440, 0.08, "sine")
```

## Responsive Design

The game automatically adapts to different screen sizes:

- **Desktop**: Full-screen experience with large text and paddles
- **Tablet**: Scaled appropriately for touch interfaces
- **Mobile**: Optimized layout with smaller elements
- **Ultrawide**: Maintains aspect ratio and readability

### Breakpoints
- **Small**: < 768px (mobile)
- **Medium**: 768px - 1024px (tablet)
- **Large**: > 1024px (desktop)

## Audio Features

### Sound Effects
- **Wall Bounces**: Triangle wave at 220Hz
- **Paddle Hits**: Square wave at 330Hz  
- **Pixel Collisions**: Sine wave at 440Hz

### Audio Context
- **Auto-initialization**: Audio context starts on first user interaction
- **Cross-browser Support**: Works on Chrome, Firefox, Safari, and Edge
- **Performance Optimized**: Minimal CPU usage for audio generation

## Development

### Project Structure
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI component library
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prompting.tsx         # Main game component
└── public/               # Static assets
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [Apache License 2.0](LICENSE).

## Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">
  <p>Built with Next.js, React, and Canvas API</p>
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">Open in v0</a> •
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a>
  </p>
</div>
